import { Scene, Quiz, RealAction, Beat } from '../types';

export const CHAPTER_3_QUIZZES: Record<string, Quiz> = {
  quiz_tawakkul_soins: {
    id: 'quiz_tawakkul_soins',
    topic: 'Le Tawakkul Actif & la Médecine',
    promptSpeaker: 'noura',
    question: 'Que signifie véritablement placer sa confiance en Allah (Tawakkul) face à une maladie ou une blessure ?',
    options: [
      { id: 'A', text: 'Refuser toute aide et attendre passivement sans rien faire.', isCorrect: false },
      { id: 'B', text: 'Prendre les moyens utiles, consulter un soignant, suivre le traitement, puis remettre l\'issue à Allah.', isCorrect: true },
      { id: 'C', text: 'Croire que la maladie est le signe qu\'on est rejeté ou puni.', isCorrect: false },
      { id: 'D', text: 'Cacher sa douleur à tout le monde et prétendre être invincible.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'Le Prophète ﷺ a formellement ordonné de se soigner en affirmant qu\'Allah n\'a créé aucune maladie sans lui créer son remède. Consulter et prendre les remèdes est l\'essence même du Tawakkul prophétique.',
    theologicalNote: 'L\'adage prophétique « Attache ton chameau puis place ta confiance en Allah » (Tirmidhi 2517) s\'applique pleinement à la santé du corps.',
    reference: {
      concept: 'Tawakkul Actif & Obligation des soins',
      reference: 'Sunan Abi Dawud 3855 & Sahih al-Bukhari 5678',
      citationText: '« Soignez-vous, serviteurs d\'Allah ! Car Allah n\'a pas fait descendre une maladie sans avoir fait descendre son remède. »',
      sourceType: 'Hadith',
      arabic: 'تَدَاوَوْا فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ دَوَاءً'
    }
  },
  quiz_capacite_ame: {
    id: 'quiz_capacite_ame',
    topic: 'L\'Épreuve selon la Capacité',
    promptSpeaker: 'noura',
    question: 'Que nous enseigne le Coran sur la charge de l\'épreuve et l\'adaptation de notre pratique lorsque le corps faiblit ?',
    options: [
      { id: 'A', text: 'Si l\'on ne peut pas prier debout comme d\'habitude, la prière n\'est plus acceptée.', isCorrect: false },
      { id: 'B', text: 'Allah n\'impose à aucune âme une charge supérieure à sa capacité, et la prière s\'adapte avec dignité.', isCorrect: true },
      { id: 'C', text: 'La maladie prouve que l\'on est moins aimé par Dieu que les personnes en bonne santé.', isCorrect: false },
      { id: 'D', text: 'Il faut forcer sur sa blessure jusqu\'à s\'évanouir pour prouver sa piété.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'Le verset 2:286 garantit qu\'Allah mesure chaque épreuve à la force de l\'âme. Le Prophète ﷺ a enseigné de prier debout selon ses forces, assis si l\'on ne peut pas, ou même sur le côté, car la miséricorde divine allège la pratique.',
    theologicalNote: 'La règle juridique islamique énonce : « La gêne attire la facilité » (Al-mashaqqatu tajlibut-taysīr).',
    reference: {
      concept: 'L\'allégement divin face à la faiblesse',
      reference: 'Coran 2:286 & Sahih al-Bukhari 1117',
      citationText: '« Allah n\'impose à aucune âme une charge supérieure à sa capacité. »',
      sourceType: 'Coran',
      arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا'
    }
  },
  quiz_remedes_prophetiques: {
    id: 'quiz_remedes_prophetiques',
    topic: 'La Sagesse des Remèdes Prophétiques',
    promptSpeaker: 'noura',
    question: 'Quels remèdes et nourritures bienfaisantes sont explicitement cités avec louange dans la tradition prophétique authentique ?',
    options: [
      { id: 'A', text: 'Le miel pur, la Talbîna (orge apaisante au lait et miel), et la graine de nigelle (Habba sawdā\').', isCorrect: true },
      { id: 'B', text: 'Des incantations secrètes écrites sur des bouts de papier.', isCorrect: false },
      { id: 'C', text: 'Des potions magiques qui remplacent les visites chez le médecin.', isCorrect: false },
      { id: 'D', text: 'Le jeûne continu sans jamais manger ni s\'hydrater.', isCorrect: false }
    ],
    correctOptionId: 'A',
    explanation: 'La Sunnah met en valeur des causes alimentaires douces : le miel (Coran 16:69), la Talbîna qui apaise le cœur du malade et dissipe sa tristesse (Bukhari 5417), et la nigelle (Bukhari 5688), toujours en harmonie avec la science.',
    theologicalNote: 'Ces bienfaits sont des causes créées par Allah, à consommer avec gratitude et sans délaisser le diagnostic médical.',
    reference: {
      concept: 'La Talbîna et les bienfaits alimentaires',
      reference: 'Sahih al-Bukhari 5417 & Sahih Muslim 2216',
      citationText: '« La Talbîna réconforte le cœur du malade et dissipe une partie de sa peine. »',
      sourceType: 'Hadith',
      arabic: 'التَّلْبِينَةُ مُجِمَّةٌ لِفُؤَادِ الْمَرِيضِ ، تَذْهَبُ بِبَعْضِ الْحُزْنِ'
    }
  },
  quiz_dignite_souffrance: {
    id: 'quiz_dignite_souffrance',
    topic: 'Dignité & Accueil des Émotions',
    promptSpeaker: 'noura',
    question: 'Quelle est la noble attitude du croyant face à la douleur et aux larmes lorsque l\'épreuve est lourde ?',
    options: [
      { id: 'A', text: 'S\'interdire de pleurer et prétendre que la douleur n\'existe pas.', isCorrect: false },
      { id: 'B', text: 'Accueillir la peine avec humilité, pleurer sans révolte, et garder la certitude de la miséricorde.', isCorrect: true },
      { id: 'C', text: 'Maudire le destin et accuser les autres d\'être responsables.', isCorrect: false },
      { id: 'D', text: 'S\'enfermer dans sa chambre sans plus jamais parler à personne.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'Le Prophète ﷺ lui-même a versé des larmes lors des épreuves et a dit : « L\'œil pleure, le cœur est triste, mais nous ne disons que ce qui plaît à notre Seigneur » (Bukhari 1303). Les larmes sincères ne contredisent jamais le Sabr.',
    theologicalNote: 'Le Sabr n\'est pas l\'insensibilité de la pierre : c\'est la retenue de la langue contre la révolte et la préservation de l\'espoir.',
    reference: {
      concept: 'Les larmes de miséricorde',
      reference: 'Sahih al-Bukhari 1303',
      citationText: '« L\'œil verse des larmes et le cœur s\'attriste, mais nous ne disons que ce qui satisfait notre Seigneur. »',
      sourceType: 'Hadith',
      arabic: 'إِنَّ الْعَيْنَ تَدْمَعُ ، وَالْقَلْبَ يَحْزَنُ ، وَلَا نَقُولُ إِلَّا مَا يَرْضَى رَبُّنَا'
    }
  },
  quiz_shukr_dependance: {
    id: 'quiz_shukr_dependance',
    topic: 'L\'Humilité de Recevoir l\'Aide',
    promptSpeaker: 'noura',
    question: 'Pourquoi accepter l\'aide d\'un proche ou d\'un soignant quand on est diminué est-il un acte de sagesse et non de faiblesse ?',
    options: [
      { id: 'A', text: 'Parce que cela permet aux autres d\'exercer la miséricorde et à nous de pratiquer la gratitude sincère.', isCorrect: true },
      { id: 'B', text: 'Parce que le fort doit exploiter le travail des autres sans dire merci.', isCorrect: false },
      { id: 'C', text: 'Parce que dépendre des autres prouve qu\'on a échoué dans sa vie.', isCorrect: false },
      { id: 'D', text: 'Parce qu\'il vaut mieux tout faire payer pour ne rien devoir.', isCorrect: false }
    ],
    correctOptionId: 'A',
    explanation: 'Le Prophète ﷺ a enseigné que celui qui ne remercie pas les gens ne remercie pas Allah (Tirmidhi 1954). Permettre à son frère ou à sa sœur de porter secours est une bénédiction partagée qui tisse la véritable fraternité.',
    theologicalNote: 'L\'orgueil refuse l\'aide pour préserver une illusion d\'autosuffisance ; le cœur humble accueille la main tendue avec amour.',
    reference: {
      concept: 'Remercier les bienfaiteurs',
      reference: 'Jami` at-Tirmidhi 1954',
      citationText: '« Celui qui ne remercie pas les gens ne remercie pas Allah. »',
      sourceType: 'Hadith',
      arabic: 'مَنْ لَا يَشْكُرُ النَّاسَ لَا يَشْكُرُ اللَّهَ'
    }
  }
};

export const CHAPTER_3_REAL_ACTIONS: Record<string, RealAction> = {
  action_ecouter_corps: {
    id: 'action_ecouter_corps',
    title: 'Écouter son corps & Nommer son état',
    instruction: 'Prends deux minutes dans la vraie vie : assieds-toi confortablement, pose tes mains sur tes genoux et respire lentement par le nez. Si tu ressens de la fatigue, de la soif ou une tension, reconnais-le sans honte : bois un grand verre d\'eau fraîche.',
    subtext: 'Ton corps est un dépôt confié par ton Créateur (Amānah) ; en écouter les besoins fait partie intégrante de la foi.',
    xpReward: 30,
    reflectionPrompt: 'As-tu pris un moment pour reconnaître ce dont ton corps a besoin aujourd\'hui ?'
  },
  action_conseil_sante: {
    id: 'action_conseil_sante',
    title: 'Le Pas du Conseil & du Soin',
    instruction: 'Respecte aujourd\'hui scrupuleusement une consigne de santé réelle : prends tes soins prescrits à l\'heure, aère ta pièce, va dormir à une heure raisonnable ou demande l\'avis d\'un parent/médecin si une douleur persiste.',
    subtext: 'Rechercher le conseil utile et appliquer les soins est l\'accomplissement direct du Tawakkul actif.',
    xpReward: 35,
    reflectionPrompt: 'Prendre soin de sa santé avec rigueur honore le don de la vie.'
  },
  action_remede_sain_dua: {
    id: 'action_remede_sain_dua',
    title: 'La Cuillère de Miel & la Duʿāʾ de Guérison',
    instruction: 'Consomme aujourd\'hui un aliment sain (une cuillère de miel pur, une tisane tiède ou un fruit de saison). Puis récite avec recueillement la duʿāʾ prophétique de guérison pour toi ou pour les personnes éprouvées.',
    subtext: '« Allāhumma Rabba an-nās, adh-hib al-ba\'s, ishfi anta ash-Shāfī, lā shifā\'a illā shifā\'uk » (Bukhari 5743).',
    xpReward: 40,
    reflectionPrompt: 'As-tu pensé à invoquer la guérison pour tous ceux qui souffrent en silence ?'
  },
  action_rompre_isolement: {
    id: 'action_rompre_isolement',
    title: 'Rompre l\'Isolement sans Fausse Pudeur',
    instruction: 'Envoie un message simple et chaleureux à un proche de confiance : un mot gentil, une nouvelle sincère, ou demande des nouvelles d\'un membre de ta famille que tu n\'as pas vu récemment.',
    subtext: 'La fraternité rompt les murs que le Waswâs tente de construire autour des cœurs fatigués.',
    xpReward: 35,
    reflectionPrompt: 'Un message bienveillant allume une lanterne dans la journée d\'un proche.'
  },
  action_nommer_emotions: {
    id: 'action_nommer_emotions',
    title: 'La Clarté du Cœur (Nommer ses ressentis)',
    instruction: 'Sur une feuille ou dans ton cœur, identifie trois émotions réelles vécues aujourd\'hui (ex: soulagement, crainte, espoir, fatigue, gratitude). Remets-les humblement à Allah dans une courte prière sincère.',
    subtext: 'Nommer ce que l\'on ressent libère l\'esprit et empêche la rancœur ou l\'anxiété de s\'accumuler.',
    xpReward: 35,
    reflectionPrompt: 'La lucidité émotionnelle est une source immense de paix intérieure.'
  },
  action_remercier_aidant: {
    id: 'action_remercier_aidant',
    title: 'Remercier ceux qui prennent soin de nous',
    instruction: 'Va voir un parent, un ami ou un soignant qui t\'a aidé ou préparé un repas récemment. Regarde-le dans les yeux, souris-lui et dis-lui : « Jazāk Allāhu khayran pour tout ce que tu fais » !',
    subtext: '« Celui qui ne remercie pas les gens ne remercie pas Allah » (Tirmidhi 1954).',
    xpReward: 40,
    reflectionPrompt: 'Exprimer sa gratitude réjouit le cœur de celui qui donne sans compter.'
  },
  action_micro_progres: {
    id: 'action_micro_progres',
    title: 'Le Trésor des Micro-Progrès',
    instruction: 'Identifie un micro-progrès accompli aujourd\'hui, même invisible aux yeux du monde : avoir gardé son calme, s\'être reposé sans culpabiliser, avoir souri malgré la fatigue. Dis avec gratitude : « Al-Hamdulillâh ».',
    subtext: 'La graine sous la terre travaille en secret avant de fleurir. Chaque petit pas pèse lourd auprès d\'Allah.',
    xpReward: 40,
    reflectionPrompt: 'As-tu su apprécier ta petite victoire silencieuse du jour ?'
  },
  action_mission_malade: {
    id: 'action_mission_malade',
    title: 'Mission Ultime : La Visite Fraternelle',
    instruction: 'Rends visite ou téléphone à une personne âgée, malade ou isolée dans ton entourage. Apporte-lui un sourire, des nouvelles réconfortantes et récite une duʿāʾ de paix pour elle.',
    subtext: 'Le Prophète ﷺ a enseigné que visiter le malade plonge le visiteur dans la miséricorde divine jusqu\'à son retour.',
    xpReward: 50,
    reflectionPrompt: 'Porter le réconfort à un malade élève l\'âme vers la plus noble des sagesses.'
  }
};

export const CHAPTER_3_SCENES: Scene[] = [
  // SCÈNE 17 (Ch3-1) — LE MATIN DIFFICILE
  {
    id: 17,
    title: 'Le Matin Difficile',
    subtitle: '« Le corps ralenti »',
    location: 'Chambre d\'Othmân, lueurs de l\'aube',
    requiredXp: 780,
    backgroundTheme: 'chambre_maladie',
    beats: [
      {
        id: 's17_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Ce matin-là, les lueurs de l\'aube caressent doucement le parquet de la chambre... mais Othmân ne trouve pas la force de se lever. Le corps fiévreux et les membres engourdis, le moindre mouvement lui demande un effort démesuré.',
        adaptiveVariants: [
          {
            archetype: 'perseverant',
            text: 'Othmân avançait sans se retourner. Les difficultés n\'avaient pas disparu, mais il avait appris à continuer malgré elles. Pourtant ce matin, une fièvre soudaine vient clouer son corps au lit...'
          },
          {
            archetype: 'pacificateur',
            text: 'Othmân avait compris que certaines batailles ne se gagnent pas par la force, mais par la maîtrise de soi. Mais aujourd\'hui, l\'épreuve n\'est pas dehors : elle frappe son propre corps affaibli.'
          },
          {
            archetype: 'sage',
            text: 'Othmân avait appris à chercher avant de conclure. Pourtant, une question demeurait : quand faut-il cesser de raisonner et accueillir humblement le repos ?'
          },
          {
            archetype: 'dynamique',
            text: 'Othmân avait retrouvé toute son énergie et son élan. Mais à l\'aube de cette nouvelle étape, un épuisement brutal vient éprouver sa volonté.'
          },
          {
            archetype: 'equilibre',
            text: 'Othmân avançait d\'un pas mesuré et serein. Mais ce matin, une lourde fièvre vient troubler l\'harmonie de son réveil.'
          }
        ]
      },
      {
        id: 's17_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Je voudrais tellement me lever et poursuivre mon voyage... Mais mes forces m\'ont abandonné. Tout le monde avance dehors, et moi je reste cloué ici...',
        emotion: 'worried'
      },
      {
        id: 's17_b3',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Tu vois bien ? Tu es devenu un fardeau pour tout le monde. Tu ne sers plus à rien. Abandonne tes projets, tu n\'atteindras jamais la sagesse...',
        emotion: 'shadow',
        waswasXpAmount: 20,
        waswasReason: 'Culpabilité & abattement face à la maladie (+20)',
        adaptiveVariants: [
          {
            dominantTrait: 'discipline',
            text: 'Toutes tes routines sont anéanties ! Tu as raté ton réveil, ta journée est ruinée, tu ne vaux rien dès que ton planning s\'effondre !'
          },
          {
            dominantTrait: 'vitalite',
            text: 'Toi qui te croyais si fort et infatigable ! Regarde tes bras trembler. Tu n\'es qu\'une coquille vide incapable de faire trois pas !'
          },
          {
            dominantTrait: 'ilm',
            text: 'À quoi bon tout ce savoir accumulé si tu ne peux même pas tenir debout ? Tes réflexions ne te guériront pas !'
          },
          {
            dominantTrait: 'adab',
            text: 'Tu es devenu un fardeau pour Noura. Elle doit s\'épuiser à te soigner alors que tu devrais la soulager ! Tu la déçois !'
          },
          {
            dominantTrait: 'sabr',
            text: 'Tu prétends patienter... mais au fond tu sais que cette maladie va durer indéfiniment. Abandonne tout espoir !'
          },
          {
            dominantTrait: 'hilm',
            text: 'Tu retiens tes plaintes, mais une colère sourde bouillonne : pourquoi ce coup d\'arrêt tombe-t-il sur toi ?'
          }
        ]
      },
      {
        id: 's17_b4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu n\'as pas besoin de gravir toute la montagne aujourd\'hui, mon fils. Pour l\'instant, il suffit de t\'asseoir, de respirer calmement et d\'écouter ce que ton corps exprime.',
        emotion: 'smiling'
      },
      {
        id: 's17_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Mais maman... ce n\'est presque rien, juste un petit pas...',
        emotion: 'thoughtful'
      },
      {
        id: 's17_b6',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'Les petits pas ne sont pas rien lorsqu\'ils sont accomplis avec patience dans la difficulté. La première sagesse de ce matin, c\'est d\'accueillir ta faiblesse avec douceur.',
        emotion: 'smiling'
      },
      {
        id: 's17_b6_choice',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othmân réfléchit à l\'attitude qu\'il choisit d\'adopter face à sa faiblesse ce matin...',
        choices: [
          {
            id: 'c3_discipline_soins',
            label: 'Boire par petites gorgées et réorganiser sa journée avec méthode (Discipline & Vitalité)',
            responsePreview: '« Mon corps a des droits sur moi. Je prends ce verre d\'eau sans culpabiliser. »',
            choiceType: 'decision',
            traitGains: { discipline: 7, vitalite: 5 },
            habitMessage: 'Décision morale • Othmân pose des actes mesurés pour préserver son corps.'
          },
          {
            id: 'c3_sabr_accueil',
            label: 'Accueillir la faiblesse avec patience et sérénité (Sabr & Hilm)',
            responsePreview: '« Cette pause n\'est pas un échec, c\'est une épreuve qui forge l\'endurance. »',
            choiceType: 'decision',
            traitGains: { sabr: 7, hilm: 5 },
            habitMessage: 'Décision morale • Othmân refuse la révolte et pratique le Sabr noble.'
          },
          {
            id: 'c3_ilm_comprehension',
            label: 'Méditer sur les sagesses de l\'épreuve et les remèdes prophétiques (ʿIlm & Sabr)',
            responsePreview: '« La maladie est un rappel de notre fragilité et une occasion d\'apprendre. »',
            choiceType: 'decision',
            traitGains: { ilm: 7, sabr: 5 },
            habitMessage: 'Décision morale • Othmân nourrit sa compréhension des lois de la vie.'
          },
          {
            id: 'c3_adab_gratitude',
            label: 'Exprimer sa gratitude à Noura et accepter son aide avec douceur (Adab & Hilm)',
            responsePreview: '« Merci maman pour ta patience... J\'accepte de me laisser guider ce matin. »',
            choiceType: 'decision',
            traitGains: { adab: 7, hilm: 5 },
            habitMessage: 'Décision morale • Othmân accueille l\'amour maternel avec humilité.'
          }
        ]
      },
      {
        id: 's17_b7',
        type: 'real_action',
        realActionId: 'action_ecouter_corps'
      },
      {
        id: 's17_b8',
        type: 'dialogue',
        speaker: 'narration',
        text: 'En buvant ce verre d\'eau fraîche, Othmân sent une première onde de fraîcheur détendre ses tempes fiévreuses. La lumière du matin semble plus douce.'
      }
    ]
  },

  // SCÈNE 18 (Ch3-2) — LE DISPENSAIRE DE L'APOTHICAIRE
  {
    id: 18,
    title: 'Le Dispensaire de l\'Apothicaire',
    subtitle: '« Le Tawakkul des Soins »',
    location: 'Maison de soins du village, bocaux et mortier',
    requiredXp: 820,
    backgroundTheme: 'apothicaire',
    beats: [
      {
        id: 's18_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Soutenu par Noura, Othmân franchit le seuil de la maison de soins. L\'atmosphère embaume la menthe séchée, la résine de pin et la cire d\'abeille. Sur les étagères de bois patiné, des dizaines de flacons ambrés captent le soleil.'
      },
      {
        id: 's18_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'J\'ai un nœud au ventre... Et si le soignant m\'annonçait quelque chose de grave ? Et si je ne redevenais jamais comme avant ?',
        emotion: 'worried'
      },
      {
        id: 's18_b3',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Fuis cet endroit ! Ne pose aucune question ! Fais semblant que tout va bien, les faibles consultent les médecins, pas les héros !',
        emotion: 'shadow',
        waswasXpAmount: 15,
        waswasReason: 'Peur du diagnostic & tentation de déni (+15)'
      },
      {
        id: 's18_b4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Le courage ne consiste pas à nier ce qui fait peur, Othmân. Le véritable courage consiste à chercher la vérité avec dignité et à prendre les moyens nécessaires pour se soigner.',
        emotion: 'determined'
      },
      {
        id: 's18_b5',
        type: 'quiz',
        quizId: 'quiz_tawakkul_soins'
      },
      {
        id: 's18_b6',
        type: 'real_action',
        realActionId: 'action_conseil_sante'
      },
      {
        id: 's18_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'L\'apothicaire a été si rassurant... Il m\'a expliqué que mon corps combattait l\'épreuve, et m\'a prescrit du repos et une préparation bienfaisante. Se soigner est un devoir !',
        emotion: 'smiling'
      }
    ]
  },

  // SCÈNE 19 (Ch3-3) — CELUI QUI PRIE AVEC UNE ATTELLE
  {
    id: 19,
    title: 'Celui qui prie avec une attelle',
    subtitle: '« La dignité dans la fragilité »',
    location: 'Marches de la mosquée sous le dôme ocre',
    requiredXp: 870,
    backgroundTheme: 'mosquee_attelle',
    beats: [
      {
        id: 's19_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'À l\'heure de la prière, Othmân et Noura montent doucement les marches en pierre calcaire de la mosquée. Les villageois se hâtent d\'un pas alerte.'
      },
      {
        id: 's19_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Regarde-les tous courir... Ils sont si vigoureux. Moi, j\'ai peine à plier les genoux.',
        emotion: 'thoughtful'
      },
      {
        id: 's19_b3',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Mais au premier rang des marches, un jeune garçon de son âge monte paisiblement. Son bras gauche est solidement maintenu par une attelle de bois clair enveloppée de bandelettes de lin blanc.'
      },
      {
        id: 's19_b4',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Tu as vu ? Même lui monte sans se plaindre ! Toi tu n\'as qu\'une fatigue et tu gémis ! Tu es pitoyable !',
        emotion: 'shadow',
        waswasXpAmount: 15,
        waswasReason: 'Comparaison culpabilisante du Waswâs (+15)'
      },
      {
        id: 's19_b5',
        type: 'dialogue',
        speaker: 'enfant',
        text: 'As-salāmu ʿalaykum mon frère ! La montée est douce quand on prend son temps, n\'est-ce pas ? Viens, asseyons-nous ensemble près du pilier pour la prière !',
        emotion: 'smiling'
      },
      {
        id: 's19_b5_choice',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othmân réfléchit à l\'attitude fraternelle à adopter face au jeune garçon blessé...',
        choices: [
          {
            id: 'c3_entraide_marche',
            label: 'Lui offrir son épaule et gravir les marches ensemble (Adab & Hilm)',
            responsePreview: '« Montons ensemble pas à pas, mon frère. Rien ne presse sur le chemin de la prière. »',
            choiceType: 'decision',
            traitGains: { adab: 7, hilm: 6 },
            setNarrativeFlags: { mosque_encounter: 'shoulder_support' },
            habitMessage: 'Décision morale • Othmân exprime une fraternité sincère et active.'
          },
          {
            id: 'c3_assise_humilite',
            label: 'S\'asseoir à son côté sur la marche pour partager ce moment (Sabr & Hilm)',
            responsePreview: '« Ton courage m\'inspire. Asseyons-nous un instant ici à l\'ombre avant d\'entrer. »',
            choiceType: 'decision',
            traitGains: { sabr: 7, hilm: 6 },
            setNarrativeFlags: { mosque_encounter: 'shared_sitting' },
            habitMessage: 'Décision morale • Othmân accueille l\'instant présent avec humilité.'
          },
          {
            id: 'c3_ecoute_ilm',
            label: 'Échanger sur la beauté d\'adapter sa prière avec dignité (ʿIlm & Sabr)',
            responsePreview: '« La religion est facilité. Prions ensemble selon nos forces ! »',
            choiceType: 'decision',
            traitGains: { ilm: 7, sabr: 5 },
            setNarrativeFlags: { mosque_encounter: 'prophetic_learning' },
            habitMessage: 'Décision morale • Othmân se remémore la miséricorde des règles prophétiques.'
          }
        ]
      },
      {
        id: 's19_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu vois cet enfant, Othmân ? Il ne prie pas parce qu\'il est invincible. Il prie parce que son cœur se tourne vers Allah avec son corps d\'aujourd\'hui.',
        emotion: 'smiling'
      },
      {
        id: 's19_b7',
        type: 'quiz',
        quizId: 'quiz_capacite_ame'
      },
      {
        id: 's19_b8',
        type: 'dialogue',
        speaker: 'personnage',
        text: '« Lā yukallifullāhu nafsan illā wusʿahā »... J\'ai prié assis à côté de lui, avec humilité et paix. Je ne suis pas en retard sur ma foi : je la vis simplement avec mes forces du moment.',
        emotion: 'smiling'
      }
    ]
  },

  // SCÈNE 20 (Ch3-4) — LES REMÈDES PROPHÉTIQUES
  {
    id: 20,
    title: 'Les Remèdes Prophétiques',
    subtitle: '« La douceur du miel et de la Talbîna »',
    location: 'Patio ombragé sous la treille de vigne',
    requiredXp: 920,
    backgroundTheme: 'patio_remedes',
    beats: [
      {
        id: 's20_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Après la prière, Noura et le jeune à l\'attelle invitent Othmân dans la cour intérieure de la mosquée. Sous une treille de vigne verdoyante, une table en bois présente un pot de miel doré, un bol fumant de Talbîna et une fiole d\'huile de nigelle.'
      },
      {
        id: 's20_b2',
        type: 'dialogue',
        speaker: 'enfant',
        text: 'Mon père me prépare de la Talbîna chaude chaque matin depuis ma fracture. C\'est une bouillie d\'orge au lait et au miel : le Prophète ﷺ disait qu\'elle réconforte le cœur du malade !',
        emotion: 'smiling'
      },
      {
        id: 's20_b3',
        type: 'quiz',
        quizId: 'quiz_remedes_prophetiques'
      },
      {
        id: 's20_b4',
        type: 'real_action',
        realActionId: 'action_remede_sain_dua'
      },
      {
        id: 's20_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'La foi et la science médicale avancent main dans la main, mon fils. Prendre les remèdes bénis créés par Allah tout en plaçant son espoir en Lui seul : voilà le véritable équilibre.',
        emotion: 'smiling'
      },
      {
        id: 's20_b6_choice',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othmân réfléchit à la façon dont il souhaite poursuivre son après-midi de convalescence...',
        choices: [
          {
            id: 'c3_verger',
            label: 'Accompagner l\'enfant blessé dans le verger d\'amandiers (Adab & Vitalité)',
            responsePreview: '« Marchons doucement sous les fleurs. Partager l\'épreuve rend le cœur plus fort. »',
            targetSceneId: 201,
            choiceType: 'decision',
            traitGains: { adab: 8, vitalite: 5, sabr: 4 },
            setNarrativeFlags: { convalescence_path: 'verger' },
            habitMessage: 'Décision morale • Othmân privilégie la marche douce et le soutien fraternel.'
          },
          {
            id: 'c3_manuscrit',
            label: 'Rester au dispensaire pour méditer et étudier le manuscrit (ʿIlm & Sabr)',
            responsePreview: '« Le calme et l\'étude apaiseront mon esprit. Voyons ce que dit ce parchemin ancien. »',
            targetSceneId: 202,
            choiceType: 'decision',
            traitGains: { ilm: 8, sabr: 6, discipline: 4 },
            setNarrativeFlags: { convalescence_path: 'manuscrit' },
            habitMessage: 'Décision morale • Othmân approfondit ses connaissances des remèdes et des sagesses.'
          }
        ]
      }
    ]
  },

  // SCÈNE 201 (Ch3-4A) — LA CUEILLETTE SOUS LES AMANDIERS (BRANCHE A)
  {
    id: 201,
    title: 'La Cueillette sous les Amandiers',
    subtitle: '« La Fraternité dans la Fragilité »',
    location: 'Verger d\'amandiers en fleurs, colline ensoleillée',
    requiredXp: 940,
    backgroundTheme: 'verger_amandiers',
    beats: [
      {
        id: 's201_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othmân et le jeune garçon marchent à pas lents sur le sentier herbeux. Les amandiers déploient une voûte éblouissante de fleurs blanches et rosées sous la brise tiède.'
      },
      {
        id: 's201_b2',
        type: 'dialogue',
        speaker: 'enfant',
        text: 'Quand je me suis brisé le bras, je pleurais en cachette... J\'avais honte d\'être ralenti. Mais mon grand-père m\'a dit : « Les branches ploient sous le vent pour devenir plus souples, pas pour mourir ». Regarde cette menthe sauvage !',
        emotion: 'smiling'
      },
      {
        id: 's201_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'C\'est tellement vrai... J\'avais peur que mes amis me jugent inutile. Mais marcher à tes côtés me redonne courage. Cueillons ces brins ensemble pour la tisane du soir.',
        emotion: 'smiling'
      },
      {
        id: 's201_b4',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: '« L\'exemple des croyants dans leur amour, leur miséricorde et leur compassion mutuels est comme le corps : si un membre souffre, tout le reste du corps répond par l\'insomnie et la fièvre » (Bukhari 6011). Vous donnez vie à cette noble parole, mes enfants.',
        emotion: 'smiling'
      },
      {
        id: 's201_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Al-Hamdoulillâh ! Respirer le parfum de ces fleurs avec un frère loyal a dissipé la lourdeur de mes tempes. Mon corps est encore las, mais mon âme est revigorée !',
        emotion: 'smiling'
      }
    ]
  },

  // SCÈNE 202 (Ch3-4B) — LE MANUSCRIT DES ÉPREUVES (BRANCHE B)
  {
    id: 202,
    title: 'Le Manuscrit des Épreuves',
    subtitle: '« La Noblesse de la Patience d\'Ayyûb »',
    location: 'Dispensaire silencieux, odeur d\'herbes et de cire',
    requiredXp: 940,
    backgroundTheme: 'apothicaire',
    beats: [
      {
        id: 's202_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othmân choisit le calme feutré du dispensaire. L\'apothicaire pose délicatement sur la table de chêne un vieux manuscrit relié de cuir sombre aux feuillets jaunis.'
      },
      {
        id: 's202_b2',
        type: 'dialogue',
        speaker: 'narration',
        text: '« Lis ceci, jeune voyageur. C\'est le récit de la longue maladie du noble Prophète Ayyûb (Job عليه السلام). Malgré des années de douleur physique, jamais un mot de rancœur ou de reproche n\'a franchi ses lèvres. »'
      },
      {
        id: 's202_b3',
        type: 'dialogue',
        speaker: 'personnage',
        arabicText: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
        text: '« Rabbi annī massaniyaḍ-ḍurru wa anta arḥamur-rāḥimīn » (Coran 21:83)... « Le mal m\'a touché, et Tu es le plus Miséricordieux des miséricordieux ». Une prière si humble, sans exigence ni amertume.',
        emotion: 'thoughtful'
      },
      {
        id: 's202_b4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Le Prophète ﷺ a enseigné : « Jamais une fatigue, une maladie, un souci ou même une épine ne touche le croyant sans qu\'Allah n\'efface par cela de ses péchés » (Bukhari 5641). Rien de ce que tu endures n\'est vain, Othmân.',
        emotion: 'smiling'
      },
      {
        id: 's202_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Comprendre le sens profond de l\'épreuve apaise l\'esprit plus sûrement que n\'importe quel baume. Mon cœur accepte cette halte avec une gratitude renouvelée.',
        emotion: 'smiling'
      }
    ]
  },

  // SCÈNE 21 (Ch3-5) — LE POIDS DE LA HALTE & LA LANTERNE
  {
    id: 21,
    title: 'Le Poids de la Halte',
    subtitle: '« Garder le lien sans honte »',
    location: 'Cour familiale au crépuscule',
    requiredXp: 970,
    backgroundTheme: 'verger_lanterne',
    beats: [
      {
        id: 's21_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'De retour à la maison, Othmân tente d\'aider à ranger le jardin, mais un vertige le force à s\'asseoir sur le muret de pierre sèche. Au loin, les éclats de rire de ses camarades montent du sentier.'
      },
      {
        id: 's21_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'J\'ai marché cinq minutes et je suis déjà épuisé... Mes amis travaillent, explorent la vallée... et moi je suis coincé ici. Ils vont finir par m\'oublier.',
        emotion: 'worried'
      },
      {
        id: 's21_b3',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Ne leur écris surtout pas ! Tu vas déranger tout le monde avec tes complaintes. Isole-toi dans le noir, tu n\'as plus ta place parmi eux !',
        emotion: 'shadow',
        waswasXpAmount: 20,
        waswasReason: 'Tentateur d\'isolement & peur de l\'oubli (+20)'
      },
      {
        id: 's21_b4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Te reposer quand ton corps le réclame n\'est pas capituler, Othmân. La vraie persévérance sait reconnaître quand il faut poser son sac. Et donner de tes nouvelles à ceux qui t\'aiment n\'est pas quémander de la pitié : c\'est leur permettre d\'exercer leur fraternité.',
        emotion: 'smiling'
      },
      {
        id: 's21_b4_choice',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othmân réfléchit à la façon d\'agir pour dissiper la solitude et garder le lien...',
        choices: [
          {
            id: 'c3_message_fraternel',
            label: 'Envoyer un mot bienveillant et chaleureux à ses camarades',
            responsePreview: '« Leur écrire un mot simple me reconnecte au monde. La fraternité ne s\'éteint pas avec la distance. »',
            moralKey: 'message_fraternel',
            statBonus: { stat: 'bonte', amount: 2 }
          },
          {
            id: 'c3_gratitude_noura',
            label: 'Offrir un geste de tendresse et de gratitude à Noura pour sa présence',
            responsePreview: '« Maman veille sur moi avec tant d\'amour. Je la remercie de tout cœur avant de penser au reste. »',
            moralKey: 'gratitude_proche',
            statBonus: { stat: 'constance', amount: 2 }
          }
        ]
      },
      {
        id: 's21_b5',
        type: 'real_action',
        realActionId: 'action_rompre_isolement'
      },
      {
        id: 's21_b6',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Noura allume la petite lanterne à huile sur le muret. Sa flamme dorée danse doucement dans l\'air du soir, apportant un réconfort paisible.'
      }
    ]
  },

  // SCÈNE 22 (Ch3-6) — NOMMER LA DOULEUR SANS HONTE
  {
    id: 22,
    title: 'Nommer la Douleur sans Honte',
    subtitle: '« La noblesse des larmes »',
    location: 'Atelier sous la treille de figuiers',
    requiredXp: 1020,
    backgroundTheme: 'atelier_sculpture',
    beats: [
      {
        id: 's22_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'En passant devant son atelier, Othmân aperçoit son sac de voyageur et ses outils de sculpture posés dans un coin. Une bouffée d\'amertume lui serre la gorge.'
      },
      {
        id: 's22_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Pourquoi moi ? Pourquoi maintenant ? Je faisais mes efforts, je cherchais à être bon ! Pourquoi mon propre corps me trahit-il ?',
        emotion: 'worried'
      },
      {
        id: 's22_b3',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Parce que tes efforts ne valent rien ! Tu as été abandonné ! Si Dieu t\'aimait, tu serais fort et invincible !',
        emotion: 'shadow',
        waswasXpAmount: 25,
        waswasReason: 'Révolte & sentiment d\'injustice (+25)'
      },
      {
        id: 's22_b4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tu as le droit d\'avoir mal, Othmân. Tu as le droit d\'être triste et de trouver cette halte difficile. Même les Prophètes ont pleuré dans la douleur ! Mais ne laisse jamais la souffrance te murmurer que ton âme a perdu sa valeur.',
        emotion: 'determined'
      },
      {
        id: 's22_b5',
        type: 'quiz',
        quizId: 'quiz_dignite_souffrance'
      },
      {
        id: 's22_b6',
        type: 'real_action',
        realActionId: 'action_nommer_emotions'
      },
      {
        id: 's22_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Mettre des mots sur ma peine m\'a libéré d\'un poids immense. Je ne suis pas en colère contre la vie : j\'avais simplement besoin d\'accueillir ma tristesse.',
        emotion: 'smiling'
      }
    ]
  },

  // SCÈNE 23 (Ch3-7) — L'AMĀNAH DU CORPS & LE BOUILLON
  {
    id: 23,
    title: 'L\'Amānah du Corps & le Bouillon',
    subtitle: '« Accueillir la main tendue »',
    location: 'Cuisine familiale et table de repos',
    requiredXp: 1070,
    backgroundTheme: 'cuisine_bouillon',
    beats: [
      {
        id: 's23_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le lendemain midi, on frappe doucement à la porte de la maison. C\'est le marchand de grenades, accompagné du jeune à l\'attelle, apportant un panier de grenades fraîches et une soupière fumante.'
      },
      {
        id: 's23_b2',
        type: 'dialogue',
        speaker: 'marchand',
        text: 'As-salāmu ʿalaykum ! Nous avons appris que le vaillant Othmân traversait quelques jours de fièvre. Voici un bouillon réconfortant préparé par ma maisonnée avec tout notre respect !',
        emotion: 'smiling'
      },
      {
        id: 's23_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'C\'est... trop d\'honneurs. Je suis gêné... J\'ai toujours voulu être celui qui aide, pas celui qu\'on assiste.',
        emotion: 'thoughtful'
      },
      {
        id: 's23_b4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Recevoir avec gratitude est parfois plus exigeant que donner avec faste, mon fils. Laisse tes frères récolter la récompense de la générosité !',
        emotion: 'smiling'
      },
      {
        id: 's23_b5',
        type: 'quiz',
        quizId: 'quiz_shukr_dependance'
      },
      {
        id: 's23_b6',
        type: 'real_action',
        realActionId: 'action_remercier_aidant'
      },
      {
        id: 's23_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Merci du fond du cœur, mes frères. Qu\'Allah vous bénisse pour votre bienveillance !',
        emotion: 'smiling'
      }
    ]
  },

  // SCÈNE 24 (Ch3-8) — LA GRAINE SOUS TERRE & LES MICRO-PROGRÈS
  {
    id: 24,
    title: 'La Graine sous Terre',
    subtitle: '« L\'espérance silencieuse »',
    location: 'Verger au coucher du soleil',
    requiredXp: 1120,
    backgroundTheme: 'verger_lanterne',
    beats: [
      {
        id: 's24_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Après plusieurs jours de soins réguliers et de repos discipliné, Othmân s\'assied au pied d\'un grand figuier du verger. Le vent du soir agite les branches dorées.'
      },
      {
        id: 's24_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'J\'ai pris mes soins, j\'ai bu la Talbîna... Pourtant ce soir, je ne me sens pas beaucoup plus vigoureux qu\'hier. À quoi bon tout cet effort si rien ne change ?',
        emotion: 'worried'
      },
      {
        id: 's24_b3',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Tu as perdu ton temps ! La guérison ne viendra jamais ! Tu resteras faible pour toujours !',
        emotion: 'shadow',
        waswasXpAmount: 20,
        waswasReason: 'Découragement face à la lenteur de la guérison (+20)'
      },
      {
        id: 's24_b4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Regarde cette terre au pied de l\'arbre, Othmân. Quand on sème une graine, rien ne perce la terre pendant des jours. Pourtant, dans le secret de l\'obscurité, les racines s\'enfoncent pour préparer la pousse de demain. L\'espérance, c\'est refuser que l\'impatience dicte ton humeur.',
        emotion: 'smiling'
      },
      {
        id: 's24_b5',
        type: 'real_action',
        realActionId: 'action_micro_progres'
      },
      {
        id: 's24_b6',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Sur une petite branche basse du figuier, une fleur blanche délicate commence lentement à s\'épanouir entre les feuilles sombres. Un symbole discret de vie qui renaît.'
      }
    ]
  },

  // SCÈNE 25 (Ch3-9) — LA MONTAGNE INTÉRIEURE (CLIMAX & ÉPILOGUE)
  {
    id: 25,
    title: 'La Montagne Intérieure',
    subtitle: '« Le Triomphe de la Résilience »',
    location: 'Crêtes des hauteurs, aube radieuse',
    requiredXp: 1180,
    backgroundTheme: 'climax_maladie',
    beats: [
      {
        id: 's25_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Le jour suivant, Othmân marche d\'un pas mesuré mais assuré jusqu\'au promontoire rocheux. Soudain, les falaises s\'enveloppent d\'un épais brouillard violet et froid : le Grand Waswâs de l\'Abandon se dresse devant lui !'
      },
      {
        id: 's25_b2',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'Regarde-toi ! Tu as faibli ! Tu as été ralenti ! Tu dépends des autres et de leurs remèdes ! Tu as perdu toute ta gloire de voyageur !',
        emotion: 'shadow',
        waswasXpAmount: 40,
        waswasReason: 'Assaut ultime du Waswâs de l\'Abandon (+40)'
      },
      {
        id: 's25_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: '« Aʿūdhu billāhi mina sh-shayṭāni r-rajīm ! » Tais-toi, Waswâs ! Mon corps a été éprouvé, mais ma valeur devant mon Créateur ne dépend pas de ma vigueur du jour ! J\'avance avec patience (Sabr), soins et confiance (Tawakkul) !',
        emotion: 'determined'
      },
      {
        id: 's25_b4',
        type: 'climax_combat'
      },
      {
        id: 's25_b5',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'Non... Même diminué, son cœur reste inébranlable... L\'épreuve ne nourrit plus le doute mais fortifie sa foi... !',
        emotion: 'worried'
      },
      {
        id: 's25_b6',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Les volutes de brume violette se dissipent complètement sous les premiers rayons d\'une aube limpide et dorée. De petites clochettes sauvages s\'ouvrent sur les dalles de pierre antique. La vallée respire la paix.'
      },
      {
        id: 's25_b7',
        type: 'dialogue',
        speaker: 'noura',
        text: 'La vraie persévérance ne t\'a pas demandé de courir, mon fils. Elle t\'a demandé de rester digne et debout dans ton cœur, même quand ton corps avançait à petits pas. Tu as conquis ta Montagne Intérieure.',
        emotion: 'smiling'
      },
      {
        id: 's25_b8',
        type: 'real_action',
        realActionId: 'action_mission_malade'
      },
      {
        id: 's25_b9',
        type: 'chapter_end',
        xpAmount: 70,
        xpReason: 'Chapitre 3 terminé : Triomphe de la Montagne Intérieure',
        unlockedConceptId: 'sabr_chifa'
      }
    ]
  }
];
