import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

if (!apiKey) {
  console.error("❌ Erreur : Clé GEMINI_API_KEY non trouvée !");
  process.exit(1);
}

function pcmToWav(pcmBuffer, sampleRate = 24000, numChannels = 1, bitDepth = 16) {
  const byteRate = (sampleRate * numChannels * bitDepth) / 8;
  const blockAlign = (numChannels * bitDepth) / 8;
  const dataSize = pcmBuffer.length;
  const chunkSize = 36 + dataSize;
  const header = Buffer.alloc(44);

  header.write('RIFF', 0);
  header.writeUInt32LE(chunkSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitDepth, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcmBuffer]);
}

const MODELS = [
  'gemini-2.5-pro-preview-tts',
  'gemini-3.1-flash-tts-preview',
  'gemini-2.5-flash-preview-tts'
];

const DIRECTIVE = "[Personnage: Un vieux sage centenaire, calme et philosophique, voix profonde, rythme lent avec des pauses marquées après chaque phrase].\n\n";

async function callTts(promptText, voiceName = 'Algenib') {
  for (const model of MODELS) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: voiceName
            }
          }
        }
      }
    };

    let retries = 3;
    while (retries > 0) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.status === 429) {
          const errData = await response.json().catch(() => ({}));
          const msg = errData?.error?.message || '';
          if (msg.includes('per_day') || msg.includes('PerDay')) {
            console.warn(`  ⚠️ [${model}] Quota quotidien atteint, passage au modèle suivant.`);
            break;
          }
          console.warn(`  ⏳ [${model}] Rate limit temporaire, pause de 4 secondes avant nouvel essai...`);
          await new Promise(r => setTimeout(r, 4000));
          retries--;
          continue;
        }

        if (!response.ok) {
          const errTxt = await response.text();
          throw new Error(`[${model}] HTTP ${response.status}: ${errTxt}`);
        }

        const data = await response.json();
        const candidate = data.candidates?.[0];
        const audioPart = candidate?.content?.parts?.find(
          (p) => p.inlineData && p.inlineData.mimeType?.startsWith('audio/')
        );

        if (!audioPart || !audioPart.inlineData?.data) {
          throw new Error(`[${model}] Aucune donnée audio retournée`);
        }

        return {
          model,
          pcmBuffer: Buffer.from(audioPart.inlineData.data, 'base64')
        };
      } catch (err) {
        if (retries <= 1) {
          console.warn(`  ⚠️ Échec pour ${model}: ${err.message}`);
          break;
        }
        retries--;
        await new Promise(r => setTimeout(r, 2000));
      }
    }
  }

  throw new Error('Tous les modèles ont échoué');
}

async function main() {
  const exportPath = path.resolve(__dirname, 'dialogues_export.json');
  const rawData = JSON.parse(fs.readFileSync(exportPath, 'utf8'));
  const allBeats = rawData.dialoguesList;

  const sageBeats = allBeats.filter(b => b.speaker === 'narration' || b.speaker === 'savant');
  console.log(`🎙️ Début de la régénération des ${sageBeats.length} répliques du Vieux Sage avec la voix 'Algenib' & la directive Centenaire...\n`);

  // Suivi des progrès pour reprise automatique si besoin
  const progressFile = path.resolve(__dirname, 'sage_regen_progress.json');
  let completed = [];
  if (fs.existsSync(progressFile)) {
    try {
      completed = JSON.parse(fs.readFileSync(progressFile, 'utf8'));
    } catch {
      completed = [];
    }
  }

  let successCount = completed.length;
  let failCount = 0;

  for (let i = 0; i < sageBeats.length; i++) {
    const beat = sageBeats[i];
    if (completed.includes(beat.id)) {
      console.log(`⏩ [${i + 1}/${sageBeats.length}] Déjà traité : [Ch.${beat.chapter}] ${beat.id}`);
      continue;
    }

    const outDir = path.resolve(__dirname, '..', 'public', 'audio', `ch${beat.chapter}`);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    const mp3File = path.join(outDir, `${beat.id}.mp3`);
    const wavFile = path.join(outDir, `${beat.id}.wav`);

    const text = beat.speechText || beat.rawText;
    console.log(`🎙️ [${i + 1}/${sageBeats.length}] [Ch.${beat.chapter}] ${beat.id} : "${text.slice(0, 45)}..."`);

    const promptText = DIRECTIVE + text;

    try {
      const { model, pcmBuffer } = await callTts(promptText, 'Algenib');
      const wavBuffer = pcmToWav(pcmBuffer, 24000, 1, 16);

      fs.writeFileSync(mp3File, wavBuffer);
      if (fs.existsSync(wavFile)) fs.writeFileSync(wavFile, wavBuffer);

      console.log(`   ✅ Enregistré (${(wavBuffer.length / 1024).toFixed(1)} Ko) via [${model}]`);
      completed.push(beat.id);
      fs.writeFileSync(progressFile, JSON.stringify(completed, null, 2));
      successCount++;
    } catch (err) {
      console.error(`   ❌ Échec sur ${beat.id}:`, err.message);
      failCount++;
    }

    // Pause de confort entre les requêtes pour respecter le quota RPM
    await new Promise(r => setTimeout(r, 2500));
  }

  console.log(`\n========================================`);
  console.log(`🎉 Régénération terminée ! Succès: ${successCount} / ${sageBeats.length} | Échecs: ${failCount}`);
  console.log(`========================================\n`);

  if (successCount === sageBeats.length && fs.existsSync(progressFile)) {
    fs.unlinkSync(progressFile);
  }
}

main();
