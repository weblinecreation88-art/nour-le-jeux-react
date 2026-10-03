/**
 * Générateur des plans illustrés du Chapitre 1 (scènes 2 à 9) via Gemini Image.
 *
 * Lit scripts/storyboard_ch1.json, envoie à Gemini la planche des personnages,
 * une image de style et le décor de la scène comme références, puis enregistre
 * chaque plan en JPEG 3:4 dans public/game-assets/ch1_shots/<id>.jpg.
 *
 * Usage :
 *   node scripts/generate_ch1_shots.mjs              # génère les plans manquants
 *   node scripts/generate_ch1_shots.mjs s3_brume     # (re)génère un ou plusieurs plans précis
 *
 * Variables : GEMINI_API_KEY (obligatoire, dans .env), GEMINI_IMAGE_MODEL (optionnel).
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '';
const model = process.env.GEMINI_IMAGE_MODEL || 'gemini-3-pro-image-preview';

if (!apiKey) {
  console.error('❌ Clé GEMINI_API_KEY absente : ajoute-la dans le fichier .env');
  process.exit(1);
}

const storyboard = JSON.parse(fs.readFileSync('scripts/storyboard_ch1.json', 'utf8'));
const onlyIds = process.argv.slice(2);
fs.mkdirSync(storyboard.outputDir, { recursive: true });

// Les références sont réduites à 1024 px pour limiter la taille des requêtes
const toInlinePart = async (file) => {
  const data = await sharp(file).resize(1024, 1024, { fit: 'inside' }).jpeg({ quality: 85 }).toBuffer();
  return { inline_data: { mime_type: 'image/jpeg', data: data.toString('base64') } };
};

const globalRefs = await Promise.all(storyboard.references.map(toInlinePart));

const shots = storyboard.shots.filter((s) => onlyIds.length === 0 || onlyIds.includes(s.id));
let done = 0;

for (const shot of shots) {
  const outFile = path.join(storyboard.outputDir, `${shot.id}.jpg`);
  if (onlyIds.length === 0 && fs.existsSync(outFile)) {
    console.log(`⏩ ${shot.id} déjà présent`);
    continue;
  }

  const parts = [
    {
      text:
        `${storyboard.style}\n\n` +
        `Reference image 1 is the official character sheet (match outfits and the faceless style exactly). ` +
        `Reference image 2 shows the target painting style. Reference image 3 is the location of this scene.\n\n` +
        `SCENE TO PAINT: ${shot.prompt}`,
    },
    ...globalRefs,
    await toInlinePart(shot.ref),
  ];

  let ok = false;
  for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
    try {
      console.log(`🎨 ${shot.id} (tentative ${attempt})...`);
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
          body: JSON.stringify({
            contents: [{ parts }],
            generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '3:4' } },
          }),
        }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);

      const json = await res.json();
      const img = json.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data);
      if (!img) throw new Error(`Pas d'image dans la réponse : ${JSON.stringify(json).slice(0, 300)}`);

      await sharp(Buffer.from(img.inlineData.data, 'base64'))
        .resize(768, 1024, { fit: 'cover' })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(outFile);
      console.log(`✅ ${outFile}`);
      ok = true;
      done++;
    } catch (err) {
      console.warn(`⚠️ ${shot.id} : ${err.message}`);
      await new Promise((r) => setTimeout(r, 4000 * attempt));
    }
  }
}

console.log(`\nTerminé : ${done} plan(s) généré(s) dans ${storyboard.outputDir}`);
