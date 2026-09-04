import { Scene, Quiz, RealAction, ClimaxStep } from '../types';

export const QUIZZES: Record<string, Quiz> = {
  quiz_istiadhah: {
    id: 'quiz_istiadhah',
    topic: 'Istiʿādhah',
    promptSpeaker: 'noura',
    question: 'Que peut-on dire lorsqu\'on cherche refuge auprès d\'Allah contre Shayṭān ?',
    options: [
      { id: 'A', text: 'Il n\'y a rien à dire, il faut juste ignorer.', isCorrect: false },
      { id: 'B', text: 'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm.', isCorrect: true },
      { id: 'C', text: 'Une formule que chacun invente.', isCorrect: false },
      { id: 'D', text: 'Il faut être savant pour avoir le droit de le dire.', isCorrect: false },
    ],
    correctOptionId: 'B',
    explanation: 'L’istiʿādhah est explicitement mentionnée dans le Coran : lorsqu’on cherche protection ou récitation, on demande refuge auprès d’Allah contre le Shayṭān.',
    theologicalNote: 'Ce n’est pas une arme magique, mais un rappel sincère du Créateur qui prépare le cœur à agir avec droiture.',
    reference: {
      concept: 'Istiʿādhah (Demande de refuge)',
      reference: 'Coran 16:98',
      citationText: '« Lorsque tu lis le Coran, cherche refuge auprès d\'Allah contre le diable banni. »',
      sourceType: 'Coran',
      arabic: 'فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ'
    }
  },
  quiz_taaruf: {
    id: 'quiz_taaruf',
    topic: 'Taʿāruf',
    promptSpeaker: 'noura',
    question: 'Pourquoi Allah a-t-Il créé les peuples et les tribus ?',
    options: [
      { id: 'A', text: 'Pour qu\'ils se comparent.', isCorrect: false },
      { id: 'B', text: 'Pour que les gens puissent se connaître.', isCorrect: true },
      { id: 'C', text: 'Pour que chacun reste de son côté.', isCorrect: false },
      { id: 'D', text: 'Pour déterminer qui est supérieur.', isCorrect: false },
    ],
    correctOptionId: 'B',
    explanation: 'Coran 49:13 indique que les peuples et tribus ont été créés « pour que vous vous entreconnaissiez » (Taʿāruf). Le verset précise que le plus noble auprès d’Allah est le plus pieux, non celui du groupe le plus fort.',
    reference: {
      concept: 'Taʿāruf (L’entre-connaissance)',
      reference: 'Coran 49:13',
      citationText: '« ...et Nous avons fait de vous des nations et des tribus, pour que vous vous entreconnaissiez. Le plus noble d\'entre vous, auprès d\'Allah, est le plus pieux. »',
      sourceType: 'Coran',
      arabic: 'وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ'
    }
  },
  quiz_adab: {
    id: 'quiz_adab',
    topic: 'Adab',
    promptSpeaker: 'noura',
    question: 'Que faire lorsqu\'on n\'a rien de bon à dire ?',
    options: [
      { id: 'A', text: 'Parler quand même.', isCorrect: false },
      { id: 'B', text: 'Répondre sur le même ton.', isCorrect: false },
      { id: 'C', text: 'Garder le silence.', isCorrect: true },
      { id: 'D', text: 'Se moquer.', isCorrect: false },
    ],
    correctOptionId: 'C',
    explanation: 'Le Prophète ﷺ a enseigné de parler en bien ou de garder le silence. Savoir se taire lorsqu’on n’a rien de constructif est une preuve de sagesse et de foi.',
    reference: {
      concept: 'Adab du langage (Parler en bien ou se taire)',
      reference: 'Sahih al-Bukhari 6018',
      citationText: '« Que celui qui croit en Allah et au Jour dernier dise du bien ou qu\'il se taise. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sahih al-Bukhari (Hadith 6018)'
    }
  },
  quiz_sabr: {
    id: 'quiz_sabr',
    topic: 'Sabr',
    promptSpeaker: 'noura',
    question: 'Quel comportement correspond le mieux au sabr ?',
    options: [
      { id: 'A', text: 'Insister jusqu\'à ce que l\'autre accepte.', isCorrect: false },
      { id: 'B', text: 'Persévérer avec patience face à la difficulté.', isCorrect: true },
      { id: 'C', text: 'Abandonner immédiatement.', isCorrect: false },
      { id: 'D', text: 'Faire semblant que ça ne fait pas mal.', isCorrect: false },
    ],
    correctOptionId: 'B',
    explanation: 'Le Sabr est une endurance constructive : on accepte la réalité d’un refus ou d’une épreuve sans s’emporter, sans s’obstiner avec force, et sans se résigner au désespoir.',
    reference: {
      concept: 'Sabr (Patience & Endurance)',
      reference: 'Coran 2:153',
      citationText: '« Ô les croyants ! Cherchez secours dans l\'endurance et la prière. Car Allah est avec ceux qui sont endurants. »',
      sourceType: 'Coran',
      arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ'
    }
  },
  quiz_niyyah: {
    id: 'quiz_niyyah',
    topic: 'Niyyah',
    promptSpeaker: 'noura',
    question: 'Dans une bonne action, quelle chose compte notamment auprès d\'Allah ?',
    options: [
      { id: 'A', text: 'Être applaudi.', isCorrect: false },
      { id: 'B', text: 'Être impressionnant.', isCorrect: false },
      { id: 'C', text: 'L\'intention avec laquelle on agit.', isCorrect: true },
      { id: 'D', text: 'Recevoir quelque chose en retour.', isCorrect: false },
    ],
    correctOptionId: 'C',
    explanation: 'Le hadith célèbre de l’Imam Bukhari établit que la valeur spirituelle de chaque action dépend de la pureté de l’intention (la Niyyah).',
    reference: {
      concept: 'Niyyah (L’Intention pure)',
      reference: 'Sahih al-Bukhari 1',
      citationText: '« Les actions ne valent que par les intentions qui les animent, et chacun ne recevra que selon son intention. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sahih al-Bukhari (Hadith 1)'
    }
  },
  quiz_shukr: {
    id: 'quiz_shukr',
    topic: 'Shukr',
    promptSpeaker: 'noura',
    question: 'Comment appelle-t-on la gratitude envers Allah pour Ses bienfaits ?',
    options: [
      { id: 'A', text: 'Le sabr.', isCorrect: false },
      { id: 'B', text: 'L\'adab.', isCorrect: false },
      { id: 'C', text: 'Le shukr.', isCorrect: true },
      { id: 'D', text: 'La niyyah.', isCorrect: false },
    ],
    correctOptionId: 'C',
    explanation: 'Le Shukr est la reconnaissance sincère des dons d’Allah. Le Coran enseigne que la gratitude attire davantage de bienfaits.',
    reference: {
      concept: 'Shukr (La Gratitude)',
      reference: 'Coran 14:7',
      citationText: '« Si vous êtes reconnaissants, très certainement J\'augmenterai [Mes bienfaits] pour vous. »',
      sourceType: 'Coran',
      arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ'
    }
  },
  quiz_ilm: {
    id: 'quiz_ilm',
    topic: 'ʿIlm',
    promptSpeaker: 'noura',
    question: 'Tout ce que tu as appris aujourd\'hui... qu\'est-ce qui t\'a réellement permis d\'avancer ?',
    options: [
      { id: 'A', text: 'La chance.', isCorrect: false },
      { id: 'B', text: 'L\'XP.', isCorrect: false },
      { id: 'C', text: 'Le ʿilm, les efforts et le fait de passer à l\'action.', isCorrect: true },
      { id: 'D', text: 'Le fait d\'avoir toujours eu raison.', isCorrect: false },
    ],
    correctOptionId: 'C',
    explanation: 'Le savoir seul ne suffit pas s’il reste abstrait. Il prend vie lorsqu’il est soutenu par l’effort intérieur et concrétisé par l’action dans la réalité.',
    reference: {
      concept: 'ʿIlm & Action (Le savoir utile)',
      reference: 'Sahih Muslim 2664 & Enseignement',
      citationText: '« Recherche avec ardeur ce qui t\'est profitable, demande l\'aide d\'Allah et ne sois pas impuissant. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sahih Muslim (Hadith 2664)'
    }
  }
};

