export type Language = 'fr' | 'en' | 'ar';

export interface Translations {
  navbar: {
    gameplay: string;
    adventure: string;
    characters: string;
    mechanics: string;
    demoWaswas: string;
    chapters: string;
    wisdomBook: string;
    offers: string;
    play: string;
    apkAndroid: string;
    musicOn: string;
    musicOff: string;
    rpgSubtitle: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaPlay: string;
    ctaDemo: string;
    ctaVideo: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
  };
  gameplayVideo: {
    badge: string;
    title: string;
    subtitle: string;
    liveIndicator: string;
    playChapter1: string;
    downloadApk: string;
    openInNewTab: string;
  };
  combatDemo: {
    badge: string;
    title: string;
    subtitle: string;
    shadowWhisper: string;
    instruction: string;
    action1Title: string;
    action1Desc: string;
    action2Title: string;
    action2Desc: string;
    action3Title: string;
    action3Desc: string;
    action4Title: string;
    action4Desc: string;
    victoryTitle: string;
    victoryDesc: string;
    replayDemo: string;
  };
  mechanics: {
    badge: string;
    title: string;
    subtitle: string;
    mech1Title: string;
    mech1Desc: string;
    mech2Title: string;
    mech2Desc: string;
    mech3Title: string;
    mech3Desc: string;
    mech4Title: string;
    mech4Desc: string;
  };
  characters: {
    badge: string;
    title: string;
    subtitle: string;
    othmanRole: string;
    othmanDesc: string;
    nouraRole: string;
    nouraDesc: string;
    sageRole: string;
    sageDesc: string;
    waswasRole: string;
    waswasDesc: string;
  };
  roadmap: {
    badge: string;
    title: string;
    subtitle: string;
    statusFree: string;
    statusFounder: string;
    statusUpcoming: string;
    playNow: string;
    founderPack: string;
    comingSoon: string;
    tab1: string;
    tab2: string;
    tab3: string;
    tab4: string;
    tab5: string;
  };
  wisdomBook: {
    badge: string;
    title: string;
    subtitle: string;
    verseTitle: string;
    verseArabic: string;
    verseMeaning: string;
    verseRef: string;
    hadithTitle: string;
    hadithArabic: string;
    hadithMeaning: string;
    hadithRef: string;
    valueTitle: string;
    valueDesc: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    col1Badge: string;
    col1Title: string;
    col1Price: string;
    col1Desc: string;
    col1Cta: string;
    col2Badge: string;
    col2Title: string;
    col2Price: string;
    col2OldPrice: string;
    col2Desc: string;
    col2Cta: string;
    col3Badge: string;
    col3Title: string;
    col3Subtitle: string;
    col3Desc: string;
    col3Cta: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
  };
  tester: {
    badge: string;
    title: string;
    subtitle: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    playGame: string;
    downloadApk: string;
    backToTop: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    navbar: {
      gameplay: 'Gameplay',
      adventure: "L'Aventure",
      characters: 'Personnages',
      mechanics: 'Mécaniques',
      demoWaswas: 'Démo Waswâs',
      chapters: 'Chapitres',
      wisdomBook: 'Livre du Savoir',
      offers: 'Offres & Soutien',
      play: 'Jouer',
      apkAndroid: 'APK Android',
      musicOn: 'Ambiance active',
      musicOff: 'Musique',
      rpgSubtitle: 'Le Jeu de Rôle Initiatique'
    },
    hero: {
      badge: 'Jeu de Rôle Pixel Art 16-Bit & Valeurs Éthiques',
      titleLine1: "L'Épopée du Cœur",
      titleLine2: 'de la Solitude à la Fraternité',
      description: "Incarnez Othmân dans un voyage initiatique captivant. Affrontez les doutes intérieurs (Waswâs), relevez des défis de sagesse et accomplissez des actions réelles de bienveillance pour faire grandir votre foi.",
      ctaPlay: 'Jouer Gratuitement (Chapitre 1)',
      ctaDemo: 'Tester le Combat Mental',
      ctaVideo: 'Voir le Gameplay',
      feature1Title: 'Choix & Conséquences',
      feature1Desc: 'Des dialogues profondes et des embranchements qui forgent le caractère.',
      feature2Title: 'Défis dans la Vraie Vie',
      feature2Desc: 'Des missions quotidiennes concrètes à accomplir hors écran.',
      feature3Title: 'Sources Authentiques',
      feature3Desc: 'Inspiré des enseignements prophétiques, du Hilm et du Sabr.',
      stat1Label: 'Chapitre 1 Gratuit',
      stat1Value: '100%',
      stat2Label: 'Saga Initiatique',
      stat2Value: '5 Chapitres',
      stat3Label: 'Univers Visuel',
      stat3Value: '16-Bit Pixel Art'
    },
    gameplayVideo: {
      badge: 'Démonstration en Direct',
      title: 'Vivez l’Aventure en Pixel Art',
      subtitle: "Découvrez l'atmosphère chaleureuse, les dialogues interactifs et le carrefour du village.",
      liveIndicator: 'Session In-Game',
      playChapter1: 'Jouer au Chapitre 1',
      downloadApk: "Télécharger l'APK (Drive)",
      openInNewTab: 'Ouvrir dans un nouvel onglet'
    },
    combatDemo: {
      badge: 'Simulateur Interactif',
      title: 'Le Combat contre le Waswâs',
      subtitle: "Face aux murmures intérieurs qui vous poussent à l'isolement, choisissez l'attitude prophétique pour restaurer la sérénité du cœur.",
      shadowWhisper: '« Reste chez toi... Personne ne veut être ton ami. Ils vont se moquer de toi. »',
      instruction: 'Sélectionnez une réponse spirituelle pour dissiper la brume :',
      action1Title: 'Istiʿādhah (Demander refuge)',
      action1Desc: '« Aʿūdhu billāhi mina sh-shayṭān » — Calme le cœur immédiatement.',
      action2Title: 'Méditation sur le Taʿāruf',
      action2Desc: 'Se rappeler que la création humaine est faite pour la fraternité mutuelle.',
      action3Title: 'Salām & Sourire',
      action3Desc: 'Poser un premier geste sincère vers autrui (Sadaqah).',
      action4Title: 'Le Sabr Actif',
      action4Desc: 'Avancer avec dignité sans craindre le regard ou le refus.',
      victoryTitle: 'Lumière Restaurée !',
      victoryDesc: 'Le doute s’est dissipé. Le cœur d’Othmân rayonne d’apaisement et d’espoir.',
      replayDemo: 'Réessayer le simulateur'
    },
    mechanics: {
      badge: 'Un Gameplay Unique',
      title: 'Un Jeu Connecté à la Vie Réelle',
      subtitle: 'Nour ne se contente pas de raconter une histoire : il invite le joueur à transformer son propre quotidien.',
      mech1Title: 'Les Ponts de Nour',
      mech1Desc: 'Des dialogues guidés par la bienveillance pour transformer les conflits en opportunités de réconciliation.',
      mech2Title: 'Combat Spirituel',
      mech2Desc: 'Identifier les pièges du Waswâs et utiliser les invocations appropriées pour garder un esprit clair.',
      mech3Title: 'Actions Hors-Écran',
      mech3Desc: 'Validez des quêtes réelles (sourire, ranger, pardonner, téléphoner aux parents) pour gagner des points de foi.',
      mech4Title: 'Le Poteau aux Chemins',
      mech4Desc: 'Un carrefour central symbolique où chaque embranchement explore une vertu fondamentale.'
    },
    characters: {
      badge: 'Compagnons de Voyage',
      title: 'Rencontrez les Héros de la Saga',
      subtitle: 'Des personnalités attachantes qui guident Othmân tout au long de son apprentissage.',
      othmanRole: 'Le Jeune Protagoniste',
      othmanDesc: 'Un jeune garçon timide et réfléchi qui apprend à surmonter la solitude et à faire grandir son courage moral.',
      nouraRole: 'La Guide Fraternelle',
      nouraDesc: 'Une présence bienveillante et lumineuse qui encourage Othmân à voir le bien dans chaque épreuve.',
      sageRole: 'Le Sage du Village',
      sageDesc: 'Un aîné respecté détenteur des remèdes traditionnels et des paroles de sagesse prophétique.',
      waswasRole: 'Le Murmure Obscur',
      waswasDesc: 'La voix insidieuse du doute et du découragement qu’il faut apprendre à reconnaître et à dissiper.'
    },
    roadmap: {
      badge: 'La Saga Complète',
      title: 'La Feuille de Route des 5 Chapitres',
      subtitle: 'Un parcours progressif à travers les grandes vertus du cœur.',
      statusFree: '✓ Disponible (Gratuit)',
      statusFounder: '✨ Pack Fondateur (4,99 €)',
      statusUpcoming: '🔒 Arrive Bientôt',
      playNow: 'Jouer Maintenant',
      founderPack: 'Débloquer le Pack',
      comingSoon: 'Bientôt Disponible',
      tab1: 'Ch. 1 : Solitude',
      tab2: 'Ch. 2 : Le Hilm',
      tab3: 'Ch. 3 : Le Sabr',
      tab4: 'Ch. 4 : Le Birr',
      tab5: 'Ch. 5 : Climax'
    },
    wisdomBook: {
      badge: 'Ancrage Authentique',
      title: 'Le Livre du Savoir',
      subtitle: 'Des enseignements tirés du noble Coran et de la tradition prophétique authentique.',
      verseTitle: 'Verset Clé sur la Fraternité',
      verseArabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
      verseMeaning: '« Ô hommes ! Nous vous avons créés d’un mâle et d’une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez. » (Sourate Al-Hujurat 49:13)',
      verseRef: 'Sourate 49, Verset 13',
      hadithTitle: 'Hadith sur le Sourire & le Don',
      hadithArabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
      hadithMeaning: '« Ton sourire à ton frère est pour toi une aumône (Sadaqah). » (Rapporté par at-Tirmidhi)',
      hadithRef: 'Jami` at-Tirmidhi (1956)',
      valueTitle: 'Pédagogie & Éthique',
      valueDesc: 'Toutes les leçons morales sont soigneusement vérifiées et présentées avec douceur et pédagogie.'
    },
    gallery: {
      badge: 'Direction Artistique',
      title: 'L’Univers en Pixel Art',
      subtitle: 'Chaque décor est minutieusement composé pour offrir une atmosphère chaleureuse et immersive.'
    },
    pricing: {
      badge: 'Soutien & Déblocage',
      title: 'Rejoignez l’Aventure des Fondateurs',
      subtitle: 'Soutenez un projet indépendant éthique et débloquez immédiatement les chapitres suivants.',
      col1Badge: 'Geste Éthique',
      col1Title: 'Le Thé de l’Artisan',
      col1Price: '1,99 €',
      col1Desc: 'Un geste d’encouragement symbolique pour soutenir le développement continu du jeu.',
      col1Cta: 'Offrir un Thé (1,99 €)',
      col2Badge: '-38% OFFRE DE LANCEMENT',
      col2Title: 'Pack Fondateur (Ch. 2 & 3)',
      col2Price: '4,99 €',
      col2OldPrice: '7,99 €',
      col2Desc: 'Accès complet et immédiat au Chapitre 2 (Le Hilm & la Colère) et au Chapitre 3 (L’Enfant à l’Attelle & la Patience).',
      col2Cta: 'Débloquer le Pack (4,99 €)',
      col3Badge: '✨ ARRIVE BIENTÔT',
      col3Title: 'Chapitre 4 : Ce que tu as encore',
      col3Subtitle: 'Birr al-Wālidayn (Bonté envers les Parents)',
      col3Desc: 'Sous le grand chêne avec son ami d’enfance, une confidence inattendue invite Othmân à honorer ses parents avec reconnaissance.',
      col3Cta: 'Découvrir la Roadmap'
    },
    faq: {
      badge: 'Questions Fréquentes',
      title: 'Tout Savoir sur le Projet',
      subtitle: 'Des réponses claires à vos questions sur l’accessibilité, les tarifs et les plateformes.'
    },
    tester: {
      badge: 'Espace Bêta-Testeurs',
      title: 'Votre Avis Compte Énormément',
      subtitle: 'Aidez-nous à façonner la suite de l’épopée d’Othmân en partageant vos retours d’expérience.'
    },
    footer: {
      description: 'Un jeu de rôle narratif en 16-bit pixel art combinant aventures spirituelles, quiz vérifiés et défis bienveillants dans la vraie vie.',
      quickLinks: 'Liens Rapides',
      playGame: 'Jouer en Ligne (Gratuit)',
      downloadApk: "Télécharger l'APK Android",
      backToTop: 'Haut de page',
      copyright: 'Tous droits réservés. Développé avec passion pour une expérience saine et inspirante.'
    }
  },
  en: {
    navbar: {
      gameplay: 'Gameplay',
      adventure: 'The Adventure',
      characters: 'Characters',
      mechanics: 'Mechanics',
      demoWaswas: 'Waswâs Demo',
      chapters: 'Chapters',
      wisdomBook: 'Book of Wisdom',
      offers: 'Founder Offers',
      play: 'Play Now',
      apkAndroid: 'Android APK',
      musicOn: 'Audio Active',
      musicOff: 'Music',
      rpgSubtitle: 'The Initiatory Role-Playing Game'
    },
    hero: {
      badge: '16-Bit Pixel Art RPG & Ethical Wisdom',
      titleLine1: 'The Epic of the Heart',
      titleLine2: 'From Solitude to Brotherhood',
      description: 'Embark on an inspiring journey with Othman. Confront internal doubts (Waswas), overcome moral challenges, and complete real-world acts of kindness to nurture your faith.',
      ctaPlay: 'Play Free (Chapter 1)',
      ctaDemo: 'Test Mental Combat',
      ctaVideo: 'Watch Gameplay',
      feature1Title: 'Meaningful Choices',
      feature1Desc: 'Rich narrative branching dialogues that forge inner character.',
      feature2Title: 'Real-World Quests',
      feature2Desc: 'Practical daily kindness missions to complete offline.',
      feature3Title: 'Authentic Sources',
      feature3Desc: 'Rooted in prophetic wisdom, forbearance (Hilm), and patience (Sabr).',
      stat1Label: 'Free Chapter 1',
      stat1Value: '100%',
      stat2Label: 'Story Saga',
      stat2Value: '5 Chapters',
      stat3Label: 'Visual World',
      stat3Value: '16-Bit Pixel Art'
    },
    gameplayVideo: {
      badge: 'Live Showcase',
      title: 'Experience the Pixel Art World',
      subtitle: 'Discover the cozy atmosphere, interactive dialogues, and village crossroads.',
      liveIndicator: 'In-Game Session',
      playChapter1: 'Play Chapter 1 Now',
      downloadApk: 'Download APK (Drive)',
      openInNewTab: 'Open in a new tab'
    },
    combatDemo: {
      badge: 'Interactive Simulator',
      title: 'Overcoming Waswâs Doubts',
      subtitle: 'When negative internal whispers push you into isolation, choose prophetic virtues to restore peace of heart.',
      shadowWhisper: '"Stay inside... Nobody wants to be your friend. They will make fun of you."',
      instruction: 'Select a spiritual response to clear away the mist:',
      action1Title: 'Istiʿādhah (Seek Refuge)',
      action1Desc: '"Aʿūdhu billāhi mina sh-shayṭān" — Immediately calms the racing mind.',
      action2Title: 'Contemplate Taʿāruf',
      action2Desc: 'Remember that mankind was created for mutual brotherhood and connection.',
      action3Title: 'Salām & Smile',
      action3Desc: 'Take the first sincere step towards others (an act of Charity / Sadaqah).',
      action4Title: 'Active Sabr (Patience)',
      action4Desc: 'Step forward with dignity without fearing rejection or prejudice.',
      victoryTitle: 'Light Restored!',
      victoryDesc: 'The fog has cleared. Othman’s heart shines with serene confidence and hope.',
      replayDemo: 'Try the simulator again'
    },
    mechanics: {
      badge: 'Unique Game Design',
      title: 'A Game Connected to Real Life',
      subtitle: 'Nour does not just tell an inspiring story: it empowers players to transform their daily lives.',
      mech1Title: 'Bridges of Nour',
      mech1Desc: 'Compassionate dialogue trees that transform conflict into reconciliation and growth.',
      mech2Title: 'Spiritual Battles',
      mech2Desc: 'Identify the subtle traps of Waswas and apply appropriate du’as to maintain clarity.',
      mech3Title: 'Offline Real Quests',
      mech3Desc: 'Accomplish practical offline tasks (smiling, tidying, forgiving, calling family) to earn Faith XP.',
      mech4Title: 'The Signpost Crossroads',
      mech4Desc: 'A symbolic crossroad where each wooden path explores a fundamental virtue of the heart.'
    },
    characters: {
      badge: 'Companions on the Path',
      title: 'Meet the Heroes of the Saga',
      subtitle: 'Charming characters who guide and accompany Othman on his moral journey.',
      othmanRole: 'The Young Protagonist',
      othmanDesc: 'A thoughtful and shy boy who learns to break through isolation and cultivate moral courage.',
      nouraRole: 'The Guiding Sister',
      nouraDesc: 'A radiant and compassionate guide who encourages Othman to seek the good in every trial.',
      sageRole: 'The Village Elder',
      sageDesc: 'A respected apothecary and scholar holding ancient herbal remedies and prophetic wisdom.',
      waswasRole: 'The Shadow Whisper',
      waswasDesc: 'The creeping voice of doubt and discouragement that one must learn to recognize and dispel.'
    },
    roadmap: {
      badge: 'The Complete Saga',
      title: 'The 5 Chapters Roadmap',
      subtitle: 'A progressive journey through the noble virtues of the human heart.',
      statusFree: '✓ Available (Free)',
      statusFounder: '✨ Founder Pack ($4.99)',
      statusUpcoming: '🔒 Coming Soon',
      playNow: 'Play Now',
      founderPack: 'Unlock Founder Pack',
      comingSoon: 'Coming Soon',
      tab1: 'Ch. 1: Solitude',
      tab2: 'Ch. 2: Hilm',
      tab3: 'Ch. 3: Sabr',
      tab4: 'Ch. 4: Birr',
      tab5: 'Ch. 5: Climax'
    },
    wisdomBook: {
      badge: 'Authentic Wisdom',
      title: 'The Book of Wisdom',
      subtitle: 'Teachings drawn directly from the Holy Qur’an and verified prophetic traditions.',
      verseTitle: 'Key Verse on Brotherhood',
      verseArabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
      verseMeaning: '“O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another.” (Surah Al-Hujurat 49:13)',
      verseRef: 'Surah 49, Verse 13',
      hadithTitle: 'Hadith on the Smile & Giving',
      hadithArabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
      hadithMeaning: '“Your smile for your brother is a charity (Sadaqah).” (Narrated by at-Tirmidhi)',
      hadithRef: 'Jami` at-Tirmidhi (1956)',
      valueTitle: 'Ethics & Pedagogy',
      valueDesc: 'Every moral concept is thoroughly researched, verified, and delivered with warmth and clarity.'
    },
    gallery: {
      badge: 'Artistic Direction',
      title: 'The Pixel Art Universe',
      subtitle: 'Every scene is handcrafted in vibrant 16-bit pixel art to create an inviting, cozy world.'
    },
    pricing: {
      badge: 'Support & Access',
      title: 'Join the Founder Community',
      subtitle: 'Support an independent ethical gaming initiative and immediately unlock upcoming chapters.',
      col1Badge: 'Ethical Support',
      col1Title: 'Artisan’s Tea',
      col1Price: '€1.99',
      col1Desc: 'A symbolic token of encouragement to support the ongoing development of the saga.',
      col1Cta: 'Gift a Tea (€1.99)',
      col2Badge: '-38% LAUNCH DISCOUNT',
      col2Title: 'Founder Pack (Ch. 2 & 3)',
      col2Price: '€4.99',
      col2OldPrice: '€7.99',
      col2Desc: 'Immediate full access to Chapter 2 (Hilm & Self-Restraint) and Chapter 3 (The Boy with the Splint & Sabr).',
      col2Cta: 'Unlock Founder Pack (€4.99)',
      col3Badge: '✨ COMING SOON',
      col3Title: 'Chapter 4: What You Still Have',
      col3Subtitle: 'Birr al-Wālidayn (Filial Devotion & Gratitude)',
      col3Desc: 'Under the great oak with his childhood friend, a heartfelt conversation guides Othman to cherish and honor his parents.',
      col3Cta: 'Explore Full Roadmap'
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Everything You Need to Know',
      subtitle: 'Clear answers regarding gameplay access, platforms, pricing, and project vision.'
    },
    tester: {
      badge: 'Beta Testers Hub',
      title: 'Your Feedback Shapes the Game',
      subtitle: 'Help us improve Othman’s journey by sharing your thoughts on dialogues, quizzes, and real-life quests.'
    },
    footer: {
      description: 'A 16-bit narrative pixel art RPG combining spiritual growth, verified wisdom quizzes, and wholesome real-life actions.',
      quickLinks: 'Quick Links',
      playGame: 'Play Online (Free)',
      downloadApk: 'Download Android APK',
      backToTop: 'Back to Top',
      copyright: 'All rights reserved. Built with passion for a wholesome and uplifting gaming experience.'
    }
  },
  ar: {
    navbar: {
      gameplay: 'أسلوب اللعب',
      adventure: 'المغامرة',
      characters: 'الشخصيات',
      mechanics: 'الميكانيكيات',
      demoWaswas: 'مواجهة الوسواس',
      chapters: 'الفصول',
      wisdomBook: 'كتاب الحكمة',
      offers: 'باقة المؤسسين',
      play: 'العب الآن',
      apkAndroid: 'تطبيق أندرويد',
      musicOn: 'الموسيقى مفعلة',
      musicOff: 'الموسيقى',
      rpgSubtitle: 'لعبة الأدوار التربوية والروحية'
    },
    hero: {
      badge: 'لعبة تقمص أدوار بيكسل آرت ١٦ بت وقيم إسلامية نبيلة',
      titleLine1: 'ملحمة القلـب',
      titleLine2: 'من العزلة إلى الألفة والأخوة',
      description: 'عِش مع «عثمان» رحلة روحية ملهمة. واجه وساوس الشك والخوف، وتجاوز التحديات الأخلاقية، وأنجز مهمات طيبة في الحياة الحقيقية لتزكية النفس وبناء الإيمان.',
      ctaPlay: 'العب مجاناً (الفصل الأول)',
      ctaDemo: 'تجربة مواجهة الوسواس',
      ctaVideo: 'مشاهدة أسلوب اللعب',
      feature1Title: 'خيارات وعواقب',
      feature1Desc: 'حوارات عميقة ومسارات تفاعلية تصقل الشخصية والضمير.',
      feature2Title: 'مهمات في الحياة الواقعية',
      feature2Desc: 'تطبيقات عملية يومية خارج الشاشة لغرس الفضائل.',
      feature3Title: 'مصادر نبوية أصيلة',
      feature3Desc: 'مستوحاة من الحِلم النبوي والصبر وبر الوالدين.',
      stat1Label: 'الفصل الأول مجاناً',
      stat1Value: '١٠٠٪',
      stat2Label: 'ملحمة متكاملة',
      stat2Value: '٥ فصول',
      stat3Label: 'عالم بصري كلاسيكي',
      stat3Value: 'بيكسل آرت ١٦ بت'
    },
    gameplayVideo: {
      badge: 'استعراض حي',
      title: 'عِش المغامرة في عالم البيكسل آرت',
      subtitle: 'اكتشف الأجواء الهادئة، والحوارات المؤثرة، ومفترق طرق القرية العريق.',
      liveIndicator: 'جلسة لعب مباشرة',
      playChapter1: 'العب الفصل الأول الآن',
      downloadApk: 'تحميل التطبيق APK (درايف)',
      openInNewTab: 'فتح في نافذة مستقلة'
    },
    combatDemo: {
      badge: 'محاكي تفاعلي',
      title: 'معركة التغلب على الوسواس',
      subtitle: 'حين تراودك أصوات الإحباط وتدعوك للعزلة، اختر الموقف النبوي لاستعادة طمأنينة القلب.',
      shadowWhisper: '«ابق في غرفتك... لن يقبل أحد صداقتك، وسوف يسخرون منك!»',
      instruction: 'اختر الرد الروحي الصحيح لتبديد غمامة الشك :',
      action1Title: 'الاستعاذة بالله',
      action1Desc: '«أعوذ بالله من الشيطان الرجيم» — تسكن القلب فوراً وتطرد الهواجس.',
      action2Title: 'التأمل في مقصد التعارف',
      action2Desc: 'تذكر أن الله خلق الناس شعوباً وقبائل ليتعارفوا ويتآلفوا.',
      action3Title: 'إفشاء السلام والابتسامة',
      action3Desc: 'المبادرة بالسلام وابتسامة صادقة (وهي صدقة تؤلف القلوب).',
      action4Title: 'الصبر والمضي بعزة',
      action4Desc: 'الإقدام بوقار وثقة بالله دون خوف من رفض الآخرين.',
      victoryTitle: 'أشرق النور في القلب !',
      victoryDesc: 'تبددت غيوم الشك، واستعاد عثمان سكينته وأمله للمضي قدماً.',
      replayDemo: 'إعادة تجربة المحاكي'
    },
    mechanics: {
      badge: 'أسلوب لعب فريد',
      title: 'لعبة متصلة بحياتك اليومية',
      subtitle: 'لا تكتفي «نور» بسرد قصة مشوقة، بل تحفزك على إحداث أثر طيب وحقيقي في يومك.',
      mech1Title: 'جسور النور والحوار',
      mech1Desc: 'خيارات كلامية مبنية على اللين والمودة لتحويل الخلافات إلى فرص تآلف.',
      mech2Title: 'مجاهدة الخواطر والوسواس',
      mech2Desc: 'التعرف على مداخل اليأس والشك واستعمال الأذكار النبوية لتثبيت الفؤاد.',
      mech3Title: 'أفعال في الحياة الواقعية',
      mech3Desc: 'إنجاز مهمات حقيقية (ابتسامة، ترتيب، صفح، صلة رحم) لكسب نقاط الإيمان.',
      mech4Title: 'عمود مفترق الطرق',
      mech4Desc: 'مفترق رمزي تتفرع منه مسارات الفصول، كل مسار يستكشف فضيلة قلبية كبرى.'
    },
    characters: {
      badge: 'رفقاء الطريق',
      title: 'شخصيات ملحمة نور',
      subtitle: 'شخصيات أصيلة ترافق عثمان في رحلته الأخلاقية والروحية.',
      othmanRole: 'البطل الشاب',
      othmanDesc: 'فتى هادئ ومتأمل يتعلم كيف يكسر حاجز العزلة والخوف ويبني شجاعته الأخلاقية.',
      nouraRole: 'المرشدة الحكيمة',
      nouraDesc: 'حضور مشرق يشجع عثمان على رؤية الخير في كل ابتلاء والأمل في كل خطوة.',
      sageRole: 'حكيم القرية',
      sageDesc: 'رجل مسن خبير بالأعشاب الطبية وكلمات الحكمة النبوية العميقة.',
      waswasRole: 'صوت الوسواس الخفي',
      waswasDesc: 'صوت التثبيط والشكوك الذي يجب على المؤمن تمييزه ودفعه بذكر الله.'
    },
    roadmap: {
      badge: 'الملحمة الكاملة',
      title: 'خارطة طريق الفصول الخمسة',
      subtitle: 'تدرج تربوي ملهم عبر أعظم مقامات القلوب.',
      statusFree: '✓ متاح مجاناً',
      statusFounder: '✨ باقة المؤسسين (٤.٩٩ €)',
      statusUpcoming: '🔒 قريباً بإذن الله',
      playNow: 'ابدأ اللعب',
      founderPack: 'فتح باقة المؤسسين',
      comingSoon: 'قريباً',
      tab1: 'ف١ : العزلة',
      tab2: 'ف٢ : الحِلم',
      tab3: 'ف٣ : الصبر',
      tab4: 'ف٤ : البر',
      tab5: 'ف٥ : الذروة'
    },
    wisdomBook: {
      badge: 'أصالة المنهج',
      title: 'كتاب الحكمة والمعرفة',
      subtitle: 'قبسات نورانية من القرآن الكريم والسنة النبوية المطهرة.',
      verseTitle: 'آية محكمة في التعارف والأخوة',
      verseArabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
      verseMeaning: '« يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ » (سورة الحجرات : ١٣)',
      verseRef: 'سورة الحجرات، الآية ١٣',
      hadithTitle: 'حديث نبوي في فضل التبسم والصدقة',
      hadithArabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
      hadithMeaning: '« تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ » (رواه الترمذي وقال حديث حسن غريب)',
      hadithRef: 'جامع الترمذي (١٩٥٦)',
      valueTitle: 'تربية وقيم رفيعة',
      valueDesc: 'تمت مراجعة كل معنى بدقة تربوية ليكون نافعاً للناشئة والكبار على حد سواء.'
    },
    gallery: {
      badge: 'الهوية الفنية',
      title: 'عالم البيكسل آرت الساحر',
      subtitle: 'مشاهد مرسومة بعناية لتقديم تجربة بصرية دافئة تجمع بين الحنين والجمال.'
    },
    pricing: {
      badge: 'الدعم والمشاركة',
      title: 'انضم إلى مجتمع المؤسسين',
      subtitle: 'ساند مشروعاً مستقلاً هادفاً واحصل فوراً على الفصول القادمة.',
      col1Badge: 'دعم رمزي',
      col1Title: 'شاي الحِرفي',
      col1Price: '١.٩٩ €',
      col1Desc: 'مساهمة بسيطة تعبر عن التقدير لتشجيع استمرار وتطوير اللعبة.',
      col1Cta: 'إهداء شاي (١.٩٩ €)',
      col2Badge: 'خصم ٣٨٪ عرض الإطلاق',
      col2Title: 'باقة المؤسسين (الفصل ٢ و ٣)',
      col2Price: '٤.٩٩ €',
      col2OldPrice: '٧.٩٩ €',
      col2Desc: 'فتح فوري لكامل الفصل الثاني (الحِلم وكظم الغيظ) والفصل الثالث (صاحب الجبيرة والصبر على البلاء).',
      col2Cta: 'الحصول على الباقة (٤.٩٩ €)',
      col3Badge: '✨ قريباً بإذن الله',
      col3Title: 'الفصل ٤ : ما بقي لك',
      col3Subtitle: 'بر الوالدين والشكر والإحسان',
      col3Desc: 'تحت الشجرة العظيمة مع صديق الطفولة، حديث مؤثر يقود عثمان إلى إدراك قيمة الوالدين وفتح قلبه للإحسان.',
      col3Cta: 'استعراض خارطة الطريق'
    },
    faq: {
      badge: 'الأسئلة الشائعة',
      title: 'كل ما تود معرفته عن اللعبة',
      subtitle: 'إجابات واضحة حول كيفية اللعب، المنصات المدعومة، والأسعار.'
    },
    tester: {
      badge: 'منتدى المختبرين الأوائل',
      title: 'رأيكم يصنع فارقاً كبيراً',
      subtitle: 'ساعدونا في تطوير المراحل القادمة عبر مشاركة ملاحظاتكم وانطباعاتكم الصادقة.'
    },
    footer: {
      description: 'لعبة تقمص أدوار بيكسل آرت ١٦ بت تجمع بين البناء الإيماني، واختبارات الحكمة، والمهمات العملية الإيجابية.',
      quickLinks: 'روابط سريعة',
      playGame: 'العب في المتصفح (مجاناً)',
      downloadApk: 'تحميل تطبيق الأندرويد APK',
      backToTop: 'العودة للأعلى',
      copyright: 'جميع الحقوق محفوظة. صُممت بحب وإتقان لتقديم تجربة نقية وملهمة.'
    }
  }
};
