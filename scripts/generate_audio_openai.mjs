/**
 * Générateur Audio Studio OpenAI TTS pour Nour - La Voie de la Sagesse
 * 
 * Utilisation :
 * 1. Définir votre clé API OpenAI :
 *    set OPENAI_API_KEY=votre_cle_api  (Windows CMD)
 *    $env:OPENAI_API_KEY="votre_cle"   (PowerShell)
 * 2. Lancer la génération :
 *    node scripts/generate_audio_openai.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error("❌ Erreur : La variable d'environnement OPENAI_API_KEY n'est pas définie !");
  console.error("👉 Exemple : set OPENAI_API_KEY=sk-proj-...");
  process.exit(1);
}

const dataFile = path.resolve(__dirname, 'dialogues_export.json');
if (!fs.existsSync(dataFile)) {
  console.error("❌ Erreur : dialogues_export.json introuvable !");
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const dialogues = payload.dialoguesList;
console.log(`🎙️ Début de la génération pour ${dialogues.length} dialogues...\n`);

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

for (let i = 0; i < dialogues.length; i++) {
  const d = dialogues[i];
  const targetDir = path.resolve(__dirname, '..', 'public', 'audio', `ch${d.chapter}`);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const targetFilePath = path.join(targetDir, d.targetFilename);

  // Éviter de re-télécharger et re-payer les MP3 déjà générés
  if (fs.existsSync(targetFilePath) && fs.statSync(targetFilePath).size > 1000) {
    console.log(`⏩ [${i + 1}/${dialogues.length}] Déjà généré : ${d.targetFilename}`);
    skipCount++;
    continue;
  }

  const voice = d.recommendedVoices.openai || 'alloy';
  console.log(`🎙️ [${i + 1}/${dialogues.length}] Génération ${d.targetFilename} (${d.characterName}, voix: ${voice})...`);

  try {
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'tts-1',
        voice: voice,
        input: d.speechText,
        speed: d.speaker === 'narration' ? 0.95 : 1.0
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`OpenAI HTTP ${response.status}: ${errText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    fs.writeFileSync(targetFilePath, Buffer.from(arrayBuffer));
    console.log(`✅ Enregistré : ${d.targetFilename} (${(arrayBuffer.byteLength / 1024).toFixed(1)} Ko)`);
    successCount++;

    // Pause de politesse pour respecter les quotas API
    await delay(250);
  } catch (err) {
    console.error(`❌ Erreur sur ${d.targetFilename} :`, err.message);
    errorCount++;
    await delay(1000);
  }
}

console.log('\n========================================');
console.log(`🎉 Fin du processus !`);
console.log(`- Téléchargés : ${successCount}`);
console.log(`- Déjà présents (ignorés) : ${skipCount}`);
console.log(`- Erreurs : ${errorCount}`);
console.log('========================================\n');
