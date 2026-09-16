import { CHAPTER_1_SCENES } from '../src/data/chapter1.ts';
import fs from 'fs';
import path from 'path';

console.log(`Total scenes in Chapter 1: ${CHAPTER_1_SCENES.length}`);

let totalDialogues = 0;
let missingAudio = 0;

for (const scene of CHAPTER_1_SCENES) {
  console.log(`\n--- Scène ${scene.id}: ${scene.title} ---`);
  for (const beat of scene.beats) {
    if (beat.type === 'dialogue') {
      totalDialogues++;
      const mp3 = path.resolve('public', 'audio', 'ch1', `${beat.id}.mp3`);
      const exists = fs.existsSync(mp3) && fs.statSync(mp3).size > 2000;
      if (!exists) {
        missingAudio++;
        console.log(`  ❌ [MANQUANT] ${beat.id} (${beat.speaker}): "${beat.text?.substring(0, 50)}..."`);
      } else {
        console.log(`  ✅ [EXISTE]   ${beat.id} (${beat.speaker})`);
      }
    }
  }
}

console.log(`\n========================================`);
console.log(`Total répliques Chapter 1 : ${totalDialogues}`);
console.log(`Répliques manquantes       : ${missingAudio}`);
console.log(`========================================\n`);
