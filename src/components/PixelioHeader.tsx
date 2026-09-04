import React from 'react';
import { Flame, Sparkles, Volume2, VolumeX, Shield, Image as ImageIcon, BookOpen } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { PIXEL_ASSETS, CustomAssetsConfig } from '../utils/assets';

interface PixelioHeaderProps {
  level: number;
  xp: number;
  maxXp?: number;
  lightPercent: number;
  streakDays: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenAssetManager: () => void;
  onOpenKnowledge?: () => void;
  customAssets?: CustomAssetsConfig;
}

export const PixelioHeader: React.FC<PixelioHeaderProps> = ({
  level,
  xp,
  maxXp = 500,
  lightPercent,
  streakDays,
  soundEnabled,
  onToggleSound,
  onOpenAssetManager,
  onOpenKnowledge,
  customAssets
}) => {
  const heroAvatar = customAssets?.characters?.personnage || PIXEL_ASSETS.traveler;
  const xpPercent = Math.min(100, Math.round((xp / maxXp) * 100));

  return (
    <header className="w-full bg-[#f3ebd9] border-b-2 border-[#3a2312] px-3 sm:px-4 py-2 flex items-center justify-between shadow-sm z-30 select-none">
      {/* Left: Avatar & Level/XP */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Avatar badge */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] overflow-hidden p-0.5 relative shadow-[0_2px_0_#3a2312] shrink-0">
          <img
            src={heroAvatar}
            alt="Le Voyageur"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Level and XP Bar */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] sm:text-xs font-bold text-[#3a2312] font-cinzel tracking-wider">
              LE VOYAGEUR
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#8c5a2b] bg-[#e3d3bd] px-1.5 py-0.2 rounded border border-[#b89f81] font-mono">
              NIV. {level}
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="w-24 sm:w-32 h-2.5 bg-[#d9c5ab] rounded-full border border-[#4a2e18] overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#d97c27] to-[#e69138] transition-all duration-500"
                style={{ width: `${xpPercent}%` }}
              />
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold text-[#6b4724] font-mono">
              {xp}/{maxXp} XP
            </span>
          </div>
        </div>
      </div>

      {/* Right: Stats (Lumière & Série) + Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Lumière / Lanterne */}
        <div className="flex items-center gap-1.5 bg-[#fbf7ee] border-2 border-[#3a2312] px-2 sm:px-2.5 py-1 rounded-xl shadow-[0_2px_0_#3a2312]">
          <span className="text-base sm:text-lg leading-none">🏮</span>
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel leading-tight">
              LUMIÈRE
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-[#3a2312] font-mono leading-tight">
              {lightPercent}%
            </span>
          </div>
        </div>

        {/* Série de jours */}
        <div className="flex items-center gap-1.5 bg-[#fbf7ee] border-2 border-[#3a2312] px-2 sm:px-2.5 py-1 rounded-xl shadow-[0_2px_0_#3a2312]">
          <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d97c27] fill-[#d97c27]" />
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel leading-tight">
              SÉRIE
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-[#3a2312] font-mono leading-tight">
              {streakDays} j
            </span>
          </div>
        </div>

        {/* Knowledge Book & Quiz Button */}
        {onOpenKnowledge && (
          <button
            onClick={() => {
              soundManager.playSelect();
              onOpenKnowledge();
            }}
            title="Bibliothèque du Savoir & Quiz Islamiques"
            className="p-1.5 sm:p-2 rounded-xl bg-[#e69138] border-2 border-[#3a2312] hover:bg-[#f0a04b] text-[#1a1209] font-bold transition-all cursor-pointer shadow-[0_2px_0_#3a2312] flex items-center gap-1 active:translate-y-0.5"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden md:inline text-[10px] font-cinzel">Savoir</span>
          </button>
        )}

        {/* Sound toggle & Asset manager */}
        <div className="flex items-center gap-1">
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Désactiver le son' : 'Activer le son'}
            className="p-1.5 rounded-lg bg-[#ebdfc8] border-2 border-[#3a2312] hover:bg-[#e0cfb4] text-[#3a2312] transition-colors cursor-pointer shadow-[0_2px_0_#3a2312]"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-400" />}
          </button>
          <button
            onClick={onOpenAssetManager}
            title="Gérer les assets visuels"
            className="hidden sm:block p-1.5 rounded-lg bg-[#ebdfc8] border-2 border-[#3a2312] hover:bg-[#e0cfb4] text-[#3a2312] transition-colors cursor-pointer shadow-[0_2px_0_#3a2312]"
          >
            <ImageIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
