import { Scene, Quiz, RealAction, ClimaxStep, Beat } from '../types';

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
  quiz_doua_maison: {
    id: 'quiz_doua_maison',
    topic: 'Duʿāʾ de sortie de la maison',
    promptSpeaker: 'noura',
    question: 'Quelle invocation le Prophète ﷺ nous a-t-il enseigné de réciter en franchissant le seuil de sa maison ?',
    options: [
      { id: 'A', text: 'On ne dit rien, il suffit de courir vite.', isCorrect: false },
      { id: 'B', text: '« Bismillâh, tawakkaltu ʿalâ Allâh, wa lâ hawla wa lâ quwwata illâ billâh ».', isCorrect: true },
      { id: 'C', text: 'Une formule réservée uniquement aux longs voyages.', isCorrect: false },
      { id: 'D', text: 'On la récite seulement s\'il fait nuit dehors.', isCorrect: false },
    ],
    correctOptionId: 'B',
    explanation: 'Le Prophète ﷺ a enseigné que lorsqu\'un croyant sort en disant cette duʿāʾ, il lui est répondu : « Tu es guidé, préservé et protégé », et le diable s\'écarte de lui.',
    theologicalNote: 'Placer sa confiance en Allah (Tawakkul) dès le pas de la porte transforme chaque sortie en un acte de paix et de protection.',
    reference: {
      concept: 'Duʿāʾ de sortie de maison (Tawakkul)',
      reference: 'Abu Dawud 5095 & At-Tirmidhi 3426',
      citationText: '« Au nom d\'Allah, je place ma confiance en Allah, et il n\'y a de force ni de puissance qu\'en Allah. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sunan Abi Dawud 5095',
      arabic: 'بِسْمِ اللَّهِ ، تَوَكَّلْتُ عَلَى اللَّهِ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ'
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
  quiz_adab_boire: {
    id: 'quiz_adab_boire',
    topic: 'Adab du Boire',
    promptSpeaker: 'noura',
    question: 'Selon la noble Sunnah, quelle bienséance le Prophète ﷺ nous a-t-il enseignée avant et pendant que l\'on boit ?',
    options: [
      { id: 'A', text: 'Boire debout d\'un seul trait sans respirer.', isCorrect: false },
      { id: 'B', text: 'Boire avec la main gauche en marchant vite.', isCorrect: false },
      { id: 'C', text: 'S\'asseoir, dire Bismillâh, boire de la main droite en 3 gorgées et dire Al-Hamdulillâh.', isCorrect: true },
      { id: 'D', text: 'Souffler plusieurs fois à l\'intérieur du récipient.', isCorrect: false },
    ],
    correctOptionId: 'C',
    explanation: 'Le Prophète ﷺ a enseigné de boire assis, avec la main droite, en prononçant Bismillâh, en respirant à l\'extérieur du récipient par trois fois, et en concluant par Al-Hamdulillâh.',
    reference: {
      concept: 'Adab & Sunnah de boire',
      reference: 'Sahih Muslim 2024 & Sahih al-Bukhari 5631',
      citationText: '« Quand l\'un de vous boit, qu\'il ne respire pas dans le récipient... et le Prophète ﷺ buvait en trois gorgées en prononçant le nom d\'Allah. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sahih Muslim (2024) / Sahih al-Bukhari (5631)'
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
    xpReward: 25,
    reflectionPrompt: 'As-tu remis ton lit en ordre ce matin ou vas-tu le faire tout de suite ?'
  },
  action_eau: {
    id: 'action_eau',
    title: 'Boire un verre d\'eau (Adab prophétique)',
    instruction: 'Va chercher un verre d\'eau dans la vraie vie. Assieds-toi, tiens le verre de la main droite, dis « Bismillâh » et bois paisiblement en trois gorgées. Conclus par « Al-Hamdulillâh ».',
    subtext: 'Une sunnah quotidienne de gratitude, de calme et de présence d\'esprit.',
    xpReward: 25,
    reflectionPrompt: 'As-tu pensé à t\'asseoir et à prononcer le nom d\'Allah avant de boire ?'
  },
  action_depart: {
    id: 'action_depart',
    title: 'La Duʿāʾ du départ & préparer son sac',
    instruction: 'Vérifie que ton sac ou cartable est bien fermé dans la vraie vie. Puis récite la duʿāʾ de départ en plaçant ta confiance en Allah : « Bismillâh, tawakkaltu ʿalâ Allâh, wa lâ hawla wa lâ quwwata illâ billâh ».',
    subtext: 'Le croyant pose les causes concrètes (préparer ses affaires) et s\'en remet au Créateur avec sérénité.',
    xpReward: 50,
    reflectionPrompt: 'As-tu pris l\'habitude de confier tes pas à Allah avant de sortir de chez toi ?'
  },
  action_istiadhah: {
    id: 'action_istiadhah',
    title: 'Réciter l’Istiʿādhah & poser le pas',
    instruction: 'Prends une inspiration calme dans la vraie vie. Récite à voix claire : « Aʿūdhu billāhi mina sh-shayṭāni r-rajīm » pour chercher refuge auprès d\'Allah, puis décide d\'avancer malgré les doutes intérieurs.',
    subtext: 'La demande sincère de refuge recentre le cœur et brise l\'emprise du découragement.',
    xpReward: 25,
    reflectionPrompt: 'As-tu pris l\'habitude de demander refuge auprès d\'Allah lorsque le doute te traverse ?'
  },
  action_salam_village: {
    id: 'action_salam_village',
    title: 'Le Salām & le sourire fraternel',
    instruction: 'Aujourd\'hui : offre un Salām sincère ou un sourire chaleureux à quelqu\'un dans la vraie vie. Le Prophète ﷺ a enseigné que le sourire à son frère est une aumône (Sadaqah).',
    subtext: 'La bienveillance désarme la méfiance et transforme les cœurs fermés.',
    xpReward: 30,
    reflectionPrompt: 'As-tu offert un sourire ou un mot de paix aujourd\'hui ?'
  },
  action_sabr_refus: {
    id: 'action_sabr_refus',
    title: 'Le Sabr face au refus',
    instruction: 'Pense à un refus ou une contrariété du quotidien. Prends une profonde inspiration et dis avec ton cœur : « Al-Hamdulillâh ʿalâ kulli hāl » (Louange à Allah en toute situation) sans colère ni rancœur.',
    subtext: 'Le Sabr est une force d\'âme : on accueille la réponse de l\'autre avec respect et on continue d\'avancer dignement.',
    xpReward: 30,
    reflectionPrompt: 'As-tu déjà réussi à accepter un « non » avec calme et noblesse ?'
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
    title: 'Une bonne action discrète (Niyyah pure)',
    instruction: 'Aujourd\'hui : accomplis un geste d\'aide ou range quelque chose qui traîne dans ta maison ou ta classe, sans rien dire à personne et sans chercher à être félicité (ramasser un objet, ranger une table, rendre service discrètement).',
    subtext: 'Le Prophète ﷺ a enseigné que les actions ne valent que par les intentions (Sahih al-Bukhari 1). Agir en secret pour Allah préserve la pureté du cœur.',
    xpReward: 35,
    reflectionPrompt: 'As-tu déjà accompli une bonne action que personne d\'autre qu\'Allah n\'a vue ?'
  },
  action_shukr: {
    id: 'action_shukr',
    title: 'Le Shukr & le soin du vivant',
    instruction: 'Prends une minute dans la vraie vie : 1. Pense à 3 bienfaits précieux qu\'Allah t\'a accordés (santé, toit, famille, eau qui coule) et dis avec ton cœur « Al-Hamdulillâh ». 2. Arrose une plante chez toi ou dans ton quartier pour prendre soin de la création.',
    subtext: 'Le Prophète ﷺ a enseigné que la gratitude sincère augmente les bienfaits d\'Allah (Coran 14:7). Prendre soin de la vie est un acte d\'adoration.',
    xpReward: 35,
    reflectionPrompt: 'Quels sont les trois bienfaits pour lesquels tu es le plus reconnaissant aujourd\'hui ?'
  },
  action_mission_jour: {
    id: 'action_mission_jour',
    title: 'Mission du Jour : As-salāmu ʿalaykum',
    instruction: 'Va vers quelqu\'un. Dis-lui : « As-salāmu ʿalaykum ». Puis laisse la rencontre se faire naturellement.',
    subtext: 'Le meilleur des deux est celui qui commence par le salām (Sahih al-Bukhari 6237).',
    xpReward: 50,
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
    subtitle: '« L’Éveil & le Premier Pas »',
    location: 'Chambre d’Othmân sur les hauteurs, aube',
    requiredXp: 0,
    backgroundTheme: 'chambre',
    beats: [
      {
        id: 's1_hook_1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'L’aube éclaire doucement les murs de la chambre. Othmân est assis au bord de son lit, les yeux posés sur son sac de voyage encore vide.',
        emotion: 'thoughtful'
      },
      {
        id: 's1_hook_2',
        type: 'dialogue',
        speaker: 'noura',
        text: 'C’est aujourd’hui, Othmân. Le jour où tu as décidé de descendre vers le village.',
        emotion: 'smiling'
      },
      {
        id: 's1_hook_3',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Oui... J’ai toujours vécu protégé sur cette colline. Je veux apprendre, découvrir le monde et aller vers les autres... mais dès que j’y pense, j’ai peur de ne pas trouver ma place.',
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: 'Peur de l’inconnu & sentiment d’illégitimité'
      },
      {
        id: 's1_hook_4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'La sagesse et les nobles compagnons ne se trouvent pas en restant enfermé, mon fils. Par quoi veux-tu commencer ta journée ?',
        emotion: 'smiling'
      },
      {
        id: 's1_choice_morning',
        type: 'choice',
        speaker: 'personnage',
        text: '« Par quoi Othmân choisit-il de commencer sa matinée ? »',
        choices: [
          {
            id: 'c_eau',
            label: '💧 Boire un peu d’eau fraîche (Adab de la Sunnah)',
            responsePreview: '« Je vais commencer par boire un peu d’eau. »',
            choiceType: 'habit',
            traitGains: { adab: 5, ilm: 3 },
            setNarrativeFlags: { morning_gesture: 'water' },
            habitMessage: 'Adab prophétique • Othmân apaise son corps et son esprit.'
          },
          {
            id: 'c_ordre',
            label: '🧹 Ranger ma chambre et faire mon lit (Discipline & Niyyah)',
            responsePreview: '« Je vais commencer par ranger un peu ma chambre. »',
            choiceType: 'habit',
            traitGains: { discipline: 5, sabr: 3 },
            setNarrativeFlags: { morning_gesture: 'order' },
            habitMessage: 'Discipline & Pureté • Othmân ordonne son espace avec soin.'
          },
          {
            id: 'c_sandales',
            label: '👟 Préparer mes sandales pour le départ (Tawakkul)',
            responsePreview: '« Je vais préparer mes sandales, je suis prêt à sortir. »',
            choiceType: 'habit',
            traitGains: { sabr: 5, vitalite: 3 },
            setNarrativeFlags: { morning_gesture: 'sandals' },
            habitMessage: 'Élan & Tawakkul • Othmân se prépare à franchir le seuil.'
          }
        ]
      },

      // --- BRANCHE 1 : BOIRE DE L'EAU (Adab du boire) ---
      {
        id: 's1_water_othman',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'water' },
        text: 'Je vais commencer par boire un peu d’eau.',
        emotion: 'smiling'
      },
      {
        id: 's1_water_noura_ask',
        type: 'dialogue',
        speaker: 'noura',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'water' },
        text: 'Avant de boire... connais-tu quelques règles de bienséance que le Prophète ﷺ nous a enseignées ?',
        emotion: 'smiling'
      },
      {
        id: 's1_water_quiz',
        type: 'quiz',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'water' },
        quizId: 'quiz_adab_boire',
        unlockedConceptId: 'adab_boire'
      },
      {
        id: 's1_water_noura_teach',
        type: 'dialogue',
        speaker: 'noura',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'water' },
        text: 'Alors prends ton temps. Le Prophète ﷺ nous a enseigné une belle manière de boire : commencer par le nom d\'Allah, boire avec la main droite et boire par petites gorgées. Même les petites habitudes peuvent devenir une bonne œuvre lorsque l\'on y prête attention.',
        emotion: 'smiling'
      },
      {
        id: 's1_water_othman_drink',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'water' },
        text: 'Al-Hamdulillâh... L’eau est si fraîche. Je me sens paisible et prêt à me mettre en marche.',
        emotion: 'smiling',
        actionVignette: {
          icon: '💧',
          badge: 'Sunnah du Quotidien',
          title: 'L’Adab de Boire',
          description: 'S’asseoir, prononcer Bismillâh et boire paisiblement de la main droite.',
          glowColor: 'cyan'
        }
      },

      // --- BRANCHE 2 : RANGER SA CHAMBRE (Niyyah) ---
      {
        id: 's1_order_othman',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'order' },
        text: 'Je vais commencer par ranger un peu ma chambre.',
        emotion: 'thoughtful'
      },
      {
        id: 's1_order_noura_ask',
        type: 'dialogue',
        speaker: 'noura',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'order' },
        text: 'C\'est un bon début. Mettre de l\'ordre autour de soi peut aussi aider à mettre de l\'ordre dans ses pensées. Mais sais-tu avec quelle intention nous devons faire ces gestes ?',
        emotion: 'smiling'
      },
      {
        id: 's1_order_quiz',
        type: 'quiz',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'order' },
        quizId: 'quiz_niyyah',
        unlockedConceptId: 'niyyah'
      },
      {
        id: 's1_order_noura_teach',
        type: 'dialogue',
        speaker: 'noura',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'order' },
        text: '« Les actions ne valent que par leurs intentions ». Ranger son lit ou nettoyer son espace devient un acte de beauté et d\'adoration dès lors que le cœur est sincère.',
        emotion: 'smiling'
      },
      {
        id: 's1_order_othman_done',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'order' },
        text: 'Tout est en ordre maintenant. Mon regard se pose sur mon sac de voyage... je suis prêt à descendre.',
        emotion: 'determined',
        actionVignette: {
          icon: '🧹',
          badge: 'Pureté & Ordre',
          title: 'L’Intention Sincère (Niyyah)',
          description: 'Poser l’ordre extérieur pour clarifier l’esprit avec une intention pure.',
          glowColor: 'amber'
        }
      },

      // --- BRANCHE 3 : PRÉPARER SES SANDALES (Tawakkul & Duʿāʾ) ---
      {
        id: 's1_sandals_othman',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'sandals' },
        text: 'Je vais préparer mes sandales. Je crois que je suis prêt à sortir.',
        emotion: 'determined'
      },
      {
        id: 's1_sandals_noura_ask',
        type: 'dialogue',
        speaker: 'noura',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'sandals' },
        text: 'Alors prépare-toi à franchir le seuil. Avant de sortir de ta maison, il y a une invocation que tu peux apprendre.',
        emotion: 'smiling'
      },
      {
        id: 's1_sandals_quiz',
        type: 'quiz',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'sandals' },
        quizId: 'quiz_doua_maison',
        unlockedConceptId: 'tawakkul_depart'
      },
      {
        id: 's1_sandals_noura_teach',
        type: 'dialogue',
        speaker: 'noura',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'sandals' },
        text: 'Exactement : confier ses pas à Allah avant d’avancer dans le monde donne une force inébranlable.',
        emotion: 'smiling'
      },
      {
        id: 's1_sandals_othman_recite',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'sandals' },
        arabicText: 'بِسْمِ اللَّهِ ، تَوَكَّلْتُ عَلَى اللَّهِ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
        text: '« Bismillâh, tawakkaltu ʿalâ Allâh, wa lâ hawla wa lâ quwwata illâ billâh »\n\n(Au nom d\'Allah, je place ma confiance en Allah, et il n\'y a de force ni de puissance qu\'en Allah).',
        emotion: 'determined',
        actionVignette: {
          icon: '🚪',
          badge: 'Tawakkul au Seuil',
          title: 'La Duʿāʾ du Départ',
          description: '« Bismillâh, tawakkaltu ʿalâ Allâh... » — Confier ses pas au Créateur.',
          glowColor: 'emerald'
        }
      },

      // --- CONVERGENCE DEVANT LA PORTE (POUR TOUS) ---
      {
        id: 's1_door_hesitation',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Ma main touche la poignée de fer... Maman, mon cœur s’accélère tout à coup. Et si personne ne voulait de moi là-bas ?',
        emotion: 'worried'
      },
      {
        id: 's1_waswas_whisper',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Tu crois vraiment pouvoir réussir dehors ? Reste ici. Tu vas bégayer dès le premier mot. Retourne dans ta chambre...',
        emotion: 'shadow',
        waswasXpAmount: 10,
        waswasReason: 'Le premier murmure du doute surgit devant la porte'
      },
      {
        id: 's1_noura_wisdom',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu entends ? Le doute cherche toujours à te paralyser au seuil. Ne débats pas avec lui : place ta confiance en Allah et pose ton pas !',
        emotion: 'smiling'
      },
      {
        id: 's1_door_choice',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othmân pose fermement la main sur la poignée :',
        choices: [
          {
            id: 'c_door_push',
            label: '« Bismillâh ! » — Pousser la porte et avancer malgré le doute',
            badge: 'Passage à l’Action',
            traitGains: { sabr: 5, discipline: 4 },
            habitMessage: 'Courage • Othmân surmonte le doute par l’action.'
          }
        ]
      },
      {
        id: 's1_door_open',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le battant de bois s’ouvre sur l’air frais du matin. Othmân franchit le seuil. Les murmures s’estompent derrière lui tandis qu’il descend la colline vers la lisière du bois.',
        emotion: 'smiling'
      }
    ]
  },

  // SCÈNE 2 — LE POTEAU AUX CHEMINS
  {
    id: 2,
    title: 'Le Poteau aux Chemins',
    subtitle: '« Le Choix du But »',
    location: 'Carrefour des sentiers, lisière de forêt',
    requiredXp: 0,
    backgroundTheme: 'carrefour',
    beats: [
      {
        id: 's2_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: "Othmân et Noura arrivent devant un grand poteau indicateur en chêne au croisement des sentiers. Othmân dépose un instant son sac de voyage par terre pour s'essuyer le front."
      },
      {
        id: 's2_b2_noura',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu es sorti de chez toi, Othmân. Mais sortir n’est pas encore avancer. Regarde ce poteau.',
        emotion: 'smiling'
      },
      {
        id: 's2_b3_othman',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Chaque panneau indique une direction différente... Par quoi dois-je commencer mon voyage ?',
        emotion: 'thoughtful'
      },
      {
        id: 's2_b4_noura',
        type: 'dialogue',
        speaker: 'noura',
        text: 'C’est à toi de choisir ce que tu veux travailler aujourd’hui. Chaque chemin est une quête pour faire grandir ton cœur.',
        emotion: 'smiling'
      },
      {
        id: 's2_b6',
        type: 'choice',
        speaker: 'personnage',
        text: '« Aujourd’hui, qu’est-ce qu’Othmân choisit de travailler ? »',
        choices: [
          {
            id: 'c1',
            label: '🌿 Chapitre 1 : « Aller vers les autres » — Rencontrer avec bienveillance & confiance (Taʿāruf)',
            badge: 'Disponible • Chapitre 1',
            interactiveSpot: { x: '35%', y: '55%' }
          },
          {
            id: 'c2',
            label: '📖 Chapitre 2 : « Chercher le Savoir » — L\'école des sages, l\'humilité & la science (ʿIlm)',
            disabled: true,
            badge: 'Bientôt • Chapitre 2',
            disabledReason: 'Othmân prend le chemin de la grande bibliothèque et découvre la patience de l’apprentissage.',
            interactiveSpot: { x: '50%', y: '45%' }
          },
          {
            id: 'c3',
            label: '🛡️ Chapitre 3 : « Maîtriser sa Colère » — L’épreuve du marché & la clémence (Hilm)',
            disabled: true,
            badge: 'Bientôt • Chapitre 3',
            disabledReason: 'Face aux provocations sur la place du marché, Othmân apprend à dompter la colère par la noblesse.',
            interactiveSpot: { x: '65%', y: '50%' }
          },
          {
            id: 'c4',
            label: '🩹 Chapitre 4 : « Traverser l’Épreuve » — La patience dans la difficulté & l’entraide (Sabr)',
            disabled: true,
            badge: 'Bientôt • Chapitre 4',
            disabledReason: 'Auprès de ceux qui souffrent, Othmân apprend la force d’âme et le soutien fraternel.',
            interactiveSpot: { x: '75%', y: '60%' }
          },
          {
            id: 'c5',
            label: '🌳 Chapitre 5 : « Honorer ses Racines » — La gratitude & la bonté envers les parents (Birr)',
            disabled: true,
            badge: 'Bientôt • Chapitre 5',
            disabledReason: 'Une quête de mémoire et de reconnaissance filiale sous le grand arbre ancestral.',
            interactiveSpot: { x: '85%', y: '45%' }
          }
        ]
      },
      {
        id: 's2_choice_reaction',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je choisis d’aller vers les autres ! Je ne veux plus rester enfermé dans ma solitude. Je veux apprendre à créer de vrais liens fraternels.',
        emotion: 'determined'
      },
      {
        id: 's2_tawakkul_reminder',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Alors commençons par la rencontre ! Confie ton cœur à Allah et avançons avec sérénité.',
        emotion: 'smiling'
      },
      {
        id: 's2_act',
        type: 'real_action',
        realActionId: 'action_depart',
        text: 'Vérifier son sac et renouveler l\'invocation de confiance en Allah.'
      }
    ]
  },

  // SCÈNE 3 — LE PREMIER WASWAS
  {
    id: 3,
    title: 'Le Premier Waswas',
    subtitle: '« La pensée qui bloque »',
    location: 'Sentier assombri par la brume',
    requiredXp: 0,
    backgroundTheme: 'waswas',
    beats: [
      {
        id: 's3_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le sentier se rétrécit sous des rochers escarpés. Une brume violacée et lourde s\'élève du sol. Un Waswas émerge : une ombre chuchotante, sans consistance physique, mais chargée de doute.'
      },
      {
        id: 's3_b2',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Tu n\'y arriveras jamais.\nTu veux te faire des amis ? Tu n\'es même pas capable d\'adresser la parole à un inconnu sans bégayer.',
        emotion: 'shadow'
      },
      {
        id: 's3_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Maman... Ses paroles... C\'est exactement ce que je me répétais ce matin dans mon lit.',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: "Le murmure du Waswâs résonne en Othmân"
      },
      {
        id: 's3_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Il ne lit pas dans tes pensées, Othmân. Il souffle sur tes doutes pour te paralyser et te pousser à faire demi-tour. Cette ombre n\'a aucun pouvoir réel, sauf celui que tu lui accordes.',
        emotion: 'thoughtful'
      },
      {
        id: 's3_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Mais comment faire taire une pensée qui me serre la gorge ?',
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: "Oppression du doute intérieur"
      },
      {
        id: 's3_b7_bis',
        type: 'dialogue',
        speaker: 'noura',
        text: 'On ne débat pas avec le doute, mon fils. On cherche refuge auprès de Celui qui dissipe les ténèbres.',
        emotion: 'smiling'
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
        text: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nAʿūdhu billāhi mina sh-shayṭāni r-rajīm !',
        arabicText: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
        emotion: 'determined',
        waswasXpAmount: -20,
        waswasReason: "L'Istiʿādhah dissipe l'Ombre !",
        actionVignette: {
          icon: '🛡️',
          badge: 'Refuge Divin',
          title: 'L\'Istiʿādhah Protectrice',
          description: '« Aʿūdhu billāhi mina sh-shayṭāni r-rajīm » — Chercher refuge auprès d\'Allah brise l\'emprise du doute.',
          glowColor: 'purple'
        }
      },
      {
        id: 's3_b10',
        type: 'dialogue',
        speaker: 'narration',
        text: 'L\'ombre ténébreuse commence à vaciller et à perdre de sa consistance.'
      },
      {
        id: 's3_b11',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Regarde, elle recule ! C\'est bon, elle est vaincue ?',
        emotion: 'smiling'
      },
      {
        id: 's3_b14',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Attention : ce n\'est pas une formule magique, Othmân. Tu as cherché refuge auprès d\'Allah avec ton cœur. Maintenant, ancre cette parole et avance d\'un pas physique résolu !',
        emotion: 'smiling'
      },
      {
        id: 's3_pont_istiadhah',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'Et toi, lorsque le doute, la timidité ou une voix intérieure cherche à te paralyser dans ta vie réelle... Respire avec calme, cherche refuge auprès d\'Allah en récitant l\'Istiʿādhah, et décide de poser ton pas en avant !',
        emotion: 'smiling'
      },
      {
        id: 's3_act_istiadhah',
        type: 'real_action',
        realActionId: 'action_istiadhah',
        text: 'Réciter l\'Istiʿādhah & poser le pas.'
      },
      {
        id: 's3_b16',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le cœur raffermi par la demande de protection divine, Othmân plante fermement son bâton et fait un grand pas en avant.'
      },
      {
        id: 's3_b17',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Tu vas quand même échouer...',
        emotion: 'shadow'
      },
      {
        id: 's3_b18',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Peut-être. Mais je place ma confiance en Allah et j\'avance !',
        emotion: 'determined'
      },
      {
        id: 's3_b19',
        type: 'dialogue',
        speaker: 'narration',
        text: 'La brume violette éclate en une pluie d\'étincelles dorées ! Le sentier redevient clair, bordé de fleurs sauvages et inondé d\'une douce chaleur.'
      },
      {
        id: 's3_b19_reaction',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Elle s\'est évaporée... Le chemin est entièrement dégagé et lumineux !',
        emotion: 'smiling'
      },
      {
        id: 's3_b19_noura',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Le doute n\'a aucune consistance face au rappel sincère d\'Allah et au courage d\'agir. Garde cette leçon précieusement.',
        emotion: 'smiling'
      },
      {
        id: 's3_b20',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Notion comprise : L’Istiʿādhah et le triomphe sur le doute'
      }
    ]
  },

  // SCÈNE 4 — « JE NE VEUX PLUS ÊTRE SEUL »
  {
    id: 4,
    title: '« Je ne veux plus être seul »',
    subtitle: 'Taʿāruf',
    location: 'Abords du village fleuri',
    requiredXp: 0,
    backgroundTheme: 'vallee',
    beats: [
      {
        id: 's4_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'En contrebas, les toits de tuiles rouges du village scintillent au soleil. Les silhouettes des habitants vont et viennent entre les ruelles et les vergers.'
      },
      {
        id: 's4_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Regarde tout ce monde... Ils ont tous l\'air tellement occupés et sûrs d\'eux. Si je m\'approche, ils vont se demander qui je suis et me trouver bizarre.',
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: "Peur du regard des autres"
      },
      {
        id: 's4_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Pourquoi bizarre, Othmân ?',
        emotion: 'thoughtful'
      },
      {
        id: 's4_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Parce que je ne connais personne ici. On ne vient pas du même coin, on n\'a pas la même vie... Et si on n\'avait rien à se dire ?',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: "Peur de l'inconnu & sentiment d'isolement"
      },
      {
        id: 's4_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu penses vraiment qu\'Allah a créé des personnes aux vécus et visages si variés pour que chacun reste terré derrière ses volets fermés ?',
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
        text: 'Le verset 49:13... Des nations et des tribus « pour que vous vous entreconnaissiez » (Taʿāruf). Donc la différence entre les gens n\'est pas un obstacle... C\'est une invitation voulue par Dieu !',
        emotion: 'smiling'
      },
      {
        id: 's4_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Exactement. La différence n\'est pas un mur qui sépare, c\'est un pont à traverser. Alors, prêt à tenter le premier pas ?',
        emotion: 'smiling'
      },
      {
        id: 's4_pont_parler',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'Et toi dans ta vraie vie... Y a-t-il quelqu\'un à qui tu n\'as jamais osé adresser la parole ? Un voisin, un camarade, un commerçant ? Aujourd\'hui, franchis ce pont et offre-lui une salutation bienveillante.',
        emotion: 'smiling'
      },
      {
        id: 's4_b12',
        type: 'real_action',
        realActionId: 'action_parler',
        text: 'Aujourd\'hui : adresse la parole à quelqu\'un que tu connais peu.'
      },
      {
        id: 's4_b14',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'J\'ai salué un vieux monsieur qui taillait ses vignes. Il s\'est redressé et m\'a souri chaleureusement ! Finalement... c\'était beaucoup moins terrifiant que dans ma tête.',
        emotion: 'smiling'
      },
      {
        id: 's4_b15',
        type: 'dialogue',
        speaker: 'noura',
        text: 'La peur grandit toujours dans le silence et l\'immobilité, mon fils. Dès que tu fais le pas avec sincérité, elle s\'efface. Regarde : plusieurs chemins s\'offrent à nous pour explorer ce village.',
        emotion: 'smiling'
      },
      {
        id: 's4_approach_choice',
        type: 'choice',
        speaker: 'personnage',
        text: '« Vers où Othmân décide-t-il de diriger ses pas dans le village ? »',
        choices: [
          {
            id: 'c_place',
            label: '🏛️ Descendre au cœur du village (Place centrale & fontaine)',
            responsePreview: '« Allons sur la place centrale ! » — Découvrir la foule et apaiser les tensions avec Adab.',
            targetSceneId: 5,
            badge: 'La Place & la Fontaine',
            traitGains: { adab: 6, hilm: 4 }
          },
          {
            id: 'c_ruelle',
            label: '🧶 S’engager dans une ruelle en contrebas (Le jeune artisan)',
            responsePreview: '« Prenons cette ruelle ombragée. » — Vivre l’épreuve du refus et cultiver le Sabr.',
            targetSceneId: 6,
            badge: 'La Ruelle Ombragée',
            traitGains: { sabr: 6, discipline: 4 }
          },
          {
            id: 'c_vergers',
            label: '🧺 Longer les murets de pierre vers les vergers (Le vieux paysan)',
            responsePreview: '« Allons vers les vergers d’oliviers. » — Rendre service discrètement avec une Niyyah pure.',
            targetSceneId: 7,
            badge: 'Le Chemin des Oliviers',
            traitGains: { vitalite: 6, hilm: 4 }
          }
        ]
      }
    ]
  },

  // SCÈNE 5 — LE VILLAGE
  {
    id: 5,
    title: 'Le Village',
    subtitle: '« Les bonnes manières »',
    location: 'Place centrale du village, fontaine et puits',
    nextSceneId: 8,
    requiredXp: 0,
    backgroundTheme: 'village',
    beats: [
      {
        id: 's5_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othmân et Noura pénètrent sur la place centrale pavée. Autour de la fontaine d\'eau fraîche, plusieurs villageois s\'interrompent : bras croisés, regards méfiants, personne n\'ose faire le premier geste vers les nouveaux arrivants.'
      },
      {
        id: 's5_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Brrr... L\'accueil est glacial. Ils me fixent comme si j\'allais leur voler leurs paniers d\'olives.',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: "Malaise & crainte du regard des villageois"
      },
      {
        id: 's5_b3',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Plus loin près des étals, deux marchands haussent vivement le ton au sujet d\'un sac de grain. Othmân gonfle le torse et fait mine de s\'approcher pour intervenir.'
      },
      {
        id: 's5_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Attends, je pourrais m\'interposer au milieu de leur dispute ! Comme ça, tout le monde verra que j\'ai du caractère.',
        emotion: 'determined',
        adaptiveVariants: [
          {
            dominantTrait: 'adab',
            text: 'Peut-être devrais-je m\'approcher discrètement et apaiser leurs cœurs par une parole bienveillante...'
          },
          {
            dominantTrait: 'ilm',
            text: 'Je ne connais pas encore la cause de leur dispute... Mieux vaut observer avec discernement avant de juger.'
          },
          {
            dominantTrait: 'discipline',
            text: 'Si personne ne pose calmement les faits, cette dispute autour du sac de grain risque de s\'éterniser...'
          },
          {
            dominantTrait: 'sabr',
            text: 'Laissons la poussière et la colère retomber d\'elles-mêmes avant d\'intervenir.'
          }
        ]
      },
      {
        id: 's5_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Othmân... Tu veux parler... ou tu veux vraiment aider ?',
        emotion: 'thoughtful'
      },
      {
        id: 's5_b6',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je... En fait, je voulais juste qu\'on me remarque. Je ne connais même pas l\'histoire de leur sac de grain.',
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: "Ostentation & vanité passagère"
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
        text: '« Que celui qui croit en Allah et au Jour dernier dise du bien ou qu\'il garde le silence ». Garder le silence quand on n\'a rien d\'utile à apporter, c\'est aussi une preuve de maturité.',
        emotion: 'thoughtful'
      },
      {
        id: 's5_b9',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Exactement. Mais pour briser la glace sans s\'immiscer, connais-tu la clé la plus pure ? Le Salām et un sourire sincère.',
        emotion: 'smiling'
      },
      {
        id: 's5_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Le Prophète ﷺ a enseigné que le sourire offert à son frère est une aumône (Sadaqah). Offre-leur la paix du fond du cœur, et regarde ce qui se passe.',
        emotion: 'smiling'
      },
      {
        id: 's5_pont_salam',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'Et toi, as-tu pensé à cette aumône accessible à chaque instant ? Offre aujourd\'hui un Salām sincère ou un sourire chaleureux à quelqu\'un dans ton entourage. Le Prophète ﷺ a dit que le sourire à son frère est une aumône.',
        emotion: 'smiling'
      },
      {
        id: 's5_act_salam',
        type: 'real_action',
        realActionId: 'action_salam_village',
        text: 'Offrir le Salām et un sourire sincère.'
      },
      {
        id: 's5_b11',
        type: 'dialogue',
        speaker: 'personnage',
        arabicText: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ',
        text: 'As-salāmu ʿalaykum wa rahmatullāhi wa barakātuh !',
        emotion: 'smiling',
        waswasXpAmount: -10,
        waswasReason: "La paix du Salām affaiblit l'Ombre !"
      },
      {
        id: 's5_b12',
        type: 'dialogue',
        speaker: 'narration',
        text: 'En entendant cette salutation paisible et en voyant le visage lumineux d\'Othmân, la méfiance fond comme neige au soleil ! Les villageois décroisent les bras, sourient et lui répondent d\'un geste accueillant.'
      },
      {
        id: 's5_b13',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Ils m\'ont répondu ! Même le vieux marchand grincheux m\'a fait un signe amical de la tête !',
        emotion: 'smiling'
      },
      {
        id: 's5_b14',
        type: 'dialogue',
        speaker: 'noura',
        text: 'La bienveillance désarme toujours la méfiance, mon fils. Tu as su poser le pas avec noblesse et respect. Rejoignons maintenant le calme des terrasses fleuries.',
        emotion: 'smiling'
      },
      {
        id: 's5_b15',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Notion comprise : L’Adab du silence et la force pacificatrice du Salām'
      }
    ]
  },

  // SCÈNE 6 — LE REFUS
  {
    id: 6,
    title: 'Le Refus',
    subtitle: '« Tout le monde ne dira pas oui »',
    location: 'Ruelle ombragée du village',
    nextSceneId: 8,
    requiredXp: 0,
    backgroundTheme: 'refus',
    beats: [
      {
        id: 's6_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othmân s\'engage d\'un pas curieux sous une arche de pierre fraîche. Un jeune villageois de son âge est assis près d\'un établi, en train de tresser et réparer une corde de chanvre.'
      },
      {
        id: 's6_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Salam alaykoum ! Tu veux venir faire un bout de chemin avec nous ? On explore les sentiers de la vallée !',
        arabicText: 'السَّلَامُ عَلَيْكُمْ',
        emotion: 'smiling'
      },
      {
        id: 's6_b3',
        type: 'dialogue',
        speaker: 'jeune',
        text: 'Wa alaykoum salam... Non, désolé. J\'ai une commande urgente de cordage à livrer avant ce soir.',
        arabicText: 'وَعَلَيْكُمُ السَّلَامُ',
        emotion: 'neutral'
      },
      {
        id: 's6_refus_choice',
        type: 'choice',
        speaker: 'personnage',
        text: 'Le jeune artisan répond sèchement. Comment réagit Othmân ?',
        choices: [
          {
            id: 'c_silence_sabr',
            label: 'Garder le silence et se retirer dignement (Sabr)',
            responsePreview: 'Se retirer dignement sans faire de vague.',
            choiceType: 'decision',
            traitGains: { sabr: 6, hilm: 4 },
            setNarrativeFlags: { artisan_relation: 'sabr_silent' },
            habitMessage: 'Décision morale • Othmân accueille le refus avec retenue.'
          },
          {
            id: 'c_adab_courage',
            label: '« Bon courage pour ta commande alors ! » (Adab)',
            responsePreview: 'Répondre par une parole aimable malgré la froideur.',
            choiceType: 'decision',
            traitGains: { adab: 6, hilm: 5 },
            setNarrativeFlags: { artisan_relation: 'adab_wished_well' },
            habitMessage: 'Décision morale • Othmân surmonte son ego par l\'Adab.'
          },
          {
            id: 'c_hilm_compassion',
            label: '« Ne t\'en fais pas, qu\'Allah bénisse ton labeur ! » (Hilm)',
            responsePreview: 'Comprendre sa fatigue et lui formuler une duʿāʾ bienveillante.',
            choiceType: 'decision',
            traitGains: { hilm: 7, adab: 5, sabr: 3 },
            setNarrativeFlags: { artisan_relation: 'hilm_blessed' },
            habitMessage: 'Décision morale • Le Hilm d\'Othmân désamorce toute rancœur.'
          },
          {
            id: 'c_comprehension_ilm',
            label: 'Observer son geste artisanal et respecter son engagement (ʿIlm)',
            responsePreview: '« Le travail bien fait demande de la concentration. Bon travail à toi ! »',
            choiceType: 'decision',
            traitGains: { ilm: 6, discipline: 4 },
            setNarrativeFlags: { artisan_relation: 'ilm_respected' },
            habitMessage: 'Décision morale • Othmân comprend la valeur du travail artisanal.'
          }
        ]
      },
      {
        id: 's6_b8',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le jeune artisan boucle sa corde d\'un geste précis, ramasse ses outils sans un regard de plus et disparaît au fond de l\'atelier.\nUn lourd silence s\'installe dans la ruelle. Othmân reste figé, la main encore à demi tendue dans le vide.',
        adaptiveVariants: [
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'sabr_silent',
            text: 'Othmân garde le silence et recule d\'un pas respectueux. Le jeune artisan range ses outils et s\'engouffre dans la pénombre de son atelier.',
            actionVignette: {
              icon: '🕊️',
              badge: 'Sabr Noble',
              title: 'Le Silence Digne',
              description: 'Accueillir le refus avec sérénité et retenue sans chercher à forcer la rencontre.',
              glowColor: 'cyan'
            }
          },
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'adab_wished_well',
            text: '« Bon courage pour ta commande alors ! » lance Othmân d\'un ton chaleureux. L\'artisan s\'arrête, surpris par tant de bienveillance, hoche la tête avec respect et rentre dans son atelier.',
            actionVignette: {
              icon: '🤝',
              badge: 'Adab Supérieur',
              title: 'La Parole Bienveillante',
              description: 'Répondre à la froideur par un souhait sincère de succès pour son travail.',
              glowColor: 'amber'
            }
          },
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'hilm_blessed',
            text: '« Qu\'Allah bénisse ton travail et facilite ta tâche ! » dit Othmân avec douceur. Le regard du jeune homme s\'adoucit un instant avant qu\'il ne reprenne sa besogne.',
            actionVignette: {
              icon: '🤍',
              badge: 'Hilm & Générosité',
              title: 'Bénédiction du Labeur',
              description: 'Invoquer la bénédiction et la facilité d\'Allah sur l\'effort d\'autrui.',
              glowColor: 'emerald'
            }
          },
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'ilm_respected',
            text: '« Ton artisanat demande une belle précision. Bon travail à toi ! » souligne Othmân. L\'artisan esquisse un geste reconnaissant de la main.',
            actionVignette: {
              icon: '🧠',
              badge: 'ʿIlm & Conscience',
              title: 'Respect de l\'Artisanat',
              description: 'Valoriser la rigueur et la minutie du travail artisanal sans rancœur.',
              glowColor: 'blue'
            }
          }
        ]
      },
      {
        id: 's6_b9',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'J\'ai... j\'ai été trop brusque ? Pourquoi a-t-il refusé alors que j\'avais pourtant souri et salué ?',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: "Incompréhension face au refus",
        adaptiveVariants: [
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'sabr_silent',
            text: 'J\'ai préféré ne pas insister... mais pourquoi ce refus me pèse-t-il autant sur le cœur ?'
          },
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'adab_wished_well',
            text: 'J\'ai gardé le sourire et lui ai souhaité bon courage... mais ça fait quand même un pincement d\'essuyer un non.'
          },
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'hilm_blessed',
            text: 'J\'ai prié pour que son labeur soit béni... pourtant au fond de moi, j\'espérais tellement marcher avec lui.'
          },
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'ilm_respected',
            text: 'Je comprends que son métier soit prenant... mais pourquoi ai-je l\'impression d\'avoir échoué à me faire un ami ?'
          }
        ]
      },
      {
        id: 's6_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu n\'as rien fait de mal, mon fils. Mais le monde ne tourne pas autour de notre envie du moment. Ce garçon a sa journée, son travail, ses contraintes. Ton intention était belle, mais il a le droit le plus strict de dire non.',
        emotion: 'thoughtful'
      },
      {
        id: 's6_b11',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je sais bien... Mais ça fait quand même un pincement au cœur. On a l\'impression d\'avoir échoué.',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: "Blessure d'orgueil & sentiment d'échec"
      },
      {
        id: 's6_b12',
        type: 'dialogue',
        speaker: 'noura',
        text: 'C\'est parce que tu attendais une récompense immédiate : son approbation. C\'est précisément là que commence le vrai Sabr.',
        emotion: 'smiling'
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
        text: 'Le verset 2:153... Chercher secours dans l\'endurance et la prière. Le Sabr, ce n\'est ni bouder, ni forcer la porte. C\'est accueillir ce qui arrive avec calme, dignité et respect.',
        emotion: 'thoughtful'
      },
      {
        id: 's6_pont_sabr',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'Et toi... Pense à un refus, une contrariété ou un imprévu qui ne s\'est pas passé comme tu le voulais. Respire calmement, détache ton cœur de l\'aigreur et dis avec sincérité : « Al-Hamdulillâh ʿalâ kulli hāl ».',
        emotion: 'smiling'
      },
      {
        id: 's6_act_sabr',
        type: 'real_action',
        realActionId: 'action_sabr_refus',
        text: 'Accueillir un refus avec Sabr.'
      },
      {
        id: 's6_b18',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Al-Hamdulillâh ʿalâ kulli hāl. La déception est passée. Ce n\'est pas parce qu\'une porte se ferme qu\'il faut s\'arrêter de marcher.',
        emotion: 'smiling',
        waswasXpAmount: -15,
        waswasReason: "Le Sabr purifie le cœur du dépit !"
      },
      {
        id: 's6_b19',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Magnifique maturité, Othmân. La patience (Sabr) purifie le cœur du dépit et de l\'orgueil. Retrouvons maintenant le calme des terrasses fleuries.',
        emotion: 'smiling'
      },
      {
        id: 's6_b20',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Notion comprise : La noblesse du Sabr face aux épreuves'
      }
    ]
  },

  // SCÈNE 7 — LE GESTE
  {
    id: 7,
    title: 'Le Geste',
    subtitle: '« Pourquoi aider ? »',
    location: 'Chemin bordé d\'oliviers à la sortie du village',
    nextSceneId: 8,
    requiredXp: 0,
    backgroundTheme: 'geste',
    beats: [
      {
        id: 's7_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Sur le chemin des oliviers, un paysan trébuche. Ses deux grands paniers en osier se renversent lourdement dans la poussière, dispersant ses fruits mûrs sur la route.'
      },
      {
        id: 's7_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Attends, il faut l\'aider ! Ses paniers sont complètement renversés.',
        emotion: 'determined'
      },
      {
        id: 's7_aid_choice',
        type: 'choice',
        speaker: 'personnage',
        text: 'Comment Othmân intervient-il pour aider le paysan ?',
        choices: [
          {
            id: 'c_aide_humaine',
            label: 'Aider le vieil homme à se relever d\'abord (Adab & Hilm)',
            responsePreview: 'Prendre soin de la personne avant les objets.',
            choiceType: 'decision',
            traitGains: { adab: 6, hilm: 4, sabr: 3 },
            setNarrativeFlags: { elder_farmer_relation: 'lifted_person_first' },
            habitMessage: 'Décision morale • Othmân place l\'attention humaine au centre de son geste.'
          },
          {
            id: 'c_aide_active',
            label: 'Ramasser rapidement les fruits pour dégager le chemin (Discipline)',
            responsePreview: 'Agir vite pour éviter que les fruits ne s\'écrasent sous les pas.',
            choiceType: 'decision',
            traitGains: { discipline: 6, vitalite: 4 },
            setNarrativeFlags: { elder_farmer_relation: 'quick_clear_path' },
            habitMessage: 'Décision morale • Othmân agit avec promptitude et organisation.'
          },
          {
            id: 'c_aide_complete',
            label: 'Ranger les fruits et porter le panier le plus lourd (Vitalité & Sabr)',
            responsePreview: 'Soulager pleinement l\'ancien de son fardeau jusqu\'au verger.',
            choiceType: 'decision',
            traitGains: { vitalite: 6, sabr: 5, adab: 4 },
            setNarrativeFlags: { elder_farmer_relation: 'carried_heavy_basket' },
            habitMessage: 'Décision morale • La noblesse du service discret d\'Othmân.'
          }
        ]
      },
      {
        id: 's7_b3',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othmân s\'agenouille sans hésiter et commence à ramasser les figues et les olives une à une pour les ranger.',
        adaptiveVariants: [
          {
            requiredFlag: 'elder_farmer_relation',
            requiredFlagValue: 'lifted_person_first',
            text: 'Othmân se précipite vers le paysan et lui tend les deux mains avec égards : « Appuyez-vous sur moi, mon oncle ! » Le vieil homme retrouve son équilibre en souriant avec gratitude.',
            actionVignette: {
              icon: '🤝',
              badge: 'Adab & Dignité',
              title: 'Relever l\'Aîné d\'Abord',
              description: 'Othmân tend les mains et soutient le vieil homme avant de penser aux objets matériels.',
              glowColor: 'amber'
            }
          },
          {
            requiredFlag: 'elder_farmer_relation',
            requiredFlagValue: 'quick_clear_path',
            text: 'D\'un geste vif et ordonné, Othmân ramasse les figues et les olives éparpillées pour libérer le passage et éviter qu\'elles ne soient foulées au pied.',
            actionVignette: {
              icon: '⚡',
              badge: 'Organisation & Vivacité',
              title: 'Sauvetage des Récoltes',
              description: 'Othmân ramasse vivement les fruits pour dégager le passage et préserver la récolte de l\'ancien.',
              glowColor: 'cyan'
            }
          },
          {
            requiredFlag: 'elder_farmer_relation',
            requiredFlagValue: 'carried_heavy_basket',
            text: 'Après avoir rassemblé la récolte dans les corbeilles, Othmân soulève le panier le plus lourd pour en décharger les épaules fatiguées du paysan.',
            actionVignette: {
              icon: '💪',
              badge: 'Service & Générosité',
              title: 'Porter le Lourd Panier',
              description: 'Othmân charge le panier le plus lourd sur son épaule pour soulager l\'ancien jusqu\'au verger.',
              glowColor: 'emerald'
            }
          }
        ]
      },
      {
        id: 's7_b4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Pourquoi l\'aides-tu, Othmân ?',
        emotion: 'thoughtful'
      },
      {
        id: 's7_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Parce qu\'il est âgé et qu\'il ne s\'en sortirait pas tout seul avant la nuit.',
        emotion: 'determined',
        adaptiveVariants: [
          {
            requiredFlag: 'elder_farmer_relation',
            requiredFlagValue: 'lifted_person_first',
            text: 'Parce qu\'un aîné mérite respect et attention avant même de penser aux objets matériels.'
          },
          {
            requiredFlag: 'elder_farmer_relation',
            requiredFlagValue: 'quick_clear_path',
            text: 'Parce que son labeur de la journée aurait été perdu sans une aide rapide et méthodique.'
          },
          {
            requiredFlag: 'elder_farmer_relation',
            requiredFlagValue: 'carried_heavy_basket',
            text: 'Parce qu\'il est âgé et que ses forces déclinent : le soulager d\'un tel fardeau était une évidence.'
          }
        ]
      },
      {
        id: 's7_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Et si personne ne te voyait ? Ni lui, ni les passants, ni moi ?',
        emotion: 'smiling'
      },
      {
        id: 's7_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je l\'aiderais quand même ! Ce n\'est pas pour les gens que je ramasse ces fruits.',
        emotion: 'smiling'
      },
      {
        id: 's7_b9',
        type: 'quiz',
        quizId: 'quiz_niyyah',
        unlockedConceptId: 'niyyah'
      },
      {
        id: 's7_b12',
        type: 'dialogue',
        speaker: 'personnage',
        text: '« Les actions ne valent que par leurs intentions ». Donc je ne dois jamais faire le bien pour qu\'on me dise que je suis gentil ou généreux.',
        emotion: 'thoughtful'
      },
      {
        id: 's7_b13',
        type: 'dialogue',
        speaker: 'noura',
        text: 'L\'intention est un secret intime entre toi et ton Créateur. Dès qu\'on cherche à la brandir devant les gens, elle s\'évapore.',
        emotion: 'smiling'
      },
      {
        id: 's7_pont_geste',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'Et toi dans ton quotidien... Peux-tu accomplir un petit geste discret (ranger un objet qui traîne, rendre un service chez toi ou dans ton entourage) sans rien dire à personne et pour Allah seul ? C\'est cela, la Niyyah pure.',
        emotion: 'smiling'
      },
      {
        id: 's7_b16',
        type: 'real_action',
        realActionId: 'action_geste',
        text: 'Accomplir une bonne action en toute discrétion.'
      },
      {
        id: 's7_b18',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Regarde maman : tous les fruits sont remis en place, les paniers sont calés contre le muret et le chemin est dégagé !',
        emotion: 'smiling',
        waswasXpAmount: -15,
        waswasReason: "L'acte sincère (Ikhlās) repousse le Waswâs !"
      },
      {
        id: 's7_b19',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Et tu l\'as fait discrètement, avec humilité. C\'est cette pureté d\'intention (Niyyah) qui donne tout son poids à chaque acte. Continuons notre route vers le verger paisible.',
        emotion: 'smiling'
      },
      {
        id: 's7_b20',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Notion comprise : La pureté de l\'intention (Niyyah)'
      }
    ]
  },

  // SCÈNE 8 — LE JARDIN ABANDONNÉ
  {
    id: 8,
    title: 'Le Jardin Abandonné',
    subtitle: '« Regarder ce qu\'on a déjà reçu »',
    location: 'Ancien verger en pierre sèche et ruisseau discret',
    nextSceneId: 9,
    requiredXp: 0,
    backgroundTheme: 'jardin',
    beats: [
      {
        id: 's8_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Après cette rencontre au village, le sentier remonte vers un ancien verger en terrasses de pierre sèche. Les mauvaises herbes ont envahi le ruisseau et des branches mortes jonchent le sol.'
      },
      {
        id: 's8_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Quel dommage... Tout est abandonné ici. Il n\'y a plus rien qui pousse, c\'est triste.',
        emotion: 'thoughtful',
        waswasXpAmount: 10,
        waswasReason: "Focalisation sur le manque & tristesse"
      },
      {
        id: 's8_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Regarde mieux, Othmân. Ne t\'arrête pas à ce qui a l\'air sec.',
        emotion: 'smiling'
      },
      {
        id: 's8_b4',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othmân s\'accroupit, écarte les feuilles sèches et découvre sous les pierres des pousses de romarin odorantes, quelques figues mûres et un filet d\'eau fraîche qui murmure.'
      },
      {
        id: 's8_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Il y en avait sous les branchages ! De l\'eau vive, des fruits... Ça ne demandait qu\'à respirer.',
        emotion: 'smiling'
      },
      {
        id: 's8_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Parfois, on est tellement obsédé par ce qui manque qu\'on ne voit même plus ce qu\'on a déjà reçu.',
        emotion: 'thoughtful'
      },
      {
        id: 's8_b7',
        type: 'quiz',
        quizId: 'quiz_shukr',
        unlockedConceptId: 'shukr'
      },
      {
        id: 's8_b10',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Le verset 14:7... « Si vous êtes reconnaissants, très certainement J\'augmenterai Mes bienfaits pour vous ». La gratitude (Shukr), ce n\'est pas faire semblant que tout est parfait...',
        emotion: 'thoughtful'
      },
      {
        id: 's8_b12',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'C\'est ouvrir les yeux sur les trésors qu\'Allah a déjà déposés autour de nous, même quand la situation semble difficile.',
        emotion: 'smiling'
      },
      {
        id: 's8_pont_shukr',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'Et toi... Avant de penser à ce qui te manque, prends une minute : identifie 3 bienfaits précieux qu\'Allah t\'a accordés aujourd\'hui et dis « Al-Hamdulillâh ». Puis arrose une plante chez toi pour prendre soin de la création.',
        emotion: 'smiling'
      },
      {
        id: 's8_act_shukr',
        type: 'real_action',
        realActionId: 'action_shukr',
        text: 'Exprimer sa gratitude (Shukr) et prendre soin du vivant.'
      },
      {
        id: 's8_b15',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Regarde maman ! En dégageant les branches mortes et les débris, le ruisseau coule à nouveau à plein filet. L\'eau est si claire !',
        emotion: 'smiling',
        waswasXpAmount: -15,
        waswasReason: "Le Shukr illumine l'esprit et chasse l'Ombre !",
        actionVignette: {
          icon: '🌿',
          badge: 'Shukr & Soin du Vivant',
          title: 'Le Ruisseau Revivifié',
          description: 'Nettoyer le cours d\'eau et arroser les plantes : reconnaître les bienfaits d\'Allah par des actes réels.',
          glowColor: 'emerald'
        }
      },
      {
        id: 's8_b16',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Regarde ce qui était déjà là, Othmân. Il suffisait simplement de prendre le temps de le remarquer... et d\'en prendre soin.',
        emotion: 'smiling'
      },
      {
        id: 's8_b17',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Notion comprise : Le Shukr et la reconnaissance des bienfaits'
      }
    ]
  },

  // SCÈNE 9 — LE GRAND WASWAS (CLIMAX DU CHAPITRE)
  {
    id: 9,
    title: 'Le Grand Waswas',
    subtitle: '« Le Sommet de l\'Éveil »',
    location: 'Col de montagne assombri, vent froid et brume violette',
    requiredXp: 0,
    backgroundTheme: 'climax',
    beats: [
      {
        id: 's9_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le col de la montagne se resserre sous une voûte d\'ombre glacée. Des colonnes de pierre antique se dressent en silence. Devant eux, le Grand Waswas se forme : un vortex tourbillonnant, obscur et menaçant.'
      },
      {
        id: 's9_b2',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'Tu pensais vraiment avoir accompli quelque chose ? Regarde-toi, Othmân. Tu as hésité dès le matin, tu as balbutié sur la place, et tu t\'es fait rejeter par le premier garçon venu.',
        emotion: 'shadow',
        adaptiveVariants: [
          {
            dominantTrait: 'discipline',
            text: 'Tu veux tout ordonner et tout contrôler, Othmân ! Mais à la moindre faille dans tes routines, tu perds pied. Tu es trop rigide pour t\'adapter au monde !'
          },
          {
            dominantTrait: 'ilm',
            text: 'Tu empiles des citations, des versets et des concepts, Othmân ! Mais dès qu\'il faut agir, tu restes paralysé par le doute. Ton savoir n\'est qu\'une illusion !'
          },
          {
            dominantTrait: 'adab',
            text: 'Tu crois que ta politesse te protège ? Le monde est dur, Othmân ! Les gens se moqueront de ta bienveillance et écraseront ta douceur !'
          },
          {
            dominantTrait: 'sabr',
            text: 'Tu prétends patienter, mais tu ne fais qu\'abandonner en silence ! Ta patience n\'est qu\'une fuite devant la réalité de ton impuissance !'
          },
          {
            dominantTrait: 'hilm',
            text: 'Tu retiens ta colère, mais elle te brûle de l\'intérieur ! Tu finiras par exploser et détruire tout ce que tu prétends construire !'
          },
          {
            dominantTrait: 'vitalite',
            text: 'Tu cours, tu t\'agites, mais ton corps finira par lâcher ! La montagne est trop haute pour tes faibles forces !'
          }
        ]
      },
      {
        id: 's9_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Ses paroles frappent exactement là où ça fait mal... Peut-être que j\'ai simplement eu de la chance aujourd\'hui. Peut-être que je suis encore le même garçon timide de ce matin...',
        emotion: 'worried',
        waswasXpAmount: 25,
        waswasReason: "Le vortex du doute frappe le cœur d'Othmân !"
      },
      {
        id: 's9_b4',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'Fais demi-tour. Regagne ta chambre. Le monde réel n\'est pas fait pour toi.',
        emotion: 'shadow'
      },
      {
        id: 's9_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Maman... Il a raison ? Tout ce que j\'ai fait aujourd\'hui... est-ce que ça compte vraiment ?',
        emotion: 'worried'
      },
      {
        id: 's9_b8',
        type: 'memory_fragments',
        speaker: 'narration',
        text: 'Des étincelles d\'or s\'allument dans la pénombre, projetant les souvenirs du voyage : Le lit fait au matin... L\'Istiʿādhah prononcée... Le sourire rendu sur la place... Le refus encaissé avec Sabr... Les fruits ramassés en secret... L\'eau claire réveillée dans le verger.'
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
        text: 'Et tu t\'es relevé. Chaque pas que tu as fait est un acte réel, sincère, que personne ne peut t\'enlever.',
        emotion: 'determined'
      },
      {
        id: 's9_ordeal_choice',
        type: 'choice',
        speaker: 'personnage',
        text: 'Face aux sifflements du Grand Waswas, quelle certitude Othmân brandit-il ?',
        choices: [
          {
            id: 'c_verite_sabr',
            label: '« Mes efforts patients et ma persévérance valent plus que tes mensonges ! » (Sabr)',
            responsePreview: 'Ancrer sa force dans le Sabr et la confiance en Allah.',
            choiceType: 'ordeal',
            traitGains: { sabr: 8, hilm: 6 },
            setNarrativeFlags: { climax_virtue: 'sabr' },
            habitMessage: 'Épreuve triomphée • Le Sabr d\'Othmân réduit le doute au silence.'
          },
          {
            id: 'c_verite_discipline',
            label: '« Chaque habitude posée aujourd\'hui est gravée dans le réel ! » (Discipline)',
            responsePreview: 'Opposer la rigueur des actes aux illusions trompeuses.',
            choiceType: 'ordeal',
            traitGains: { discipline: 8, ilm: 6 },
            setNarrativeFlags: { climax_virtue: 'discipline' },
            habitMessage: 'Épreuve triomphée • La Discipline d\'Othmân dissipe la confusion.'
          },
          {
            id: 'c_verite_hilm_adab',
            label: '« Mon cœur cherche la sincérité et le bien pour Allah seul ! » (Adab & Hilm)',
            responsePreview: 'Désarmer l\'obscurité par la pureté de l\'intention.',
            choiceType: 'ordeal',
            traitGains: { adab: 8, hilm: 8, sabr: 4 },
            setNarrativeFlags: { climax_virtue: 'adab_hilm' },
            habitMessage: 'Épreuve triomphée • La noblesse du cœur dissout le Grand Waswas.'
          },
          {
            id: 'c_verite_vitalite',
            label: '« Même fatigué, je poserai le prochain pas en avant ! » (Vitalité & Sabr)',
            responsePreview: 'Refuser l\'inaction et faire le pas du courage.',
            choiceType: 'ordeal',
            traitGains: { vitalite: 8, sabr: 6 },
            setNarrativeFlags: { climax_virtue: 'vitalite' },
            habitMessage: 'Épreuve triomphée • L\'élan d\'action d\'Othmân brise la peur.'
          }
        ]
      },
      {
        id: 's9_proclamation',
        type: 'dialogue',
        speaker: 'personnage',
        text: '« Mes efforts patients et ma persévérance valent plus que tes mensonges ! Je place ma confiance en Allah ! »',
        emotion: 'determined',
        actionVignette: {
          icon: '✨',
          badge: 'Vertu Victorieuse',
          title: 'La Proclamation de Foi & d\'Action',
          description: 'Les actes concrets et sincères posés dans le réel terrassent les illusions du doute.',
          glowColor: 'amber'
        },
        adaptiveVariants: [
          {
            requiredFlag: 'climax_virtue',
            requiredFlagValue: 'sabr',
            text: '« Mes efforts patients et ma persévérance valent plus que tes mensonges ! Je place ma confiance en Allah et je ne faiblirai pas ! »',
            actionVignette: {
              icon: '🛡️',
              badge: 'Bouclier de Sabr',
              title: 'Patience & Persévérance Inébranlables',
              description: 'La foi et la constance dans l\'effort réduisent à néant les insinuations du doute.',
              glowColor: 'cyan'
            }
          },
          {
            requiredFlag: 'climax_virtue',
            requiredFlagValue: 'discipline',
            text: '« Chaque habitude posée aujourd\'hui est gravée dans le réel ! Tu ne peux rien contre la régularité et les actes vrais ! »',
            actionVignette: {
              icon: '🧭',
              badge: 'Armure de Discipline',
              title: 'Ancrage dans les Actes Réels',
              description: 'Chaque geste quotidien posé dans le réel détruit les illusions trompeuses de l\'Ombre.',
              glowColor: 'amber'
            }
          },
          {
            requiredFlag: 'climax_virtue',
            requiredFlagValue: 'adab_hilm',
            text: '« Mon cœur cherche la sincérité et le bien pour Allah seul ! La pureté d\'intention et la bienveillance désarment toutes tes ombres ! »',
            actionVignette: {
              icon: '🤝',
              badge: 'Lumière d\'Adab & Hilm',
              title: 'Pureté de l\'Intention',
              description: 'La recherche sincère de l\'agrément d\'Allah dissipe les ténèbres du cœur.',
              glowColor: 'emerald'
            }
          },
          {
            requiredFlag: 'climax_virtue',
            requiredFlagValue: 'vitalite',
            text: '« Même fatigué, je poserai le prochain pas en avant ! L\'action résolue brise la peur et l\'illusion de l\'impuissance ! »',
            actionVignette: {
              icon: '💪',
              badge: 'Élan de Vitalité',
              title: 'Le Courage en Mouvement',
              description: 'L\'action résolue et le pas en avant triomphent de la paralysie et de la peur.',
              glowColor: 'purple'
            }
          }
        ]
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
        text: 'Hadith de Muslim 2664 : « Recherche avec ardeur ce qui t\'est profitable, demande l\'aide d\'Allah et ne sois pas impuissant ». Le savoir ne suffit pas : il faut unir la foi, l\'effort et l\'action !',
        emotion: 'determined'
      },
      {
        id: 's9_b18',
        type: 'climax_combat',
        speaker: 'narration',
        text: 'Le Grand Waswas projette ses dernières rafales de vent noir. Othmân se tient droit : le cœur empli des 6 piliers de résilience qu\'il a découverts sur la route, il avance face au vortex.'
      },
      {
        id: 's9_b19',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'Tu vas échouer ! Tu n\'es rien !',
        emotion: 'shadow'
      },
      {
        id: 's9_b20',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Peut-être. Mais je vais essayer quand même !',
        emotion: 'determined'
      },
      {
        id: 's9_b21',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Dans un souffle d\'or, le vortex sombre se disloque et s\'évapore complètement ! Le soleil d\'or franchit la crête et illumine les vieilles pierres d\'un éclat éblouissant.'
      },
      {
        id: 's9_b22',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Un silence magnifique et apaisant enveloppe le sommet. Le vent est tiède et doux.'
      },
      {
        id: 's9_b23',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Ce matin, je pensais que mon seul but était de trouver des gens qui m\'aimeraient bien.',
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
        text: 'Maintenant je comprends que mon vrai rôle, c\'est d\'apprendre à donner de la lumière : aller vers les autres, accepter leurs refus sans amertume, aider en secret et remercier pour ce qui est là.',
        emotion: 'smiling'
      },
      {
        id: 's9_b32',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu as trouvé ta lumière, mon fils. Alors... on continue le voyage ?',
        emotion: 'smiling'
      },
      {
        id: 's9_b33',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Oui ! Mais d\'abord, je veux redescendre au village. Ce matin, entendre les enfants rire et jouer au ballon me serrait le cœur... j\'avais tellement peur d\'être rejeté. Mais grâce à Allah, cette peur ne m\'arrête plus ! J\'ai promis d\'aller vers eux avec le sourire et de partager cette joie.',
        emotion: 'determined'
      },
      {
        id: 's9_pont_mission',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'Et toi, voyageur qui as marché jusqu\'au sommet de ce premier chapitre... Othmân a vaincu sa peur. À ton tour : va vers quelqu\'un dans ton quotidien, dis-lui avec le cœur « As-salāmu ʿalaykum », et laisse la fraternité opérer sans forcer.',
        emotion: 'smiling'
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
        text: 'Othmân et Noura reprennent leur marche vers l\'horizon doré. Au-delà des crêtes de montagne, les contrées du Chapitre 2 commencent à se dessiner sous le ciel limpide.'
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
        text: 'Alors allons-y !',
        emotion: 'smiling'
      },
      {
        id: 's9_b38',
        type: 'chapter_end',
        xpAmount: 45,
        xpReason: 'Chapitre 1 terminé : Le chemin commence',
        unlockedConceptId: 'ilm'
      }
    ]
  }
];

