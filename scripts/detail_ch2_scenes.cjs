const fs = require('fs');

const content = fs.readFileSync('src/data/chapter2.ts', 'utf8');

// Match each scene
const sceneRegex = /\{\s*id:\s*(\d+),\s*title:\s*['"]([^'"]+)['"][\s\S]*?beats:\s*\[([\s\S]*?)\]\s*\},?\s*(?=\{|\/\/ SCÈNE|\])/g;
let sMatch;

console.log('=== DÉTAIL PAR SCÈNE DU CHAPITRE 2 ===\n');

while ((sMatch = sceneRegex.exec(content)) !== null) {
  const sceneId = sMatch[1];
  const sceneTitle = sMatch[2];
  const beatsBlock = sMatch[3];

  console.log(`\n--- SCÈNE ${sceneId} : ${sceneTitle} ---`);

  const beatRegex = /\{\s*id:\s*['"]([^'"]+)['"],\s*type:\s*['"]([^'"]+)['"][\s\S]*?speaker:\s*['"]([^'"]+)['"][\s\S]*?text:\s*['"]([\s\S]*?)['"]/g;
  let bMatch;

  while ((bMatch = beatRegex.exec(beatsBlock)) !== null) {
    const beatId = bMatch[1];
    const type = bMatch[2];
    const speaker = bMatch[3];
    const text = bMatch[4].replace(/\r?\n/g, ' ').substring(0, 60);

    const mp3 = `public/audio/ch2/${beatId}.mp3`;
    const wav = `public/audio/ch2/${beatId}.wav`;
    const exists = fs.existsSync(mp3) || fs.existsSync(wav);

    const status = speaker === 'waswas' || speaker === 'grand_waswas' 
      ? '🤫 [SILENCE (WASWAS)]'
      : exists 
      ? '✅ [AUDIO STUDIO OK]' 
      : '⚠️ [PAS D\'AUDIO -> VOIX ROBOT]';

    console.log(`  ${status} [${beatId}] (${speaker}): "${text}..."`);
  }
}