export const REAL_ACTIONS: Record<string, RealAction> = {
  action_lit: {
    id: 'action_lit',
    title: 'Ranger ton lit',
    instruction: 'Prends une minute pour faire ou bien ranger ton lit dans la vraie vie.',
    subtext: 'Une petite habitude simple qui installe la clarté pour la journée.',
    xpReward: 20,
    reflectionPrompt: 'As-tu remis ton lit en ordre ce matin ou vas-tu le faire tout de suite ?'
  },
  action_parler: {
    id: 'action_parler',
    title: 'Adresser la parole',
    instruction: 'Aujourd\'hui : adresse la parole avec bienveillance à quelqu\'un que tu connais peu.',
    subtext: 'Un simple mot ou une salutation respectueuse suffit à initier le taʿāruf.',
    xpReward: 50,
    reflectionPrompt: 'Prêt à tenter une petite salutation bienveillante aujourd\'hui ?'
  },
  action_geste: {
    id: 'action_geste',
    title: 'Une bonne action discrète',
    instruction: 'Aujourd\'hui : fais une petite bonne action sans chercher à être vu ni félicité.',
    subtext: 'Un geste purifié pour Allah seul, qui garde la niyyah humble.',
    xpReward: 50,
    reflectionPrompt: 'Un geste d\'aide discret pour un proche ou un voisin.'
  },
  action_mission_jour: {
    id: 'action_mission_jour',
    title: 'Mission du Jour : As-salāmu ʿalaykum',
    instruction: 'Va vers quelqu\'un. Dis-lui : « As-salāmu ʿalaykum ». Puis laisse la rencontre se faire naturellement.',
    subtext: 'Le meilleur des deux est celui qui commence par le salām (Sahih al-Bukhari 6237).',
    xpReward: 100,
    reflectionPrompt: 'La paix offerte de bon cœur ouvre les portes de la véritable fraternité.'
  }
};

