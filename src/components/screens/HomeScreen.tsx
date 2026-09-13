import React from 'react';
import { Check, Compass, BookOpen, Clock, Sparkles, MapPin, Award } from 'lucide-react';
import { QuestItem, PlayerProgress } from '../../types';
import { PIXEL_ASSETS, CustomAssetsConfig } from '../../utils/assets';
import { soundManager } from '../../utils/audio';

interface HomeScreenProps {
  progress: PlayerProgress;
  onToggleQuest: (questId: string) => void;
  onStartAdventure: () => void;
  onGoToMap: () => void;
  customAssets?: CustomAssetsConfig;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  progress,
  onToggleQuest,
  onStartAdventure,
  onGoToMap,
  customAssets
}) => {
  const dailyQuests = progress.quests.filter((q) => q.category === 'daily');
  const roomBg = customAssets?.backgrounds?.chambre || PIXEL_ASSETS.room;
  const travelerSprite = PIXEL_ASSETS.traveler;

  const getQuestIcon = (iconType: QuestItem['iconType']) => {
    switch (iconType) {
      case 'prayer':
        return <span className="text-base">🕌</span>;
      case 'book':
        return <span className="text-base">📖</span>;
      case 'focus':
        return <span className="text-base">⏳</span>;
      case 'bonus':
        return <span className="text-base">⭐</span>;
      default:
        return <span className="text-base">📜</span>;
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-3 sm:px-6 pt-3 pb-12 max-w-md mx-auto w-full gap-3.5 select-none custom-scrollbar">
      {/* Title & Subtitle */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel">
            Point de départ & quêtes du jour
          </span>
          <h1 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel">
            ÉCRAN D'ACCUEIL — TA CHAMBRE
          </h1>
        </div>
        <button
          onClick={onGoToMap}
          className="flex items-center gap-1 text-[11px] font-bold text-[#8c5a2b] hover:text-[#3a2312] bg-[#ebdfc8] border-2 border-[#3a2312] px-2.5 py-1 rounded-xl shadow-[0_2px_0_#3a2312] cursor-pointer"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Carte</span>
        </button>
      </div>

      {/* Cozy Pixel Art Bedroom Visual */}
      <div className="relative w-full aspect-[16/11] rounded-2xl border-2 border-[#3a2312] overflow-hidden shadow-[0_3px_0_#3a2312] bg-[#2a1c12]">
        <img
          src={roomBg}
          alt="Chambre du Voyageur"
          className="w-full h-full object-cover"
        />

        {/* Character overlay inside room */}
        <div className="absolute bottom-3 inset-x-0 flex flex-col items-center">
          <img
            src={travelerSprite}
            alt="Voyageur"
            className="w-12 h-16 object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] animate-pulse"
          />
        </div>

        {/* Floating Quote Box */}
        <div className="absolute bottom-2 left-2 right-2 sm:left-3 sm:right-3 bg-[#fbf7ee]/95 backdrop-blur-md border border-[#3a2312] rounded-xl p-2 shadow-md">
          <p className="text-[11px] sm:text-xs text-[#3a2312] font-medium text-center italic">
            « Chaque petit pas rallume la lumière intérieure. »
          </p>
        </div>
      </div>

      {/* Quêtes du Jour */}
      <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-2xl p-3 shadow-[0_3px_0_#3a2312] flex flex-col gap-2.5">
        <div className="flex items-center justify-between border-b border-[#ebdcc4] pb-1.5">
          <h2 className="text-xs sm:text-sm font-bold text-[#3a2312] font-cinzel flex items-center gap-1.5">
            <span>QUÊTES DU JOUR</span>
          </h2>
          <span className="text-[10px] font-bold text-[#8c5a2b] bg-[#ebdfc8] px-2 py-0.5 rounded-full border border-[#d2be9f] font-mono">
            {dailyQuests.filter((q) => q.completed).length}/{dailyQuests.length} FAITES
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {dailyQuests.map((quest) => (
            <div
              key={quest.id}
              onClick={() => onToggleQuest(quest.id)}
              className={`flex items-center justify-between p-2.5 rounded-xl border-2 transition-all cursor-pointer ${
                quest.completed
                  ? 'bg-[#ebf5e9] border-[#4a804d] text-[#2d522f]'
                  : 'bg-[#f3ebd9] hover:bg-[#ebdcc4] border-[#3a2312] text-[#3a2312] shadow-[0_2px_0_#3a2312]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#ebdfc8] border border-[#3a2312] flex items-center justify-center shrink-0">
                  {getQuestIcon(quest.iconType)}
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs font-bold leading-tight ${quest.completed ? 'line-through opacity-80' : ''}`}>
                    {quest.title}
                  </span>
                  <span className="text-[10px] text-[#6b4724] leading-tight">
                    {quest.description}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-[#d97c27] font-mono">
                  +{quest.xpReward} XP
                </span>
                <div
                  className={`w-5 h-5 rounded-md border-2 border-[#3a2312] flex items-center justify-center transition-colors ${
                    quest.completed ? 'bg-[#4a804d] text-white' : 'bg-[#fbf7ee]'
                  }`}
                >
                  {quest.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Action Button: Continuer le Voyage */}
      <button
        onClick={() => {
          soundManager.playSelect();
          onStartAdventure();
        }}
        className="w-full py-3.5 px-4 rounded-2xl bg-[#e69138] hover:bg-[#f0a04b] active:translate-y-1 text-[#3a2312] font-black text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-[#3a2312] shadow-[0_4px_0_#3a2312] transition-all cursor-pointer font-cinzel uppercase tracking-wider"
      >
        <span>CONTINUER LE VOYAGE</span>
        <span className="text-base">🗺️</span>
      </button>
    </div>
  );
};
