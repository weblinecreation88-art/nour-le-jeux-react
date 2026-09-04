import React, { useState, useEffect, useRef } from 'react';
import { CHAPTER_1_SCENES, QUIZZES, REAL_ACTIONS } from './data/chapter1';
import { KNOWLEDGE_ITEMS } from './data/knowledge';
import {
  INITIAL_STATS,
  INITIAL_QUESTS,
  INITIAL_BADGES,
  INITIAL_EQUIPMENT,
  INITIAL_APPEARANCE
} from './data/rpgData';
import { PlayerProgress, DialogueChoice, TravelerAppearance } from './types';
import { PixelioHeader } from './components/PixelioHeader';
import { BottomNavBar, TabType } from './components/BottomNavBar';
import { HomeScreen } from './components/screens/HomeScreen';
import { TravelMapScreen } from './components/screens/TravelMapScreen';
import { QuestsScreen } from './components/screens/QuestsScreen';
import { InventoryScreen } from './components/screens/InventoryScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { SceneBackground } from './components/SceneBackground';
import { DialogueBox } from './components/DialogueBox';
import { QuizModal } from './components/QuizModal';
import { RealActionModal } from './components/RealActionModal';
import { ClimaxCombat } from './components/ClimaxCombat';
import { KnowledgeModal } from './components/KnowledgeModal';
import { HistoryModal } from './components/HistoryModal';
import { ChapterEnd } from './components/ChapterEnd';
import { AssetManagerModal } from './components/AssetManagerModal';
import { SceneTransitionModal } from './components/SceneTransitionModal';
import { SceneTransitionCutscene } from './components/SceneTransitionCutscene';
import { AldwinGuideModal } from './components/AldwinGuideModal';
import { SplashScreen } from './components/SplashScreen';
import { soundManager } from './utils/audio';
import { loadCustomAssets, CustomAssetsConfig, PIXEL_ASSETS } from './utils/assets';
import { Sparkles, Play, Compass, Shield, ChevronLeft, ChevronRight, BookOpen, ScrollText, MessageSquareQuote, FastForward } from 'lucide-react';

const STORAGE_KEY = 'nour_pixelio_rpg_progress_v2';

const INITIAL_PROGRESS: PlayerProgress = {
  currentSceneIndex: 0,
  currentBeatIndex: 0,
  xp: 0,
  level: 1,
  lightPercent: 0,
  streakDays: 1,
  bestStreakDays: 1,
  stats: INITIAL_STATS,
  quests: INITIAL_QUESTS,
  badges: INITIAL_BADGES,
  equipment: INITIAL_EQUIPMENT,
  appearance: INITIAL_APPEARANCE,
  completedScenes: [],
  completedRealActions: [],
  completedQuizzes: [],
  completedIslamicQuizIds: [],
  unlockedKnowledgeIds: [],
  soundEnabled: true,
  history: [],
  
  // Life-RPG initial values
  levelIlm: 1,
  levelAkhlaq: 1,
  levelSabr: 1,
  levelShukr: 1,
  completedLifeQuests: [],
  unlockedCodexEntries: []
};

