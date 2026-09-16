import { Scene, Quiz, RealAction, ClimaxStep, Beat } from '../../types';

export const QUIZZES_EN: Record<string, Quiz> = {
  quiz_istiadhah: {
    id: 'quiz_istiadhah',
    topic: 'Istiʿādhah',
    promptSpeaker: 'noura',
    question: 'What can we say when seeking refuge in Allah from Satan (Shayṭān)?',
    options: [
      { id: 'A', text: 'There is nothing to say, you just have to ignore it.', isCorrect: false },
      { id: 'B', text: 'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm.', isCorrect: true },
      { id: 'C', text: 'A formula that each person invents on their own.', isCorrect: false },
      { id: 'D', text: 'You must be a certified scholar to be allowed to say it.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'The Istiʿādhah is explicitly mentioned in the Quran: when seeking protection or recitation, we ask refuge with Allah from the outcast devil.',
    theologicalNote: 'It is not a magic charm, but a sincere reminder of the Creator that prepares the heart to act with righteousness.',
    reference: {
      concept: 'Istiʿādhah (Seeking Refuge)',
      reference: 'Quran 16:98',
      citationText: '« So when you recite the Quran, seek refuge in Allah from Satan, the expelled. »',
      sourceType: 'Coran',
      arabic: 'فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ'
    }
  },
  quiz_doua_maison: {
    id: 'quiz_doua_maison',
    topic: 'Leaving Home Duʿāʾ',
    promptSpeaker: 'noura',
    question: 'Which supplication did the Prophet ﷺ teach us to recite when crossing the threshold of our home?',
    options: [
      { id: 'A', text: 'We say nothing, running fast is enough.', isCorrect: false },
      { id: 'B', text: '« Bismillāh, tawakkaltu ʿalā Allāh, wa lā hawla wa lā quwwata illā billāh ».', isCorrect: true },
      { id: 'C', text: 'A formula reserved only for long caravan journeys.', isCorrect: false },
      { id: 'D', text: 'We recite it only if it is completely dark outside.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'The Prophet ﷺ taught that when a believer leaves home reciting this duʿāʾ, it is said to him: « You are guided, defended, and protected », and the devil turns away from him.',
    theologicalNote: 'Placing trust in Allah (Tawakkul) from the doorstep turns every departure into an act of peace and divine protection.',
    reference: {
      concept: 'Leaving Home Duʿāʾ (Tawakkul)',
      reference: 'Abu Dawud 5095 & At-Tirmidhi 3426',
      citationText: '« In the name of Allah, I place my trust in Allah, and there is no power nor might except with Allah. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sunan Abi Dawud 5095',
      arabic: 'بِسْمِ اللَّهِ ، تَوَكَّلْتُ عَلَى اللَّهِ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ'
    }
  },
  quiz_taaruf: {
    id: 'quiz_taaruf',
    topic: 'Taʿāruf',
    promptSpeaker: 'noura',
    question: 'Why did Allah create nations and tribes according to Surah Al-Hujurat?',
    options: [
      { id: 'A', text: 'So that they compare and brag with pride.', isCorrect: false },
      { id: 'B', text: 'So that people may get to know one another.', isCorrect: true },
      { id: 'C', text: 'So that everyone stays isolated in their corner.', isCorrect: false },
      { id: 'D', text: 'To determine which group is superior to others.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'Quran 49:13 indicates that nations and tribes were created « that you may know one another » (Taʿāruf). The verse emphasizes that the most noble in the sight of Allah is the most righteous.',
    reference: {
      concept: 'Taʿāruf (Mutual Acquaintance)',
      reference: 'Quran 49:13',
      citationText: '« ...and We made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous. »',
      sourceType: 'Coran',
      arabic: 'وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ'
    }
  },
  quiz_adab_boire: {
    id: 'quiz_adab_boire',
    topic: 'Etiquette of Drinking',
    promptSpeaker: 'noura',
    question: 'According to the noble Sunnah, what mindful etiquette did the Prophet ﷺ teach us when drinking?',
    options: [
      { id: 'A', text: 'Drinking while standing in one single gulp without breathing.', isCorrect: false },
      { id: 'B', text: 'Drinking with the left hand while walking briskly.', isCorrect: false },
      { id: 'C', text: 'Sitting down, saying Bismillāh, drinking with the right hand in 3 sips, and concluding with Al-Hamdulillāh.', isCorrect: true },
      { id: 'D', text: 'Blowing repeatedly into the cup to cool it down.', isCorrect: false }
    ],
    correctOptionId: 'C',
    explanation: 'The Prophet ﷺ taught to drink while seated, with the right hand, reciting Bismillāh, breathing outside the cup three times, and praising Allah with Al-Hamdulillāh.',
    reference: {
      concept: 'Etiquette of Drinking (Adab)',
      reference: 'Sahih Muslim 2024 & Sahih al-Bukhari 5631',
      citationText: '« When one of you drinks, let him not breathe into the vessel... and the Prophet ﷺ used to drink in three breaths mentioning the name of Allah. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sahih Muslim (2024) / Sahih al-Bukhari (5631)'
    }
  },
  quiz_adab: {
    id: 'quiz_adab',
    topic: 'Adab',
    promptSpeaker: 'noura',
    question: 'What should one do when having nothing good to say?',
    options: [
      { id: 'A', text: 'Speak anyway just to be heard.', isCorrect: false },
      { id: 'B', text: 'Respond with the same harsh tone.', isCorrect: false },
      { id: 'C', text: 'Remain silent.', isCorrect: true },
      { id: 'D', text: 'Mock the situation.', isCorrect: false }
    ],
    correctOptionId: 'C',
    explanation: 'The Prophet ﷺ taught: « Whoever believes in Allah and the Last Day, let him speak good or remain silent ». Knowing when to be quiet is a sign of wisdom and faith.',
    reference: {
      concept: 'Adab of Speech (Speak good or remain silent)',
      reference: 'Sahih al-Bukhari 6018',
      citationText: '« Whoever believes in Allah and the Last Day, let him speak good or remain silent. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sahih al-Bukhari (Hadith 6018)'
    }
  },
  quiz_sabr: {
    id: 'quiz_sabr',
    topic: 'Sabr',
    promptSpeaker: 'noura',
    question: 'Which attitude best reflects true Sabr (noble patience)?',
    options: [
      { id: 'A', text: 'Insisting until the other person gives in by force.', isCorrect: false },
      { id: 'B', text: 'Persevering with calm and dignity in the face of difficulty.', isCorrect: true },
      { id: 'C', text: 'Giving up immediately with bitter resentment.', isCorrect: false },
      { id: 'D', text: 'Pretending that nothing hurts while harboring grudges.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'Sabr is constructive moral endurance: accepting trials without losing temper and continuing to move forward with noble poise.',
    reference: {
      concept: 'Sabr (Patience & Endurance)',
      reference: 'Quran 2:153',
      citationText: '« O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient. »',
      sourceType: 'Coran',
      arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ'
    }
  },
  quiz_niyyah: {
    id: 'quiz_niyyah',
    topic: 'Niyyah',
    promptSpeaker: 'noura',
    question: 'In any righteous deed, what matters most in the sight of Allah?',
    options: [
      { id: 'A', text: 'Being loudly applauded by the crowd.', isCorrect: false },
      { id: 'B', text: 'Looking impressive in the eyes of others.', isCorrect: false },
      { id: 'C', text: 'The sincere intention in the heart for Allah alone.', isCorrect: true },
      { id: 'D', text: 'Receiving an immediate material reward in return.', isCorrect: false }
    ],
    correctOptionId: 'C',
    explanation: 'The hadith states: « Actions are judged only by intentions ». An action is accepted only when motivated by sincere devotion to the Creator.',
    reference: {
      concept: 'Niyyah (Sincerity of Intention)',
      reference: 'Sahih al-Bukhari 1 & Sahih Muslim 1907',
      citationText: '« Indeed, actions are judged only by intentions, and every person will get what he intended. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sahih al-Bukhari (Hadith 1)'
    }
  },
  quiz_shukr: {
    id: 'quiz_shukr',
    topic: 'Shukr',
    promptSpeaker: 'noura',
    question: 'What do we call genuine gratitude to Allah for His boundless blessings?',
    options: [
      { id: 'A', text: 'Sabr.', isCorrect: false },
      { id: 'B', text: 'Adab.', isCorrect: false },
      { id: 'C', text: 'Shukr.', isCorrect: true },
      { id: 'D', text: 'Niyyah.', isCorrect: false }
    ],
    correctOptionId: 'C',
    explanation: 'Shukr is the heartfelt acknowledgment of Allah’s gifts. The Quran teaches that gratitude brings even greater abundance and peace.',
    reference: {
      concept: 'Shukr (Gratitude)',
      reference: 'Quran 14:7',
      citationText: '« If you are grateful, I will surely increase [My favor] upon you. »',
      sourceType: 'Coran',
      arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ'
    }
  },
  quiz_ilm: {
    id: 'quiz_ilm',
    topic: 'ʿIlm',
    promptSpeaker: 'noura',
    question: 'Everything you have learned today... what truly allowed you to move forward?',
    options: [
      { id: 'A', text: 'Pure luck.', isCorrect: false },
      { id: 'B', text: 'Just gathering XP points.', isCorrect: false },
      { id: 'C', text: 'Beneficial knowledge (ʿIlm), sincere effort, and taking real action.', isCorrect: true },
      { id: 'D', text: 'Always wanting to be right.', isCorrect: false }
    ],
    correctOptionId: 'C',
    explanation: 'Knowledge alone is not enough if it remains abstract. It comes alive when paired with inner spiritual effort and expressed through concrete righteous action.',
    reference: {
      concept: 'ʿIlm & Action (Beneficial Knowledge)',
      reference: 'Sahih Muslim 2664',
      citationText: '« Eagerly seek what benefits you, seek help from Allah, and do not lose heart. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sahih Muslim (Hadith 2664)'
    }
  }
};

export const REAL_ACTIONS_EN: Record<string, RealAction> = {
  action_lit: {
    id: 'action_lit',
    title: 'Tidying Your Bed',
    instruction: 'Take a minute to make your bed or tidy your living space in real life.',
    subtext: 'A simple daily routine that brings mental clarity for the day ahead.',
    xpReward: 25,
    reflectionPrompt: 'Did you tidy your room this morning or will you do it right now?'
  },
  action_eau: {
    id: 'action_eau',
    title: 'Drinking Water (Prophetic Adab)',
    instruction: 'Go fetch a glass of water in real life. Sit down, hold the glass with your right hand, say « Bismillāh » and drink peacefully in three sips. Conclude with « Al-Hamdulillāh ».',
    subtext: 'A daily sunnah of mindfulness, gratitude, and physical composure.',
    xpReward: 25,
    reflectionPrompt: 'Did you remember to sit down and mention the Name of Allah before drinking?'
  },
  action_depart: {
    id: 'action_depart',
    title: 'Departure Duʿāʾ & Packing with Tawakkul',
    instruction: 'Check that your backpack or belongings are ready in real life. Then recite the departure duʿāʾ placing full trust in Allah: « Bismillāh, tawakkaltu ʿalā Allāh, wa lâ hawla wa lâ quwwata illā billāh ».',
    subtext: 'The believer takes practical steps and relies serenely on the Creator.',
    xpReward: 50,
    reflectionPrompt: 'Have you made a habit of placing your steps in Allah’s care before leaving home?'
  },
  action_istiadhah: {
    id: 'action_istiadhah',
    title: 'Reciting the Istiʿādhah & Stepping Forward',
    instruction: 'Take a calm, deep breath in real life. Recite clearly: « Aʿūdhu billāhi mina sh-shayṭāni r-rajīm » to seek refuge in Allah, then choose to move forward despite self-doubt.',
    subtext: 'Sincere refuge centers the heart and breaks the grip of discouragement.',
    xpReward: 25,
    reflectionPrompt: 'Do you turn to Allah for refuge whenever doubts arise in your mind?'
  },
  action_salam_village: {
    id: 'action_salam_village',
    title: 'The Salām & Fraternal Smile',
    instruction: 'Today: offer a sincere Salām or a warm, gentle smile to someone in real life. The Prophet ﷺ taught that a smile is a charity (Sadaqah).',
    subtext: 'Kindness disarms mistrust and softens closed hearts.',
    xpReward: 30,
    reflectionPrompt: 'Have you gifted a smile or word of peace to someone today?'
  },
  action_sabr_refus: {
    id: 'action_sabr_refus',
    title: 'Sabr in the Face of Rejection',
    instruction: 'Think of a recent disappointment or refusal. Take a deep breath and say with your heart: « Al-Hamdulillāh ʿalâ kulli hāl » (Praise be to Allah in every circumstance) without bitterness.',
    subtext: 'Sabr is moral strength: we accept outcomes with dignity and keep moving forward.',
    xpReward: 30,
    reflectionPrompt: 'Have you managed to accept a « no » with poise and noble calm?'
  },
  action_parler: {
    id: 'action_parler',
    title: 'Speaking with Warmth',
    instruction: 'Today in real life: speak kindly to someone you do not usually talk to.',
    subtext: 'A simple respectful greeting is enough to initiate fraternal Taʿāruf.',
    xpReward: 50,
    reflectionPrompt: 'Ready to try a kind salutation today?'
  },
  action_geste: {
    id: 'action_geste',
    title: 'A Discreet Good Deed (Pure Niyyah)',
    instruction: 'Today: do a small helpful deed in secret (tidy something, pick up litter, help without being asked) without seeking praise from anyone.',
    subtext: 'Actions are judged by intentions. Acting secretly for Allah protects the heart from vanity.',
    xpReward: 35,
    reflectionPrompt: 'Have you done a good deed seen by none except Allah?'
  },
  action_shukr: {
    id: 'action_shukr',
    title: 'Shukr & Caring for Living Things',
    instruction: 'Take 1 minute: 1. Think of 3 blessings Allah granted you (health, family, water) and say « Al-Hamdulillāh ». 2. Water a plant or care for a living creature nearby.',
    subtext: 'Gratitude increases divine favor (Quran 14:7). Caring for creation is an act of worship.',
    xpReward: 35,
    reflectionPrompt: 'What are three blessings you are most grateful for today?'
  },
  action_mission_jour: {
    id: 'action_mission_jour',
    title: 'Mission of the Day: As-salāmu ʿalaykum',
    instruction: 'Walk up to someone. Say: « As-salāmu ʿalaykum ». Let the encounter unfold naturally.',
    subtext: 'The best of two is the one who initiates the Salām.',
    xpReward: 50,
    reflectionPrompt: 'Peace offered from the heart opens the gates of true brotherhood.'
  }
};

export const CLIMAX_STEPS_EN: ClimaxStep[] = [
  {
    stepNumber: 1,
    id: 'step_istiadhah',
    title: '1. Remember Allah & Seek Refuge',
    quote: 'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm',
    arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    meaning: 'I seek refuge in Allah from doubt and discouragement.',
    description: 'When suffocating doubt strikes, seeking refuge in Allah anchors the soul and clears away fear.'
  },
  {
    stepNumber: 2,
    id: 'step_ilm',
    title: '2. Beneficial Knowledge & Understanding',
    quote: 'ʿIlm — Wisdom & Insight',
    arabic: 'العِلْم',
    meaning: 'Recalling authentic principles and lessons learned along the journey.',
    description: 'Beneficial knowledge illuminates the heart and stops harmful illusions from taking root.'
  },
  {
    stepNumber: 3,
    id: 'step_sabr',
    title: '3. Patient Endurance (Sabr)',
    quote: 'Sabr — Steadfast Dignity',
    arabic: 'الصَّبْر',
    meaning: 'Facing difficulty without panic, without bitterness, and without giving up.',
    description: 'Trials are a natural part of growth; patience is the key to lasting peace and constancy.'
  },
  {
    stepNumber: 4,
    id: 'step_adab',
    title: '4. Noble Character (Adab)',
    quote: 'Adab — Gentleness & Restraint',
    arabic: 'الأَدَب',
    meaning: 'Preserving kindness, respectful speech, and inner composure.',
    description: 'Never respond to negativity with harshness or vanity, but with dignified calm.'
  },
  {
    stepNumber: 5,
    id: 'step_effort',
    title: '5. Sincere Effort & Taking Causes',
    quote: 'Effort — Sincere Endeavor',
    arabic: 'بَذْلُ الجُهْد',
    meaning: 'Striving with full sincerity without feigning helplessness.',
    description: 'Allah blesses the sincere effort of the one who strives for what benefits him.'
  },
  {
    stepNumber: 6,
    id: 'step_action',
    title: '6. Moving Forward Constantly',
    quote: 'Action — The Resolute Step',
    arabic: 'المُضِيُّ فِي الطَّرِيق',
    meaning: 'Taking the next step despite uncertainty and persevering in goodness.',
    description: 'Waswas vanishes completely as soon as one engages resolutely in righteous action.'
  }
];

export const CHAPTER_1_SCENES_EN: Scene[] = [
  // SCENE 1 — THE ROOM
  {
    id: 1,
    title: 'The Room',
    subtitle: '« The Awakening & The First Step »',
    location: "Othman's room on the hilltop, dawn",
    requiredXp: 0,
    backgroundTheme: 'chambre',
    beats: [
      {
        id: 's1_hook_1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'The dawn softly illuminates the walls of the room. Othman sits at the edge of his bed, his eyes fixed on his still-empty travel bag.',
        emotion: 'thoughtful'
      },
      {
        id: 's1_hook_2',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Today is the day, Othman. The day you decided to head down toward the village.',
        emotion: 'smiling'
      },
      {
        id: 's1_hook_3',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Yes... I have always lived sheltered on this hill. I want to learn, explore the world, and connect with others... but as soon as I think about it, I fear I will never belong.',
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: 'Fear of the unknown & feeling of inadequacy'
      },
      {
        id: 's1_hook_4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Wisdom and noble companions are never found by staying locked inside, my son. How would you like to begin your day?',
        emotion: 'smiling'
      },
      {
        id: 's1_choice_morning',
        type: 'choice',
        speaker: 'personnage',
        text: '« How does Othman choose to begin his morning? »',
        choices: [
          {
            id: 'c_eau',
            label: '💧 Drink fresh water (Prophetic Adab)',
            responsePreview: '« I will start by drinking a glass of water. »',
            choiceType: 'habit',
            traitGains: { adab: 5, ilm: 3 },
            setNarrativeFlags: { morning_gesture: 'water' },
            habitMessage: 'Prophetic Adab • Othman calms his body and mind.'
          },
          {
            id: 'c_ordre',
            label: '🧹 Tidy my room and make my bed (Discipline & Niyyah)',
            responsePreview: '« I will start by tidying my room. »',
            choiceType: 'habit',
            traitGains: { discipline: 5, sabr: 3 },
            setNarrativeFlags: { morning_gesture: 'order' },
            habitMessage: 'Discipline & Purity • Othman arranges his space with care.'
          },
          {
            id: 'c_sandales',
            label: '👟 Prepare my sandals for departure (Tawakkul)',
            responsePreview: '« I will get my sandals ready, I am ready to step out. »',
            choiceType: 'habit',
            traitGains: { sabr: 5, vitalite: 3 },
            setNarrativeFlags: { morning_gesture: 'sandals' },
            habitMessage: 'Resolve & Tawakkul • Othman prepares to cross the threshold.'
          }
        ]
      },

      // --- BRANCH 1: DRINKING WATER ---
      {
        id: 's1_water_othman',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'water' },
        text: 'I will start by drinking some fresh water.',
        emotion: 'smiling'
      },
      {
        id: 's1_water_noura_ask',
        type: 'dialogue',
        speaker: 'noura',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'water' },
        text: 'Before drinking... do you remember the etiquettes taught by the Prophet ﷺ?',
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
        text: 'Take your time. The Prophet ﷺ taught a mindful way of drinking: start with Bismillāh, drink with your right hand, and sip in three calm breaths. Even simple daily habits become worship when done with awareness.',
        emotion: 'smiling'
      },
      {
        id: 's1_water_othman_drink',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'water' },
        text: 'Al-Hamdulillāh... The water is so cool and refreshing. I feel peaceful and ready to move forward.',
        emotion: 'smiling',
        actionVignette: {
          icon: '💧',
          badge: 'Daily Sunnah',
          title: 'The Adab of Drinking',
          description: 'Sit down, say Bismillāh, and drink peacefully with the right hand.',
          glowColor: 'cyan'
        }
      },

      // --- BRANCH 2: TIDYING THE ROOM ---
      {
        id: 's1_order_othman',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'order' },
        text: 'I will start by tidying my room and making my bed.',
        emotion: 'thoughtful'
      },
      {
        id: 's1_order_noura_ask',
        type: 'dialogue',
        speaker: 'noura',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'order' },
        text: 'A great beginning. Bringing order to your space helps bring clarity to your mind. But do you know with what intention we should do this?',
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
        text: '« Actions are judged only by intentions ». Making your bed or tidying your room becomes an act of beauty and worship as long as the heart is sincere.',
        emotion: 'smiling'
      },
      {
        id: 's1_order_othman_done',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'order' },
        text: 'Everything is in order now. My eyes look upon my travel bag... I am ready to head down.',
        emotion: 'determined',
        actionVignette: {
          icon: '🧹',
          badge: 'Purity & Order',
          title: 'Sincere Intention (Niyyah)',
          description: 'Arranging outer space to bring inner mental clarity with pure devotion.',
          glowColor: 'amber'
        }
      },

      // --- BRANCH 3: SANDALS & TAWAKKUL ---
      {
        id: 's1_sandals_othman',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'sandals' },
        text: 'I will prepare my sandals. I believe I am ready to step outside.',
        emotion: 'determined'
      },
      {
        id: 's1_sandals_noura_ask',
        type: 'dialogue',
        speaker: 'noura',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'sandals' },
        text: 'Prepare to cross the threshold. Before stepping out of your home, there is a powerful supplication you can learn.',
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
        text: 'Exactly: entrusting your steps to Allah before stepping into the world gives unshakeable strength.',
        emotion: 'smiling'
      },
      {
        id: 's1_sandals_othman_recite',
        type: 'dialogue',
        speaker: 'personnage',
        requiredNarrativeFlag: { flag: 'morning_gesture', value: 'sandals' },
        arabicText: 'بِسْمِ اللَّهِ ، تَوَكَّلْتُ عَلَى اللَّهِ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
        text: '« Bismillāh, tawakkaltu ʿalā Allāh, wa lâ hawla wa lâ quwwata illā billâh »\n\n(In the name of Allah, I place my trust in Allah, and there is no power nor might except with Allah).',
        emotion: 'determined',
        actionVignette: {
          icon: '🚪',
          badge: 'Tawakkul at Threshold',
          title: 'The Departure Duʿāʾ',
          description: '« Bismillāh, tawakkaltu ʿalā Allāh... » — Entrusting one’s journey to the Creator.',
          glowColor: 'emerald'
        }
      },

      // --- CONVERGENCE AT THE DOOR ---
      {
        id: 's1_door_hesitation',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'My hand touches the iron handle... Mother, my heart is racing all of a sudden. What if nobody wants me out there?',
        emotion: 'worried'
      },
      {
        id: 's1_waswas_whisper',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'Do you really think you can succeed out there? Stay inside. You will stammer at the very first word. Go back to your room...',
        emotion: 'shadow',
        waswasXpAmount: 10,
        waswasReason: 'The first whisper of doubt emerges at the door'
      },
      {
        id: 's1_noura_wisdom',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Do you hear that? Doubt always tries to paralyze you at the threshold. Do not debate with it: place your trust in Allah and take your step!',
        emotion: 'smiling'
      },
      {
        id: 's1_door_choice',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othman firmly places his hand on the door handle:',
        choices: [
          {
            id: 'c_door_push',
            label: '« Bismillāh! » — Push the door open and step forward despite doubt',
            badge: 'Taking Action',
            traitGains: { sabr: 5, discipline: 4 },
            habitMessage: 'Courage • Othman overcomes doubt through action.'
          }
        ]
      },
      {
        id: 's1_door_open',
        type: 'dialogue',
        speaker: 'narration',
        text: 'The wooden door opens onto the crisp morning air. Othman crosses the threshold. The whispers fade behind him as he walks down the hillside toward the edge of the woods.',
        emotion: 'smiling'
      }
    ]
  },

  // SCENE 2 — THE CROSSROADS SIGNPOST
  {
    id: 2,
    title: 'The Crossroads Signpost',
    subtitle: '« Choosing the Goal »',
    location: 'Forest edge trail junction',
    requiredXp: 0,
    backgroundTheme: 'carrefour',
    beats: [
      {
        id: 's2_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othman and Noura arrive before a large carved oak signpost at the crossroads. Othman sets his pack on the ground for a moment to wipe his brow.'
      },
      {
        id: 's2_b2_noura',
        type: 'dialogue',
        speaker: 'noura',
        text: 'You have left home, Othman. But stepping out is not yet journeying. Look at this signpost.',
        emotion: 'smiling'
      },
      {
        id: 's2_b3_othman',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Each sign points toward a different direction... What should I begin my journey with?',
        emotion: 'thoughtful'
      },
      {
        id: 's2_b4_noura',
        type: 'dialogue',
        speaker: 'noura',
        text: 'It is up to you to choose what you wish to work on today. Every path is a quest to grow your heart.',
        emotion: 'smiling'
      },
      {
        id: 's2_b6',
        type: 'choice',
        speaker: 'personnage',
        text: '« Today, what does Othman choose to work on? »',
        choices: [
          {
            id: 'c1',
            label: '🌿 Chapter 1: « Connecting with Others » — Meeting with goodwill & trust (Taʿāruf)',
            badge: 'Available • Chapter 1',
            interactiveSpot: { x: '35%', y: '55%' }
          },
          {
            id: 'c2',
            label: '📖 Chapter 2: « Seeking Knowledge » — The school of scholars, humility & science (ʿIlm)',
            disabled: true,
            badge: 'Coming Soon • Chapter 2',
            disabledReason: 'Othman takes the path to the grand library and discovers the patience of learning.',
            interactiveSpot: { x: '50%', y: '45%' }
          },
          {
            id: 'c3',
            label: '🛡️ Chapter 3: « Mastering Anger » — The marketplace trial & clemency (Hilm)',
            disabled: true,
            badge: 'Coming Soon • Chapter 3',
            disabledReason: 'Facing provocations in the marketplace, Othman learns to master anger through noble composure.',
            interactiveSpot: { x: '65%', y: '50%' }
          },
          {
            id: 'c4',
            label: '🩹 Chapter 4: « Enduring the Trial » — Patience in hardship & mutual support (Sabr)',
            disabled: true,
            badge: 'Coming Soon • Chapter 4',
            disabledReason: 'Alongside those who suffer, Othman learns fortitude and brotherly aid.',
            interactiveSpot: { x: '75%', y: '60%' }
          },
          {
            id: 'c5',
            label: '🌳 Chapter 5: « Honoring Roots » — Gratitude & kindness toward parents (Birr)',
            disabled: true,
            badge: 'Coming Soon • Chapter 5',
            disabledReason: 'A quest of remembrance and filial devotion beneath the great ancient tree.',
            interactiveSpot: { x: '85%', y: '45%' }
          }
        ]
      },
      {
        id: 's2_choice_reaction',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'I choose to connect with others! I do not want to remain trapped in my solitude. I want to build sincere bonds of brotherhood.',
        emotion: 'determined'
      },
      {
        id: 's2_tawakkul_reminder',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Then let us begin with the encounter! Entrust your heart to Allah and let us proceed with peace.',
        emotion: 'smiling'
      },
      {
        id: 's2_act',
        type: 'real_action',
        realActionId: 'action_depart',
        text: 'Check your pack and renew the supplication of trust in Allah.'
      }
    ]
  },

  // SCENE 3 — THE FIRST WASWAS
  {
    id: 3,
    title: 'The First Waswas',
    subtitle: '« The Paralyzing Thought »',
    location: 'Mist-shrouded mountain trail',
    requiredXp: 0,
    backgroundTheme: 'waswas',
    beats: [
      {
        id: 's3_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'The trail narrows beneath steep cliffs. A heavy purple mist rises from the ground. A Waswas emerges: a whispering shadow, devoid of physical substance, but heavy with doubt.'
      },
      {
        id: 's3_b2',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'You will never make it.\nYou want to make friends? You cannot even speak to a stranger without stammering.',
        emotion: 'shadow'
      },
      {
        id: 's3_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Mother... Those words... That is exactly what I was repeating to myself this morning in bed.',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: 'The whisper of Waswas resonates inside Othman'
      },
      {
        id: 's3_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: 'He cannot read your mind, Othman. He blows upon your insecurities to paralyze you and make you turn back. This shadow has no real power, except what you grant it.',
        emotion: 'thoughtful'
      },
      {
        id: 's3_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'But how do I silence a thought that grips my throat?',
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: 'Oppression of internal self-doubt'
      },
      {
        id: 's3_b7_bis',
        type: 'dialogue',
        speaker: 'noura',
        text: 'We do not debate with doubt, my son. We seek refuge with the One who dispels all darkness.',
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
        text: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\nAʿūdhu billāhi mina sh-shayṭāni r-rajīm!',
        arabicText: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
        emotion: 'determined',
        waswasXpAmount: -20,
        waswasReason: 'The Istiʿādhah dispels the Shadow!',
        actionVignette: {
          icon: '🛡️',
          badge: 'Divine Refuge',
          title: 'The Protective Istiʿādhah',
          description: '« Aʿūdhu billāhi mina sh-shayṭāni r-rajīm » — Seeking refuge in Allah shatters the grip of doubt.',
          glowColor: 'purple'
        }
      },
      {
        id: 's3_b10',
        type: 'dialogue',
        speaker: 'narration',
        text: 'The shadowy apparition begins to waver and lose its substance.'
      },
      {
        id: 's3_b11',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Look, it is retreating! Is it defeated now?',
        emotion: 'smiling'
      },
      {
        id: 's3_b14',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Remember: it is not a magic charm, Othman. You sought refuge with Allah in your heart. Now, anchor this word and take a resolute physical step forward!',
        emotion: 'smiling'
      },
      {
        id: 's3_pont_istiadhah',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you, whenever doubt, shyness, or an inner voice seeks to paralyze you in real life... Breathe calmly, seek refuge in Allah by reciting the Istiʿādhah, and choose to take your step forward!',
        emotion: 'smiling'
      },
      {
        id: 's3_act_istiadhah',
        type: 'real_action',
        realActionId: 'action_istiadhah',
        text: 'Reciting the Istiʿādhah & stepping forward.'
      },
      {
        id: 's3_b16',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Heart strengthened by divine refuge, Othman plants his walking stick firmly and takes a bold stride forward.'
      },
      {
        id: 's3_b17',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'You will still fail...',
        emotion: 'shadow'
      },
      {
        id: 's3_b18',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Perhaps. But I place my trust in Allah and I move forward!',
        emotion: 'determined'
      },
      {
        id: 's3_b19',
        type: 'dialogue',
        speaker: 'narration',
        text: 'The purple mist bursts into a shower of golden sparks! The trail becomes clear again, lined with wildflowers and bathed in warm light.'
      },
      {
        id: 's3_b19_reaction',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'It vanished completely... The path is luminous and clear!',
        emotion: 'smiling'
      },
      {
        id: 's3_b19_noura',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Doubt has no substance against sincere remembrance of Allah and the courage of righteous action. Cherish this lesson.',
        emotion: 'smiling'
      },
      {
        id: 's3_b20',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Concept mastered: The Istiʿādhah and triumph over doubt'
      }
    ]
  },

  // SCENE 4 — « I DO NOT WANT TO BE ALONE ANYMORE »
  {
    id: 4,
    title: '« I Do Not Want to Be Alone Anymore »',
    subtitle: 'Taʿāruf',
    location: 'Outskirts of the flowering village',
    requiredXp: 0,
    backgroundTheme: 'vallee',
    beats: [
      {
        id: 's4_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Down below, the red tiled roofs of the village shimmer under the morning sun. The silhouettes of villagers bustle between alleyways and orchards.'
      },
      {
        id: 's4_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Look at all these people... They all seem so busy and confident. If I approach, they will wonder who I am and find me strange.',
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: 'Fear of judgment from others'
      },
      {
        id: 's4_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Why strange, Othman?',
        emotion: 'thoughtful'
      },
      {
        id: 's4_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Because I do not know anyone here. We are not from the same place, we have different lives... What if we have nothing to say to each other?',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: 'Fear of the unknown & feeling of isolation'
      },
      {
        id: 's4_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Do you truly believe Allah created people with such diverse lives and faces so that everyone stays locked behind shuttered windows?',
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
        text: 'Surah 49:13... Nations and tribes « that you may know one another » (Taʿāruf). So differences between people are not an obstacle... They are a divine invitation!',
        emotion: 'smiling'
      },
      {
        id: 's4_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Exactly. Difference is not a wall that divides, it is a bridge to cross. Are you ready to take the first step?',
        emotion: 'smiling'
      },
      {
        id: 's4_pont_parler',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you in your daily life... Is there someone you never dared speak to? A neighbor, a classmate, a shopkeeper? Today, cross that bridge and offer them a kind greeting.',
        emotion: 'smiling'
      },
      {
        id: 's4_b12',
        type: 'real_action',
        realActionId: 'action_parler',
        text: 'Today: speak with warmth to someone you rarely talk to.'
      },
      {
        id: 's4_b14',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'I greeted an elderly gentleman pruning his grapevines. He looked up and gave me such a warm smile! In the end... it was so much less terrifying than in my head.',
        emotion: 'smiling'
      },
      {
        id: 's4_b15',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Fear always grows in silence and hesitation, my son. The moment you step forward with sincerity, it dissolves. Look: multiple paths open before us to explore this village.',
        emotion: 'smiling'
      },
      {
        id: 's4_approach_choice',
        type: 'choice',
        speaker: 'personnage',
        text: '« Where does Othman decide to head inside the village? »',
        choices: [
          {
            id: 'c_place',
            label: '🏛️ Head down to the village square (Central square & fountain)',
            responsePreview: '« Let us go to the central square! » — Experience the crowd and bring peace with Adab.',
            targetSceneId: 5,
            badge: 'The Square & Fountain',
            traitGains: { adab: 6, hilm: 4 }
          },
          {
            id: 'c_ruelle',
            label: '🧶 Enter a shaded side alley (The young craftsman)',
            responsePreview: '« Let us take this shaded alley. » — Face rejection and nurture Sabr.',
            targetSceneId: 6,
            badge: 'The Shaded Alley',
            traitGains: { sabr: 6, discipline: 4 }
          },
          {
            id: 'c_vergers',
            label: '🧺 Follow stone walls toward the groves (The elder farmer)',
            responsePreview: '« Let us head toward the olive groves. » — Serve quietly with pure Niyyah.',
            targetSceneId: 7,
            badge: 'The Olive Trail',
            traitGains: { vitalite: 6, hilm: 4 }
          }
        ]
      }
    ]
  },

  // SCENE 5 — THE VILLAGE
  {
    id: 5,
    title: 'The Village',
    subtitle: '« Noble Character & Adab »',
    location: 'Central village square, fountain and well',
    nextSceneId: 8,
    requiredXp: 0,
    backgroundTheme: 'village',
    beats: [
      {
        id: 's5_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othman and Noura enter the cobblestone central square. Around the water fountain, several villagers pause: arms crossed, wary glances, nobody makes the first move toward the newcomers.'
      },
      {
        id: 's5_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Brrr... The reception is icy. They look at me as if I came to steal their olive baskets.',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: 'Unease and fear of the villagers’ stares'
      },
      {
        id: 's5_b3',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Further near the stalls, two merchants raise their voices loudly over a sack of grain. Othman puffs out his chest and starts moving forward to intervene.'
      },
      {
        id: 's5_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Wait, I could step into the middle of their argument! That way, everyone will see I have strong character.',
        emotion: 'determined',
        adaptiveVariants: [
          {
            dominantTrait: 'adab',
            text: 'Perhaps I should approach quietly and bring peace to their hearts with a kind word...'
          },
          {
            dominantTrait: 'ilm',
            text: 'I do not know the root cause of their dispute yet... Better to observe with discernment before judging.'
          },
          {
            dominantTrait: 'discipline',
            text: 'If nobody lays out the facts calmly, this argument over the grain sack might drag on endlessly...'
          },
          {
            dominantTrait: 'sabr',
            text: 'Let the dust and anger settle on their own before stepping in.'
          }
        ]
      },
      {
        id: 's5_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Othman... Do you want to be noticed... or do you truly want to help?',
        emotion: 'thoughtful'
      },
      {
        id: 's5_b6',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'I... honestly, I just wanted people to notice me. I do not even know what happened with their grain sack.',
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: 'Fleeting vanity and seeking attention'
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
        text: '« Whoever believes in Allah and the Last Day, let him speak good or remain silent ». Keeping silent when you have nothing beneficial to contribute is a mark of true maturity.',
        emotion: 'thoughtful'
      },
      {
        id: 's5_b9',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Exactly. But to break the ice without meddling, do you know the purest key? The Salām and a sincere smile.',
        emotion: 'smiling'
      },
      {
        id: 's5_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: 'The Prophet ﷺ taught that a smile given to your brother is a charity (Sadaqah). Offer them peace from the bottom of your heart and watch what happens.',
        emotion: 'smiling'
      },
      {
        id: 's5_pont_salam',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you, have you thought about this charity accessible at every moment? Today, offer a sincere Salām or warm smile to someone. The Prophet ﷺ said that a smile to your brother is a charity.',
        emotion: 'smiling'
      },
      {
        id: 's5_act_salam',
        type: 'real_action',
        realActionId: 'action_salam_village',
        text: 'Offering the Salām and a warm smile.'
      },
      {
        id: 's5_b11',
        type: 'dialogue',
        speaker: 'personnage',
        arabicText: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ',
        text: 'As-salāmu ʿalaykum wa rahmatullāhi wa barakātuh!',
        emotion: 'smiling',
        waswasXpAmount: -10,
        waswasReason: 'The peace of the Salām weakens the Shadow!'
      },
      {
        id: 's5_b12',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Hearing this serene greeting and seeing Othman’s radiant face, suspicion melts away like morning dew! Villagers uncross their arms, smile warmly, and return the greeting with open gestures.'
      },
      {
        id: 's5_b13',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'They answered me! Even the grumpy old merchant gave me a kind nod!',
        emotion: 'smiling'
      },
      {
        id: 's5_b14',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Kindness always disarms mistrust. But the journey holds more lessons... Let us continue down the alley.',
        emotion: 'smiling'
      },
      {
        id: 's5_b15',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Concept understood: The Adab of silence & pacifying power of Salām'
      }
    ]
  },

  // SCENE 6 — THE REFUSAL (THE YOUNG ROPE ARTISAN SCENE)
  {
    id: 6,
    title: 'The Refusal',
    subtitle: '« Not Everyone Will Say Yes »',
    location: 'Shaded village alleyway',
    requiredXp: 450,
    isSpiritualGate: true,
    gateReason: 'When facing rejection, your heart must be rooted in Sabr (patience) and Adab.',
    backgroundTheme: 'refus',
    beats: [
      {
        id: 's6_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Encouraged by the square’s welcome, Othman steps under an ancient stone archway. A young villager his age sits near a workshop, braiding and repairing a thick hemp rope.'
      },
      {
        id: 's6_b2',
        type: 'dialogue',
        speaker: 'personnage',
        arabicText: 'السَّلَامُ عَلَيْكُمْ',
        text: 'Salam alaykoum! Would you like to come explore the valley trails with us?',
        emotion: 'smiling'
      },
      {
        id: 's6_b3',
        type: 'dialogue',
        speaker: 'jeune',
        arabicText: 'وَعَلَيْكُمُ السَّلَامُ',
        text: 'Wa alaykoum salam... No, sorry. I have an urgent rope order to deliver before sunset.',
        emotion: 'neutral'
      },
      {
        id: 's6_b8',
        type: 'dialogue',
        speaker: 'narration',
        text: 'The young artisan coils his rope with precision, gathers his tools without another glance, and disappears into the workshop.\nA heavy silence falls over the alleyway. Othman remains frozen, hand still half extended in the air.'
      },
      {
        id: 's6_b9',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Was I... was I too abrupt? Why did he refuse when I smiled and greeted him properly?',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: "Confusion upon facing refusal"
      },
      {
        id: 's6_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: "You did nothing wrong, my son. But the world doesn't revolve around our immediate desires. This boy has his work, his day, his responsibilities. Your intention was good, but he has every right to say no.",
        emotion: 'thoughtful'
      },
      {
        id: 's6_b11',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'I know... but it still stings a bit. You feel like you failed.',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: "Wounded pride & feeling of failure"
      },
      {
        id: 's6_b12',
        type: 'dialogue',
        speaker: 'noura',
        text: 'That is because you were expecting an immediate reward: his approval. This is precisely where true Sabr begins.',
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
        text: "Surah 2:153... Seek help through patience and prayer. Sabr isn't sulking or forcing the door. It is accepting what happens with calm, dignity, and respect for others.",
        emotion: 'thoughtful'
      },
      {
        id: 's6_pont_sabr',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you... Think of a recent refusal or disappointment. Breathe calmly, free your heart from bitterness, and say with sincere peace: « Al-Hamdulillāh ʿalâ kulli hāl ».',
        emotion: 'smiling'
      },
      {
        id: 's6_act_sabr',
        type: 'real_action',
        realActionId: 'action_sabr_refus',
        text: 'Accept a refusal with noble Sabr.'
      },
      {
        id: 's6_b18',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Al-Hamdulillāh ʿalâ kulli hāl. The disappointment is gone. Just because one door closes does not mean you stop walking.',
        emotion: 'smiling',
        waswasXpAmount: -15,
        waswasReason: "Sabr purifies the heart from resentment!"
      },
      {
        id: 's6_b19',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Wonderful maturity, Othman. Patience purifies the heart from pride. Let us see what awaits us ahead!',
        emotion: 'smiling'
      },
      {
        id: 's6_b20',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Concept understood: The nobility of Sabr in adversity'
      }
    ]
  },

  // SCENE 7 — THE SINCERE GESTURE
  {
    id: 7,
    title: 'The Sincere Gesture',
    subtitle: '« Why Help? »',
    location: 'Olive tree path at the edge of the village',
    requiredXp: 450,
    backgroundTheme: 'geste',
    beats: [
      {
        id: 's7_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'On the olive path, an elderly farmer trips. His two large wicker baskets spill heavily into the dust, scattering ripe figs and olives across the path.'
      },
      {
        id: 's7_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Wait, we must help him! His baskets are completely overturned.',
        emotion: 'determined'
      },
      {
        id: 's7_b3',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othman kneels without hesitation and begins picking up the figs and olives one by one to put them back into the baskets.'
      },
      {
        id: 's7_b4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Why are you helping him, Othman?',
        emotion: 'thoughtful'
      },
      {
        id: 's7_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: "Because he is elderly and couldn't manage alone before nightfall.",
        emotion: 'determined'
      },
      {
        id: 's7_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: 'What if no one saw you? Not him, not passersby, not me?',
        emotion: 'smiling'
      },
      {
        id: 's7_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: "I would help him anyway! I'm not collecting these fruits for people's praise.",
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
        text: '« Deeds are judged only by intentions ». So I must never do good deeds just to be called generous or kind.',
        emotion: 'thoughtful'
      },
      {
        id: 's7_b13',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Intention is an intimate secret between you and your Creator. The moment one seeks to show it off, its light evaporates.',
        emotion: 'smiling'
      },
      {
        id: 's7_pont_geste',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you in your daily life... Can you do a discreet good deed (tidy something, help around the house) without telling anyone, purely for Allah? That is pure Niyyah.',
        emotion: 'smiling'
      },
      {
        id: 's7_b16',
        type: 'real_action',
        realActionId: 'action_geste',
        text: 'Perform a good deed in complete discretion (pure Niyyah).'
      },
      {
        id: 's7_b18',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Look mother: all the fruit is safely put back, the baskets are placed securely, and the road is clear!',
        emotion: 'smiling',
        waswasXpAmount: -15,
        waswasReason: "Sincere action (Ikhlās) repels the Waswas!"
      },
      {
        id: 's7_b19',
        type: 'dialogue',
        speaker: 'noura',
        text: 'And you did it discreetly, with humility. It is that pure intention (Niyyah) that gives true weight to every deed.',
        emotion: 'smiling'
      },
      {
        id: 's7_b20',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Concept understood: Pure intention (Niyyah)'
      }
    ]
  },

  // SCENE 8 — THE ABANDONED GARDEN
  {
    id: 8,
    title: 'The Abandoned Garden',
    subtitle: '« Looking at What We Have Already Received »',
    location: 'Old stone terrace orchard and gentle freshwater brook',
    requiredXp: 450,
    backgroundTheme: 'jardin',
    beats: [
      {
        id: 's8_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'The trail leads into an old stone terrace orchard. Dry weeds have overgrown the brook and fallen branches clutter the ground.'
      },
      {
        id: 's8_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'What a shame... Everything looks abandoned here. Nothing is growing, it feels sad.',
        emotion: 'thoughtful',
        waswasXpAmount: 10,
        waswasReason: "Focusing on lack & sadness"
      },
      {
        id: 's8_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: "Look closer, Othman. Don't stop at what looks dry on the surface.",
        emotion: 'smiling'
      },
      {
        id: 's8_b4',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othman crouches, pushes aside the dry leaves, and discovers fragrant rosemary shoots under the stones, a few ripe figs, and a clear fresh stream murmuring gently.'
      },
      {
        id: 's8_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'There was life under these branches! Living water, fruit... It just needed someone to clear the way!',
        emotion: 'smiling'
      },
      {
        id: 's8_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: "Sometimes, we are so obsessed with what is missing that we don't even see the treasures we have already received.",
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
        text: 'Surah 14:7... « If you are grateful, I will surely increase you in favor ». Gratitude (Shukr) is not pretending everything is perfect...',
        emotion: 'thoughtful'
      },
      {
        id: 's8_b12',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'It is opening our eyes and hearts to the blessings Allah has already placed around us, even when things seem difficult.',
        emotion: 'smiling'
      },
      {
        id: 's8_pont_shukr',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you... Before thinking of what you lack, take a minute: identify 3 precious blessings Allah granted you and say « Al-Hamdulillāh ». Then water a plant or care for a living thing nearby.',
        emotion: 'smiling'
      },
      {
        id: 's8_act_shukr',
        type: 'real_action',
        realActionId: 'action_shukr',
        text: 'Express gratitude (Shukr) and care for living creation.'
      },
      {
        id: 's8_b15',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Look mother! By clearing the debris, the stream flows freely again. The water is crystal clear!',
        emotion: 'smiling',
        waswasXpAmount: -15,
        waswasReason: "Shukr illuminates the soul and repels darkness!"
      },
      {
        id: 's8_b16',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Look at what was already here, Othman. It just needed us to notice it... and care for it with gratitude.',
        emotion: 'smiling'
      },
      {
        id: 's8_b17',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Concept understood: Shukr and recognizing divine blessings'
      }
    ]
  },

  // SCENE 9 — THE GRAND WASWAS (CHAPTER CLIMAX)
  {
    id: 9,
    title: 'The Grand Waswas',
    subtitle: '« The Summit of Awakening »',
    location: 'Darkened mountain pass, cold wind and purple mist',
    requiredXp: 780,
    isSpiritualGate: true,
    gateReason: 'Reaching the summit requires Level 4 (Awakened Heart) to face the illusions of the Grand Waswas.',
    backgroundTheme: 'climax',
    beats: [
      {
        id: 's9_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'The mountain pass narrows beneath a cold, shadowy vault. Ancient stone pillars stand in silence. Before them, the Grand Waswas forms: a swirling, threatening dark vortex.'
      },
      {
        id: 's9_b2',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'Did you really think you accomplished anything? Look at yourself, Othman. You hesitated from morning, you fumbled in the square, and you got rejected by the first boy you met.',
        emotion: 'shadow'
      },
      {
        id: 's9_b4',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'You want friends? Why would anyone want you? You are too weak, too shy, too ordinary for anyone to care.',
        emotion: 'shadow'
      },
      {
        id: 's9_b5',
        type: 'dialogue',
        speaker: 'personnage',
        text: "It's true... Maybe I was fooling myself. Maybe I'm not cut out for journeys or making friends.",
        emotion: 'worried',
        waswasXpAmount: 20,
        waswasReason: "Supreme doubt: the illusion of the Grand Waswas"
      },
      {
        id: 's9_b7',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Look behind you, my son. Do not look at his illusions; look at what you actually built along the way.',
        emotion: 'thoughtful'
      },
      {
        id: 's9_b8',
        type: 'memory_fragments',
        speaker: 'narration',
        text: 'Golden sparks ignite in the gloom, unveiling the memories of the journey: The bed made at dawn... The Istiʿādhah spoken... The smile returned in the square... The refusal accepted with Sabr... The fruit gathered in secret... The clear water in the orchard.'
      },
      {
        id: 's9_b9',
        type: 'dialogue',
        speaker: 'noura',
        text: 'You learned.',
        emotion: 'smiling'
      },
      {
        id: 's9_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: 'You tried.',
        emotion: 'smiling'
      },
      {
        id: 's9_b11',
        type: 'dialogue',
        speaker: 'noura',
        text: 'You stumbled.',
        emotion: 'thoughtful'
      },
      {
        id: 's9_b12',
        type: 'dialogue',
        speaker: 'noura',
        text: 'And you stood back up. Every step you took is a real, sincere act that no one can take away from you.',
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
        text: 'Hadith of Muslim 2664: « Strive for that which benefits you, seek the help of Allah, and do not be helpless ». Knowledge alone is not enough: faith, effort, and action must unite!',
        emotion: 'determined'
      },
      {
        id: 's9_b18',
        type: 'climax_combat',
        speaker: 'narration',
        text: 'The Grand Waswas unleashes its final gusts of dark wind. Othman stands upright: heart filled with the 6 pillars of resilience he discovered on his path.'
      },
      {
        id: 's9_b19',
        type: 'dialogue',
        speaker: 'grand_waswas',
        text: 'You will fail! You are nothing!',
        emotion: 'shadow'
      },
      {
        id: 's9_b20',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Maybe. But I will try with all my heart and determination!',
        emotion: 'determined'
      },
      {
        id: 's9_b21',
        type: 'dialogue',
        speaker: 'narration',
        text: 'In a burst of golden light, the dark vortex shatters and evaporates completely! The morning sun rises over the ridge, illuminating the ancient stones with brilliant warmth.'
      },
      {
        id: 's9_b22',
        type: 'dialogue',
        speaker: 'narration',
        text: 'A magnificent, peaceful silence envelops the summit. The breeze is gentle and warm.'
      },
      {
        id: 's9_b23',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'This morning, I thought my only goal was getting people to like me.',
        emotion: 'thoughtful'
      },
      {
        id: 's9_b24',
        type: 'dialogue',
        speaker: 'noura',
        text: 'And now?',
        emotion: 'smiling'
      },
      {
        id: 's9_b25',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Now I understand that my true role is to bring light: to reach out to others, accept their refusal with patience, do good in secret, and thank Allah for every gift.',
        emotion: 'smiling'
      },
      {
        id: 's9_b32',
        type: 'dialogue',
        speaker: 'noura',
        text: 'You have found your light, my son. Shall we continue the journey?',
        emotion: 'smiling'
      },
      {
        id: 's9_b33',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Yes! But first, I want to head back down to the village. This morning, hearing the children laughing and playing ball broke my heart with fear of being rejected. But by Allah\'s grace, that fear no longer holds me back! I promised to go meet them with a smile and share this joy.',
        emotion: 'determined'
      },
      {
        id: 's9_pont_mission',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you, traveler who climbed to the summit of this first chapter... Othmân overcame his fear. Now it\'s your turn: reach out to someone in your daily life, say from your heart « As-salāmu ʿalaykum », and let brotherhood unfold naturally.',
        emotion: 'smiling'
      },
      {
        id: 's9_b34',
        type: 'real_action',
        realActionId: 'action_mission_jour',
        text: 'Mission of the Day: As-salāmu ʿalaykum'
      },
      {
        id: 's9_b35',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othman and Noura resume their journey toward the golden horizon. Beyond the mountain peaks, the lands of Chapter 2 begin to take shape under the clear sky.'
      },
      {
        id: 's9_b36',
        type: 'dialogue',
        speaker: 'noura',
        text: 'The path has only just begun.',
        emotion: 'smiling'
      },
      {
        id: 's9_b37',
        type: 'dialogue',
        speaker: 'personnage',
        text: "Let's go!",
        emotion: 'smiling'
      },
      {
        id: 's9_b38',
        type: 'chapter_end',
        xpAmount: 45,
        xpReason: 'Chapter 1 completed: The path begins',
        unlockedConceptId: 'ilm'
      }
    ]
  }
];

export const DAY_2_POTEAU_BEATS_EN: Beat[] = [
  {
    id: 's2_d2_choice',
    type: 'choice',
    speaker: 'noura',
    text: 'Today, which chapter would you like to explore, Othman?',
    emotion: 'smiling',
    choices: [
      {
        id: 'c2_chap2',
        label: '« The Path of Hilm » — Chapter 2: Anger & Self-Mastery',
        badge: '✦ Continue'
      },
      {
        id: 'c1_replay',
        label: '« Overcoming Solitude » — Chapter 1: Making Friends (Replay)',
        badge: '✓ Chapter 1'
      },
      {
        id: 'c3_chap3',
        label: '« The Child with the Splint » — Chapter 3: Patience in Trials (Sabr)',
        badge: '✦ Chapter 3'
      }
    ]
  }
];
