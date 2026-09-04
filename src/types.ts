export type CharacterId =
  | 'personnage'
  | 'noura'
  | 'waswas'
  | 'grand_waswas'
  | 'jeune'
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

export interface DialogueChoice {
  id: string;
  label: string;
  responsePreview?: string;
  disabled?: boolean;
  disabledReason?: string;
  badge?: string;
  interactiveSpot?: { x: string; y: string };
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
  xpAmount?: number;
  xpReason?: string;
  choices?: DialogueChoice[];
  unlockedConceptId?: string;
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
  location: string;
  requiredXp?: number;
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
    | 'epilogue';
  beats: Beat[];
}

export interface IslamicQuizQuestion {
  id: string;
  question: string;
  category: 'Piliers & Foi' | 'Prières & Adoration' | 'Coran & Sourates' | 'Prophètes & Histoire' | 'Comportement & Sagesse';
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
}

