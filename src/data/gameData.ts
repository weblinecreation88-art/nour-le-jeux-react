import { Character, Chapter, WisdomCard, Testimonial } from '../types';

export const GAME_URL = "https://playnour.online/";
export const APK_DOWNLOAD_URL = "https://drive.google.com/file/d/1BVqte-1HLojNWvxhMccLfMRyAFRC8rJH/view?usp=sharing";

export const CHARACTERS: Character[] = [
  {
    id: "othman",
    name: "Othmân",
    arabicName: "عثمان",
    role: "Le Jeune Héros",
    quote: "« Et si je m'approche... vont-ils me trouver bizarre ? Par quoi on commence quand on a l'impression d'être invisible ? »",
    description: "Un jeune garçon sensible et réfléchi, sur le point de quitter la douce sécurité de sa terrasse familiale. Face aux bruits du village et à la peur d'être rejeté, il apprend à transformer ses hésitations en courage sincère.",
    portrait: "/game-assets/othman.png",
    themeColor: "amber",
    stats: {
      sagesse: 68,
      serenite: 55,
      courage: 72,
      hilm: 60,
    },
    traits: ["Cœur sincère", "Sensible", "Bâton de voyage", "Quête d'amitié"]
  },
  {
    id: "noura",
    name: "Noura",
    arabicName: "نورة",
    role: "La Mère & Mentor",
    quote: "« Le chemin ne commence pas sous tes semelles, Othmân. Il commence dans ton cœur. Quand l'intention est sincère, chaque pas trouve son sens. »",
    description: "La mère d'Othmân et sa boussole morale. Toujours présente pour dénouer les angoisses d'un mot doux, elle enseigne que la vraie force réside dans la constance des petits gestes et la bienveillance du regard.",
    portrait: "/game-assets/noura.png",
    themeColor: "emerald",
    stats: {
      sagesse: 95,
      serenite: 92,
      courage: 88,
      hilm: 98,
    },
    traits: ["Patience infinie", "Guide maternelle", "Sagesse quotidienne", "Écoute profonde"]
  },
  {
    id: "waswas",
    name: "L'Ombre du Waswâs",
    arabicName: "الوسواس",
    role: "L'Adversaire Intérieur",
    quote: "« Tu n'y arriveras jamais... Reste au lit, la montagne est trop haute, personne n'attend après toi... »",
    description: "Une brume chuchotante sans forme corporelle, née des doutes, de la fatigue et de la peur du regard d'autrui. Elle ne possède aucun pouvoir réel, si ce n'est d'amplifier les craintes d'Othmân pour le figer dans l'inaction.",
    portrait: "/game-assets/waswas.png",
    themeColor: "purple",
    stats: {
      sagesse: 20,
      serenite: 10,
      courage: 40,
      hilm: 15,
    },
    traits: ["Murmures toxiques", "Brume insaisissable", "Amplificateur de peur", "Dissipable par la foi"]
  },
  {
    id: "narrateur",
    name: "Le Sage des Sentiers",
    arabicName: "الشيخ الحكيم",
    role: "Gardien des Savoirs",
    quote: "« Choisis ta direction au carrefour du village, car tout acte de valeur commence par une intention sincère. »",
    description: "Le sage bienveillant qui accueille Othmân au carrefour des chemins. Témoin des voyageurs en quête de sens, il transmet au joueur les enseignements du Livre du Savoir pour éclairer sa route.",
    portrait: "/game-assets/narrateur.png",
    themeColor: "sky",
    stats: {
      sagesse: 99,
      serenite: 90,
      courage: 85,
      hilm: 94,
    },
    traits: ["Livre du Savoir", "Mémoire des anciens", "Vision d'ensemble", "Clarté d'esprit"]
  }
];

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    number: "01",
    title: "Vaincre la Solitude",
    arabicTitle: "طريق الصداقة والمؤانسة",
    subtitle: "Se faire des amis & briser l'invisibilité",
    status: "available",
    statusLabel: "Chapitre 1 Complet — Jouable Dès Maintenant",
    synopsis: "Othmân quitte son lit et doit traverser la ruelle jusqu'au grand carrefour. Confronté aux premiers murmures du Waswâs et à l'appréhension de parler aux autres jeunes du village, il découvre comment un simple sourire et une parole bienveillante ouvrent les portes les plus verrouillées.",
    virtue: "L'Ouverture du Cœur & Le Courage Social",
    location: "La Terrasse, Le Carrefour du Chêne & La Vallée",
    bgImage: "/game-assets/carrefour.jpg",
    highlights: [
      "Dissiper le premier assaut de la brume du Waswâs",
      "Le Pont de Nour : Ordonner son lit dans la vraie vie",
      "Débloquer l'Adab du langage dans le Livre du Savoir",
      "Entrer en contact avec le groupe d'enfants du village"
    ]
  },
  {
    id: 2,
    number: "02",
    title: "Le chemin du Hilm",
    arabicTitle: "طريق الحلم وضبط النفس",
    subtitle: "La Colère & la Maîtrise de soi",
    status: "upcoming",
    statusLabel: "Chapitre 2 — Finalisation en cours",
    synopsis: "Devant les étals du marché aux fruits, une bousculade injuste renverse les paniers. Othmân sent le sang lui monter aux tempes. Pour progresser, il devra dompter l'embrasement de l'irritation et expérimenter la puissance libératrice du pardon et de la douceur.",
    virtue: "Al-Hilm (Douceur, Clémence & Sang-froid)",
    location: "Le Marché aux Fruits & L'Atelier du Potier",
    bgImage: "/game-assets/verger.jpg",
    highlights: [
      "Système de respiration et désamorçage de l'agressivité",
      "Éviter le piège de la réplique blessante",
      "Réparer l'erreur d'un autre sans orgueil",
      "Action réelle : Apaiser une dispute autour de soi"
    ]
  },
  {
    id: 3,
    number: "03",
    title: "Le chemin du Tawakkul",
    arabicTitle: "طريق التوكل واليقين",
    subtitle: "La Décision & la Confiance en Dieu",
    status: "development",
    statusLabel: "Chapitre 3 — En développement",
    synopsis: "Au pied du sentier des falaises, le brouillard masque l'horizon. Othmân hésite à s'engager. Il apprend que la confiance n'est pas l'absence d'efforts, mais le fait d'attacher sa monture tout en remettant l'issue entre les mains du Créateur.",
    virtue: "At-Tawakkul (L'Effort Sincère & La Confiance)",
    location: "Le Sentier des Brumes & Les Hauts Plateaux",
    bgImage: "/game-assets/waswas_bg.jpg",
    highlights: [
      "Faire les causes avant d'attendre le résultat",
      "L'énigme du berger et du nœud de corde",
      "Raffermir sa détermination face à l'inconnu",
      "Déblocage de l'invocation de la décision"
    ]
  },
  {
    id: 4,
    number: "04",
    title: "Ce que tu as encore",
    arabicTitle: "طريق بر الوالدين والإحسان",
    subtitle: "La Bonté envers les Parents & la Reconnaissance",
    status: "development",
    statusLabel: "Chapitre 4 — En Scénarisation",
    synopsis: "Après un agacement matinal envers sa mère, Othmân quitte précipitamment la maison. Réfugié sous un grand arbre avec son ami d'enfance, ils observent en silence un oiseau nourrir son nid. Une confidence inattendue et bouleversante va alors bousculer toutes ses certitudes sur ce qu'il croyait ordinaire dans son quotidien.",
    virtue: "Birr al-Wālidayn (La Piété Filiale & La Gratitude du Cœur)",
    location: "La Maison Familiale & L'Arbre des Confidences",
    bgImage: "/game-assets/chambre.jpg",
    highlights: [
      "Désamorcer les murmures d'irritation et d'impatience",
      "Méditation sous le grand chêne : l'oiseau et la subsistance",
      "Une confidence inattendue sous les branches",
      "Prendre conscience de la valeur inestimable de ses proches"
    ]
  },
  {
    id: 5,
    number: "05",
    title: "La Montagne Intérieure",
    arabicTitle: "جبل الصبر والثبات",
    subtitle: "La Persévérance (Sabr) face à l'épreuve",
    status: "development",
    statusLabel: "Chapitre 5 — Climax de la Saga",
    synopsis: "L'ascension finale vers le sommet de la montagne. Confronté à la fatigue physique et à l'adversité, Othmân unit toutes les vertus acquises pour surmonter l'épreuve finale et faire rayonner la Lumière (Nour) sur l'ensemble de la vallée.",
    virtue: "As-Sabr (L'Endurance Noble & La Constance)",
    location: "Le Sanctuaire du Pic Céleste",
    bgImage: "/game-assets/vallee.jpg",
    highlights: [
      "L'épreuve ultime face au Souffle des Ombres",
      "L'harmonie complète de l'arbre de sagesse",
      "Couronnement du héros et bénédiction de la vallée",
      "Déblocage du mode Libre & Récits secondaires"
    ]
  }
];

