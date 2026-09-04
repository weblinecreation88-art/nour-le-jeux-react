import React from 'react';
import { Sparkles, ArrowRight, X, Heart, Star, Check, BookOpen, ScrollText, User } from 'lucide-react';
import { DEFAULT_ASSETS, CustomAssetsConfig } from '../utils/assets';
import { soundManager } from '../utils/audio';

interface NouraGuideModalProps {
  mode: 'intro' | 'celebration' | 'scene_unlocked';
  title?: string;
  message?: string;
  rewardXp?: number;
  customAssets?: CustomAssetsConfig;
  onClose: () => void;
  onContinue: () => void;
}

export const AldwinGuideModal: React.FC<NouraGuideModalProps> = ({
  mode,
  title,
  message,
  rewardXp,
  customAssets,
  onClose,
  onContinue
}) => {
  const nouraImg = customAssets?.characters?.noura || DEFAULT_ASSETS.characters.noura;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-sm bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl p-5 sm:p-6 shadow-[0_6px_0_#3a2312] flex flex-col gap-4 relative overflow-hidden select-none">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#ebdcc4] pb-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧕</span>
            <div>
              <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel">
                Guide du Voyageur
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#3a2312] font-cinzel">
                {title || 'Conseils de Noura'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-[#ebdfc8] text-[#8c5a2b] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Noura Avatar & Speech Bubble */}
        <div className="flex items-start gap-3 bg-[#ebdfc8] p-3 rounded-2xl border-2 border-[#3a2312]">
          <div className="w-14 h-14 rounded-xl bg-[#fbf7ee] border-2 border-[#3a2312] overflow-hidden shrink-0">
            <img
              src={nouraImg}
              alt="Noura"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-bold text-[#2d6a4f] uppercase font-cinzel">
              NOURA
            </span>
            <p className="text-xs text-[#3a2312] font-medium leading-relaxed mt-0.5">
              {message ||
                "Rappelle-toi : chaque petit effort accompli avec sincérité fait grandir ta lumière intérieure !"}
            </p>
          </div>
        </div>

        {/* Interface Guide Cards */}
        {mode !== 'scene_unlocked' && (
        <div className="flex flex-col gap-2">
          <div className="p-2.5 bg-[#f3ebd9] border border-[#3a2312] rounded-xl flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#ebdfc8] border border-[#3a2312] flex items-center justify-center text-[#8c5a2b] shrink-0">
              <ScrollText className="w-4 h-4" />
            </div>
            <div className="text-[11px] text-[#3a2312]">
              <span className="font-bold">Quêtes (en bas) :</span> pour rejouer les scènes et faire tes défis du jour.
            </div>
          </div>

          <div className="p-2.5 bg-[#f3ebd9] border border-[#3a2312] rounded-xl flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#ebdfc8] border border-[#3a2312] flex items-center justify-center text-[#8c5a2b] shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="text-[11px] text-[#3a2312]">
              <span className="font-bold">Livre (en haut à droite) :</span> pour consulter tes acquis et sagesses.
            </div>
          </div>

          <div className="p-2.5 bg-[#f3ebd9] border border-[#3a2312] rounded-xl flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#ebdfc8] border border-[#3a2312] flex items-center justify-center text-[#8c5a2b] shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div className="text-[11px] text-[#3a2312]">
              <span className="font-bold">Profil :</span> pour changer ta coupe de cheveux ou ta tenue d'Othmân !
            </div>
          </div>
        </div>
        )}

        {/* Action Button */}
        <button
          onClick={() => {
            soundManager.playSelect();
            onContinue();
          }}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#e69138] to-[#f0a04b] hover:from-[#d97c27] hover:to-[#e69138] text-[#1a1209] font-bold text-xs sm:text-sm font-cinzel border-2 border-[#3a2312] shadow-[0_3px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{mode === 'scene_unlocked' ? 'Aller sur la carte' : 'Compris, en route !'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
