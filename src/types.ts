export type CharacterId =
  | 'personnage'
  | 'noura'
  | 'waswas'
  | 'grand_waswas'
  | 'jeune'
  | 'marchand'
  | 'enfant'
  | 'narration'
  | 'system';

export type CharacterEmotion =
  | 'neutral'
  | 'thoughtful'
  | 'determined'
  | 'worried'
  | 'smiling'
  | 'surprised'
  | 'shadow';

export interface CharacterTraits {
  discipline: number; // 🧭 Ordre, régularité, respect des engagements
  sabr: number;       // 🛡️ Patience, persévérance dans l'effort
  hilm: number;       // 🤍 Maîtrise de soi, calme, retenue
  adab: number;       // 🤝 Comportement, respect, bonnes manières
  vitalite: number;   // 💪 Hygiène de vie, activité physique, endurance
  ilm: number;        // 🧠 Connaissance, apprentissage, compréhension
}

export interface DialogueChoice {
  id: string;
  label: string;
  responsePreview?: string;
  choiceType?: 'habit' | 'decision' | 'ordeal';
  requiredTrait?: {
    trait: keyof CharacterTraits;
    min: number;
    fallbackLabel?: string;
  };
  disabled?: boolean;
  disabledReason?: string;
  badge?: string;
  interactiveSpot?: { x: string; y: string };
  targetSceneId?: number;
  moralKey?: string;
  statBonus?: { stat: 'savoir' | 'constance' | 'discipline' | 'bonte'; amount: number };
  traitGains?: Partial<CharacterTraits>;
  habitMessage?: string;
  setNarrativeFlags?: Record<string, boolean | string | number>;
  isStripePromo?: boolean;
  stripeUrl?: string;
  originalPrice?: string;
  discountRate?: string;
  promoPrice?: string;
}

export type BeatType =
  | 'dialogue'
  | 'choice'
  | 'quiz'
  | 'real_action'
  | 'xp'
  | 'climax_combat'
  | 'memory_fragments'
  | 'chapter_end';

export interface VisualActionVignette {
  icon: string;
  badge: string;
  title: string;
  description?: string;
  glowColor?: 'amber' | 'emerald' | 'cyan' | 'purple' | 'blue';
  imageUrl?: string;
}

export interface BeatAdaptiveVariant {
  dominantTrait?: keyof CharacterTraits;
  archetype?: 'perseverant' | 'pacificateur' | 'sage' | 'dynamique' | 'patient' | 'methodique' | 'serviteur' | 'meditant' | 'resilient' | 'equilibre' | string;
  requiredFlag?: string;
  requiredFlagValue?: boolean | string | number;
  text: string;
  arabicText?: string;
  actionVignette?: VisualActionVignette;
}

export interface Beat {
  id: string;
  type: BeatType;
  speaker?: CharacterId;
  speakerName?: string;
  text?: string;
  arabicText?: string;
  emotion?: CharacterEmotion;
  quizId?: string;
  realActionId?: string;
  climaxStepId?: string;
  unlockedConceptId?: string;
  isPontDeNour?: boolean;
  xpAmount?: number;
  xpReason?: string;
  waswasXpAmount?: number;
  waswasReason?: string;
  choices?: DialogueChoice[];
  requiredNarrativeFlag?: { flag: string; value?: boolean | string };
  adaptiveVariants?: BeatAdaptiveVariant[];
  actionVignette?: VisualActionVignette;
}

export interface QuizOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  isCorrect: boolean;
}

export interface IslamicReference {
  concept: string;
  reference: string;
  citationText: string;
  sourceType: 'Coran' | 'Hadith' | 'Pédagogie';
  arabic?: string;
  hadithCollection?: string;
}

export interface Quiz {
  id: string;
  topic: string;
  promptSpeaker: CharacterId;
  question: string;
  options: QuizOption[];
  correctOptionId: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  theologicalNote?: string;
  reference: IslamicReference;
}

export interface RealAction {
  id: string;
  title: string;
  instruction: string;
  subtext?: string;
  xpReward: number;
  reflectionPrompt: string;
}

