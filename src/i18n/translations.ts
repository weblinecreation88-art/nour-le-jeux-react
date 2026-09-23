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
    motDuConcepteur: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    heroSubtitleDirect: string;
    combatQuizPillTitle: string;
    combatQuizPillDesc: string;
    description: string;
    ctaPlay: string;
    ctaSubtext: string;
    trustRating: string;
    studioVoicesBadge: string;
    adFreeBadge: string;
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
    downloadApk: string;
    apkNote: string;
    frictionFree: string;
    frictionDevice: string;
    frictionBackup: string;
    cardBadge: string;
    cardOfficialWeb: string;
    cardChapter1: string;
    cardJoinOthman: string;
    cardActiveServer: string;
    cardApkDrive: string;
    othmanQuote: string;
    waswasTitle: string;
    waswasRole: string;
    featWaswasTitle: string;
    featWaswasDesc: string;
    featBridgesTitle: string;
    featBridgesDesc: string;
    featCrossroadsTitle: string;
    featCrossroadsDesc: string;
    featKnowledgeTitle: string;
    featKnowledgeDesc: string;
  };
  creatorLetter: {
    badge: string;
    title: string;
    authorSubtitle: string;
    openLetter: string;
    authorName: string;
    authorBio: string;
    greeting: string;
    dearParents: string;
    p1: string;
    p2: string;
    p3: string;
    calloutHeader: string;
    calloutQuote: string;
    p4: string;
    p5: string;
    p6: string;
    dua: string;
    signoff: string;
    designerTitle: string;
    arabicPeace: string;
    testNotice: string;
    testButton: string;
    apkButton: string;
    readMore: string;
    readLess: string;
  };
  gameplayVideo: {
    badge: string;
    title: string;
    subtitle: string;
    liveIndicator: string;
    playChapter1: string;
    downloadApk: string;
    openInNewTab: string;
    clickToStart: string;
    highlight1Title: string;
    highlight1Desc: string;
    highlight2Title: string;
    highlight2Desc: string;
    highlight3Title: string;
    highlight3Desc: string;
    ctaLaunch: string;
    ctaDownloadApk: string;
  };
  combatDemo: {
    badge: string;
    title: string;
    subtitle: string;
    waswasDefinition: string;
    scene: string;
    challenge: string;
    reset: string;
    othmanStatus: string;
    othmanSerenity: string;
    waswasStatus: string;
    waswasTrouble: string;
    waswasTitle: string;
    waswasWhisperHeader: string;
    waswasWhisper: string;
    shadowWhisper: string;
    instruction: string;
    question: string;
    action1Title: string;
    action1Desc: string;
    action2Title: string;
    action2Desc: string;
    action3Title: string;
    action3Desc: string;
    action4Title: string;
    action4Desc: string;
    optionATitle: string;
    optionADesc: string;
    optionAEffect: string;
    optionBTitle: string;
    optionBDesc: string;
    optionBEffect: string;
    optionCTitle: string;
    optionCDesc: string;
    optionCEffect: string;
    victoryTitle: string;
    victoryDesc: string;
    replayDemo: string;
    footerNote: string;
    victoryPlay: string;
    victoryReplay: string;
  };
  mechanics: {
    badge: string;
    title: string;
    subTagline: string;
    subtitle: string;
    mech1Title: string;
    mech1Desc: string;
    mech1Badge: string;
    mech1Quote: string;
    mech1Points: string[];
    mech2Title: string;
    mech2Desc: string;
    mech2Badge: string;
    mech2Quote: string;
    mech2Points: string[];
    mech3Title: string;
    mech3Desc: string;
    mech3Badge: string;
    mech3Quote: string;
    mech3Points: string[];
    mech4Title: string;
    mech4Desc: string;
    mech4Badge: string;
    mech4Quote: string;
    mech4Points: string[];
  };
  characters: {
    badge: string;
    title: string;
    subTagline: string;
    subtitle: string;
    traitsTitle: string;
    attributesTitle: string;
    statWisdom: string;
    statPeace: string;
    statCourage: string;
    statHilm: string;
    othmanName: string;
    othmanRole: string;
    othmanQuote: string;
    othmanDesc: string;
    othmanTraits: string[];
    nouraName: string;
    nouraRole: string;
    nouraQuote: string;
    nouraDesc: string;
    nouraTraits: string[];
    waswasName: string;
    waswasRole: string;
    waswasQuote: string;
    waswasDesc: string;
    waswasTraits: string[];
    sageName: string;
    sageRole: string;
    sageQuote: string;
    sageDesc: string;
    sageTraits: string[];
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
    chooseChapter: string;
    virtueToMaster: string;
    keyTrialsQuests: string;
    playChapter1Now: string;
    founderPackUnlock: string;
    tab1: string;
    tab2: string;
    tab3: string;
    tab4: string;
    tab5: string;
    chapters: Array<{
      id: number;
      number: string;
      title: string;
      arabicTitle: string;
      subtitle: string;
      status: 'available' | 'upcoming' | 'development';
      statusLabel: string;
      synopsis: string;
      virtue: string;
      location: string;
      bgImage: string;
      highlights: string[];
    }>;
  };
  wisdomBook: {
    badge: string;
    title: string;
    subTagline: string;
    subtitle: string;
    cardsUnlocked: string;
    sheets: string;
    wordsOfGuidance: string;
    revealedSource: string;
    spiritualScope: string;
    category: string;
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
    cards: Array<{
      id: string;
      title: string;
      arabicPhrase: string;
      concept: string;
      quote: string;
      source: string;
      lesson: string;
      category: string;
    }>;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      location: string;
      image: string;
      description: string;
    }>;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    col1Tag: string;
    col1Badge: string;
    col1Title: string;
    col1Price: string;
    col1SubPrice: string;
    col1Desc: string;
    col1Points: string[];
    col1Cta: string;
    col2Promo: string;
    col2Tag: string;
    col2Badge: string;
    col2Title: string;
    col2Price: string;
    col2OldPrice: string;
    col2Limited: string;
    col2Desc: string;
    col2Ch2Title: string;
    col2Ch2Desc: string;
    col2Ch3Title: string;
    col2Ch3Desc: string;
    col2GuaranteeTitle: string;
    col2GuaranteeDesc: string;
    col2Cta: string;
    col3Badge: string;
    col3Tag: string;
    col3Teaser: string;
    col3Title: string;
    col3Subtitle: string;
    col3Desc: string;
    col3Points: Array<{ title: string; desc: string }>;
    col3Cta: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subTagline: string;
    subtitle: string;
    step1Badge: string;
    step1Title: string;
    step1Desc: string;
    step2Badge: string;
    step2Title: string;
    step2Desc: string;
    step3Badge: string;
    step3Title: string;
    step3Desc: string;
    ctaForm: string;
    ctaWhatsapp: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    pegi: string;
  };
  familySection: {
    badge: string;
    title: string;
    subtitle: string;
    quizBadge: string;
    quizTitle: string;
    quizDesc: string;
    ageBadge: string;
    ageTitle: string;
    ageDesc: string;
    parentsBadge: string;
    parentsTitle: string;
    parentsDesc: string;
    ethicsBadge: string;
    ethicsTitle: string;
    ethicsDesc: string;
    sourcesBadge: string;
    sourcesTitle: string;
    sourcesDesc: string;
    devicesBadge: string;
    devicesTitle: string;
    devicesDesc: string;
    cardCta: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;
  };
  preFooter: {
    badge: string;
    title: string;
    description: string;
    ctaPlay: string;
    downloadApk: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
  };
  tester: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
    step: string;
    step1Title: string;
    step1Desc: string;
    nameLabel: string;
    namePlaceholder: string;
    ageLabel: string;
    ageOptions: string[];
    firstTimeLabel: string;
    firstTimeYes: string;
    firstTimeNo: string;
    nextBtn: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    playGame: string;
    downloadApk: string;
    shareWhatsapp: string;
    copyLink: string;
    linkCopied: string;
    subBrand: string;
    aboutText: string;
    madeWith: string;
    navTitle: string;
    navHome: string;
    navDemo: string;
    navChars: string;
    navMechanics: string;
    navChapters: string;
    navWisdom: string;
    infoTitle: string;
    pegi: string;
    format: string;
    apkDrive: string;
    languages: string;
    support: string;
    server: string;
    copyright: string;
    privacy: string;
    faq: string;
    backToTop: string;
  };
  mobileSticky: {
    title: string;
    subtitle: string;
    freeText: string;
    cta: string;
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
      rpgSubtitle: 'Le Jeu de Rôle Initiatique',
      motDuConcepteur: 'Mot du Concepteur'
    },
    hero: {
      badge: "L'Alliance du Jeu Vidéo RPG & de l'Éducation Islamique",
      titleLine1: 'NOUR — Le RPG Narratif Islamique',
      titleLine2: 'qui transforme les choix du quotidien en aventure',
      heroSubtitleDirect: "L'épopée du cœur — De la solitude à la fraternité",
      combatQuizPillTitle: "⚔️ Ni épée, ni magie destructrice :",
      combatQuizPillDesc: "Dans NOUR, les combats se mènent par des Quiz de Sagesse et de Foi. Chaque duel contre le Waswâs (le doute) se gagne par le savoir et le discernement moral !",
      description: "Le RPG narratif en pixel art qui réconcilie plaisir du jeu vidéo et apprentissage islamique bienveillant. Au lieu de combats violents, vos enfants et vous progressez grâce à des Quiz de sagesse, affrontez le Waswâs et gagnez de l'XP éthique.",
      ctaPlay: 'Jouer gratuitement dans le navigateur',
      ctaSubtext: 'Aucune installation • Mobile & PC • Sans inscription',
      trustRating: '🧪 Bêta Ouverte Collaborative • Chapitre 1 Gratuit en 1 Clic',
      studioVoicesBadge: '🎙️ Voix en français & Pixel Art',
      adFreeBadge: '100% Sans Pub • Éthique',
      ctaDemo: 'Tester un Combat Quiz (Waswâs)',
      ctaVideo: 'Découvrir le Gameplay (32s)',
      feature1Title: 'Combats par Quiz de Sagesse',
      feature1Desc: 'Remportez les duels contre le Waswâs grâce à des quiz de savoir et de discernement moral (sans armes ni magie).',
      feature2Title: "Quiz Islamiques & Gain d'XP",
      feature2Desc: 'Des quiz stimulants sur le Tawhīd, le comportement (Adab) et les hadiths pour faire évoluer votre personnage.',
      feature3Title: 'Choix Moraux & Hadiths Sûrs',
      feature3Desc: 'Des dilemmes éthiques à embranchements rigoureusement inspirés du Coran et de la Sunnah.',
      stat1Label: 'Chapitre 1 Gratuit',
      stat1Value: '100%',
      stat2Label: 'Saga Initiatique',
      stat2Value: '5 Chapitres',
      stat3Label: 'Univers Visuel',
      stat3Value: '16-Bit Pixel Art',
      downloadApk: "Télécharger l'APK Android (Bêta)",
      apkNote: '📱 Également disponible : Version Android en bêta (APK autonome)',
      frictionFree: '100% Gratuit & Sans Inscription',
      frictionDevice: 'Tourne directement sur Mobile & PC',
      frictionBackup: 'Sauvegarde automatique',
      cardBadge: 'Gameplay (32s)',
      cardOfficialWeb: 'Version Web Officielle',
      cardChapter1: 'Chapitre 1 : Vaincre la Solitude',
      cardJoinOthman: "Accompagnez Othmân dès aujourd'hui",
      cardActiveServer: 'Serveur Actif',
      cardApkDrive: 'APK Android (Drive) ↗',
      othmanQuote: '« Le chemin commence... »',
      waswasTitle: 'Le Waswâs',
      waswasRole: "L'Ombre intérieure",
      featWaswasTitle: 'Combats par Quiz contre le Waswâs',
      featWaswasDesc: "Au lieu d'armes ou de sorts destructeurs, chaque confrontation est un duel de connaissances et de sagesse où vous dissipez le doute par des réponses éclairées.",
      featBridgesTitle: "Quiz d'Apprentissage & XP",
      featBridgesDesc: "Validez vos connaissances et accumulez de l'XP à travers des quiz éducatifs sur le Tawhīd, la patience et les nobles caractères, ponctués de petits rappels bienveillants.",
      featCrossroadsTitle: 'Le Carrefour du Village',
      featCrossroadsDesc: 'Un poteau indicateur propose à Othmân 5 directions : rompre la solitude, le Hilm (douceur), le Sabr (patience), le Birr (bonté envers les parents) et le grand Climax.',
      featKnowledgeTitle: 'Le Livre du Savoir',
      featKnowledgeDesc: "Un recueil interactif fondé sur le Noble Coran et les hadiths authentiques (Bukhâri & Muslim) pour cultiver l'Adab au quotidien."
    },
    creatorLetter: {
      badge: "Le Mot du Concepteur • Genèse d'un RPG Éthique",
      title: "« Transmettre la Foi et la Sagesse à nos Enfants dans un Monde d'Écrans »",
      authorSubtitle: '✧ Abderrahmane El Malki • Père de 7 enfants • Développeur Web & Concepteur de NOUR ✧',
      openLetter: 'Lettre Ouverte aux Familles & Joueurs',
      authorName: 'Abderrahmane El Malki',
      authorBio: 'Digital éthique • Hijra au Maroc (2022)',
      greeting: 'As-salāmu ʿalaykum wa raḥmatullāhi wa barakātuh,',
      dearParents: 'Chers frères, chères sœurs, chers parents,',
      p1: "Je m’appelle Abderrahmane El Malki, j’ai 49 ans. Après avoir passé plus de 45 ans en France, marié et père de 7 enfants, j'ai fait ma hijra au Maroc en 2022.",
      p2: "Comme beaucoup d'entre vous, je suis confronté chaque jour à ce défi qui nous tient tant à cœur : comment transmettre à nos enfants les nobles valeurs de notre belle religion, celles que nous avons nous-mêmes reçues, dans un monde saturé d'écrans et de contenus souvent futiles ou violents ?",
      p3: "Évoluant dans le numérique éthique depuis 2024, c’est en 2026, après la naissance de ma fille Noura, que m’est venue l’idée de concevoir un jeu vidéo islamique pas comme les autres : un RPG d'aventure chaleureux, allié à des quiz d'apprentissage et à des actions simples dans la vraie vie pour progresser dans l’histoire.",
      calloutHeader: 'Ce qui différencie NOUR de tous les autres jeux',
      calloutQuote: "« Ici, point de magie ni de combats d'épée destructeurs, mais une lutte bien plus noble et essentielle : le combat intérieur contre ses propres waswâs (insufflations et doutes), pour faire triompher la sérénité et la bonté. »",
      p4: "À travers une contrée d’Orient lumineuse, nous suivons le jeune Othmân et sa maman Noura. Chaque rencontre devient l'occasion pour Othmân d’en apprendre sur sa religion et sur lui-même. Au fil des 4 grands chapitres, il découvre le Tawhīd (l’Unicité divine), le danger du Shirk (l'association), la force du Sabr (la patience), le Shukr (la gratitude), le ʿIlm (le savoir bénéfique) et bien d’autres vertus fondamentales.",
      p5: "Tout cela à la lumière du Saint Coran et des hadiths authentiques de notre bien-aimé Prophète ﷺ et de nos pieux prédécesseurs. N'étant ni étudiant en sciences religieuses et encore moins savant, je garde à l'esprit la parole de nos savants : transmettre le savoir avec preuve, même humblement, est essentiel. C’est pour cela que chaque parole et chaque quiz mentionne précisément la source authentique dont il est tiré.",
      p6: "Le jeu étant actuellement en version Bêta, soyez donc indulgents ! Si vous constatez la moindre faute, coquille de traduction ou maladresse, c’est avec une immense gratitude que j’apporterai les corrections nécessaires. Le musulman est le frère et le miroir de son frère, et c'est dans cet esprit d'entraide que NOUR a été façonné.",
      dua: "« Qu’Allah fasse de ce projet une cause de bienfaisance pour nos enfants, et qu’Il nous le compte comme bonne action sur notre balance le Jour du Jugement. Āmīn. »",
      signoff: 'Bon voyage sur la Voie de la Sagesse !',
      designerTitle: 'Abderrahmane El Malki — Concepteur de NOUR',
      arabicPeace: 'والسلام عليكم ورحمة الله',
      testNotice: 'Testez gratuitement le Chapitre 1 avec vos enfants directement dans votre navigateur',
      testButton: 'Tester le Jeu (1 Clic)',
      apkButton: 'APK Android',
      readMore: "Lire la lettre complète d'Abderrahmane 📜",
      readLess: 'Réduire la lettre ▴'
    },
    gameplayVideo: {
      badge: 'Démonstration en Direct',
      title: 'Vivez l’Aventure en Pixel Art',
      subtitle: "Découvrez l'atmosphère chaleureuse, les dialogues interactifs et le carrefour du village.",
      liveIndicator: 'Session In-Game',
      playChapter1: 'Jouer au Chapitre 1',
      downloadApk: "Télécharger l'APK (Drive)",
      openInNewTab: 'Ouvrir dans un nouvel onglet',
      clickToStart: 'Cliquez pour lancer la vidéo (32 secondes)',
      highlight1Title: 'Artisanat Pixel-Art & Poésie',
      highlight1Desc: 'Des décors minutieusement dessinés, une lumière dorée du crépuscule et des ambiances sonores inspirées pour une immersion sereine.',
      highlight2Title: 'Épreuves Spirituelles & Choix',
      highlight2Desc: 'Affrontez les murmures intérieurs (Waswâs), domptez la colère avec le Hilm et choisissez la douceur guidée par les Hadiths authentiques.',
      highlight3Title: 'Les « Ponts de Nour » en Vie Réelle',
      highlight3Desc: "Le jeu dépasse l'écran : accomplissez des missions bienveillantes concrètes dans votre foyer pour débloquer la suite de l'aventure.",
      ctaLaunch: "Lancer l'Aventure Immédiatement",
      ctaDownloadApk: "Télécharger l'APK Android (Drive)"
    },
    combatDemo: {
      badge: 'Simulateur Interactif',
      title: 'Le Combat contre le Waswâs',
      subtitle: "Face aux murmures intérieurs qui vous poussent à l'isolement, choisissez l'attitude prophétique pour restaurer la sérénité du cœur.",
      waswasDefinition: "Le Waswâs désigne les murmures intérieurs du doute, de la timidité paralysante ou du découragement. Dans NOUR, aucun combat n'est violent : la victoire s'obtient par la clarté du cœur, la foi et la sérénité.",
      scene: 'Scène : Le Carrefour des Chemins',
      challenge: 'Épreuve : La peur du rejet',
      reset: 'Réinitialiser',
      othmanStatus: "Sensible aux jugements d'autrui",
      othmanSerenity: '% Sérénité',
      waswasStatus: "Murmure actif dans l'esprit",
      waswasTrouble: '% Trouble',
      waswasTitle: "L'Ombre du Waswâs",
      waswasWhisperHeader: "Murmure du Waswâs à l'oreille d'Othmân :",
      waswasWhisper: "« Regarde ces jeunes au loin... Ils ne te connaissent pas. Si tu t'approches, ils vont te trouver bizarre et se moquer de toi. Reste en arrière, c'est bien plus prudent... »",
      shadowWhisper: '« Reste chez toi... Personne ne veut être ton ami. Ils vont se moquer de toi. »',
      instruction: 'Sélectionnez une réponse spirituelle pour dissiper la brume :',
      question: 'Quelle réponse donnez-vous à travers Othmân ?',
      action1Title: 'Istiʿādhah (Demander refuge)',
      action1Desc: '« Aʿūdhu billāhi mina sh-shayṭān » — Calme le cœur immédiatement.',
      action2Title: 'Méditation sur le Taʿāruf',
      action2Desc: 'Se rappeler que la création humaine est faite pour la fraternité mutuelle.',
      action3Title: 'Salām & Sourire',
      action3Desc: 'Poser un premier geste sincère vers autrui (Sadaqah).',
      action4Title: 'Le Sabr Actif',
      action4Desc: 'Avancer avec dignité sans craindre le regard ou le refus.',
      optionATitle: 'Option A : Céder au doute',
      optionADesc: "« C'est vrai... Je suis trop timide, je ferais mieux de faire demi-tour et de rentrer chez moi. »",
      optionAEffect: '-20 Sérénité • +25 Waswâs',
      optionBTitle: "Option B : S'imposer par la colère",
      optionBDesc: "« Je vais crier et taper du pied pour qu'ils soient bien obligés de me prêter attention ! »",
      optionBEffect: '+10 Waswâs (Colère stérile)',
      optionCTitle: 'Option C : Discernement & Foi',
      optionCDesc: "« أَعُوذُ بِاللَّهِ — Je cherche refuge auprès d'Allah. Mon intention est pure : un sourire est une aumône, j'avance en paix. »",
      optionCEffect: '✨ +100 Sérénité • Waswâs Dissipé !',
      victoryTitle: 'Victoire Intérieure ! Sentier Débloqué',
      victoryDesc: "Othmân respire, formule l'Istiʿādhah et avance avec dignité. Le sentier de la Patience (Sabr) s'ouvre devant lui.",
      replayDemo: 'Réessayer le simulateur',
      footerNote: "Dans NOUR, aucun combat n'utilise la violence physique. La victoire s'obtient par la clarté du cœur, la foi et l'éthique de la parole.",
      victoryPlay: 'Lancer le Chapitre 1 Complet',
      victoryReplay: 'Rejouer la démo'
    },
    mechanics: {
      badge: 'Un Gameplay Unique',
      title: 'Un Jeu Connecté à la Vie Réelle',
      subTagline: "✧ RPG d'Aventure Intérieure • Éthique Interactive ✧",
      subtitle: 'Nour ne se contente pas de raconter une histoire : il invite le joueur à transformer son propre quotidien.',
      mech1Title: 'Combat Spirituel',
      mech1Desc: 'Identifier les pièges du Waswâs et utiliser les invocations appropriées pour garder un esprit clair.',
      mech1Badge: 'Combat Spirituel',
      mech1Quote: "« Ce n'est pas une formule magique, Othmân. Tu as cherché refuge auprès d'Allah avec ton cœur. Maintenant, ancre cette parole et avance d'un pas ferme. » — Noura",
      mech1Points: [
        'Jauge dynamique de Sérénité face aux assauts du doute',
        "Désamorçage des pensées intrusives par l'Istiʿādhah",
        "Victoires par la présence du cœur et l'action vertueuse"
      ],
      mech2Title: 'Les Ponts de Nour',
      mech2Desc: "Chaque bonne action accomplie dans la vraie vie peut ouvrir un nouveau chemin dans l'aventure. Basé sur l'honneur et la confiance : aucune photo ni donnée privée n'est demandée. Idéal en famille.",
      mech2Badge: 'Actions Hors-Écran',
      mech2Quote: "« As-tu pensé à ordonner ton lit ou ton coin ce matin ? Prends une minute dans le monde réel... le jeu t'attend ici ! »",
      mech2Points: [
        "Missions bienveillantes concrètes basées sur l'honneur et la confiance réciproque",
        '100% respectueux de la vie privée : zéro caméra, zéro donnée collectée',
        'Idéal pour ouvrir un dialogue complice et constructif parent-enfant'
      ],
      mech3Title: 'Le Poteau aux Chemins',
      mech3Desc: 'Un carrefour central symbolique où chaque embranchement explore une vertu fondamentale.',
      mech3Badge: 'Le Poteau aux Chemins',
      mech3Quote: "« Le chemin ne commence pas sous tes semelles, il commence dans ton cœur. Quand l'intention est sincère, chaque pas trouve son sens. » — Noura",
      mech3Points: [
        'Des choix moraux clairs pour guider Othmân vers sa destinée',
        'Aucun game-over punitif : apprentissage bienveillant et résilience',
        'Une progression accessible et captivante à travers 5 grands chapitres'
      ],
      mech4Title: 'Le Livre du Savoir',
      mech4Desc: 'Des enseignements tirés du noble Coran et de la tradition prophétique authentique.',
      mech4Badge: 'Ancrage Authentique',
      mech4Quote: "« En haut à droite, le Livre du Savoir rassemble les fiches d'éthique et de hadiths que tu débloques en avançant. »",
      mech4Points: [
        'Sourate 49, Verset 13',
        'Jami` at-Tirmidhi (1956)',
        'Pédagogie & Éthique'
      ]
    },
    characters: {
      badge: 'Compagnons de Voyage',
      title: 'Rencontrez les Héros de la Saga',
      subTagline: '✧ Protagonistes • Destins Croisés • Alliés & Épreuves ✧',
      subtitle: 'Des personnalités attachantes qui guident Othmân tout au long de son apprentissage.',
      traitsTitle: 'Traits Fondamentaux',
      attributesTitle: "Attributs du Cœur & de l'Esprit",
      statWisdom: 'Sagesse & Discernement',
      statPeace: 'Paix Intérieure & Foi',
      statCourage: 'Courage Moral',
      statHilm: 'Al-Hilm (Maîtrise de soi)',
      othmanName: 'Othmân',
      othmanRole: 'Le Jeune Héros',
      othmanQuote: "« Et si je m'approche... vont-ils me trouver bizarre ? Par quoi on commence quand on a l'impression d'être invisible ? »",
      othmanDesc: "Un jeune garçon sensible et réfléchi, sur le point de quitter la douce sécurité de sa terrasse familiale. Face aux bruits du village et à la peur d'être rejeté, il apprend à transformer ses hésitations en courage sincère.",
      othmanTraits: ['Cœur sincère', 'Sensible', 'Bâton de voyage', "Quête d'amitié"],
      nouraName: 'Noura',
      nouraRole: 'La Mère & Mentor',
      nouraQuote: "« Le chemin ne commence pas sous tes semelles, Othmân. Il commence dans ton cœur. Quand l'intention est sincère, chaque pas trouve son sens. »",
      nouraDesc: "La mère d'Othmân et sa boussole morale. Toujours présente pour dénouer les angoisses d'un mot doux, elle enseigne que la vraie force réside dans la constance des petits gestes et la bienveillance du regard.",
      nouraTraits: ['Patience infinie', 'Guide maternelle', 'Sagesse quotidienne', 'Écoute profonde'],
      waswasName: "L'Ombre du Waswâs",
      waswasRole: "L'Adversaire Intérieur",
      waswasQuote: "« Tu n'y arriveras jamais... Reste au lit, la montagne est trop haute, personne n'attend après toi... »",
      waswasDesc: "Une brume chuchotante sans forme corporelle, née des doutes, de la fatigue et de la peur du regard d'autrui. Elle ne possède aucun pouvoir réel, si ce n'est d'amplifier les craintes d'Othmân pour le figer dans l'inaction.",
      waswasTraits: ['Murmures toxiques', 'Brume insaisissable', 'Amplificateur de peur', 'Dissipable par la foi'],
      sageName: 'Le Vieux Sage',
      sageRole: 'Gardien des Savoirs',
      sageQuote: "« Choisis ta direction au carrefour du village, car tout acte de valeur commence par une intention sincère. »",
      sageDesc: "Le vénérable sage qui accueille Othmân au carrefour des chemins. Témoin des voyageurs en quête de sens, il transmet au joueur les enseignements du Livre du Savoir pour éclairer sa route.",
      sageTraits: ['Livre du Savoir', 'Mémoire des anciens', "Vision d'ensemble", "Clarté d'esprit"]
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
      chooseChapter: '🧭 Choisis un Chapitre',
      virtueToMaster: 'Vertu Centrale à Maîtriser',
      keyTrialsQuests: 'Épreuves & Quêtes Clés du Chapitre',
      playChapter1Now: 'Jouer au Chapitre 1 Maintenant',
      founderPackUnlock: 'Débloquable dans le Pack Fondateur',
      tab1: 'Ch. 1 : Solitude',
      tab2: 'Ch. 2 : Le Hilm',
      tab3: 'Ch. 3 : Le Sabr',
      tab4: 'Ch. 4 : Le Birr',
      tab5: 'Ch. 5 : Le Sommet',
      chapters: [
        {
          id: 1,
          number: '01',
          title: 'Vaincre la Solitude',
          arabicTitle: 'طريق الصداقة والمؤانسة',
          subtitle: "Se faire des amis & briser l'invisibilité",
          status: 'available',
          statusLabel: 'Chapitre 1 Complet — Jouable Dès Maintenant',
          synopsis: "Othmân quitte son lit et doit traverser la ruelle jusqu'au grand carrefour. Confronté aux premiers murmures du Waswâs et à l'appréhension de parler aux autres jeunes du village, il découvre comment un simple sourire et une parole bienveillante ouvrent les portes les plus verrouillées.",
          virtue: "L'Ouverture du Cœur & Le Courage Social",
          location: 'La Terrasse, Le Carrefour du Chêne & La Vallée',
          bgImage: '/game-assets/carrefour.jpg',
          highlights: [
            'Dissiper le premier assaut de la brume du Waswâs',
            'Le Pont de Nour : Ordonner son lit dans la vraie vie',
            "Débloquer l'Adab du langage dans le Livre du Savoir",
            "Entrer en contact avec le groupe d'enfants du village"
          ]
        },
        {
          id: 2,
          number: '02',
          title: 'Le chemin du Hilm',
          arabicTitle: 'طريق الحلم وضبط النفس',
          subtitle: 'La Colère & la Maîtrise de soi',
          status: 'upcoming',
          statusLabel: 'Chapitre 2 — Finalisation en cours',
          synopsis: "Devant les étals du marché aux fruits, une bousculade injuste renverse les paniers. Othmân sent le sang lui monter aux tempes. Pour progresser, il devra dompter l'embrasement de l'irritation et expérimenter la puissance libératrice du pardon et de la douceur.",
          virtue: 'Al-Hilm (Douceur, Clémence & Sang-froid)',
          location: "Le Marché aux Fruits & L'Atelier du Potier",
          bgImage: '/game-assets/marche.jpg',
          highlights: [
            "Système de respiration et désamorçage de l'agressivité",
            'Éviter le piège de la réplique blessante',
            "Réparer l'erreur d'un autre sans orgueil",
            'Action réelle : Apaiser une dispute autour de soi'
          ]
        },
        {
          id: 3,
          number: '03',
          title: 'Le chemin du Tawakkul',
          arabicTitle: 'طريق التوكل واليقين',
          subtitle: 'La Décision & la Confiance en Dieu',
          status: 'development',
          statusLabel: 'Chapitre 3 — En développement',
          synopsis: "Au pied du sentier des falaises, le brouillard masque l'horizon. Othmân hésite à s'engager. Il apprend que la confiance n'est pas l'absence d'efforts, mais le fait d'attacher sa monture tout en remettant l'issue entre les mains du Créateur.",
          virtue: "At-Tawakkul (L'Effort Sincère & La Confiance)",
          location: 'Le Sentier des Brumes & Les Hauts Plateaux',
          bgImage: '/game-assets/waswas_bg.jpg',
          highlights: [
            'Faire les causes avant d’attendre le résultat',
            "L'énigme du berger et du nœud de corde",
            'Raffermir sa détermination face à l’inconnu',
            'Déblocage de l’invocation de la décision'
          ]
        },
        {
          id: 4,
          number: '04',
          title: 'Ce que tu as encore',
          arabicTitle: 'طريق بر الوالدين والإحسان',
          subtitle: 'La Bonté envers les Parents & la Reconnaissance',
          status: 'development',
          statusLabel: 'Chapitre 4 — En Scénarisation',
          synopsis: "Après un agacement matinal envers sa mère, Othmân quitte précipitamment la maison. Réfugié sous un grand arbre avec son ami d'enfance, ils observent en silence un oiseau nourrir son nid. Une confidence inattendue et bouleversante va alors bousculer toutes ses certitudes sur ce qu'il croyait ordinaire dans son quotidien.",
          virtue: 'Birr al-Wālidayn (La Piété Filiale & La Gratitude du Cœur)',
          location: "La Maison Familiale & L'Arbre des Confidences",
          bgImage: '/game-assets/teaser_chapitre4.jpg',
          highlights: [
            "Désamorcer les murmures d'irritation et d'impatience",
            'Méditation sous le grand chêne : l’oiseau et la subsistance',
            'Une confidence inattendue sous les branches',
            'Prendre conscience de la valeur inestimable de ses proches'
          ]
        },
        {
          id: 5,
          number: '05',
          title: 'La Montagne Intérieure',
          arabicTitle: 'جبل الصبر والثبات',
          subtitle: "La Persévérance (Sabr) face à l'épreuve",
          status: 'development',
          statusLabel: 'Chapitre 5 — Le Sommet de la Saga',
          synopsis: "L'ascension finale vers le sommet de la montagne. Confronté à la fatigue physique et à l'adversité, Othmân unit toutes les vertus acquises pour surmonter l'épreuve finale et faire rayonner la Lumière (Nour) sur l'ensemble de la vallée.",
          virtue: "As-Sabr (L'Endurance Noble & La Constance)",
          location: 'Le Sanctuaire du Pic Céleste',
          bgImage: '/game-assets/vallee.jpg',
          highlights: [
            "L'épreuve ultime face au Souffle des Ombres",
            "L'harmonie complète de l'arbre de sagesse",
            'Couronnement du héros et bénédiction de la vallée',
            'Déblocage du mode Libre & Récits secondaires'
          ]
        }
      ]
    },
    wisdomBook: {
      badge: 'Ancrage Authentique',
      title: 'Le Livre du Savoir',
      subTagline: '✧ Bayt al-Hikma • Manuscrits Révélés • Éthique Islamique ✧',
      subtitle: 'Des enseignements tirés du noble Coran et de la tradition prophétique authentique.',
      cardsUnlocked: 'Fiches du Récit Débloquées',
      sheets: 'Feuillets',
      wordsOfGuidance: '— Parole de Guidance & Lumière —',
      revealedSource: '— Source Révélée :',
      spiritualScope: 'Portée Spirituelle & Action Concrète',
      category: 'Catégorie :',
      verseTitle: 'Verset Clé sur la Fraternité',
      verseArabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
      verseMeaning: '« Ô hommes ! Nous vous avons créés d’un mâle et d’une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez. » (Sourate Al-Hujurat 49:13)',
      verseRef: 'Sourate 49, Verset 13',
      hadithTitle: 'Hadith sur le Sourire & le Don',
      hadithArabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
      hadithMeaning: '« Ton sourire à ton frère est pour toi une aumône (Sadaqah). » (Rapporté par at-Tirmidhi)',
      hadithRef: 'Jami` at-Tirmidhi (1956)',
      valueTitle: 'Pédagogie & Éthique',
      valueDesc: 'Toutes les leçons morales sont soigneusement vérifiées et présentées avec douceur et pédagogie.',
      cards: [
        {
          id: 'adab_parole',
          title: "L'Adab de la Parole",
          arabicPhrase: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
          concept: 'Dire le bien ou garder le silence',
          quote: "« Que celui qui croit en Dieu et au Jour Dernier dise du bien ou qu'il garde le silence. »",
          source: 'Rapporté par al-Bukhari & Muslim',
          lesson: 'La langue est le miroir du cœur. Retenir une parole inutile ou blessante est une marque de maturité supérieure et protège la paix intérieure.',
          category: 'adab'
        },
        {
          id: 'sourire_aumone',
          title: 'Le Rayonnement du Sourire',
          arabicPhrase: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
          concept: 'La Bienveillance Universelle',
          quote: "« Ton sourire à l'égard de ton frère est une aumône pour toi. »",
          source: 'Rapporté par at-Tirmidhi (Authentique)',
          lesson: "Un simple sourire sincère suffit souvent à briser la glace de la timidité et à chasser les sentiments d'invisibilité chez soi et chez autrui.",
          category: 'serenite'
        },
        {
          id: 'istiadha_protection',
          title: "Le Bouclier de l'Isti'ādhah",
          arabicPhrase: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
          concept: 'Dissiper les pensées toxiques',
          quote: '« Je cherche refuge auprès d’Allah contre le démon banni. »',
          source: 'Parole Coranique & Enseignement Prophétique',
          lesson: 'Face aux pensées intrusives qui te disent que tu ne vaux rien, recentre ton cœur sur la protection divine et reprends ta marche calmement.',
          category: 'courage'
        },
        {
          id: 'ordre_espace',
          title: "L'Harmonie du Quotidien",
          arabicPhrase: 'النَّظَافَةُ وَحُسْنُ التَّدْبِيرِ',
          concept: 'Les Ponts de Nour (Action Réelle)',
          quote: '« L’ordre du monde extérieur apaise le tumulte intérieur de l’esprit. »',
          source: 'Sagesse éducative & Pédagogie de NOUR',
          lesson: 'Prendre deux minutes chaque matin pour faire son lit et ranger son espace prépare l’esprit à triompher des grands défis de la journée.',
          category: 'famille'
        }
      ]
    },
    gallery: {
      badge: 'Univers Visuel & Atmosphère',
      title: 'Les Panoramas de NOUR',
      subtitle: "Une direction artistique poétique mariant le charme des RPG rétro et la chaleur lumineuse des décors d'Orient.",
      items: [
        {
          id: 'vallee',
          title: "L'Aurore sur la Vallée",
          location: "Territoire d'Ouverture",
          image: '/game-assets/vallee.jpg',
          description: "Le soleil matinal réchauffe les pierres blanches du village d'Othmân, annonçant le premier jour de son grand voyage."
        },
        {
          id: 'carrefour',
          title: 'Le Carrefour du Village',
          location: 'Croisement des Sentiers',
          image: '/game-assets/carrefour.jpg',
          description: "Le carrefour du village où un poteau indicateur propose à Othmân les différentes directions pour chaque chapitre."
        },
        {
          id: 'waswas',
          title: 'La Gorge des Murmures',
          location: 'Sanctuaire des Épreuves',
          image: '/game-assets/waswas_bg.jpg',
          description: "L'étroit passage sous la falaise où la brume insidieuse tente de paralyser le jeune héros par ses doutes."
        },
        {
          id: 'chambre',
          title: 'La Chambre Familiale',
          location: 'Le Pont de Nour 01',
          image: '/game-assets/chambre.jpg',
          description: "L'intimité du foyer où naît la première épreuve : vaincre la paresse et ordonner son espace de vie."
        },
        {
          id: 'verger',
          title: 'Le Verger des Amandiers',
          location: 'Sentier de la Gratitude',
          image: '/game-assets/verger.jpg',
          description: 'Les arbres en fleurs embaument l’air frais des collines, rappelant les bienfaits cachés de la nature.'
        },
        {
          id: 'affiche',
          title: "L'Affiche d'Art de NOUR",
          location: "Couverture de l'Épopée",
          image: '/game-assets/affiche_nour.jpg',
          description: "L'illustration emblématique du jeu célébrant le voyage d'Othmân, son bâton de marche et la lumière de son cœur."
        }
      ]
    },
    pricing: {
      badge: 'Soutien & Déblocage',
      title: 'Rejoignez l’Aventure des Fondateurs',
      subtitle: 'Soutenez un projet indépendant éthique et débloquez immédiatement les chapitres suivants.',
      col1Tag: "Thé de l'Artisan",
      col1Badge: 'Geste Éthique',
      col1Title: 'Soutien au Projet',
      col1Price: '1,99 €',
      col1SubPrice: "/ don unique d'encouragement",
      col1Desc: "Un geste chaleureux et symbolique pour encourager notre studio et financer les voix d'acteurs.",
      col1Points: [
        'Offrir un thé chaud et un grand encouragement aux créateurs',
        'Permettre d’offrir le Chapitre 1 gratuitement à tous',
        '100% Éthique, sans abonnement caché'
      ],
      col1Cta: 'Offrir un Thé (1,99 €)',
      col2Promo: '-38% OFFRE DE LANCEMENT',
      col2Tag: 'Chapitres 2 & 3 Inclus',
      col2Badge: '-38% OFFRE DE LANCEMENT',
      col2Title: 'Pack Fondateur',
      col2Price: '4,99 €',
      col2OldPrice: '7,99 €',
      col2Limited: 'Offre Limitée',
      col2Desc: 'Débloquez l’accès complet et immédiat aux deux prochains chapitres majeurs.',
      col2Ch2Title: '🌾 Chapitre 2 : Le Chemin du Hilm',
      col2Ch2Desc: 'Maîtriser le feu de la colère par la douceur sur la place du marché.',
      col2Ch3Title: "🩹 Chapitre 3 : L'Enfant à l'Attelle (Sabr)",
      col2Ch3Desc: 'Patience face à la maladie, remèdes prophétiques & soutien fraternel.',
      col2GuaranteeTitle: '🛡️ Garantie Satisfait ou Remboursé 7 jours',
      col2GuaranteeDesc: 'Explorez l’aventure l’esprit tranquille. Remboursement intégral sur simple e-mail à elmalkidigital@gmail.com sous 7 jours sans justification.',
      col2Cta: 'Débloquer les Chapitres 2 & 3 (4,99 €)',
      col3Badge: '✨ ARRIVE BIENTÔT',
      col3Tag: 'Chapitre 4 : Birr al-Wālidayn',
      col3Teaser: 'Teaser Exclusif',
      col3Title: '« Ce que tu as encore »',
      col3Subtitle: 'La Bonté envers les Parents & la Reconnaissance',
      col3Desc: "Après un agacement matinal envers sa mère, Othmân quitte précipitamment la maison. Réfugié sous un grand arbre avec son ami d'enfance, ils observent en silence un oiseau nourrir son nid. Une confidence inattendue et bouleversante va bousculer son regard sur ce qu'il croyait ordinaire.",
      col3Points: [
        {
          title: '🕊️ Méditation & Nature',
          desc: "L'observation de l'oiseau qui part le ventre vide et revient nourrir son nid."
        },
        {
          title: "💭 La Rencontre sous l'Arbre",
          desc: 'Une discussion sincère qui invite à reconsidérer nos liens familiaux les plus précieux.'
        }
      ],
      col3Cta: 'Découvrir la Roadmap Complète'
    },
    testimonials: {
      badge: '🧪 Bêta Ouverte Collaborative',
      title: "Façonnons l'Aventure NOUR Ensemble",
      subTagline: '✧ Pas de Faux Avis • Votre Ressenti Sincère Façonne le Jeu ✧',
      subtitle: "NOUR est une œuvre indépendante en plein essor. Le Chapitre 1 est 100% gratuit et sans inscription : nous avons besoin de vos critiques franches, de vos ressentis de joueurs et de parents pour perfectionner l'expérience.",
      step1Badge: 'Étape 1',
      step1Title: 'Jouez au Chapitre 1 (Gratuit)',
      step1Desc: "Lancez le jeu en 1 clic dans votre navigateur. Explorez les dialogues doublés en voix de cinéma, testez les combats par quiz et vivez l'histoire d'Othmân sans rien installer.",
      step2Badge: 'Étape 2',
      step2Title: 'Donnez votre Avis Sans Filtre',
      step2Desc: "Qu'avez-vous aimé ? Vos enfants ont-ils accroché ? Y a-t-il des blocages ou des passages trop lents ? Partagez vos impressions en 2 minutes via notre questionnaire ou sur WhatsApp.",
      step3Badge: 'Étape 3',
      step3Title: 'Contribuez aux Prochains Chapitres',
      step3Desc: "Vos idées d'énigmes, retours d'Adab et remarques constructives guideront le développement des Chapitres 2 à 5. Les meilleurs testeurs seront crédités dans le jeu !",
      ctaForm: 'Remplir le questionnaire de retour (2 min) ✍️',
      ctaWhatsapp: 'Envoyer un retour direct sur WhatsApp 💬',
      guaranteeTitle: 'Démarche 100% Transparente & Éthique',
      guaranteeDesc: "Ici, aucun avis préfabriqué. Nous croyons en la sincérité, au travail bien fait et à l'entraide communautaire pour bâtir un jeu d'exception.",
      pegi: 'Projet Collaboratif Bêta'
    },
    familySection: {
      badge: 'Conçu pour les Familles & la Sérénité',
      title: 'Pour qui est pensé NOUR ?',
      subtitle: "La solution idéale pour les parents : réconcilier l'attrait irrésistible des jeux vidéo avec un apprentissage islamique authentique, ludique et bienveillant.",
      quizBadge: 'Jeu & Savoir',
      quizTitle: "L'Alliance du Jeu Vidéo & de l'Éducation Islamique",
      quizDesc: "Fini les cours théoriques austères ou les écrans passifs : vos enfants testent et enrichissent leurs connaissances (Tawhīd, Adab, Hadiths) à travers des quiz interactifs stimulants intégrés au cœur de l'aventure RPG.",
      ageBadge: 'Dès 8 ans',
      ageTitle: 'Enfants, Ados & Parents',
      ageDesc: 'Conçu pour captiver les enfants dès l’âge de 8 ans tout en offrant aux adolescents et parents une aventure réflexive profonde.',
      parentsBadge: 'Transmission',
      parentsTitle: 'Accompagnement Parental Facile',
      parentsDesc: 'Idéal pour créer un moment de complicité et de discussion bienveillante en famille autour des situations du quotidien.',
      ethicsBadge: '100% Éthique',
      ethicsTitle: 'Zéro Pub & Respect Absolu de la Vie Privée',
      ethicsDesc: 'Aucune publicité intrusive, aucune inscription obligatoire. Les défis réels reposent sur l’honneur : aucune caméra, photo ni donnée privée n’est demandée.',
      sourcesBadge: 'Authenticité',
      sourcesTitle: 'Sources Religieuses Rigoureuses',
      sourcesDesc: 'Inspiré des enseignements authentiques du Noble Coran et des Hadiths (Bukhâri & Muslim), axé sur l’Adab, le Hilm et la fraternité.',
      devicesBadge: 'Accessible Partout',
      devicesTitle: '1 Clic sur Téléphone, Tablette & PC',
      devicesDesc: 'Tourne instantanément dans votre navigateur web (Safari iPhone, Chrome Android, ordinateurs) sans téléchargement préalable obligatoire.',
      cardCta: 'Tester en famille dès maintenant'
    },
    faq: {
      badge: 'Questions Fréquentes',
      title: 'Tout Savoir sur le Projet',
      subtitle: 'Des réponses claires à vos questions sur l’accessibilité, les tarifs et les plateformes.',
      items: [
        {
          q: 'Le jeu est-il gratuit ? Faut-il payer pour jouer ?',
          a: "Le Chapitre 1 complet (« Vaincre la Solitude ») est 100% gratuit et sans engagement. Vous pouvez y jouer immédiatement sans carte bancaire. Pour débloquer les chapitres suivants et soutenir le studio indépendant (enregistrements studio des comédiens de doublage et graphismes pixel art), un Pack Fondateur optionnel à prix modique est proposé."
        },
        {
          q: 'Faut-il créer un compte ou installer une application ?',
          a: "Non, aucune inscription ni mot de passe n'est exigé ! Le jeu se lance en 1 clic directement dans votre navigateur web habituel (sur mobile comme sur ordinateur). Votre progression est sauvegardée automatiquement sur votre appareil."
        },
        {
          q: 'Sur quels appareils fonctionne NOUR ?',
          a: "NOUR est compatible avec tous les smartphones (iPhone via Safari, Android via Chrome), tablettes (iPad, tablettes Android) et ordinateurs (PC Windows, Mac, Linux). Une version application Android (fichier APK autonome) est également mise à disposition pour jouer hors-ligne."
        },
        {
          q: 'Y a-t-il des publicités ou des pièges pour les enfants ?',
          a: "Absolument aucune. Le jeu est garanti 100% sans publicité, sans bannières distrayantes, sans pop-up et sans micro-transactions pièges. C'est un espace de jeu éthique, sain et protecteur pour l'attention des jeunes joueurs."
        },
        {
          q: 'À partir de quel âge le jeu est-il recommandé ?',
          a: "NOUR est particulièrement recommandé à partir de 8 ans (lecture autonome ou accompagnée). Les parents peuvent parfaitement jouer côte à côte avec leurs enfants pour échanger sur les choix moraux et spirituels d'Othmân."
        },
        {
          q: 'Comment fonctionnent les « Ponts de Nour » (défis dans la vraie vie) ?',
          a: "À certains moments clés, le jeu invite avec délicatesse le joueur à poser un acte réel dans son foyer (ranger sa chambre, exprimer sa gratitude à ses parents, sourire). Ce système fonctionne à 100% sur l'honneur et la confiance personnelle : aucune photo, vidéo ni géolocalisation n'est demandée."
        },
        {
          q: 'Quelles sont les sources religieuses utilisées ?',
          a: "Tous les récits, rappels et quiz s'appuient scrupuleusement sur le Noble Coran et les recueils de Hadiths prophétiques authentiques (Sahîh al-Bukhâri et Sahîh Muslim). Les références précises sont consultables dans le Livre du Savoir du jeu."
        },
        {
          q: 'Existe-t-il une version Android installable ?',
          a: "Oui, un fichier APK officiel est disponible en téléchargement direct et sécurisé pour les utilisateurs Android qui souhaitent installer l'icône sur leur écran d'accueil et profiter d'un confort hors-ligne optimal."
        }
      ]
    },
    preFooter: {
      badge: 'Chapitre 1 Complet • 100% Gratuit',
      title: 'Prêt à Vivre la Voie de la Sagesse ?',
      description: "Rejoignez plus de 1 200 joueurs et testez gratuitement l'aventure d'Othmân dès maintenant. Sans installation, sans inscription requise, directement dans votre navigateur.",
      ctaPlay: 'Tester le Jeu en 1 Clic (Gratuit)',
      downloadApk: "Télécharger l'APK Android (264 Mo)",
      benefit1: '✧ Sauvegarde instantanée',
      benefit2: '✧ Voix studio françaises',
      benefit3: '✧ Garanti sans pub intrusive'
    },
    tester: {
      badge: 'Espace Bêta-Testeurs',
      title: 'Votre Avis Compte Énormément',
      subtitle: "Aidez-nous à façonner la suite de l'épopée d'Othmân en partageant vos retours d'expérience.",
      formTitle: 'Questionnaire Bêta-Testeurs',
      formSubtitle: "Vos retours sincères façonnent l'aventure NOUR.",
      step: 'Étape',
      step1Title: '1. À propos de vous',
      step1Desc: 'Commençons par faire connaissance avec le joueur.',
      nameLabel: 'Quel est votre prénom ou pseudo ? (optionnel)',
      namePlaceholder: 'Ex : Rayan, Safia, Othmân...',
      ageLabel: 'Âge du joueur*',
      ageOptions: ['5-8 ans', '9-12 ans', '13-17 ans', '18 ans ou +'],
      firstTimeLabel: "C'est votre première fois sur NOUR ?",
      firstTimeYes: '✨ Oui, première fois',
      firstTimeNo: "🔁 Non, j'ai déjà joué",
      nextBtn: 'Suivant'
    },
    footer: {
      description: 'Un jeu de rôle narratif en 16-bit pixel art combinant aventures spirituelles, quiz vérifiés et défis bienveillants dans la vraie vie.',
      quickLinks: 'Liens Rapides',
      playGame: 'Jouer en Ligne (Gratuit)',
      downloadApk: "Télécharger l'APK Android",
      shareWhatsapp: 'Partager sur WhatsApp',
      copyLink: 'Copier le lien de la page',
      linkCopied: 'Lien copié dans le presse-papier !',
      subBrand: 'Jeu de Rôle Initiatique & Bienveillant',
      aboutText: "NOUR est une œuvre indépendante dédiée à l'apprentissage émotionnel, à la lutte contre les pensées négatives et à l'ancrage des valeurs éthiques universelles à travers le jeu vidéo.",
      madeWith: 'Fait avec bienveillance & passion pour tous les âges.',
      navTitle: 'Navigation',
      navHome: 'Accueil',
      navDemo: 'Démo du Waswâs',
      navChars: 'Personnages',
      navMechanics: 'Mécaniques de Jeu',
      navChapters: 'Les 5 Chapitres',
      navWisdom: 'Le Livre du Savoir',
      infoTitle: 'Informations',
      pegi: 'Classification : PEGI 3+ (Tout public)',
      format: 'Format : Web App (PWA) & APK Android',
      apkDrive: "Télécharger l'APK Android (Drive) ↗",
      languages: 'Langues : Français (avec calligraphies arabes)',
      support: 'Support : Navigateurs PC, Mac, iOS, Android',
      server: 'Serveur : Hébergé sur Firebase Hosting',
      copyright: '© 2026 NOUR — Le chemin commence. Tous droits réservés.',
      privacy: 'Confidentialité',
      faq: 'F.A.Q.',
      backToTop: 'Haut de page'
    },
    mobileSticky: {
      title: 'NOUR : Le RPG Islamique',
      subtitle: '100% Gratuit • Sans Inscription',
      freeText: '100% Gratuit • Sans Inscription',
      cta: 'Jouer (1 Clic)'
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
      wisdomBook: 'The Book of Knowledge',
      offers: 'Founder Offers',
      play: 'Play Now',
      apkAndroid: 'Android APK',
      musicOn: 'Audio Active',
      musicOff: 'Music',
      rpgSubtitle: 'The Initiatory Role-Playing Game',
      motDuConcepteur: 'A Word from the Designer'
    },
    hero: {
      badge: 'The Alliance of 16-Bit RPG Gaming & Islamic Education',
      titleLine1: 'NOUR — The Narrative Islamic RPG',
      titleLine2: 'Transforming everyday choices into an adventure',
      heroSubtitleDirect: 'The Epic of the Heart — From Solitude to Fraternity',
      combatQuizPillTitle: '⚔️ No swords, no destructive magic:',
      combatQuizPillDesc: 'In NOUR, battles are fought with Wisdom Quizzes. Defeat inner doubts (Waswâs) through knowledge, faith, and ethical discernment!',
      description: 'The pixel-art narrative RPG reconciling video game fun with thoughtful Islamic learning. Instead of violent combat, progress through Wisdom Quizzes, conquer inner doubts (Waswâs), and earn ethical XP.',
      ctaPlay: 'Play Free in Browser',
      ctaSubtext: 'Zero installation • Mobile & PC • No signup required',
      trustRating: '🧪 Collaborative Open Beta • Free Chapter 1 in 1 Click',
      studioVoicesBadge: '🎙️ French Voices & Pixel Art',
      adFreeBadge: '100% Ad-Free • Ethical',
      ctaDemo: 'Test a Quiz Combat (Waswâs)',
      ctaVideo: 'Watch Gameplay (32s)',
      feature1Title: 'Battles via Wisdom Quizzes',
      feature1Desc: 'Win duels against Waswâs with knowledge and moral discernment instead of weapons or destructive magic.',
      feature2Title: 'Islamic Quizzes & XP Rewards',
      feature2Desc: 'Engaging interactive quizzes on Tawheed, prophetic ethics (Adab), and hadiths to level up your character.',
      feature3Title: 'Moral Choices & Authentic Sources',
      feature3Desc: 'Narrative branching dilemmas strictly grounded in the Quran and authentic Sunnah.',
      stat1Label: 'Free Chapter 1',
      stat1Value: '100%',
      stat2Label: '5 Chapters',
      stat2Value: '5 Chapters',
      stat3Label: '16-Bit',
      stat3Value: '16-Bit Pixel Art',
      downloadApk: 'Download Android APK (Beta)',
      apkNote: '📱 Also available: Android Beta App (standalone APK)',
      frictionFree: '100% Free & No Registration Required',
      frictionDevice: 'Runs directly on Mobile & PC',
      frictionBackup: 'Automatic backup',
      cardBadge: 'Gameplay (32s)',
      cardOfficialWeb: 'Official Web Version',
      cardChapter1: 'Chapter 1: Overcoming Loneliness',
      cardJoinOthman: 'Join Othmân today',
      cardActiveServer: 'Active Server',
      cardApkDrive: 'APK Android (Drive) ↗',
      othmanQuote: '"The journey begins..."',
      waswasTitle: 'Le Waswâs',
      waswasRole: 'The Inner Shadow',
      featWaswasTitle: 'Quiz Battles against Waswâs',
      featWaswasDesc: 'Instead of weapons or destructive spells, each confrontation is a duel of knowledge and wisdom where you dispel doubt with enlightened answers.',
      featBridgesTitle: 'Knowledge Quizzes & XP Progression',
      featBridgesDesc: 'Validate your understanding and gain XP through educational quizzes on Tawheed, patience, and noble manners, accompanied by gentle ethical reminders.',
      featCrossroadsTitle: 'The Village Crossroads',
      featCrossroadsDesc: 'A signpost offers Othmân 5 directions: breaking the solitude, Hilm (gentleness), Sabr (patience), Birr (kindness towards parents) and the great Climax.',
      featKnowledgeTitle: 'The Book of Knowledge',
      featKnowledgeDesc: "An interactive collection based on the Noble Qur'an and authentic hadiths (Bukhari & Muslim) to cultivate Adab on a daily basis."
    },
    creatorLetter: {
      badge: 'A Word from the Designer • Genesis of an Ethical RPG',
      title: '"Passing on Faith and Wisdom to our Children in a World of Screens"',
      authorSubtitle: '✧ Abderrahmane El Malki • Father of 7 children • Web Developer & Designer at NOUR ✧',
      openLetter: 'Open Letter to Families & Players',
      authorName: 'Abderrahmane El Malki',
      authorBio: 'Digital ethics • Hijra to Morocco (2022)',
      greeting: 'As-salāmu ʿalaykum wa raḥmatullahi wa barakātuh,',
      dearParents: 'Dear brothers, dear sisters, dear parents,',
      p1: 'My name is Abderrahmane El Malki , I am 49 years old. After spending more than 45 years in France, married and father of 7 children, I made my hijra to Morocco in 2022.',
      p2: 'Like many of you, I am confronted every day with this challenge that is so dear to our hearts: how to pass on to our children the noble values of our beautiful religion , those which we ourselves received, in a world saturated with screens and often futile or violent content?',
      p3: 'Having worked in ethical digital technology since 2024, it was in 2026, after the birth of my daughter Noura , that I had the idea to design an Islamic video game unlike any other: a warm adventure RPG, combined with learning quizzes and simple real-life actions to progress through the story.',
      calloutHeader: 'What sets NOUR apart from all other games',
      calloutQuote: '"Here, there is no magic or destructive sword fights, but a much nobler and more essential struggle: the inner battle against one\'s own waswas (whispers and doubts), to bring about serenity and kindness."',
      p4: 'In a sun-drenched Eastern land, we follow young Othman and his mother, Noura . Each encounter becomes an opportunity for Othman to learn about his religion and about himself. Through four main chapters , he discovers Tawhid (Divine Unity), the danger of Shirk (associating partners with God), the strength of Sabr (patience), Shukr (gratitude), ʿIlm (beneficial knowledge), and many other fundamental virtues.',
      p5: 'All this in the light of the Holy Quran and the authentic hadiths of our beloved Prophet ﷺ and our pious predecessors. Being neither a student of religious sciences nor a scholar, I keep in mind the words of our scholars: transmitting knowledge with evidence, even humbly, is essential. This is why each word and each quiz mentions precisely the authentic source from which it is taken.',
      p6: 'The game is currently in Beta version, so please be forgiving! If you notice the slightest mistake, translation typo, or clumsiness, I will be immensely grateful to make the necessary corrections. A Muslim is the brother and the mirror of his brother, and it is in this spirit of mutual support that NOUR was shaped.',
      dua: '"May Allah make this project a source of good for our children, and may He count it as a good deed on our scales on the Day of Judgment. Āmīn."',
      signoff: 'Have a great journey on the Path of Wisdom!',
      designerTitle: 'Abderrahmane El Malki — Designer of NOUR',
      arabicPeace: 'والسلام عليكم ورحمة الله',
      testNotice: 'Try Chapter 1 for free with your children directly in your browser',
      testButton: 'Try the game (1 Click)',
      apkButton: 'APK Android',
      readMore: "Read Abderrahmane's full letter 📜",
      readLess: 'Show less ▴'
    },
    gameplayVideo: {
      badge: 'Live Demonstration',
      title: 'Experience the Adventure in Pixel Art',
      subtitle: 'Discover the warm atmosphere, interactive dialogues, and village crossroads.',
      liveIndicator: 'In-Game Session',
      playChapter1: 'Play Chapter 1 Now',
      downloadApk: 'Download APK (Drive)',
      openInNewTab: 'Open in a new tab',
      clickToStart: 'Click to start the video (32 seconds)',
      highlight1Title: 'Pixel Art & Poetry Crafts',
      highlight1Desc: 'Meticulously designed sets, golden twilight lighting and inspired soundscapes for a serene immersion.',
      highlight2Title: 'Spiritual Trials & Choices',
      highlight2Desc: 'Confront the inner whispers (Waswâs), tame anger with Hilm and choose gentleness guided by authentic Hadiths.',
      highlight3Title: 'The "Bridges of Nour" in Real Life',
      highlight3Desc: 'The game goes beyond the screen: complete concrete acts of kindness in your home to unlock the next part of the adventure.',
      ctaLaunch: 'Start the Adventure Immediately',
      ctaDownloadApk: 'Download the Android APK (Drive)'
    },
    combatDemo: {
      badge: 'Interactive Simulator',
      title: 'The Fight Against Waswas',
      subtitle: 'Faced with inner whispers that push you towards isolation, choose the prophetic attitude to restore serenity of heart.',
      waswasDefinition: 'Waswâs represents inner whispers of doubt, social anxiety, or hesitation. In NOUR, battles are never physical: victory is earned through mindfulness, faith, and peaceful resolve.',
      scene: 'Scene: The Crossroads',
      challenge: 'Challenge: The fear of rejection',
      reset: 'Reset',
      othmanStatus: 'Sensitive to the judgments of others',
      othmanSerenity: '% Serenity',
      waswasStatus: 'Active whisper in the mind',
      waswasTrouble: '% Trouble',
      waswasTitle: 'The Shadow of Waswas',
      waswasWhisperHeader: "The whisper of Waswâs in Othmân's ear:",
      waswasWhisper: '"Look at those young people in the distance... They don\'t know you. If you get closer, they\'ll think you\'re strange and make fun of you. Stay back, it\'s much safer..."',
      shadowWhisper: '"Stay inside... Nobody wants to be your friend. They will make fun of you."',
      instruction: 'Select a spiritual response to clear away the mist:',
      question: 'What answer do you give through Othman?',
      action1Title: 'Istiʿādhah (Seek Refuge)',
      action1Desc: '"Aʿūdhu billāhi mina sh-shayṭān" — Immediately calms the racing mind.',
      action2Title: 'Contemplate Taʿāruf',
      action2Desc: 'Remember that mankind was created for mutual brotherhood and connection.',
      action3Title: 'Salām & Smile',
      action3Desc: 'Take the first sincere step towards others (an act of Charity / Sadaqah).',
      action4Title: 'Active Sabr (Patience)',
      action4Desc: 'Step forward with dignity without fearing rejection or prejudice.',
      optionATitle: 'Option A: Give in to doubt',
      optionADesc: '"That\'s true... I\'m too shy, I\'d better turn around and go home."',
      optionAEffect: '-20 Serenity • +25 Waswâs',
      optionBTitle: 'Option B: Assert oneself through anger',
      optionBDesc: '"I\'m going to shout and stomp my feet so they\'ll have to pay attention to me!"',
      optionBEffect: '+10 Waswâs (Fruitless Anger)',
      optionCTitle: 'Option C: Discernment & Faith',
      optionCDesc: '“I seek refuge in Allah. My intention is pure: a smile is charity, I move forward in peace.”',
      optionCEffect: '✨ +100 Serenity • Waswâs Cleared!',
      victoryTitle: 'Inner Victory! New Path Unlocked',
      victoryDesc: 'Othmân breathes deeply, recites Istiʿādhah, and steps forward with dignity. The Path of Patience (Sabr) is unlocked.',
      replayDemo: 'Try the simulator again',
      footerNote: 'In NOUR, no battle uses physical violence. Victory is achieved through clarity of heart, faith, and ethical word.',
      victoryPlay: 'Launch Complete Chapter 1',
      victoryReplay: 'Replay Demo'
    },
    mechanics: {
      badge: 'A Unique Gameplay',
      title: 'A Game Connected to Real Life',
      subTagline: '✧ Inner Adventure RPG • Interactive Ethics ✧',
      subtitle: 'Nour does not simply tell a story: it invites the player to transform their own daily life.',
      mech1Title: 'Spiritual Warfare',
      mech1Desc: 'Identify the traps of Waswâs and use the appropriate invocations to keep a clear mind.',
      mech1Badge: 'Spiritual Combat',
      mech1Quote: '"This is not a magic formula, Othman. You have sought refuge with Allah with your heart. Now, hold fast to this statement and proceed with a firm step." — Noura',
      mech1Points: [
        'Dynamic Serenity Gauge in the face of onslaughts of doubt',
        'Defusing intrusive thoughts through Istiʿādhah',
        'Victories through heartfelt presence and virtuous action'
      ],
      mech2Title: 'The Bridges of Nour',
      mech2Desc: 'Every good deed accomplished in real life opens a new path in the adventure. Honor and trust-based: no photos or private data requested. Ideal for families.',
      mech2Badge: 'Off-Screen Actions',
      mech2Quote: '"Did you think about tidying your bed or your corner this morning? Take a minute in the real world... the game is waiting for you here!"',
      mech2Points: [
        'Meaningful offline kindness missions based on personal integrity and trust',
        '100% privacy-friendly: no cameras, no personal data tracked',
        'Ideal for inspiring positive family conversations between parents and children'
      ],
      mech3Title: 'The Post at the Paths',
      mech3Desc: 'A symbolic central crossroads where each branch explores a fundamental virtue.',
      mech3Badge: 'The Post of Paths',
      mech3Quote: '"The path doesn\'t begin beneath your feet, it begins in your heart. When the intention is sincere, every step finds its meaning." — Noura',
      mech3Points: [
        'Clear moral choices to guide Othman towards his destiny',
        'No punitive game-overs: kind learning and resilience',
        'An accessible and captivating progression through 5 main chapters'
      ],
      mech4Title: 'The Book of Knowledge',
      mech4Desc: 'Teachings drawn from the noble Quran and the authentic prophetic tradition.',
      mech4Badge: 'Authentic Anchoring',
      mech4Quote: '"In the upper right corner, the Book of Knowledge contains the ethics and hadith fact sheets that you unlock as you progress."',
      mech4Points: [
        'Surah 49, Verse 13',
        'Jami` at-Tirmidhi (1956)',
        'Pedagogy & Ethics'
      ]
    },
    characters: {
      badge: 'Travel Companions',
      title: 'Meet the Heroes of the Saga',
      subTagline: '✧ Protagonists • Crossed Destinies • Allies & Trials ✧',
      subtitle: 'Endearing personalities who guide Othmân throughout his apprenticeship.',
      traitsTitle: 'Fundamental Traits',
      attributesTitle: 'Attributes of the Heart & Mind',
      statWisdom: 'Wisdom & Discernment',
      statPeace: 'Inner Peace & Faith',
      statCourage: 'Courage Moral',
      statHilm: 'Al-Hilm (Soy Master)',
      othmanName: 'Othmân',
      othmanRole: 'The Young Hero',
      othmanQuote: '“ And if I get closer… will they find me strange? Where do you even begin when you feel invisible? ”',
      othmanDesc: 'A sensitive and thoughtful young boy, about to leave the comforting safety of his family terrace. Faced with the noises of the village and the fear of being rejected, he learns to transform his hesitations into genuine courage.',
      othmanTraits: ['Sincere heart', 'Sensible', 'Travel stick', 'Quest for friendship'],
      nouraName: 'Noura',
      nouraRole: 'The Mother & Mentor',
      nouraQuote: '"The path doesn\'t begin beneath your feet, Othmân. It begins in your heart. When the intention is sincere, every step finds its meaning."',
      nouraDesc: "Othmân's mother and his moral compass. Always present to soothe anxieties with gentle words, she teaches that true strength lies in the constancy of small gestures and a kind gaze.",
      nouraTraits: ['Infinite patience', 'Maternal guide', 'Daily wisdom', 'Deep listening'],
      waswasName: 'The Shadow of Waswas',
      waswasRole: 'The Internal Adversary',
      waswasQuote: '"You will never succeed... Stay in bed, the mountain is too high, no one is waiting for you..."',
      waswasDesc: 'A whispering mist without physical form, born of doubt, fatigue, and the fear of judgment. It has no real power other than magnifying Othmân\'s fears to freeze him in inaction.',
      waswasTraits: ['Toxic whispers', 'Elusive mist', 'Fear amplifier', 'Dispelled by faith'],
      sageName: 'The Old Sage',
      sageRole: 'Guardian of Knowledge',
      sageQuote: '"Choose your direction at the village crossroads, for every valuable deed begins with a sincere intention."',
      sageDesc: 'The venerable elder who welcomes Othmân at the crossroads. Witness to travelers seeking purpose, he imparts the teachings of the Book of Knowledge to illuminate their path.',
      sageTraits: ["Book of Knowledge", "Elders' memory", 'Big picture vision', 'Clarity of mind']
    },
    roadmap: {
      badge: 'The Complete Saga',
      title: 'The 5 Chapters Roadmap',
      subtitle: 'A gradual journey through the great virtues of the heart.',
      statusFree: '✓ Available (Free)',
      statusFounder: '✨ Founder Pack ($4.99)',
      statusUpcoming: '🔒 Coming Soon',
      playNow: 'Play Now',
      founderPack: 'Unlock Founder Pack',
      comingSoon: 'Coming Soon',
      chooseChapter: '🧭 Choose a Chapter',
      virtueToMaster: 'Central Virtue to Master',
      keyTrialsQuests: 'Chapter Key Trials & Quests',
      playChapter1Now: 'Play Chapter 1 Now',
      founderPackUnlock: "Unlockable in the Founder's Pack",
      tab1: '01 Overcoming Loneliness',
      tab2: '02 The Hilm path',
      tab3: '03 The Path of Enlightenment',
      tab4: '04 What you still have',
      tab5: '05 The Inner Mountain',
      chapters: [
        {
          id: 1,
          number: '01',
          title: 'Overcoming Loneliness',
          arabicTitle: 'طريق الصداقة والمؤانسة',
          subtitle: 'The path of friendship and companionship',
          status: 'available',
          statusLabel: 'Chapter 01 • Chapter 1 Complete — Playable Now',
          synopsis: 'Othmân leaves his bed and must cross the alleyway to the large crossroads. Confronted with the first whispers of Waswâs and the apprehension of speaking to other village youth, he discovers how a simple smile and kind words unlock the most guarded doors.',
          virtue: 'Opening of the Heart & Social Courage',
          location: 'The Terrace, Oak Crossroads & The Valley',
          bgImage: '/game-assets/carrefour.jpg',
          highlights: [
            'Dispelling the first onslaught of Waswâs mist',
            'The Bridge of Nour: Tidying your bed in real life',
            'Unlocking Adab of Speech in the Book of Knowledge',
            'Connecting with the group of village children'
          ]
        },
        {
          id: 2,
          number: '02',
          title: 'The Hilm path',
          arabicTitle: 'طريق الحلم وضبط النفس',
          subtitle: 'The path of dreams and self-control',
          status: 'upcoming',
          statusLabel: 'Chapter 2 — Finalization in progress',
          synopsis: 'In front of the fruit market stalls, an unfair shove knocks over the baskets. Othmân feels the blood rushing to his temples. To progress, he will have to tame the flare of irritation and experience the liberating power of forgiveness and gentleness.',
          virtue: 'Al-Hilm (Gentleness, Clemency & Composure)',
          location: 'The Fruit Market & Pottery Workshop',
          bgImage: '/game-assets/marche.jpg',
          highlights: [
            'Breathing system and defusing aggression',
            'Avoiding the trap of hurtful replies',
            "Mending someone else's mistake without pride",
            'Real action: Calming a dispute around you'
          ]
        },
        {
          id: 3,
          number: '03',
          title: 'The Path of Enlightenment',
          arabicTitle: 'طريق التوكل واليقين',
          subtitle: 'The path of trust and certainty',
          status: 'development',
          statusLabel: 'Chapter 3 — In development',
          synopsis: 'At the foot of the cliff trail, fog masks the horizon. Othmân hesitates to step forward. He learns that trust is not the absence of effort, but tying one\'s mount while leaving the outcome in the hands of the Creator.',
          virtue: 'At-Tawakkul (Sincere Effort & Trust in God)',
          location: 'The Mist Trail & High Plateaus',
          bgImage: '/game-assets/waswas_bg.jpg',
          highlights: [
            'Taking practical steps before expecting results',
            'The riddle of the shepherd and the rope knot',
            'Strengthening determination in the face of the unknown',
            'Unlocking the supplication for decisive choices'
          ]
        },
        {
          id: 4,
          number: '04',
          title: 'What you still have',
          arabicTitle: 'طريق بر الوالدين والإحسان',
          subtitle: 'The path of honoring and showing kindness to parents',
          status: 'development',
          statusLabel: 'Chapter 4 — In Screenwriting',
          synopsis: 'After a morning outburst of irritation with his mother, Othman rushes out of the house. Taking refuge under a large tree with his childhood friend, they silently watch a bird feeding its nest. An unexpected and profound revelation will shake his perspective on what he thought was ordinary.',
          virtue: 'Birr al-Wālidayn (Kindness Towards Parents & Gratitude)',
          location: 'The Family Home & Tree of Confidences',
          bgImage: '/game-assets/teaser_chapitre4.jpg',
          highlights: [
            'Defusing whispers of irritation and impatience',
            'Meditation under the great oak: the bird and sustenance',
            'An unexpected heart-to-heart under the branches',
            'Realizing the priceless value of loved ones'
          ]
        },
        {
          id: 5,
          number: '05',
          title: 'The Inner Mountain',
          arabicTitle: 'جبل الصبر والثبات',
          subtitle: 'The mountain of patience and perseverance',
          status: 'development',
          statusLabel: 'Chapter 5 — The Climax of the Saga',
          synopsis: 'The final ascent to the summit of the mountain. Facing physical exhaustion and adversity, Othman brings together all the acquired virtues to overcome the ultimate trial and spread the Light (Nour) across the entire valley.',
          virtue: 'As-Sabr (Noble Endurance & Constancy)',
          location: 'The Celestial Peak Sanctuary',
          bgImage: '/game-assets/vallee.jpg',
          highlights: [
            'The ultimate test against the Breath of Shadows',
            'Full harmony of the Tree of Wisdom',
            'Crowning of the hero and blessing of the valley',
            'Unlocking Free Roam mode and side stories'
          ]
        }
      ]
    },
    wisdomBook: {
      badge: 'Authentic Anchorage',
      title: 'The Book of Knowledge',
      subTagline: '✧ Bayt al-Hikma • Revealed Manuscripts • Islamic Ethics ✧',
      subtitle: 'Teachings drawn from the noble Quran and the authentic prophetic tradition.',
      cardsUnlocked: 'Story Cards Unlocked',
      sheets: '4 Sheets',
      wordsOfGuidance: '— Words of Guidance & Light —',
      revealedSource: '— Revealed Source: Narrated by al-Bukhari & Muslim',
      spiritualScope: 'Spiritual Scope & Concrete Action',
      category: 'Category:',
      verseTitle: 'Key Verse on Brotherhood',
      verseArabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
      verseMeaning: '“O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another.” (Surah Al-Hujurat 49:13)',
      verseRef: 'Surah 49, Verse 13',
      hadithTitle: 'Hadith on the Smile & Giving',
      hadithArabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
      hadithMeaning: '“Your smile for your brother is a charity (Sadaqah).” (Narrated by at-Tirmidhi)',
      hadithRef: 'Jami` at-Tirmidhi (1956)',
      valueTitle: 'Pedagogy & Ethics',
      valueDesc: 'Every moral concept is thoroughly researched, verified, and delivered with warmth and clarity.',
      cards: [
        {
          id: 'adab_parole',
          title: 'The Adab of the Word',
          arabicPhrase: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
          concept: 'Speak good or remain silent',
          quote: '“ Whoever believes in God and the Last Day should speak good or remain silent. ”',
          source: 'Narrated by al-Bukhari & Muslim',
          lesson: 'The tongue is the mirror of the heart. Holding back unnecessary or hurtful words is a sign of superior maturity and protects inner peace.',
          category: 'manners'
        },
        {
          id: 'sourire_aumone',
          title: 'The Radiance of a Smile',
          arabicPhrase: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
          concept: 'Universal Kindness',
          quote: '“ Your smile for your brother is a charity for you. ”',
          source: 'Narrated by at-Tirmidhi (Authentic)',
          lesson: 'A simple sincere smile is often enough to break the ice of shyness and dispel feelings of invisibility in oneself and others.',
          category: 'serenity'
        },
        {
          id: 'istiadha_protection',
          title: "The Shield of Isti'ādhah",
          arabicPhrase: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
          concept: 'Dispelling toxic thoughts',
          quote: '“ I seek refuge in Allah from the outcast devil. ”',
          source: 'Quranic Word & Prophetic Teaching',
          lesson: 'Faced with intrusive thoughts telling you you are worthless, refocus your heart on divine protection and resume your walk with calm.',
          category: 'courage'
        },
        {
          id: 'ordre_espace',
          title: 'The Harmony of Everyday Life',
          arabicPhrase: 'النَّظَافَةُ وَحُسْنُ التَّدْبِيرِ',
          concept: 'The Bridges of Nour (Real Action)',
          quote: '“ The order of the outer world calms the inner turmoil of the mind. ”',
          source: 'Educational Wisdom & Pedagogy of NOUR',
          lesson: 'Taking two minutes each morning to make one’s bed and tidy one’s room prepares the mind to overcome the day’s major challenges.',
          category: 'family'
        }
      ]
    },
    gallery: {
      badge: 'Visual Universe & Atmosphere',
      title: 'The Panoramas of NOUR',
      subtitle: 'A poetic art direction that blends the charm of retro RPGs with the luminous warmth of Eastern settings.',
      items: [
        {
          id: 'vallee',
          title: 'Dawn over the Valley',
          location: 'Territory of Opening',
          image: '/game-assets/vallee.jpg',
          description: "The morning sun warms the white stones of Othman's village, heralding the first day of his great journey."
        },
        {
          id: 'carrefour',
          title: 'The Village Crossroads',
          location: 'Crossroads of the Trails',
          image: '/game-assets/carrefour.jpg',
          description: 'The village crossroads where a signpost offers Othmân the different directions for each chapter.'
        },
        {
          id: 'waswas',
          title: 'The Whispering Gorge',
          location: 'Sanctuary of Trials',
          image: '/game-assets/waswas_bg.jpg',
          description: 'The narrow passage under the cliff where the insidious mist tries to paralyze the young hero with his doubts.'
        },
        {
          id: 'chambre',
          title: 'The Family Room',
          location: 'The Nour Bridge 01',
          image: '/game-assets/chambre.jpg',
          description: "The intimacy of the home where the first challenge arises: overcoming laziness and ordering one's living space."
        },
        {
          id: 'verger',
          title: 'The Almond Orchard',
          location: 'Gratitude Trail',
          image: '/game-assets/verger.jpg',
          description: 'The flowering trees perfume the fresh air of the hills, reminding us of the hidden benefits of nature.'
        },
        {
          id: 'affiche',
          title: "NOUR's Art Poster",
          location: 'Cover of the Epic',
          image: '/game-assets/affiche_nour.jpg',
          description: "The iconic illustration from the game celebrating Othman's journey, his walking stick, and the light in his heart."
        }
      ]
    },
    pricing: {
      badge: 'Support & Unblocking',
      title: "Join the Founders' Adventure",
      subtitle: 'Support an ethical independent project and immediately unlock the following chapters.',
      col1Tag: 'Artisan Tea',
      col1Badge: 'Ethical Support',
      col1Title: 'Project Support',
      col1Price: '1,99 €',
      col1SubPrice: "/ don unique d'encouragement",
      col1Desc: 'A warm and symbolic gesture to encourage our studio and fund actors\' voices.',
      col1Points: [
        'Offering a hot cup of tea and a big word of encouragement to the creators',
        'To make Chapter 1 available to everyone for free',
        '100% Ethical, with no hidden subscriptions'
      ],
      col1Cta: 'Offer a Tea (€1.99)',
      col2Promo: '-38% INTRODUCTORY OFFER',
      col2Tag: 'Chapters 2 & 3 Included',
      col2Badge: '-38% INTRODUCTORY OFFER',
      col2Title: "Founder's Pack",
      col2Price: '4,99 €',
      col2OldPrice: '7,99 €',
      col2Limited: 'Limited Offer',
      col2Desc: 'Unlock full and immediate access to the next two major chapters.',
      col2Ch2Title: '🌾 Chapter 2: The Hilm Road',
      col2Ch2Desc: 'Mastering the fire of anger through gentleness in the marketplace.',
      col2Ch3Title: '🩹 Chapter 3: The Child in a Splint (Sabr)',
      col2Ch3Desc: 'Patience in the face of illness, prophetic remedies & fraternal support.',
      col2GuaranteeTitle: '🛡️ 7-Day Money-Back Guarantee',
      col2GuaranteeDesc: 'Explore the adventure with peace of mind. Full refund upon simple email to elmalkidigital@gmail.com within 7 days, no questions asked.',
      col2Cta: 'Unlock Chapters 2 & 3 (€4.99)',
      col3Badge: 'COMING SOON',
      col3Tag: 'Chapter 4: Birr al-Wālidayn',
      col3Teaser: 'Exclusive Teaser',
      col3Title: '"What you still have"',
      col3Subtitle: 'Kindness Towards Parents & Gratitude',
      col3Desc: 'After a morning outburst of irritation with his mother, Othman rushes out of the house. Taking refuge under a large tree with his childhood friend, they silently watch a bird feeding its nest. An unexpected and profound revelation will shake his perspective on what he thought was ordinary.',
      col3Points: [
        {
          title: '🕊️ Meditation & Nature',
          desc: 'Observing the bird that leaves with an empty stomach and returns to feed its nest.'
        },
        {
          title: '💭 The Meeting Under the Tree',
          desc: 'A sincere discussion that invites us to reconsider our most precious family ties.'
        }
      ],
      col3Cta: 'Discover the Complete Roadmap'
    },
    testimonials: {
      badge: '🧪 Collaborative Open Beta',
      title: 'Let’s Shape the NOUR Adventure Together',
      subTagline: '✧ No Fake Reviews • Your Genuine Feedback Shapes the Game ✧',
      subtitle: 'NOUR is a blooming independent project. Chapter 1 is 100% free and open to everyone: we need your honest feedback, player impressions, and parental insights to craft the best possible experience.',
      step1Badge: 'Step 1',
      step1Title: 'Play Chapter 1 (Free)',
      step1Desc: 'Launch the game in 1 click right in your browser. Experience voice-acted narrative, quiz combats, and Othmân’s quest with zero download required.',
      step2Badge: 'Step 2',
      step2Title: 'Share Unfiltered Feedback',
      step2Desc: 'What did you enjoy? Did your kids connect with the story? Any confusing parts? Share your impressions in 2 minutes via our form or on WhatsApp.',
      step3Badge: 'Step 3',
      step3Title: 'Contribute to Future Chapters',
      step3Desc: 'Your puzzle suggestions, ethical dilemmas, and constructive critique will directly shape Chapters 2 to 5. Top beta contributors will be credited in the game!',
      ctaForm: 'Fill out Beta Feedback Form (2 min) ✍️',
      ctaWhatsapp: 'Send Direct Feedback on WhatsApp 💬',
      guaranteeTitle: '100% Transparent & Ethical Commitment',
      guaranteeDesc: 'No fabricated reviews here. We believe in authenticity, dedicated craftsmanship, and community collaboration to create something truly exceptional.',
      pegi: 'Beta Collaborative Project'
    },
    familySection: {
      badge: 'Designed for Families & Serenity',
      title: 'Who is NOUR designed for?',
      subtitle: 'The ideal solution for parents: reconciling the irresistible fun of video games with authentic, educational, and benevolent Islamic learning.',
      quizBadge: 'Gaming & Learning',
      quizTitle: 'The Bridge Between Gaming & Islamic Education',
      quizDesc: 'No more boring lectures or passive screen time: children enthusiastically learn Tawheed, prophetic manners (Adab), and hadiths through engaging interactive quizzes embedded in the adventure.',
      ageBadge: 'Ages 8 and up',
      ageTitle: 'Kids, Teens & Parents',
      ageDesc: 'Built to engage children from age 8 while offering teens and parents a reflective and meaningful narrative.',
      parentsBadge: 'Parental Bond',
      parentsTitle: 'Encouraging Family Dialogue',
      parentsDesc: 'An ideal interactive companion to spark positive conversations around emotional intelligence and everyday values.',
      ethicsBadge: '100% Ethical',
      ethicsTitle: 'Zero Ads & Absolute Privacy',
      ethicsDesc: 'No annoying ads, no forced account creation. Real-life challenges are honor-based: no camera, photos or personal data collected.',
      sourcesBadge: 'Authentic',
      sourcesTitle: 'Verified Sources & Universal Values',
      sourcesDesc: "Grounded in the Noble Qur'an and authentic hadiths (Bukhari & Muslim), emphasizing Adab, patience, and kind character.",
      devicesBadge: 'Universal Access',
      devicesTitle: '1-Click on Mobile, Tablet & PC',
      devicesDesc: 'Runs immediately inside your web browser (Safari iOS, Chrome Android, desktop) without any mandatory app download.',
      cardCta: 'Start playing together for free'
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Everything You Need to Know About the Project',
      subtitle: 'Clear answers to your questions about accessibility, pricing and platforms.',
      items: [
        {
          q: 'Is the game free? Are there any hidden fees?',
          a: 'The complete Chapter 1 (« Overcoming Loneliness ») is 100% free with no commitment. You can play right away without entering credit card info. An optional low-cost Founder’s Pack is available for those who wish to support our indie animation studio and french voice actors.'
        },
        {
          q: 'Do I need to create an account or download an app?',
          a: 'No, no registration or password is required! The game starts with 1 click directly in your preferred mobile or desktop browser. Progress is saved automatically to your device.'
        },
        {
          q: 'Which devices does NOUR support?',
          a: 'NOUR works seamlessly across all smartphones (iPhone via Safari, Android via Chrome), tablets (iPad, Android tablets), and computers (Windows, Mac, Linux). An official standalone Android APK is also available for offline play.'
        },
        {
          q: 'Are there any ads or predatory micro-transactions?',
          a: 'None at all. The game is guaranteed 100% ad-free, banner-free, and popup-free. It provides a peaceful, ethical, and wholesome digital environment that respects players’ attention.'
        },
        {
          q: 'What age is recommended and how can parents participate?',
          a: 'NOUR is recommended from age 8 and up. Parents can easily play alongside their children or discuss Othmân’s choices and real-life deeds together after each session.'
        },
        {
          q: 'How do the "Bridges of Nour" (real-life challenges) work?',
          a: 'At pivotal narrative points, the game invites the player to accomplish a kind deed in their home (tidying a room, expressing gratitude, smiling). This operates 100% on honor and personal reflection: no photos, videos, or GPS tracking are ever requested.'
        },
        {
          q: 'What religious and ethical sources are used?',
          a: "All stories, reminders, and quizzes are faithfully based on the Noble Qur'an and authentic prophetic hadith collections (Sahih al-Bukhari and Sahih Muslim). Precise references are viewable in the in-game Book of Knowledge."
        },
        {
          q: 'Is there an installable Android version available?',
          a: 'Yes, an official APK file is provided for direct and secure download for Android users who prefer having the app icon on their home screen with offline capability.'
        }
      ]
    },
    preFooter: {
      badge: 'Chapter 1 Complete • 100% Free',
      title: 'Ready to Live the Path of Wisdom?',
      description: "Join over 1,200 players and try Othman's adventure for free right now. No installation, no registration required, directly in your browser.",
      ctaPlay: 'Try the game in 1 click (Free)',
      downloadApk: 'Download the Android APK (264 MB)',
      benefit1: '✧ Instant backup',
      benefit2: '✧ French studio voices',
      benefit3: '✧ Non-intrusive pub guarantee'
    },
    tester: {
      badge: 'Beta Testers Area',
      title: 'Your opinion matters a great deal.',
      subtitle: "Help us shape the next chapter of Othman's epic by sharing your feedback.",
      formTitle: 'Beta Tester Questionnaire',
      formSubtitle: 'Your honest feedback shapes the NOUR adventure.',
      step: 'Step',
      step1Title: '1. About you',
      step1Desc: "Let's start by getting to know the player.",
      nameLabel: 'What is your first name or nickname? (optional)',
      namePlaceholder: 'Ex: Rayan, Safia, Othman...',
      ageLabel: "Player's Age*",
      ageOptions: ['5-8 years old', '9-12 years old', '13-17 years old', '18 years or older'],
      firstTimeLabel: 'Is this your first time on NOUR?',
      firstTimeYes: '✨ Yes, first time',
      firstTimeNo: "🔁 No, I've already played",
      nextBtn: 'Following'
    },
    footer: {
      description: 'A 16-bit pixel art narrative role-playing game combining spiritual adventures, verified quizzes, and benevolent real-life challenges.',
      quickLinks: 'Quick Links',
      playGame: 'Play Online (Free)',
      downloadApk: 'Download the Android APK',
      shareWhatsapp: 'Share on WhatsApp',
      copyLink: 'Copy the page link',
      linkCopied: 'Link copied to clipboard!',
      subBrand: 'Initiatory & Benevolent Role-Playing Game',
      aboutText: 'NOUR is an independent work dedicated to emotional learning, combating negative thoughts, and anchoring universal ethical values through video games.',
      madeWith: 'Made with kindness & passion for all ages.',
      navTitle: 'Navigation',
      navHome: 'Welcome',
      navDemo: 'Demo of Waswâs',
      navChars: 'Characters',
      navMechanics: 'Game Mechanics',
      navChapters: 'The 5 Chapters',
      navWisdom: 'The Book of Knowledge',
      infoTitle: 'Information',
      pegi: 'Classification: PEGI 3+ (General Audiences)',
      format: 'Format : Web App (PWA) & APK Android',
      apkDrive: 'Download the Android APK (Drive) ↗',
      languages: 'Languages: French (with Arabic calligraphy)',
      support: 'Support : Navigateurs PC, Mac, iOS, Android',
      server: 'Server: Hosted on Firebase Hosting',
      copyright: '© 2026 NOUR — The journey begins. All rights reserved.',
      privacy: 'Privacy',
      faq: 'F.A.Q.',
      backToTop: 'Back to Top'
    },
    mobileSticky: {
      title: 'NOUR: The Islamic RPG',
      subtitle: '100% Free • Instant Play',
      freeText: '100% Free • No Registration Required',
      cta: 'Play (1 Click)'
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
      rpgSubtitle: 'لعبة الأدوار التربوية والروحية',
      motDuConcepteur: 'كلمة المطور'
    },
    hero: {
      badge: 'الجمع المبتكر بين متعة ألعاب RPG والتربية الإسلامية الهادفة',
      titleLine1: 'نُور — لعبة الأدوار الروائية الإسلامية',
      titleLine2: 'تحوّل مواقف الحياة اليومية إلى مغامرة قيم',
      heroSubtitleDirect: 'ملحمة القلب — من العزلة إلى الألفة والأخوة',
      combatQuizPillTitle: '⚔️ بلا سيوف وبلا سحر هدّام :',
      combatQuizPillDesc: 'في نُور، معارك اللعبة تُخاض باختبارات الحكمة (الكويزات) والمعرفة. كل نزال ضد الوسواس يُحسم بالعلم واليقين الأخلاقي!',
      description: 'لعبة الأدوار الروائية التي تجمع بين متعة ألعاب الفيديو والتربية الإسلامية الهادفة. بدلاً من القتال العنيف، يتقدم أطفالكم باختبارات الحكمة ويدحرون وساوس الشك ويكسبون نقاط الإيمان.',
      ctaPlay: 'العب مجاناً في المتصفح',
      ctaSubtext: 'دون تثبيت • للجوال والكمبيوتر • دون تسجيل',
      trustRating: '🧪 نسخة تجريبية مفتوحة • الفصل الأول مجاني بنقرة واحدة',
      studioVoicesBadge: '🎙️ أصوات بالفرنسية وبيكسل آرت',
      adFreeBadge: '١٠٠٪ دون إعلانات • أخلاقية',
      ctaDemo: 'جرّب مواجهة الوسواس (كويز)',
      ctaVideo: 'استكشف أسلوب اللعب (٣٢ ث)',
      feature1Title: 'معارك باختبارات الحكمة (كويز)',
      feature1Desc: 'انتصر في النزالات ضد الوسواس بحسن الاختيار والعلم النافع بدلاً من السيوف والسحر.',
      feature2Title: 'كويزات إسلامية ونقاط خبرة (XP)',
      feature2Desc: 'اختبارات تفاعلية مشوقة في التوحيد والآداب والأحاديث النبوية لتطوير شخصيتك.',
      feature3Title: 'خيارات أخلاقية ومصادر موثوقة',
      feature3Desc: 'مسارات وقرارات روائية مستندة إلى القرآن الكريم وصحيح السنة.',
      stat1Label: 'الفصل الأول مجاناً',
      stat1Value: '١٠٠٪',
      stat2Label: 'ملحمة متكاملة',
      stat2Value: '٥ فصول',
      stat3Label: 'عالم بصري كلاسيكي',
      stat3Value: 'بيكسل آرت ١٦ بت',
      downloadApk: 'تحميل تطبيق أندرويد (نسخة بيتا)',
      apkNote: '📱 متوفر أيضاً: تطبيق أندرويد التجريبي (ملف APK مستقل)',
      frictionFree: '١٠٠٪ مجاناً ودون تسجيل',
      frictionDevice: 'تعمل مباشرة على الجوال والحاسوب',
      frictionBackup: 'حفظ تلقائي للتقدم',
      cardBadge: 'استعراض أسلوب اللعب (٣٢ ث)',
      cardOfficialWeb: 'النسخة الرسمية للمتصفح',
      cardChapter1: 'الفصل الأول : التغلب على العزلة',
      cardJoinOthman: 'رافق عثمان في رحلته اليوم',
      cardActiveServer: 'الخادم نشط وجاهز',
      cardApkDrive: 'تطبيق أندرويد (درايف) ↗',
      othmanQuote: '« الرحلة تبدأ هنا... »',
      waswasTitle: 'الوسواس',
      waswasRole: 'الظل الداخلي',
      featWaswasTitle: 'معارك الكويز ضد الوسواس',
      featWaswasDesc: 'بدلاً من الأسلحة أو السحر الهدام، كل مواجهة هي مبارزة في العلم والحكمة تدحر فيها وساوس الشك بالإجابات والخيارات الصائبة.',
      featBridgesTitle: 'كويزات المعرفة ونقاط XP',
      featBridgesDesc: 'اكسب نقاط الخبرة وعزز حصيلتك المعرفية باختبارات تربوية في التوحيد والحلم وحسن الخلق، مع تذكيرات طيبة بالحياة اليومية.',
      featCrossroadsTitle: 'مفترق طرق القرية',
      featCrossroadsDesc: 'عمود خشبي تاريخي يوجه عثمان إلى ٥ مسارات قلبية : كسر العزلة، الحِلم، الصبر، بر الوالدين والذروة الكبرى.',
      featKnowledgeTitle: 'كتاب الحكمة',
      featKnowledgeDesc: 'مكتبة تفاعلية مستندة إلى القرآن الكريم وصحيح السنة النبوية لغرس الآداب والفضائل في الحياة اليومية.'
    },
    creatorLetter: {
      badge: 'كلمة المطور • رسالة من القلب',
      title: '« غرس الإيمان والحكمة في قلوب أبنائنا في زمن الشاشات »',
      authorSubtitle: '✧ عبد الرحمن المالكي • أب لـ ٧ أطفال • مطور ويب ومصمم لعبة نـور ✧',
      openLetter: 'رسالة مفتوحة إلى العائلات واللاعبين',
      authorName: 'عبد الرحمن المالكي',
      authorBio: 'التحول الرقمي الأخلاقي • الهجرة إلى المغرب (٢٠٢٢)',
      greeting: 'السلام عليكم ورحمة الله وبركاته،',
      dearParents: 'إخواني وأخواتي وأولياء الأمور الأفاضل،',
      p1: 'اسمي عبد الرحمن المالكي، أبلغ من العمر ٤٩ عاماً. بعد أن قضيت أكثر من ٤٥ عاماً في فرنسا، متزوج وأب لـ ٧ أطفال، قمت بفضل الله بالهجرة إلى المغرب عام ٢٠٢٢.',
      p2: 'وككثير منكم، أواجه يومياً هذا التحدي الكبير الذي يمس قلوبنا جميعاً: كيف ننقل لأبنائنا قيم ديننا الحنيف النبيلة في عالم مليء بالشاشات والمحتويات التافهة أو العنيفة؟',
      p3: 'من خلال عملي في المجال الرقمي الأخلاقي منذ عام ٢٠٢٤، جاءتني الفكرة في عام ٢٠٢٦، بعد ولادة ابنتي نورة، لتصميم لعبة فيديو إسلامية فريدة من نوعها: لعبة أدوار دافئة ومشوقة، تجمع بين أسئلة الحكمة وتطبيقات عملية في الحياة الواقعية للمضي قدماً في القصة.',
      calloutHeader: 'ما يميز لعبة «نور» عن غيرها من الألعاب',
      calloutQuote: '« هنا لا وجود للسحر أو المعارك المدمرة، بل جهاد أسمى وأهم: مجاهدة النفس والخواطر والوساوس، لإشراق الطمأنينة والخير في القلب. »',
      p4: 'في ربوع مشرقية دافئة، نرافق الفتى عثمان ووالدته نورة. كل لقاء يمثل فرصة لعثمان ليتعلم عن دينه وعن نفسه. عبر الفصول الكبرى، يكتشف التوحيد، وخطر الشرك، وفضل الصبر، والشكر، والعلم النافع، وغيرها من مكارم الأخلاق.',
      p5: 'كل ذلك مستمد من القرآن الكريم والسنة النبوية الصحيحة لرسولنا ﷺ وهدي السلف الصالح. ولأني لست عالماً ولا طالب علم شرعي متخصص، فإني أستحضر دوماً قول علمائنا: نقل العلم بالدليل هو الأساس. ولهذا تُذكر المصادر الصحيحة بدقة في كل حوار وفائدة.',
      p6: 'اللعبة حالياً في نسختها التجريبية (بيتا)، فنسألكم حسن الظن والتوجيه! إذا وجدتم أي خطأ أو ملاحظة، فببالغ الشكر والامتنان سنقوم بتصحيحها. فالمؤمن مرآة أخيه وعونه.',
      dua: '« نسأل الله تعالى أن يجعل هذا العمل سبباً للخير والبركة لأبنائنا، وأن يتقبله منا في ميزان الحسنات يوم القيامة. آمين. »',
      signoff: 'رحلة مباركة على طريق الحكمة !',
      designerTitle: 'عبد الرحمن المالكي — مصمم لعبة نـور',
      arabicPeace: 'والسلام عليكم ورحمة الله وبركاته',
      testNotice: 'جرّب الفصل الأول مجاناً مع أطفالك مباشرة في المتصفح',
      testButton: 'تجربة اللعبة (بنقرة واحدة)',
      apkButton: 'تطبيق أندرويد',
      readMore: 'قراءة رسالة عبد الرحمن كاملة 📜',
      readLess: 'إخفاء التفاصيل ▴'
    },
    gameplayVideo: {
      badge: 'استعراض حي',
      title: 'عِش المغامرة في عالم البيكسل آرت',
      subtitle: 'اكتشف الأجواء الهادئة، والحوارات المؤثرة، ومفترق طرق القرية العريق.',
      liveIndicator: 'جلسة لعب مباشرة',
      playChapter1: 'العب الفصل الأول الآن',
      downloadApk: 'تحميل التطبيق APK (درايف)',
      openInNewTab: 'فتح في نافذة مستقلة',
      clickToStart: 'انقر لتشغيل الفيديو (٣٢ ثانية)',
      highlight1Title: 'إتقان فني وشعر بصري',
      highlight1Desc: 'مشاهد مرسومة بدقة، وإضاءة ذهبية مستوحاة من فترات الغروب، وأصوات هادئة لغمر الحواس في سكينة.',
      highlight2Title: 'اختبارات روحية وخيارات واعية',
      highlight2Desc: 'واجه وساوس الشكوك، واكظم الغيظ بالحِلم، واختر اللين والرفق مسترشداً بالأحاديث الشريفة.',
      highlight3Title: '«جسور النور» في واقعك',
      highlight3Desc: 'تتعدى اللعبة حدود الشاشة : أنجز مهمات بر ومودة حقيقية في بيتك لتفتح مراحل جديدة.',
      ctaLaunch: 'ابدأ المغامرة فوراً',
      ctaDownloadApk: 'تحميل التطبيق APK (درايف)'
    },
    combatDemo: {
      badge: 'محاكي تفاعلي',
      title: 'معركة التغلب على الوسواس',
      subtitle: 'حين تراودك أصوات الإحباط وتدعوك للعزلة، اختر الموقف النبوي لاستعادة طمأنينة القلب.',
      waswasDefinition: 'الوسواس هو تلك الهواجس الداخلية التي تبث الخوف أو التردد أو الإحباط. في لعبة نُور، لا معارك جسدية: النصر يُحسم بحضور القلب وحسن التوكل واليقين.',
      scene: 'المشهد : مفترق طرق القرية',
      challenge: 'التحدي : الخوف من الرفض والوحدة',
      reset: 'إعادة ضبط',
      othmanStatus: 'حساس لكلام ونظرات الآخرين',
      othmanSerenity: '٪ طمأنينة',
      waswasStatus: 'وسواس نشط في الذهن',
      waswasTrouble: '٪ قلق',
      waswasTitle: 'ظل الوسواس',
      waswasWhisperHeader: 'همس الوسواس في أذن عثمان :',
      waswasWhisper: '« انظر إلى هؤلاء الفتيان... إنهم لا يعرفونك! سيسخرون منك إن اقتربت. ابق مكانك فهو أكثر أماناً... »',
      shadowWhisper: '« ابق في غرفتك... لن يقبل أحد صداقتك، وسوف يسخرون منك! »',
      instruction: 'اختر الرد الروحي الصحيح لتبديد غمامة الشك :',
      question: 'أي رد تختار ليوجه تصرف عثمان ؟',
      action1Title: 'الاستعاذة بالله',
      action1Desc: '« أعوذ بالله من الشيطان الرجيم » — تسكن القلب فوراً وتطرد الهواجس.',
      action2Title: 'التأمل في مقصد التعارف',
      action2Desc: 'تذكر أن الله خلق الناس شعوباً وقبائل ليتعارفوا ويتآلفوا.',
      action3Title: 'إفشاء السلام والابتسامة',
      action3Desc: 'المبادرة بالسلام وابتسامة صادقة (وهي صدقة تؤلف القلوب).',
      action4Title: 'الصبر والمضي بعزة',
      action4Desc: 'الإقدام بوقار وثقة بالله دون خوف من رفض الآخرين.',
      optionATitle: 'الخيار أ : الاستسلام للتردد',
      optionADesc: '« هذا صحيح... أنا خجول جداً، الأفضل أن أعود إلى البيت وأغلق الباب. »',
      optionAEffect: '-٢٠ طمأنينة • +٢٥ وسواس',
      optionBTitle: 'الخيار ب : التعبير بالغضب والصراخ',
      optionBDesc: '« سأصرخ وألفت انتباههم بالقوة ليجبروا على النظر إلي! »',
      optionBEffect: '+١٠ وسواس (غضب بلا جدوى)',
      optionCTitle: 'الخيار ج : البصيرة والإيمان',
      optionCDesc: '« أَعُوذُ بِاللَّهِ — نيتي طيبة، وتبسمي في وجه أخي صدقة، أتقدم بسلام. »',
      optionCEffect: '✨ +١٠٠ طمأنينة • تبديد الوسواس بالكامل !',
      victoryTitle: 'أشرق النور وانفتح مسار الحكمة !',
      victoryDesc: 'يتنفس عثمان بعمق، ويستعيذ بالله بقلب صادق، ويمضي بوقار. تم فتح مسار الصبر.',
      replayDemo: 'إعادة تجربة المحاكي',
      footerNote: 'في لعبة «نور»، لا معارك بدنية أو عنف. النصر يتحقق بصفاء السريرة، والإيمان، والكلمة الطيبة.',
      victoryPlay: 'تشغيل الفصل الأول كاملاً',
      victoryReplay: 'إعادة التجربة'
    },
    mechanics: {
      badge: 'أسلوب لعب فريد',
      title: 'لعبة متصلة بحياتك اليومية',
      subTagline: '✧ لعبة أدوار تربوية • أخلاق تفاعلية ✧',
      subtitle: 'لا تكتفي «نور» بسرد قصة مشوقة، بل تحفزك على إحداث أثر طيب وحقيقي في يومك.',
      mech1Title: 'مجاهدة الخواطر والوسواس',
      mech1Desc: 'التعرف على مداخل اليأس والشك واستعمال الأذكار النبوية لتثبيت الفؤاد.',
      mech1Badge: 'مجاهدة الخواطر',
      mech1Quote: '« هذه ليست تعويذة سحرية يا عثمان، بل التجاء صادق إلى الله بقلبك. تمسك بهذا واخط بثبات. » — نورة',
      mech1Points: [
        'مقياس تفاعلي للطمأنينة في مواجهة عواصف الشك',
        'تفكيك الأفكار التلقائية السلبية بالاستعاذة الصادقة',
        'الانتصار بحضور القلب والعمل الصالح'
      ],
      mech2Title: 'جسور النور والعمل الحقيقي',
      mech2Desc: 'كل عمل طيب تنجزه في واقعك يفتح طريقاً جديداً في المغامرة. قائم على الأمانة الذاتية: لا نطلب أي صور أو بيانات شخصية. مثالي للأسرة.',
      mech2Badge: 'مهمات خارج الشاشة',
      mech2Quote: '« هل رتبت سريرك وزاويتك هذا الصباح؟ خذ دقيقة في عالمك الحقيقي... واللعبة تنتظرك هنا! »',
      mech2Points: [
        'مهمات بر وخير عملية قائمة على الأمانة وحسن المراقبة الذاتية',
        '١٠٠٪ خصوصية تامة : دون كاميرا ودون جمع لأي بيانات شخصية',
        'فرصة رائعة لفتح حوار تربوي دافئ ومثمر بين الآباء والأبناء'
      ],
      mech3Title: 'عمود مفترق الطرق',
      mech3Desc: 'مفترق رمزي تتفرع منه مسارات الفصول، كل مسار يستكشف فضيلة قلبية كبرى.',
      mech3Badge: 'مفترق الطرق',
      mech3Quote: '« الطريق لا يبدأ تحت قدميك، بل ينبع من نيتك في قلبك. وحين تصدق النية، تجد كل خطوة معناها. » — نورة',
      mech3Points: [
        'قرارات أخلاقية واضحة تقود عثمان نحو غايته النبيلة',
        'لا خسارة محبطة : تعلّم رفيق وتشجيع على النهوض',
        'تدرج مشوق وممتع عبر ٥ فصول كبرى'
      ],
      mech4Title: 'كتاب الحكمة والمعرفة',
      mech4Desc: 'قبسات نورانية من القرآن الكريم والسنة النبوية المطهرة.',
      mech4Badge: 'أصالة المنهج',
      mech4Quote: '« في أعلى الشاشة، يجمع كتاب الحكمة الفوائد الأخلاقية والأحاديث التي تكتشفها كلما تقدمت. »',
      mech4Points: [
        'سورة الحجرات، الآية ١٣',
        'جامع الترمذي (١٩٥٦)',
        'تربية وقيم رفيعة'
      ]
    },
    characters: {
      badge: 'رفقاء الطريق',
      title: 'شخصيات ملحمة نور',
      subTagline: '✧ الشخصيات • المسارات المتقاطعة • الرفقاء والاختبارات ✧',
      subtitle: 'شخصيات أصيلة ترافق عثمان في رحلته الأخلاقية والروحية.',
      traitsTitle: 'السمات الأساسية',
      attributesTitle: 'مقامات القلب والعقل',
      statWisdom: 'الحكمة والبصيرة',
      statPeace: 'الطمأنينة والإيمان',
      statCourage: 'الشجاعة الأخلاقية',
      statHilm: 'الحِلم وضبط النفس',
      othmanName: 'عثمان',
      othmanRole: 'البطل الشاب',
      othmanQuote: '« وإن اقتربت... هل سيستغربون وجودي؟ من أين يبدأ المرء حين يشعر أنه غير مرئي؟ »',
      othmanDesc: 'فتى هادئ ومتأمل، على وشك مغادرة أمان شرفة منزله ليخوض غمار القرية. يتعلم كيف يحول تردده وخوفه من الرفض إلى إقدام وشجاعة صادقة.',
      othmanTraits: ['قلب صادق', 'مرهف الحس', 'عصا السفر', 'بحث عن الصداقة'],
      nouraName: 'نورة',
      nouraRole: 'الأم والمرشدة',
      nouraQuote: '« الطريق لا يبدأ تحت قدميك يا عثمان، بل في قلبك. وحين تصدق النية، تجد كل خطوة معناها. »',
      nouraDesc: 'والدة عثمان وبوصلته التربوية. حاضرة دوماً لتخفيف القلق بكلمات الحنان، وتعليمه أن القوة الحقيقية تكمن في الإحسان المستمر ولين الجانب.',
      nouraTraits: ['صبر عظيم', 'إرشاد أمومي', 'حكمة يومية', 'إنصات عميق'],
      waswasName: 'ظل الوسواس',
      waswasRole: 'الخصم الداخلي',
      waswasQuote: '« لن تنجح أبداً... ابق في فراشك فالطريق شاق ولا أحد يكترث بك... »',
      waswasDesc: 'ضباب هامس لا جسد له، يولد من الشكوك والتعب والخوف من نظرات الآخرين. لا يملك سلطاناً حقيقياً إلا تضخيم المخاوف لتعطيل عثمان عن الخير.',
      waswasTraits: ['وساوس محبطة', 'ضباب زائل', 'تضخيم المخاوف', 'يندحر بالإيمان'],
      sageName: 'الشيخ الحكيم',
      sageRole: 'حارس الحكمة والمعارف',
      sageQuote: '« اختر وجهتك عند مفترق القرية، فكل عمل ذي بال إنما يبدأ بنيّة خالصة. »',
      sageDesc: 'شيخ وقور يستقبل عثمان عند مفترق الطرقات، يلقي عليه دروس كتاب الحكمة وينير له معالم السير.',
      sageTraits: ['كتاب الحكمة', 'ذاكرة الأجداد', 'نظرة شاملة', 'صفاء البصيرة']
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
      chooseChapter: '🧭 اختر فصلاً',
      virtueToMaster: 'الفضيلة الكبرى للمرحلة',
      keyTrialsQuests: 'أهم المهمات والتحديات',
      playChapter1Now: 'العب الفصل الأول الآن',
      founderPackUnlock: 'متاح ضمن باقة المؤسسين',
      tab1: 'ف١ : العزلة',
      tab2: 'ف٢ : الحِلم',
      tab3: 'ف٣ : الصبر',
      tab4: 'ف٤ : البر',
      tab5: 'ف٥ : الذروة',
      chapters: [
        {
          id: 1,
          number: '01',
          title: 'كسر العزلة والألفة',
          arabicTitle: 'طريق الصداقة والمؤانسة',
          subtitle: 'بناء الصداقة وتجاوز الخجل الاجتماعي',
          status: 'available',
          statusLabel: 'الفصل الأول كامل — متاح للعب الآن',
          synopsis: 'يغادر عثمان غرفته قاصداً مفترق طرق القرية. في مواجهة أولى وساوس الشك والخوف من الحديث مع فتيان القرية، يكتشف كيف تصنع الابتسامة والكلمة الطيبة المعجزات.',
          virtue: 'انشراح الصدر والإقدام الاجتماعي',
          location: 'شرفة البيت، شجرة البلوط العظيمة والوادي',
          bgImage: '/game-assets/carrefour.jpg',
          highlights: [
            'تبديد هجمة وسواس العزلة الأولى',
            'جسر النور : ترتيب السرير في الحياة الحقيقية',
            'فتح باب أدب الكلام في كتاب الحكمة',
            'المبادرة بالسلام والتعرف على أطفال القرية'
          ]
        },
        {
          id: 2,
          number: '02',
          title: 'طريق الحِلم',
          arabicTitle: 'طريق الحلم وضبط النفس',
          subtitle: 'كظم الغيظ والتحكم في النفس',
          status: 'upcoming',
          statusLabel: 'الفصل الثاني — قيد اللمسات الأخيرة',
          synopsis: 'في سوق الفواكه المزدحم، يؤدي تصادم غير مقصود إلى سقوط السلال. يشعر عثمان بالغضب يشتعل في صدره، وعليه أن يختبر قوة الحلم والعفو.',
          virtue: 'الحِلم والعفو وسكينة النفس',
          location: 'سوق الفواكه وورشة الخزاف',
          bgImage: '/game-assets/marche.jpg',
          highlights: [
            'تمارين التنفس وتهدئة فورة الغضب',
            'تجنب الردود الجارحة في مواقف النزاع',
            'إصلاح خطأ الغير بروح طيبة وتواضع',
            'مهمة واقعية : التوسط للإصلاح بين اثنين'
          ]
        },
        {
          id: 3,
          number: '03',
          title: 'طريق التوكل واليقين',
          arabicTitle: 'طريق التوكل واليقين',
          subtitle: 'الأخذ بالأسباب وحسن الاعتماد على الله',
          status: 'development',
          statusLabel: 'الفصل الثالث — قيد التطوير',
          synopsis: 'عند مسار الجبال الصخرية والضباب، يتردد عثمان في اتخاذ القرار. يتعلم أن التوكل الحقيقي هو عقل الناقة مع تفويض النتائج لرب العالمين.',
          virtue: 'التوكل الصادق واليقين بالفرج',
          location: 'ممر الضباب والمرتفعات',
          bgImage: '/game-assets/waswas_bg.jpg',
          highlights: [
            'بذل الوسع في الأسباب قبل انتظار النتائج',
            'لغز الراعي وعقدة الحبل الحكيمة',
            'تثبيت العزيمة في مواجهة المجهول',
            'تعلم دعاء الاستخارة وتفويض الأمر'
          ]
        },
        {
          id: 4,
          number: '04',
          title: 'ما بقي لك',
          arabicTitle: 'طريق بر الوالدين والإحسان',
          subtitle: 'بر الوالدين وعظيم الامتنان',
          status: 'development',
          statusLabel: 'الفصل الرابع — في مرحلة السيناريو',
          synopsis: 'إثر لحظة ضيق عابرة مع والدته في الصباح، يخرج عثمان متأثراً. وتحت الشجرة العظيمة مع صديقه، يتأملان طائراً يطعم فراخه، فتحدث مكاشفة تفتح عينيه على أعظم نعم حياته.',
          virtue: 'بر الوالدين والإحسان والشكر',
          location: 'بيت العائلة وشجرة المكاشفة',
          bgImage: '/game-assets/teaser_chapitre4.jpg',
          highlights: [
            'دحر وساوس التبرم ونفاد الصبر',
            'تأمل الطير والرزق تحت الشجرة الكبيرة',
            'محادثة مؤثرة بين الصديقين عن فضل الوالدين',
            'إدراك القيمة التي لا تعوض للأهل والإسراع ببرهم'
          ]
        },
        {
          id: 5,
          number: '05',
          title: 'جبل الصبر والثبات',
          arabicTitle: 'جبل الصبر والثبات',
          subtitle: 'قمة الملحمة — الصبر الجميل',
          status: 'development',
          statusLabel: 'الفصل الخامس — ذروة الملحمة',
          synopsis: 'الصعود النهائي نحو قمة الجبل الشاهق. في مواجهة مشقة الطريق والعقبات، يجمع عثمان كل ما تعلمه من فضائل ليشرق النور على كامل الوادي.',
          virtue: 'الصبر الجميل والثبات على الحق',
          location: 'محراب القمة السماوية',
          bgImage: '/game-assets/vallee.jpg',
          highlights: [
            'المواجهة الكبرى مع ريح الظلال',
            'اكتمال شجرة الحكمة والفضائل',
            'بزوغ النور وبركة الوادي',
            'فتح الوضع الحر والقصص الإضافية'
          ]
        }
      ]
    },
    wisdomBook: {
      badge: 'أصالة المنهج',
      title: 'كتاب الحكمة والمعرفة',
      subTagline: '✧ بيت الحكمة • المخطوطات النورانية • القيم الإسلامية ✧',
      subtitle: 'قبسات نورانية من القرآن الكريم والسنة النبوية المطهرة.',
      cardsUnlocked: 'بطاقات الحكمة المفتوحة',
      sheets: '٤ بطاقات',
      wordsOfGuidance: '— هدي ونور —',
      revealedSource: '— المصدر الصحيح :',
      spiritualScope: 'الأثر التربوي والعمل التطبيقي',
      category: 'المجال :',
      verseTitle: 'آية محكمة في التعارف والأخوة',
      verseArabic: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
      verseMeaning: '« يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ » (سورة الحجرات : ١٣)',
      verseRef: 'سورة الحجرات، الآية ١٣',
      hadithTitle: 'حديث نبوي في فضل التبسم والصدقة',
      hadithArabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
      hadithMeaning: '« تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ » (رواه الترمذي وقال حديث حسن غريب)',
      hadithRef: 'جامع الترمذي (١٩٥٦)',
      valueTitle: 'تربية وقيم رفيعة',
      valueDesc: 'تمت مراجعة كل معنى بدقة تربوية ليكون نافعاً للناشئة والكبار على حد سواء.',
      cards: [
        {
          id: 'adab_parole',
          title: 'أدب الكلام وحفظ اللسان',
          arabicPhrase: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
          concept: 'قول الخير أو الصمت',
          quote: '« مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ »',
          source: 'متفق عليه (البخاري ومسلم)',
          lesson: 'اللسان مرآة القلب. وإمساك الكلمة الجارحة علامة نضج وسبيل لحفظ السكينة والطمأنينة.',
          category: 'الآداب'
        },
        {
          id: 'sourire_aumone',
          title: 'إشراقة الابتسامة',
          arabicPhrase: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
          concept: 'إشاعة المودة واللطف',
          quote: '« تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ »',
          source: 'رواه الترمذي (حديث حسن)',
          lesson: 'التبسم الصادق يكسر حاجز الخجل والتردد، ويبعث الدفء في قلوب من حولك.',
          category: 'السكينة'
        },
        {
          id: 'istiadha_protection',
          title: 'حصن الاستعاذة',
          arabicPhrase: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
          concept: 'دحر الخواطر السلبية',
          quote: '« أعوذ بالله من الشيطان الرجيم »',
          source: 'هدي قرآني ونبوي مبارك',
          lesson: 'حين تراودك أفكار التثبيط والدونية، استعذ بالله بقلب حاضر وأكمل مسيرك بثقة.',
          category: 'الشجاعة'
        },
        {
          id: 'ordre_espace',
          title: 'ترتيب المكان ونظافته',
          arabicPhrase: 'النَّظَافَةُ وَحُسْنُ التَّدْبِيرِ',
          concept: 'جسور النور (تطبيق عملي)',
          quote: '« ترتيب المكان وتهذيبه يبعث على هدوء البال ووضوح التفكير. »',
          source: 'حكمة تربوية من منهج نور',
          lesson: 'البدء بترتيب الفراش والغرفة كل صباح ينظم الذهن ويعد النفس لمواجهة مهام اليوم بنشاط.',
          category: 'الأسرة'
        }
      ]
    },
    gallery: {
      badge: 'الهوية الفنية والجمالية',
      title: 'بانوراما عوالم «نور»',
      subtitle: 'رؤية فنية تجمع بين سحر البيكسل آرت الكلاسيكي ودفء المعالم المشرقية الأصيلة.',
      items: [
        {
          id: 'vallee',
          title: 'إشراقة الفجر على الوادي',
          location: 'أرض البداية',
          image: '/game-assets/vallee.jpg',
          description: 'شمس الصباح تبعث الدفء في حجارة القرية البيضاء، معلنة بداية يوم عثمان الأول في رحلته الكبرى.'
        },
        {
          id: 'carrefour',
          title: 'مفترق طرق القرية',
          location: 'ملتقى المسارات',
          image: '/game-assets/carrefour.jpg',
          description: 'مفترق الطرق التاريخي حيث يدل العمود الخشبي عثمان على وجهات الفصول ومقامات القلوب.'
        },
        {
          id: 'waswas',
          title: 'ممر الوساوس والخواطر',
          location: 'محراب مجاهدة النفس',
          image: '/game-assets/waswas_bg.jpg',
          description: 'الممر الضيق تحت الجرف حيث يحاول الضباب الهامس إيقاف الفتى الشاب وبث الشك في عزيمته.'
        },
        {
          id: 'chambre',
          title: 'غرفة البيت الدافئة',
          location: 'جسر النور ٠١',
          image: '/game-assets/chambre.jpg',
          description: 'أجواء البيت الهادئة حيث يبدأ الاختبار الأول: التغلب على الكسل وترتيب المكان بحب.'
        },
        {
          id: 'verger',
          title: 'بستان اللوز المزهر',
          location: 'مسار الامتنان',
          image: '/game-assets/verger.jpg',
          description: 'أشجار اللوز الفواحة في نسمات التلال العليلة، تذكر بنعم الله الخفية في خلقه.'
        },
        {
          id: 'affiche',
          title: 'الملصق الفني لملحمة نور',
          location: 'واجهة العمل',
          image: '/game-assets/affiche_nour.jpg',
          description: 'اللوحة المعبرة عن مسيرة عثمان بعصاه المتواضعة ونور الإيمان الساطع في قلبه.'
        }
      ]
    },
    pricing: {
      badge: 'الدعم والمشاركة',
      title: 'انضم إلى مجتمع المؤسسين',
      subtitle: 'ساند مشروعاً مستقلاً هادفاً واحصل فوراً على الفصول القادمة.',
      col1Tag: 'شاي الحِرفي',
      col1Badge: 'دعم رمزي',
      col1Title: 'مساندة المشروع',
      col1Price: '١.٩٩ €',
      col1SubPrice: '/ مساهمة تشجيعية لمرة واحدة',
      col1Desc: 'مساهمة بسيطة تعبر عن التقدير لتشجيع استوديو العمل والمساهمة في إنتاج الأصوات الاحترافية.',
      col1Points: [
        'إهداء كوب شاي دافئ وتشجيع كبير لفريق التطوير',
        'المساهمة في إبقاء الفصل الأول متاحاً مجاناً للجميع',
        '١٠٠٪ شفاف ودون أي اشتراكات خفية'
      ],
      col1Cta: 'إهداء شاي (١.٩٩ €)',
      col2Promo: 'خصم ٣٨٪ عرض الإطلاق',
      col2Tag: 'الفصل ٢ و ٣ متضمنان',
      col2Badge: 'عرض الإطلاق',
      col2Title: 'باقة المؤسسين',
      col2Price: '٤.٩٩ €',
      col2OldPrice: '٧.٩٩ €',
      col2Limited: 'عرض محدود',
      col2Desc: 'فتح فوري ومباشر لكامل الفصلين القادمين.',
      col2Ch2Title: '🌾 الفصل الثاني : طريق الحِلم',
      col2Ch2Desc: 'كظم الغيظ والتحلي باللين والرفق في سوق القرية المزدحم.',
      col2Ch3Title: '🩹 الفصل الثالث : صاحب الجبيرة (الصبر)',
      col2Ch3Desc: 'الصبر على البلاء والابتلاء، والطب النبوي والتآخي الأخوي.',
      col2GuaranteeTitle: '🛡️ ضمان استرجاع ٧ أيام دون شروط',
      col2GuaranteeDesc: 'خض التجربة براحة بال كاملة. استرجاع المبلغ بمجرد مراسلتنا على elmalkidigital@gmail.com خلال ٧ أيام دون أي تعقيد.',
      col2Cta: 'فتح الفصلين ٢ و ٣ (٤.٩٩ €)',
      col3Badge: 'قريباً بإذن الله',
      col3Tag: 'الفصل الرابع : بر الوالدين',
      col3Teaser: 'استعراض حصري',
      col3Title: '« ما بقي لك »',
      col3Subtitle: 'بر الوالدين والشكر والإحسان',
      col3Desc: 'تحت الشجرة العظيمة مع صديق الطفولة، حديث مؤثر يقود عثمان إلى إدراك قيمة الوالدين وفتح قلبه للإحسان والشكر.',
      col3Points: [
        {
          title: '🕊️ التأمل وتفكر الطبيعة',
          desc: 'مشهد الطائر الذي يغدو خماصاً ويروح بطاناً يطعم صغاره.'
        },
        {
          title: '💭 حوار الشجرة العميق',
          desc: 'مكاشفة أخوية تدعو لإعادة تقدير أثمن الروابط الأسرية قبل فوات الأوان.'
        }
      ],
      col3Cta: 'استعراض خارطة الطريق الكاملة'
    },
    testimonials: {
      badge: '🧪 مشروع مفتوح للتجربة والتطوير',
      title: 'لنصنع مغامرة «نُور» معاً خطوة بخطوة',
      subtitle: '«نور» عمل مستقل في مرحلة التطوير. الفصل الأول متاح مجاناً للجميع: نحتاج بكل صدق إلى نقدكم البنّاء وانطباعاتكم لتطوير الفصول القادمة بما يليق بأبنائنا.',
      subTagline: '✧ دون تقييمات مصطنعة • رأيك الحقيقي هو بوصلة التطوير ✧',
      step1Badge: 'الخطوة ١',
      step1Title: 'جرّب الفصل الأول (مجاناً)',
      step1Desc: 'ابدأ اللعب بنقرة واحدة في المتصفح. اختبر الحوارات ومواجهة الوسواس ومعارك الكويز دون تحميل أي تطبيق.',
      step2Badge: 'الخطوة ٢',
      step2Title: 'شاركنا انطباعك الصادق',
      step2Desc: 'ما الذي أعجبك؟ وهل تفاعل أطفالك مع القصة؟ هل واجهت أي صعوبة؟ أخبرنا في دقيقتين عبر الاستبيان أو رسالة واتساب مباشرة.',
      step3Badge: 'الخطوة ٣',
      step3Title: 'ساهم في الفصول القادمة',
      step3Desc: 'مقترحاتكم وأفكاركم في الألغاز والآداب ستُدمج في الفصول من ٢ إلى ٥، مع تخليد أسماء أبرز المساهمين في شكر وتقدير اللعبة!',
      ctaForm: 'تعبئة استبيان المختبرين (دقيقتان) ✍️',
      ctaWhatsapp: 'مراسلتنا مباشرة عبر واتساب 💬',
      guaranteeTitle: 'شفافية كاملة والتزام أخلاقي',
      guaranteeDesc: 'لا نضع أي مراجعات مصطنعة. نؤمن بالصدق والإتقان والتعاون المجتمعي لبناء لعبة ترقى لتطلعات أسرنا.',
      pegi: 'مشروع تجريبي تشاركي'
    },
    familySection: {
      badge: 'مصمم للعائلات وغرس الفضائل',
      title: 'لمن صُممت لعبة نُور ؟',
      subtitle: 'الحل الأمثل للآباء : الجمع بين شغف الأبناء بألعاب الفيديو والتربية الإسلامية الأصيلة والنافعة.',
      quizBadge: 'لعب وتعلّم',
      quizTitle: 'الجمع بين متعة اللعب والتربية الإسلامية',
      quizDesc: 'وداعاً للدروس الجافة والشاشات السلبية: يتعلم أطفالك التوحيد والآداب والأحاديث بحماس عبر اختبارات تفاعلية مشوقة مدمجة في صلب المغامرة.',
      ageBadge: 'من سن ٨ سنوات فما فوق',
      ageTitle: 'للأطفال واليافعين والآباء',
      ageDesc: 'تجربة ملهمة تناسب عقول ونفوس الصغار وتفتح آفاق الحوار التربوي البنّاء مع اليافعين والكبار.',
      parentsBadge: 'تربية وحوار',
      parentsTitle: 'مرافقة تربوية عائلية ممتعة',
      parentsDesc: 'فرصة رائعة لاجتماع الأسرة ومناقشة مواقف الحياة اليومية وغرس معاني الحِلم والصبر والأخوة.',
      ethicsBadge: '١٠٠٪ آمنة وأخلاقية',
      ethicsTitle: 'دون إعلانات ودون جمع لأي بيانات شخصية',
      ethicsDesc: 'خالية تماماً من الإعلانات المزعجة والتسجيل الإجباري. مهمات الحياة الواقعية قائمة على الأمانة الذاتية دون كاميرا أو صور.',
      sourcesBadge: 'أصالة ومصداقية',
      sourcesTitle: 'مصادر قرآنية ونبوية موثقة',
      sourcesDesc: 'مبنية على هدي القرآن الكريم وصحيح السنة النبوية (البخاري ومسلم) لترسيخ مكارم الأخلاق والآداب.',
      devicesBadge: 'سهولة الوصول',
      devicesTitle: 'بنقرة واحدة على الجوال واللوحي والحاسوب',
      devicesDesc: 'تعمل مباشرة في متصفحك المفضل (سفاري، كروم، إيدج) دون الحاجة لأي تثبيت مسبق.',
      cardCta: 'جرّب اللعبة مع عائلتك الآن'
    },
    faq: {
      badge: 'الأسئلة الشائعة',
      title: 'كل ما تود معرفته عن المشروع',
      subtitle: 'إجابات واضحة ومباشرة حول الأجهزة المدعومة والأسعار والمراحل القادمة.',
      items: [
        {
          q: 'هل اللعبة مجانية بالكامل ؟ وهل توجد أي رسوم خفية ؟',
          a: 'الفصل الأول كاملاً («كسر العزلة») مجاني ١٠٠٪ دون أي شروط أو بطاقة بنكية. ويمكنكم الاستمتاع به فوراً. ولفتح بقية الفصول ودعم الاستوديو المستقل في إنتاج الأصوات ورسومات البيكسل، نوفر باقة المؤسسين الاختيارية بسعر رمزي مخفض.'
        },
        {
          q: 'هل يجب إنشاء حساب أو تحميل تطبيق للعب ؟',
          a: 'لا، لا يلزمك أي تسجيل أو بريد إلكتروني أو كلمة مرور! تنطلق اللعبة بنقرة واحدة مباشرة في متصفحك على الهاتف أو الحاسوب، ويُحفظ تقدمك تلقائياً على جهازك.'
        },
        {
          q: 'على أي أجهزة وأنظمة تعمل لعبة «نور» ؟',
          a: 'تعمل بسلاسة فائقة على هواتف آيفون (سفاري) وهواتف أندرويد (كروم)، والأجهزة اللوحية (آيباد وأندرويد)، وحواسيب ويندوز وماك ولينكس. كما يتوفر تطبيق APK مستقل لمستخدمي أندرويد للعب دون إنترنت.'
        },
        {
          q: 'هل تحتوي اللعبة على إعلانات أو مشتريات خادعة للأطفال ؟',
          a: 'إطلاقاً. اللعبة خالية ١٠٠٪ من أي إعلانات منبثقة أو لافتات مزعجة أو مشتريات عشوائية. إنها بيئة رقمية هادئة ونقية ومأمونة تماماً على انتباه الأطفال ونفوسهم.'
        },
        {
          q: 'ما هو السن المناسب للعبة وكيف يشارك الوالدان ؟',
          a: 'نوصي باللعبة من عمر ٨ سنوات فما فوق (قراءة مستقلة أو بمساعدة). ويُعد جلوس الوالدين مع أطفالهم فرصة ثمينة لمناقشة قرارات عثمان الأخلاقية والدروس المستفادة.'
        },
        {
          q: 'كيف تعمل «جسور النور» (مهمات الحياة الواقعية) ؟ وهل تطلبون أدلة ؟',
          a: 'في مواقف معينة، تدعو اللعبة اللاعب بلطف إلى أداء عمل طيب في بيته (ترتيب غرفته، بر والديه، الابتسام). الأمر قائم كلياً على الأمانة والتربية الذاتية : لا نطلب أي صور ولا فيديوهات ولا نجمع أي بيانات.'
        },
        {
          q: 'ما هي المصادر الدينية والأخلاقية المعتمدة في اللعبة ؟',
          a: 'تستند جميع القصص والفوائد والأسئلة بدقة إلى القرآن الكريم وكتب السنة النبوية الصحيحة (صحيحي البخاري ومسلم). وتُذكر المراجع بوضوح داخل كتاب الحكمة في اللعبة.'
        },
        {
          q: 'هل تتوفر نسخة تطبيق أندرويد قابلة للتثبيت ؟',
          a: 'نعم، يتوفر ملف APK رسمي للتحميل المباشر والآمن لمن يفضل وضع أيقونة اللعبة على شاشة هاتفه الرئيسية واللعب دون الحاجة لاتصال دائم بالإنترنت.'
        }
      ]
    },
    preFooter: {
      badge: 'الفصل الأول كامل • ١٠٠٪ مجاناً',
      title: 'هل أنت مستعد لخوض طريق الحكمة ؟',
      description: 'انضم إلى أكثر من ١٢٠٠ لاعب وعائلة وجرّب مغامرة عثمان مجاناً الآن في متصفحك دون تسجيل أو تثبيت.',
      ctaPlay: 'جرّب اللعبة بنقرة واحدة (مجاناً)',
      downloadApk: 'تحميل تطبيق الأندرويد APK (٢٦٤ ميغابايت)',
      benefit1: '✧ حفظ فوري للتقدم',
      benefit2: '✧ أصوات سينمائية استوديو',
      benefit3: '✧ خالية تماماً من الإعلانات المزعجة'
    },
    tester: {
      badge: 'منتدى المختبرين الأوائل',
      title: 'رأيكم يصنع فارقاً كبيراً',
      subtitle: 'ساعدونا في تطوير المراحل القادمة عبر مشاركة ملاحظاتكم وانطباعاتكم الصادقة.',
      formTitle: 'استبيان المختبرين الأوائل',
      formSubtitle: 'رأيكم الصادق يرسم ملامح مغامرة «نور».',
      step: 'المرحلة',
      step1Title: '١. نبذة عن اللاعب',
      step1Desc: 'دعنا نبدأ بالتعرف على اللاعب الكريم.',
      nameLabel: 'ما هو اسمك أو كنيتك ؟ (اختياري)',
      namePlaceholder: 'مثال : ريان، صفية، عثمان...',
      ageLabel: 'عمر اللاعب*',
      ageOptions: ['٥-٨ سنوات', '٩-١٢ سنة', '١٣-١٧ سنة', '١٨ سنة فما فوق'],
      firstTimeLabel: 'هل هذه أول مرة تلعب فيها لعبة نور ؟',
      firstTimeYes: '✨ نعم، أول مرة',
      firstTimeNo: '🔁 لا، سبق لي اللعب',
      nextBtn: 'التالي'
    },
    footer: {
      description: 'لعبة تقمص أدوار بيكسل آرت ١٦ بت تجمع بين البناء الإيماني، واختبارات الحكمة، والمهمات العملية الإيجابية.',
      quickLinks: 'روابط سريعة',
      playGame: 'العب في المتصفح (مجاناً)',
      downloadApk: 'تحميل تطبيق الأندرويد APK',
      shareWhatsapp: 'مشاركة عبر واتساب',
      copyLink: 'نسخ رابط الصفحة',
      linkCopied: 'تم نسخ الرابط في الحافظة !',
      subBrand: 'لعبة الأدوار التربوية والروحية',
      aboutText: '«نور» عمل مستقل مخصص للتعلم الانفعالي والوجداني ومكافحة الأفكار السلبية وترسيخ القيم الإنسانية والإسلامية السامية عبر الألعاب الهادفة.',
      madeWith: 'صُنع بحب وشغف لجميع الأعمار.',
      navTitle: 'التنقل',
      navHome: 'الرئيسية',
      navDemo: 'مواجهة الوسواس',
      navChars: 'الشخصيات',
      navMechanics: 'أسلوب اللعب',
      navChapters: 'الفصول الخمسة',
      navWisdom: 'كتاب الحكمة',
      infoTitle: 'معلومات تقنية',
      pegi: 'التصنيف : مناسب لجميع الفئات العمرية',
      format: 'الصيغة : تطبيق ويب وتطبيق أندرويد APK',
      apkDrive: 'تحميل تطبيق الأندرويد (درايف) ↗',
      languages: 'اللغات : الفرنسية والإنجليزية مع خطوط عربية أصيلة',
      support: 'الدعم : متصفحات الحواسيب والجوالات بنظامي iOS وأندرويد',
      server: 'الاستضافة : خوادم Firebase السحابية الآمنة',
      copyright: '© ٢٠٢٦ نور — تبدأ الرحلة هنا. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      faq: 'الأسئلة الشائعة',
      backToTop: 'العودة للأعلى'
    },
    mobileSticky: {
      title: 'نُور : لعبة الأدوار الإسلامية',
      subtitle: '١٠٠٪ مجاناً • دون تسجيل',
      freeText: '١٠٠٪ مجاناً • دون تسجيل',
      cta: 'العب الآن'
    }
  }
};
