/**
 * Générateur Audio Studio Google Cloud TTS (DeepMind Journey & Studio Voices)
 * pour Nour - La Voie de la Sagesse
 * 
 * Inclus avec votre compte Google (Quota mensuel gratuit : 1 million de caractères gratuits !)
 * Notre jeu entier = ~42 000 caractères -> 100% GRATUIT dans le quota mensuel.
 * 
 * Utilisation :
 * 1. Obtenir une clé API Google :
 *    - Rendez-vous sur Google Cloud Console (console.cloud.google.com) ou Google AI Studio
 *    - Activez l'API "Cloud Text-to-Speech API"
 *    - Créez une Clé API (Identifiants -> Créer des identifiants -> Clé API)
 * 2. Définir votre clé :
 *    set GOOGLE_API_KEY=votre_cle_api  (Windows CMD)
 *    $env:GOOGLE_API_KEY="votre_cle"   (PowerShell)
 * 3. Lancer la génération :
 *    node scripts/generate_audio_google.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌ Erreur : La variable d'environnement GOOGLE_API_KEY n'est pas définie !");
  console.error("👉 Exemple : set GOOGLE_API_KEY=AIzaSy...");
  process.exit(1);
}

const dataFile = path.resolve(__dirname, 'dialogues_export.json');
if (!fs.existsSync(dataFile)) {
  console.error("❌ Erreur : dialogues_export.json introuvable !");
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const dialogues = payload.dialoguesList;
console.log(`🎙️ Début de la génération Google Studio pour ${dialogues.length} dialogues...\n`);

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const GOOGLE_VOICES = {
  narration: { name: 'fr-FR-Journey-D', rate: 0.90, pitch: -1.0 },
  noura: { name: 'fr-FR-Journey-F', rate: 0.92, pitch: 0.5 },
  personnage: { name: 'fr-FR-Neural2-D', rate: 0.98, pitch: 2.0 },
  waswas: { name: 'fr-FR-Neural2-B', rate: 0.85, pitch: -5.0 },
  grand_waswas: { name: 'fr-FR-Neural2-B', rate: 0.82, pitch: -6.0 },
  jeune: { name: 'fr-FR-Neural2-D', rate: 0.96, pitch: -0.5 },
  marchand: { name: 'fr-FR-Journey-D', rate: 1.02, pitch: -0.5 },
  enfant: { name: 'fr-FR-Neural2-C', rate: 0.94, pitch: 3.5 }
};

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

for (let i = 0; i < dialogues.length; i++) {
  const d = dialogues[i];
  const targetDir = path.resolve(__dirname, '..', 'public', 'audio', `ch${d.chapter}`);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const targetFilePath = path.join(targetDir, d.targetFilename);

  if (fs.existsSync(targetFilePath) && fs.statSync(targetFilePath).size > 1000) {
    console.log(`⏩ [${i + 1}/${dialogues.length}] Déjà présent : ${d.targetFilename}`);
    skipCount++;
    continue;
  }

  const vConfig = GOOGLE_VOICES[d.speaker] || GOOGLE_VOICES.narration;
  console.log(`🎙️ [${i + 1}/${dialogues.length}] Google Studio : ${d.targetFilename} (${d.characterName} - ${vConfig.name})...`);

  try {
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: { text: d.speechText },
        voice: {
          languageCode: 'fr-FR',
          name: vConfig.name
        },
        audioConfig: {
          audioEncoding: 'MP3',
          speakingRate: vConfig.rate,
          pitch: vConfig.pitch
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Google TTS HTTP ${response.status}: ${errText}`);
    }

    const data = await response.json();
    if (!data.audioContent) {
      throw new Error("Réponse Google sans contenu audioContent.");
    }

    const audioBuffer = Buffer.from(data.audioContent, 'base64');
    fs.writeFileSync(targetFilePath, audioBuffer);
    console.log(`✅ Enregistré : ${d.targetFilename} (${(audioBuffer.length / 1024).toFixed(1)} Ko)`);
    successCount++;

    await delay(120);
  } catch (err) {
    console.error(`❌ Erreur sur ${d.targetFilename} :`, err.message);
    errorCount++;
    await delay(1000);
  }
}

console.log('\n========================================');
console.log(`🎉 Fin du processus Google Studio !`);
console.log(`- Téléchargés : ${successCount}`);
console.log(`- Déjà présents (ignorés) : ${skipCount}`);
console.log(`- Erreurs : ${errorCount}`);
console.log('========================================\n');