// ============================================================================
// BOUCLE CENTRALE « NOUVEAU JOUR » — SÉQUENCE JOUR 2 DEVANT LE POTEAU
// ============================================================================
export const DAY_2_POTEAU_BEATS: Beat[] = [
  {
    id: 's2_d2_choice',
    type: 'choice',
    speaker: 'noura',
    text: "Aujourd'hui, vers quel chapitre veux-tu aller, Othmân ?",
    arabicText: 'إِلَى أَيِّ فَصْلٍ تُرِيدُ أَنْ نَتَوَجَّهَ الْيَوْمَ يَا عُثْمَانُ؟',
    emotion: 'smiling',
    choices: [
      {
        id: 'c2_chap2',
        label: '« Le Chemin du Hilm » — Chapitre 2 (La Maîtrise de soi)',
        badge: '✦ Continuer'
      },
      {
        id: 'c1_replay',
        label: '« Vaincre la Solitude » — Chapitre 1 (Rejouer)',
        badge: '✓ Chapitre 1'
      },
      {
        id: 'c3_chap3',
        label: '« L\'Enfant à l\'Attelle » — Chapitre 3 (La Patience - Sabr)',
        badge: '✦ Chapitre 3'
      }
    ]
  }
];

import { QUIZZES_EN, REAL_ACTIONS_EN, CLIMAX_STEPS_EN, CHAPTER_1_SCENES_EN, DAY_2_POTEAU_BEATS_EN } from './locales/chapter1.en';
import { QUIZZES_AR, REAL_ACTIONS_AR, CLIMAX_STEPS_AR, CHAPTER_1_SCENES_AR, DAY_2_POTEAU_BEATS_AR } from './locales/chapter1.ar';
import { Language } from '../i18n/translations';