export const WISDOM_CARDS: WisdomCard[] = [
  {
    id: "adab_parole",
    title: "L'Adab de la Parole",
    arabicPhrase: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    concept: "Dire le bien ou garder le silence",
    quote: "« Que celui qui croit en Dieu et au Jour Dernier dise du bien ou qu'il garde le silence. »",
    source: "Rapporté par al-Bukhari & Muslim",
    lesson: "La langue est le miroir du cœur. Retenir une parole inutile ou blessante est une marque de maturité supérieure et protège la paix intérieure.",
    category: "adab"
  },
  {
    id: "sourire_aumone",
    title: "Le Rayonnement du Sourire",
    arabicPhrase: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    concept: "La Bienveillance Universelle",
    quote: "« Ton sourire à l'égard de ton frère est une aumône pour toi. »",
    source: "Rapporté par at-Tirmidhi (Authentique)",
    lesson: "Un simple sourire sincère suffit souvent à briser la glace de la timidité et à chasser les sentiments d'invisibilité chez soi et chez autrui.",
    category: "serenite"
  },
  {
    id: "istiadha_protection",
    title: "Le Bouclier de l'Isti'ādhah",
    arabicPhrase: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    concept: "Dissiper les pensées toxiques",
    quote: "« Je cherche refuge auprès d'Allah contre le démon banni. »",
    source: "Parole Coranique & Enseignement Prophétique",
    lesson: "Face aux pensées intrusives qui te disent que tu ne vaux rien, recentre ton cœur sur la protection divine et reprends ta marche calmement.",
    category: "courage"
  },
  {
    id: "ordre_espace",
    title: "L'Harmonie du Quotidien",
    arabicPhrase: "النَّظَافَةُ وَحُسْنُ التَّدْبِيرِ",
    concept: "Les Ponts de Nour (Action Réelle)",
    quote: "« L'ordre du monde extérieur apaise le tumulte intérieur de l'esprit. »",
    source: "Sagesse éducative & Pédagogie de NOUR",
    lesson: "Prendre deux minutes chaque matin pour faire son lit et ranger son espace prépare l'esprit à triompher des grands défis de la journée.",
    category: "famille"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Yassine B.",
    role: "Père de famille & Gamer",
    badge: "Joueur du Chapitre 1",
    content: "Enfin un RPG avec une âme ! Mes deux garçons de 9 et 12 ans ont adoré Othmân. Ce qui m'a bluffé, c'est le 'Pont de Nour' : après la scène, mon fils s'est levé spontanément pour ranger son lit ! C'est du jeu vidéo noble et intelligent.",
    rating: 5
  },
  {
    id: "2",
    name: "Amina L.",
    role: "Enseignante & Passionnée de récits interactifs",
    badge: "Critique Jeu Narratif",
    content: "La mécanique du combat contre le Waswâs est une trouvaille de game design brillante. Au lieu de taper sur des gobelins avec une hache, on apprend à identifier ses pensées automatiques négatives et à les désamorcer par la sérénité.",
    rating: 5
  },
  {
    id: "3",
    name: "Sofiane M.",
    role: "Développeur Indie & Rôliste",
    badge: "Testeur Bêta",
    content: "L'ambiance sonore, les dialogues ciselés et le pixel art oriental apportent une fraîcheur immense dans le paysage du RPG. Une expérience accessible immédiatement dans le navigateur sans rien installer.",
    rating: 5
  }
];