export interface KnowledgeItem {
  id: string;
  term: string;
  arabic: string;
  transliteration: string;
  translation: string;
  summary: string;
  reference: string;
  sourceType: 'Coran' | 'Hadith' | 'Enseignement';
  detailedContext: string;
  chapterSceneRef: string;
}

export interface Scene {
  id: number;
  title: string;
  subtitle: string;
  poeticSubtitle?: string;
  poeticBrief?: string;
  location: string;
  nextSceneId?: number;
  requiredXp?: number;
  isSpiritualGate?: boolean;
  gateReason?: string;
  backgroundTheme:
    | 'chambre'
    | 'carrefour'
    | 'waswas'
    | 'vallee'
    | 'village'
    | 'refus'
    | 'geste'
    | 'jardin'
    | 'climax'
    | 'epilogue'
    | 'marche_colere'
    | 'mosquee_ablutions'
    | 'marche_apaise'
    | 'climax_hilm'
    | 'chambre_maladie'
    | 'apothicaire'
    | 'mosquee_attelle'
    | 'patio_remedes'
    | 'verger_lanterne'
    | 'climax_maladie'
    | 'village_mefiant'
    | 'verger_amandiers'
    | 'cuisine_bouillon'
    | 'atelier_sculpture';
  beats: Beat[];
}

export interface IslamicQuizQuestion {
  id: string;
  question: string;
  category: 'Piliers & Foi' | 'Prières & Adoration' | 'Coran & Sourates' | 'Prophètes & Histoire' | 'Comportement & Sagesse' | 'Hilm & Maîtrise de Soi';
  difficulty: 'facile' | 'moyen' | 'difficile';
  options: string[];
  correctIndex: number;
  explanation: string;
  hadithOrQuranRef?: string;
  arabic?: string;
  xpReward: number;
}

export interface ClimaxStep {
  stepNumber: number;
  id: string;
  title: string;
  quote: string;
  arabic?: string;
  meaning: string;
  description: string;
}

export interface PlayerStats {
  discipline: number;
  savoir: number;
  patience: number;
  bonte: number;
  constance: number;
}

export interface QuestItem {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  category: 'daily' | 'story';
  completed: boolean;
  iconType: 'prayer' | 'book' | 'focus' | 'bonus' | 'story' | 'boss';
  progress?: { current: number; max: number };
}

export interface BadgeItem {
  id: string;
  title: string;
  description: string;
  category: 'progression' | 'habitudes' | 'histoire';
  unlocked: boolean;
  iconName: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: 'tenue' | 'cape' | 'sac' | 'lanterne' | 'objet' | 'ressource' | 'decoration';
  iconUrl?: string;
  equipped?: boolean;
  statBonus?: string;
  description?: string;
}

export interface TravelerAppearance {
  bodyType: number;
  skinColor: number;
  eyeType: number;
  hairStyle: string;
  beardStyle: string;
  outfitId: string;
}

export interface LifeQuest {
  id: string;
  title: string;
  description: string;
  category: 'daily' | 'weekly' | 'special';
  virtue: 'Ilm' | 'Akhlaq' | 'Sabr' | 'Shukr';
  xpReward: number;
}

export interface VirtueTreeLevel {
  level: number;
  virtue: 'Ilm' | 'Akhlaq' | 'Sabr' | 'Shukr';
  requiredPoints: number;
  unlockDescription: string;
}

export interface CodexStory {
  id: string;
  title: string;
  content: string;
  type: 'biography' | 'sira' | 'invocation';
  requiredIlmLevel: number;
}

export interface PlayerRank {
  level: number;
  title: string;
  arabicTitle?: string;
  description: string;
  minXp: number;
  icon: string;
}

