/**
 * Générateur Audio Studio Gemini 2.5 Flash TTS pour Nour - La Voie de la Sagesse
 * 
 * Utilise la clé API Gemini officielle de l'utilisateur pour générer
 * l'intégralité des 239 répliques du jeu avec les voix de cinéma Gemini :
 * - Le Sage Narrateur : Aoede (Noble, sage, posé)
 * - Noura la Mère : Kore (Maternelle, douce, apaisante)
 * - Othmân : Puck (Jeune garçon vif et curieux)
 * - Le Waswâs : Fenrir (Sombre, ténébreux)
 * - Le Marchand & Le Jeune : Charon (Expressif, vivant)
 */

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

// En-tête WAV 44 octets pour convertir le flux brut PCM 24000Hz 16-bit mono
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
  header.writeUInt32LE(16, 16); // Subchunk1Size
  header.writeUInt16LE(1, 20);  // Format PCM
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitDepth, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcmBuffer]);
}

const VOICE_MAP = {
  narration: 'Algenib',   // Vieux Sage centenaire (voix rocailleuse, ridée et vénérable)
  savant: 'Algenib',      // Savant / Père
  noura: 'Kore',          // Mère guide
  personnage: 'Puck',     // Othmân (garçon)
  waswas: 'Fenrir',       // Doute / Ombre
  grand_waswas: 'Fenrir', // Grand Climax
  jeune: 'Charon',        // Adolescent
  marchand: 'Charon',     // Marchand
  enfant: 'Puck'          // Zayd (attelle)
};

const dataFile = path.resolve(__dirname, 'dialogues_export.json');
if (!fs.existsSync(dataFile)) {
  console.error("❌ Fichier dialogues_export.json introuvable !");
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
let dialogues = payload.dialoguesList;

// Filtrer par chapitre si demandé en argument (ex: --chapter 1)
const chapterArg = process.argv.find((a, i) => process.argv[i - 1] === '--chapter');
if (chapterArg) {
  const chNum = parseInt(chapterArg, 10);
  dialogues = dialogues.filter((d) => d.chapter === chNum);
  console.log(`🎯 Filtre actif : Chapitre ${chNum} (${dialogues.length} dialogues)n`);
} else {
  console.log(`🎯 Traitement complet : ${dialogues.length} dialoguesn`);
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

const TTS_MODELS = [
  'gemini-3.1-flash-tts-preview',
  'gemini-2.5-pro-preview-tts',
  'gemini-2.5-flash-preview-tts'
];
let currentModelIndex = 0;

for (let i = 0; i < dialogues.length; i++) {
  const d = dialogues[i];
  const targetDir = path.resolve(__dirname, '..', 'public', 'audio', `ch${d.chapter}`);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const targetMp3 = path.join(targetDir, `${d.id}.mp3`);
  const targetWav = path.join(targetDir, `${d.id}.wav`);

  // Sauter si déjà présent
  if (fs.existsSync(targetMp3) && fs.statSync(targetMp3).size > 2000) {
    console.log(`⏩ [${i + 1}/${dialogues.length}] Déjà généré : ${d.id} (${d.characterName})`);
    skipCount++;
    continue;
  }

  const voiceName = VOICE_MAP[d.speaker] || 'Aoede';
  console.log(`🎙️ [${i + 1}/${dialogues.length}] Génération ${d.id} (${d.characterName} ➔ ${voiceName})...`);

  let attempts = 0;
  let success = false;

  while (attempts < 4 && !success) {
    attempts++;
    const currentModel = TTS_MODELS[currentModelIndex];
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: (d.speaker === 'narration' || d.speaker === 'savant')
                ? `[Personnage: Un vieux sage centenaire, calme et philosophique, voix profonde, rythme lent avec des pauses marquées après chaque phrase].\n\n${d.speechText}`
                : d.speechText
            }]
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

      if (!response.ok) {
        const errBody = await response.text();
        throw new Error(`HTTP ${response.status}: ${errBody.slice(0, 150)}`);
      }

      const resData = await response.json();
      const part = resData.candidates?.[0]?.content?.parts?.[0];
      if (!part || !part.inlineData || !part.inlineData.data) {
        throw new Error("Flux audio manquant dans la réponse.");
      }

      const pcmBuffer = Buffer.from(part.inlineData.data, 'base64');
      const wavBuffer = pcmToWav(pcmBuffer, 24000);

      fs.writeFileSync(targetWav, wavBuffer);
      fs.writeFileSync(targetMp3, wavBuffer);

      console.log(`   ✅ Enregistré (${(wavBuffer.length / 1024).toFixed(1)} Ko via ${currentModel})`);
      successCount++;
      success = true;

      // Pause de confort pour respecter les quotas
      await delay(800);
    } catch (err) {
      if (err.message.includes('429')) {
        currentModelIndex = (currentModelIndex + 1) % TTS_MODELS.length;
        console.log(`   🔄 Quota atteint sur ${currentModel}. Bascule immédiate sur ${TTS_MODELS[currentModelIndex]}...`);
        await delay(2000);
        attempts--;
      } else {
        console.error(`   ⚠️ Tentative ${attempts} échouée :`, err.message);
        if (attempts < 4) {
          await delay(2000 * attempts);
        } else {
          errorCount++;
        }
      }
    }
  }
}

console.log('n========================================');
console.log(`🎉 Synthèse terminée !`);
console.log(`- Fichiers générés : ${successCount}`);
console.log(`- Déjà existants : ${skipCount}`);
console.log(`- Échecs : ${errorCount}`);
console.log('========================================n');
