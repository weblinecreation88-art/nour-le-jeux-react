import React, { useState } from 'react';
import { Scene, PlayerProgress } from '../types';
import { CHAPTER_1_SCENES } from '../data/chapter1';
import {
  Volume2,
  VolumeX,
  BookOpen,
  Sparkles,
  Compass,
  RotateCcw,
  ListOrdered,
  ChevronDown,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import { soundManager } from '../utils/audio';

interface HUDProps {
  currentScene: Scene;
  playerProgress: PlayerProgress;
  onSelectScene: (sceneId: number) => void;
  onOpenKnowledge: () => void;
  onOpenHistory: () => void;
  onOpenAssets: () => void;
  onToggleSound: () => void;
  onResetProgress: () => void;
}

export const HUD: React.FC<HUDProps> = ({
  currentScene,
  playerProgress,
  onSelectScene,
  onOpenKnowledge,
  onOpenHistory,
  onOpenAssets,
  onToggleSound,
  onResetProgress
}) => {
  const [showSceneMenu, setShowSceneMenu] = useState(false);


  return (
    <header className="relative z-40 w-full max-w-5xl mx-auto px-3 sm:px-6 pt-3 pb-2 flex flex-col gap-2">
      {/* Main Top Bar */}
      <div className="flex items-center justify-between gap-2 bg-[#1b1824]/90 backdrop-blur-md px-3 sm:px-4 py-2 rounded-2xl border border-amber-500/30 shadow-xl">
        {/* Left: Chapter & Scene Indicator */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center border border-amber-400/40 shadow-inner shrink-0">
            <span className="font-cinzel text-xs sm:text-sm font-bold text-amber-100">1</span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-400/90 font-cinzel">
                Chapitre 1
              </span>
              <span className="text-[10px] text-zinc-500">•</span>
              <span className="text-[10px] text-zinc-400">
                Scène {currentScene.id}/9
              </span>
            </div>
            <button
              onClick={() => setShowSceneMenu(!showSceneMenu)}
              className="flex items-center gap-1 text-xs sm:text-sm font-bold text-zinc-100 hover:text-amber-300 transition-colors truncate text-left cursor-pointer"
            >
              <span className="truncate">{currentScene.title}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-amber-400 transition-transform ${showSceneMenu ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Center: XP Bar and counter */}
        <div className="flex items-center gap-2 bg-[#252132] px-2.5 sm:px-3 py-1.5 rounded-xl border border-amber-500/20">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-[11px] sm:text-xs font-black text-amber-300 tracking-wide font-cinzel">
                {playerProgress.xp}
              </span>
              <span className="text-[9px] font-semibold text-amber-400/70">XP</span>
            </div>
          </div>
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Custom Assets Manager */}
          <button
            onClick={() => {
              soundManager.playSelect();
              onOpenAssets();
            }}
            title="Personnaliser les visuels (Assets)"
            className="p-1.5 sm:p-2 rounded-xl bg-[#252132] hover:bg-[#342f44] text-amber-300/90 border border-amber-500/30 transition-all cursor-pointer"
          >
            <ImageIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          {/* Knowledge Codex */}
          <button
            onClick={() => {
              soundManager.playSelect();
              onOpenKnowledge();
            }}
            title="Bibliothèque du Savoir (ʿIlm)"
            className="p-1.5 sm:p-2 rounded-xl bg-amber-950/40 hover:bg-amber-800/40 text-amber-300 border border-amber-500/30 transition-all cursor-pointer relative"
          >
            <Compass className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            {playerProgress.unlockedKnowledgeIds.length > 0 && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-500 text-[9px] font-black text-zinc-950 rounded-full flex items-center justify-center">
                {playerProgress.unlockedKnowledgeIds.length}
              </span>
            )}
          </button>

          {/* Dialogue History */}
          <button
            onClick={() => {
              soundManager.playSelect();
              onOpenHistory();
            }}
            title="Historique des dialogues"
            className="p-1.5 sm:p-2 rounded-xl bg-[#252132] hover:bg-[#342f44] text-zinc-300 border border-zinc-700/60 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          {/* Audio toggle */}
          <button
            onClick={() => {
              onToggleSound();
              soundManager.playSelect();
            }}
            title={playerProgress.soundEnabled ? "Couper le son" : "Activer le son"}
            className="p-1.5 sm:p-2 rounded-xl bg-[#252132] hover:bg-[#342f44] text-zinc-300 border border-zinc-700/60 transition-all cursor-pointer"
          >
            {playerProgress.soundEnabled ? (
              <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-400" />
            ) : (
              <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-zinc-500" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Scene Navigator */}
      {showSceneMenu && (
        <div className="absolute top-16 left-3 sm:left-6 right-3 sm:right-6 bg-[#1b1824] border border-amber-500/40 rounded-2xl shadow-2xl p-3 backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-zinc-200 uppercase tracking-wider font-cinzel">
                Navigation des 9 Scènes
              </span>
            </div>
            <button
              onClick={() => {
                if (confirm('Voulez-vous recommencer le Chapitre 1 depuis le début ?')) {
                  onResetProgress();
                  setShowSceneMenu(false);
                }
              }}
              className="flex items-center gap-1 text-[11px] text-red-400/80 hover:text-red-300 px-2 py-1 rounded-lg bg-red-950/30 border border-red-900/40 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Recommencer
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 max-h-64 overflow-y-auto pr-1">
            {CHAPTER_1_SCENES.map((scene) => {
              const isCurrent = scene.id === currentScene.id;
              const isUnlocked = playerProgress.completedScenes.includes(scene.id) || scene.id <= Math.max(1, ...playerProgress.completedScenes) + 1;

              return (
                <button
                  key={scene.id}
                  onClick={() => {
                    soundManager.playSelect();
                    onSelectScene(scene.id);
                    setShowSceneMenu(false);
                  }}
                  className={`flex items-start gap-2 p-2 rounded-xl text-left transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-amber-600/30 border border-amber-500/60 text-amber-200'
                      : isUnlocked
                      ? 'bg-[#252132] hover:bg-[#342f44] border border-zinc-800 text-zinc-300'
                      : 'bg-zinc-900/60 border border-zinc-800/40 text-zinc-500 opacity-60'
                  }`}
                >
                  <span className="w-5 h-5 rounded-md bg-zinc-950/80 text-[10px] font-bold flex items-center justify-center text-amber-400 shrink-0">
                    {scene.id}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold truncate">{scene.title}</p>
                    <p className="text-[10px] text-zinc-400 truncate">{scene.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
