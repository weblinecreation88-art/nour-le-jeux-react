import { CharacterTraits } from '../types';

export const INITIAL_CHARACTER_TRAITS: CharacterTraits = {
  discipline: 25,
  sabr: 20,
  hilm: 20,
  adab: 25,
  vitalite: 20,
  ilm: 15
};

export interface PersonalitySummary {
  title: string;
  subtitle: string;
  description: string;
  dominantTrait: keyof CharacterTraits;
  secondaryTrait: keyof CharacterTraits;
  dominantTraitName: string;
  advice: string;
  improvementArea?: string;
}

export interface WaswasAdaptiveAttack {
  dominantTrait: keyof CharacterTraits;
  whisper: string;
  whisperSubtitle: string;
  arabic?: string;
  options: {
    id: 'A' | 'B' | 'C';
    text: string;
    concept: string;
    isCorrect: boolean;
    feedback: string;
  }[];
}

export function getWaswasAdaptiveAttack(traits?: CharacterTraits): WaswasAdaptiveAttack {
  const safeTraits = traits || INITIAL_CHARACTER_TRAITS;
  const sorted = (Object.keys(safeTraits) as (keyof CharacterTraits)[]).sort(
    (a, b) => (safeTraits[b] || 0) - (safeTraits[a] || 0)
  );
  const dominant = sorted[0] || 'discipline';

  const ATTACKS: Record<keyof CharacterTraits, WaswasAdaptiveAttack> = {
    discipline: {
      dominantTrait: 'discipline',
      whisper: '« Tu as toujours besoin que tout soit parfaitement en ordre… Et si, pour une fois, quelque chose échappait à ton contrôle ? Abandonne, tu ne pourras jamais tout maîtriser. »',
      whisperSubtitle: 'Waswâs de l\'Illusion du Contrôle Absolu',
      arabic: 'يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ',
      options: [
        {
          id: 'A',
          text: '« Mon ordre n\'est pas une quête de perfection orgueilleuse, mais un pas humble et régulier vers la clarté ! »',
          concept: 'Discipline équilibrée & Humilité',
          isCorrect: true,
          feedback: 'La véritable discipline s’allie à la confiance en Allah et dissipe l’illusion du contrôle absolu.'
        },
        {
          id: 'B',
          text: '« C’est vrai, si je fais une seule erreur, tout mon voyage n’a plus aucune valeur... »',
          concept: 'Culpabilité paralysante',
          isCorrect: false,
          feedback: 'Le Waswâs utilise la perfection pour te faire abandonner au premier faux pas.'
        },
        {
          id: 'C',
          text: '« Je suis parfait, mes routines sont infaillibles et je ne me tromperai jamais ! »',
          concept: 'Suffisance illusoire',
          isCorrect: false,
          feedback: 'L’autosuffisance est le piège qui nourrit l’Ombre.'
        }
      ]
    },
    adab: {
      dominantTrait: 'adab',
      whisper: '« Tu veux tellement éviter de décevoir ou de blesser les autres… Alors tais-toi. Cède. Fais passer leurs attentes avant la vérité et avant ton âme. »',
      whisperSubtitle: 'Waswâs de la Peur de Déplaire & Dépendance Sociale',
      arabic: 'إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا',
      options: [
        {
          id: 'A',
          text: '« Ma bienveillance ne cherche pas à plaire aux créatures : elle est vouée à Allah seul avec sincérité et dignité ! »',
          concept: 'Ikhlās (Sincérité & Dignité)',
          isCorrect: true,
          feedback: 'L’intention pure libère le cœur de la dépendance au regard d’autrui et brise le Waswâs !'
        },
        {
          id: 'B',
          text: '« Alors je ne ferai plus jamais confiance à personne et je resterai enfermé. »',
          concept: 'Rancœur & Repli',
          isCorrect: false,
          feedback: 'Le Waswâs cherche à éteindre la générosité de ton cœur.'
        },
        {
          id: 'C',
          text: '« Je vais en faire deux fois plus pour qu’ils soient obligés de m’admirer ! »',
          concept: 'Ostentation (Riyāʾ)',
          isCorrect: false,
          feedback: 'Chercher l’approbation des créatures affaiblit la lumière de l’âme.'
        }
      ]
    },
    ilm: {
      dominantTrait: 'ilm',
      whisper: '« Tu veux encore comprendre… encore analyser… encore attendre. Tu n\'en sauras jamais assez : il vaut mieux ne jamais commencer à agir. »',
      whisperSubtitle: 'Waswâs de l\'Hésitation Perpétuelle',
      arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
      options: [
        {
          id: 'A',
          text: '« Le vrai savoir ne reste pas figé dans l\'attente : il s\'incarne aujourd\'hui dans mon action sincère ! »',
          concept: 'ʿAmal (Action issue du Savoir)',
          isCorrect: true,
          feedback: 'La science authentique pousse à l’action courageuse et dissipe la paralysie !'
        },
        {
          id: 'B',
          text: '« Tu as raison, je ne sais pas encore tout, je ne dois rien tenter avant des années... »',
          concept: 'Hésitation stérile',
          isCorrect: false,
          feedback: 'Le Waswâs t’enferme dans le doute perpétuel.'
        },
        {
          id: 'C',
          text: '« Mon savoir me place au-dessus de tout le monde, je n’ai besoin de rien d’autre. »',
          concept: 'Orgueil intellectuel',
          isCorrect: false,
          feedback: 'Le savoir sans humilité devient un fardeau ténébreux.'
        }
      ]
    },
    vitalite: {
      dominantTrait: 'vitalite',
      whisper: '« Tu voulais tout porter sur tes seules forces d\'enfant... Mais la montagne est trop vaste. Repose-toi indéfiniment, laisse les autres avancer sans toi. »',
      whisperSubtitle: 'Waswâs du Confort & de l\'Abattement',
      arabic: 'وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ',
      options: [
        {
          id: 'A',
          text: '« Le repos est un droit pour mon corps, mais je ne laisserai pas la facilité éteindre mon élan ! »',
          concept: 'Tawakkul (Confiance agissante)',
          isCorrect: true,
          feedback: 'L’union du corps respecté et de la confiance spirituelle fait reculer l’Ombre !'
        },
        {
          id: 'B',
          text: '« C’est fini... Mon corps me lâche, je n’arriverai jamais au sommet. »',
          concept: 'Abattement physique',
          isCorrect: false,
          feedback: 'Le Waswâs amplifie la fatigue passagère pour briser ta détermination.'
        },
        {
          id: 'C',
          text: '« Je vais forcer jusqu’à l’écroulement, je n’ai besoin d’aucun repos ! »',
          concept: 'Négligence de soi',
          isCorrect: false,
          feedback: 'Le respect des limites de son corps fait partie de la sagesse.'
        }
      ]
    },
    sabr: {
      dominantTrait: 'sabr',
      whisper: '« Tu patientes encore… mais combien de temps vas-tu attendre dans le silence avant d\'admettre que rien ne changera ? Abandonne tout. »',
      whisperSubtitle: 'Waswâs de l\'Usure & du Doute Silencieux',
      arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا • إِنَّ مَعَ الْعُسْرِ يُسْرًا',
      options: [
        {
          id: 'A',
          text: '« Le Sabr n\'est pas une attente stérile : c\'est l\'endurance debout, confiante en la délivrance promise par Allah ! »',
          concept: 'Sabr Jamīl (Patience belle & active)',
          isCorrect: true,
          feedback: 'La persévérance confiante transforme l’épreuve en lumière !'
        },
        {
          id: 'B',
          text: '« Rien ne change jamais... À quoi bon continuer à espérer ? »',
          concept: 'Désespoir intérieur',
          isCorrect: false,
          feedback: 'Le désespoir est l’arme favorite du Waswâs.'
        },
        {
          id: 'C',
          text: '« Je vais m’isoler dans le silence pour que plus rien ne me touche. »',
          concept: 'Fuite du monde',
          isCorrect: false,
          feedback: 'La patience s’exprime au cœur de la vie, non dans le retrait amer.'
        }
      ]
    },
    hilm: {
      dominantTrait: 'hilm',
      whisper: '« Tu retiens tes paroles et tu fais le doux... Mais pourquoi devrais-tu toujours encaisser les injustices sans répliquer ? Laisse ta colère exploser ! »',
      whisperSubtitle: 'Waswâs de la Révolte & de la Rancœur',
      arabic: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',
      options: [
        {
          id: 'A',
          text: '« Ma retenue n’est pas une faiblesse : le vrai fort est celui qui dompte son âme pour préserver la paix et la vérité ! »',
          concept: 'Hilm Prophétique & Dignité',
          isCorrect: true,
          feedback: 'La maîtrise de soi et le pardon éteignent le feu du Waswâs !'
        },
        {
          id: 'B',
          text: '« Tu as raison, ils méritent toute ma haine et ma vengeance ! »',
          concept: 'Explosion destructrice',
          isCorrect: false,
          feedback: 'La colère incontrôlée détruit la paix du cœur.'
        },
        {
          id: 'C',
          text: '« Je vais faire semblant de pardonner mais garder ma haine secrète. »',
          concept: 'Rancune dissimulée',
          isCorrect: false,
          feedback: 'La rancœur ronge l’âme de l’intérieur.'
        }
      ]
    }
  };

  return ATTACKS[dominant] || ATTACKS.discipline;
}

