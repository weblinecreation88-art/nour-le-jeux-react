const fs = require('fs');

const ch1Raw = fs.readFileSync('src/data/chapter1.ts', 'utf8');
const exp = JSON.parse(fs.readFileSync('scripts/dialogues_export.json', 'utf8')).dialogues;

// Parse beats from chapter1.ts:
// Match pattern: { id: '...', ... text: '...' }
const lines = ch1Raw.split('\n');
let currentId = null;
const ch1Beats = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const idMatch = line.match(/id:\s*['"]([^'"]+)['"]/);
  if (idMatch) {
    currentId = idMatch[1];
  }
  const textMatch = line.match(/text:\s*['"](.*)/);
  if (textMatch && currentId) {
    let text = textMatch[1].trim();
    if (text.endsWith("',") || text.endsWith('",')) {
      text = text.slice(0, -2);
    } else if (text.endsWith("'") || text.endsWith('"')) {
      text = text.slice(0, -1);
    }
    ch1Beats[currentId] = text.replace(/\\'/g, "'").trim();
  }
}

const mismatches = [];

for (const [k, v] of Object.entries(exp)) {
  if (v.chapter === 1) {
    const sceneText = ch1Beats[k];
    if (!sceneText) {
      console.log(`[Missing in Chapter 1 ts]: ${k}`);
      continue;
    }
    const audioText = (v.rawText || v.speechText || '').replace(/\r\n/g, '\n').trim();
    const cleanScene = sceneText.replace(/\r\n/g, '\n').trim();
    if (cleanScene !== audioText) {
      mismatches.push({
        id: k,
        speaker: v.speaker,
        sceneText: cleanScene,
        audioText
      });
    }
  }
}

console.log(`\nFound ${mismatches.length} mismatches in Chapter 1:\n`);
mismatches.forEach(m => {
  console.log(`=== [${m.id}] (${m.speaker}) ===`);
  console.log(`SCENE TEXT : "${m.sceneText}"`);
  console.log(`AUDIO MP3  : "${m.audioText}"\n`);
});
