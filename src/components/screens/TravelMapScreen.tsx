import React, { useState, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Lock,
  Play,
  Sparkles,
  Zap,
  RotateCcw,
  Compass,
  ArrowRight,
  Footprints,
  ShieldCheck
} from 'lucide-react';
import { CHAPTER_1_SCENES } from '../../data/chapter1';
import { CHAPTER_2_SCENES } from '../../data/chapter2';
import { CHAPTER_3_SCENES } from '../../data/chapter3';
import { PIXEL_ASSETS } from '../../utils/assets';
import { soundManager } from '../../utils/audio';

interface TravelMapScreenProps {
  currentSceneIndex: number;
  completedScenes: number[];
  playerXp: number;
  initialChapter?: number;
  isSupporter?: boolean;
  onOpenSupportModal?: () => void;
  onSelectScene: (sceneId: number) => void;
  onOpenKnowledgeQuiz?: () => void;
  onBack: () => void;
}

export const TravelMapScreen: React.FC<TravelMapScreenProps> = ({
  currentSceneIndex,
  completedScenes,
  playerXp,
  initialChapter,
  isSupporter = false,
  onOpenSupportModal,
  onSelectScene,
  onOpenKnowledgeQuiz,
  onBack: _onBack
}) => {
  const allScenesCombined = [...CHAPTER_1_SCENES, ...CHAPTER_2_SCENES, ...CHAPTER_3_SCENES];
  const currentActiveScene = allScenesCombined[currentSceneIndex] || CHAPTER_1_SCENES[0];
  const isChapter2Unlocked =
    isSupporter ||
    playerXp >= 450 ||
    completedScenes.includes(9) ||
    currentActiveScene.id >= 10;
  const isChapter3Unlocked =
    isSupporter ||
    playerXp >= 780 ||
    completedScenes.includes(16) ||
    currentActiveScene.id >= 17;

  // Auto-select smart chapter: if initialChapter given use it, else current scene chapter, or highest unlocked
  const [activeChapter, setActiveChapter] = useState<1 | 2 | 3>(() => {
    if (initialChapter === 1 || initialChapter === 2 || initialChapter === 3) {
      return initialChapter;
    }
    if (currentActiveScene.id >= 17 || (isSupporter && completedScenes.includes(16))) return 3;
    if (currentActiveScene.id >= 10 || (isSupporter && completedScenes.includes(9))) return 2;
    if (playerXp >= 780) return 3;
    if (playerXp >= 450) return 2;
    return 1;
  });

  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [lockedSceneModal, setLockedSceneModal] = useState<{
    sceneTitle: string;
    requiredXp: number;
    gateReason?: string;
    isSpiritualGate?: boolean;
    isFounderRequired?: boolean;
  } | null>(null);

  // Touch Swipe Gesture State for Mobile & Tablet Slider
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diffX = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 50; // pixels
      if (diffX > minSwipeDistance) {
        handleNextChapter();
      } else if (diffX < -minSwipeDistance) {
        handlePrevChapter();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Coordinates for the winding trail through the pixel landscape (bottom = beginning, top = apex)
  const roadmapPositionsCh1 = [
    { top: '82%', left: '50%', x: 50, y: 82 }, // 1. La Chambre
    { top: '73%', left: '36%', x: 36, y: 73 }, // 2. Le Poteau
    { top: '64%', left: '64%', x: 64, y: 64 }, // 3. Premier Waswas
    { top: '55%', left: '38%', x: 38, y: 55 }, // 4. « Je ne veux plus être seul »
    { top: '46%', left: '62%', x: 62, y: 46 }, // 5. Le Village
    { top: '37%', left: '36%', x: 36, y: 37 }, // 6. Le Refus
    { top: '28%', left: '64%', x: 64, y: 28 }, // 7. Le Geste
    { top: '19%', left: '42%', x: 42, y: 19 }, // 8. Jardin abandonné
    { top: '10%', left: '50%', x: 50, y: 10 }  // 9. Grand Waswas (Summit Climax)
  ];

  const roadmapPositionsCh2 = [
    { top: '80%', left: '50%', x: 50, y: 80 }, // 10. L'Aube au Grand Poteau
    { top: '70%', left: '35%', x: 35, y: 70 }, // 11. L'Éclat du Marché
    { top: '60%', left: '65%', x: 65, y: 60 }, // 12. L'Épreuve du Silence
    { top: '50%', left: '50%', x: 50, y: 50 }, // 13. La Fontaine aux Vignes
    { top: '38%', left: '32%', x: 32, y: 38 }, // 14. 14A. La Parure de Douceur
    { top: '38%', left: '68%', x: 68, y: 38 }, // 142. 14B. Le Murmure sous la Treille
    { top: '22%', left: '50%', x: 50, y: 22 }, // 15. L'Ombre de la Rancœur
    { top: '10%', left: '50%', x: 50, y: 10 }  // 16. Le Cœur Paisible
  ];

  const roadmapPositionsCh3 = [
    { top: '82%', left: '50%', x: 50, y: 82 }, // 17. Le Matin Difficile
    { top: '74%', left: '35%', x: 35, y: 74 }, // 18. Le Dispensaire
    { top: '66%', left: '65%', x: 65, y: 66 }, // 19. Celui qui prie avec une attelle
    { top: '58%', left: '50%', x: 50, y: 58 }, // 20. Les Remèdes Prophétiques
    { top: '50%', left: '32%', x: 32, y: 50 }, // 201. 20A. Cueillette
    { top: '50%', left: '68%', x: 68, y: 50 }, // 202. 20B. Manuscrit
    { top: '41%', left: '50%', x: 50, y: 41 }, // 21. Le Poids de la Halte
    { top: '33%', left: '35%', x: 35, y: 33 }, // 22. Nommer la Douleur
    { top: '25%', left: '65%', x: 65, y: 25 }, // 23. L'Amānah du Corps
    { top: '17%', left: '38%', x: 38, y: 17 }, // 24. La Graine sous Terre
    { top: '9%',  left: '50%', x: 50, y: 9 }   // 25. La Montagne Intérieure
  ];

  // Config data for each of the 3 chapters
  const CHAPTERS = [
    {
      id: 1 as const,
      number: 1,
      title: 'Le Réveil & Le Grand Poteau',
      theme: 'La lutte contre la paresse & le premier départ',
      scenes: CHAPTER_1_SCENES,
      requiredXp: 0,
      isUnlocked: true,
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-400',
      accentColor: '#d97c27',
      icon: '📜',
      positions: roadmapPositionsCh1,
      isComplete: CHAPTER_1_SCENES.every((s) => completedScenes.includes(s.id))
    },
    {
      id: 2 as const,
      number: 2,
      title: 'Le Chemin du Hilm',
      theme: 'La maîtrise de la colère & la douceur prophétique',
      scenes: CHAPTER_2_SCENES,
      requiredXp: 450,
      isUnlocked: isChapter2Unlocked,
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-400',
      accentColor: '#2d6a4f',
      icon: '🌿',
      positions: roadmapPositionsCh2,
      isComplete:
        [10, 11, 12, 13, 15, 16].every((id) => completedScenes.includes(id)) &&
        (completedScenes.includes(14) || completedScenes.includes(142))
    },
    {
      id: 3 as const,
      number: 3,
      title: 'La Montagne Intérieure',
      theme: "L'épreuve, la patience (Sabr) & l'élévation",
      scenes: CHAPTER_3_SCENES,
      requiredXp: 780,
      isUnlocked: isChapter3Unlocked,
      badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-400',
      accentColor: '#0e7490',
      icon: '🏔️',
      positions: roadmapPositionsCh3,
      isComplete:
        [17, 18, 19, 20, 21, 22, 23, 24, 25].every((id) => completedScenes.includes(id)) &&
        (completedScenes.includes(201) || completedScenes.includes(202))
    }
  ];

  const currentChapterConfig = CHAPTERS[activeChapter - 1];
  const prevChapterConfig = activeChapter > 1 ? CHAPTERS[activeChapter - 2] : null;
  const nextChapterConfig = activeChapter < 3 ? CHAPTERS[activeChapter] : null;

  const handlePrevChapter = () => {
    if (activeChapter > 1) {
      soundManager.playSelect();
      setSlideDirection('left');
      setActiveChapter((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  const handleNextChapter = () => {
    if (activeChapter < 3) {
      soundManager.playSelect();
      if (!nextChapterConfig?.isUnlocked) {
        const reqXp = nextChapterConfig?.requiredXp || 0;
        if (!isSupporter && playerXp < reqXp) {
          setLockedSceneModal({
            sceneTitle: `Chapitre ${nextChapterConfig?.number} : ${nextChapterConfig?.title}`,
            requiredXp: reqXp,
            gateReason: `Termine le chapitre précédent ou atteins ${reqXp} XP pour débloquer cette aventure !`,
            isSpiritualGate: true
          });
          return;
        }
      }
      setSlideDirection('right');
      setActiveChapter((prev) => (prev + 1) as 1 | 2 | 3);
    }
  };

  const handleSelectChapterDirectly = (chapterNumber: 1 | 2 | 3) => {
    if (chapterNumber === activeChapter) return;
    const target = CHAPTERS[chapterNumber - 1];
    if (!target.isUnlocked) {
      if (!isSupporter && playerXp < target.requiredXp) {
        setLockedSceneModal({
          sceneTitle: `Chapitre ${target.number} : ${target.title}`,
          requiredXp: target.requiredXp,
          gateReason: `Termine le chapitre précédent ou atteins ${target.requiredXp} XP pour débloquer cette aventure !`,
          isSpiritualGate: true
        });
        return;
      }
    }
    soundManager.playSelect();
    setSlideDirection(chapterNumber > activeChapter ? 'right' : 'left');
    setActiveChapter(chapterNumber);
  };

  // Branch completion detection
  const isBranchCompletedCh1 = completedScenes.includes(5) || completedScenes.includes(6) || completedScenes.includes(7);
  const isBranchCompletedCh2 = completedScenes.includes(14) || completedScenes.includes(142);
  const isBranchCompletedCh3 = completedScenes.includes(201) || completedScenes.includes(202);

  // Identify next uncompleted playable scene in this chapter
  const uncompletedInChapter = currentChapterConfig.scenes.filter((s) => {
    if (completedScenes.includes(s.id)) return false;
    if ((s.id === 5 || s.id === 6 || s.id === 7) && isBranchCompletedCh1) return false;
    if (s.id === 142 && isBranchCompletedCh2) return false;
    if (s.id === 202 && isBranchCompletedCh3) return false;
    return true;
  });

  const nextPlayableScene = uncompletedInChapter.length > 0
    ? uncompletedInChapter[0]
    : currentChapterConfig.scenes[currentChapterConfig.scenes.length - 1];

  // Focused Scene state: by default the next playable scene, or whatever node the player tapped on
  const [selectedSceneId, setSelectedSceneId] = useState<number>(nextPlayableScene.id);

  // Resolve focused scene details
  const focusedScene = allScenesCombined.find((s) => s.id === selectedSceneId) || nextPlayableScene;
  const isFocusedCompleted = completedScenes.includes(focusedScene.id);
  const isFocusedLocked =
    playerXp < (focusedScene.requiredXp || 0) ||
    (focusedScene.id >= 17
      ? !isSupporter && playerXp < 780
      : focusedScene.id >= 10
      ? !isSupporter && playerXp < 450
      : false);
  const isFocusedCurrent = focusedScene.id === nextPlayableScene.id && !isFocusedCompleted;

  const handleNodeClick = (
    sceneId: number,
    requiredXp: number,
    sceneTitle: string,
    gateReason?: string,
    isSpiritualGate?: boolean
  ) => {
    soundManager.playSelect();
    setSelectedSceneId(sceneId);

    const reqXpForChapter = sceneId >= 17 ? 780 : sceneId >= 10 ? 450 : 0;
    if (sceneId >= 10 && !isSupporter && playerXp < reqXpForChapter) {
      setLockedSceneModal({
        sceneTitle,
        requiredXp: reqXpForChapter,
        gateReason: 'Cette étape fait partie du Chapitre 2 ou 3. Débloquez la suite avec le Pack Fondateur (4,99 €) ou en atteignant les XP requis.',
        isFounderRequired: true
      });
      return;
    }

    if (playerXp < requiredXp) {
      setLockedSceneModal({ sceneTitle, requiredXp, gateReason, isSpiritualGate });
    }
  };

  const handleLaunchScene = (sceneId: number) => {
    const target = allScenesCombined.find((s) => s.id === sceneId);
    if (!target) return;
    const reqXpForChapter = target.id >= 17 ? 780 : target.id >= 10 ? 450 : 0;
    if (target.id >= 10 && !isSupporter && playerXp < reqXpForChapter) {
      setLockedSceneModal({
        sceneTitle: target.title,
        requiredXp: reqXpForChapter,
        gateReason: 'Cette étape fait partie du Chapitre 2 ou 3. Débloquez la suite avec le Pack Fondateur (4,99 €) ou en atteignant les XP requis.',
        isFounderRequired: true
      });
      return;
    }
    if (playerXp < (target.requiredXp || 0)) {
      setLockedSceneModal({
        sceneTitle: target.title,
        requiredXp: target.requiredXp || 0,
        gateReason: target.gateReason,
        isSpiritualGate: target.isSpiritualGate
      });
      return;
    }
    soundManager.playSelect();
    onSelectScene(sceneId);
  };

  const completedCount = currentChapterConfig.scenes.filter((s) => completedScenes.includes(s.id)).length;
  const totalScenes = currentChapterConfig.scenes.length;

  // Build SVG path string for winding trail connecting all nodes
  const buildSvgPath = () => {
    const pts = currentChapterConfig.positions;
    if (!pts || pts.length === 0) return '';
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const cur = pts[i];
      // Smooth curve between nodes
      const cx1 = prev.x;
      const cy1 = (prev.y + cur.y) / 2;
      const cx2 = cur.x;
      const cy2 = (prev.y + cur.y) / 2;
      d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${cur.x} ${cur.y}`;
    }
    return d;
  };

  return (
    <div
      className="flex-1 min-h-0 flex flex-col w-full h-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 py-1 sm:py-2 select-none relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ========================================================= */}
      {/* 1. HEADER ÉPURÉ : LE CHEMIN • TITRE DU CHAPITRE           */}
      {/* ========================================================= */}
      <div className="w-full flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-5 py-2 sm:py-2.5 bg-[#fbf7ee] rounded-2xl sm:rounded-3xl border-3 border-[#3a2312] shadow-[0_4px_0_#3a2312] shrink-0 mb-1.5 sm:mb-2">
        {/* Flèche Chapitre Précédent */}
        <button
          onClick={handlePrevChapter}
          disabled={activeChapter === 1}
          aria-label="Chapitre précédent"
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-[#3a2312] bg-gradient-to-b from-[#fcd34d] via-[#f59e0b] to-[#d97706] hover:from-[#fde047] hover:to-[#f59e0b] text-[#3a2312] shadow-[0_2px_0_#3a2312] sm:shadow-[0_3px_0_#3a2312] active:translate-y-0.5 disabled:opacity-25 disabled:pointer-events-none flex items-center justify-center shrink-0 cursor-pointer transition-all"
        >
          <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 stroke-[3.5] text-[#3a2312]" />
        </button>

        {/* Centre : Titre Noble & Chapitres */}
        <div className="flex-1 min-w-0 flex flex-col items-center text-center justify-center px-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#8c5a2b] font-cinzel flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-[#d97c27]" />
              <span>LE CHEMIN • CHAPITRE {currentChapterConfig.number}</span>
            </span>
            <span className="text-[10px] sm:text-xs font-black text-[#d97c27]">•</span>
            <span className="text-[10px] sm:text-xs font-bold text-[#2d6a4f] font-cinzel">
              {completedCount}/{totalScenes} étapes
            </span>
          </div>

          <h2 className="text-xs sm:text-base lg:text-lg font-black text-[#3a2312] font-cinzel truncate max-w-[240px] sm:max-w-md mt-0.5">
            {currentChapterConfig.title}
          </h2>

          <p className="hidden sm:block text-[11px] text-[#6b4724] italic font-medium truncate max-w-lg mt-0.5">
            « {currentChapterConfig.theme} »
          </p>

          {/* Onglets Ch. 1, Ch. 2, Ch. 3 */}
          <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
            {CHAPTERS.map((chap) => {
              const isActive = chap.id === activeChapter;
              return (
                <button
                  key={chap.id}
                  onClick={() => handleSelectChapterDirectly(chap.id)}
                  className={`flex items-center gap-1 px-2.5 py-0.5 rounded-lg sm:rounded-xl border font-cinzel text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#3a2312] text-amber-200 border-[#3a2312] shadow-xs scale-105'
                      : chap.isUnlocked
                      ? 'bg-[#ebdfc8] hover:bg-[#dfceb3] text-[#3a2312] border-[#8c6b4e]'
                      : 'bg-stone-200/80 text-stone-500 border-dashed border-stone-400 opacity-70'
                  }`}
                >
                  <span>{chap.icon}</span>
                  <span>Ch. {chap.number}</span>
                  {!chap.isUnlocked && <Lock className="w-2.5 h-2.5 text-stone-500" />}
                  {chap.isComplete && <span className="text-emerald-600 font-black">✓</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Flèche Chapitre Suivant */}
        <button
          onClick={handleNextChapter}
          disabled={activeChapter === 3}
          aria-label="Chapitre suivant"
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-[#3a2312] bg-gradient-to-b from-[#fcd34d] via-[#f59e0b] to-[#d97706] hover:from-[#fde047] hover:to-[#f59e0b] text-[#3a2312] shadow-[0_2px_0_#3a2312] sm:shadow-[0_3px_0_#3a2312] active:translate-y-0.5 disabled:opacity-25 disabled:pointer-events-none flex items-center justify-center shrink-0 cursor-pointer transition-all"
        >
          <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 stroke-[3.5] text-[#3a2312]" />
        </button>
      </div>

      {/* ========================================================= */}
      {/* 2. CORPS CENTRAL : LA CARTE SENTIER + FICHE D'ÉTAPE       */}
      {/* ========================================================= */}
      <div className="flex-1 min-h-0 flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 w-full h-full overflow-hidden">
        
        {/* ======================================================= */}
        {/* 🗺️ CANVAS DE LA CARTE : SENTIER DU VOYAGE AVEC TRACÉ   */}
        {/* ======================================================= */}
        <div
          key={`chapter-path-${activeChapter}`}
          className={`relative h-full flex-1 max-h-[calc(100vh-175px)] aspect-[9/14] sm:aspect-[9/13] md:max-w-[440px] lg:max-w-[480px] rounded-2xl sm:rounded-3xl border-3 border-[#3a2312] overflow-hidden shadow-[0_6px_0_#3a2312] bg-[#b8956e] shrink-0 ${
            slideDirection === 'right'
              ? 'animate-in slide-in-from-right duration-300'
              : slideDirection === 'left'
              ? 'animate-in slide-in-from-left duration-300'
              : ''
          }`}
        >
          {/* Illustration de fond de la carte */}
          <img
            src={PIXEL_ASSETS.map}
            alt={`Chemin du Chapitre ${activeChapter}`}
            className="w-full h-full object-cover filter saturate-[1.1]"
          />

          {/* Vignette d'ambiance et de contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Tracé SVG du sentier (Winding Trail Line) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Ombre du sentier */}
            <path
              d={buildSvgPath()}
              fill="none"
              stroke="rgba(58, 35, 18, 0.75)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Ligne du sentier dorée en pointillé RPG */}
            <path
              d={buildSvgPath()}
              fill="none"
              stroke="#fde047"
              strokeWidth="2.2"
              strokeDasharray="2.5 2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-90"
            />
          </svg>

          {/* Nœuds interactifs le long du chemin */}
          {currentChapterConfig.scenes.map((scene, index) => {
            const isCompleted = completedScenes.includes(scene.id);
            const isUnlocked = playerXp >= (scene.requiredXp || 0);
            const isCurrent = scene.id === nextPlayableScene.id && !isCompleted;
            const isSelected = scene.id === focusedScene.id;
            const pos = currentChapterConfig.positions[index] || { top: '50%', left: '50%' };
            const isBoss = scene.id === 9 || scene.id === 15 || scene.id === 25;

            return (
              <div
                key={scene.id}
                style={{ top: pos.top, left: pos.left }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer transition-all duration-200 ${
                  isCurrent || isSelected ? 'scale-110 z-30' : 'hover:scale-105'
                }`}
                onClick={() =>
                  handleNodeClick(
                    scene.id,
                    scene.requiredXp || 0,
                    scene.title,
                    scene.gateReason,
                    scene.isSpiritualGate
                  )
                }
              >
                {/* Badge TU ES ICI / ÉTAPE ACTUELLE au-dessus du nœud */}
                {isCurrent && (
                  <div className="absolute -top-6 sm:-top-7 flex items-center gap-1 bg-[#3a2312] text-amber-300 font-cinzel font-black text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full border border-amber-400 shadow-md animate-bounce whitespace-nowrap">
                    <Footprints className="w-2.5 h-2.5" />
                    <span>TU ES ICI</span>
                  </div>
                )}

                {/* Pastille / Nœud de l'Étape */}
                <div
                  className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl border-2 transition-all font-cinzel text-xs shadow-[0_3px_0_#3a2312] ${
                    isCurrent
                      ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-stone-950 font-black ring-3 sm:ring-4 ring-amber-400/90 shadow-[0_0_16px_rgba(245,158,11,0.7),0_3px_0_#3a2312]'
                      : isSelected
                      ? 'bg-amber-100 border-[#d97c27] text-[#3a2312] ring-2 ring-[#d97c27]'
                      : isCompleted
                      ? 'bg-[#ebf5e9] border-[#2d522f] text-[#1b4332]'
                      : isUnlocked
                      ? 'bg-[#fbf7ee] border-[#3a2312] text-[#3a2312] hover:bg-[#ebdfc8]'
                      : 'bg-[#e4d7c0]/95 border-dashed border-[#8c6b4e] text-[#6b5037] opacity-80'
                  }`}
                >
                  {/* Icône d'état */}
                  {isCurrent ? (
                    <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#3a2312] text-amber-300 flex items-center justify-center shrink-0 shadow-xs">
                      <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current ml-0.5" />
                    </span>
                  ) : isCompleted ? (
                    <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#4a804d] text-white flex items-center justify-center text-[9px] sm:text-[10px] font-black shrink-0">
                      ✓
                    </span>
                  ) : !isUnlocked ? (
                    <Lock className="w-3 h-3 text-[#8c5a2b] shrink-0" />
                  ) : (
                    <span className="text-[10px] font-bold text-[#8c5a2b]">{scene.id}.</span>
                  )}

                  {/* Nom court de l'étape */}
                  <span className="text-[9.5px] sm:text-[11px] font-bold whitespace-nowrap tracking-tight">
                    {scene.title}
                  </span>

                  {/* Badge Spécial Sommet */}
                  {isBoss && !isCurrent && (
                    <span className="text-[7.5px] font-black uppercase bg-[#8b0000] text-amber-200 border border-amber-500/60 px-1 py-0.2 rounded-md tracking-wider shrink-0">
                      SOMMET
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================= */}
        {/* 📜 FICHE D'ÉTAPE & ACTION : PANNEAU UNIQUE & ÉPURÉ      */}
        {/* ======================================================= */}
        <div className="w-full md:w-80 lg:w-96 bg-[#fbf7ee] rounded-2xl sm:rounded-3xl border-3 border-[#3a2312] p-3.5 sm:p-5 shadow-[0_5px_0_#3a2312] flex flex-col justify-between shrink-0">
          
          {/* En-tête de la scène sélectionnée */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border-b border-[#ebdcc4] pb-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#8c5a2b] font-cinzel">
                  Étape {focusedScene.id} sur {totalScenes}
                </span>
                {isFocusedCompleted && (
                  <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-1.5 py-0.2 rounded-md">
                    ✓ Validée (+XP acquis)
                  </span>
                )}
              </div>

              {isFocusedCurrent && (
                <span className="text-[9px] font-black uppercase bg-amber-400 text-stone-950 px-2 py-0.5 rounded-full border border-[#3a2312] font-cinzel shadow-xs">
                  À franchir
                </span>
              )}
            </div>

            {/* Titre et Sous-titre */}
            <div>
              <h3 className="text-sm sm:text-base lg:text-lg font-black font-cinzel text-[#3a2312] leading-tight">
                {focusedScene.title}
              </h3>
              <p className="text-xs text-[#d97c27] font-bold mt-0.5">
                {focusedScene.subtitle}
              </p>
              <p className="text-[11px] text-[#6b4724] italic mt-1 bg-[#f3ebd9] p-2 rounded-xl border border-[#d2be9f]">
                📍 {focusedScene.location}
              </p>
            </div>
          </div>

          {/* Bouton d'action principal */}
          <div className="mt-3 pt-2 border-t border-[#ebdcc4] flex flex-col gap-2">
            {isFocusedLocked ? (
              <div className="flex flex-col gap-1.5">
                {focusedScene.id >= 10 && !isSupporter && playerXp < (focusedScene.id >= 17 ? 780 : 450) ? (
                  <div className="flex flex-col gap-1 w-full">
                    <button
                      onClick={() =>
                        setLockedSceneModal({
                          sceneTitle: focusedScene.title,
                          requiredXp: focusedScene.id >= 17 ? 780 : 450,
                          gateReason: 'Cette étape fait partie du Chapitre 2 ou 3. Débloquez la suite avec le Pack Fondateur (4,99 €) avec la garantie Satisfait ou Remboursé 7 jours sans risque.',
                          isFounderRequired: true
                        })
                      }
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-stone-950 font-black font-cinzel text-xs border-2 border-[#3a2312] shadow-xs active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Lock className="w-4 h-4 text-stone-900" />
                      <span>Pack Fondateur Requis (4,99 €)</span>
                    </button>
                    <span className="text-[10px] text-emerald-800 font-bold text-center">
                      🛡️ Garantie 7 jours satisfait ou remboursé
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={() =>
                      handleNodeClick(
                        focusedScene.id,
                        focusedScene.requiredXp || 0,
                        focusedScene.title,
                        focusedScene.gateReason,
                        focusedScene.isSpiritualGate
                      )
                    }
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-950 font-black font-cinzel text-xs border-2 border-[#3a2312] shadow-xs active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4 text-amber-900" />
                    <span>Porte fermée ({focusedScene.requiredXp} XP requis)</span>
                  </button>
                )}
                {onOpenKnowledgeQuiz && !(focusedScene.id >= 10 && !isSupporter) && (
                  <button
                    onClick={onOpenKnowledgeQuiz}
                    className="w-full py-1.5 px-3 rounded-lg bg-[#2d6a4f] hover:bg-[#23533e] text-white font-bold font-cinzel text-[10px] shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Zap className="w-3 h-3 fill-amber-300 text-amber-300" />
                    <span>Faire un Quiz de Savoir (+XP)</span>
                  </button>
                )}
              </div>
            ) : isFocusedCompleted ? (
              <button
                onClick={() => handleLaunchScene(focusedScene.id)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#ebdfc8] hover:bg-[#dfceb3] text-[#3a2312] font-black font-cinzel text-xs sm:text-sm border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4 text-[#8c5a2b]" />
                <span>REJOUER CETTE ÉTAPE</span>
              </button>
            ) : (
              <button
                onClick={() => handleLaunchScene(focusedScene.id)}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-stone-950 font-black font-cinzel text-xs sm:text-sm border-2 border-[#3a2312] shadow-[0_3px_0_#3a2312] hover:-translate-y-0.5 active:translate-y-0 active:shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>POURSUIVRE LE VOYAGE →</span>
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Modal Porte Spirituelle / Scène Verrouillée */}
      {lockedSceneModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 select-none"
          onClick={() => setLockedSceneModal(null)}
        >
          <div
            className="w-full max-w-sm bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl p-5 shadow-[0_8px_0_#3a2312] flex flex-col items-center gap-3 text-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-100 border-2 border-[#3a2312] shadow-xs flex items-center justify-center text-[#d97c27]">
              {lockedSceneModal.isFounderRequired ? <Sparkles className="w-6 h-6 fill-amber-500 text-amber-600" /> : <Lock className="w-6 h-6" />}
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#8c5a2b] font-cinzel">
                {lockedSceneModal.isFounderRequired ? 'Accès Pack Fondateur' : 'Porte Verrouillée'}
              </span>
              <h3 className="text-base font-black text-[#3a2312] font-cinzel mt-1">
                {lockedSceneModal.sceneTitle}
              </h3>
            </div>

            <p className="text-xs text-[#6b4724] leading-relaxed bg-[#f3ebd9] p-3 rounded-xl border border-[#d2be9f]">
              {lockedSceneModal.gateReason ||
                `Cette étape demande ${lockedSceneModal.requiredXp} XP pour être franchie. Continue ton apprentissage pour la débloquer !`}
            </p>

            {lockedSceneModal.isFounderRequired ? (
              <div className="flex flex-col gap-2.5 w-full mt-1">
                <div className="w-full p-2.5 rounded-xl bg-emerald-50 border border-emerald-400 text-emerald-900 text-[11px] font-bold flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>🛡️ 100% Sérénité : Satisfait ou Remboursé 7j</span>
                </div>

                <div className="w-full flex items-center justify-between bg-[#ebdfc8] py-2 px-3 rounded-xl border border-[#3a2312] text-xs font-bold text-[#3a2312]">
                  <span>Accès Chapitres 2 & 3</span>
                  <span className="text-amber-700 font-black font-mono">4,99 € (Offre Spéciale)</span>
                </div>

                <button
                  onClick={() => {
                    setLockedSceneModal(null);
                    onOpenSupportModal?.();
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-black text-xs font-cinzel shadow-md flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5 border-2 border-[#1b4332]"
                >
                  <Sparkles className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <span>Débloquer le Pack Fondateur (4,99 €)</span>
                </button>

                <button
                  onClick={() => setLockedSceneModal(null)}
                  className="w-full py-1.5 px-3 rounded-xl bg-[#ebdfc8] hover:bg-[#dfceb3] text-[#3a2312] font-bold text-xs font-cinzel border border-[#3a2312] cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <div className="w-full flex items-center justify-center gap-2 bg-[#ebdfc8] py-1.5 px-3 rounded-xl border border-[#3a2312] text-xs font-bold text-[#3a2312]">
                  <span>Ton XP : <strong className="text-[#d97c27]">{playerXp}</strong> / {lockedSceneModal.requiredXp} XP</span>
                </div>

                <div className="flex flex-col gap-2 w-full mt-1">
                  {onOpenKnowledgeQuiz && (
                    <button
                      onClick={() => {
                        setLockedSceneModal(null);
                        onOpenKnowledgeQuiz();
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-black text-xs font-cinzel shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                      <span>Répondre à des Quiz (+XP)</span>
                    </button>
                  )}

                  <button
                    onClick={() => setLockedSceneModal(null)}
                    className="w-full py-2 px-3 rounded-xl bg-[#ebdfc8] hover:bg-[#dfceb3] text-[#3a2312] font-bold text-xs font-cinzel border border-[#3a2312] cursor-pointer"
                  >
                    Compris
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
