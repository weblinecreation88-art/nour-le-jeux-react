import { Scene, Quiz, RealAction, ClimaxStep, Beat } from '../types';

export const CHAPTER_2_QUIZZES: Record<string, Quiz> = {
  quiz_hilm_force: {
    id: 'quiz_hilm_force',
    topic: 'Le Vrai Fort (Al-Hilm)',
    promptSpeaker: 'noura',
    question: 'Selon le Messager d\'Allah ﷺ, qui est véritablement le plus fort parmi les hommes ?',
    options: [
      { id: 'A', text: 'Celui qui terrasse ses adversaires par sa force physique.', isCorrect: false },
      { id: 'B', text: 'Celui qui sait maîtriser sa colère face à la provocation.', isCorrect: true },
      { id: 'C', text: 'Celui qui ne ressent jamais aucune émotion ni tristesse.', isCorrect: false },
      { id: 'D', text: 'Celui qui crie le plus fort pour faire taire les autres.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'Le Prophète ﷺ a enseigné que la véritable force ne réside pas dans la puissance musculaire, mais dans la capacité du croyant à dompter son âme et à retenir sa colère lorsque le Shayṭān cherche à l\'enflammer.',
    theologicalNote: 'Le mot « Al-Hilm » désigne la patience noble, la maîtrise de soi et la retenue d\'esprit face aux offenses.',
    reference: {
      concept: 'Al-Hilm (La Maîtrise dans la colère)',
      reference: 'Sahih al-Bukhari 6114 & Sahih Muslim 2609',
      citationText: '« L\'homme fort n\'est pas celui qui terrasse ses adversaires à la lutte, mais celui qui se maîtrise lorsqu\'il est en colère. »',
      sourceType: 'Hadith',
      arabic: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ'
    }
  },
  quiz_hilm_colere_remede: {
    id: 'quiz_hilm_colere_remede',
    topic: 'Les Remèdes contre la Colère',
    promptSpeaker: 'noura',
    question: 'Que nous enseigne la Sunnah pour éteindre le feu de la colère quand le Waswâs s\'enflamme ?',
    options: [
      { id: 'A', text: 'Crier fort pour évacuer immédiatement la tension accumulée.', isCorrect: false },
      { id: 'B', text: 'Dire « Aʿūdhu billāh », s\'asseoir ou s\'allonger, et faire ses ablutions d\'eau fraîche.', isCorrect: true },
      { id: 'C', text: 'S\'isoler pendant des semaines sans plus jamais adresser la parole aux autres.', isCorrect: false },
      { id: 'D', text: 'Répondre par deux insultes pour chaque affront reçu.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'La colère est une braise du diable. La Sunnah offre un remède complet : chercher refuge auprès d\'Allah (Istiʿādhah), changer de posture physique pour calmer le sang, et faire le Woudhou\' car l\'eau éteint le feu.',
    theologicalNote: 'Changer de position (s\'asseoir si on est debout) brise l\'impulsion physique d\'agression.',
    reference: {
      concept: 'Remèdes prophétiques contre la colère',
      reference: 'Sahih al-Bukhari 3282 & Sunan Abi Dawud 4782',
      citationText: '« La colère provient du Shayṭān, le Shayṭān a été créé de feu, et le feu s\'éteint par l\'eau. Lorsque l\'un de vous est en colère, qu\'il fasse ses ablutions. »',
      sourceType: 'Hadith',
      arabic: 'إِنَّ الْغَضَبَ مِنَ الشَّيْطَانِ وَإِنَّ الشَّيْطَانَ خُلِقَ مِنَ النَّارِ وَإِنَّمَا تُطْفَأُ النَّارُ بِالْمَاءِ'
    }
  },
  quiz_hilm_rifq: {
    id: 'quiz_hilm_rifq',
    topic: 'La Douceur (Ar-Rifq)',
    promptSpeaker: 'noura',
    question: 'Quelle est la noble promesse faite par le Prophète ﷺ au sujet de la douceur (Ar-Rifq) ?',
    options: [
      { id: 'A', text: 'La douceur ne se trouve dans une chose sans la parer, et n\'en est retirée sans l\'enlaidir.', isCorrect: true },
      { id: 'B', text: 'La douceur est un signe de faiblesse qui donne raison à l\'adversaire.', isCorrect: false },
      { id: 'C', text: 'La douceur ne sert à rien face aux gens impolis.', isCorrect: false },
      { id: 'D', text: 'La douceur ne doit s\'appliquer qu\'envers sa propre famille.', isCorrect: false }
    ],
    correctOptionId: 'A',
    explanation: 'Le Messager d\'Allah ﷺ a enseigné que la douceur magnifie toute parole et toute action. C\'est l\'ornement du caractère noble qui désamorce les conflits les plus vifs.',
    theologicalNote: 'Ar-Rifq transforme une confrontation destructrice en une occasion de rapprochement et de bénédiction.',
    reference: {
      concept: 'Ar-Rifq (La Douceur comme parure)',
      reference: 'Sahih Muslim 2594',
      citationText: '« La douceur n\'est point dans une chose sans qu\'elle ne la pare, et elle n\'est point retirée d\'une chose sans qu\'elle ne l\'enlaidisse. »',
      sourceType: 'Hadith',
      arabic: 'إِنَّ الرِّفْقَ لَا يَكُونُ فِي شَيْءٍ إِلَّا زَانَهُ ، وَلَا يُنْزَعُ مِنْ شَيْءٍ إِلَّا شَانَهُ'
    }
  },
  quiz_hilm_afw: {
    id: 'quiz_hilm_afw',
    topic: 'Le Pardon & L\'Élévation (Al-ʿAfw)',
    promptSpeaker: 'noura',
    question: 'Que promet Allah à celui qui sait pardonner et surmonter l\'offense avec noblesse ?',
    options: [
      { id: 'A', text: 'Qu\'il sera considéré comme le vaincu de la dispute.', isCorrect: false },
      { id: 'B', text: 'Allah n\'ajoute au serviteur qui pardonne que de la puissance et de la noblesse.', isCorrect: true },
      { id: 'C', text: 'Qu\'il doit exiger une compensation financière immédiate.', isCorrect: false },
      { id: 'D', text: 'Qu\'il n\'a plus le droit de se défendre.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'Le Prophète ﷺ a affirmé qu\'aucun pardon n\'a jamais diminué l\'honneur d\'un croyant : au contraire, Allah élève en dignité et en estime celui qui sait pardonner.',
    theologicalNote: 'Pardonner alors qu\'on a la capacité de se venger est la plus haute marque du Hilm.',
    reference: {
      concept: 'Al-ʿAfw (La noblesse du pardon)',
      reference: 'Sahih Muslim 2588',
      citationText: '« L\'aumône ne diminue en rien une richesse, et Allah n\'ajoute au serviteur par le pardon que de la puissance, et quiconque s\'abaisse pour Allah, Allah l\'élève. »',
      sourceType: 'Hadith',
      arabic: 'مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا'
    }
  },
  quiz_dua_secret: {
    id: 'quiz_dua_secret',
    topic: 'L\'Invocation en secret pour autrui',
    promptSpeaker: 'noura',
    question: 'Pourquoi l\'invocation pour autrui en secret possède-t-elle une valeur immense dans l\'Islam ?',
    options: [
      { id: 'A', text: 'Parce que les gens doivent nous entendre pour nous féliciter de notre piété.', isCorrect: false },
      { id: 'B', text: 'Parce qu\'elle est pure d\'ostentation, et un ange répond : « Amîn, et à toi la même chose ».', isCorrect: true },
      { id: 'C', text: 'Parce qu\'elle ne demande aucune sincérité ni intention particulière.', isCorrect: false },
      { id: 'D', text: 'Parce qu\'elle efface le besoin de prier pour soi-même.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'Le Prophète ﷺ a enseigné que lorsqu\'un musulman invoque pour son frère en secret, un ange désigné dit : « Amîn, et pour toi une part semblable » (Sahih Muslim 2732). C\'est le remède suprême pour purifier le cœur de toute rancune.',
    theologicalNote: 'Prier pour celui qui nous a heurté détruit le poison de l\'aigreur et attire la bénédiction immédiate des anges.',
    reference: {
      concept: 'Ad-Duʿāʾ bi-dhahr al-ghayb (L\'invocation en secret)',
      reference: 'Sahih Muslim 2732',
      citationText: '« L\'invocation du musulman pour son frère en son absence est exaucée. Auprès de sa tête se trouve un ange qui dit : "Amîn, et à toi la même chose." »',
      sourceType: 'Hadith',
      arabic: 'دَعْوَةُ الْمَرْءِ الْمُسْلِمِ لِأَخِيهِ بِظَهْرِ الْغَيْبِ مُسْتَجَابَةٌ'
    }
  }
};

export const CHAPTER_2_REAL_ACTIONS: Record<string, RealAction> = {
  action_fraicheur: {
    id: 'action_fraicheur',
    title: 'L\'Aube & la Niyyah de Paix',
    instruction: 'Va vers un point d\'eau dans la vraie vie : passe-toi de l\'eau fraîche sur le visage. Prends une inspiration et formule l\'intention sincère (Niyyah) d\'être aujourd\'hui un semeur de paix, patient et doux envers ton entourage.',
    subtext: 'L\'eau du matin réveille l\'esprit et l\'intention pure oriente toutes les actions de la journée.',
    xpReward: 30,
    reflectionPrompt: 'As-tu pris un instant pour renouveler ton intention de paix ce matin ?'
  },
  action_silence_colere: {
    id: 'action_silence_colere',
    title: 'L\'Épreuve du Silence face à la provocation',
    instruction: 'Pense à une petite contrariété récente ou garde cette action prête pour aujourd\'hui : lorsque quelqu\'un t\'énerve, te coupe la parole ou te critique, prends 3 profondes inspirations par le nez. Retiens ta langue et choisis le silence apaisant plutôt qu\'une réplique impulsive.',
    subtext: '« Que celui qui croit en Allah et au Jour dernier dise du bien ou qu\'il se taise » (Bukhari 6018). Le silence au moment critique est la plus grande preuve de force intérieure.',
    xpReward: 35,
    reflectionPrompt: 'As-tu réussi à retenir une parole agressive lorsque la colère montait ?'
  },
  action_ablution_calme: {
    id: 'action_ablution_calme',
    title: 'Éteindre le feu par l\'eau fraîche (Woudhou\')',
    instruction: 'Accomplis tes ablutions (Woudhou\') ou lave soigneusement tes mains, ton visage et tes avant-bras avec de l\'eau fraîche dans la vraie vie. Ressens la fraîcheur éteindre la tension physique et répète : « Aʿūdhu billāhi mina sh-shayṭāni r-rajīm ».',
    subtext: 'La colère est une chaleur qui monte au visage ; l\'eau des ablutions rétablit la sérénité du corps et de l\'âme.',
    xpReward: 40,
    reflectionPrompt: 'As-tu ressenti l\'apaisement immédiat procuré par l\'eau fraîche sur le visage ?'
  },
  action_pardon_noble: {
    id: 'action_pardon_noble',
    title: 'Le Pas du Pardon & la Douceur (Al-ʿAfw)',
    instruction: 'Aujourd\'hui dans la vraie vie : libère ton cœur de toute rancune. Pardonne sincèrement à une personne qui t\'a blessé ou agacé. Si possible, adresse-lui un mot bienveillant ou un sourire sans rancœur.',
    subtext: '« Celui qui pardonne et réforme, son salaire incombe à Allah » (Coran 42:40). Le pardon libère celui qui l\'accorde.',
    xpReward: 45,
    reflectionPrompt: 'As-tu déjà expérimenté la légèreté intérieure que procure le fait de renoncer à la rancune ?'
  },
  action_dua_secret: {
    id: 'action_dua_secret',
    title: 'L\'Invocation Secrète de Paix (Duʿāʾ)',
    instruction: 'Pense à une personne qui t\'a blessé, critiqué ou heurté récemment. En secret, sans que personne ne t\'entende, formule une prière sincère pour elle : demande à Allah de guider son cœur, d\'apaiser ses soucis et de vous accorder la paix.',
    subtext: '« Amîn, et à toi la même chose » répond l\'ange céleste (Sahih Muslim 2732). Prier pour son offenseur est le sommet de la maîtrise de soi.',
    xpReward: 45,
    reflectionPrompt: 'As-tu ressenti la rancœur quitter ta poitrine en priant pour celui qui t\'a blessé ?'
  },
  action_mission_hilm: {
    id: 'action_mission_hilm',
    title: 'Mission Ultime : La Main Tendue',
    instruction: 'Accomplis aujourd\'hui un geste fraternel envers quelqu\'un que tu avais tendance à éviter ou juger. Offre-lui un compliment sincère, de l\'aide ou un cadeau modeste pour sceller la fraternité.',
    subtext: '« Repousse le mal par ce qui est meilleur ; et voilà que celui avec qui tu avais une inimitié devient tel un ami chaleureux » (Coran 41:34).',
    xpReward: 50,
    reflectionPrompt: 'Un cœur doux désamorce les animosités les plus tenaces.'
  }
};

export const CHAPTER_2_CLIMAX_STEPS: ClimaxStep[] = [
  {
    stepNumber: 1,
    id: 'step_c2_istiadhah',
    title: '1. Éteindre l\'étincelle',
    quote: 'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm',
    arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    meaning: 'Je cherche refuge auprès d\'Allah contre le feu de la colère et la rancœur.',
    description: 'Face au bouillonnement intérieur, invoquer la protection divine étouffe le brasier du Waswâs.'
  },
  {
    stepNumber: 2,
    id: 'step_c2_force',
    title: '2. La Vraie Force',
    quote: 'Al-Hilm — La Maîtrise dans la Colère',
    arabic: 'الْحِلْمُ عِنْدَ الْغَضَبِ',
    meaning: 'Le vrai fort n\'est pas celui qui terrasse, mais celui qui se domine.',
    description: 'Refuser d\'agir sous le coup de l\'impulsion : la retenue est la marque des âmes nobles.'
  },
  {
    stepNumber: 3,
    id: 'step_c2_eau',
    title: '3. La Fraîcheur de l\'Eau',
    quote: 'Al-Woudhou\' — L\'Eau qui éteint le Feu',
    arabic: 'الْوُضُوءُ يُطْفِئُ الْغَضَبَ',
    meaning: 'L\'eau des ablutions et le changement de posture rétablissent la paix.',
    description: 'La sagesse prophétique refroidit le sang et dissipe la confusion de l\'esprit.'
  },
  {
    stepNumber: 4,
    id: 'step_c2_rifq',
    title: '4. La Parure de Douceur',
    quote: 'Ar-Rifq — La Douceur désarmante',
    arabic: 'الرِّفْقُ زِينَةُ الأَخْلَاقِ',
    meaning: 'La douceur embellit chaque réaction et désamorce la haine.',
    description: 'Répondre avec bonté là où l\'adversaire attendait la violence.'
  },
  {
    stepNumber: 5,
    id: 'step_c2_afw',
    title: '5. La Noblesse du Pardon',
    quote: 'Al-ʿAfw — Pardonner par Grandeur d\'Âme',
    arabic: 'العَفْوُ عِنْدَ المَقْدِرَةِ',
    meaning: 'Pardonner élève le serviteur en dignité auprès du Très-Haut.',
    description: 'Briser les chaînes de la vengeance : le croyant cherche la récompense auprès d\'Allah.'
  },
  {
    stepNumber: 6,
    id: 'step_c2_salam',
    title: '6. Le Triomphe de la Sérénité',
    quote: 'As-Salām — La Paix Victorieuse',
    arabic: 'إِفْشَاءُ السَّلَامِ وَصَلَاحُ القَلْبِ',
    meaning: 'La lumière de la paix dissout définitivement l\'Ombre du Waswâs.',
    description: 'Le cœur retrouve sa pureté limpide, libre de toute animosité.'
  }
];

export const CHAPTER_2_SCENES: Scene[] = [
  // SCÈNE 10 (Ch2-1) — L'AUBE AU GRAND POTEAU
  {
    id: 10,
    title: 'L\'Aube au Grand Poteau',
    subtitle: '« Le Chemin du Hilm »',
    location: 'Carrefour des chemins, aube dorée',
    requiredXp: 450,
    backgroundTheme: 'carrefour',
    beats: [
      {
        id: 's10_b1',
        type: 'dialogue',
        speaker: 'narration',
        arabicText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        text: 'Le lendemain matin, une brise tiède caresse les collines de la vallée.\n\nOthmân se tient à nouveau devant le grand Poteau aux Chemins. Mais son cœur n\'est plus le même qu\'hier.'
      },
      {
        id: 's10_b2',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Regarde, Othmân. Hier, tu craignais de poser le premier pas vers les autres. Aujourd\'hui, le poteau a dévoilé un nouveau sentier gravé dans le chêne :\n« Le chemin du Hilm ».',
        emotion: 'smiling'
      },
      {
        id: 's10_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: '« Le Hilm »... Noura, qu\'est-ce que cela signifie vraiment ? Est-ce plus difficile que de vaincre sa timidité ?',
        emotion: 'thoughtful'
      },
      {
        id: 's10_b4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Bien plus profond, mon fils. Se faire des amis demande du courage. Mais savoir garder son calme, sa douceur et sa dignité quand le monde s\'agite autour de toi... voilà la marque des véritables sages.',
        emotion: 'thoughtful'
      },
      {
        id: 's10_b5',
        type: 'real_action',
        realActionId: 'action_fraicheur'
      },
      {
        id: 's10_b6',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Cette eau fraîche m\'a clarifié l\'esprit. Je sens que ce chemin vers le marché va m\'enseigner quelque chose d\'essentiel.',
        emotion: 'determined'
      },
      {
        id: 's10_b7',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le sac fermement ajusté sur l\'épaule, Othmân s\'engage sur le sentier escarpé qui descend vers la grande place du marché.'
      }
    ]
  },

  // SCÈNE 11 (Ch2-2) — L'ÉCLAT DU MARCHÉ & LA PROVOCATION
  {
    id: 11,
    title: 'L\'Éclat du Marché',
    subtitle: '« L\'Accusation Injuste »',
    location: 'Place du marché, matin animé',
    requiredXp: 480,
    backgroundTheme: 'marche_colere',
    beats: [
      {
        id: 's11_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'La place du marché résonne du brouhaha des marchands d\'épices, des étoffes chamarrées et du parfum des grenades mûres.'
      },
      {
        id: 's11_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Il y a tant de monde ici ! Tout le monde est affairé. Je vais acheter quelques figues pour Noura...',
        emotion: 'smiling'
      },
      {
        id: 's11_b3',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Soudain, une mule chargée de paniers de figues et de grenades se cabre dans l\'allée étroite. Dans la bousculade, un grand panier s\'écrase au sol. Des fruits roulent aux pieds d\'Othmân.'
      },
      {
        id: 's11_b4',
        type: 'dialogue',
        speaker: 'marchand',
        text: 'HÉ TOI LÀ-BAS ! Regarde où tu mets les pieds, jeune maladroit ! Tout mon étal est par terre à cause de tes rêveries !',
        emotion: 'worried'
      },
      {
        id: 's11_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Mais... ce n\'est pas moi ! C\'est la mule qui a reculé dans l\'allée ! Je n\'ai rien fait !',
        emotion: 'worried',
        waswasXpAmount: 20,
        waswasReason: 'Sentiment d\'injustice & sang qui monte (+20 Colère)'
      },
      {
        id: 's11_b6',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Tu te laisses insulter devant toute la place ? Il t\'accuse d\'une faute que tu n\'as pas commise ! Crie plus fort que lui, montre-lui qu\'il ne peut pas te manquer de respect !',
        emotion: 'shadow',
        waswasXpAmount: 15,
        waswasReason: 'Pulsion de vengeance & orgueil blessé (+15)'
      },
      {
        id: 's11_b7',
        type: 'dialogue',
        speaker: 'jeune',
        text: 'Regardez le petit voyageur ! Il est rouge comme une tomate, il va exploser !',
        emotion: 'neutral',
        adaptiveVariants: [
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'hilm_blessed',
            text: 'Attendez maître marchand ! C\'est le garçon qui m\'a béni avec tant de douceur hier à l\'atelier... Il n\'a aucune malice, il n\'a pas poussé votre mule !'
          },
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'adab_wished_well',
            text: 'Maître marchand, calmez-vous ! C\'est le jeune voyageur qui m\'a encouragé hier pour ma commande. Il est bienveillant, regardez plutôt les sabots de la mule !'
          },
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'sabr_silent',
            text: 'Maître marchand, regardez bien : ce garçon est très calme et mesuré. Je l\'ai vu hier à l\'atelier, il ne cherche jamais les ennuis.'
          },
          {
            requiredFlag: 'artisan_relation',
            requiredFlagValue: 'ilm_respected',
            text: 'Attendez ! C\'est le garçon qui a salué mon travail avec tant de respect hier. Il sait observer, il n\'a pas causé cette panique !'
          },
          {
            requiredFlag: 'artisan_relation',
            text: 'Attendez maître marchand ! C\'est le garçon qui est passé hier à l\'atelier... Il n\'est pas du genre à pousser votre mule !'
          }
        ]
      },
      {
        id: 's11_b8',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Mes mains tremblent... Une boule de feu me brûle la gorge. J\'ai envie de tout renverser et de lui crier ses quatre vérités !',
        emotion: 'worried'
      },
      {
        id: 's11_colere_choice',
        type: 'choice',
        speaker: 'personnage',
        text: 'Le sang monte au visage d\'Othmân. Quelle réaction choisit-il ?',
        choices: [
          {
            id: 'c_colere_respiration',
            label: 'S\'asseoir sur le muret et respirer 3 secondes par le nez',
            responsePreview: 'Changer de posture physique pour briser l\'impulsion d\'agressivité.',
            choiceType: 'decision',
            traitGains: { hilm: 7, sabr: 5 },
            habitMessage: 'Décision morale • Othmân applique la maîtrise de soi (Hilm) dans l\'épreuve.'
          },
          {
            id: 'c_colere_faits',
            label: 'Poser les faits d\'une voix ferme mais sans crier',
            responsePreview: '« Mon oncle, regardez la mule : elle s\'est cabrée seule. Parlons avec dignité. »',
            choiceType: 'decision',
            traitGains: { discipline: 6, hilm: 4 },
            habitMessage: 'Décision morale • Othmân répond avec rigueur et sang-froid.'
          },
          {
            id: 'c_colere_adab',
            label: 'Ramasser les figues intactes pour calmer la panique du marchand',
            responsePreview: 'Désarmer l\'agression par un geste direct de serviabilité.',
            choiceType: 'decision',
            traitGains: { adab: 7, hilm: 5 },
            habitMessage: 'Décision morale • Othmân éteint le feu de la discorde par l\'Adab.'
          }
        ]
      }
    ]
  },

  // SCÈNE 12 (Ch2-3) — L'ÉPREUVE DU SILENCE & LE HADITH DE LA FORCE
  {
    id: 12,
    title: 'L\'Épreuve du Silence',
    subtitle: '« La Maîtrise dans la tourmente »',
    location: 'Ruelle du marché, tension palpable',
    requiredXp: 510,
    backgroundTheme: 'village_mefiant',
    beats: [
      {
        id: 's12_b1',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Othmân ! Arrête. Respire profondément. Ne laisse pas ce feu consumer ta raison.',
        emotion: 'thoughtful'
      },
      {
        id: 's12_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Mais Noura, il ment effrontément ! Tout le monde me regarde ! Si je ne réponds rien, ils vont tous croire que je suis coupable et faible !',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: 'Peur du regard d\'autrui (+15 Doute)'
      },
      {
        id: 's12_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Et que t\'apporterait de hurler comme lui ? Vous seriez deux insensés à ameuter la foule. Écoute bien ce que le Messager d\'Allah ﷺ a enseigné :',
        emotion: 'thoughtful'
      },
      {
        id: 's12_b4',
        type: 'quiz',
        quizId: 'quiz_hilm_force'
      },
      {
        id: 's12_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: '« Le vrai fort n\'est pas celui qui terrasse ses adversaires à la lutte, mais celui qui se maîtrise dans la colère »... C\'est tellement vrai.',
        emotion: 'thoughtful'
      },
      {
        id: 's12_b5_choice',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othmân sent son cœur battre fort devant les regards de la foule. Il réfléchit à l\'attitude à adopter :',
        choices: [
          {
            id: 'c2_silence_digne',
            label: 'Le Bouclier du Silence (Al-Hilm)',
            responsePreview: '« Je ferme mes lèvres, je respire et je refuse d\'alimenter la dispute. »',
            choiceType: 'decision',
            traitGains: { hilm: 8, sabr: 6 },
            habitMessage: 'Décision morale • Othmân dompte son impulsion par un silence noble et mesuré.',
            setNarrativeFlags: { market_reaction: 'silence' }
          },
          {
            id: 'c2_parole_douce',
            label: 'La Salutation Apaisante (As-Salām)',
            responsePreview: '« Que la paix soit sur vous mon frère. Pardonnez-moi si vous avez été gêné. »',
            choiceType: 'decision',
            traitGains: { adab: 8, hilm: 6 },
            habitMessage: 'Décision morale • Othmân désamorce la tension par la formule de paix.',
            setNarrativeFlags: { market_reaction: 'salam' }
          },
          {
            id: 'c2_comprehension_lucide',
            label: 'Comprendre la détresse de l\'autre avant de réagir',
            responsePreview: '« Cet homme a vu sa récolte à terre... Sa panique parle avant sa raison. »',
            choiceType: 'decision',
            traitGains: { ilm: 7, hilm: 6 },
            habitMessage: 'Décision morale • Othmân analyse avec discernement la cause du conflit.',
            setNarrativeFlags: { market_reaction: 'empathie' }
          }
        ]
      },
      {
        id: 's12_b6',
        type: 'real_action',
        realActionId: 'action_silence_colere'
      },
      {
        id: 's12_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'J\'ai fermé la bouche. J\'ai retenu la réplique blessante qui était sur mes lèvres. Le marchand continue de grommeler, mais ma gorge ne brûle plus.',
        emotion: 'smiling'
      },
      {
        id: 's12_b8',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu as remporté la première manche contre ton propre ego, mon fils. Viens, éloignons-nous vers la cour de la mosquée.',
        emotion: 'smiling'
      }
    ]
  },

  // SCÈNE 13 (Ch2-4) — LE PATIO AUX VIGNES & L'EAU DU CALME
  {
    id: 13,
    title: 'La Fontaine aux Vignes',
    subtitle: '« Éteindre le feu par l\'eau »',
    location: 'Patio ombragé de la mosquée',
    requiredXp: 545,
    backgroundTheme: 'mosquee_ablutions',
    beats: [
      {
        id: 's13_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Sous les arches fraîches de la cour, une fontaine en pierre claire murmure doucement. Les feuilles de vigne tamisent les rayons ardents du soleil.'
      },
      {
        id: 's13_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'La fraîcheur de cet endroit fait tellement de bien... Pourtant, dès que je repense au visage furieux de cet homme, mon cœur recommence à battre trop vite.',
        emotion: 'thoughtful',
        waswasXpAmount: 10,
        waswasReason: 'Rancœur résiduelle (+10)'
      },
      {
        id: 's13_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'C\'est naturel, Othmân. La colère est comme une fumée qui met du temps à se dissiper. C\'est pourquoi la Sunnah nous a légué un secret d\'eau et de paix.',
        emotion: 'smiling'
      },
      {
        id: 's13_b4',
        type: 'quiz',
        quizId: 'quiz_hilm_colere_remede'
      },
      {
        id: 's13_b5',
        type: 'real_action',
        realActionId: 'action_ablution_calme'
      },
      {
        id: 's13_b6',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Subhān Allâh... L\'eau sur mes avant-bras et mon visage a emporté toute la lourdeur. Je me sens léger, apaisé et lucide.',
        emotion: 'smiling'
      },
      {
        id: 's13_b7',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Maintenant que le feu est éteint, tu peux voir la vérité : cet homme est sous pression, fatigué de ses dettes et inquiet pour sa marchandise. Que décides-tu de faire ?',
        emotion: 'thoughtful'
      },
      {
        id: 's13_b8',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othmân réfléchit à l\'attitude qu\'il veut adopter :',
        choices: [
          {
            id: 'c2_rifq',
            label: 'Retourner au marché pour l\'aider avec douceur (Rifq)',
            responsePreview: '« Retournons au marché l\'aider à ramasser ses fruits ! Répondons au mal par le bien ! »',
            targetSceneId: 14,
            choiceType: 'decision',
            traitGains: { adab: 8, hilm: 7, vitalite: 4 },
            habitMessage: 'Décision morale • Othmân transforme l\'offense en réconciliation active.',
            setNarrativeFlags: { resolution_path: 'rifq_action' }
          },
          {
            id: 'c2_meditation',
            label: 'Rester sous la treille et invoquer pour lui en secret',
            responsePreview: '« Laissons la foule se calmer. Je reste ici prier sincèrement pour lui en secret. »',
            targetSceneId: 142,
            choiceType: 'decision',
            traitGains: { sabr: 8, hilm: 7, ilm: 4 },
            habitMessage: 'Décision morale • Othmân purifie son âme par l\'invocation invisible.',
            setNarrativeFlags: { resolution_path: 'secret_dua' }
          }
        ]
      }
    ]
  },

  // SCÈNE 14 (Ch2-5) — LA PARURE DE DOUCEUR (AR-RIFQ)
  {
    id: 14,
    title: 'La Parure de Douceur',
    subtitle: '« Désamorcer la discorde »',
    location: 'Étal du marché, réconciliation',
    requiredXp: 615,
    backgroundTheme: 'marche_apaise',
    beats: [
      {
        id: 's14_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othmân revient sur la place du marché. Le marchand, accroupi dans la poussière, tente péniblement de trier ses grenades écrasées.'
      },
      {
        id: 's14_b2',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'N\'y va pas ! Tu vas te faire humilier à nouveau ! Pourquoi aider un homme qui t\'a insulté ?',
        emotion: 'shadow',
        waswasXpAmount: 15,
        waswasReason: 'Peur de la rechute & hésitation (+15)'
      },
      {
        id: 's14_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: '« Aʿūdhu billāhi mina sh-shayṭāni r-rajīm ! » Tais-toi, Waswâs. La rancœur ne dictera pas mes pas.',
        emotion: 'determined'
      },
      {
        id: 's14_b4',
        type: 'quiz',
        quizId: 'quiz_hilm_rifq'
      },
      {
        id: 's14_b5',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othmân s\'accroupit tranquillement à côté du marchand. Sans un mot d\'amertume, il redresse une corbeille et commence à ramasser les fruits intacts pour les essuyer.'
      },
      {
        id: 's14_b6',
        type: 'dialogue',
        speaker: 'marchand',
        text: 'Toi ?! Mais... tout à l\'heure, je t\'ai crié dessus comme un sauvage... Pourquoi m\'aides-tu ?',
        emotion: 'surprised',
        adaptiveVariants: [
          {
            requiredFlag: 'elder_farmer_relation',
            text: 'Toi ?! Attends... tu es le jeune qui a aidé le vieux fermier à porter ses jarres hier ? Il m\'a parlé de ta bienveillance ce matin... Et moi qui t\'ai crié dessus ! Pourquoi m\'aides-tu après mon emportement ?'
          },
          {
            requiredFlag: 'market_reaction',
            text: 'Toi ?! Tout à l\'heure tu m\'as souhaité la paix avec tant de calme... Et maintenant tu reviens m\'aider à ramasser mes fruits ?'
          }
        ]
      },
      {
        id: 's14_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'As-salāmu ʿalaykum, mon oncle. Vous étiez inquiet pour votre gagne-pain, et la foule était dense. Aucun mal n\'a été fait avec intention. Prenons ces grenades ensemble.',
        emotion: 'smiling'
      },
      {
        id: 's14_b8',
        type: 'real_action',
        realActionId: 'action_pardon_noble'
      },
      {
        id: 's14_b9',
        type: 'dialogue',
        speaker: 'marchand',
        text: 'Qu\'Allah te bénisse, jeune homme... J\'ai agi sous le coup de la colère et j\'ai eu tort. Tiens, prends ces deux grenades dorées, elles sont pour toi avec toute ma gratitude.',
        emotion: 'smiling'
      }
    ]
  },

  // SCÈNE 142 (Ch2-5B) — LE MURMURE SOUS LA TREILLE (BRANCHE B)
  {
    id: 142,
    title: 'Le Murmure sous la Treille',
    subtitle: '« L\'Invocation Secrète »',
    location: 'Patio ombragé de la mosquée, treille de vigne',
    requiredXp: 615,
    backgroundTheme: 'mosquee_ablutions',
    beats: [
      {
        id: 's142_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othmân choisit de s\'asseoir à l\'ombre bienveillante de la treille de vigne. Le ruissellement cristallin de la fontaine apaise les battements précipités de son cœur.'
      },
      {
        id: 's142_b2',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu as choisi la voie de la pudeur et du recueillement intérieur, Othmân. Face à l\'offense, s\'isoler pour prier sincèrement pour celui qui nous a heurté est une force réservée aux âmes pures.',
        emotion: 'smiling'
      },
      {
        id: 's142_b3',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Tu pries pour un inconnu qui t\'a insulté devant tout le monde ?! Il méritait ta malédiction, pas tes prières ! Garde tes invocations pour toi tout seul !',
        emotion: 'shadow',
        waswasXpAmount: 15,
        waswasReason: 'Tentation d\'égoïsme & rancune sourde (+15)'
      },
      {
        id: 's142_b4',
        type: 'dialogue',
        speaker: 'personnage',
        arabicText: 'اللَّهُمَّ اهْدِ قَوْمِي فَإِنَّهُمْ لَا يَعْلَمُونَ',
        text: 'Jamais ! Le Prophète ﷺ invoquait le pardon pour ceux qui le rejetaient. Ô Allah, apaise le marchand de grenades, pardonne son emportement, bénis son étal et répands la sérénité dans son foyer.',
        emotion: 'determined'
      },
      {
        id: 's142_b5',
        type: 'quiz',
        quizId: 'quiz_dua_secret'
      },
      {
        id: 's142_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Écoute cette paix, Othmân. Lorsque tu formules une duʿāʾ en secret pour ton frère absent, un ange se tient à tes côtés et proclame : « Amîn, et à toi la même chose ! »',
        emotion: 'smiling'
      },
      {
        id: 's142_b7',
        type: 'real_action',
        realActionId: 'action_dua_secret'
      },
      {
        id: 's142_b8',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Al-Hamdoulillâh... Ma poitrine est libérée de toute amertume. C\'est comme si l\'eau fraîche des ablutions et cette prière secrète avaient éteint le feu jusque dans mes pensées. Reprenons notre route !',
        emotion: 'smiling'
      }
    ]
  },

  // SCÈNE 15 (Ch2-6) — L'OMBRE DE LA RANCŒUR (CLIMAX DU HILM)
  {
    id: 15,
    title: 'L\'Ombre de la Rancœur',
    subtitle: '« Le Combat contre le Feu Intérieur »',
    location: 'Défilé rocheux des crêtes',
    requiredXp: 690,
    backgroundTheme: 'climax_hilm',
    beats: [
      {
        id: 's15_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Sur le chemin du retour, le ciel au-dessus des crêtes s\'assombrit d\'une brume ardente aux teintes de cendre et de pourpre.\nUne ombre gigantesque se condense entre les rochers.'
      },
      {
        id: 's15_b2',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'Tu te crois sage, Othmân ?! Tu as plié devant ce marchand ! Tu as souri à celui qui t\'a accusé ! Dans ce monde, les doux sont écrasés par les forts ! Laisse la colère brûler en toi !',
        emotion: 'shadow',
        waswasXpAmount: 50,
        waswasReason: 'Embrasement du Grand Waswâs de la Colère (+50)'
      },
      {
        id: 's15_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'C\'est son ultime piège, Othmân ! Le Waswâs veut te faire croire que la douceur est une faiblesse. Brandis les vérités prophétiques que tu as apprises aujourd\'hui !',
        emotion: 'determined'
      },
      {
        id: 's15_b4',
        type: 'climax_combat'
      },
      {
        id: 's15_b5',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'Non... Cette fraîcheur... Ce pardon... La flamme de la haine ne peut plus prendre racine dans ce cœur... !',
        emotion: 'worried'
      },
      {
        id: 's15_b6',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Dans un souffle de lumière dorée, le tourbillon de cendre se dissout complètement. La montagne respire une paix céleste.'
      }
    ]
  },

  // SCÈNE 16 (Ch2-7) — L'AUBE DU HILM & ÉPILOGUE
  {
    id: 16,
    title: 'Le Cœur Paisible',
    subtitle: '« Le Porteur de Douceur »',
    location: 'Hauteurs de la vallée, coucher de soleil doré',
    requiredXp: 780,
    backgroundTheme: 'epilogue',
    beats: [
      {
        id: 's16_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le soleil décline doucement derrière les minarets lointains. Une clarté pure et limpide baigne la vallée.'
      },
      {
        id: 's16_b2',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu as triomphé de la plus rude des épreuves, Othmân. Dompter le feu de la colère et y répondre par le Hilm et la douceur... Tu as franchi un palier immense.',
        emotion: 'smiling'
      },
      {
        id: 's16_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Al-Hamdoulillâh... Je comprends maintenant pourquoi le Prophète ﷺ disait que le vrai fort est celui qui se maîtrise. La colère détruit tout, mais la douceur construit des ponts indestructibles.',
        emotion: 'smiling'
      },
      {
        id: 's16_b4',
        type: 'real_action',
        realActionId: 'action_mission_hilm'
      },
      {
        id: 's16_b5',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Au carrefour des chemins, la direction d\'une nouvelle étape se dessine clairement :\n« Le chemin du Tawakkul — Chapitre 3 : La Prise de Décision & la Confiance en Dieu ».'
      },
      {
        id: 's16_b6',
        type: 'chapter_end'
      }
    ]
  }
];
