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
    items: Array<{
      id: string;
      name: string;
      role: string;
      badge: string;
      content: string;
      rating: number;
    }>;
    guaranteeTitle: string;
    guaranteeDesc: string;
    pegi: string;
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
      badge: 'Jeu de Rôle Pixel Art 16-Bit & Valeurs Éthiques',
      titleLine1: "L'Épopée du Cœur",
      titleLine2: 'de la Solitude à la Fraternité',
      description: "Accompagnez Othmân dans un voyage initiatique captivant. Affrontez les doutes intérieurs (Waswâs), relevez des défis de sagesse et accomplissez des actions réelles de bienveillance pour faire grandir votre foi.",
      ctaPlay: 'Tester le Jeu Gratuitement (1 Clic)',
      ctaSubtext: '100% Gratuit • Sans inscription • Immédiat dans le navigateur',
      trustRating: '⭐ 4.9/5 • Plus de 1 200 joueurs & familles',
      studioVoicesBadge: '🎙️ Voix Cinéma Studio Françaises & Pixel Art 16-Bit',
      adFreeBadge: '100% Sans Pub • Éthique',
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
      stat3Value: '16-Bit Pixel Art',
      downloadApk: "Télécharger l'APK (Drive)",
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
      featWaswasTitle: 'Combat contre le Waswâs',
      featWaswasDesc: 'Un système de jauge psychologique innovant où vous terrassez les murmures du doute et de la honte par la lucidité et la sérénité.',
      featBridgesTitle: 'Les « Ponts de Nour »',
      featBridgesDesc: "Le jeu brise l'écran : gagnez des points de cœur en accomplissant de réelles actions quotidiennes (ordonner son lit, sourire, écouter).",
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
      apkButton: 'APK Android'
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
      optionAEffect: '+25% Doute Waswâs',
      optionBTitle: "Option B : S'imposer par la colère",
      optionBDesc: "« Je vais crier et taper du pied pour qu'ils soient bien obligés de me prêter attention ! »",
      optionBEffect: 'Trouble & instabilité',
      optionCTitle: 'Option C : Discernement & Foi',
      optionCDesc: "« أَعُوذُ بِاللَّهِ — Je cherche refuge auprès d'Allah. Mon intention est pure : un sourire est une aumône, j'avance en paix. »",
      optionCEffect: '✨ Dissipe 100% du Waswâs !',
      victoryTitle: 'Fiche du Livre du Savoir Débloquée !',
      victoryDesc: "Vous venez d'expérimenter la première mécanique du jeu. Dans le chapitre 1 complet, Othmân rencontre de nombreux villageois et débloque plus de 15 sagesses.",
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
      mech2Desc: 'Des dialogues guidés par la bienveillance pour transformer les conflits en opportunités de réconciliation.',
      mech2Badge: 'Actions Hors-Écran',
      mech2Quote: "« As-tu pensé à ordonner ton lit ou ton coin ce matin ? Prends une minute dans le monde réel... le jeu t'attend ici ! »",
      mech2Points: [
        "Passerelles bienveillantes entre l'histoire virtuelle et le quotidien",
        'Développement de la responsabilité personnelle dès le réveil',
        "Valorisation de l'aide désintéressée envers les aînés"
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
      sageName: 'Le Sage des Sentiers',
      sageRole: 'Gardien des Savoirs',
      sageQuote: "« Choisis ta direction au carrefour du village, car tout acte de valeur commence par une intention sincère. »",
      sageDesc: "Le sage bienveillant qui accueille Othmân au carrefour des chemins. Témoin des voyageurs en quête de sens, il transmet au joueur les enseignements du Livre du Savoir pour éclairer sa route.",
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
          bgImage: '/game-assets/verger.jpg',
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
          bgImage: '/game-assets/chambre.jpg',
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
      badge: "L'Écho de la Communauté",
      title: 'Adopté par les Familles & Joueurs',
      subTagline: '✧ Témoignages Authentiques • Note Moyenne 4.9/5 ✧',
      subtitle: 'Découvrez pourquoi parents, éducateurs et rôlistes saluent la bienveillance et la fraîcheur novatrice de l’aventure NOUR.',
      items: [
        {
          id: '1',
          name: 'Yassine B.',
          role: 'Père de famille & Gamer',
          badge: 'Joueur du Chapitre 1',
          content: "Enfin un RPG avec une âme ! Mes deux garçons de 9 et 12 ans ont adoré Othmân. Ce qui m'a bluffé, c'est le 'Pont de Nour' : après la scène, mon fils s'est levé spontanément pour ranger son lit ! C'est du jeu vidéo noble et intelligent.",
          rating: 5
        },
        {
          id: '2',
          name: 'Amina L.',
          role: 'Enseignante & Passionnée de récits interactifs',
          badge: 'Critique Jeu Narratif',
          content: "La mécanique du combat contre le Waswâs est une trouvaille de game design brillante. Au lieu de taper sur des gobelins avec une hache, on apprend à identifier ses pensées automatiques négatives et à les désamorcer par la sérénité.",
          rating: 5
        },
        {
          id: '3',
          name: 'Sofiane M.',
          role: 'Développeur Indie & Rôliste',
          badge: 'Testeur Bêta',
          content: "L'ambiance sonore, les dialogues ciselés et le pixel art oriental apportent une fraîcheur immense dans le paysage du RPG. Une expérience accessible immédiatement dans le navigateur sans rien installer.",
          rating: 5
        }
      ],
      guaranteeTitle: 'Garantie Sans Violence • 100% Éthique & Bienveillant',
      guaranteeDesc: 'Une expérience saine, sans micro-transactions, sans pop-ups publicitaires, respectueuse de votre attention.',
      pegi: 'PEGI 3+ / Tout Public'
    },
    faq: {
      badge: 'Questions Fréquentes',
      title: 'Tout Savoir sur le Projet',
      subtitle: 'Des réponses claires à vos questions sur l’accessibilité, les tarifs et les plateformes.',
      items: [
        {
          q: 'Sur quels appareils peut-on jouer à NOUR ?',
          a: "NOUR fonctionne de manière fluide et instantanée sur tous les navigateurs modernes (smartphones iOS & Android, tablettes et PC sans aucune installation). Pour les utilisateurs Android souhaitant une expérience application dédiée, un fichier APK officiel est également disponible au téléchargement direct."
        },
        {
          q: 'Le jeu est-il gratuit ? Quels sont les tarifs des chapitres ?',
          a: "Le Chapitre 1 complet (« Vaincre la Solitude ») est 100% gratuit et accessible immédiatement à tous, sans publicité intrusive ni inscription requise. Pour débloquer la suite de l'aventure (Chapitres 2 et 3) et financer les enregistrements de voix studio et les décors, nous proposons une Offre de Lancement exclusive (Pack Fondateur à 4,99 € au lieu de 7,99 €) ainsi qu'un soutien libre (1,99 € — Thé de l'Artisan). Il s'agit d'un accès définitif et à vie, sans abonnement récurrent."
        },
        {
          q: 'À quelle tranche d’âge NOUR s’adresse-t-il ?',
          a: "Le jeu s'adresse aussi bien aux enfants dès 7-8 ans qu'aux adolescents et adultes. Les thématiques abordées (surmonter la solitude, gérer sa colère par la douceur, fortifier sa confiance en Dieu, honorer ses parents avec reconnaissance) résonnent avec profondeur à tout âge de la vie."
        },
        {
          q: "Que sont les 'Ponts de Nour' ?",
          a: "Ce sont des quêtes novatrices qui dépassent l'écran : à certains moments clés, le jeu invite avec bienveillance le joueur à poser un acte réel dans son quotidien (ranger son espace, remercier un parent, sourire à un proche) pour ancrer les valeurs du récit dans la vraie vie."
        },
        {
          q: 'Quand sortiront les prochains chapitres (Chapitres 2, 3, 4 et 5) ?',
          a: "Les Chapitres 2 (« Le Chemin du Hilm ») et 3 (« L'Enfant à l'Attelle — Sabr ») sont en cours de finalisation et débloquables via le Pack Fondateur. Le Chapitre 4 (« Ce que tu as encore » — Birr al-Wālidayn) est actuellement en phase active de scénarisation. Vous pouvez suivre l'avancée de chaque étape en direct dans la section interactive « Le Carrefour des Sentiers » de cette page d'accueil."
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
      subtitle: 'NOUR : RPG Islamique',
      freeText: '100% Gratuit • Sans Inscription',
      cta: 'Tester (1 Clic)'
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
      badge: '16-Bit Pixel Art RPG & Ethical Wisdom',
      titleLine1: 'The Epic of the Heart',
      titleLine2: 'From Solitude to Fraternity',
      description: 'Join Othmân on a captivating journey of self-discovery. Confront inner doubts (Waswâs), overcome challenges of wisdom, and perform real acts of kindness to strengthen your faith.',
      ctaPlay: 'Try the game for free (1 click)',
      ctaSubtext: '100% Free & No Registration Required • Runs directly on Mobile & PC',
      trustRating: '⭐ 4.9/5 • Over 1,200 players & families',
      studioVoicesBadge: '🎙️ French Studio Cinema Voices & 16-Bit Pixel Art',
      adFreeBadge: '100% Ad-Free • Ethical',
      ctaDemo: 'Testing Mental Combat',
      ctaVideo: 'Watch the Gameplay',
      feature1Title: 'Choices & Consequences',
      feature1Desc: 'Rich narrative branching dialogues that forge inner character.',
      feature2Title: 'Real-Life Challenges',
      feature2Desc: 'Practical daily kindness missions to complete offline.',
      feature3Title: 'Authentic Sources',
      feature3Desc: 'Rooted in prophetic wisdom, forbearance (Hilm), and patience (Sabr).',
      stat1Label: 'Free Chapter 1',
      stat1Value: '100%',
      stat2Label: '5 Chapters',
      stat2Value: '5 Chapters',
      stat3Label: '16-Bit',
      stat3Value: '16-Bit Pixel Art',
      downloadApk: 'Download the APK (Drive)',
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
      featWaswasTitle: 'Combat against Waswas',
      featWaswasDesc: 'An innovative psychological gauge system where you overcome the whispers of doubt and shame with lucidity and serenity.',
      featBridgesTitle: 'The "Bridges of Nour"',
      featBridgesDesc: 'The game breaks the screen: earn heart points by performing real everyday actions (tidying your bed, smiling, listening).',
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
      p5: 'All of this is presented in the light of the Holy Quran and the authentic hadiths of our beloved Prophet ﷺ and our pious predecessors. As I am neither a student of religious sciences nor a scholar, I keep in mind the words of our scholars: transmitting knowledge with evidence, even humbly, is essential . This is why every statement and every quiz clearly cites its authentic source .',
      p6: 'The game is currently in Beta , so please be lenient! If you notice any mistakes, typos, or awkward phrasing, I will be immensely grateful to make the necessary corrections. A Muslim is a brother and a mirror to his brother, and it is in this spirit of mutual support that NOUR was created.',
      dua: '"May Allah make this project a cause of goodness for our children, and may He count it as a good deed on our scales on the Day of Judgment. Amen."',
      signoff: 'Have a good journey on the Path of Wisdom!',
      designerTitle: 'Abderrahmane El Malki — Designer of NOUR',
      arabicPeace: "Peace and God's mercy be upon you",
      testNotice: 'Try Chapter 1 for free with your children directly in your browser',
      testButton: 'Test the Game (1 Click)',
      apkButton: 'APK Android'
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
      optionAEffect: '+25% Doubt Waswâs',
      optionBTitle: 'Option B: Assert oneself through anger',
      optionBDesc: '"I\'m going to shout and stomp my feet so they\'ll have to pay attention to me!"',
      optionBEffect: 'Trouble & instability',
      optionCTitle: 'Option C: Discernment & Faith',
      optionCDesc: '“I seek refuge in Allah. My intention is pure: a smile is charity, I move forward in peace.”',
      optionCEffect: '✨ Dispels 100% of Waswas!',
      victoryTitle: 'Light Restored!',
      victoryDesc: "The fog has cleared. Othman’s heart shines with serene confidence and hope.",
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
      mech2Desc: 'Dialogues guided by goodwill to transform conflicts into opportunities for reconciliation.',
      mech2Badge: 'Off-Screen Actions',
      mech2Quote: '"Did you think about tidying your bed or your corner this morning? Take a minute in the real world... the game is waiting for you here!"',
      mech2Points: [
        'Kind bridges between virtual history and everyday life',
        'Developing personal responsibility from the moment one wakes up',
        'Promoting selfless assistance to seniors'
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
      sageName: 'The Sage of the Paths',
      sageRole: 'Guardian of Knowledge',
      sageQuote: '"Choose your direction at the village crossroads, for every valuable deed begins with a sincere intention."',
      sageDesc: 'The benevolent elder who welcomes Othmân at the crossroads. Witness to travelers seeking purpose, he imparts the teachings of the Book of Knowledge to illuminate their path.',
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
          bgImage: '/game-assets/verger.jpg',
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
          bgImage: '/game-assets/chambre.jpg',
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
      badge: 'The Echo of the Community',
      title: 'Adopted by Families & Gamers',
      subTagline: '✧ Authentic Testimonials • Average rating 4.9/5 ✧',
      subtitle: 'Discover why parents, educators and role-players applaud the kindness and innovative freshness of the NOUR adventure.',
      items: [
        {
          id: '1',
          name: 'Yassine B.',
          role: 'Family man & Gamer',
          badge: 'Chapter 1 Player',
          content: '" Finally, an RPG with soul! My two boys, aged 9 and 12, loved Othman. What blew me away was the \'Bridge of Nour\' scene: after the scene, my son spontaneously got up to make his bed! It\'s noble and intelligent video gaming. "',
          rating: 5
        },
        {
          id: '2',
          name: 'Amina L.',
          role: 'Teacher & Passionate about interactive storytelling',
          badge: 'Narrative Game Review',
          content: '" The mechanics of combat against the Waswâs are a brilliant game design innovation. Instead of hitting goblins with an axe, you learn to identify your negative automatic thoughts and defuse them with serenity. "',
          rating: 5
        },
        {
          id: '3',
          name: 'Sofiane M.',
          role: 'Indie Developer & Role-Player',
          badge: 'Beta Tester',
          content: '" The sound design, the sharp dialogue, and the oriental pixel art bring immense freshness to the RPG landscape. An experience accessible immediately in the browser without installing anything. "',
          rating: 5
        }
      ],
      guaranteeTitle: 'Violence-Free Guarantee • 100% Ethical & Caring',
      guaranteeDesc: 'A healthy experience, without microtransactions, without pop-up ads, respectful of your attention.',
      pegi: 'PEGI 3+ / Suitable for all audiences'
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Everything You Need to Know About the Project',
      subtitle: 'Clear answers to your questions about accessibility, pricing and platforms.',
      items: [
        {
          q: 'On which devices can NOUR be played?',
          a: 'NOUR works smoothly and instantly on all modern browsers (iOS & Android smartphones, tablets, and PCs without any installation). For Android users who prefer a dedicated app experience, an official APK file is also available for direct download.'
        },
        {
          q: 'Is the game free? What are the prices for each chapter?',
          a: "The complete Chapter 1 (« Overcoming Loneliness ») is 100% free and immediately accessible to everyone, with no intrusive ads or registration required. To unlock the continuation of the adventure (Chapters 2 and 3) and fund studio voice acting and handcrafted artwork, we offer an exclusive Introductory Offer (Founder's Pack at €4.99 instead of €7.99) as well as voluntary support (€1.99 — Artisan's Tea). This provides lifetime permanent access, with no recurring subscriptions."
        },
        {
          q: 'What age group is NOUR aimed at?',
          a: 'The game is designed for children from 7-8 years old as well as teenagers and adults. The core themes explored (overcoming loneliness, managing anger through gentleness, fortifying trust in God, honoring parents with gratitude) resonate deeply at every stage of life.'
        },
        {
          q: "What are the 'Ponts de Nour'?",
          a: "These are innovative quests that transcend the screen: at key story moments, the game kindly invites the player to perform a real act in their daily life (tidying their room, thanking a parent, smiling at a loved one) to anchor the story's values in the real world."
        },
        {
          q: 'When will the next chapters (Chapters 2, 3, 4 and 5) be released?',
          a: 'Chapters 2 (« The Hilm Road ») and 3 (« The Child in a Splint — Sabr ») are being finalized and can be unlocked via the Founder\'s Pack. Chapter 4 (« What You Still Have » — Birr al-Wālidayn) is currently in active screenwriting. You can follow the live progress of each step in the interactive « The Village Crossroads » roadmap section on this page.'
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
      subtitle: 'NOUR: Islamic RPG',
      freeText: '100% Free • No Registration Required',
      cta: 'Try (1 Click)'
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
      badge: 'لعبة تقمص أدوار بيكسل آرت ١٦ بت وقيم إسلامية نبيلة',
      titleLine1: 'ملحمة القلـب',
      titleLine2: 'من العزلة إلى الألفة والأخوة',
      description: 'عِش مع «عثمان» رحلة روحية ملهمة. واجه وساوس الشك والخوف، وتجاوز التحديات الأخلاقية، وأنجز مهمات طيبة في الحياة الحقيقية لتزكية النفس وبناء الإيمان.',
      ctaPlay: 'جرّب اللعبة مجاناً (بنقرة واحدة)',
      ctaSubtext: '١٠٠٪ مجاناً • دون تسجيل • تعمل مباشرة في المتصفح',
      trustRating: '⭐ ٤.٩/٥ • أكثر من ١٢٠٠ لاعب وعائلة',
      studioVoicesBadge: '🎙️ أصوات سينمائية استوديو وبيكسل آرت ١٦ بت',
      adFreeBadge: '١٠٠٪ دون إعلانات • أخلاقية',
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
      stat3Value: 'بيكسل آرت ١٦ بت',
      downloadApk: 'تحميل التطبيق APK (درايف)',
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
      featWaswasTitle: 'مواجهة الوسواس',
      featWaswasDesc: 'نظام نفسي مبتكر لقياس طمأنينة القلب، تدفع به خواطر الشك واليأس باليقين والاستعاذة.',
      featBridgesTitle: 'جسور النور',
      featBridgesDesc: 'تتجاوز اللعبة حدود الشاشة : اكسب نقاط الإيمان بإنجاز أعمال خيرية حقيقية (ترتيب فراشك، الابتسام، مساعدة الأهل).',
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
      apkButton: 'تطبيق أندرويد'
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
      optionAEffect: '+٢٥٪ شك ووسواس',
      optionBTitle: 'الخيار ب : التعبير بالغضب والصراخ',
      optionBDesc: '« سأصرخ وألفت انتباههم بالقوة ليجبروا على النظر إلي! »',
      optionBEffect: 'اضطراب وعدم اتزان',
      optionCTitle: 'الخيار ج : البصيرة والإيمان',
      optionCDesc: '« أَعُوذُ بِاللَّهِ — نيتي طيبة، وتبسمي في وجه أخي صدقة، أتقدم بسلام. »',
      optionCEffect: '✨ تبديد ١٠٠٪ من الوسواس !',
      victoryTitle: 'أشرق النور في القلب وتم فتح بطاقة الحكمة !',
      victoryDesc: 'لقد اختبرت الميكانيكية الروحية الأولى. في الفصل الأول الكامل، يلتقي عثمان بأهل القرية ويفتح أكثر من ١٥ درساً نورانياً.',
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
      mech2Desc: 'خيارات كلامية مبنية على اللين والمودة لتحويل الخلافات إلى فرص تآلف.',
      mech2Badge: 'مهمات خارج الشاشة',
      mech2Quote: '« هل رتبت سريرك وزاويتك هذا الصباح؟ خذ دقيقة في عالمك الحقيقي... واللعبة تنتظرك هنا! »',
      mech2Points: [
        'جسور تربوية حية بين القصة التفاعلية واليوم الواقعي',
        'تحمل المسؤولية الشخصية وتهذيب المكان والنفس',
        'تقدير كبار السن ومساعدتهم بقلب سليم'
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
      sageName: 'حكيم المفترق',
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
          bgImage: '/game-assets/verger.jpg',
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
          bgImage: '/game-assets/chambre.jpg',
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
      badge: 'أصداء المجتمع',
      title: 'ثقة العائلات واللاعبين',
      subTagline: '✧ تقييمات صادقة • معدل ٤.٩ من ٥ ✧',
      subtitle: 'اكتشف لماذا يشيد الآباء والمربون وعشاق الألعاب التربوية بروح ورسالة لعبة «نور».',
      items: [
        {
          id: '1',
          name: 'ياسين ب.',
          role: 'رب أسرة ولاعب ألعاب إلكترونية',
          badge: 'لاعب الفصل الأول',
          content: 'أخيراً لعبة فيديو ذات رسالة وروح! ولداي (٩ و ١٢ عاماً) أحبا عثمان بشدة. وما أدهشني هو مشهد \"جسر النور\": بعد انتهاء المشهد، قام ابني تلقائياً ليرتب سريره! هذا هو اللعب الراقي والنافع.',
          rating: 5
        },
        {
          id: '2',
          name: 'أمينة ل.',
          role: 'معلمة ومهتمة بالقصص التفاعلية',
          badge: 'مراجعة الألعاب الروائية',
          content: 'آلية مواجهة الوسواس ابتكار تربوي وفني رائع. بدلاً من الضرب والفؤوس، يتعلم الطفل كيف يتعرف على الخواطر السلبية ويدفعها بالطمأنينة والذكر.',
          rating: 5
        },
        {
          id: '3',
          name: 'سفيان م.',
          role: 'مطور ومحب لألعاب تقمص الأدوار',
          badge: 'مختبر النسخة التجريبية',
          content: 'المؤثرات الصوتية والحوارات المتقنة ورسومات البيكسل المشرقية تمنح تجربة منعشة ومميزة. تجربة تعمل فوراً في المتصفح دون الحاجة لتثبيت أي شيء.',
          rating: 5
        }
      ],
      guaranteeTitle: 'خالية من العنف • ١٠٠٪ قيم إيجابية وتربوية',
      guaranteeDesc: 'تجربة نقية، دون إعلانات منبثقة، تحترم وقتك وتركيز أسرتك.',
      pegi: 'تصنيف مناسب لجميع الأعمار'
    },
    faq: {
      badge: 'الأسئلة الشائعة',
      title: 'كل ما تود معرفته عن المشروع',
      subtitle: 'إجابات واضحة ومباشرة حول الأجهزة المدعومة والأسعار والمراحل القادمة.',
      items: [
        {
          q: 'على أي أجهزة يمكن تشغيل لعبة «نور» ؟',
          a: 'تعمل اللعبة بسلاسة تامة على جميع المتصفحات الحديثة (الهواتف الذكية بنظامي iOS وأندرويد، الأجهزة اللوحية، والحواسيب الشخصية دون تثبيت). ولمستخدمي أندرويد الراغبين في تثبيت تطبيق مستقل، نوفر أيضاً ملف APK رسمياً للتحميل المباشر.'
        },
        {
          q: 'هل اللعبة مجانية ؟ وما هي أسعار الفصول ؟',
          a: 'الفصل الأول كاملاً («كسر العزلة») مجاني ١٠٠٪ ومتاح للجميع دون أي إعلانات مزعجة أو اشتراك. ولفتح بقية المغامرة ودعم إنتاج الأصوات والرسومات، نوفر باقة المؤسسين بسعر مخفض (٤.٩٩ €) وهي ملكية دائمة مدى الحياة دون أي رسوم متكررة.'
        },
        {
          q: 'ما الفئة العمرية المستهدفة في اللعبة ؟',
          a: 'صُممت اللعبة لتناسب الأطفال من عمر ٧-٨ سنوات فما فوق، إضافة إلى اليافعين والكبار، حيث تعالج موضوعات تهم كل مسلم في حياته اليومية.'
        },
        {
          q: 'ما هي «جسور النور» ؟',
          a: 'هي مهمات عملية مبتكرة تتجاوز الشاشة : في لحظات معينة من القصة، تدعو اللعبة اللاعب بلطف إلى أداء عمل طيب حقيقي في يومه (ترتيب غرفته، شكر والديه، مساعدة صديق) لترسيخ الفضيلة في الواقع.'
        },
        {
          q: 'متى تصدر الفصول القادمة ؟',
          a: 'الفصلان ٢ و ٣ قيد اللمسات الأخيرة ومتاحان عبر باقة المؤسسين، والفصل ٤ في مرحلة السيناريو. يمكنك متابعة التحديثات المباشرة عبر خارطة الطريق في هذه الصفحة.'
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
      subtitle: 'نور : لعبة أدوار إسلامية',
      freeText: '١٠٠٪ مجاناً • دون تسجيل',
      cta: 'تجربة (بنقرة واحدة)'
    }
  }
};
