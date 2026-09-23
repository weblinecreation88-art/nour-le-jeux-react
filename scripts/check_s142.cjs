const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scripts/dialogues_export.json', 'utf8'));

console.log('--- DIALOGUES EXPORT POUR SCÈNE 142 ---');
for (const [k, v] of Object.entries(data.dialogues)) {
  if (k.startsWith('s142')) {
    console.log(`[${k}] (${v.speaker}): "${v.speechText}"`);
  }
}