export const CLIMAX_STEPS: ClimaxStep[] = [
  {
    stepNumber: 1,
    id: 'step_istiadhah',
    title: '1. Se rappeler d\'Allah',
    quote: 'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm',
    arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    meaning: 'Je cherche refuge auprès d\'Allah contre le doute et le découragement.',
    description: 'Face au doute oppressant, chercher refuge auprès d’Allah recentre l’âme et dissipe la peur.'
  },
  {
    stepNumber: 2,
    id: 'step_ilm',
    title: '2. Se rappeler ce qu\'il a appris',
    quote: 'ʿIlm — Savoir & Compréhension',
    arabic: 'العِلْم',
    meaning: 'Se remémorer les repères authentiques et les leçons du chemin.',
    description: 'La connaissance éclaire l’esprit et empêche les fausses pensées de prendre racine.'
  },
  {
    stepNumber: 3,
    id: 'step_sabr',
    title: '3. Accepter la difficulté',
    quote: 'Sabr — Patience Persévérante',
    arabic: 'الصَّبْر',
    meaning: 'Accueillir les épreuves sans panique, sans colère et sans renoncer.',
    description: 'La difficulté fait partie de l’apprentissage ; l’endurance est la clé de la constance.'
  },
  {
    stepNumber: 4,
    id: 'step_adab',
    title: '4. Garder un bon comportement',
    quote: 'Adab — Noblesse & Retenue',
    arabic: 'الأَدَب',
    meaning: 'Préserver la douceur, la politesse et la paix intérieure.',
    description: 'Ne jamais répondre à la négativité par l’agressivité ou la vanité.'
  },
  {
    stepNumber: 5,
    id: 'step_effort',
    title: '5. Agir avec ardeur',
    quote: 'Effort — Poser les causes',
    arabic: 'بَذْلُ الجُهْد',
    meaning: 'Faire de son mieux sans prétendre être impuissant.',
    description: 'Allah récompense l’effort sincère de celui qui cherche ce qui lui est profitable.'
  },
  {
    stepNumber: 6,
    id: 'step_action',
    title: '6. Continuer d\'avancer',
    quote: 'Action — La marche constante',
    arabic: 'المُضِيُّ فِي الطَّرِيق',
    meaning: 'Faire le pas suivant malgré l’incertitude et persévérer.',
    description: 'Le Waswas disparaît dès lors que l’on s’engage résolument dans le chemin du bien.'
  }
];