export const getChapter1Scenes = (lang: Language): Scene[] => {
  if (lang === 'en') return CHAPTER_1_SCENES_EN;
  if (lang === 'ar') return CHAPTER_1_SCENES_AR;
  return CHAPTER_1_SCENES;
};

export const getChapter1Quizzes = (lang: Language): Record<string, Quiz> => {
  if (lang === 'en') return QUIZZES_EN;
  if (lang === 'ar') return QUIZZES_AR;
  return QUIZZES;
};

export const getChapter1RealActions = (lang: Language): Record<string, RealAction> => {
  if (lang === 'en') return REAL_ACTIONS_EN;
  if (lang === 'ar') return REAL_ACTIONS_AR;
  return REAL_ACTIONS;
};

export const getChapter1ClimaxSteps = (lang: Language): ClimaxStep[] => {
  if (lang === 'en') return CLIMAX_STEPS_EN;
  if (lang === 'ar') return CLIMAX_STEPS_AR;
  return CLIMAX_STEPS;
};

export const getDay2PoteauBeats = (lang: Language): Beat[] => {
  if (lang === 'en') return DAY_2_POTEAU_BEATS_EN;
  if (lang === 'ar') return DAY_2_POTEAU_BEATS_AR;
  return DAY_2_POTEAU_BEATS;
};

