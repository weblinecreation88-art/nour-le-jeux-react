import React, { useState, useEffect, useRef } from 'react';
import { getChapter1Scenes, getChapter1Quizzes, getChapter1RealActions, getDay2PoteauBeats } from './data/chapter1';
import { CHAPTER_2_SCENES, CHAPTER_2_QUIZZES, CHAPTER_2_REAL_ACTIONS } from './data/chapter2';
import { CHAPTER_3_SCENES, CHAPTER_3_QUIZZES, CHAPTER_3_REAL_ACTIONS } from './data/chapter3';
import { useLanguage } from './context/LanguageContext';
import { KNOWLEDGE_ITEMS } from './data/knowledge';
import { INITIAL_STATS, INITIAL_QUESTS, INITIAL_BADGES, INITIAL_EQUIPMENT, INITIAL_APPEARANCE } from './data/rpgData';
import { INITIAL_CHARACTER_TRAITS } from './utils/characterTraits';
import { getLocalizedScene } from './utils/narrativeI18n';
import { PlayerProgress, DialogueChoice, TravelerAppearance, Scene, CharacterTraits } from './types';
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
import { IslamicQuizModal } from './components/IslamicQuizModal';
import { RealActionModal } from './components/RealActionModal';
import { ClimaxCombat } from './components/ClimaxCombat';
import { KnowledgeModal } from './components/KnowledgeModal';
import { HistoryModal } from './components/HistoryModal';
import { ChapterEnd } from './components/ChapterEnd';
import { AssetManagerModal } from './components/AssetManagerModal';
import { SceneTransitionModal } from './components/SceneTransitionModal';
import { AldwinGuideModal } from './components/AldwinGuideModal';
import { ContemplationOverlay } from './components/ContemplationOverlay';
import { SplashScreen } from './components/SplashScreen';
import { XpHarvestOverlay } from './components/XpHarvestOverlay';
import { SupportModal } from './components/SupportModal';
import { LandingPage } from './components/landing/LandingPage';
import { soundManager } from './utils/audio';
import { speechManager } from './utils/speech';
import { loadCustomAssets, CustomAssetsConfig, PIXEL_ASSETS, DEFAULT_ASSETS } from './utils/assets';
import { Sparkles, Play, Compass, Shield, ChevronLeft, ChevronRight, BookOpen, ScrollText, MessageSquareQuote, FastForward, Flame } from 'lucide-react';
import {
  trackScreenView,
  trackQuizCompleted,
  trackRealActionValidated,
  trackSceneCompleted,
  trackQuestToggled,
  trackGameStarted,
  trackStreakUpdated
} from './utils/analytics';
import { Capacitor } from '@capacitor/core';

const STORAGE_KEY = 'nour_pixelio_rpg_progress_v2';

const getTodayDateString = (): string => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getDaysDifference = (date1: string, date2: string): number => {
  const d1 = new Date(date1).getTime();
  const d2 = new Date(date2).getTime();
  const diffTime = Math.abs(d2 - d1);
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
};

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
  unlockedCodexEntries: [],
  waswasXp: 0,
  dayNumber: 1,
  lastActiveDate: getTodayDateString(),
  traits: INITIAL_CHARACTER_TRAITS,
  habitLog: []
};

