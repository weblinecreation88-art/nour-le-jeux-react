import React, { useState } from 'react';
import { Check, ChevronRight, Lock, BookOpen, Clock, Sparkles, ScrollText, Play, RotateCcw, Compass, Flame, Shield, HeartHandshake, CheckCircle2, Award } from 'lucide-react';
import { QuestItem, PlayerProgress, RealAction } from '../../types';
import { soundManager } from '../../utils/audio';
import { CHAPTER_1_SCENES } from '../../data/chapter1';
import { CHAPTER_2_SCENES } from '../../data/chapter2';
import { CHAPTER_3_SCENES } from '../../data/chapter3';

interface QuestsScreenProps {
  progress: PlayerProgress;
  onToggleQuest: (questId: string, e?: React.MouseEvent) => void;
  onStartStoryQuest?: (sceneId?: number) => void;
  allActions?: Record<string, RealAction>;
  onValidatePledgedAction?: (actionId: string, e?: React.MouseEvent) => void;
}

export const QuestsScreen: React.FC<QuestsScreenProps> = ({
  progress,
  onToggleQuest,
  onStartStoryQuest,
  allActions = {},
  onValidatePledgedAction
}) => {
  const [questTab, setQuestTab] = useState<'daily' | 'story'>('daily');

  const dailyQuests = progress.quests.filter((q) => q.category === 'daily');
  const pledgedActionIds = progress.pledgedRealActions || [];
  const completedActionIds = progress.completedRealActions || [];

  const isChapter2Unlocked = progress.completedScenes.includes(9) || progress.xp >= 450;
  const isChapter3Unlocked = progress.completedScenes.includes(16) || progress.xp >= 780;

  const chaptersData = [
    {
      number: 1,
      title: 'Le Réveil & Le Grand Poteau',
      theme: 'La lutte contre la paresse & le premier départ',
      scenes: CHAPTER_1_SCENES,
      isUnlocked: true,
      requiredXp: 0,
      icon: '📜',
      color: '#d97c27'
    },
    {
      number: 2,
      title: 'Le Chemin du Hilm',
      theme: 'La maîtrise de la colère & la douceur',
      scenes: CHAPTER_2_SCENES,
      isUnlocked: isChapter2Unlocked,
      requiredXp: 450,
      icon: '🌿',
      color: '#2d6a4f'
    },
    {
      number: 3,
      title: 'La Montagne Intérieure',
      theme: "L'épreuve, le Sabr & la guérison",
      scenes: CHAPTER_3_SCENES,
      isUnlocked: isChapter3Unlocked,
      requiredXp: 780,
      icon: '🏔️',
      color: '#0e7490'
    }
  ];

  const getQuestIcon = (iconType: QuestItem['iconType']) => {
    switch (iconType) {
      case 'prayer':
        return <span className="text-xl">🕌</span>;
      case 'book':
        return <span className="text-xl">📖</span>;
      case 'focus':
        return <span className="text-xl">🛡️</span>;
      case 'bonus':
        return <span className="text-xl">⭐</span>;
      default:
        return <span className="text-xl">🌿</span>;
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-3 sm:px-6 pt-3 pb-16 max-w-xl mx-auto w-full gap-3 select-none custom-scrollbar">
      
      {/* ========================================================= */}
      {/* 1. EN-TÊTE ÉLÉGANT & INSPIRANT                             */}
      {/* ========================================================= */}
      <div className="bg-[#fbf7ee] rounded-2xl sm:rounded-3xl border-3 border-[#3a2312] p-3.5 sm:p-4 shadow-[0_4px_0_#3a2312] text-center flex flex-col items-center gap-1 shrink-0">
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#8c5a2b] font-cinzel flex items-center gap-1.5">
          <ScrollText className="w-3.5 h-3.5 text-[#d97c27]" />
          <span>QUÊTES & ACCOMPLISSEMENT</span>
        </span>
        <h1 className="text-base sm:text-lg font-black text-[#3a2312] font-cinzel">
          L'Élévation par les Actes
        </h1>
        <p className="text-xs text-[#6b4724] italic font-medium">
          « Chaque petite action dans le réel fait grandir ton personnage. »
        </p>
      </div>

      {/* ========================================================= */}
      {/* 2. SÉLECTEUR DE CATÉGORIE : MON CHEMIN | HISTOIRE        */}
      {/* ========================================================= */}
      <div className="grid grid-cols-2 p-1 bg-[#ebdfc8] border-2 border-[#3a2312] rounded-2xl shadow-[0_2px_0_#3a2312] shrink-0">
        <button
          onClick={() => {
            soundManager.playSelect();
            setQuestTab('daily');
          }}
          className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all font-cinzel cursor-pointer flex items-center justify-center gap-1.5 ${
            questTab === 'daily'
              ? 'bg-[#fbf7ee] text-[#3a2312] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] font-black'
              : 'text-[#8c6b4e] hover:text-[#3a2312]'
          }`}
        >
          <span>🌙</span>
          <span>MON CHEMIN & ADAB</span>
        </button>
        <button
          onClick={() => {
            soundManager.playSelect();
            setQuestTab('story');
          }}
          className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all font-cinzel cursor-pointer flex items-center justify-center gap-1.5 ${
            questTab === 'story'
              ? 'bg-[#fbf7ee] text-[#3a2312] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] font-black'
              : 'text-[#8c6b4e] hover:text-[#3a2312]'
          }`}
        >
          <span>📖</span>
          <span>HISTOIRE</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* 3. CONTENU : MON CHEMIN (ENGAGEMENTS D'ADAB + QUOTIDIENNES) */}
      {/* ========================================================= */}
      {questTab === 'daily' && (
        <div className="flex flex-col gap-3.5 animate-in fade-in duration-200">
          
          {/* SECTION : ENGAGEMENTS D'ADAB DU MONDE RÉEL (Option C) */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-black text-[#1b4332] uppercase font-cinzel flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#2d6a4f]" />
                <span>Mes Engagements d'Adab du Jour :</span>
              </span>
              <span className="text-[10px] font-bold text-[#2d6a4f] bg-[#d8f3dc] px-2 py-0.5 rounded-full border border-[#74c69d]">
                {pledgedActionIds.length} en attente
              </span>
            </div>

            {pledgedActionIds.length > 0 ? (
              <div className="flex flex-col gap-2">
                {pledgedActionIds.map((actId) => {
                  const action = allActions[actId];
                  if (!action) return null;
                  const remainingXp = Math.max(10, action.xpReward - Math.max(10, Math.round(action.xpReward / 2)));

                  return (
                    <div
                      key={actId}
                      className="p-3 sm:p-3.5 rounded-2xl border-2 bg-gradient-to-r from-[#fbf7ee] to-[#f4ebe1] border-[#2d6a4f] shadow-[0_3px_0_#2d6a4f] flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div className="w-10 h-10 rounded-xl bg-[#d8f3dc] border border-[#2d6a4f] flex items-center justify-center text-[#2d6a4f] shrink-0">
                          <HeartHandshake className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs sm:text-sm font-black text-[#1b4332] truncate font-cinzel">
                            {action.title}
                          </span>
                          <span className="text-[11px] text-[#4a2e18] line-clamp-1 mt-0.5 italic">
                            « {action.instruction} »
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          if (onValidatePledgedAction) {
                            onValidatePledgedAction(actId, e);
                          }
                        }}
                        className="px-3 py-2 rounded-xl bg-gradient-to-r from-[#2d6a4f] to-[#3a8461] hover:brightness-110 text-white font-black text-xs font-cinzel border border-[#1b4332] shadow-sm active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 shrink-0 animate-pulse"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>C'est fait ! (+{remainingXp} XP)</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-3 rounded-2xl bg-[#f5ede0] border border-[#d2be9f] text-center text-xs text-[#6b4724]">
                <span>🌿 Lorsque tu prends un engagement dans l'histoire, il s'inscrit ici pour que tu puisses l'accomplir et le valider dans ta journée.</span>
              </div>
            )}
          </div>

          {/* SECTION : QUÊTES QUOTIDIENNES (HABITUDES) */}
          <div className="flex flex-col gap-2 pt-1 border-t border-[#3a2312]/15">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-black text-[#8c5a2b] uppercase font-cinzel">
                🌙 Habitudes Quotidiennes :
              </span>
              <span className="text-[10px] font-bold text-[#6b4724]">
                {dailyQuests.filter(q => q.completed).length}/{dailyQuests.length} accomplies
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {dailyQuests.map((quest) => {
                return (
                  <div
                    key={quest.id}
                    onClick={(e) => onToggleQuest(quest.id, e)}
                    className={`flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                      quest.completed
                        ? 'bg-[#ebf5e9] border-[#4a804d] text-[#2d522f]'
                        : 'bg-[#fbf7ee] hover:bg-[#ebdcc4] border-[#3a2312] text-[#3a2312] shadow-[0_3px_0_#3a2312]'
                    }`}
                  >
                    {/* Icône & Textes */}
                    <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
                      <div className="w-11 h-11 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center shrink-0">
                        {getQuestIcon(quest.iconType)}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className={`text-xs sm:text-sm font-bold truncate ${quest.completed ? 'line-through opacity-85' : ''}`}>
                          {quest.title}
                        </span>
                        <span className="text-[11px] text-[#6b4724] line-clamp-1 mt-0.5">
                          {quest.description}
                        </span>
                      </div>
                    </div>

                    {/* Bouton d'Accomplissement naturel */}
                    <div className="flex items-center gap-2 shrink-0">
                      {quest.completed ? (
                        <span className="flex items-center gap-1.5 text-xs font-black text-[#2d6a4f] bg-[#d8f3dc] px-3 py-1.5 rounded-xl border border-[#74c69d]">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>✓ Accomplie (+{quest.xpReward} XP)</span>
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleQuest(quest.id, e);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-stone-950 font-black text-xs font-cinzel border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer flex items-center gap-1 shrink-0"
                        >
                          <Sparkles className="w-3.5 h-3.5 fill-current" />
                          <span>+{quest.xpReward} XP</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. CONTENU : HISTOIRE (CHRONIQUE DE LA SAGA D'OTHMÂN)      */}
      {/* ========================================================= */}
      {questTab === 'story' && (
        <div className="flex flex-col gap-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-black text-[#8c5a2b] uppercase font-cinzel">
              📖 Chronique des Chapitres :
            </span>
            <span className="text-[10px] font-bold text-[#2d6a4f]">
              {progress.completedScenes.length} scènes franchies
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {chaptersData.map((chapter) => {
              const chapterCompletedCount = chapter.scenes.filter(s => progress.completedScenes.includes(s.id)).length;
              const totalChapterScenes = chapter.scenes.length;
              const isChapterDone = chapterCompletedCount === totalChapterScenes;

              return (
                <div
                  key={chapter.number}
                  className={`p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl border-3 transition-all flex flex-col gap-2.5 ${
                    chapter.isUnlocked
                      ? 'bg-[#fbf7ee] border-[#3a2312] shadow-[0_4px_0_#3a2312]'
                      : 'bg-[#ebdcc4]/60 border-dashed border-[#a89078] text-[#8c6b4e] opacity-75'
                  }`}
                >
                  {/* Header du Chapitre */}
                  <div className="flex items-center justify-between border-b border-[#ebdcc4] pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{chapter.icon}</span>
                      <div>
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-[#8c5a2b] font-cinzel">
                          Chapitre {chapter.number}
                        </span>
                        <h3 className="text-xs sm:text-sm font-black font-cinzel text-[#3a2312]">
                          {chapter.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isChapterDone ? (
                        <span className="text-[10px] font-black text-emerald-800 bg-emerald-200 px-2 py-0.5 rounded-full border border-emerald-400">
                          ✓ Terminé
                        </span>
                      ) : chapter.isUnlocked ? (
                        <span className="text-[10px] font-bold text-[#3a2312] bg-amber-200 px-2 py-0.5 rounded-full border border-amber-400">
                          {chapterCompletedCount} / {totalChapterScenes} scènes
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-stone-600 bg-stone-200 px-2 py-0.5 rounded-full border border-stone-400">
                          <Lock className="w-3 h-3" />
                          <span>{chapter.requiredXp} XP</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Scènes du Chapitre (Aperçu) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {chapter.scenes.slice(0, 4).map((scene) => {
                      const isSceneDone = progress.completedScenes.includes(scene.id);
                      return (
                        <div
                          key={scene.id}
                          onClick={() => {
                            if (chapter.isUnlocked && onStartStoryQuest) {
                              onStartStoryQuest(scene.id);
                            }
                          }}
                          className={`flex items-center justify-between p-2 rounded-xl border text-[11px] font-cinzel font-bold transition-all cursor-pointer ${
                            isSceneDone
                              ? 'bg-[#ebf5e9] border-[#4a804d] text-[#1b4332]'
                              : chapter.isUnlocked
                              ? 'bg-[#f3ebd9] hover:bg-[#ebdfc8] border-[#3a2312] text-[#3a2312]'
                              : 'bg-stone-100 border-stone-300 text-stone-400 pointer-events-none'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            <span>{isSceneDone ? '✓' : chapter.isUnlocked ? '▶' : '🔒'}</span>
                            <span className="truncate">{scene.id}. {scene.title}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bouton pour ouvrir sur la Carte Le Chemin */}
                  {chapter.isUnlocked && (
                    <button
                      onClick={() => {
                        soundManager.playSelect();
                        if (onStartStoryQuest) onStartStoryQuest();
                      }}
                      className="w-full mt-1 py-2 px-3 rounded-xl bg-[#ebdfc8] hover:bg-[#dfceb3] text-[#3a2312] font-black font-cinzel text-xs border border-[#3a2312] shadow-xs active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Compass className="w-3.5 h-3.5 text-[#d97c27]" />
                      <span>Explorer sur Le Chemin</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
