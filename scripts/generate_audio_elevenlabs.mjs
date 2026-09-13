/**
 * Générateur Audio Studio ElevenLabs pour Nour - La Voie de la Sagesse
 * 
 * Utilisation :
 * 1. Définir votre clé API ElevenLabs :
 *    set ELEVENLABS_API_KEY=votre_cle_api  (Windows CMD)
 * 2. Lancer la génération :
 *    node scripts/generate_audio_elevenlabs.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("❌ Erreur : La variable d'environnement ELEVENLABS_API_KEY n'est pas définie !");
  console.error("👉 Exemple : set ELEVENLABS_API_KEY=xi-api-key-...");
  process.exit(1);
}

// Mapping Voice ID ElevenLabs (personnalisable avec vos propres Voice IDs)
const ELEVENLABS_VOICE_IDS = {
  narration: 'pNInz6obpgDQGcFmaJgB', // Adam
  noura: '21m00Tcm4TlvDq8ikWAM',     // Rachel
  personnage: 'ErXwobaYiN019PkySvjV',// Antoni
  waswas: 'N2lVS1w4EtoT3dr4eOWO',    // Callum
  grand_waswas: 'N2lVS1w4EtoT3dr4eOWO',
  jeune: 'TxGEqnHWrfWFTfGW9XjX',     // Josh
  marchand: 'VR6AewLTigWG4xSOukaG',  // Arnold
  enfant: 'jBpfuIE2acCO8z3wKNLl'     // Gigi
};

const dataFile = path.resolve(__dirname, 'dialogues_export.json');
const payload = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const dialogues = payload.dialoguesList;
console.log(`🎙️ Début de la génération ElevenLabs pour ${dialogues.length} dialogues...\n`);

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

for (let i = 0; i < dialogues.length; i++) {
  const d = dialogues[i];
  const targetDir = path.resolve(__dirname, '..', 'public', 'audio', `ch${d.chapter}`);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const targetFilePath = path.join(targetDir, d.targetFilename);

  if (fs.existsSync(targetFilePath) && fs.statSync(targetFilePath).size > 1000) {
    skipCount++;
    continue;
  }

  const voiceId = ELEVENLABS_VOICE_IDS[d.speaker] || ELEVENLABS_VOICE_IDS.narration;
  console.log(`🎙️ [${i + 1}/${dialogues.length}] ElevenLabs : ${d.targetFilename} (${d.characterName})...`);

  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: d.speechText,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`ElevenLabs HTTP ${response.status}: ${errText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    fs.writeFileSync(targetFilePath, Buffer.from(arrayBuffer));
    console.log(`✅ Enregistré : ${d.targetFilename} (${(arrayBuffer.byteLength / 1024).toFixed(1)} Ko)`);
    successCount++;

    await delay(300);
  } catch (err) {
    console.error(`❌ Erreur sur ${d.targetFilename} :`, err.message);
    errorCount++;
    await delay(1000);
  }
}