export default function App() {
  const [streakCelebration, setStreakCelebration] = useState<number | null>(null);
  const [habitToast, setHabitToast] = useState<string | null>(null);

  const [progress, setProgress] = useState<PlayerProgress>(() => {
    const today = getTodayDateString();
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          let currentStreak = parsed.streakDays || 1;
          let bestStreak = parsed.bestStreakDays || currentStreak;
          if (parsed.lastActiveDate && parsed.lastActiveDate !== today) {
            const daysDiff = getDaysDifference(parsed.lastActiveDate, today);

            if (daysDiff === 1) {
              currentStreak += 1;
              if (currentStreak > bestStreak) {
                bestStreak = currentStreak;
              }
            } else if (daysDiff > 1) {
              currentStreak = 1;
            }

            // Circadian Day 2 Loop: If Chapter 1 was finished, reset to Day 2 at Carrefour
            if (parsed.completedScenes && parsed.completedScenes.includes(9)) {
              dayNum = 2;
              sceneIdx = 1; // Scene 2: Carrefour
              beatIdx = 0;
            }
          }

          return {
            ...INITIAL_PROGRESS,
            ...parsed,
            currentSceneIndex: sceneIdx,
            currentBeatIndex: beatIdx,
            streakDays: currentStreak,
            bestStreakDays: bestStreak,
            quests,
            stats: { ...INITIAL_STATS, ...(parsed.stats || {}) },
            traits: { ...INITIAL_CHARACTER_TRAITS, ...(parsed.traits || {}) },
            habitLog: parsed.habitLog || [],
            appearance: { ...INITIAL_APPEARANCE, ...(parsed.appearance || {}) },
            dayNumber: dayNum,
            lastActiveDate: today
          };
        } catch (e) {
          console.error('Failed to parse saved progress', e);
        }
      }
    }
    return INITIAL_PROGRESS;
  });

  const [viewMode, setViewMode] = useState<'landing' | 'game'>(() => {
    if (typeof window !== 'undefined') {
      // 1. If running inside the native Android APK (Capacitor), ALWAYS start the game directly!
      if (Capacitor.isNativePlatform() || window.location.protocol === 'capacitor:' || window.location.protocol === 'ionic:' || window.location.hostname === 'localhost') {
        return 'game';
      }

      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      // Explicit game bypass flags (e.g. ?game=1, ?play=1, #game)
      if (search.includes('game') || search.includes('play') || hash === '#game') {
        return 'game';
      }
      // Explicit feedback or landing flags
      if (
        search.includes('feedback') || 
        search.includes('landing') || 
        hash.includes('questionnaire') || 
        hash.includes('feedback') || 
        path.includes('/landing') || 
        path.includes('/feedback')
      ) {
        return 'landing';
      }
      // Check saved view preference
      const saved = sessionStorage.getItem('nour_current_view');
      if (saved === 'game') {
        return 'game';
      }
    }
    // Default to Landing Page for web visitors
    return 'landing';
  });

  const handleLaunchGame = () => {
    try {
      sessionStorage.setItem('nour_current_view', 'game');
    } catch {}
    trackGameStarted(false, progress.level, progress.xp);
    setShowSplash(true);
    setViewMode('game');
  };

  const handleOpenLanding = (scrollToFeedback = false) => {
    setViewMode('landing');
    if (scrollToFeedback) {
      setTimeout(() => {
        const el = document.getElementById('tester-questionnaire');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const { language, isRtl } = useLanguage();

  const currentCh1Scenes = getChapter1Scenes(language);
  const currentCh1Quizzes = getChapter1Quizzes(language);
  const currentCh1Actions = getChapter1RealActions(language);
  const currentDay2Beats = getDay2PoteauBeats(language);

  const ALL_SCENES = [...currentCh1Scenes, ...CHAPTER_2_SCENES, ...CHAPTER_3_SCENES];
  const ALL_QUIZZES = { ...currentCh1Quizzes, ...CHAPTER_2_QUIZZES, ...CHAPTER_3_QUIZZES };
  const ALL_ACTIONS = { ...currentCh1Actions, ...CHAPTER_2_REAL_ACTIONS, ...CHAPTER_3_REAL_ACTIONS };

  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('travel');
  const [customAssets, setCustomAssets] = useState<CustomAssetsConfig>(() => loadCustomAssets());

  const [showKnowledge, setShowKnowledge] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCategoryPreference, setQuizCategoryPreference] = useState<string | undefined>(undefined);
  const [showHistory, setShowHistory] = useState(false);
  const [showAssetManager, setShowAssetManager] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [aldwinModal, setAldwinModal] = useState<'intro' | 'celebration' | 'scene_unlocked' | null>(null);

  const [sceneTransition, setSceneTransition] = useState<{
    completedScene: Scene;
    nextScene?: Scene;
  } | null>(null);
  const [contemplationState, setContemplationState] = useState<{
    scene: Scene;
    nextScene?: Scene;
    onFinish: () => void;
  } | null>(null);
  const [xpToast, setXpToast] = useState<{ amount: number; reason: string } | null>(null);
  const [waswasToast, setWaswasToast] = useState<{ amount: number; reason?: string; isNegative?: boolean } | null>(null);
  const waswasToastTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [harvestOverlay, setHarvestOverlay] = useState<{
    amount: number;
    reason: string;
    startX?: number;
    startY?: number;
  } | null>(null);
  const [climaxStep, setClimaxStep] = useState(0);

  // 2-Second Cinematic Decor Preview: let decor display for 2s before triggering dialogues
  const [isDecorPreview, setIsDecorPreview] = useState(false);
  const decorTimerRef = useRef<NodeJS.Timeout | null>(null);
  const prevSceneIdRef = useRef<number | null>(null);
  const prevTabRef = useRef<string | null>(null);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    soundManager.setMuted(!progress.soundEnabled);
  }, [progress]);

  // Close any lingering guide modal when entering adventure mode
  useEffect(() => {
    if (activeTab === 'adventure' && aldwinModal) {
      setAldwinModal(null);
    }
  }, [activeTab, aldwinModal]);

  const currentScene = ALL_SCENES[progress.currentSceneIndex] || ALL_SCENES[0];
  const isDay2AtPoteau =
    (progress.dayNumber === 2 || progress.completedScenes.includes(9)) && progress.currentSceneIndex === 1;
  const activeBeats = isDay2AtPoteau ? currentDay2Beats : currentScene.beats;
  const currentBeat = activeBeats[progress.currentBeatIndex] || activeBeats[0];

  // Track Streak & Log on mount
  useEffect(() => {
    trackStreakUpdated(progress.streakDays);
    if (progress.streakDays > 1) {
      setStreakCelebration(progress.streakDays);
      const timer = setTimeout(() => setStreakCelebration(null), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Track screens in Firebase Analytics
  useEffect(() => {
    if (viewMode === 'landing') {
      trackScreenView('Page de Présentation', 'LandingPage');
      return;
    }

    if (activeTab === 'home') {
      trackScreenView("Chambre d'Othmân (Accueil)", 'HomeScreen');
    } else if (activeTab === 'travel') {
      trackScreenView('Carte du Voyage', 'TravelMapScreen');
    } else if (activeTab === 'quests') {
      trackScreenView('Quêtes & Sagesse', 'QuestsScreen');
    } else if (activeTab === 'inventory') {
      trackScreenView('Inventaire du Voyageur', 'InventoryScreen');
    } else if (activeTab === 'profile') {
      trackScreenView('Profil & Vertus', 'ProfileScreen');
    } else if (activeTab === 'adventure') {
      trackScreenView(`Aventure — Scène ${currentScene.id} : ${currentScene.title}`, 'AdventureScene');
    }
  }, [viewMode, activeTab, currentScene?.id, currentScene?.title]);

  useEffect(() => {
    if (showQuiz) {
      trackScreenView('Quiz Islamique (+XP)', 'IslamicQuizModal');
    }
  }, [showQuiz]);

  useEffect(() => {
    if (showKnowledge) {
      trackScreenView('Bibliothèque du Savoir', 'KnowledgeModal');
    }
  }, [showKnowledge]);

  useEffect(() => {
    if (aldwinModal) {
      trackScreenView('Conseils de Noura', 'AldwinGuideModal');
    }
  }, [aldwinModal]);

  const triggerWaswasChange = (amount: number, reason?: string) => {
    if (!amount) return;
    if (amount > 0) {
      soundManager.playWaswasGain();
    } else {
      soundManager.playWaswasDissolve();
    }

    setProgress((prev) => ({
      ...prev,
      waswasXp: Math.min(100, Math.max(0, (prev.waswasXp || 0) + amount))
    }));

    if (waswasToastTimerRef.current) clearTimeout(waswasToastTimerRef.current);
    setWaswasToast({
      amount: Math.abs(amount),
      reason: reason || (amount > 0 ? "Le Waswâs gagne en emprise..." : "L'Ombre se dissipe"),
      isNegative: amount < 0
    });
    waswasToastTimerRef.current = setTimeout(() => {
      setWaswasToast(null);
    }, 4500);
  };

  const lastHandledWaswasBeatRef = useRef<string | null>(null);
  const isInitialBeatMountRef = useRef<boolean>(true);

  // Trigger Waswâs XP change automatically when a dialogue beat carries waswasXpAmount
  useEffect(() => {
    if (!currentBeat || !currentBeat.id) return;
    const beatKey = `${currentScene.id}_${currentBeat.id}_${progress.currentBeatIndex}`;

    // On initial mount, register current beat key without firing so reloading does not penalize
    if (isInitialBeatMountRef.current) {
      isInitialBeatMountRef.current = false;
      lastHandledWaswasBeatRef.current = beatKey;
      return;
    }

    if (lastHandledWaswasBeatRef.current === beatKey) return;
    lastHandledWaswasBeatRef.current = beatKey;

    if (typeof currentBeat.waswasXpAmount === 'number' && currentBeat.waswasXpAmount !== 0) {
      triggerWaswasChange(currentBeat.waswasXpAmount, currentBeat.waswasReason);
    }
  }, [currentScene.id, currentBeat?.id, progress.currentBeatIndex, currentBeat?.waswasXpAmount, currentBeat?.waswasReason]);

  // Whenever entering adventure mode or switching to a new scene, leave 2 seconds of pure decor immersion before dialogues begin
  useEffect(() => {
    if (activeTab === 'adventure') {
      const isNewScene = prevSceneIdRef.current !== currentScene.id;
      const isEnteringAdventure = prevTabRef.current !== 'adventure';

      if ((isNewScene || isEnteringAdventure) && progress.currentBeatIndex === 0) {
        setIsDecorPreview(true);
        if (decorTimerRef.current) clearTimeout(decorTimerRef.current);
        decorTimerRef.current = setTimeout(() => {
          setIsDecorPreview(false);
        }, 2000);
      }
    } else {
      setIsDecorPreview(false);
      if (decorTimerRef.current) clearTimeout(decorTimerRef.current);
    }

    prevSceneIdRef.current = currentScene.id;
    prevTabRef.current = activeTab;

    return () => {
      if (decorTimerRef.current) clearTimeout(decorTimerRef.current);
    };
  }, [activeTab, currentScene.id, progress.currentBeatIndex]);

  const triggerXpGain = (amount: number, reason: string) => {
    setProgress((prev) => {
      const newXp = prev.xp + amount;
      let newLevel = 1;
      if (newXp >= 1180) newLevel = 5;
      else if (newXp >= 780) newLevel = 4;
      else if (newXp >= 450) newLevel = 3;
      else if (newXp >= 180) newLevel = 2;
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

  const handleHarvestXp = (amount: number, reason: string, startX?: number, startY?: number) => {
    setHarvestOverlay({ amount, reason, startX, startY });
    // Trigger progressive count-up right as particles approach the header target (approx 450ms)
    setTimeout(() => {
      triggerXpGain(amount, reason);
    }, 450);
  };

  const handleToggleQuest = (questId: string, e?: React.MouseEvent) => {
    soundManager.playSelect();
    const targetQuest = progress.quests.find((q) => q.id === questId);
    if (!targetQuest) return;

    const wasCompleted = targetQuest.completed;
    trackQuestToggled(questId, targetQuest.title, !wasCompleted);

    if (!wasCompleted) {
      handleHarvestXp(targetQuest.xpReward, `Quête : ${targetQuest.title}`, e?.clientX, e?.clientY);

      // Increment stats slightly
      const updatedStats = { ...progress.stats };
      if (targetQuest.iconType === 'prayer') updatedStats.constance += 1;
      if (targetQuest.iconType === 'book') updatedStats.savoir += 1;
      if (targetQuest.iconType === 'focus') updatedStats.discipline += 1;
      if (targetQuest.iconType === 'bonus') updatedStats.bonte += 1;

      triggerWaswasChange(-10, "Quête accomplie : L'Ombre recule");
      setProgress((prev) => ({
        ...prev,
        quests: prev.quests.map((q) => (q.id === questId ? { ...q, completed: true } : q)),
        stats: updatedStats
      }));
    } else {
      setProgress((prev) => ({
        ...prev,
        quests: prev.quests.map((q) => (q.id === questId ? { ...q, completed: false } : q))
      }));
    }
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
    if ((currentBeat.type === 'dialogue' || currentBeat.type === 'memory_fragments') && currentBeat.text) {
      const speakerLabel =
        currentBeat.speaker === 'narration'
          ? 'LE VIEUX SAGE'
          : currentBeat.speaker === 'personnage'
          ? 'OTHMÂN'
          : currentBeat.speaker
          ? currentBeat.speaker.toUpperCase()
          : 'LE VIEUX SAGE';
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

    if (isDay2AtPoteau) {
      if (progress.currentBeatIndex + 1 < activeBeats.length) {
        setProgress((prev) => ({
          ...prev,
          currentBeatIndex: prev.currentBeatIndex + 1
        }));
        return;
      }
      soundManager.playQuizSuccess();
      setActiveTab('travel');
      return;
    }

    if (progress.currentBeatIndex + 1 < currentScene.beats.length) {
      let targetIndex = progress.currentBeatIndex + 1;

      // Automatically award and skip all intermediate 'xp' beats so the player immediately continues dialogue
      while (targetIndex < currentScene.beats.length && currentScene.beats[targetIndex].type === 'xp') {
        const xpBeat = currentScene.beats[targetIndex];
        if (xpBeat.xpAmount) {
          triggerXpGain(xpBeat.xpAmount, xpBeat.xpReason || 'Progression');
        }
        targetIndex++;
      }

      if (targetIndex < currentScene.beats.length) {
        setProgress((prev) => ({
          ...prev,
          currentBeatIndex: targetIndex
        }));
        return;
      }
    }

    // Scene completed: stop any audio dialogue and initiate peaceful contemplation moment (3-4s) before next scene
    speechManager.stop();
    let nextSceneIndex = progress.currentSceneIndex + 1;
    if (currentScene.id === 14 || currentScene.id === 142) {
      const s15Index = ALL_SCENES.findIndex((s) => s.id === 15);
      if (s15Index !== -1) {
        nextSceneIndex = s15Index;
      }
    } else if (currentScene.id === 201 || currentScene.id === 202) {
      const s21Index = ALL_SCENES.findIndex((s) => s.id === 21);
      if (s21Index !== -1) {
        nextSceneIndex = s21Index;
      }
    }
    if (nextSceneIndex < ALL_SCENES.length) {
      const nextScene = ALL_SCENES[nextSceneIndex];
      setContemplationState({
        scene: currentScene,
        nextScene: nextScene,
        onFinish: () => {
          soundManager.playQuizSuccess();
          setSceneTransition({
            completedScene: currentScene,
            nextScene: nextScene
          });
        }
      });
    } else {
      setContemplationState({
        scene: currentScene,
        onFinish: () => {
          setProgress((prev) => ({
            ...prev,
            completedScenes: Array.from(new Set([...prev.completedScenes, currentScene.id]))
          }));
        }
      });
    }
  };

  // Safety: If currentBeat is 'xp', auto-advance immediately so the user never sees a blank screen
  useEffect(() => {
    if (currentBeat?.type === 'xp') {
      advanceBeat();
    }
  }, [currentBeat?.type, progress.currentBeatIndex]);

  const handleProceedToNextScene = () => {
    if (sceneTransition) {
      if (sceneTransition.nextScene) {
        // Enforce spiritual gate / required XP
        if (progress.xp < (sceneTransition.nextScene.requiredXp || 0)) {
          soundManager.playSelect();
          setShowQuiz(true);
          return;
        }

        trackSceneCompleted(sceneTransition.completedScene.id, sceneTransition.completedScene.title);
        const targetIdx = ALL_SCENES.findIndex((s) => s.id === sceneTransition.nextScene!.id);
        if (targetIdx !== -1) {
          soundManager.playSceneTransition();
          setProgress((prev) => ({
            ...prev,
            currentSceneIndex: targetIdx,
            currentBeatIndex: 0,
            completedScenes: Array.from(
              new Set([...prev.completedScenes, sceneTransition.completedScene.id])
            )
          }));
          setClimaxStep(0);
        }
        setSceneTransition(null);
        setActiveTab('adventure');
      } else {
        trackSceneCompleted(sceneTransition.completedScene.id, sceneTransition.completedScene.title);
        setProgress((prev) => ({
          ...prev,
          completedScenes: Array.from(
            new Set([...prev.completedScenes, sceneTransition.completedScene.id])
          )
        }));
        setClimaxStep(0);
        setSceneTransition(null);
        setActiveTab('travel');
      }
    }
  };

  const handleJumpScene = (direction: 'next' | 'prev') => {
    soundManager.playSelect();
    const newIdx = direction === 'next' ? progress.currentSceneIndex + 1 : progress.currentSceneIndex - 1;
    if (newIdx >= 0 && newIdx < ALL_SCENES.length) {
      soundManager.playSceneTransition();
      setProgress((prev) => ({
        ...prev,
        currentSceneIndex: newIdx,
        currentBeatIndex: 0
      }));
      setClimaxStep(0);
      setActiveTab('adventure');
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
    const targetIdx = ALL_SCENES.findIndex((s) => s.id === sceneId);
    if (targetIdx !== -1) {
      const targetScene = ALL_SCENES[targetIdx];
      const targetChap = targetScene.id >= 17 ? 3 : targetScene.id >= 10 ? 2 : 1;
      soundManager.playSceneTransition();
      setProgress((prev) => ({
        ...prev,
        selectedChapter: targetChap,
        currentSceneIndex: targetIdx,
        currentBeatIndex: 0
      }));
      setClimaxStep(0);
      setActiveTab('adventure');
    }
  };

  const toggleSound = () => {
    setProgress((prev) => {
      const nextSound = !prev.soundEnabled;
      soundManager.setMuted(!nextSound);
      return { ...prev, soundEnabled: nextSound };
    });
  };

  const handleWaswasMistake = (amount: number = 15, reason?: string) => {
    triggerWaswasChange(amount, reason || 'Erreur au Quiz : Le Waswâs prend de la force !');
  };

  const handleQuizComplete = () => {
    if (currentBeat.quizId) {
      trackQuizCompleted(currentBeat.quizId, true, 'Aventure');
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
      triggerWaswasChange(-15, "Bonne réponse : Le Waswâs s'affaiblit !");
    }
    advanceBeat();
  };

  const handleRealActionValidate = (mode: 'done' | 'pledge' | 'skip' = 'done') => {
    if (currentBeat.realActionId) {
      const action = ALL_ACTIONS[currentBeat.realActionId];
      if (action) {
        if (mode === 'done') {
          trackRealActionValidated(action.id, action.title, action.xpReward);
          triggerXpGain(action.xpReward, `Action réelle accomplie : ${action.title}`);
          setProgress((prev) => ({
            ...prev,
            completedRealActions: Array.from(new Set([...prev.completedRealActions, action.id])),
            pledgedRealActions: (prev.pledgedRealActions || []).filter((id) => id !== action.id)
          }));
          triggerWaswasChange(-15, "Action réelle validée : L'Ombre recule !");
        } else if (mode === 'pledge') {
          const pledgeXp = Math.max(10, Math.round(action.xpReward / 2));
          trackRealActionValidated(action.id, action.title + ' (Engagement)', pledgeXp);
          triggerXpGain(pledgeXp, `Engagement d'Adab : ${action.title}`);
          setProgress((prev) => ({
            ...prev,
            pledgedRealActions: Array.from(new Set([...(prev.pledgedRealActions || []), action.id]))
          }));
          triggerWaswasChange(-8, "Engagement pris : La détermination affaiblit le Waswâs !");
        }
      }
    }
    advanceBeat();
  };

  const handleValidatePledgedAction = (actionId: string, e?: React.MouseEvent) => {
    soundManager.playSelect();
    const action = ALL_ACTIONS[actionId];
    if (!action) return;

    const remainingXp = Math.max(10, action.xpReward - Math.max(10, Math.round(action.xpReward / 2)));
    handleHarvestXp(remainingXp, `Action d'Adab accomplie : ${action.title}`, e?.clientX, e?.clientY);

    trackRealActionValidated(action.id, action.title + ' (Confirmé)', remainingXp);
    triggerWaswasChange(-15, "Engagement accompli : L'Ombre recule !");

    setProgress((prev) => ({
      ...prev,
      completedRealActions: Array.from(new Set([...prev.completedRealActions, actionId])),
      pledgedRealActions: (prev.pledgedRealActions || []).filter((id) => id !== actionId)
    }));
  };

  const handleClimaxComplete = () => {
    advanceBeat();
  };

  const handleSelectChoice = (choice: DialogueChoice) => {
    // 0. Character Traits & Habits progression
    if (choice.traitGains) {
      setProgress((prev) => {
        const currentTraits = prev.traits || INITIAL_CHARACTER_TRAITS;
        const newTraits: CharacterTraits = {
          discipline: (currentTraits.discipline || 0) + (choice.traitGains?.discipline || 0),
          sabr: (currentTraits.sabr || 0) + (choice.traitGains?.sabr || 0),
          hilm: (currentTraits.hilm || 0) + (choice.traitGains?.hilm || 0),
          adab: (currentTraits.adab || 0) + (choice.traitGains?.adab || 0),
          vitalite: (currentTraits.vitalite || 0) + (choice.traitGains?.vitalite || 0),
          ilm: (currentTraits.ilm || 0) + (choice.traitGains?.ilm || 0),
        };
        const newLog = choice.habitMessage
          ? Array.from(new Set([...(prev.habitLog || []), choice.habitMessage]))
          : prev.habitLog || [];
        return {
          ...prev,
          traits: newTraits,
          habitLog: newLog
        };
      });

      if (choice.habitMessage) {
        setHabitToast(choice.habitMessage);
        setTimeout(() => {
          setHabitToast(null);
        }, 4000);
      }
      soundManager.playQuizSuccess();
    }

    // 0.1 Narrative memory flags (world memory & NPC callbacks)
    if (choice.setNarrativeFlags) {
      setProgress((prev) => ({
        ...prev,
        narrativeFlags: {
          ...(prev.narrativeFlags || {}),
          ...choice.setNarrativeFlags
        }
      }));
    }

    // 1. Moral stat bonus
    if (choice.statBonus) {
      const { stat, amount } = choice.statBonus;
      setProgress((prev) => ({
        ...prev,
        stats: {
          ...prev.stats,
          [stat]: Math.min(100, (prev.stats[stat] || 0) + amount)
        }
      }));
      soundManager.playQuizSuccess();
    }

    // 2. Track moral choice key
    if (choice.moralKey) {
      setProgress((prev) => ({
        ...prev,
        moralChoices: {
          ...(prev.moralChoices || {}),
          [choice.id]: choice.moralKey!
        }
      }));
    }

    // 3. Branching path (Livre dont vous êtes le héros)
    if (choice.targetSceneId) {
      soundManager.playSelect();
      const targetScene = ALL_SCENES.find((s) => s.id === choice.targetSceneId);
      if (targetScene) {
        setSceneCutscene({
          fromScene: currentScene,
          toScene: targetScene
        });
        return;
      }
    }

    if (choice.id === 'c1_replay') {
      soundManager.playSelect();
      setProgress((prev) => ({
        ...prev,
        dayNumber: 1,
        currentSceneIndex: 0,
        currentBeatIndex: 0
      }));
      return;
    }
    if (choice.id === 'c2_chap2') {
      soundManager.playSelect();
      const ch2Idx = ALL_SCENES.findIndex((s) => s.id === 10);
      if (ch2Idx !== -1) {
        setProgress((prev) => ({
          ...prev,
          dayNumber: 2,
          currentSceneIndex: ch2Idx,
          currentBeatIndex: 0,
          selectedChapter: 2
        }));
        setActiveTab('adventure');
        return;
      }
    }
    if (choice.id === 'c3_chap3' || choice.id === 'c5_chap5') {
      soundManager.playSelect();
      const ch3Idx = ALL_SCENES.findIndex((s) => s.id === 17);
      if (ch3Idx !== -1) {
        setProgress((prev) => ({
          ...prev,
          dayNumber: 3,
          currentSceneIndex: ch3Idx,
          currentBeatIndex: 0,
          selectedChapter: 3
        }));
        setActiveTab('adventure');
        return;
      }
    }
    advanceBeat();
  };

  const handleCompleteIslamicQuiz = (quizId: string, xpReward: number) => {
    trackQuizCompleted(quizId, true, quizCategoryPreference || 'Savoir');
    handleHarvestXp(xpReward, `Quiz Islamique (+${xpReward} XP)`);
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
    triggerWaswasChange(-15, "Défi de Savoir validé : Le Waswâs recule !");
  };

  const handleResetGame = () => {
    soundManager.playSelect();
    localStorage.removeItem(STORAGE_KEY);
    setProgress(INITIAL_PROGRESS);
    setActiveTab('adventure');
  };

  const unreadQuests = progress.quests.filter((q) => !q.completed).length;
  const nextSceneToUnlock = ALL_SCENES[progress.currentSceneIndex + 1];
  const hasSpiritualGatePending = Boolean(
    nextSceneToUnlock && progress.xp < (nextSceneToUnlock.requiredXp || 0)
  );

  if (viewMode === 'landing') {
    return <LandingPage onLaunchGame={handleLaunchGame} />;
  }

  return (
    <main className="w-screen w-full h-screen h-[100dvh] max-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#f7f1e5] text-[#3a2312] select-none font-sans relative">
      {/* Top Header Bar (Unique, Transparent & Unified) */}
      <PixelioHeader
        level={progress.level}
        xp={progress.xp}
        maxXp={1350}
        waswasXp={progress.waswasXp || 0}
        lightPercent={progress.lightPercent}
        streakDays={progress.streakDays}
        onOpenMap={() => setActiveTab('travel')}
        onOpenKnowledge={() => setShowKnowledge(true)}
        onOpenQuiz={() => setShowQuiz(true)}
        onOpenLanding={() => handleOpenLanding(true)}
        customAssets={customAssets}
        hasSpiritualGatePending={hasSpiritualGatePending}
      />

      {/* Centered Floating Status Toasts (XP, Waswâs, Streak) - Perfectly Centered, Sleek & Compact */}
      {(xpToast || (waswasToast && activeTab !== 'adventure') || streakCelebration) && (
        <div className="fixed inset-x-0 top-14 sm:top-16 z-[80] flex flex-col items-center justify-center gap-1.5 pointer-events-none px-4 select-none">
          {/* Streak Celebration Toast */}
          {streakCelebration && (
            <div className="max-w-[360px] w-auto px-3.5 py-1.5 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white font-black rounded-xl shadow-[0_4px_16px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2 border border-amber-300 backdrop-blur-md animate-in slide-in-from-top-2 duration-300">
              <span className="text-sm">🔥</span>
              <span className="text-xs font-black font-cinzel tracking-wide text-amber-100">
                Série de {streakCelebration} jours !
              </span>
              <span className="text-[10px] font-sans text-white/90 truncate max-w-[180px]">
                Quêtes quotidiennes renouvelées
              </span>
            </div>
          )}

          {/* 1. XP Gain Toast */}
          {xpToast && (
            <div className="max-w-[360px] w-auto px-3.5 py-1.5 bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-400 text-amber-950 font-black rounded-xl shadow-[0_4px_16px_rgba(250,204,21,0.5),0_2px_0_#92400e] flex items-center justify-center gap-2 border border-yellow-100 backdrop-blur-md transition-all duration-200">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-200 border border-yellow-100 flex items-center justify-center shadow-inner shrink-0 text-amber-950">
                <Sparkles className="w-3 h-3 fill-yellow-100" />
              </div>
              <span className="text-xs sm:text-sm font-black font-cinzel tracking-wider shrink-0">+{xpToast.amount} XP</span>
              <span className="text-[11px] font-bold font-sans bg-amber-900/15 px-2 py-0.5 rounded-md border border-amber-800/20 truncate max-w-[200px]">
                {xpToast.reason}
              </span>
            </div>
          )}

          {/* 2. Waswâs Purge / Increase Toast */}
          {waswasToast && activeTab !== 'adventure' && (
            <div
              className={`max-w-[360px] w-auto px-3.5 py-1.5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex items-center gap-2 border backdrop-blur-xl transition-all duration-200 ${
                waswasToast.isNegative
                  ? 'bg-[#032a1f]/95 text-white border-emerald-400/80 shadow-[0_0_16px_rgba(52,211,153,0.35)]'
                  : 'bg-[#240638]/95 text-white border-fuchsia-400/80 shadow-[0_0_16px_rgba(217,70,239,0.35)]'
              }`}
            >
              {/* Badge Icon & Amount */}
              <div
                className={`px-2 py-0.5 rounded-lg border font-black text-xs font-mono tracking-wide flex items-center gap-1 shrink-0 ${
                  waswasToast.isNegative
                    ? 'bg-emerald-950/90 border-emerald-300 text-emerald-200 shadow-xs'
                    : 'bg-fuchsia-950/90 border-fuchsia-300 text-fuchsia-200 shadow-xs'
                }`}
              >
                <span>{waswasToast.isNegative ? '✨' : '🌑'}</span>
                <span>{waswasToast.isNegative ? `-${waswasToast.amount}` : `+${waswasToast.amount}`} Doute</span>
              </div>

              {/* Message text & contextual subtitle */}
              <div className="flex flex-col min-w-0 pr-1">
                <span className="text-[9px] font-black uppercase tracking-widest font-cinzel text-zinc-300/80 leading-none">
                  {waswasToast.isNegative ? 'LUMIÈRE RETROUVÉE' : 'EMPRISE OBSCURE'}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold leading-tight text-white/95 truncate">
                  {waswasToast.reason}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Content Area based on activeTab */}
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden relative">
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
            initialChapter={progress.selectedChapter || (progress.completedScenes.includes(16) ? 3 : progress.completedScenes.includes(9) ? 2 : 1)}
            onSelectScene={handleSelectSceneFromMap}
            onOpenKnowledgeQuiz={() => setShowQuiz(true)}
            onBack={() => setActiveTab('home')}
          />
        )}

        {activeTab === 'quests' && (
          <QuestsScreen
            progress={progress}
            allActions={ALL_ACTIONS}
            onToggleQuest={handleToggleQuest}
            onValidatePledgedAction={handleValidatePledgedAction}
            onStartStoryQuest={(sceneId) => {
              if (typeof sceneId === 'number') {
                handleSelectSceneFromMap(sceneId);
              } else {
                setActiveTab('travel');
              }
            }}
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
            soundEnabled={progress.soundEnabled}
            onToggleSound={toggleSound}
            onOpenAssetManager={() => setShowAssetManager(true)}
            onOpenSupport={() => setShowSupportModal(true)}
            onUpdateAppearance={handleUpdateAppearance}
            onResetProgress={handleResetGame}
            onHarvestXp={handleHarvestXp}
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
              isContemplating={!!contemplationState || isDecorPreview}
              completedRealActions={progress.completedRealActions}
            />

            {/* 2-Second Cinematic Decor Preview: allows player to contemplate the scenery cleanly before dialogues */}
            {isDecorPreview && (
              <div
                onClick={() => setIsDecorPreview(false)}
                className="absolute inset-0 z-40 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-auto cursor-pointer animate-in fade-in duration-500 select-none"
                title="Cliquer pour passer directement au dialogue"
              >
                <div className="flex flex-col items-center gap-2 text-center animate-in zoom-in-95 duration-700 bg-black/45 backdrop-blur-xs px-6 py-4 rounded-3xl border border-amber-500/30 shadow-2xl max-w-md">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#d97c27] font-cinzel drop-shadow-sm">
                    {language === 'ar' ? `المشهد ${currentScene.id} • ${currentScene.id >= 17 ? 'الفصل 3' : currentScene.id >= 10 ? 'الفصل 2' : 'الفصل 1'}` : language === 'en' ? `Scene ${currentScene.id} • ${currentScene.id >= 17 ? 'Chapter 3' : currentScene.id >= 10 ? 'Chapter 2' : 'Chapter 1'}` : `Scène ${currentScene.id} • ${currentScene.id >= 17 ? 'Chapitre 3' : currentScene.id >= 10 ? 'Chapitre 2' : 'Chapitre 1'}`}
                  </span>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-[#fbf7ee] font-cinzel drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide">
                    {getLocalizedScene(currentScene, language).title}
                  </h1>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d97c27] to-transparent rounded-full mt-1" />
                  <span className="text-[10px] text-[#ebdcc4]/80 font-cinzel tracking-wider mt-1 animate-pulse">
                    ✦ {language === 'ar' ? 'تأمل المكان والسكينة...' : language === 'en' ? 'Contemplating the surroundings...' : 'Contemplation du lieu...'} ✦
                  </span>
                </div>
              </div>
            )}

            {/* Contemplation Overlay: 3-4s pause before advancing to next scene for deep immersion */}
            {contemplationState && (
              <ContemplationOverlay
                scene={contemplationState.scene}
                nextScene={contemplationState.nextScene}
                durationMs={3500}
                onComplete={() => {
                  const finishAction = contemplationState.onFinish;
                  setContemplationState(null);
                  finishAction();
                }}
                onSkip={() => {
                  const finishAction = contemplationState.onFinish;
                  setContemplationState(null);
                  finishAction();
                }}
              />
            )}



            {/* Central / Interactive Beat Controller (flex-1 min-h-0: fits comfortably without pushing the bottom bar) */}
            <div className="relative z-30 w-full flex-1 min-h-0 flex flex-col items-center justify-end pb-1 sm:pb-2 overflow-y-auto sm:overflow-visible">
              {!isDecorPreview && !contemplationState && !sceneTransition &&
                (currentBeat.type === 'dialogue' ||
                  currentBeat.type === 'choice' ||
                  currentBeat.type === 'memory_fragments') && (
                <DialogueBox
                  beat={currentBeat}
                  onNext={advanceBeat}
                  onSelectChoice={handleSelectChoice}
                  customAssets={customAssets}
                  waswasToast={waswasToast}
                  traits={progress.traits}
                  narrativeFlags={progress.narrativeFlags}
                />
              )}

              {!isDecorPreview && !contemplationState && !sceneTransition && currentBeat.type === 'quiz' && currentBeat.quizId && (
                <QuizModal
                  key={currentBeat.quizId}
                  quiz={ALL_QUIZZES[currentBeat.quizId] || ALL_QUIZZES.quiz_istiadhah}
                  onComplete={handleQuizComplete}
                  onHarvestXp={handleHarvestXp}
                  onWaswasMistake={handleWaswasMistake}
                  customAssets={customAssets}
                />
              )}

              {!isDecorPreview && !contemplationState && !sceneTransition && currentBeat.type === 'real_action' && currentBeat.realActionId && (
                <RealActionModal
                  action={ALL_ACTIONS[currentBeat.realActionId] || ALL_ACTIONS.action_lit}
                  onValidate={handleRealActionValidate}
                  onHarvestXp={handleHarvestXp}
                />
              )}

              {!isDecorPreview && !contemplationState && !sceneTransition && currentBeat.type === 'climax_combat' && (
                <ClimaxCombat
                  waswasXp={progress.waswasXp || 0}
                  traits={progress.traits}
                  onComplete={handleClimaxComplete}
                  onStepChange={(stepIdx) => setClimaxStep(stepIdx)}
                  onOpenHilmQuiz={() => {
                    setQuizCategoryPreference(currentScene.id >= 17 ? 'Tawakkul & Patience' : 'Hilm & Maîtrise de Soi');
                    setShowQuiz(true);
                  }}
                  customAssets={customAssets}
                  chapterNumber={currentScene.id >= 17 ? 3 : currentScene.id >= 10 ? 2 : 1}
                />
              )}

              {!isDecorPreview && !contemplationState && !sceneTransition && currentBeat.type === 'chapter_end' && (
                <ChapterEnd
                  chapterNumber={currentScene.id >= 17 ? 3 : currentScene.id >= 10 ? 2 : 1}
                  xpTotal={progress.xp}
                  traits={progress.traits}
                  onReplay={() => {
                    if (currentScene.id >= 17) {
                      const ch3Idx = ALL_SCENES.findIndex((s) => s.id === 17);
                      setProgress((prev) => ({
                        ...prev,
                        currentSceneIndex: ch3Idx !== -1 ? ch3Idx : 0,
                        currentBeatIndex: 0
                      }));
                    } else if (currentScene.id >= 10) {
                      const ch2Idx = ALL_SCENES.findIndex((s) => s.id === 10);
                      setProgress((prev) => ({
                        ...prev,
                        currentSceneIndex: ch2Idx !== -1 ? ch2Idx : 0,
                        currentBeatIndex: 0
                      }));
                    } else {
                      setProgress(INITIAL_PROGRESS);
                    }
                    setActiveTab('adventure');
                  }}
                  onContinueAdventure={() => {
                    if (currentScene.id >= 17) {
                      // Chapter 3 completed -> open travel map to contemplate or choose chapters
                      setProgress((prev) => ({
                        ...prev,
                        completedScenes: Array.from(new Set([...prev.completedScenes, currentScene.id])),
                        selectedChapter: 3
                      }));
                      setActiveTab('travel');
                    } else if (currentScene.id >= 10) {
                      // Chapter 2 completed -> jump to Chapter 3 (Scene 17)
                      const ch3Idx = ALL_SCENES.findIndex((s) => s.id === 17);
                      setProgress((prev) => ({
                        ...prev,
                        completedScenes: Array.from(new Set([...prev.completedScenes, currentScene.id])),
                        dayNumber: 3,
                        currentSceneIndex: ch3Idx !== -1 ? ch3Idx : prev.currentSceneIndex,
                        currentBeatIndex: 0,
                        selectedChapter: 3
                      }));
                      setActiveTab('adventure');
                    } else {
                      // Chapter 1 completed -> jump to Chapter 2 (Scene 10)
                      const ch2Idx = ALL_SCENES.findIndex((s) => s.id === 10);
                      setProgress((prev) => ({
                        ...prev,
                        completedScenes: Array.from(new Set([...prev.completedScenes, currentScene.id])),
                        dayNumber: 2,
                        currentSceneIndex: ch2Idx !== -1 ? ch2Idx : 0,
                        currentBeatIndex: 0,
                        selectedChapter: 2
                      }));
                      setActiveTab('adventure');
                    }
                  }}
                  onSaveAndExit={() => {
                    soundManager.playXpHarvest();
                    if (currentScene.id >= 17) {
                      setProgress((prev) => ({
                        ...prev,
                        completedScenes: Array.from(new Set([...prev.completedScenes, currentScene.id])),
                        selectedChapter: 3
                      }));
                    } else if (currentScene.id >= 10) {
                      const ch3Idx = ALL_SCENES.findIndex((s) => s.id === 17);
                      setProgress((prev) => ({
                        ...prev,
                        completedScenes: Array.from(new Set([...prev.completedScenes, currentScene.id])),
                        dayNumber: 3,
                        currentSceneIndex: ch3Idx !== -1 ? ch3Idx : prev.currentSceneIndex,
                        currentBeatIndex: 0,
                        selectedChapter: 3
                      }));
                    } else {
                      const ch2Idx = ALL_SCENES.findIndex((s) => s.id === 10);
                      setProgress((prev) => ({
                        ...prev,
                        completedScenes: Array.from(new Set([...prev.completedScenes, currentScene.id])),
                        dayNumber: 2,
                        currentSceneIndex: ch2Idx !== -1 ? ch2Idx : 0,
                        currentBeatIndex: 0,
                        selectedChapter: 2
                      }));
                    }
                    setActiveTab('travel');
                  }}
                  onOpenKnowledge={() => setShowKnowledge(true)}
                  onOpenFeedback={() => handleOpenLanding(true)}
                  onOpenSupport={() => setShowSupportModal(true)}
                  customAssets={customAssets}
                />
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
          className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom))] right-3 sm:right-4 w-12 h-12 rounded-2xl bg-[#fbf7ee] border-2 border-[#3a2312] shadow-[0_4px_0_#3a2312] flex items-center justify-center p-1 cursor-pointer hover:scale-105 active:translate-y-1 transition-all z-40"
          title="Guide Noura"
        >
          <img
            src={customAssets?.characters?.noura || DEFAULT_ASSETS.characters.noura}
            alt="Noura Guide"
            className="w-full h-full object-cover object-top rounded-xl"
          />
        </button>
      )}

      {/* Bottom Navigation Bar: Always visible everywhere, on mobile & desktop */}
      <BottomNavBar
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
        unreadQuestsCount={unreadQuests}
      />

      {/* Noura Guide Modal (Manual on-demand advice from travel map only) */}
      {aldwinModal && activeTab !== 'adventure' && (
        <AldwinGuideModal
          mode={aldwinModal}
          customAssets={customAssets}
          onClose={() => setAldwinModal(null)}
          onContinue={() => setAldwinModal(null)}
        />
      )}

      {/* Dedicated Islamic Quiz (+XP) Modal */}
      {showQuiz && (
        <IslamicQuizModal
          completedQuizIds={progress.completedIslamicQuizIds || []}
          onCompleteQuiz={handleCompleteIslamicQuiz}
          onWaswasMistake={handleWaswasMistake}
          initialCategory={quizCategoryPreference}
          onClose={() => {
            setShowQuiz(false);
            setQuizCategoryPreference(undefined);
          }}
          currentXp={progress.xp}
        />
      )}

      {/* Knowledge Codex (Livre du Savoir) Modal */}
      {showKnowledge && (
        <KnowledgeModal
          unlockedIds={progress.unlockedKnowledgeIds}
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
          playerXp={progress.xp}
          onOpenQuiz={() => setShowQuiz(true)}
          customAssets={customAssets}
          onProceedToNextScene={handleProceedToNextScene}
          onReplayScene={handleReplayScene}
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
            trackGameStarted(false, progress.level, progress.xp);
            setShowSplash(false);
            setActiveTab('adventure');
          }}
          onNewGame={() => {
            localStorage.removeItem(STORAGE_KEY);
            trackGameStarted(true, 1, 0);
            setProgress(INITIAL_PROGRESS);
            setShowSplash(false);
            setActiveTab('adventure');
          }}
          onOpenLanding={() => handleOpenLanding(true)}
        />
      )}

      {/* Visual XP Harvest Flying Orbs & Sound Animation */}
      {harvestOverlay && (
        <XpHarvestOverlay
          amount={harvestOverlay.amount}
          reason={harvestOverlay.reason}
          startX={harvestOverlay.startX}
          startY={harvestOverlay.startY}
          onComplete={() => setHarvestOverlay(null)}
        />
      )}

      {/* Support & Mécénat / Founder Unlock Modal (Stripe Web) */}
      {showSupportModal && (
        <SupportModal
          onClose={() => setShowSupportModal(false)}
          onUnlocked={() => setShowSupportModal(false)}
        />
      )}

      {/* Subtle Habit & Moral Trait Notification Banner */}
      {habitToast && (
        <div className="fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-[#fbf7ee]/95 border-2 border-[#8c5a2b] shadow-[0_4px_12px_rgba(0,0,0,0.25)] flex items-center gap-2.5 max-w-[90vw] sm:max-w-md animate-in fade-in slide-in-from-top-3 duration-300 pointer-events-none backdrop-blur-xs">
          <span className="text-lg shrink-0">🌱</span>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-black uppercase text-[#8c5a2b] font-cinzel tracking-wider leading-none">
              Habitude & Caractère
            </span>
            <span className="text-xs font-bold text-[#3a2312] leading-tight mt-0.5 font-cinzel">
              {habitToast}
            </span>
          </div>
        </div>
      )}
    </main>
  );
}
