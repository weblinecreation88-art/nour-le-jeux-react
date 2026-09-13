import React from 'react';
import { CharacterId, CharacterEmotion } from '../types';
import { CustomAssetsConfig, DEFAULT_ASSETS } from '../utils/assets';
import { Wind } from 'lucide-react';

interface NarrativeActorStageProps {
  speaker?: CharacterId;
  emotion?: CharacterEmotion;
  isTyping: boolean;
  customAssets?: CustomAssetsConfig;
}

export const NarrativeActorStage: React.FC<NarrativeActorStageProps> = ({
  speaker,
  emotion = 'neutral',
  isTyping,
  customAssets
}) => {
  // If speaker is system or undefined, do not render a stage actor
  if (!speaker || speaker === 'system') {
    return null;
  }

  // Resolve sprite asset with fallback to DEFAULT_ASSETS
  let spriteImg =
    customAssets?.characters &&
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
      : '');

  if (!spriteImg) {
    if (speaker === 'personnage') spriteImg = DEFAULT_ASSETS.characters.personnage;
    else if (speaker === 'noura') spriteImg = DEFAULT_ASSETS.characters.noura;
    else if (speaker === 'jeune') spriteImg = DEFAULT_ASSETS.characters.jeune;
    else if (speaker === 'enfant') spriteImg = DEFAULT_ASSETS.characters.enfant || DEFAULT_ASSETS.characters.jeune;
    else if (speaker === 'marchand') spriteImg = DEFAULT_ASSETS.characters.marchand;
    else if (speaker === 'narration') spriteImg = DEFAULT_ASSETS.characters.narrateur;
    else if (speaker === 'waswas') spriteImg = DEFAULT_ASSETS.characters.waswas;
    else if (speaker === 'grand_waswas') spriteImg = DEFAULT_ASSETS.characters.grand_waswas;
  }

  // Waswas & Grand Waswas case: ominous shadowy aura & mist
  if (speaker === 'waswas' || speaker === 'grand_waswas') {
    const isGrand = speaker === 'grand_waswas';
    return (
      <div className="w-full flex flex-col items-center justify-end h-20 sm:h-28 md:h-36 pointer-events-none select-none relative -mb-2 sm:-mb-3 z-10">
        {spriteImg ? (
          <div className="relative flex flex-col items-center animate-pulse">
            <div className="relative h-18 sm:h-24 md:h-32 w-18 sm:w-24 md:w-32 overflow-hidden filter drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]">
              <img
                src={spriteImg}
                alt={isGrand ? 'Le Grand Waswas' : 'Waswas'}
                className="h-full w-full object-contain pixelated"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-1 bg-[#1a0b2e] text-purple-300 border border-purple-600/70 px-2 sm:px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold font-cinzel shadow-[0_0_12px_rgba(168,85,247,0.6)]">
              {isGrand ? 'Le Grand Waswâs' : 'Waswâs • Doute'}
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col items-center">
            <div className={`relative ${isGrand ? 'w-20 h-18 sm:w-28 sm:h-24' : 'w-18 h-16 sm:w-24 sm:h-20'} flex items-center justify-center animate-shadow-vortex`}>
              <div className="absolute inset-0 rounded-full bg-radial from-purple-950/80 via-purple-900/40 to-transparent filter blur-md" />
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-purple-500/30 bg-purple-950/70 filter blur-xs animate-pulse" />
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-purple-400/20 bg-purple-900/40 filter blur-[1px] animate-spin-slow" />
            </div>
            <div className="absolute bottom-0.5 px-2 sm:px-3 py-0.5 bg-black/80 backdrop-blur-sm border border-purple-800/60 rounded-full flex items-center gap-1 shadow-lg animate-pulse">
              <Wind className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
              <span className="text-[9px] sm:text-[10px] font-bold text-purple-300 font-cinzel tracking-wider">
                {isGrand ? 'Grand Waswâs' : 'Murmure intérieur'}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  const animationClass = isTyping ? 'animate-talk-sway' : 'animate-idle-breathe';

  // Alignment:
  // - Protagonist (Othmân) on the Left
  // - Narrator (Le Vieux Sage) on the Left
  // - Companions (Noura, Jeune) on the Right
  const alignClass =
    speaker === 'personnage' || speaker === 'narration'
      ? 'justify-start pl-3 sm:pl-8 md:pl-16'
      : 'justify-end pr-3 sm:pr-8 md:pr-16';

  // Scaled & Compact VN Scale: Harmonious size that lets the background breathe
  const sizeClasses =
    speaker === 'noura' || speaker === 'narration'
      ? 'h-24 sm:h-32 md:h-40 lg:h-44 max-w-[120px] sm:max-w-[150px] md:max-w-[180px]'
      : 'h-20 sm:h-28 md:h-36 lg:h-40 max-w-[100px] sm:max-w-[130px] md:max-w-[160px]';

  const auraClass =
    speaker === 'personnage'
      ? 'filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] drop-shadow-[0_0_12px_rgba(56,118,168,0.3)]'
      : speaker === 'noura'
      ? 'filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] drop-shadow-[0_0_15px_rgba(82,183,136,0.35)]'
      : speaker === 'narration'
      ? 'filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] drop-shadow-[0_0_16px_rgba(217,124,39,0.4)]'
      : 'filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] drop-shadow-[0_0_12px_rgba(217,119,6,0.3)]';

  return (
    <div className={`w-full flex ${alignClass} items-end pointer-events-none select-none relative -mb-2 sm:-mb-3 md:-mb-4 z-10`}>
      <div className={`relative transition-all duration-300 ${animationClass} flex flex-col items-center`}>
        {spriteImg && (
          <div className={`relative ${sizeClasses} flex flex-col justify-end items-center ${auraClass}`}>
            <img
              src={spriteImg}
              alt={speaker}
              className="w-full h-full object-contain object-bottom pixelated"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

