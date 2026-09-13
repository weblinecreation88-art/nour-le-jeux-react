import { IslamicQuizQuestion } from '../types';

export const ISLAMIC_QUIZZES: IslamicQuizQuestion[] = [
  // 1. Les Ablutions (Question spéciale avec 3 propositions d'ordre)
  {
    id: 'quiz_ablutions_ordre',
    question: 'Quel est le bon ordre authentique pour accomplir les ablutions (Al-Woudou\') ?',
    category: 'Prières & Adoration',
    difficulty: 'moyen',
    arabic: 'وُضُوءٌ عَلَى هَدْيِ النَّبِيِّ ﷺ',
    options: [
      'A. Mains ➔ Visage ➔ Bouche/Nez ➔ Pieds ➔ Bras ➔ Tête',
      'B. Mains ➔ Bouche & Nez ➔ Visage ➔ Bras jusqu\'aux coudes ➔ Tête & Oreilles ➔ Pieds',
      'C. Visage ➔ Mains ➔ Bras ➔ Bouche/Nez ➔ Tête ➔ Pieds'
    ],
    correctIndex: 1,
    explanation: 'L\'ordre de la Sunnah commence par le lavage des mains (3x), puis le rinçage de la bouche et du nez (3x), le visage (3x), les avant-bras jusqu\'aux coudes (3x), le passage des mains mouillées sur la tête et les oreilles (1x), et enfin le lavage des pieds jusqu\'aux chevilles (3x).',
    hadithOrQuranRef: 'Sourate Al-Ma\'idah (5:6) et Hadith de \'Uthman ibn \'Affan (Rapporté par Al-Bukhari & Muslim)',
    xpReward: 35
  },

  // 2. Les Piliers de l'Islam
  {
    id: 'quiz_piliers_islam',
    question: 'Combien y a-t-il de piliers en Islam ?',
    category: 'Piliers & Foi',
    difficulty: 'facile',
    arabic: 'أَرْكَانُ الإِسْلَام',
    options: [
      '3 piliers',
      '5 piliers (Shahada, Prière, Zakat, Jeûne, Hajj)',
      '7 piliers'
    ],
    correctIndex: 1,
    explanation: 'Le Prophète ﷺ a dit : « L\'Islam est bâti sur cinq piliers : l\'attestation de foi (Shahada), l\'accomplissement de la prière (Salat), l\'acquittement de l\'aumône (Zakat), le jeûne de Ramadan, et le pèlerinage (Hajj) pour celui qui en a les moyens. »',
    hadithOrQuranRef: 'Hadith rapporté par Al-Bukhari (n°8) et Muslim (n°16)',
    xpReward: 20
  },

  // 3. Les Piliers de la Foi (Iman)
  {
    id: 'quiz_piliers_foi',
    question: 'Combien y a-t-il de piliers de la Foi (Al-Iman) ?',
    category: 'Piliers & Foi',
    difficulty: 'facile',
    arabic: 'أَرْكَانُ الإِيمَان',
    options: [
      '4 piliers',
      '5 piliers',
      '6 piliers (Dieu, Anges, Livres, Prophètes, Jour Dernier, Destin)'
    ],
    correctIndex: 2,
    explanation: 'Les six piliers de la foi sont : croire en Allah, en Ses anges, en Ses livres révélés, en Ses messagers, au Jour dernier, et au Destin qu\'il soit bon ou mauvais.',
    hadithOrQuranRef: 'Hadith de Jibril (Rapporté par Muslim, n°8)',
    xpReward: 20
  },

  // 4. Nombre de prières obligatoires
  {
    id: 'quiz_nombre_prieres',
    question: 'Combien de prières obligatoires le musulman accomplit-il chaque jour ?',
    category: 'Prières & Adoration',
    difficulty: 'facile',
    arabic: 'الصَّلَوَاتُ الخَمْس',
    options: [
      '3 prières',
      '5 prières quotidiennes (Fajr, Dhuhr, Asr, Maghrib, Isha)',
      '7 prières'
    ],
    correctIndex: 1,
    explanation: 'Les 5 prières obligatoires prescrites lors du voyage nocturne (Al-Isra wal-Mi\'raj) sont le Fajr (l\'aube), le Dhuhr (midi), le \'Asr (après-midi), le Maghrib (coucher du soleil) et l\'Isha (la nuit).',
    hadithOrQuranRef: 'Hadith d\'Al-Isra wal-Mi\'raj (Sahih Al-Bukhari)',
    xpReward: 20
  },

  // 5. La Fatiha
  {
    id: 'quiz_sourate_fatiha',
    question: 'Quelle est la première sourate du Coran, obligatoire dans chaque unité de prière (rak\'ah) ?',
    category: 'Coran & Sourates',
    difficulty: 'facile',
    arabic: 'سُورَةُ الفَاتِحَة',
    options: [
      'Sourate Al-Ikhlas (Le Monothéisme pur)',
      'Sourate Al-Fatiha (L\'Ouverture)',
      'Sourate An-Nas (Les Hommes)'
    ],
    correctIndex: 1,
    explanation: 'Le Prophète ﷺ a dit : « N\'a point de prière valide celui qui ne récite pas l\'Ouverture du Livre (Al-Fatiha). »',
    hadithOrQuranRef: 'Hadith rapporté par Al-Bukhari (n°756) et Muslim (n°394)',
    xpReward: 20
  },

  // 6. Nombre de Sourates dans le Coran
  {
    id: 'quiz_nombre_sourates',
    question: 'Combien de sourates compte le noble Coran ?',
    category: 'Coran & Sourates',
    difficulty: 'moyen',
    arabic: 'القُرْآنُ الكَرِيم',
    options: [
      '99 sourates',
      '114 sourates',
      '120 sourates'
    ],
    correctIndex: 1,
    explanation: 'Le Saint Coran est composé de 114 sourates, commençant par la sourate Al-Fatiha et se terminant par la sourate An-Nas.',
    hadithOrQuranRef: 'Le Moushaf ‘Uthmani unanime',
    xpReward: 25
  },

  // 7. La plus longue sourate
  {
    id: 'quiz_sourate_longue',
    question: 'Quelle est la plus longue sourate du Coran ?',
    category: 'Coran & Sourates',
    difficulty: 'moyen',
    arabic: 'سُورَةُ البَقَرَة',
    options: [
      'Sourate Al-Baqarah (La Vache - 286 versets)',
      'Sourate An-Nisa (Les Femmes)',
      'Sourate Ya-Sin'
    ],
    correctIndex: 0,
    explanation: 'La sourate Al-Baqarah est la plus longue du Coran avec 286 versets. Elle contient également le plus grand verset : Ayat Al-Kursi (Le Verset du Trône).',
    hadithOrQuranRef: 'Sourate Al-Baqarah (2:255)',
    xpReward: 25
  },

  // 8. Prière de l'aube
  {
    id: 'quiz_rakats_fajr',
    question: 'Combien de rak\'ats (unités) composent la prière obligatoire du Fajr (Subh) ?',
    category: 'Prières & Adoration',
    difficulty: 'facile',
    arabic: 'صَلَاةُ الفَجْر',
    options: [
      '2 rak\'ats obligatoires à voix haute',
      '4 rak\'ats',
      '3 rak\'ats'
    ],
    correctIndex: 0,
    explanation: 'La prière obligatoire du Fajr comporte 2 rak\'ats récitées à voix haute, précédées idéalement de 2 rak\'ats surérogatoires (Sunnah du Fajr) qui ont un mérite immense.',
    hadithOrQuranRef: 'Hadith : « Les deux rak\'ats de l\'aube sont meilleures que ce bas-monde et ce qu\'il contient. » (Muslim)',
    xpReward: 20
  },

  // 9. Le premier mois hégirien
  {
    id: 'quiz_mois_hegire',
    question: 'Quel est le premier mois du calendrier hégirien islamique ?',
    category: 'Prophètes & Histoire',
    difficulty: 'moyen',
    arabic: 'التَّقْوِيمُ الهِجْرِيّ',
    options: [
      'Le mois de Ramadan',
      'Le mois de Mouharram (Al-Mouharram)',
      'Le mois de Chawwal'
    ],
    correctIndex: 1,
    explanation: 'L\'année hégirienne commence par le mois sacré de Mouharram (qui contient le jour d\'Achoura) et se termine par Dhou al-Hijja (le mois du Hajj).',
    hadithOrQuranRef: 'Sourate At-Tawbah (9:36)',
    xpReward: 25
  },

  // 10. Le Prophète de l'Arche
  {
    id: 'quiz_prophete_arche',
    question: 'Quel Prophète de Dieu a construit l\'Arche pour sauver les croyants du déluge ?',
    category: 'Prophètes & Histoire',
    difficulty: 'facile',
    arabic: 'سَفِينَةُ نُوحٍ عَلَيْهِ السَّلَام',
    options: [
      'Le Prophète Ibrahim (Abraham)',
      'Le Prophète Nouh (Noé)',
      'Le Prophète Moussa (Moïse)'
    ],
    correctIndex: 1,
    explanation: 'Le Prophète Nouh (Noé عليه السلام) a appelé son peuple avec patience pendant 950 ans, puis a construit l\'arche sous l\'ordre d\'Allah pour préserver les croyants.',
    hadithOrQuranRef: 'Sourate Houd (11:37) & Sourate Nouh (71)',
    xpReward: 20
  },

  // 11. La Nuit du Destin
  {
    id: 'quiz_laylat_qadr',
    question: 'Quelle nuit bénie du mois de Ramadan est meilleure que mille mois d\'adoration ?',
    category: 'Coran & Sourates',
    difficulty: 'facile',
    arabic: 'لَيْلَةُ القَدْر',
    options: [
      'La Nuit du Destin (Laylat Al-Qadr)',
      'La Nuit de l\'Hégire',
      'La Nuit de la Victoire'
    ],
    correctIndex: 0,
    explanation: 'Allah dit dans le Coran : « La nuit d\'Al-Qadr est meilleure que mille mois. » (plus de 83 années d\'adoration !). On la recherche parmi les dix dernières nuits impaires de Ramadan.',
    hadithOrQuranRef: 'Sourate Al-Qadr (97:3)',
    xpReward: 25
  },

  // 12. Les Compagnons - Le Calife Othmân
  {
    id: 'quiz_calife_othman',
    question: 'Quel calife bien guidé a rassemblé et fait compiler le Coran en un moushaf officiel unique ?',
    category: 'Prophètes & Histoire',
    difficulty: 'difficile',
    arabic: 'عُثْمَانُ بْنُ عَفَّانَ رَضِيَ اللهُ عَنْهُ',
    options: [
      'Le Calife Abou Bakr As-Siddiq',
      'Le Calife Othmân ibn \'Affân (Dhun-Nourayn)',
      'Le Calife Ali ibn Abi Talib'
    ],
    correctIndex: 1,
    explanation: 'Le troisième calife bien guidé, Othmân ibn \'Affân (رضي الله عنه), a fait copier le texte coranique en plusieurs exemplaires officiels pour unifier la récitation dans tout le monde musulman.',
    hadithOrQuranRef: 'Récit authentique rapporté par Al-Bukhari (n°4987)',
    xpReward: 35
  },

  // 13. Le Comportement (Adab) - Dire la vérité
  {
    id: 'quiz_adab_verite',
    question: 'Quelle qualité morale le Prophète ﷺ a-t-il enseignée comme menant à la piété et au Paradis ?',
    category: 'Comportement & Sagesse',
    difficulty: 'facile',
    arabic: 'الصِّدْقُ وَالأَمَانَة',
    options: [
      'La véracité et la sincérité (As-Sidq)',
      'L\'accumulation des richesses',
      'L\'orgueil devant les autres'
    ],
    correctIndex: 0,
    explanation: 'Le Prophète ﷺ a dit : « Attachez-vous à la véracité, car la véracité mène à la piété, et la piété mène au Paradis. »',
    hadithOrQuranRef: 'Hadith rapporté par Al-Bukhari et Muslim',
    xpReward: 20
  },

  // 14. L'aumône obligatoire
  {
    id: 'quiz_zakat',
    question: 'Comment s\'appelle l\'aumône obligatoire qui purifie les biens des musulmans aisés pour les pauvres ?',
    category: 'Piliers & Foi',
    difficulty: 'facile',
    arabic: 'الزَّكَاة',
    options: [
      'La Zakat (troisième pilier de l\'Islam)',
      'Le Waqf',
      'Le Butin'
    ],
    correctIndex: 0,
    explanation: 'La Zakat est une part obligatoire (généralement 2,5% de l\'épargne annuelle ayant atteint le Nissab) prélevée pour être redistribuée aux nécessiteux et ayant-droits mentionnés dans le Coran.',
    hadithOrQuranRef: 'Sourate At-Tawbah (9:60)',
    xpReward: 20
  },

  // 15. L'Ange de la Révélation
  {
    id: 'quiz_ange_jibril',
    question: 'Quel est le noble ange chargé de transmettre la révélation divine aux Prophètes ?',
    category: 'Piliers & Foi',
    difficulty: 'facile',
    arabic: 'جِبْرِيلُ عَلَيْهِ السَّلَام',
    options: [
      'L\'ange Mika\'il (Michel)',
      'L\'ange Jibril (Gabriel)',
      'L\'ange Israfil'
    ],
    correctIndex: 1,
    explanation: 'L\'ange Jibril (Gabriel عليه السلام) est l\'Esprit Saint (Ar-Rouh Al-Amin) chargé par Allah de faire descendre le Coran et les révélations divines sur le cœur des Prophètes.',
    hadithOrQuranRef: 'Sourate Ash-Shu\'ara (26:192-194)',
    xpReward: 20
  },

  // 16. Le Vrai Fort (Hilm & Maîtrise de soi)
  {
    id: 'quiz_hilm_force',
    question: 'Selon le Messager d\'Allah ﷺ, qui est véritablement le plus fort parmi les hommes ?',
    category: 'Hilm & Maîtrise de Soi',
    difficulty: 'moyen',
    arabic: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ',
    options: [
      'A. Celui qui terrasse ses adversaires par sa force physique.',
      'B. Celui qui sait maîtriser sa colère face à la provocation.',
      'C. Celui qui ne ressent jamais aucune émotion ni tristesse.'
    ],
    correctIndex: 1,
    explanation: 'Le Prophète ﷺ a enseigné que la véritable force ne réside pas dans les muscles, mais dans la capacité du croyant à dompter son âme et à retenir sa colère lorsque le Shayṭān cherche à l\'enflammer.',
    hadithOrQuranRef: 'Sahih Al-Bukhari (n°6114) et Sahih Muslim (n°2609)',
    xpReward: 30
  },

  // 17. La Douceur (Ar-Rifq)
  {
    id: 'quiz_hilm_rifq',
    question: 'Quelle est la promesse faite par le Prophète ﷺ concernant la douceur (Ar-Rifq) dans nos réactions ?',
    category: 'Hilm & Maîtrise de Soi',
    difficulty: 'moyen',
    arabic: 'إِنَّ الرِّفْقَ لَا يَكُونُ فِي شَيْءٍ إِلَّا زَانَهُ',
    options: [
      'A. La douceur ne se trouve dans une chose sans la parer, et n\'en est retirée sans l\'enlaidir.',
      'B. La douceur est un signe de faiblesse face à la contradiction.',
      'C. La douceur est réservée uniquement envers les enfants.'
    ],
    correctIndex: 0,
    explanation: 'La douceur (*Rifq*) et l\'indulgence désamorcent les insufflations de division et apportent la barakah dans toute situation difficile.',
    hadithOrQuranRef: 'Sahih Muslim (n°2594)',
    xpReward: 30
  },

  // 18. Le Remède face à la colère et au doute
  {
    id: 'quiz_hilm_colere_remede',
    question: 'Que nous enseigne la Sunnah pour éteindre la colère et dissiper les chuchotements du diable ?',
    category: 'Hilm & Maîtrise de Soi',
    difficulty: 'facile',
    arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    options: [
      'A. Crier fort pour évacuer immédiatement la tension.',
      'B. Dire « Aʿūdhu billāh », s\'asseoir ou s\'allonger, et faire ses ablutions.',
      'C. S\'isoler pendant plusieurs jours sans parler à personne.'
    ],
    correctIndex: 1,
    explanation: 'Face à l\'énervement insufflé par le Waswâs, la Sunnah enseigne de chercher refuge auprès d\'Allah (Istiʿādhah), de changer de posture physique et d\'éteindre le feu intérieur par l\'eau des ablutions.',
    hadithOrQuranRef: 'Sahih Al-Bukhari (n°3282) et Sunan Abi Dawud (n°4782)',
    xpReward: 30
  }
];