export const PLAYER_RANKS: PlayerRank[] = [
  {
    level: 1,
    title: 'Apprenti Voyageur',
    arabicTitle: 'طالب مبتدئ',
    description: 'Premier pas hors de la chambre, découverte des sentiers de la vallée.',
    minXp: 0,
    icon: '📜'
  },
  {
    level: 2,
    title: 'Compagnon Fraternel',
    arabicTitle: 'صاحب الإخاء',
    description: 'A vaincu la solitude en tendant la main vers les autres au village.',
    minXp: 180,
    icon: '🤝'
  },
  {
    level: 3,
    title: 'Porteur de Douceur (Hilm)',
    arabicTitle: 'صاحب الحلم',
    description: 'Capacité à éteindre la colère par le calme et la bienveillance.',
    minXp: 450,
    icon: '🌿'
  },
  {
    level: 4,
    title: 'Âme Éprouvée & Patiente (Sabr)',
    arabicTitle: 'الصابر المحتسب',
    description: 'Persévérance et dignité face à la maladie et aux épreuves du corps.',
    minXp: 780,
    icon: '🩹'
  },
  {
    level: 5,
    title: 'Étudiant en Science Accompli',
    arabicTitle: 'طالب علم مجتهد',
    description: 'Maîtrise approfondie des enseignements prophétiques et mise en pratique quotidienne.',
    minXp: 1200,
    icon: '🎓'
  }
];

export function getPlayerRank(xp: number): PlayerRank {
  let currentRank = PLAYER_RANKS[0];
  for (const rank of PLAYER_RANKS) {
    if (xp >= rank.minXp) {
      currentRank = rank;
    }
  }
  return currentRank;
}

export function getNextPlayerRank(xp: number): PlayerRank | null {
  for (const rank of PLAYER_RANKS) {
    if (xp < rank.minXp) {
      return rank;
    }
  }
  return null;
}

export interface PlayerProgress {
  currentSceneIndex: number;
  currentBeatIndex: number;
  xp: number;
  level: number;
  lightPercent: number;
  streakDays: number;
  bestStreakDays: number;
  stats: PlayerStats;
  quests: QuestItem[];
  badges: BadgeItem[];
  equipment: EquipmentItem[];
  appearance: TravelerAppearance;
  completedScenes: number[];
  completedRealActions: string[];
  pledgedRealActions?: string[];
  completedQuizzes: string[];
  unlockedKnowledgeIds: string[];
  soundEnabled: boolean;
  history: Array<{ speaker: string; text: string; sceneId: number }>;
  
  // Attributs Life-RPG
  levelIlm: number;
  levelAkhlaq: number;
  levelSabr: number;
  levelShukr: number;
  
  // Quêtes de vie quotidiennes accomplies
  completedLifeQuests: string[];
  
  // Codex débloqué
  unlockedCodexEntries: string[];
  
  completedIslamicQuizIds?: string[];
  
  // Puissance d'Ombre du Waswâs (0 à 100)
  waswasXp?: number;
  
  // Progression circadienne ("Boucle Nouveau Jour")
  dayNumber?: number;
  
  // Date de dernière activité pour le calcul du streak quotidien (YYYY-MM-DD)
  lastActiveDate?: string;
  
  // Chapitre actuellement actif (1, 2 ou 3)
  selectedChapter?: number;
  
  // Choix moraux et embranchements style "Livre dont vous êtes le héros"
  moralChoices?: Record<string, string>;

  // Traits de Caractère travaillés (Discipline, Sabr, Hilm, Adab, Vitalité, Ilm)
  traits?: CharacterTraits;
  habitLog?: string[];

  // Mémoire du Monde & Conséquences Narratives (PNJ, choix passés)
  narrativeFlags?: Record<string, boolean | string | number>;
}

export interface Character {
  id: string;
  name: string;
  arabicName?: string;
  role: string;
  quote: string;
  description: string;
  portrait: string;
  themeColor: string;
  stats: {
    sagesse: number;
    serenite: number;
    courage: number;
    hilm: number;
  };
  traits: string[];
}

export interface Chapter {
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
}

export interface WisdomCard {
  id: string;
  title: string;
  arabicPhrase: string;
  concept: string;
  quote: string;
  source: string;
  lesson: string;
  category: 'adab' | 'courage' | 'famille' | 'serenite';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  badge: string;
  content: string;
  rating: number;
}

