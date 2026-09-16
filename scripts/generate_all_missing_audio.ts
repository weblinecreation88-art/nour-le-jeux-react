import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { CHAPTER_1_SCENES } from '../src/data/chapter1.ts';

const apiKey = process.env.GEMINI_API_KEY || '';

if (!apiKey) {
  console.error("❌ Clé GEMINI_API_KEY non configurée !");
  process.exit(1);
}

function pcmToWav(pcmBuffer: Buffer, sampleRate = 24000, numChannels = 1, bitDepth = 16): Buffer {
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

function cleanTextForSpeech(rawText: string): string {
  if (!rawText) return '';
  return rawText
    .replace(/ﷺ/g, 'paix et bénédictions sur lui')
    .replace(/\(ra\)/gi, "qu'Allah l'agrée")
    .replace(/\(as\)/gi, 'que la paix soit sur lui')
    .replace(/[➔➜➝→]/g, ' puis ')
    .replace(/\(Al-Woudou'\)/gi, 'Al Woudou')
    .replace(/\(Al-Iman\)/gi, 'Al Imane')
    .replace(/\(Salat\)/gi, 'Salat')
    .replace(/\(Zakat\)/gi, 'Zakat')
    .replace(/\(Hajj\)/gi, 'Hadj')
    .replace(/\(Fajr[^)]*\)/gi, '')
    .replace(/[*_#`~«»"]/g, ' ')
    .replace(/\([^)]*\)/g, (match) => {
      const inner = match.slice(1, -1).trim();
      if (/^(soupir|chuchote|pense|triste|joyeux|ému|doute|silence)/i.test(inner)) {
        return '';
      }
      return ` ${inner} `;
    })
    .replace(/\s+/g, ' ')
    .trim();
}

const VOICE_MAP: Record<string, string> = {
  narration: 'Algenib',   // Vieux Sage
  savant: 'Algenib',
  noura: 'Kore',          // Mère guide
  personnage: 'Puck',     // Othmân
  waswas: 'Fenrir',       // Doute
  grand_waswas: 'Fenrir', // Grand Waswâs
  jeune: 'Charon',        // Adolescent
  marchand: 'Charon',     // Commerçant
  enfant: 'Puck'
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function generateAudioForBeat(beatId: string, speaker: string, text: string): Promise<boolean> {
  const clean = cleanTextForSpeech(text);
  if (!clean) return false;

  const voiceName = VOICE_MAP[speaker] || 'Algenib';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-tts-preview:generateContent?key=${apiKey}`;

  let attempts = 0;
  while (attempts < 3) {
    attempts++;
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: clean }]
          }],
          generationConfig: {
            responseModalities: ['AUDIO'],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: {
                  voiceName: voiceName
                }
              }
            }
          }
        })
      });

      if (!res.ok) {
        const errText = await res.text();
        if (res.status === 429) {
          console.warn(`      ⏳ Quota 429 sur ${beatId}. Pause de 5s (tentative ${attempts}/3)...`);
          await delay(5000);
          continue;
        }
        throw new Error(`HTTP ${res.status}: ${errText.slice(0, 100)}`);
      }

      const data: any = await res.json();
      const part = data.candidates?.[0]?.content?.parts?.[0];
      if (!part?.inlineData?.data) {
        throw new Error('Pas de données audio dans la réponse');
      }

      const pcm = Buffer.from(part.inlineData.data, 'base64');
      const wav = pcmToWav(pcm, 24000);

      const outDir = path.resolve('public/audio/ch1');
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

      fs.writeFileSync(path.join(outDir, `${beatId}.wav`), wav);
      fs.writeFileSync(path.join(outDir, `${beatId}.mp3`), wav);

      console.log(`   ✅ [${beatId}] Généré avec succès (${(wav.length / 1024).toFixed(1)} Ko, Voix: ${voiceName})`);
      return true;
    } catch (err: any) {
      console.error(`   ⚠️ Erreur ${beatId} (tentative ${attempts}):`, err.message);
      if (attempts < 3) {
        await delay(2500);
      }
    }
  }

  return false;
}

async function main() {
  console.log('🚀 Démarrage de la génération audio Gemini pour le Chapitre 1...\n');

  // Parse args
  const force = process.argv.includes('--force');
  const sceneArg = process.argv.find((a, i) => process.argv[i - 1] === '--scene');
  const targetScenes = sceneArg ? sceneArg.split(',').map((s) => parseInt(s.trim(), 10)) : null;

  let beatsToProcess: { id: string; speaker: string; text: string; sceneId: number; sceneTitle: string }[] = [];

  for (const scene of CHAPTER_1_SCENES) {
    if (targetScenes && !targetScenes.includes(scene.id)) continue;

    for (const beat of scene.beats) {
      if (beat.type === 'dialogue' && beat.id && beat.text) {
        beatsToProcess.push({
          id: beat.id,
          speaker: beat.speaker,
          text: beat.text,
          sceneId: scene.id,
          sceneTitle: scene.title
        });
      }
    }
  }

  console.log(`📋 Total répliques cibles trouvées : ${beatsToProcess.length}`);

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (let i = 0; i < beatsToProcess.length; i++) {
    const item = beatsToProcess[i];
    const mp3Path = path.resolve('public', 'audio', 'ch1', `${item.id}.mp3`);
    const exists = !force && fs.existsSync(mp3Path) && fs.statSync(mp3Path).size > 2000;

    if (exists) {
      skipCount++;
      continue;
    }

    console.log(`🎙️ [${i + 1}/${beatsToProcess.length}] Traitement de ${item.id} (Scène ${item.sceneId}: ${item.speaker})...`);
    const ok = await generateAudioForBeat(item.id, item.speaker, item.text);
    if (ok) {
      successCount++;
    } else {
      errorCount++;
    }

    // Petite temporisation pour respecter les quotas de débit de l'API
    await delay(1200);
  }

  console.log('\n========================================');
  console.log('🎉 GÉNÉRATION TERMINÉE !');
  console.log(`- Nouveaux fichiers créés : ${successCount}`);
  console.log(`- Déjà existants ignorés  : ${skipCount}`);
  console.log(`- Échecs                  : ${errorCount}`);
  console.log('========================================\n');
}

main().catch(console.error);
