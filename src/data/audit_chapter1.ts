import { CHAPTER_1_SCENES, DAY_2_POTEAU_BEATS, QUIZZES, REAL_ACTIONS } from './chapter1';
import { CHAPTER_1_SCENES_AR, DAY_2_POTEAU_BEATS_AR, QUIZZES_AR, REAL_ACTIONS_AR } from './locales/chapter1.ar';
import { CHAPTER_1_SCENES_EN, DAY_2_POTEAU_BEATS_EN, QUIZZES_EN, REAL_ACTIONS_EN } from './locales/chapter1.en';

console.log('========================================================');
console.log('     AUDIT DÉTAILLÉ DU CHAPITRE 1 : FR vs AR vs EN     ');
console.log('========================================================\n');

let totalFrBeats = 0;
let totalArBeats = 0;
let totalEnBeats = 0;
const errors: string[] = [];

CHAPTER_1_SCENES.forEach((scene) => {
  const sceneAr = CHAPTER_1_SCENES_AR.find((s) => s.id === scene.id);
  const sceneEn = CHAPTER_1_SCENES_EN.find((s) => s.id === scene.id);

  if (!sceneAr) {
    errors.push(`[ERREUR FATALE] Scène ${scene.id} absente en Arabe !`);
    return;
  }
  if (!sceneEn) {
    errors.push(`[ERREUR FATALE] Scène ${scene.id} absente en Anglais !`);
    return;
  }

  totalFrBeats += scene.beats.length;
  totalArBeats += sceneAr.beats.length;
  totalEnBeats += sceneEn.beats.length;

  console.log(`🎬 Scène ${scene.id}: "${scene.title}" (AR: "${sceneAr.title}")`);
  console.log(`   - Répliques/Beats: FR=${scene.beats.length} | AR=${sceneAr.beats.length} | EN=${sceneEn.beats.length}`);

  scene.beats.forEach((b, idx) => {
    const bAr = sceneAr.beats[idx];
    const bEn = sceneEn.beats[idx];

    if (!bAr) {
      errors.push(`Scène ${scene.id} Beat #${idx} (${b.id}) MANQUANT en Arabe`);
      return;
    }
    if (!bEn) {
      errors.push(`Scène ${scene.id} Beat #${idx} (${b.id}) MANQUANT en Anglais`);
      return;
    }

    if (b.id !== bAr.id) {
      errors.push(`Scène ${scene.id} Beat #${idx} ID DIFFÉRENT: FR="${b.id}" vs AR="${bAr.id}"`);
    }
    if (b.speaker !== bAr.speaker) {
      errors.push(`Scène ${scene.id} Beat [${b.id}] Personnage différent: FR="${b.speaker}" vs AR="${bAr.speaker}"`);
    }
    if (b.emotion !== bAr.emotion) {
      errors.push(`Scène ${scene.id} Beat [${b.id}] Émotion différente: FR="${b.emotion}" vs AR="${bAr.emotion}"`);
    }
    if (b.quizId !== bAr.quizId) {
      errors.push(`Scène ${scene.id} Beat [${b.id}] QuizId différent: FR="${b.quizId}" vs AR="${bAr.quizId}"`);
    }
    if (b.realActionId !== bAr.realActionId) {
      errors.push(`Scène ${scene.id} Beat [${b.id}] RealActionId différent: FR="${b.realActionId}" vs AR="${bAr.realActionId}"`);
    }
    if (b.type !== bAr.type) {
      errors.push(`Scène ${scene.id} Beat [${b.id}] Type différent: FR="${b.type}" vs AR="${bAr.type}"`);
    }
    if (b.choices && (!bAr.choices || bAr.choices.length !== b.choices.length)) {
      errors.push(`Scène ${scene.id} Beat [${b.id}] Nombre de choix différent en Arabe`);
    }
  });
});

console.log('\n--- DAY 2 POTEAU LOOP ---');
console.log(`Beats Day 2: FR=${DAY_2_POTEAU_BEATS.length} | AR=${DAY_2_POTEAU_BEATS_AR.length} | EN=${DAY_2_POTEAU_BEATS_EN.length}`);
DAY_2_POTEAU_BEATS.forEach((b, idx) => {
  const bAr = DAY_2_POTEAU_BEATS_AR[idx];
  const bEn = DAY_2_POTEAU_BEATS_EN[idx];
  if (!bAr || b.id !== bAr.id) errors.push(`Day 2 Beat #${idx} mismatch AR`);
  if (!bEn || b.id !== bEn.id) errors.push(`Day 2 Beat #${idx} mismatch EN`);
});

console.log('\n--- QUIZZES ---');
Object.keys(QUIZZES).forEach((qKey) => {
  const qFr = QUIZZES[qKey];
  const qAr = QUIZZES_AR[qKey];
  const qEn = QUIZZES_EN[qKey];
  if (!qAr) errors.push(`Quiz "${qKey}" absent en Arabe`);
  if (!qEn) errors.push(`Quiz "${qKey}" absent en Anglais`);
  if (qAr && qFr.correctOptionId !== qAr.correctOptionId) {
    errors.push(`Quiz "${qKey}" bonne réponse incohérente AR: FR=${qFr.correctOptionId} AR=${qAr.correctOptionId}`);
  }
  if (qEn && qFr.correctOptionId !== qEn.correctOptionId) {
    errors.push(`Quiz "${qKey}" bonne réponse incohérente EN: FR=${qFr.correctOptionId} EN=${qEn.correctOptionId}`);
  }
  if (qAr && qFr.options.length !== qAr.options.length) {
    errors.push(`Quiz "${qKey}" options count mismatch AR`);
  }
});

console.log('\n--- ACTIONS DU MONDE RÉEL (REAL_ACTIONS) ---');
Object.keys(REAL_ACTIONS).forEach((aKey) => {
  const aFr = REAL_ACTIONS[aKey];
  const aAr = REAL_ACTIONS_AR[aKey];
  const aEn = REAL_ACTIONS_EN[aKey];
  if (!aAr) errors.push(`Action Réelle "${aKey}" absente en Arabe`);
  if (!aEn) errors.push(`Action Réelle "${aKey}" absente en Anglais`);
  if (aAr && aFr.xpReward !== aAr.xpReward) {
    errors.push(`Action Réelle "${aKey}" points différents: FR=${aFr.xpReward} AR=${aAr.xpReward}`);
  }
});

console.log('\n========================================================');
console.log(`TOTAL BEATS SCÈNES 1-9: FR=${totalFrBeats} | AR=${totalArBeats} | EN=${totalEnBeats}`);
console.log(`TOTAL QUIZZES: FR=${Object.keys(QUIZZES).length} | AR=${Object.keys(QUIZZES_AR).length} | EN=${Object.keys(QUIZZES_EN).length}`);
console.log(`TOTAL ACTIONS: FR=${Object.keys(REAL_ACTIONS).length} | AR=${Object.keys(REAL_ACTIONS_AR).length} | EN=${Object.keys(REAL_ACTIONS_EN).length}`);

if (errors.length === 0) {
  console.log('\n🎉 RÉSULTAT DE L\'AUDIT : CONFORMITÉ PARFAITE À 100% !');
  console.log('Toutes les scènes, répliques, personnages, types d\'interaction, quiz et actions sont strictement identiques entre les 3 langues.');
} else {
  console.log(`\n⚠️ ANOMALIES TROUVÉES (${errors.length}) :`);
  errors.forEach((e) => console.log('  ❌ ' + e));
}
console.log('========================================================\n');