export const TRAIT_CONFIG = {
  discipline: {
    label: 'Discipline',
    icon: '🧭',
    color: '#D97706', // amber-600
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    description: 'Ordre, régularité, respect des engagements et clarté d\'esprit'
  },
  sabr: {
    label: 'Sabr',
    icon: '🛡️',
    color: '#059669', // emerald-600
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    description: 'Patience face à l\'épreuve et persévérance dans l\'effort'
  },
  hilm: {
    label: 'Hilm',
    icon: '🤍',
    color: '#3B82F6', // blue-500
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    description: 'Maîtrise de soi, retenue face à la colère et douceur du cœur'
  },
  adab: {
    label: 'Adab',
    icon: '🤝',
    color: '#EC4899', // pink-500
    badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
    description: 'Bienveillance, politesse, écoute et respect des convenances'
  },
  vitalite: {
    label: 'Vitalité',
    icon: '💪',
    color: '#EF4444', // red-500
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
    description: 'Énergie physique, hydratation saine et respect du corps'
  },
  ilm: {
    label: 'Ilm',
    icon: '🧠',
    color: '#8B5CF6', // purple-500
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    description: 'Connaissance, réflexion approfondie et curiosité féconde'
  }
} as const;

export function getPersonalityProfile(traits: CharacterTraits): PersonalitySummary {
  // Check if traits are all very close (Equilibré)
  const values = Object.values(traits) as number[];
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const isBalanced = maxVal - minVal <= 10 && maxVal > 0;

  // Sort traits by value descending
  const sorted = (Object.keys(traits) as (keyof CharacterTraits)[]).sort(
    (a, b) => (traits[b] || 0) - (traits[a] || 0)
  );

  const top1 = sorted[0];
  const top2 = sorted[1];

  if (isBalanced) {
    return {
      title: "Othmân l'Équilibré",
      subtitle: "L'harmonie entre le corps, l'esprit et le cœur",
      description: "Othmân avance avec tempérance. Il n'accorde d'excès ni à la hâte ni à l'oisiveté, maintenant un juste équilibre dans chaque aspect de sa vie.",
      dominantTrait: top1,
      secondaryTrait: top2,
      dominantTraitName: "Équilibre",
      advice: "Préserve cette rare harmonie sans craindre de déployer tes talents avec ardeur."
    };
  }

  // Key combination lookup (top1 + top2)
  const comboKey1 = `${top1}_${top2}`;
  const comboKey2 = `${top2}_${top1}`;

  const COMBOS: Record<string, { title: string; subtitle: string; description: string; advice: string }> = {
    'discipline_sabr': {
      title: 'Othmân le Persévérant',
      subtitle: 'La constance inébranlable',
      description: 'Othmân allie rigueur quotidienne et patience sans faille. Rien ne le détourne de son cap, même quand la route devient ardue.',
      advice: 'Pense à accorder du repos à ton esprit pour préserver ton élan sur la durée.'
    },
    'hilm_adab': {
      title: 'Othmân le Pacificateur',
      subtitle: 'La noblesse du cœur et la douceur',
      description: 'Face au mépris ou à la précipitation d\'autrui, Othmân sait désamorcer les rancœurs par un mot apaisant et un regard digne.',
      advice: 'Exprime tes propres besoins avec la même bienveillance que celle accordée aux autres.'
    },
    'ilm_adab': {
      title: 'Othmân le Sage',
      subtitle: 'La science illuminée par les bonnes manières',
      description: 'Othmân ne brandit jamais le savoir comme une arme : il l\'utilise pour éclairer et réconforter ceux qui l\'entourent.',
      advice: 'Veille à toujours traduire tes réflexions en actions concrètes au service de ta communauté.'
    },
    'vitalite_discipline': {
      title: 'Othmân le Dynamique',
      subtitle: 'L\'énergie vive canalisée avec rigueur',
      description: 'Othmân a un pas décidé et une hygiène de vie exemplaire. Son énergie est toujours mise au service d\'un objectif clair.',
      advice: 'Prends le temps de ralentir pour méditer sur la beauté des choses simples.'
    },
    'sabr_hilm': {
      title: 'Othmân le Patient',
      subtitle: 'La paix intérieure face aux tempêtes',
      description: 'Inaltérable devant les épreuves, Othmân absorbe les secousses sans céder à la colère ni à l\'abattement.',
      advice: 'N\'hésite pas à partager ton fardeau avec des compagnons de confiance.'
    },
    'ilm_discipline': {
      title: 'Othmân le Méthodique',
      subtitle: 'La clarté de l\'esprit et la régularité',
      description: 'Othmân structure sa pensée et organise son temps avec soin. Il ne commence rien sans en avoir pesé les fondements.',
      advice: 'Garde une part d\'accueil pour les imprévus bienheureux du destin.'
    },
    'vitalite_adab': {
      title: 'Othmân le Serviteur Bienveillant',
      subtitle: 'La vigueur mise au service des autres',
      description: 'Premier à porter un fardeau, à saluer le passant ou à secourir un commerçant en détresse, sa force est un bouclier pour autrui.',
      advice: 'Recharge tes forces corporelles par un sommeil paisible et réparateur.'
    },
    'ilm_sabr': {
      title: 'Othmân le Méditant',
      subtitle: 'L\'étude patiente et la réflexion profonde',
      description: 'Othmân sait que la compréhension des mystères exige du temps. Il écoute avant de parler et observe avant de juger.',
      advice: 'N\'hésite pas à transmettre tes intuitions pour faire grandir ceux qui marchent avec toi.'
    },
    'vitalite_sabr': {
      title: 'Othmân le Résilient',
      subtitle: 'L\'endurance du corps et de l\'âme',
      description: 'Capable de longues marches et résistant aux fatigues du voyage, il ne se plaint jamais de l\'effort consenti.',
      advice: 'N\'oublie pas d\'hydrater et de nourrir ton corps avec mesure et gratitude.'
    },
    'discipline_adab': {
      title: 'Othmân le Digne',
      subtitle: 'L\'élégance morale et le respect des engagements',
      description: 'Othmân honore sa parole avec une politesse raffinée. Sa conduite inspire immédiatement la confiance et le respect.',
      advice: 'Fais preuve de mansuétude envers ceux dont la discipline est encore fragile.'
    },
    'ilm_hilm': {
      title: 'Othmân le Clairvoyant',
      subtitle: 'La lucidité sereine et sans rancœur',
      description: 'Othmân comprend les faiblesses humaines et y répond par l\'indulgence instruite plutôt que par le reproche.',
      advice: 'Continue d\'enseigner avec humilité et bienveillance.'
    },
    'vitalite_hilm': {
      title: 'Othmân le Vigoureux Paisible',
      subtitle: 'La force tranquille sans agressivité',
      description: 'Fort de corps mais doux de caractère, il impressionne par sa sérénité et son refus de toute brutalité inutile.',
      advice: 'Maintiens cette alliance rare entre puissance physique et douceur du cœur.'
    }
  };

  const combo = COMBOS[comboKey1] || COMBOS[comboKey2];
  if (combo) {
    return {
      title: combo.title,
      subtitle: combo.subtitle,
      description: combo.description,
      dominantTrait: top1,
      secondaryTrait: top2,
      dominantTraitName: `${TRAIT_CONFIG[top1]?.label} & ${TRAIT_CONFIG[top2]?.label}`,
      advice: combo.advice
    };
  }

  // Single dominant fallback
  const singleProfiles: Record<keyof CharacterTraits, { title: string; subtitle: string; description: string; advice: string }> = {
    discipline: {
      title: 'Othmân le Méthodique',
      subtitle: 'La clarté dans chaque engagement',
      description: 'Othmân pose chaque geste avec rigueur. Il ne laisse rien au hasard et tient fermement ses résolutions du matin.',
      advice: 'Garde de la souplesse pour accueillir l\'imprévu avec sérénité.'
    },
    sabr: {
      title: 'Othmân le Persévérant',
      subtitle: 'La force tranquille face au temps',
      description: 'Othmân sait que les nobles fruits prennent du temps à mûrir. Il avance sans faiblir, même quand la route devient ardue.',
      advice: 'Prends le temps de célébrer chaque petite victoire du quotidien.'
    },
    hilm: {
      title: 'Othmân le Pacificateur',
      subtitle: 'La dignité et la retenue du cœur',
      description: 'Face au mépris ou à la provocation, Othmân sait retenir sa langue. Son calme désamorce les tensions avant qu\'elles ne s\'embrasent.',
      advice: 'Exprime tes besoins avec la même douceur que celle accordée aux autres.'
    },
    adab: {
      title: 'Othmân le Bienveillant',
      subtitle: 'L\'attention portée à autrui',
      description: 'Chaque personne croisée reçoit d\'Othmân un regard digne et un salut respectueux. Sa présence apaise ceux qui l\'entourent.',
      advice: 'Veille à ne pas t\'oublier toi-même en te dévouant pour autrui.'
    },
    vitalite: {
      title: 'Othmân le Vif',
      subtitle: 'L\'énergie au service du noble but',
      description: 'Othmân prend soin du réceptacle de son âme : son corps. Il marche d\'un pas alerte, s\'hydrate avec conscience et déploie une énergie saine.',
      advice: 'Accorde à ton esprit des moments de contemplation aussi intenses que tes actions.'
    },
    ilm: {
      title: 'Othmân le Clairvoyant',
      subtitle: 'La recherche de la sagesse profonde',
      description: 'Othmân observe, questionne et médite. Il cherche à comprendre les causes cachées avant d\'émettre le moindre jugement.',
      advice: 'Transforme toujours ta connaissance en action concrète pour qu\'elle porte ses fruits.'
    }
  };

  const active = singleProfiles[top1] || singleProfiles.discipline;
  return {
    title: active.title,
    subtitle: active.subtitle,
    description: active.description,
    dominantTrait: top1,
    secondaryTrait: top2,
    dominantTraitName: TRAIT_CONFIG[top1]?.label || 'Discipline',
    advice: active.advice
  };
}
