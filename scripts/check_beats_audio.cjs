const fs = require('fs');
const path = require('path');

function checkChapter(chNum, file) {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n========================================`);
  console.log(`=== AUDIT AUDIO CHAPITRE ${chNum} (${file}) ===`);
  console.log(`========================================`);

  // Extract scenes
  const scenesMatch = content.match(/export const CHAPTER_\d+_SCENES: Scene\[\] = (\[[\s\S]*?\]);/);
  if (!scenesMatch) {
    console.log("Could not find scenes array");
    return;
  }

  // Find all beat blocks
  const beatRegex = /\{\s*id:\s*['"]([^'"]+)['"],\s*type:\s*['"]([^'"]+)['"][\s\S]*?speaker:\s*['"]([^'"]+)['"][\s\S]*?text:\s*['"]([\s\S]*?)['"]/g;
  let match;
  let total = 0;
  let found = 0;
  let missing = 0;
  const missingBeats = [];

  while ((match = beatRegex.exec(content)) !== null) {
    const beatId = match[1];
    const type = match[2];
    const speaker = match[3];
    const text = match[4];

    if (speaker === 'waswas' || speaker === 'grand_waswas') {
      continue;
    }

    total++;
    const mp3 = `public/audio/ch${chNum}/${beatId}.mp3`;
    const wav = `public/audio/ch${chNum}/${beatId}.wav`;

    if (fs.existsSync(mp3) || fs.existsSync(wav)) {
      found++;
    } else {
      missing++;
      missingBeats.push({ beatId, speaker, text: text.replace(/\n/g, ' ').substring(0, 50) });
    }
  }

  console.log(`Total répliques : ${total}`);
  console.log(`Fichiers trouvés : ${found}`);
  console.log(`Fichiers MANQUANTS : ${missing}`);

  if (missingBeats.length > 0) {
    console.log(`\n--- RÉPLIQUES MANQUANTES (${missingBeats.length}) : ---`);
    console.log(JSON.stringify(missingBeats, null, 2));
  }
}

checkChapter(2, 'src/data/chapter2.ts');
checkChapter(3, 'src/data/chapter3.ts');
