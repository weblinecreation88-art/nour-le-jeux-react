import React, { useState } from 'react';
import { Check, ChevronRight, Lock, BookOpen, Clock, Sparkles, ScrollText } from 'lucide-react';
import { QuestItem, PlayerProgress } from '../../types';
import { soundManager } from '../../utils/audio';

interface QuestsScreenProps {
  progress: PlayerProgress;
  onToggleQuest: (questId: string) => void;
  onStartStoryQuest?: (questId: string) => void;
}

export const QuestsScreen: React.FC<QuestsScreenProps> = ({
  progress,
  onToggleQuest,
  onStartStoryQuest
}) => {
  const [questTab, setQuestTab] = useState<'daily' | 'story'>('daily');

  const dailyQuests = progress.quests.filter((q) => q.category === 'daily');
  const storyQuests = progress.quests.filter((q) => q.category === 'story');

  const getQuestIcon = (iconType: QuestItem['iconType']) => {
    switch (iconType) {
      case 'prayer':
        return <span className="text-lg">🕌</span>;
      case 'book':
        return <span className="text-lg">📖</span>;
      case 'focus':
        return <span className="text-lg">⏳</span>;
      case 'bonus':
        return <span className="text-lg">⭐</span>;
      case 'story':
        return <span className="text-lg">🧭</span>;
      case 'boss':
        return <span className="text-lg">⚔️</span>;
      default:
        return <span className="text-lg">📜</span>;
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-3 sm:px-6 py-3 max-w-md mx-auto w-full gap-3.5 select-none custom-scrollbar">
      {/* Title */}
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel">
          Quotidiennes & histoire
        </span>
        <h1 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel">
          QUÊTES – MISSIONS
        </h1>
      </div>

      {/* Tab Switcher */}
      <div className="grid grid-cols-2 p-1 bg-[#ebdfc8] border-2 border-[#3a2312] rounded-2xl shadow-[0_2px_0_#3a2312]">
        <button
          onClick={() => {
            soundManager.playSelect();
            setQuestTab('daily');
          }}
          className={`py-2 text-xs sm:text-sm font-bold rounded-xl transition-all font-cinzel cursor-pointer ${
            questTab === 'daily'
              ? 'bg-[#fbf7ee] text-[#3a2312] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312]'
              : 'text-[#8c6b4e] hover:text-[#3a2312]'
          }`}
        >
          Quotidiennes
        </button>
        <button
          onClick={() => {
            soundManager.playSelect();
            setQuestTab('story');
          }}
          className={`py-2 text-xs sm:text-sm font-bold rounded-xl transition-all font-cinzel cursor-pointer ${
            questTab === 'story'
              ? 'bg-[#fbf7ee] text-[#3a2312] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312]'
              : 'text-[#8c6b4e] hover:text-[#3a2312]'
          }`}
        >
          Histoire
        </button>
      </div>

      {/* Daily Quests List */}
      {questTab === 'daily' && (
        <div className="flex flex-col gap-2.5">
          <span className="text-[11px] font-bold text-[#8c5a2b] uppercase font-cinzel">
            QUÊTES QUOTIDIENNES
          </span>

          <div className="flex flex-col gap-2">
            {dailyQuests.map((quest) => (
              <div
                key={quest.id}
                onClick={() => onToggleQuest(quest.id)}
                className={`flex items-center justify-between p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                  quest.completed
                    ? 'bg-[#ebf5e9] border-[#4a804d] text-[#2d522f]'
                    : 'bg-[#fbf7ee] hover:bg-[#ebdcc4] border-[#3a2312] text-[#3a2312] shadow-[0_3px_0_#3a2312]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center shrink-0">
                    {getQuestIcon(quest.iconType)}
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs sm:text-sm font-bold ${quest.completed ? 'line-through opacity-80' : ''}`}>
                      {quest.title}
                    </span>
                    <span className="text-[11px] text-[#6b4724]">
                      {quest.description}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-[#d97c27] font-mono">
                    +{quest.xpReward} XP
                  </span>
                  <div
                    className={`w-6 h-6 rounded-lg border-2 border-[#3a2312] flex items-center justify-center transition-colors ${
                      quest.completed ? 'bg-[#4a804d] text-white' : 'bg-[#fbf7ee]'
                    }`}
                  >
                    {quest.completed && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Story Quests List */}
      {questTab === 'story' && (
        <div className="flex flex-col gap-2.5">
          <span className="text-[11px] font-bold text-[#8c5a2b] uppercase font-cinzel">
            QUÊTES DE L'HISTOIRE
          </span>

          <div className="flex flex-col gap-2.5">
            {storyQuests.map((quest, index) => (
              <div
                key={quest.id}
                onClick={() => {
                  if (onStartStoryQuest) onStartStoryQuest(quest.id);
                }}
                className={`p-3.5 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                  index === 0
                    ? 'bg-[#fbf7ee] hover:bg-[#ebdcc4] border-[#3a2312] text-[#3a2312] shadow-[0_3px_0_#3a2312]'
                    : 'bg-[#ebdcc4]/60 border-[#a89078] text-[#8c6b4e] opacity-85'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center shrink-0">
                    {index === 0 ? getQuestIcon(quest.iconType) : <Lock className="w-5 h-5 text-[#8c6b4e]" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold">
                      {quest.title}
                    </span>
                    <span className="text-[11px] text-[#6b4724]">
                      {quest.description}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#8c5a2b] font-mono">
                    {index === 0 ? '0/1' : 'À débloquer'}
                  </span>
                  {index === 0 ? (
                    <ChevronRight className="w-4 h-4 text-[#3a2312]" />
                  ) : (
                    <Lock className="w-4 h-4 text-[#8c6b4e]" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
