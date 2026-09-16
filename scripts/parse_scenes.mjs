import fs from 'fs';

const content = fs.readFileSync('src/data/chapter1.ts', 'utf8');

// Find CHAPTER_1_SCENES
const startIdx = content.indexOf('export const CHAPTER_1_SCENES');
const endIdx = content.indexOf('export const CHAPTER_1_GRAPH');
const scenesText = content.substring(startIdx, endIdx !== -1 ? endIdx : content.length);

// Split scenes
const sceneRegex = /\{\s*id:\s*(\d+),\s*title:\s*['"]([^'"]+)['"]/g;
const sceneIndices = [];
let sm;
while ((sm = sceneRegex.exec(scenesText)) !== null) {
  sceneIndices.push({ id: parseInt(sm[1], 10), title: sm[2], index: sm.index });
}

for (let i = 0; i < sceneIndices.length; i++) {
  const current = sceneIndices[i];
  if (current.id > 2) continue;
  const next = sceneIndices[i + 1];
  const sceneChunk = scenesText.substring(current.index, next ? next.index : scenesText.length);
  
  console.log(`\n================ SCENE ${current.id}: ${current.title} ================`);
  
  // Extract beats
  const beatMatches = sceneChunk.matchAll(/\{\s*id:\s*['"]([^'"]+)['"]\s*,\s*type:\s*['"]dialogue['"][\s\S]*?speaker:\s*['"]([^'"]+)['"][\s\S]*?text:\s*['"]([\s\S]*?)['"]\s*,\s*(?:emotion|choices|waswas|requires|required|traitGains|nextBeat|backgroundTheme|\})/g);
  
  let count = 0;
  for (const match of beatMatches) {
    count++;
    const [_, beatId, speaker, rawText] = match;
    const text = rawText.replace(/\\'/g, "'").replace(/\\n/g, ' ').trim();
    console.log(`[${beatId}] (${speaker}): ${text.substring(0, 80)}...`);
  }
  console.log(`Total dialogue beats in Scene ${current.id}: ${count}`);
}
