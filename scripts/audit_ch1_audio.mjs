import fs from 'fs';

const content = fs.readFileSync('src/data/chapter1.ts', 'utf8');

// Match all dialogue beats in chapter 1
// We find scenes in CHAPTER_1_SCENES
const scenesStart = content.indexOf('export const CHAPTER_1_SCENES');
const scenesEnd = content.indexOf('export const CHAPTER_1_GRAPH');
const chunk = content.substring(scenesStart, scenesEnd !== -1 ? scenesEnd : content.length);

const beatRegex = /\{\s*id:\s*['"]([^'"]+)['"]\s*,\s*type:\s*['"]dialogue['"][\s\S]*?speaker:\s*['"]([^'"]+)['"][\s\S]*?text:\s*['"]([\s\S]*?)['"]\s*,\s*(?:emotion|choices|waswas|requires|required|traitGains|nextBeat|backgroundTheme|\})/g;

const missing = [];
const existing = [];

for (const m of chunk.matchAll(beatRegex)) {
  const id = m[1];
  const speaker = m[2];
  const mp3Path = `public/audio/ch1/${id}.mp3`;
  if (fs.existsSync(mp3Path)) {
    existing.push({ id, speaker });
  } else {
    missing.push({ id, speaker, rawText: m[3] });
  }
}

console.log('=== AUDIT AUDIO CHAPITRE 1 ===');
console.log(`Total dialogue beats : ${existing.length + missing.length}`);
console.log(`Fichiers existants    : ${existing.length}`);
console.log(`Fichiers MANQUANTS    : ${missing.length}`);
console.log('\nDétail des fichiers manquants :');
missing.forEach(m => console.log(`- ${m.id} (${m.speaker}): ${m.rawText.substring(0, 50)}...`));
