import React, { useState } from 'react';
import { ChevronLeft, Check, Lock, Play, Sparkles, Zap, BookOpen, X, Map, ListOrdered, Shield, Trophy } from 'lucide-react';
import { CHAPTER_1_SCENES } from '../../data/chapter1';
import { PIXEL_ASSETS } from '../../utils/assets';
import { soundManager } from '../../utils/audio';

interface TravelMapScreenProps {
  currentSceneIndex: number;
  completedScenes: number[];
  playerXp: number;
  onSelectScene: (sceneId: number) => void;
  onOpenKnowledgeQuiz?: () => void;
  onBack: () => void;
}

export const TravelMapScreen: React.FC<TravelMapScreenProps> = ({
  currentSceneIndex,
  completedScenes,
  playerXp,
  onSelectScene,
  onOpenKnowledgeQuiz,
  onBack
}) => {
  const [viewMode, setViewMode] = useState<'roadmap' | 'list'>('roadmap');
  const [lockedSceneModal, setLockedSceneModal] = useState<{
    sceneTitle: string;
    requiredXp: number;
  } | null>(null);

  // Map nodes corresponding to all 9 scenes
  const mapNodes = CHAPTER_1_SCENES.map((scene) => ({
    id: scene.id,
    label: `${scene.id}. ${scene.title}`,
    subtitle: scene.subtitle,
    location: scene.location,
    sceneId: scene.id,
    requiredXp: scene.requiredXp || 0,
    isBoss: scene.id === 9
  }));

  const handleNodeClick = (sceneId: number, requiredXp: number, sceneTitle: string) => {
    soundManager.playSelect();
    if (playerXp < requiredXp) {
      setLockedSceneModal({ sceneTitle, requiredXp });
      return;
    }
    onSelectScene(sceneId);
  };

  // Node positions along the winding mountain ascent path (from bottom to top)
  const roadmapPositions = [
    { top: '86%', left: '26%' }, // 1. La Chambre (Bottom start)
    { top: '76%', left: '68%' }, // 2. Poteau aux chemins
    { top: '66%', left: '32%' }, // 3. Premier Waswas
    { top: '56%', left: '72%' }, // 4. Vallée des Demain
    { top: '46%', left: '30%' }, // 5. Le Village
    { top: '36%', left: '68%' }, // 6. Le Refus
    { top: '26%', left: '34%' }, // 7. Le Geste
    { top: '16%', left: '65%' }, // 8. Jardin abandonné
    { top: '5%', left: '48%' }   // 9. Grand Waswas (Summit Climax)
  ];

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-3 sm:px-6 py-3 max-w-md mx-auto w-full gap-3 select-none custom-scrollbar">
      {/* Top Header Banner */}
      <div className="flex items-center justify-between bg-[#ebdfc8] px-3.5 py-2 rounded-2xl border-2 border-[#3a2312] shadow-sm">
        <div>
          <span className="text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel tracking-widest block">
            Chapitre 1 : Le Chemin Commence
          </span>
          <h1 className="text-xs sm:text-sm font-bold text-[#3a2312] font-cinzel">
            ROADMAP & EXPÉDITIONS
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {/* View Toggle */}
          <div className="flex bg-[#d9c7ab] p-0.5 rounded-xl border border-[#3a2312]">
            <button
              onClick={() => {
                soundManager.playSelect();
                setViewMode('roadmap');
              }}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'roadmap'
                  ? 'bg-[#fbf7ee] text-[#3a2312] shadow-sm'
                  : 'text-[#6b4724] hover:text-[#3a2312]'
              }`}
              title="Vue Carte Roadmap"
            >
              <Map className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                soundManager.playSelect();
                setViewMode('list');
              }}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-[#fbf7ee] text-[#3a2312] shadow-sm'
                  : 'text-[#6b4724] hover:text-[#3a2312]'
              }`}
              title="Vue Liste des scènes"
            >
              <ListOrdered className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Player XP Pill */}
          <div className="flex items-center gap-1 px-2 py-1 rounded-xl bg-[#fbf7ee] border border-[#3a2312] text-[#d97c27] shadow-inner">
            <Zap className="w-3.5 h-3.5 fill-[#d97c27]" />
            <span className="text-xs font-black font-mono">{playerXp} XP</span>
          </div>
        </div>
      </div>

      {/* VIEW 1: MAGNIFICENT PIXEL ART ROADMAP CANVAS */}
      {viewMode === 'roadmap' && (
        <div className="relative w-full aspect-[9/15] rounded-3xl border-3 border-[#3a2312] overflow-hidden shadow-[0_6px_0_#3a2312] bg-[#b8956e]">
          {/* Background Map Pixel Art */}
          <img
            src={PIXEL_ASSETS.map}
            alt="Carte Roadmap du Chapitre 1"
            className="w-full h-full object-cover filter saturate-[1.1]"
          />

          {/* Vignette & contrast overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Interactive Roadmap Nodes */}
          {mapNodes.map((node, index) => {
            const isCompleted = completedScenes.includes(node.sceneId);
            const isUnlocked = playerXp >= node.requiredXp;
            const isCurrent = currentSceneIndex + 1 === node.sceneId;
            const pos = roadmapPositions[index] || { top: '50%', left: '50%' };

            return (
              <div
                key={node.id}
                style={{ top: pos.top, left: pos.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer"
                onClick={() => handleNodeClick(node.sceneId, node.requiredXp, node.label)}
              >
                {/* Node Pill Marker */}
                <div
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-2xl border-2 transition-all font-cinzel text-xs shadow-[0_3px_0_#3a2312] ${
                    isCompleted
                      ? 'bg-[#ebf5e9] border-[#2d522f] text-[#1b4332]'
                      : isCurrent
                      ? 'bg-[#e69138] border-[#3a2312] text-[#1a1209] font-black ring-4 ring-[#e69138]/60 animate-bounce'
                      : isUnlocked
                      ? 'bg-[#fbf7ee] border-[#3a2312] text-[#3a2312] hover:bg-[#ebdfc8]'
                      : 'bg-[#e4d7c0]/90 border-dashed border-[#8c6b4e] text-[#6b5037] opacity-80'
                  }`}
                >
                  {isCompleted ? (
                    <span className="w-3.5 h-3.5 rounded-full bg-[#4a804d] text-white flex items-center justify-center text-[9px] font-bold">
                      ✓
                    </span>
                  ) : isCurrent ? (
                    <Play className="w-3 h-3 fill-current" />
                  ) : !isUnlocked ? (
                    <Lock className="w-3 h-3 text-[#8c5a2b]" />
                  ) : null}

                  <span className="text-[10px] sm:text-[11px] font-bold whitespace-nowrap">
                    {node.label}
                  </span>
                </div>

                {/* Required XP / Lock indicator below node */}
                {!isUnlocked && (
                  <span className="text-[8px] font-bold px-1.5 py-0.2 rounded-md bg-[#2a1c12]/90 text-amber-300 border border-amber-600/40 shadow-sm mt-0.5 font-mono">
                    {node.requiredXp} XP
                  </span>
                )}

                {/* Boss / Climax Icon on top node */}
                {node.isBoss && (
                  <div className="w-10 h-10 mt-1 rounded-xl bg-[#2a1c12]/95 border-2 border-[#d97c27] p-1 shadow-lg flex items-center justify-center animate-pulse">
                    <img
                      src={PIXEL_ASSETS.clockTower}
                      alt="Boss Waswas"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom Banner on Map */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#2a1c12]/90 backdrop-blur-md border border-[#8c5a2b] text-[#fbf7ee] z-20">
            <Sparkles className="w-3.5 h-3.5 text-[#d97c27]" />
            <span className="text-[9px] sm:text-[10px] font-bold font-cinzel">
              9 Épreuves de Sagesse • Chapitre 1
            </span>
          </div>
        </div>
      )}

      {/* VIEW 2: SCENES CHECKPOINTS LIST */}
      {viewMode === 'list' && (
        <div className="flex flex-col gap-2">
          {mapNodes.map((node) => {
            const isCompleted = completedScenes.includes(node.sceneId);
            const isUnlocked = playerXp >= node.requiredXp;
            const isCurrent = currentSceneIndex + 1 === node.sceneId;

            return (
              <div
                key={node.id}
                onClick={() => handleNodeClick(node.sceneId, node.requiredXp, node.label)}
                className={`p-3 rounded-2xl border-2 flex items-center justify-between gap-3 transition-all cursor-pointer ${
                  isCompleted
                    ? 'bg-[#ebf5e9] border-[#4a804d] text-[#2d522f] shadow-[0_2px_0_#3a2312]'
                    : isUnlocked
                    ? isCurrent
                      ? 'bg-[#fef4e8] border-[#e69138] text-[#3a2312] ring-2 ring-[#e69138]/50 shadow-[0_3px_0_#3a2312]'
                      : 'bg-[#fbf7ee] border-[#3a2312] text-[#3a2312] hover:bg-[#ebdfc8] shadow-[0_2px_0_#3a2312]'
                    : 'bg-[#e4d7c0] border-dashed border-[#8c6b4e] text-[#7a5a3d] opacity-75 shadow-none'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-xl border flex items-center justify-center font-bold text-xs shrink-0 ${
                      isCompleted
                        ? 'bg-[#4a804d] text-white border-[#2d522f]'
                        : isUnlocked
                        ? 'bg-[#ebdfc8] text-[#3a2312] border-[#3a2312]'
                        : 'bg-[#d8c7ad] text-[#5e4125] border-[#8c6b4e]'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-4 h-4 stroke-[3]" />
                    ) : isUnlocked ? (
                      node.id
                    ) : (
                      <Lock className="w-3.5 h-3.5" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold truncate font-cinzel">
                      {node.label}
                    </h4>
                    <p className="text-[10px] text-[#6b4724] truncate">
                      {node.subtitle} — {node.location}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {node.requiredXp > 0 && (
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded font-mono ${
                            isUnlocked
                              ? 'bg-[#d8f3dc] text-[#1b4332]'
                              : 'bg-[#fde2e4] text-[#9b2226]'
                          }`}
                        >
                          {node.requiredXp} XP requis
                        </span>
                      )}
                      {node.isBoss && (
                        <span className="text-[9px] bg-[#3a2312] text-[#fbf7ee] px-1.5 py-0.2 rounded font-bold font-cinzel">
                          Climax
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="shrink-0">
                  {isCompleted ? (
                    <span className="text-[10px] font-bold text-[#4a804d] uppercase font-cinzel">
                      Rejouer ➔
                    </span>
                  ) : isUnlocked ? (
                    <div className="flex items-center gap-1 text-[#d97c27] font-bold text-xs font-cinzel">
                      <span>Jouer</span>
                      <Play className="w-3.5 h-3.5 fill-[#d97c27]" />
                    </div>
                  ) : (
                    <span className="text-[10px] font-bold text-[#8c5a2b] font-cinzel">
                      Verrouillé 🔒
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Locked Scene XP Prompt Modal */}
      {lockedSceneModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLockedSceneModal(null)}
        >
          <div
            className="w-full max-w-sm bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl p-5 sm:p-6 shadow-[0_8px_0_#3a2312] flex flex-col items-center gap-4 text-center select-none animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center text-[#d97c27] shadow-inner">
              <Lock className="w-7 h-7" />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase text-[#8c5a2b] font-cinzel bg-[#ebdfc8] px-3 py-1 rounded-full border border-[#3a2312]">
                Expérience requise
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#3a2312] font-cinzel mt-2">
                {lockedSceneModal.sceneTitle}
              </h3>
            </div>

            <div className="bg-[#f3ebd9] p-3.5 rounded-2xl border border-[#d2be9f] text-xs text-[#5c4028] leading-relaxed">
              Il te faut <span className="font-bold text-[#3a2312]">{lockedSceneModal.requiredXp} XP</span> pour débloquer cette étape (tu possèdes actuellement <span className="font-bold text-[#d97c27]">{playerXp} XP</span>).
              <br />
              <br />
              💡 <span className="font-bold">Astuce :</span> Ouvre le <span className="font-bold">Livre du Savoir 📖</span> pour répondre aux Quiz Islamiques et remporter de l'XP !
            </div>

            <div className="flex flex-col gap-2 w-full">
              {onOpenKnowledgeQuiz && (
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playSelect();
                    setLockedSceneModal(null);
                    onOpenKnowledgeQuiz();
                  }}
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#2d6a4f] to-[#52b788] text-white font-bold text-xs sm:text-sm font-cinzel border-2 border-[#1b4332] shadow-[0_3px_0_#1b4332] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Aller aux Quiz Islamiques (+XP)</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  soundManager.playSelect();
                  setLockedSceneModal(null);
                }}
                className="w-full py-2.5 px-4 rounded-2xl bg-[#ebdfc8] hover:bg-[#e0cfb4] text-[#3a2312] font-bold text-xs font-cinzel border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] transition-all cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