export const FAQS = [
  {
    q: "Sur quels appareils peut-on jouer à NOUR ?",
    a: "NOUR fonctionne de manière fluide et instantanée sur tous les navigateurs modernes (smartphones iOS & Android, tablettes et PC sans aucune installation). Pour les utilisateurs Android souhaitant une expérience application dédiée, un fichier APK officiel est également disponible au téléchargement direct."
  },
  {
    q: "Le jeu est-il gratuit ? Quels sont les tarifs des chapitres ?",
    a: "Le Chapitre 1 complet (« Vaincre la Solitude ») est 100% gratuit et accessible immédiatement à tous, sans publicité intrusive ni inscription requise. Pour débloquer la suite de l'aventure (Chapitres 2 et 3) et financer les enregistrements de voix studio et les décors, nous proposons une Offre de Lancement exclusive (Pack Fondateur à 4,99 € au lieu de 7,99 €) ainsi qu'un soutien libre (1,99 € — Thé de l'Artisan). Il s'agit d'un accès définitif et à vie, sans abonnement récurrent."
  },
  {
    q: "À quelle tranche d'âge NOUR s'adresse-t-il ?",
    a: "Le jeu s'adresse aussi bien aux enfants dès 7-8 ans qu'aux adolescents et adultes. Les thématiques abordées (surmonter la solitude, gérer sa colère par la douceur, fortifier sa confiance en Dieu, honorer ses parents avec reconnaissance) résonnent avec profondeur à tout âge de la vie."
  },
  {
    q: "Que sont les 'Ponts de Nour' ?",
    a: "Ce sont des quêtes novatrices qui dépassent l'écran : à certains moments clés, le jeu invite avec bienveillance le joueur à poser un acte réel dans son quotidien (ranger son espace, remercier un parent, sourire à un proche) pour ancrer les valeurs du récit dans la vraie vie."
  },
  {
    q: "Quand sortiront les prochains chapitres (Chapitres 2, 3, 4 et 5) ?",
    a: "Les Chapitres 2 (« Le Chemin du Hilm ») et 3 (« L'Enfant à l'Attelle — Sabr ») sont en cours de finalisation et débloquables via le Pack Fondateur. Le Chapitre 4 (« Ce que tu as encore » — Birr al-Wālidayn) est actuellement en phase active de scénarisation. Vous pouvez suivre l'avancée de chaque étape en direct dans la section interactive « Le Carrefour des Sentiers » de cette page d'accueil."
  }
];
