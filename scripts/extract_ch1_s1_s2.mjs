import fs from 'fs';

const content = fs.readFileSync('src/data/chapter1.ts', 'utf8');

const s1Idx = content.indexOf('title: \'La Chambre\'');
const s3Idx = content.indexOf('title: \'Le Chuchotement\'');
const chunk = content.substring(s1Idx, s3Idx);

// Parse beats
// Each beat starts with { and has id, type, speaker, text
const beatRegex = /\{\s*id:\s*'([^']+)',\s*type:\s*'dialogue',[\s\S]*?speaker:\s*'([^']+)',[\s\S]*?text:\s*('([^'\\]|\\.)*'),/g;

const beats = [];
let match;
while ((match = beatRegex.exec(chunk)) !== null) {
  const id = match[1];
  const speaker = match[2];
  let rawStr = match[3];
  // evaluate string literal safely
  let text = '';
  try {
    text = (0, eval)(rawStr);
  } catch (e) {
    text = rawStr.slice(1, -1).replace(/\\'/g, "'").replace(/\\n/g, '\n');
  }
  beats.push({ id, speaker, text });
}

console.log(`Extracted ${beats.length} beats:`);
fs.writeFileSync('scripts/scene1_2_beats.json', JSON.stringify(beats, null, 2), 'utf8');
console.log('Saved to scripts/scene1_2_beats.json');