export const CHAPTER_1_SCENES: Scene[] = [
  // SCÈNE 1 — LA CHAMBRE
  {
    id: 1,
    title: 'La Chambre',
    subtitle: '« Le premier pas »',
    location: 'Chambre du protagoniste, matin',
    requiredXp: 0,
    backgroundTheme: 'chambre',
    beats: [
      {
        id: 's1_b1',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Encore une journée...',
        emotion: 'thoughtful'
      },
      {
        id: 's1_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'J\'aimerais bien avoir des amis.\n\nMais... je ne sais même pas par où commencer.',
        emotion: 'worried'
      },
      {
        id: 's1_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Peut-être que le premier pas est plus proche que tu ne le penses.',
        emotion: 'smiling'
      },
      {
        id: 's1_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Noura ?',
        emotion: 'surprised'
      },
      {
        id: 's1_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu veux avancer aujourd\'hui ?',
        emotion: 'smiling'
      },
      {
        id: 's1_b6',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Oui.',
        emotion: 'determined'
      },
      {
        id: 's1_b7',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Alors commence par une petite chose.',
        emotion: 'smiling'
      },
      {
        id: 's1_b8',
        type: 'real_action',
        realActionId: 'action_lit',
        text: 'Ranger ton lit.'
      },
      {
        id: 's1_b9',
        type: 'xp',
        xpAmount: 20,
        xpReason: 'Action réelle validée : Première habitude accomplie'
      },
      {
        id: 's1_b10',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Ce n\'est pas grand-chose...',
        emotion: 'thoughtful'
      },
      {
        id: 's1_b11',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Les grandes habitudes commencent souvent par de petites actions.',
        emotion: 'smiling'
      },
      {
        id: 's1_b12',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Bon... première étape accomplie.',
        emotion: 'smiling'
      },
      {
        id: 's1_b13',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Bravo Othmân ! Avant de franchir le pas, laisse-moi t\'expliquer comment fonctionne l\'interface du jeu :',
        emotion: 'smiling'
      },
      {
        id: 's1_b14',
        type: 'dialogue',
        speaker: 'noura',
        text: '📜 Si tu veux rejouer une quête ou accomplir tes défis du jour, clique en bas sur l\'onglet « Quêtes ».',
        emotion: 'smiling'
      },
      {
        id: 's1_b15',
        type: 'dialogue',
        speaker: 'noura',
        text: '📖 Si tu veux voir tes acquis et les fiches de sagesse débloquées, clique sur le « petit livre » en haut à droite.',
        emotion: 'smiling'
      },
      {
        id: 's1_b16',
        type: 'dialogue',
        speaker: 'noura',
        text: '👤 Et si tu veux changer ton apparence, ta coupe de cheveux ou ta tenue de voyageur, ça se passe dans ton « Profil » !',
        emotion: 'smiling'
      },
      {
        id: 's1_b17',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Est-ce que tout est bien compris pour notre voyage ?',
        emotion: 'smiling'
      },
      {
        id: 's1_b18',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othmân répond à Noura :',
        choices: [
          {
            id: 'c1',
            label: '« Oui, tout est très clair ! On y va ! »',
            badge: 'Prêt'
          },
          {
            id: 'c2',
            label: '« Rappelle-moi : Quêtes en bas, Livre en haut, Profil pour la tenue ? »',
            badge: 'Récapitulatif'
          }
        ]
      },
      {
        id: 's1_b19',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Exactement ! Tu as tout en main. Plaçons notre confiance en Dieu et prenons la route !',
        emotion: 'determined'
      }
    ]
  },

  // SCÈNE 2 — LE POTEAU AUX CHEMINS
  {
    id: 2,
    title: 'Le Poteau aux Chemins',
    subtitle: '« Où aller ? »',
    location: 'Carrefour des sentiers, lisière de forêt',
    requiredXp: 20,
    backgroundTheme: 'carrefour',
    beats: [
      {
        id: 's2_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othmân et Noura arrivent devant un poteau indicateur en bois sculpté au croisement des sentiers.'
      },
      {
        id: 's2_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Regarde toutes les directions gravées sur ces panneaux de bois...',
        emotion: 'thoughtful'
      },
      {
        id: 's2_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Chaque flèche invite à une intention noble. Tu n\'as pas besoin de tout connaître d\'un coup.',
        emotion: 'smiling'
      },
      {
        id: 's2_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Alors comment savoir par laquelle commencer ?',
        emotion: 'worried'
      },
      {
        id: 's2_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Pose une bonne intention sincère (niyyah). Le chemin s\'éclaire dès que le cœur sait pour quoi il marche.',
        emotion: 'smiling'
      },
      {
        id: 's2_b6',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othmân lit les inscriptions sculptées sur le poteau et choisit son orientation :',
        choices: [
          {
            id: 'c1',
            label: '« Se faire des amis » — Chapitre 1 : Les Rencontres & la Fraternité',
            badge: 'Chapitre 1 Actif',
            interactiveSpot: { x: '35%', y: '55%' }
          },
          {
            id: 'c2',
            label: '« Chercher le savoir » — Apprendre et comprendre avec sagesse',
            disabled: true,
            badge: 'Chapitre 2 (Bientôt)',
            disabledReason: 'Ce chemin mène à une future aventure ! Termine d\'abord la quête du Chapitre 1 (« Les Rencontres »). Les autres chapitres arrivent très bientôt in sha Allah !',
            interactiveSpot: { x: '50%', y: '45%' }
          },
          {
            id: 'c3',
            label: '« Aider & faire le bien » — Rendre service aux gens sur la route',
            disabled: true,
            badge: 'Chapitre 3 (Bientôt)',
            disabledReason: 'Ce chemin mène à une future aventure ! Termine d\'abord la quête du Chapitre 1 (« Les Rencontres »). Les autres chapitres arrivent très bientôt in sha Allah !',
            interactiveSpot: { x: '65%', y: '50%' }
          },
          {
            id: 'c4',
            label: '« Se préparer aux épreuves » — S\'entraîner face à l\'adversité',
            disabled: true,
            badge: 'Chapitre 4 (Bientôt)',
            disabledReason: 'Ce chemin mène à une future aventure ! Termine d\'abord la quête du Chapitre 1 (« Les Rencontres »). Les autres chapitres arrivent très bientôt in sha Allah !',
            interactiveSpot: { x: '80%', y: '60%' }
          }
        ]
      },
      {
        id: 's2_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'C\'est cette intention que je veux suivre pour commencer notre voyage !',
        emotion: 'determined'
      },
      {
        id: 's2_b8',
        type: 'dialogue',
        speaker: 'noura',
        text: 'C\'est un choix magnifique. Mettons-nous en route avec confiance et constance.',
        emotion: 'smiling'
      },
      {
        id: 's2_b9',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Les deux compagnons s\'engagent d\'un pas résolu sur le sentier balisé.'
      }
    ]
  },

  // SCÈNE 3 — LE PREMIER WASWAS
  {
    id: 3,
    title: 'Le Premier Waswas',
    subtitle: '« La pensée qui bloque »',
    location: 'Sentier assombri par la brume',
    requiredXp: 60,
    backgroundTheme: 'waswas',
    beats: [
      {
        id: 's3_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le chemin se transforme. Un Waswas apparaît devant eux. Il n\'est pas présenté comme une créature ayant un pouvoir réel sur le joueur : il symbolise les pensées qui poussent à abandonner.'
      },
      {
        id: 's3_b2',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Tu n\'y arriveras jamais.',
        emotion: 'shadow'
      },
      {
        id: 's3_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: '...',
        emotion: 'worried'
      },
      {
        id: 's3_b4',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Tu veux te faire des amis ?\n\nTu n\'es même pas capable d\'aller vers les autres.',
        emotion: 'shadow'
      },
      {
        id: 's3_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Noura...',
        emotion: 'worried'
      },
      {
        id: 's3_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Oui ?',
        emotion: 'thoughtful'
      },
      {
        id: 's3_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Comment on combat un waswas ?',
        emotion: 'thoughtful'
      },
      {
        id: 's3_b8',
        type: 'quiz',
        quizId: 'quiz_istiadhah',
        unlockedConceptId: 'istiadhah'
      },
      {
        id: 's3_b9',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm.',
        arabicText: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
        emotion: 'determined'
      },
      {
        id: 's3_b10',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le Waswas commence à perdre de sa consistance et s\'estompe.'
      },
      {
        id: 's3_b11',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Ça a marché !',
        emotion: 'smiling'
      },
      {
        id: 's3_b12',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Attention.',
        emotion: 'thoughtful'
      },
      {
        id: 's3_b13',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Pourquoi ?',
        emotion: 'surprised'
      },
      {
        id: 's3_b14',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Ce n\'est pas une arme magique.',
        emotion: 'thoughtful'
      },
      {
        id: 's3_b15',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu as cherché refuge auprès d\'Allah.\n\nMaintenant, il faut aussi agir.',
        emotion: 'smiling'
      },
      {
        id: 's3_b16',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le joueur fait un pas en avant.'
      },
      {
        id: 's3_b17',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Tu vas échouer...',
        emotion: 'shadow'
      },
      {
        id: 's3_b18',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Peut-être.\n\nMais je vais quand même avancer.',
        emotion: 'determined'
      },
      {
        id: 's3_b19',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le Waswas se dissout complètement dans l\'air matinal.'
      },
      {
        id: 's3_b20',
        type: 'xp',
        xpAmount: 40,
        xpReason: 'Notion comprise : L’Istiʿādhah et le premier pas d’action'
      }
    ]
  },

  // SCÈNE 4 — « JE NE VEUX PLUS ÊTRE SEUL »
  {
    id: 4,
    title: '« Je ne veux plus être seul »',
    subtitle: 'Taʿāruf',
    location: 'Abords du village fleuri',
    requiredXp: 120,
    backgroundTheme: 'vallee',
    beats: [
      {
        id: 's4_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le personnage et Noura arrivent près d\'un village. Le personnage aperçoit plusieurs personnes qui s\'affairent.'
      },
      {
        id: 's4_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Il y a beaucoup de monde...',
        emotion: 'worried'
      },
      {
        id: 's4_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Oui.',
        emotion: 'smiling'
      },
      {
        id: 's4_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je ne sais pas quoi leur dire.',
        emotion: 'thoughtful'
      },
      {
        id: 's4_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu veux te faire des amis, mais tu as peur d\'aller vers eux.',
        emotion: 'smiling'
      },
      {
        id: 's4_b6',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Un peu...',
        emotion: 'worried'
      },
      {
        id: 's4_b7',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Alors apprenons quelque chose.',
        emotion: 'smiling'
      },
      {
        id: 's4_b8',
        type: 'quiz',
        quizId: 'quiz_taaruf',
        unlockedConceptId: 'taaruf'
      },
      {
        id: 's4_b9',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Donc... aller vers quelqu\'un pour apprendre à le connaître, ce n\'est pas bizarre.',
        emotion: 'smiling'
      },
      {
        id: 's4_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Non.',
        emotion: 'smiling'
      },
      {
        id: 's4_b11',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Alors je vais essayer.',
        emotion: 'determined'
      },
      {
        id: 's4_b12',
        type: 'real_action',
        realActionId: 'action_parler',
        text: 'Aujourd\'hui : adresse la parole à quelqu\'un que tu connais peu.'
      },
      {
        id: 's4_b13',
        type: 'xp',
        xpAmount: 50,
        xpReason: 'Action réelle validée : Démarche de Taʿāruf'
      },
      {
        id: 's4_b14',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'J\'ai réussi à parler à quelqu\'un.',
        emotion: 'smiling'
      },
      {
        id: 's4_b15',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu vois ?\n\nLe premier pas était déjà une victoire.',
        emotion: 'smiling'
      }
    ]
  },

  // SCÈNE 5 — LE VILLAGE
  {
    id: 5,
    title: 'Le Village',
    subtitle: '« Les bonnes manières »',
    location: 'Place centrale du village, fontaine et puits',
    requiredXp: 190,
    backgroundTheme: 'village',
    beats: [
      {
        id: 's5_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le personnage arrive dans le village. Il aperçoit trois habitants : l\'un travaille près d\'un puits, une femme est sous un auvent, un jeune passe rapidement devant lui.'
      },
      {
        id: 's5_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je pourrais peut-être leur parler.',
        emotion: 'thoughtful'
      },
      {
        id: 's5_b3',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Il s\'approche. Mais il entend deux habitants discuter vivement.'
      },
      {
        id: 's5_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je pourrais intervenir...',
        emotion: 'thoughtful'
      },
      {
        id: 's5_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Es-tu certain d\'avoir quelque chose de bon à ajouter ?',
        emotion: 'thoughtful'
      },
      {
        id: 's5_b6',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Pas vraiment.',
        emotion: 'worried'
      },
      {
        id: 's5_b7',
        type: 'quiz',
        quizId: 'quiz_adab',
        unlockedConceptId: 'adab'
      },
      {
        id: 's5_b8',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Donc parfois, ne rien dire est aussi une bonne décision.',
        emotion: 'thoughtful'
      },
      {
        id: 's5_b9',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Exactement.',
        emotion: 'smiling'
      },
      {
        id: 's5_b10',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je pensais qu\'il fallait toujours faire quelque chose.',
        emotion: 'thoughtful'
      },
      {
        id: 's5_b11',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Faire le bien, ce n\'est pas forcément parler.',
        emotion: 'smiling'
      },
      {
        id: 's5_b12',
        type: 'xp',
        xpAmount: 30,
        xpReason: 'Notion comprise : L’Adab et la sagesse du silence bienveillant'
      }
    ]
  },

  // SCÈNE 6 — LE REFUS
  {
    id: 6,
    title: 'Le Refus',
    subtitle: '« Tout le monde ne dira pas oui »',
    location: 'Ruelle ombragée du village',
    requiredXp: 280,
    backgroundTheme: 'refus',
    beats: [
      {
        id: 's6_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le personnage aperçoit un jeune villageois qui répare une corde.'
      },
      {
        id: 's6_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Salam alaykoum !',
        arabicText: 'السَّلَامُ عَلَيْكُمْ',
        emotion: 'smiling'
      },
      {
        id: 's6_b3',
        type: 'dialogue',
        speaker: 'jeune',
        text: 'Wa alaykoum salam.',
        arabicText: 'وَعَلَيْكُمُ السَّلَامُ',
        emotion: 'neutral'
      },
      {
        id: 's6_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Tu veux venir avec nous ?',
        emotion: 'smiling'
      },
      {
        id: 's6_b5',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le jeune hésite un instant.'
      },
      {
        id: 's6_b6',
        type: 'dialogue',
        speaker: 'jeune',
        text: 'Désolé... non.',
        emotion: 'neutral'
      },
      {
        id: 's6_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Ah...',
        emotion: 'worried'
      },
      {
        id: 's6_b8',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le jeune salue discrètement de la main et s\'en va vaquer à ses occupations.'
      },
      {
        id: 's6_b9',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'J\'ai fait quelque chose de mal ?',
        emotion: 'worried'
      },
      {
        id: 's6_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Pas forcément.',
        emotion: 'thoughtful'
      },
      {
        id: 's6_b11',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Alors pourquoi il a refusé ?',
        emotion: 'worried'
      },
      {
        id: 's6_b12',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu ne peux pas contrôler la réponse des autres.',
        emotion: 'smiling'
      },
      {
        id: 's6_b13',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Ça fait quand même mal.',
        emotion: 'worried'
      },
      {
        id: 's6_b14',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Oui.',
        emotion: 'thoughtful'
      },
      {
        id: 's6_b15',
        type: 'quiz',
        quizId: 'quiz_sabr',
        unlockedConceptId: 'sabr'
      },
      {
        id: 's6_b16',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Donc le sabr, ce n\'est pas forcer quelqu\'un.',
        emotion: 'thoughtful'
      },
      {
        id: 's6_b17',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Non.',
        emotion: 'smiling'
      },
      {
        id: 's6_b18',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Et ce n\'est pas non plus prétendre que je ne ressens rien.',
        emotion: 'thoughtful'
      },
      {
        id: 's6_b19',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Exactement.\n\nTu acceptes la difficulté et tu continues à avancer correctement.',
        emotion: 'smiling'
      },
      {
        id: 's6_b20',
        type: 'xp',
        xpAmount: 50,
        xpReason: 'Notion comprise : Le Sabr face au refus'
      }
    ]
  },

  // SCÈNE 7 — LE GESTE
  {
    id: 7,
    title: 'Le Geste',
    subtitle: '« Pourquoi aider ? »',
    location: 'Chemin bordé d\'oliviers à la sortie du village',
    requiredXp: 380,
    backgroundTheme: 'geste',
    beats: [
      {
        id: 's7_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Sur la route, le personnage remarque qu\'un villageois a fait tomber plusieurs objets et paniers.'
      },
      {
        id: 's7_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Il faut l\'aider.',
        emotion: 'determined'
      },
      {
        id: 's7_b3',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Il commence à ramasser les affaires avec soin pour les lui tendre.'
      },
      {
        id: 's7_b4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Pourquoi l\'aides-tu ?',
        emotion: 'thoughtful'
      },
      {
        id: 's7_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Parce qu\'il en a besoin.',
        emotion: 'determined'
      },
      {
        id: 's7_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Et si personne ne te voyait ?',
        emotion: 'smiling'
      },
      {
        id: 's7_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je l\'aiderais quand même.',
        emotion: 'smiling'
      },
      {
        id: 's7_b8',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Noura sourit avec douceur.'
      },
      {
        id: 's7_b9',
        type: 'quiz',
        quizId: 'quiz_niyyah',
        unlockedConceptId: 'niyyah'
      },
      {
        id: 's7_b10',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'La niyyah...',
        emotion: 'thoughtful'
      },
      {
        id: 's7_b11',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Oui.',
        emotion: 'smiling'
      },
      {
        id: 's7_b12',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Donc je ne dois pas aider juste pour que les autres pensent que je suis quelqu\'un de bien.',
        emotion: 'thoughtful'
      },
      {
        id: 's7_b13',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Ton intention est quelque chose que tu dois surveiller toi-même.',
        emotion: 'smiling'
      },
      {
        id: 's7_b14',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Pas quelque chose que je dois montrer aux autres.',
        emotion: 'smiling'
      },
      {
        id: 's7_b15',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Exactement.',
        emotion: 'smiling'
      },
      {
        id: 's7_b16',
        type: 'real_action',
        realActionId: 'action_geste',
        text: 'Aujourd\'hui : fais une petite bonne action sans chercher à être félicité.'
      },
      {
        id: 's7_b17',
        type: 'xp',
        xpAmount: 50,
        xpReason: 'Action réelle validée : Intention pure (Niyyah)'
      }
    ]
  },

  // SCÈNE 8 — LE JARDIN ABANDONNÉ
  {
    id: 8,
    title: 'Le Jardin Abandonné',
    subtitle: '« Regarder ce qu\'on a déjà reçu »',
    location: 'Ancien verger en pierre sèche et ruisseau discret',
    requiredXp: 500,
    backgroundTheme: 'jardin',
    beats: [
      {
        id: 's8_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le groupe arrive dans un ancien jardin abandonné. Des arbres poussent encore vigoureusement malgré les années d\'oubli.'
      },
      {
        id: 's8_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je pensais qu\'il n\'y avait plus rien ici.',
        emotion: 'thoughtful'
      },
      {
        id: 's8_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Regarde mieux.',
        emotion: 'smiling'
      },
      {
        id: 's8_b4',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le personnage découvre de petites plantes aromatiques, un filet d\'eau claire et quelques figues mûres.'
      },
      {
        id: 's8_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Il y en avait encore...',
        emotion: 'smiling'
      },
      {
        id: 's8_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Parfois, on regarde tellement ce qui manque qu\'on oublie ce qui est déjà là.',
        emotion: 'smiling'
      },
      {
        id: 's8_b7',
        type: 'quiz',
        quizId: 'quiz_shukr',
        unlockedConceptId: 'shukr'
      },
      {
        id: 's8_b8',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Shukr...',
        emotion: 'thoughtful'
      },
      {
        id: 's8_b9',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Oui.',
        emotion: 'smiling'
      },
      {
        id: 's8_b10',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Donc être reconnaissant, ce n\'est pas dire que tout est parfait.',
        emotion: 'thoughtful'
      },
      {
        id: 's8_b11',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Non.',
        emotion: 'smiling'
      },
      {
        id: 's8_b12',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'C\'est reconnaître les bienfaits qu\'Allah nous a accordés, même au milieu d\'une difficulté.',
        emotion: 'smiling'
      },
      {
        id: 's8_b13',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu commences à comprendre.',
        emotion: 'smiling'
      },
      {
        id: 's8_b14',
        type: 'xp',
        xpAmount: 50,
        xpReason: 'Notion comprise : Le Shukr et la reconnaissance des bienfaits'
      }
    ]
  },

  // SCÈNE 9 — LE GRAND WASWAS (CLIMAX DU CHAPITRE)
  {
    id: 9,
    title: 'Le Grand Waswas',
    subtitle: 'Climax du Chapitre 1',
    location: 'Col de montagne assombri, vent froid et brume violette',
    requiredXp: 650,
    backgroundTheme: 'climax',
    beats: [
      {
        id: 's9_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le chemin devient sombre. Le paysage change. Le Grand Waswas apparaît : il est beaucoup plus imposant que le premier.'
      },
      {
        id: 's9_b2',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'Tu pensais vraiment pouvoir avancer ?',
        emotion: 'shadow'
      },
      {
        id: 's9_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: '...',
        emotion: 'worried'
      },
      {
        id: 's9_b4',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'Tu as été refusé.\n\nTu as hésité.\n\nTu as eu peur.\n\nEt maintenant tu veux te faire des amis ?',
        emotion: 'shadow'
      },
      {
        id: 's9_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Peut-être que je ne suis simplement pas fait pour ça.',
        emotion: 'worried'
      },
      {
        id: 's9_b6',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Noura reste silencieuse un instant.'
      },
      {
        id: 's9_b7',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Regarde derrière toi.',
        emotion: 'thoughtful'
      },
      {
        id: 's9_b8',
        type: 'memory_fragments',
        speaker: 'narration',
        text: 'Des fragments des scènes précédentes apparaissent dans la lumière : La chambre... Le village... Le premier Waswas... Le refus... Le geste... Le jardin.'
      },
      {
        id: 's9_b9',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu as appris.',
        emotion: 'smiling'
      },
      {
        id: 's9_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu as essayé.',
        emotion: 'smiling'
      },
      {
        id: 's9_b11',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu es tombé.',
        emotion: 'thoughtful'
      },
      {
        id: 's9_b12',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Et tu as continué.',
        emotion: 'determined'
      },
      {
        id: 's9_b13',
        type: 'quiz',
        quizId: 'quiz_ilm',
        unlockedConceptId: 'ilm'
      },
      {
        id: 's9_b14',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Le savoir ne suffit pas.',
        emotion: 'thoughtful'
      },
      {
        id: 's9_b15',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Continue.',
        emotion: 'smiling'
      },
      {
        id: 's9_b16',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Il faut apprendre...\n\nfaire des efforts...\n\npuis passer à l\'action.',
        emotion: 'determined'
      },
      {
        id: 's9_b17',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Voilà.',
        emotion: 'smiling'
      },
      {
        id: 's9_b18',
        type: 'climax_combat',
        speaker: 'narration',
        text: 'Le Grand Waswas attaque avec ses doutes. Mais le personnage ne lance aucun sort et ne gagne aucun pouvoir magique : il applique avec constance chaque étape de résilience spirituelle.'
      },
      {
        id: 's9_b19',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'Tu vas échouer...',
        emotion: 'shadow'
      },
      {
        id: 's9_b20',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Peut-être.\n\nMais je vais essayer quand même.',
        emotion: 'determined'
      },
      {
        id: 's9_b21',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le Grand Waswas s\'évapore complètement dans l\'aube naissante.'
      },
      {
        id: 's9_b22',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Silence. Le soleil apparaît chaleureusement derrière les montagnes dorées.'
      },
      {
        id: 's9_b23',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je pensais que mon objectif était simplement de me faire des amis.',
        emotion: 'thoughtful'
      },
      {
        id: 's9_b24',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Et maintenant ?',
        emotion: 'smiling'
      },
      {
        id: 's9_b25',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Maintenant je comprends que je dois aussi apprendre à aller vers les autres.',
        emotion: 'smiling'
      },
      {
        id: 's9_b26',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Et ?',
        emotion: 'smiling'
      },
      {
        id: 's9_b27',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'À accepter leurs réponses.',
        emotion: 'smiling'
      },
      {
        id: 's9_b28',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Et ?',
        emotion: 'smiling'
      },
      {
        id: 's9_b29',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'À faire les choses avec une bonne intention.',
        emotion: 'smiling'
      },
      {
        id: 's9_b30',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Et ?',
        emotion: 'smiling'
      },
      {
        id: 's9_b31',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'À être patient.',
        emotion: 'smiling'
      },
      {
        id: 's9_b32',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Alors...\n\non continue ?',
        emotion: 'smiling'
      },
      {
        id: 's9_b33',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Oui.',
        emotion: 'determined'
      },
      {
        id: 's9_b34',
        type: 'real_action',
        realActionId: 'action_mission_jour',
        text: 'Mission du Jour : As-salāmu ʿalaykum'
      },
      {
        id: 's9_b35',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le personnage et Noura reprennent leur route. Au loin, on aperçoit une nouvelle région verdoyante.'
      },
      {
        id: 's9_b36',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Le chemin ne fait que commencer.',
        emotion: 'smiling'
      },
      {
        id: 's9_b37',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Alors allons-y.',
        emotion: 'smiling'
      },
      {
        id: 's9_b38',
        type: 'chapter_end',
        xpAmount: 100,
        xpReason: 'Chapitre 1 terminé : Le chemin commence',
        unlockedConceptId: 'ilm'
      }
    ]
  }
];