export default function App() {
  const [progress, setProgress] = useState<PlayerProgress>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return {
            ...INITIAL_PROGRESS,
            ...parsed,
            stats: parsed.stats || INITIAL_STATS,
            quests: parsed.quests || INITIAL_QUESTS,
            badges: parsed.badges || INITIAL_BADGES,
            equipment: parsed.equipment || INITIAL_EQUIPMENT,
            appearance: parsed.appearance || INITIAL_APPEARANCE
          };
        } catch {
          return INITIAL_PROGRESS;
        }
      }
    }
    return INITIAL_PROGRESS;
  });

  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType | 'adventure'>('travel');
  const [customAssets, setCustomAssets] = useState<CustomAssetsConfig>(() => loadCustomAssets());

  const [showKnowledge, setShowKnowledge] = useState(false);
  const [knowledgeInitialTab, setKnowledgeInitialTab] = useState<'knowledge' | 'quizzes'>('knowledge');
  const [showHistory, setShowHistory] = useState(false);
  const [showAssetManager, setShowAssetManager] = useState(false);
  const [aldwinModal, setAldwinModal] = useState<'intro' | 'celebration' | 'scene_unlocked' | null>(null);

  const [sceneTransition, setSceneTransition] = useState<{
    completedScene: (typeof CHAPTER_1_SCENES)[0];
    nextScene?: (typeof CHAPTER_1_SCENES)[0];
  } | null>(null);
  const [sceneCutscene, setSceneCutscene] = useState<{
    fromScene?: (typeof CHAPTER_1_SCENES)[0];
    toScene: (typeof CHAPTER_1_SCENES)[0];
  } | null>(null);
  const [xpToast, setXpToast] = useState<{ amount: number; reason: string } | null>(null);
  const [climaxStep, setClimaxStep] = useState(0);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    soundManager.setMuted(!progress.soundEnabled);
  }, [progress]);

  // Track XP to notify when a new scene is unlocked
  const prevXpRef = useRef(progress.xp);
  useEffect(() => {
    if (progress.xp > prevXpRef.current) {
      const getUnlockedCount = (xp: number) => 
        CHAPTER_1_SCENES.filter(s => s.requiredXp > 0 && xp >= s.requiredXp && !progress.completedScenes.includes(s.id)).length;
      
      const unlockedBefore = getUnlockedCount(prevXpRef.current);
      const unlockedAfter = getUnlockedCount(progress.xp);

      if (unlockedAfter > unlockedBefore) {
        setAldwinModal('scene_unlocked');
      }
    }
    prevXpRef.current = progress.xp;
  }, [progress.xp, progress.completedScenes]);

  const currentScene = CHAPTER_1_SCENES[progress.currentSceneIndex] || CHAPTER_1_SCENES[0];
  const currentBeat = currentScene.beats[progress.currentBeatIndex] || currentScene.beats[0];

  const triggerXpGain = (amount: number, reason: string) => {
    setProgress((prev) => {
      const newXp = prev.xp + amount;
      let newLevel = prev.level;
      if (newXp >= 500 && prev.level === 3) {
        newLevel = 4;
      }
      return {
        ...prev,
        xp: newXp,
        level: newLevel,
        lightPercent: Math.min(100, prev.lightPercent + Math.round(amount / 20))
      };
    });
    setXpToast({ amount, reason });
    setTimeout(() => {
      setXpToast(null);
    }, 2800);
  };

  const handleToggleQuest = (questId: string) => {
    soundManager.playSelect();
    setProgress((prev) => {
      const targetQuest = prev.quests.find((q) => q.id === questId);
      if (!targetQuest) return prev;

      const wasCompleted = targetQuest.completed;
      const updatedQuests = prev.quests.map((q) => {
        if (q.id === questId) {
          return { ...q, completed: !wasCompleted };
        }
        return q;
      });

      if (!wasCompleted) {
        triggerXpGain(targetQuest.xpReward, `Quête accomplie : ${targetQuest.title}`);
        soundManager.playQuizSuccess();

        // Increment stats slightly
        const updatedStats = { ...prev.stats };
        if (targetQuest.iconType === 'prayer') updatedStats.constance += 1;
        if (targetQuest.iconType === 'book') updatedStats.savoir += 1;
        if (targetQuest.iconType === 'focus') updatedStats.discipline += 1;
        if (targetQuest.iconType === 'bonus') updatedStats.bonte += 1;

        return {
          ...prev,
          quests: updatedQuests,
          stats: updatedStats
        };
      }

      return {
        ...prev,
        quests: updatedQuests
      };
    });
  };

  const handleEquipItem = (itemId: string) => {
    setProgress((prev) => {
      const target = prev.equipment.find((e) => e.id === itemId);
      if (!target || !['tenue', 'cape', 'sac', 'lanterne'].includes(target.category)) return prev;

      const updatedEquipment = prev.equipment.map((e) => {
        if (e.category === target.category) {
          return { ...e, equipped: e.id === itemId };
        }
        return e;
      });

      return {
        ...prev,
        equipment: updatedEquipment
      };
    });
  };

  const handleUpdateAppearance = (newAppearance: TravelerAppearance) => {
    setProgress((prev) => ({
      ...prev,
      appearance: newAppearance
    }));
  };

  const advanceBeat = () => {
    if (currentBeat.type === 'dialogue' && currentBeat.text) {
      const speakerLabel = currentBeat.speaker ? currentBeat.speaker.toUpperCase() : 'NARRATION';
      setProgress((prev) => ({
        ...prev,
        history: [
          ...prev.history,
          {
            speaker: speakerLabel,
            text: currentBeat.text || '',
            sceneId: currentScene.id
          }
        ]
      }));
    }

    if (progress.currentBeatIndex + 1 < currentScene.beats.length) {
      const nextBeat = currentScene.beats[progress.currentBeatIndex + 1];

      if (nextBeat.type === 'xp' && nextBeat.xpAmount) {
        triggerXpGain(nextBeat.xpAmount, nextBeat.xpReason || 'Progression');
      }

      setProgress((prev) => ({
        ...prev,
        currentBeatIndex: prev.currentBeatIndex + 1
      }));
    } else {
      // Scene completed
      const nextSceneIndex = progress.currentSceneIndex + 1;
      if (nextSceneIndex < CHAPTER_1_SCENES.length) {
        soundManager.playQuizSuccess();
        setSceneTransition({
          completedScene: currentScene,
          nextScene: CHAPTER_1_SCENES[nextSceneIndex]
        });
      } else {
        setProgress((prev) => ({
          ...prev,
          completedScenes: Array.from(new Set([...prev.completedScenes, currentScene.id]))
        }));
      }
    }
  };

  const handleProceedToNextScene = () => {
    if (sceneTransition) {
      const nextSceneIndex = sceneTransition.nextScene
        ? CHAPTER_1_SCENES.findIndex((s) => s.id === sceneTransition.nextScene!.id)
        : progress.currentSceneIndex;

      setProgress((prev) => ({
        ...prev,
        currentSceneIndex: nextSceneIndex !== -1 ? nextSceneIndex : prev.currentSceneIndex,
        currentBeatIndex: 0,
        completedScenes: Array.from(
          new Set([...prev.completedScenes, sceneTransition.completedScene.id])
        )
      }));
      setClimaxStep(0);
      setSceneTransition(null);
      setActiveTab('travel');
    }
  };

  const handleFinishCutscene = () => {
    if (sceneCutscene) {
      const targetIdx = CHAPTER_1_SCENES.findIndex((s) => s.id === sceneCutscene.toScene.id);
      if (targetIdx !== -1) {
        setProgress((prev) => ({
          ...prev,
          currentSceneIndex: targetIdx,
          currentBeatIndex: 0,
          completedScenes: sceneCutscene.fromScene
            ? Array.from(new Set([...prev.completedScenes, sceneCutscene.fromScene.id]))
            : prev.completedScenes
        }));
        setClimaxStep(0);
      }
      setSceneCutscene(null);
      setActiveTab('adventure');
    }
  };

  const handleJumpScene = (direction: 'next' | 'prev') => {
    soundManager.playSelect();
    const newIdx = direction === 'next' ? progress.currentSceneIndex + 1 : progress.currentSceneIndex - 1;
    if (newIdx >= 0 && newIdx < CHAPTER_1_SCENES.length) {
      const targetScene = CHAPTER_1_SCENES[newIdx];
      setSceneCutscene({
        fromScene: currentScene,
        toScene: targetScene
      });
    }
  };

  const handleReplayScene = () => {
    setProgress((prev) => ({
      ...prev,
      currentBeatIndex: 0
    }));
    setClimaxStep(0);
    setSceneTransition(null);
  };

  const handleSelectSceneFromMap = (sceneId: number) => {
    const targetScene = CHAPTER_1_SCENES.find((s) => s.id === sceneId);
    if (targetScene) {
      if (targetScene.id === currentScene.id) {
        setActiveTab('adventure');
      } else {
        setSceneCutscene({
          fromScene: currentScene,
          toScene: targetScene
        });
      }
    }
  };

  const toggleSound = () => {
    setProgress((prev) => {
      const nextSound = !prev.soundEnabled;
      soundManager.setMuted(!nextSound);
      return { ...prev, soundEnabled: nextSound };
    });
  };

  const handleQuizComplete = () => {
    if (currentBeat.quizId) {
      const quiz = QUIZZES[currentBeat.quizId];
      if (quiz) {
        triggerXpGain(25, `Quiz : ${quiz.topic}`);
      }
      
      setProgress((prev) => {
        const safeCompletedQuizzes = prev.completedQuizzes || [];
        const isAlreadyCompleted = safeCompletedQuizzes.includes(currentBeat.quizId!);
        const updatedStats = { ...prev.stats };
        if (!isAlreadyCompleted) {
          updatedStats.savoir = Math.min(100, updatedStats.savoir + 5);
        }

        return {
          ...prev,
          stats: updatedStats,
          completedQuizzes: Array.from(new Set([...safeCompletedQuizzes, currentBeat.quizId!])),
          unlockedKnowledgeIds: currentBeat.unlockedConceptId
            ? Array.from(new Set([...(prev.unlockedKnowledgeIds || []), currentBeat.unlockedConceptId]))
            : (prev.unlockedKnowledgeIds || [])
        };
      });
    }
    advanceBeat();
  };

  const handleRealActionValidate = () => {
    if (currentBeat.realActionId) {
      const action = REAL_ACTIONS[currentBeat.realActionId];
      if (action) {
        triggerXpGain(action.xpReward, `Action réelle : ${action.title}`);
      }
      setProgress((prev) => ({
        ...prev,
        completedRealActions: Array.from(new Set([...prev.completedRealActions, currentBeat.realActionId!]))
      }));
    }
    advanceBeat();
  };

  const handleClimaxComplete = () => {
    advanceBeat();
  };

  const handleSelectChoice = (choice: DialogueChoice) => {
    advanceBeat();
  };

  const handleCompleteIslamicQuiz = (quizId: string, xpReward: number) => {
    triggerXpGain(xpReward, `Quiz Islamique (+${xpReward} XP)`);
    setProgress((prev) => {
      const updatedStats = { ...prev.stats, savoir: Math.min(100, prev.stats.savoir + 2) };
      return {
        ...prev,
        stats: updatedStats,
        completedIslamicQuizIds: Array.from(
          new Set([...(prev.completedIslamicQuizIds || []), quizId])
        )
      };
    });
  };

  const handleResetGame = () => {
    soundManager.playSelect();
    localStorage.removeItem(STORAGE_KEY);
    setProgress(INITIAL_PROGRESS);
    setActiveTab('travel');
  };

  const unreadQuests = progress.quests.filter((q) => !q.completed).length;

  return (
    <main className="w-screen h-screen flex flex-col justify-between overflow-hidden bg-[#f7f1e5] text-[#3a2312] select-none font-sans relative">
      {/* Top Header Bar */}
      <PixelioHeader
        level={progress.level}
        xp={progress.xp}
        maxXp={500}
        lightPercent={progress.lightPercent}
        streakDays={progress.streakDays}
        soundEnabled={progress.soundEnabled}
        onToggleSound={toggleSound}
        onOpenAssetManager={() => setShowAssetManager(true)}
        onOpenKnowledge={() => {
          setShowKnowledge(true);
          setKnowledgeInitialTab('knowledge');
        }}
        customAssets={customAssets}
      />

      {/* Floating XP Gain Toast */}
      {xpToast && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-2 bg-[#e69138] text-[#3a2312] font-black text-xs sm:text-sm rounded-2xl shadow-[0_4px_0_#3a2312] flex items-center gap-2 border-2 border-[#3a2312]">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>+{xpToast.amount} XP</span>
            <span className="text-xs font-bold border-l-2 border-[#3a2312] pl-2">
              {xpToast.reason}
            </span>
          </div>
        </div>
      )}

      {/* Main Content Area based on activeTab */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {activeTab === 'home' && (
          <HomeScreen
            progress={progress}
            onToggleQuest={handleToggleQuest}
            onStartAdventure={() => setActiveTab('adventure')}
            onGoToMap={() => setActiveTab('travel')}
            customAssets={customAssets}
          />
        )}

        {activeTab === 'travel' && (
          <TravelMapScreen
            currentSceneIndex={progress.currentSceneIndex}
            completedScenes={progress.completedScenes}
            playerXp={progress.xp}
            onSelectScene={handleSelectSceneFromMap}
            onOpenKnowledgeQuiz={() => {
              setShowKnowledge(true);
              setKnowledgeInitialTab('quizzes');
            }}
            onBack={() => setActiveTab('home')}
          />
        )}

        {activeTab === 'quests' && (
          <QuestsScreen
            progress={progress}
            onToggleQuest={handleToggleQuest}
            onStartStoryQuest={() => setActiveTab('travel')}
          />
        )}

        {activeTab === 'inventory' && (
          <InventoryScreen
            progress={progress}
            onEquipItem={handleEquipItem}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileScreen
            progress={progress}
            onUpdateAppearance={handleUpdateAppearance}
            onResetProgress={handleResetGame}
          />
        )}

        {/* Narrative Adventure Mode (Dialogue, Quiz, Combat, Real Actions) */}
        {activeTab === 'adventure' && (
          <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-[#181422]">
            {/* Visual Environment Canvas */}
            <SceneBackground
              scene={currentScene}
              currentBeat={currentBeat}
              onSelectChoice={handleSelectChoice}
              climaxStepIndex={climaxStep}
              waswasDissolved={progress.currentSceneIndex === 8 && progress.currentBeatIndex > 20}
              customAssets={customAssets}
            />

            {/* Adventure Top Control Strip (Clean header: Carte, Title, Codex, History) */}
            <div className="relative z-30 p-2 sm:p-2.5 flex items-center justify-between bg-[#f3ebd9]/95 backdrop-blur-md border-b-2 border-[#3a2312] shadow-sm gap-2">
              <button
                onClick={() => {
                  soundManager.playSelect();
                  setActiveTab('travel');
                }}
                className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#3a2312] bg-[#ebdfc8] hover:bg-[#ebdcc4] border-2 border-[#3a2312] px-2.5 py-1 rounded-xl shadow-[0_2px_0_#3a2312] cursor-pointer font-cinzel"
                title="Carte du Monde"
              >
                <Compass className="w-3.5 h-3.5 text-[#d97c27]" />
                <span>Carte</span>
              </button>

              <div className="text-center flex-1 px-2">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel">
                  Scène {currentScene.id} sur 9
                </span>
                <h2 className="text-xs sm:text-sm font-bold text-[#3a2312] font-cinzel line-clamp-1">
                  {currentScene.title}
                </h2>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowKnowledge(true)}
                  className="p-1.5 rounded-xl bg-[#ebdfc8] hover:bg-[#ebdcc4] border-2 border-[#3a2312] text-[#3a2312] shadow-[0_2px_0_#3a2312] cursor-pointer"
                  title="Bibliothèque du Savoir"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setShowHistory(true)}
                  className="p-1.5 rounded-xl bg-[#ebdfc8] hover:bg-[#ebdcc4] border-2 border-[#3a2312] text-[#3a2312] shadow-[0_2px_0_#3a2312] cursor-pointer"
                  title="Historique des dialogues"
                >
                  <ScrollText className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Central / Bottom Interactive Beat Controller */}
            <div className="relative z-30 w-full flex flex-col items-center justify-end pb-2 sm:pb-3">
              {(currentBeat.type === 'dialogue' ||
                currentBeat.type === 'choice' ||
                currentBeat.type === 'memory_fragments') && (
                <DialogueBox
                  beat={currentBeat}
                  onNext={advanceBeat}
                  onSelectChoice={handleSelectChoice}
                  customAssets={customAssets}
                />
              )}

              {currentBeat.type === 'quiz' && currentBeat.quizId && (
                <QuizModal
                  key={currentBeat.quizId}
                  quiz={QUIZZES[currentBeat.quizId] || QUIZZES.quiz_istiadhah}
                  onComplete={handleQuizComplete}
                  customAssets={customAssets}
                />
              )}

              {currentBeat.type === 'real_action' && currentBeat.realActionId && (
                <RealActionModal
                  action={REAL_ACTIONS[currentBeat.realActionId] || REAL_ACTIONS.action_lit}
                  onValidate={handleRealActionValidate}
                />
              )}

              {currentBeat.type === 'climax_combat' && (
                <ClimaxCombat
                  onComplete={handleClimaxComplete}
                  onStepChange={(stepIdx) => setClimaxStep(stepIdx)}
                />
              )}

              {currentBeat.type === 'chapter_end' && (
                <ChapterEnd
                  xpTotal={progress.xp}
                  onReplay={() => {
                    setProgress(INITIAL_PROGRESS);
                    setActiveTab('adventure');
                  }}
                  onContinueAdventure={() => {
                    setProgress((prev) => ({
                      ...prev,
                      completedScenes: Array.from(new Set([...prev.completedScenes, currentScene.id]))
                    }));
                    setActiveTab('travel');
                  }}
                  onOpenKnowledge={() => setShowKnowledge(true)}
                  customAssets={customAssets}
                />
              )}

              {/* Bottom Navigation Strip: Boutons Précédent, Avancer / Continuer et Scènes */}
              {currentBeat.type !== 'chapter_end' && (
                <div className="w-full max-w-xl mx-auto px-3 sm:px-6 pt-2 flex items-center justify-between gap-2 select-none">
                  <button
                    onClick={() => handleJumpScene('prev')}
                    disabled={progress.currentSceneIndex === 0}
                    className={`flex items-center gap-1 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-xl border-2 transition-all font-cinzel cursor-pointer ${
                      progress.currentSceneIndex > 0
                        ? 'bg-[#ebdfc8] hover:bg-[#e0cfb4] text-[#3a2312] border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5'
                        : 'bg-[#ebdfc8]/40 text-[#8c6b4e]/50 border-[#3a2312]/30 cursor-not-allowed opacity-40'
                    }`}
                    title="Scène précédente"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Précédent</span>
                  </button>

                  {/* Scene Dots */}
                  <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 bg-[#1b1824]/90 backdrop-blur-md rounded-full border border-amber-500/40 shadow-inner">
                    {CHAPTER_1_SCENES.map((s, idx) => {
                      const isCurrent = idx === progress.currentSceneIndex;
                      const isPast = idx < progress.currentSceneIndex;
                      return (
                        <button
                          key={s.id}
                          onClick={() => {
                            soundManager.playSelect();
                            setProgress((prev) => ({
                              ...prev,
                              currentSceneIndex: idx,
                              currentBeatIndex: 0
                            }));
                          }}
                          className={`transition-all cursor-pointer ${
                            isCurrent
                              ? 'w-4 h-2 bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b]'
                              : isPast
                              ? 'w-2 h-2 bg-emerald-500 rounded-full hover:scale-125'
                              : 'w-2 h-2 bg-zinc-600 rounded-full hover:bg-zinc-400'
                          }`}
                          title={`Aller à la Scène ${s.id}: ${s.title}`}
                        />
                      );
                    })}
                  </div>

                  {/* Next / Advance Button */}
                  {progress.currentBeatIndex + 1 < currentScene.beats.length ? (
                    <button
                      onClick={advanceBeat}
                      className="flex items-center gap-1 text-[11px] sm:text-xs font-black px-3.5 py-1.5 rounded-xl border-2 transition-all font-cinzel uppercase tracking-wide cursor-pointer bg-[#e69138] hover:bg-[#f0a04b] text-[#1a1209] border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5"
                      title="Continuer le dialogue"
                    >
                      <span>Suivant</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : progress.currentSceneIndex < CHAPTER_1_SCENES.length - 1 ? (
                    <button
                      onClick={advanceBeat}
                      className="flex items-center gap-1 text-[11px] sm:text-xs font-black px-3.5 py-1.5 rounded-xl border-2 transition-all font-cinzel uppercase tracking-wide cursor-pointer bg-[#e69138] hover:bg-[#f0a04b] text-[#1a1209] border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5"
                      title="Terminer la scène"
                    >
                      <span>Terminer la Scène</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={advanceBeat}
                      className="flex items-center gap-1 text-[11px] sm:text-xs font-black px-3.5 py-1.5 rounded-xl border-2 transition-all font-cinzel uppercase tracking-wide cursor-pointer bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-zinc-950 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5"
                      title="Conclure le Chapitre 1"
                    >
                      <span>Fin Chapitre</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Floating Noura Guide Button (when in travel) */}
      {activeTab === 'travel' && (
        <button
          onClick={() => {
            soundManager.playSelect();
            setAldwinModal('intro');
          }}
          className="fixed bottom-18 right-4 w-12 h-12 rounded-2xl bg-[#fbf7ee] border-2 border-[#3a2312] shadow-[0_4px_0_#3a2312] flex items-center justify-center p-1 cursor-pointer hover:scale-105 active:translate-y-1 transition-all z-40"
          title="Guide Noura"
        >
          <img
            src={customAssets?.characters?.noura || DEFAULT_ASSETS.characters.noura}
            alt="Noura Guide"
            className="w-full h-full object-cover object-top rounded-xl"
          />
        </button>
      )}

      {/* Bottom Navigation Bar */}
      {activeTab !== 'adventure' && (
        <BottomNavBar
          activeTab={activeTab}
          onSelectTab={(tab) => setActiveTab(tab)}
          unreadQuestsCount={unreadQuests}
        />
      )}

      {/* Noura Guide Modal */}
      {aldwinModal && (
        <AldwinGuideModal
          mode={aldwinModal}
          title={aldwinModal === 'scene_unlocked' ? 'Nouveau chemin débloqué' : undefined}
          message={aldwinModal === 'scene_unlocked' ? "Le chemin s'ouvre à nous ! Tu as accumulé assez de lumière pour débloquer la prochaine étape de notre voyage sur la carte." : undefined}
          customAssets={customAssets}
          onClose={() => setAldwinModal(null)}
          onContinue={() => {
            setAldwinModal(null);
            if (aldwinModal === 'scene_unlocked') {
              setShowKnowledge(false);
              setActiveTab('travel');
            }
          }}
        />
      )}

      {/* Knowledge Codex & Islamic Quizzes Modal */}
      {showKnowledge && (
        <KnowledgeModal
          unlockedIds={progress.unlockedKnowledgeIds}
          completedQuizIds={progress.completedIslamicQuizIds || []}
          onCompleteQuiz={handleCompleteIslamicQuiz}
          initialTab={knowledgeInitialTab}
          onClose={() => setShowKnowledge(false)}
          currentXp={progress.xp}
          currentLevel={progress.level}
        />
      )}

      {/* History Modal */}
      {showHistory && (
        <HistoryModal
          history={progress.history}
          onClose={() => setShowHistory(false)}
        />
      )}

      {/* Asset Manager Modal */}
      {showAssetManager && (
        <AssetManagerModal
          customAssets={customAssets}
          onUpdateAssets={(updated) => setCustomAssets(updated)}
          onClose={() => setShowAssetManager(false)}
        />
      )}

      {/* Explicit Scene Validation Screen */}
      {sceneTransition && (
        <SceneTransitionModal
          completedScene={sceneTransition.completedScene}
          nextScene={sceneTransition.nextScene}
          customAssets={customAssets}
          onProceedToNextScene={handleProceedToNextScene}
          onReplayScene={handleReplayScene}
        />
      )}

      {/* Cinematic Scene Transition Cutscene */}
      {sceneCutscene && (
        <SceneTransitionCutscene
          fromScene={sceneCutscene.fromScene}
          toScene={sceneCutscene.toScene}
          customAssets={customAssets}
          onFinish={handleFinishCutscene}
        />
      )}

      {/* Splash Screen Intro with Continue & New Game */}
      {showSplash && (
        <SplashScreen
          hasSavedGame={progress.xp > 0 || progress.completedScenes.length > 0}
          savedSummary={{
            level: progress.level,
            xp: progress.xp,
            sceneTitle: currentScene.title
          }}
          onContinue={() => {
            setShowSplash(false);
            setActiveTab('travel');
          }}
          onNewGame={() => {
            localStorage.removeItem(STORAGE_KEY);
            setProgress(INITIAL_PROGRESS);
            setShowSplash(false);
            setActiveTab('travel');
          }}
        />
      )}
    </main>
  );
}
