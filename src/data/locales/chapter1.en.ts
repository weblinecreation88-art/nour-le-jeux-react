import { Scene, Quiz, RealAction, ClimaxStep, Beat } from '../../types';

export const QUIZZES_EN: Record<string, Quiz> = {
  quiz_istiadhah: {
    id: 'quiz_istiadhah',
    topic: 'Istiʿādhah',
    promptSpeaker: 'noura',
    question: 'What can we say when seeking refuge in Allah against Shayṭān?',
    options: [
      { id: 'A', text: 'Nothing to say, just ignore.', isCorrect: false },
      { id: 'B', text: 'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm.', isCorrect: true },
      { id: 'C', text: 'A phrase that anyone invents.', isCorrect: false },
      { id: 'D', text: 'Only a scholar is allowed to say it.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'The Istiʿādhah is explicitly mentioned in the Quran: when seeking protection, we seek refuge in Allah from the outcast devil.',
    theologicalNote: 'It is a sincere remembrance of the Creator that prepares the heart to act with righteousness.',
    reference: {
      concept: 'Istiʿādhah (Seeking Refuge)',
      reference: 'Quran 16:98',
      citationText: '« So when you recite the Quran, seek refuge in Allah from Satan, the expelled. »',
      sourceType: 'Coran',
      arabic: 'فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ'
    }
  },
  quiz_taaruf: {
    id: 'quiz_taaruf',
    topic: 'Taʿāruf',
    promptSpeaker: 'noura',
    question: 'Why did Allah create nations and tribes according to Surah Al-Hujurat?',
    options: [
      { id: 'A', text: 'So they compete with pride.', isCorrect: false },
      { id: 'B', text: 'So that people may get to know one another.', isCorrect: true },
      { id: 'C', text: 'So that everyone stays isolated.', isCorrect: false },
      { id: 'D', text: 'To determine who is superior.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'Quran 49:13 indicates that nations and tribes were created « that you may know one another » (Taʿāruf). The most noble in the sight of Allah is the most righteous.',
    reference: {
      concept: 'Taʿāruf (Mutual Acquaintance)',
      reference: 'Quran 49:13',
      citationText: '« ...and We made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous. »',
      sourceType: 'Coran',
      arabic: 'وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ'
    }
  },
  quiz_adab: {
    id: 'quiz_adab',
    topic: 'Adab',
    promptSpeaker: 'noura',
    question: 'What should one do when having nothing good to say?',
    options: [
      { id: 'A', text: 'Speak anyway.', isCorrect: false },
      { id: 'B', text: 'Respond with the same harsh tone.', isCorrect: false },
      { id: 'C', text: 'Remain silent.', isCorrect: true },
      { id: 'D', text: 'Make fun of others.', isCorrect: false }
    ],
    correctOptionId: 'C',
    explanation: 'The Prophet ﷺ taught to speak good or remain silent. Knowing when to be quiet is a sign of wisdom and faith.',
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
    question: 'Which attitude best corresponds to Sabr (patient endurance)?',
    options: [
      { id: 'A', text: 'Insist until the other person gives in.', isCorrect: false },
      { id: 'B', text: 'Persevere with patience in the face of difficulty.', isCorrect: true },
      { id: 'C', text: 'Give up immediately with resentment.', isCorrect: false },
      { id: 'D', text: 'Pretend that nothing hurts.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'Sabr is active, constructive endurance: accepting trials without losing temper and persevering with dignified composure.',
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
    question: 'In any good deed, what matters most in the sight of Allah?',
    options: [
      { id: 'A', text: 'Being applauded by the crowd.', isCorrect: false },
      { id: 'B', text: 'Looking impressive to others.', isCorrect: false },
      { id: 'C', text: 'The sincere intention behind the action.', isCorrect: true },
      { id: 'D', text: 'Receiving a reward in return.', isCorrect: false }
    ],
    correctOptionId: 'C',
    explanation: 'The famous Hadith of Imam Bukhari states that deeds are judged purely by intention (Niyyah).',
    reference: {
      concept: 'Niyyah (Pure Intention)',
      reference: 'Sahih al-Bukhari 1',
      citationText: '« Deeds are judged only by intentions, and every person will get only what he intended. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sahih al-Bukhari (Hadith 1)'
    }
  },
  quiz_shukr: {
    id: 'quiz_shukr',
    topic: 'Shukr',
    promptSpeaker: 'noura',
    question: 'What is gratitude toward Allah for His blessings called?',
    options: [
      { id: 'A', text: 'Sabr.', isCorrect: false },
      { id: 'B', text: 'Adab.', isCorrect: false },
      { id: 'C', text: 'Shukr.', isCorrect: true },
      { id: 'D', text: 'Niyyah.', isCorrect: false }
    ],
    correctOptionId: 'C',
    explanation: 'Shukr is the sincere acknowledgment of Allah’s gifts. The Quran teaches that gratitude increases blessings.',
    reference: {
      concept: 'Shukr (Gratitude)',
      reference: 'Quran 14:7',
      citationText: '« If you are grateful, I will surely increase you [in favor]. »',
      sourceType: 'Coran',
      arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ'
    }
  },
  quiz_ilm: {
    id: 'quiz_ilm',
    topic: 'ʿIlm',
    promptSpeaker: 'noura',
    question: 'Among all you learned today, what truly allows you to progress?',
    options: [
      { id: 'A', text: 'Pure luck.', isCorrect: false },
      { id: 'B', text: 'Just collecting points.', isCorrect: false },
      { id: 'C', text: 'Beneficial knowledge (ʿIlm), sincere effort, and taking action.', isCorrect: true },
      { id: 'D', text: 'Always wanting to be right.', isCorrect: false }
    ],
    correctOptionId: 'C',
    explanation: 'Knowledge comes alive when it is paired with sincere inner effort and practical action in daily life.',
    reference: {
      concept: 'ʿIlm & Action (Beneficial Knowledge)',
      reference: 'Sahih Muslim 2664',
      citationText: '« Strive for that which benefits you, seek the help of Allah, and do not be helpless. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sahih Muslim (Hadith 2664)'
    }
  },
  quiz_intention: {
    id: 'quiz_intention',
    topic: 'Niyyah',
    promptSpeaker: 'noura',
    question: 'Why does our journey begin by clarifying our inner intention (Niyyah)?',
    options: [
      { id: 'A', text: 'To earn the compliments of other people.', isCorrect: false },
      { id: 'B', text: 'Because every action is judged by its intention before Allah.', isCorrect: true },
      { id: 'C', text: 'Just to test our memory without purpose.', isCorrect: false },
      { id: 'D', text: 'To impress the villagers.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'The Prophet ﷺ said: « Deeds are judged only by intentions, and every person will get what he intended. » (Sahih al-Bukhari 1).',
    reference: {
      concept: 'Niyyah (Pure Intention)',
      reference: 'Sahih al-Bukhari 1',
      citationText: '« Deeds are judged only by intentions. »',
      sourceType: 'Hadith',
      hadithCollection: 'Sahih al-Bukhari (Hadith 1)'
    }
  },
  quiz_salam: {
    id: 'quiz_salam',
    topic: 'Adab & Salām',
    promptSpeaker: 'noura',
    question: 'What spiritual value does the Prophet ﷺ give to a simple warm smile offered to another?',
    options: [
      { id: 'A', text: 'A sign of weakness.', isCorrect: false },
      { id: 'B', text: 'An act of charity (Sadaqah) that warms the heart.', isCorrect: true },
      { id: 'C', text: 'A waste of time.', isCorrect: false },
      { id: 'D', text: 'Something only for elders.', isCorrect: false }
    ],
    correctOptionId: 'B',
    explanation: 'The Prophet ﷺ taught: « Your smile for your brother is a charity (Sadaqah). » (Jami` at-Tirmidhi 1956).',
    reference: {
      concept: 'Sadaqah (Charity of the Smile)',
      reference: 'Jami` at-Tirmidhi 1956',
      citationText: '« Your smile for your brother is a charity. »',
      sourceType: 'Hadith',
      hadithCollection: 'Jami` at-Tirmidhi (Hadith 1956)'
    }
  }
};

export const REAL_ACTIONS_EN: Record<string, RealAction> = {
  action_lit: {
    id: 'action_lit',
    title: 'Making your Bed & Starting with Bismillah',
    instruction: 'In real life right now: take 60 seconds to neatly make your bed or tidy your desk, saying « Bismillāhir-Rahmānir-Rahīm ».',
    subtext: 'Prophetic discipline begins with caring for one’s personal space.',
    xpReward: 35,
    reflectionPrompt: 'Did you feel the calm of a tidy space before stepping out?'
  },
  action_eau: {
    id: 'action_eau',
    title: 'Drinking a Glass of Water (Prophetic Adab)',
    instruction: 'Get a glass of water in real life. Sit down, hold the glass with your right hand, say « Bismillāh », and drink mindfully in three sips. Conclude with « Al-Hamdulillāh ».',
    subtext: 'A daily sunnah of mindfulness, gratitude, and physical composure.',
    xpReward: 25,
    reflectionPrompt: 'Did you remember to sit and pronounce the name of Allah before drinking?'
  },
  action_depart: {
    id: 'action_depart',
    title: 'Departure Duʿāʾ & Trust in Allah',
    instruction: 'Check your bag or belongings in real life. Recite the departure duʿāʾ placing your full trust in Allah: « Bismillâh, tawakkaltu ʿalâ Allâh, wa lâ hawla wa lâ quwwata illâ billâh ».',
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
    reflectionPrompt: 'Do you turn to Allah for refuge whenever doubts arise?'
  },
  action_salam_village: {
    id: 'action_salam_village',
    title: 'The Salām & Fraternal Smile',
    instruction: 'Today: offer a sincere Salām or a warm, gentle smile to someone in real life. The Prophet ﷺ taught that a smile is a charity (Sadaqah).',
    subtext: 'Kindness disarms mistrust and softens hearts.',
    xpReward: 30,
    reflectionPrompt: 'Have you gifted a smile or word of peace today?'
  },
  action_sabr_refus: {
    id: 'action_sabr_refus',
    title: 'Sabr in the Face of Rejection',
    instruction: 'Think of a recent disappointment. Take a deep breath and say with your heart: « Al-Hamdulillāh ʿalâ kulli hāl » (Praise be to Allah in every state) with peace and no anger.',
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
    subtext: 'Actions are judged by intentions (Bukhari 1). Acting secretly for Allah protects the heart from vanity.',
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
    subtext: 'The best of two is the one who initiates the Salām (Bukhari 6237).',
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
    meaning: 'Recalling the authentic principles and lessons learned on the journey.',
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
    subtitle: '« The First Step »',
    location: "Othman's room, morning",
    requiredXp: 0,
    backgroundTheme: 'chambre',
    beats: [
      {
        id: 's1_intro_1',
        type: 'dialogue',
        speaker: 'narration',
        arabicText: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ',
        text: 'As-salāmu ʿalaykum wa rahmatullāhi wa barakātuh!\n\nWelcome to Nour: The Game, where your real-life actions advance the story.',
        emotion: 'smiling'
      },
      {
        id: 's1_intro_2',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Nour is the story of young Othman: an initiatory quest of learning, goodwill, and overcoming doubts.',
        emotion: 'thoughtful'
      },
      {
        id: 's1_intro_3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Wake up, Othman! The sun is already warming the stones of the terrace. If you linger under the covers, your breakfast bread will get cold.',
        emotion: 'smiling'
      },
      {
        id: 's1_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othman slowly props himself on his elbow and looks toward the window. In the distance, the cheerful laughter of village youths echoes in the alleyway.'
      },
      {
        id: 's1_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: "They seem to be having so much fun outside... Everyone has someone to run and talk with.\nI wish I had friends too. But... where do you start when you feel like you're completely invisible?",
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: "Doubt and feeling of invisibility"
      },
      {
        id: 's1_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: 'So why stay trapped in here with your thoughts in disarray?',
        emotion: 'thoughtful'
      },
      {
        id: 's1_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Because as soon as I think about stepping out toward people, the mountain feels too high to climb.',
        emotion: 'thoughtful',
        waswasXpAmount: 10,
        waswasReason: "Discouragement before effort"
      },
      {
        id: 's1_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: "You don't climb a mountain in one leap, my son. You place one foot in front of the other. What if your very first step of the day began right here, right before your eyes?",
        emotion: 'smiling'
      },
      {
        id: 's1_b6',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'My bed? You want me to start by making my bed?',
        emotion: 'surprised'
      },
      {
        id: 's1_b7',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Tidy your sheets. Put your space in order, and your mind will immediately see more clearly.',
        emotion: 'smiling'
      },
      {
        id: 's1_pont_lit',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you who accompany Othman from behind your screen... Have you thought about making your bed or tidying your corner this morning? Take a minute in real life: the clarity of the day begins where you rest your head.',
        emotion: 'smiling'
      },
      {
        id: 's1_b8',
        type: 'real_action',
        realActionId: 'action_lit',
        text: 'Make your bed and start with Bismillah.'
      },
      {
        id: 's1_b9',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Real-life action validated: First good habit accomplished'
      },
      {
        id: 's1_b10',
        type: 'dialogue',
        speaker: 'personnage',
        text: "Well... that's done! The sheets are pulled tight and the pillow is straight. The room already feels much more welcoming.",
        emotion: 'smiling'
      },
      {
        id: 's1_water_1',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'On the other hand, from all that worrying, my throat is as dry as the desert.',
        emotion: 'thoughtful'
      },
      {
        id: 's1_water_2',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Look at the pitcher and the glass of cool water on the side table. But sit down calmly before drinking! Do you remember what the Prophet ﷺ taught us?',
        emotion: 'smiling'
      },
      {
        id: 's1_water_3',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Yes mother: sit down, hold the glass with the right hand, say « Bismillāh », and drink peacefully in three sips.',
        emotion: 'smiling'
      },
      {
        id: 's1_pont_eau',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you in your daily life... Get a glass of fresh water, sit down calmly, say « Bismillāh », and drink peacefully in three sips with your right hand. Conclude with « Al-Hamdulillāh ».',
        emotion: 'smiling'
      },
      {
        id: 's1_water_act',
        type: 'real_action',
        realActionId: 'action_eau',
        text: 'Drink a glass of water with prophetic adab.'
      },
      {
        id: 's1_water_xp',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Real action validated: Adab of drinking water'
      },
      {
        id: 's1_water_4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Al-Hamdulillāh! It is amazing how such a simple habit brings peace when paired with mindful intention.',
        emotion: 'smiling'
      },
      {
        id: 's1_b13',
        type: 'dialogue',
        speaker: 'noura',
        text: 'You see? Two victories even before stepping across your threshold! Before leaving, take a look at your gear:',
        emotion: 'smiling'
      },
      {
        id: 's1_b14',
        type: 'dialogue',
        speaker: 'noura',
        text: '📜 If you want to earn more XP, check the « Quests » tab below: daily challenges to level up easily!',
        emotion: 'smiling'
      },
      {
        id: 's1_b15',
        type: 'dialogue',
        speaker: 'noura',
        text: '📖 At the top, the « Book of Wisdom » gathers all the cards of light you will unlock along the way.',
        emotion: 'smiling'
      },
      {
        id: 's1_b16',
        type: 'dialogue',
        speaker: 'noura',
        text: '👤 And if you want to customize your traveler outfit, head to your « Profile »! Ready to step out?',
        emotion: 'smiling'
      },
      {
        id: 's1_b18',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othman responds to Noura:',
        choices: [
          {
            id: 'c1',
            label: "« Noted mother, I'm ready! Let's go! »",
            badge: 'Ready'
          },
          {
            id: 'c2',
            label: '« Wait, let me tighten my laces and we go! »',
            badge: 'Preparation'
          }
        ]
      },
      {
        id: 's1_b19',
        type: 'dialogue',
        speaker: 'noura',
        text: "Bismillāh! Let's place our trust in Allah and see what the world has in store for us.",
        emotion: 'determined'
      }
    ]
  },

  // SCENE 2 — THE SIGNPOST CROSSROADS
  {
    id: 2,
    title: 'The Signpost Crossroads',
    subtitle: '« Where to Go? »',
    location: 'Trail crossroads, edge of the forest',
    requiredXp: 0,
    backgroundTheme: 'carrefour',
    beats: [
      {
        id: 's2_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othman and Noura arrive before a tall oak signpost at the crossroads of the valley trails. Othman rests his travel bag on the ground for a moment to wipe his forehead.'
      },
      {
        id: 's2_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Phew... This bag has some weight to it! Look at all these directions carved into the wood... What if I choose the wrong one?',
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: "Fear of choosing the wrong path"
      },
      {
        id: 's2_b3',
        type: 'dialogue',
        speaker: 'noura',
        text: "The path doesn't begin under your soles, Othman. It begins in your heart. When intention is sincere, every step finds its meaning.",
        emotion: 'smiling'
      },
      {
        id: 's2_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'How can I be sure of my intention?',
        emotion: 'thoughtful'
      },
      {
        id: 's2_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Ask yourself why you crossed the threshold of your room this morning. Read the signs, and choose with sincerity.',
        emotion: 'smiling'
      },
      {
        id: 's2_b6',
        type: 'choice',
        speaker: 'personnage',
        text: 'Othman examines the inscriptions carved on the old signpost:',
        choices: [
          {
            id: 'c1',
            label: '📜 « Overcoming Solitude » — Chapter 1: Making Friends & Breaking Invisibility',
            badge: 'Chapter 1 Active',
            interactiveSpot: { x: '35%', y: '55%' }
          },
          {
            id: 'c2',
            label: '🌾 « The Path of Hilm » — Chapter 2: Anger & Self-Mastery',
            disabled: true,
            badge: 'Founder Pack ($4.99)',
            isStripePromo: true,
            originalPrice: '7.99 €',
            promoPrice: '4.99 €',
            discountRate: '-38%',
            stripeUrl: 'https://buy.stripe.com/test_4gM4gB7QR3ThbJlgjK3Ru01',
            disabledReason: 'In the marketplace square, Othman learns to extinguish anger through prophetic forbearance.',
            interactiveSpot: { x: '50%', y: '45%' }
          },
          {
            id: 'c3',
            label: '🩹 « The Child with the Splint » — Chapter 3: Patience in Trials (Sabr)',
            disabled: true,
            badge: 'Founder Pack ($4.99)',
            isStripePromo: true,
            originalPrice: '7.99 €',
            promoPrice: '4.99 €',
            discountRate: '-38%',
            stripeUrl: 'https://buy.stripe.com/test_4gM4gB7QR3ThbJlgjK3Ru01',
            disabledReason: 'At the mosque and herbalist, Othman discovers lessons of patience and natural remedies.',
            interactiveSpot: { x: '65%', y: '50%' }
          },
          {
            id: 'c4',
            label: '🕊️ « What You Still Have » — Chapter 4: Kindness to Parents (Birr)',
            disabled: true,
            badge: 'Chapter 4 (Coming Soon)',
            disabledReason: 'Under the great oak tree with his childhood friend, a heartfelt conversation opens his heart.',
            interactiveSpot: { x: '75%', y: '60%' }
          },
          {
            id: 'c5',
            label: '🏔️ « The Inner Mountain » — Chapter 5: Ultimate Endurance & Saga Climax',
            disabled: true,
            badge: 'Chapter 5 (Coming Soon)',
            disabledReason: 'The final ascent where all acquired virtues unite to dispel darkness.',
            interactiveSpot: { x: '85%', y: '45%' }
          }
        ]
      },
      {
        id: 's2_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: "This is my direction: I don't want to stay alone anymore. I want to walk down to the village and learn to make true, noble friends!",
        emotion: 'determined'
      },
      {
        id: 's2_dua_1',
        type: 'dialogue',
        speaker: 'noura',
        text: 'A noble intention, my son. But before setting foot on the trail... there is a remembrance your grandfather always repeated when stepping outside.',
        emotion: 'smiling'
      },
      {
        id: 's2_dua_2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Which one? A duʿāʾ before traveling?',
        emotion: 'thoughtful'
      },
      {
        id: 's2_dua_3',
        type: 'dialogue',
        speaker: 'noura',
        arabicText: 'بِسْمِ اللَّهِ ، تَوَكَّلْتُ عَلَى اللَّهِ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
        text: '« Bismillāh, tawakkaltu ʿalâ Allāh, wa lâ hawla wa lâ quwwata illâ billâh »\n\n(In the name of Allah, I place my trust in Allah, and there is no power nor might except with Allah).',
        emotion: 'smiling'
      },
      {
        id: 's2_dua_4',
        type: 'dialogue',
        speaker: 'noura',
        text: 'It reminds us that all our efforts depend solely on Allah’s help. Strap your bag onto your shoulders and recite this duʿāʾ from your heart.',
        emotion: 'smiling'
      },
      {
        id: 's2_pont_depart',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you, before undertaking anything important today... Check your belongings, then entrust your day to the Creator saying: « Bismillāh, tawakkaltu ʿalâ Allāh, wa lâ hawla wa lâ quwwata illâ billâh ».',
        emotion: 'smiling'
      },
      {
        id: 's2_act',
        type: 'real_action',
        realActionId: 'action_depart',
        text: 'Secure your bag and recite the departure duʿāʾ.'
      },
      {
        id: 's2_dua_6',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Bismillāh, tawakkaltu ʿalâ Allāh! Strange, as soon as you say it from the heart, the bag feels twice as light. I feel ready!',
        emotion: 'determined'
      },
      {
        id: 's2_b9',
        type: 'dialogue',
        speaker: 'noura',
        text: 'That is the power of Tawakkul. With resolute steps, let us head down to the valley!',
        emotion: 'smiling'
      }
    ]
  },

  // SCENE 3 — THE FIRST WASWAS
  {
    id: 3,
    title: 'The First Waswas',
    subtitle: '« The Paralyzing Thought »',
    location: 'Trail darkened by purple mist',
    requiredXp: 180,
    isSpiritualGate: true,
    gateReason: 'To dispel the first mist of doubts (Waswas), arm your heart with the foundations of faith and beneficial knowledge.',
    backgroundTheme: 'waswas',
    beats: [
      {
        id: 's3_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'The trail narrows beneath steep crags. A heavy purple mist rises from the ground. A Waswas emerges: a whispering shadow, without physical body, yet laden with doubt.'
      },
      {
        id: 's3_b2',
        type: 'dialogue',
        speaker: 'waswas',
        text: "You will never succeed.\nYou want to make friends? You can't even speak to a stranger without stuttering.",
        emotion: 'shadow'
      },
      {
        id: 's3_b3',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Mother... His words... That is exactly what I kept repeating to myself in bed this morning.',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: "The whisper of Waswas resonates with inner doubt"
      },
      {
        id: 's3_b6',
        type: 'dialogue',
        speaker: 'noura',
        text: "He doesn't read your mind, Othman. He blows on your existing doubts to paralyze you and make you turn back. This shadow has no real power, except what you grant it.",
        emotion: 'thoughtful'
      },
      {
        id: 's3_b7',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'How do I silence a thought that constricts my chest?',
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: "Oppression of inner doubt"
      },
      {
        id: 's3_b7_bis',
        type: 'dialogue',
        speaker: 'noura',
        text: 'We do not debate with doubt, my son. We seek refuge with the One who removes all darkness.',
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
        arabicText: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
        text: 'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm!',
        emotion: 'determined',
        waswasXpAmount: -20,
        waswasReason: "The Istiʿādhah dispels the Shadow!"
      },
      {
        id: 's3_b10',
        type: 'dialogue',
        speaker: 'narration',
        text: 'The shadowy apparition begins to flicker and lose its density.'
      },
      {
        id: 's3_b11',
        type: 'dialogue',
        speaker: 'personnage',
        text: "Look, it's retreating! Is it already defeated?",
        emotion: 'smiling'
      },
      {
        id: 's3_b14',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Remember: it is not a magic formula, Othman. You sought refuge with Allah from your heart. Now, anchor that word and take a resolute physical step forward!',
        emotion: 'smiling'
      },
      {
        id: 's3_pont_istiadhah',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you, when doubt, shyness or negative thoughts try to paralyze you in real life... Breathe calmly, seek refuge in Allah reciting the Istiʿādhah, and decide to take your step forward!',
        emotion: 'smiling'
      },
      {
        id: 's3_act_istiadhah',
        type: 'real_action',
        realActionId: 'action_istiadhah',
        text: 'Recite the Istiʿādhah and take a firm step forward.'
      },
      {
        id: 's3_b16',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Heart strengthened by divine protection, Othman firmly plants his walking staff and takes a bold stride forward.'
      },
      {
        id: 's3_b17',
        type: 'dialogue',
        speaker: 'waswas',
        text: 'You will fail anyway...',
        emotion: 'shadow'
      },
      {
        id: 's3_b18',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Maybe. But I place my trust in Allah and I move forward!',
        emotion: 'determined'
      },
      {
        id: 's3_b19',
        type: 'dialogue',
        speaker: 'narration',
        text: 'The purple mist bursts into a shower of golden sparks! The trail turns bright again, lined with wild blossoms and warm sunlight.'
      },
      {
        id: 's3_b19_reaction',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'It completely evaporated... The path is clear and luminous!',
        emotion: 'smiling'
      },
      {
        id: 's3_b19_noura',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Doubt has no substance against sincere remembrance of Allah and the courage to act. Keep this lesson close to your heart.',
        emotion: 'smiling'
      },
      {
        id: 's3_b20',
        type: 'xp',
        xpAmount: 25,
        xpReason: 'Concept understood: Istiʿādhah and triumph over doubt'
      }
    ]
  },

  // SCENE 4 — "I NO LONGER WANT TO BE ALONE"
  {
    id: 4,
    title: '« I No Longer Want to Be Alone »',
    subtitle: 'Taʿāruf',
    location: 'Outskirts of the blooming village',
    requiredXp: 180,
    backgroundTheme: 'vallee',
    beats: [
      {
        id: 's4_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Below, the terracotta roofs of the village glisten in the sun. The silhouettes of villagers go back and forth between alleys and orchards.'
      },
      {
        id: 's4_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: "Look at all these people... They all look so busy and confident. If I walk up to them, they'll wonder who I am and think I'm strange.",
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: "Fear of others' judgments"
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
        text: "Because I don't know anyone here. We're not from the same place, we don't have the same lives... What if we have nothing to say to each other?",
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: "Fear of the unknown & isolation"
      },
      {
        id: 's4_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Do you really think Allah created people with such diverse faces and journeys just so each stays hidden behind closed shutters?',
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
        text: 'Surah 49:13... Nations and tribes « that you may know one another » (Taʿāruf). So difference between people is not an obstacle... It is a divine invitation to connect!',
        emotion: 'smiling'
      },
      {
        id: 's4_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Exactly. Difference is not a wall that divides, it is a bridge to cross. So, are you ready to take the first step?',
        emotion: 'smiling'
      },
      {
        id: 's4_pont_parler',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you in your real life... Is there someone you have never dared speak to? A neighbor, a classmate, a shopkeeper? Today, cross that bridge and offer them a kind greeting.',
        emotion: 'smiling'
      },
      {
        id: 's4_b12',
        type: 'real_action',
        realActionId: 'action_parler',
        text: 'Today: speak kindly to someone you do not usually talk to.'
      },
      {
        id: 's4_b14',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'I greeted an elderly gentleman pruning his grapevines. He stood up and gave me a warm, broad smile! In the end... it was so much less terrifying than in my head.',
        emotion: 'smiling'
      },
      {
        id: 's4_b15',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Fear always grows in silence and hesitation, my son. As soon as you take the step with sincerity, it vanishes. Let us head to the village square!',
        emotion: 'smiling'
      }
    ]
  },

  // SCENE 5 — THE VILLAGE
  {
    id: 5,
    title: 'The Village',
    subtitle: '« Good Manners »',
    location: 'Central village square, fountain and stone well',
    requiredXp: 180,
    backgroundTheme: 'village',
    beats: [
      {
        id: 's5_b1',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Othman and Noura enter the paved central square. Around the freshwater fountain, several villagers pause: crossed arms, cautious looks, nobody makes the first move toward the new arrivals.'
      },
      {
        id: 's5_b2',
        type: 'dialogue',
        speaker: 'personnage',
        text: 'Brrr... The welcome is cold. They stare at me as if I was about to steal their baskets of olives.',
        emotion: 'worried',
        waswasXpAmount: 15,
        waswasReason: "Unease & fear of villagers' gazes"
      },
      {
        id: 's5_b3',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Further near the stalls, two merchants raise their voices in a heated dispute over a grain sack. Othman puffs his chest and steps forward to intervene.'
      },
      {
        id: 's5_b4',
        type: 'dialogue',
        speaker: 'personnage',
        text: "Wait, I could jump in the middle of their argument! That way everyone will see that I'm bold.",
        emotion: 'determined'
      },
      {
        id: 's5_b5',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Othman... Do you want to speak... or do you truly want to help?',
        emotion: 'thoughtful'
      },
      {
        id: 's5_b6',
        type: 'dialogue',
        speaker: 'personnage',
        text: "I... Honestly, I just wanted to get noticed. I don't even know what their dispute is about.",
        emotion: 'worried',
        waswasXpAmount: 10,
        waswasReason: "Ostentation & passing vanity"
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
        text: '« Whoever believes in Allah and the Last Day, let him speak good or remain silent ». Remaining silent when having nothing useful to bring is also a mark of maturity.',
        emotion: 'thoughtful'
      },
      {
        id: 's5_b9',
        type: 'dialogue',
        speaker: 'noura',
        text: 'Exactly. But to break the ice without intruding, do you know the purest key? The Salām and a genuine smile.',
        emotion: 'smiling'
      },
      {
        id: 's5_b10',
        type: 'dialogue',
        speaker: 'noura',
        text: 'The Prophet ﷺ taught that a smile given to your brother is a charity (Sadaqah). Offer them peace from your heart, and watch what happens.',
        emotion: 'smiling'
      },
      {
        id: 's5_pont_salam',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you, have you thought about this accessible charity? Today, offer a sincere Salām or warm smile to someone around you.',
        emotion: 'smiling'
      },
      {
        id: 's5_act_salam',
        type: 'real_action',
        realActionId: 'action_salam_village',
        text: 'Offer Salām and a genuine fraternal smile.'
      },
      {
        id: 's5_b11',
        type: 'dialogue',
        speaker: 'personnage',
        arabicText: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ',
        text: 'As-salāmu ʿalaykum wa rahmatullāhi wa barakātuh!',
        emotion: 'smiling',
        waswasXpAmount: -10,
        waswasReason: "The peace of Salām weakens the Shadow!"
      },
      {
        id: 's5_b12',
        type: 'dialogue',
        speaker: 'narration',
        text: 'Upon hearing this peaceful greeting and seeing Othman’s radiant face, suspicion melts away! The villagers uncross their arms, smile, and welcome him with friendly gestures.'
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
    subtitle: 'Climax of Chapter 1',
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
        text: 'Yes! But first, I have a promise to keep in real life.',
        emotion: 'determined'
      },
      {
        id: 's9_pont_mission',
        type: 'dialogue',
        speaker: 'noura',
        isPontDeNour: true,
        text: 'And you who have climbed to the summit of this first chapter... One vital step remains: go to someone in real life, say from your heart « As-salāmu ʿalaykum », and let brotherhood unfold naturally.',
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
    id: 's2_d2_intro',
    type: 'dialogue',
    speaker: 'narration',
    text: '🌅 Dawn rises over the crossroads. After a restful night, Othman and Noura are back before the great wooden signpost. The cool morning breeze stirs the golden leaves.'
  },
  {
    id: 's2_d2_othman_1',
    type: 'dialogue',
    speaker: 'personnage',
    text: 'What serene peace this morning... The village breathes tranquility, and my heart feels so much lighter than yesterday!',
    emotion: 'smiling'
  },
  {
    id: 's2_d2_noura_1',
    type: 'dialogue',
    speaker: 'noura',
    text: 'A new day begins, Othman. You made wonderful progress yesterday. Today, a brand new path awaits.',
    emotion: 'smiling'
  },
  {
    id: 's2_d2_pont',
    type: 'dialogue',
    speaker: 'noura',
    isPontDeNour: true,
    text: 'And you too... Every morning is a fresh chance for a bright new beginning.',
    emotion: 'smiling'
  },
  {
    id: 's2_d2_choice',
    type: 'choice',
    speaker: 'personnage',
    text: 'Othman examines the signpost illuminated by the morning dawn:',
    choices: [
      {
        id: 'c1_replay',
        label: '📜 « Overcoming Solitude » — Chapter 1: Making Friends (Replay)',
        badge: '✓ Completed (Replayable)',
        interactiveSpot: { x: '35%', y: '55%' }
      },
      {
        id: 'c2_chap2',
        label: '🌾 « The Path of Hilm » — Chapter 2: Anger & Self-Mastery',
        badge: '✨ NEW ADVENTURE UNLOCKED',
        interactiveSpot: { x: '50%', y: '45%' }
      },
      {
        id: 'c3_chap3',
        label: '🩹 « The Child with the Splint » — Chapter 3: Patience in Trials (Sabr)',
        disabled: true,
        badge: 'Founder Pack ($4.99)',
        isStripePromo: true,
        originalPrice: '7.99 €',
        promoPrice: '4.99 €',
        discountRate: '-38%',
        stripeUrl: 'https://buy.stripe.com/test_4gM4gB7QR3ThbJlgjK3Ru01',
        disabledReason: 'Discover lessons of patience, herbal remedies, and peace at the mosque.',
        interactiveSpot: { x: '65%', y: '50%' }
      },
      {
        id: 'c4_chap4',
        label: '🕊️ « What You Still Have » — Chapter 4: Kindness to Parents (Birr)',
        disabled: true,
        badge: 'Chapter 4 (Coming Soon)',
        disabledReason: 'Under the great oak with his childhood friend, a talk opens his heart.',
        interactiveSpot: { x: '75%', y: '60%' }
      },
      {
        id: 'c5_chap5',
        label: '🏔️ « The Inner Mountain » — Chapter 5: Ultimate Endurance & Climax',
        disabled: true,
        badge: 'Chapter 5 (Coming Soon)',
        disabledReason: 'The final ascent to the mountain peak to face the shadows of doubt.',
        interactiveSpot: { x: '85%', y: '45%' }
      }
    ]
  },
  {
    id: 's2_d2_conclusion_noura',
    type: 'dialogue',
    speaker: 'noura',
    text: 'Look at the signpost toward the Path of Hilm that just unlocked! You overcame solitude yesterday and learned to step toward others with brotherhood. Today, a whole new adventure awaits: facing provocation and mastering your inner fire with gentleness. Chapter 2 is now open! Let us go with Allah’s grace!',
    emotion: 'smiling'
  },
  {
    id: 's2_d2_conclusion_othman',
    type: 'dialogue',
    speaker: 'personnage',
    text: 'Al-Hamdulillāh! Every morning is a brand new opportunity to learn and grow better!',
    emotion: 'smiling'
  }
];
