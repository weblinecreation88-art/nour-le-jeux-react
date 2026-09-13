import React from 'react';
import { CharacterId, CharacterEmotion } from '../types';
import { Sparkles, Compass, Moon, User, HelpCircle } from 'lucide-react';
import { CustomAssetsConfig, DEFAULT_ASSETS } from '../utils/assets';

interface CharacterAvatarProps {
  speaker: CharacterId;
  emotion?: CharacterEmotion;
  size?: 'sm' | 'md' | 'lg';
  customAssets?: CustomAssetsConfig;
}

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  speaker,
  emotion = 'neutral',
  size = 'md',
  customAssets
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 sm:w-10 sm:h-10',
    md: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14',
    lg: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
  };

  // Check if custom uploaded asset exists or fallback to default
  let avatarImg =
    (customAssets?.characters &&
      (speaker === 'personnage'
        ? customAssets.characters.personnage
        : speaker === 'noura'
        ? customAssets.characters.noura
        : speaker === 'waswas'
        ? customAssets.characters.waswas
        : speaker === 'grand_waswas'
        ? customAssets.characters.grand_waswas || customAssets.characters.waswas
        : speaker === 'jeune'
        ? customAssets.characters.jeune
        : speaker === 'enfant'
        ? customAssets.characters.enfant || customAssets.characters.jeune
        : speaker === 'marchand'
        ? customAssets.characters.marchand
        : speaker === 'narration'
        ? customAssets.characters.narrateur
        : '')) || '';

  if (!avatarImg && DEFAULT_ASSETS.characters) {
    if (speaker === 'personnage') avatarImg = DEFAULT_ASSETS.characters.personnage || '';
    else if (speaker === 'noura') avatarImg = DEFAULT_ASSETS.characters.noura || '';
    else if (speaker === 'narration') avatarImg = DEFAULT_ASSETS.characters.narrateur || '';
    else if (speaker === 'jeune') avatarImg = DEFAULT_ASSETS.characters.jeune || '';
    else if (speaker === 'enfant') avatarImg = DEFAULT_ASSETS.characters.enfant || DEFAULT_ASSETS.characters.jeune || '';
    else if (speaker === 'marchand') avatarImg = DEFAULT_ASSETS.characters.marchand || '';
    else if (speaker === 'waswas') avatarImg = DEFAULT_ASSETS.characters.waswas || '';
    else if (speaker === 'grand_waswas') avatarImg = DEFAULT_ASSETS.characters.grand_waswas || '';
  }

  const getSpeakerStyle = () => {
    switch (speaker) {
      case 'personnage':
        return {
          bg: 'bg-gradient-to-br from-[#1e4a6d] via-[#102d48] to-[#0a1c2e] border-[#3876a8] shadow-sky-900/40',
          textColor: 'text-sky-200',
          title: 'Othmân'
        };
      case 'noura':
        return {
          bg: 'bg-gradient-to-br from-[#1b4332] via-[#2d6a4f] to-[#133023] border-[#52b788] shadow-emerald-900/40',
          textColor: 'text-emerald-300',
          title: 'Noura'
        };
      case 'waswas':
      case 'grand_waswas':
        return {
          bg: 'bg-gradient-to-br from-[#2e1065] via-[#3b0764] to-[#180828] border-[#a855f7] shadow-purple-950/50',
          textColor: 'text-purple-300',
          title: speaker === 'grand_waswas' ? 'Grand Waswâs' : 'Waswâs'
        };
      case 'jeune':
        return {
          bg: 'bg-gradient-to-br from-[#78350f] via-[#92400e] to-[#451a03] border-[#d97706] shadow-amber-950/40',
          textColor: 'text-amber-200',
          title: 'Jeune du Village'
        };
      case 'enfant':
        return {
          bg: 'bg-gradient-to-br from-[#164e63] via-[#0e7490] to-[#155e75] border-[#38bdf8] shadow-cyan-950/40',
          textColor: 'text-cyan-200',
          title: "L'Enfant à l'Attelle"
        };
      case 'marchand':
        return {
          bg: 'bg-gradient-to-br from-[#7c2d12] via-[#9a3412] to-[#431407] border-[#ea580c] shadow-orange-950/40',
          textColor: 'text-amber-200',
          title: 'Le Marchand'
        };
      case 'narration':
        return {
          bg: 'bg-gradient-to-br from-[#3d2612] via-[#5c3a1b] to-[#291708] border-[#d97c27] shadow-amber-950/40',
          textColor: 'text-amber-200',
          title: 'Le Vieux Sage'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-amber-900/40 to-zinc-900 border-amber-500/40 shadow-amber-500/10',
          textColor: 'text-amber-300',
          title: 'Narration'
        };
    }
  };

  const style = getSpeakerStyle();

  return (
    <div
      className={`relative ${sizeClasses[size]} rounded-2xl border-2 ${style.bg} flex items-center justify-center shadow-lg transition-all duration-300 overflow-hidden shrink-0`}
    >
      {/* If avatar image available (custom or default pixel asset), render image */}
      {avatarImg ? (
        <img
          src={avatarImg}
          alt={style.title}
          className={`w-full h-full ${
            speaker === 'waswas' || speaker === 'grand_waswas'
              ? 'object-contain p-0.5 bg-black/95 scale-105'
              : speaker === 'narration'
              ? 'object-contain p-0.5 scale-110 object-top'
              : 'object-cover object-top'
          }`}
          referrerPolicy="no-referrer"
        />
      ) : (
        <>
          {/* Visual Portrait Default Fallback (Faceless aesthetic, pure mist for waswas) */}
          {speaker === 'personnage' && (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Head & Spiky Hair & Red Cowl - Faceless silhouette */}
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#f2cfa6] border border-[#20150e] relative flex items-center justify-center overflow-hidden">
                {/* Spiky Brown Hair */}
                <div className="absolute top-0 w-full h-4 bg-[#593418] rounded-t-full" />
                {/* Smooth faceless silhouette face */}
              </div>
              {/* Red Hooded Cowl & Blue Tunic collar */}
              <div className="w-9 h-2 bg-[#b84433] rounded-t-sm -mt-0.5 z-10" />
              <div className="w-10 h-3 bg-[#284868] rounded-t-lg -mt-0.5 border-t border-[#16293d]" />
            </div>
          )}

          {speaker === 'noura' && (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Hijab Silhouette & Head */}
              <div className="w-8 h-9 md:w-10 md:h-11 rounded-t-full bg-[#e8dcc4] border border-[#3a2312] relative flex flex-col items-center justify-start overflow-hidden pt-1 shadow-sm">
                {/* Facial Silhouette (faceless aesthetic) */}
                <div className="w-4 h-5 md:w-5 md:h-6 rounded-full bg-[#f0ca9f] border border-[#c4b59b] mt-0.5" />
                {/* Hijab fold drapery */}
                <div className="w-full h-2 bg-[#dcd0b8] absolute bottom-0" />
              </div>
              {/* Emerald Green Tunic with Gold Embroidery & Leather Strap */}
              <div className="w-10 md:w-12 h-4 bg-[#2d6a4f] rounded-t-lg -mt-1 border-t-2 border-[#1b4332] relative flex items-center justify-center overflow-hidden">
                {/* Gold embroidery neckline */}
                <div className="w-3 h-2 border-b-2 border-l-2 border-r-2 border-[#e69138] rounded-b-sm" />
                {/* Leather shoulder bag strap */}
                <div className="absolute inset-0 border-r-2 border-[#7a4b25] rotate-12" />
              </div>
            </div>
          )}

          {(speaker === 'waswas' || speaker === 'grand_waswas') && (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-purple-950/90 filter blur-xs animate-pulse" />
              <div className="relative z-10 flex flex-col items-center justify-center">
                {/* Pure abstract swirling misty vortex (Strictly NO eyes, NO face) */}
                <div className="w-6 h-6 rounded-full border border-purple-500/40 bg-purple-900/60 filter blur-[1px] animate-spin-slow" />
                <Moon className="w-3.5 h-3.5 text-purple-400/80 -mt-3.5" />
              </div>
            </div>
          )}

          {speaker === 'jeune' && (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Faceless Young Villager silhouette */}
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#d8b08c] border border-stone-800/40 relative flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 w-full h-3 bg-[#2f2723] rounded-t-full" />
              </div>
              <div className="w-8 h-3.5 bg-[#4f5d68] rounded-t-lg -mt-0.5" />
            </div>
          )}

          {(speaker === 'narration' || speaker === 'system') && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Compass className="w-6 h-6 text-amber-400 animate-spin-slow" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

