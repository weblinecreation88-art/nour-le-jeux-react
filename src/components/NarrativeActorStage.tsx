import React from 'react';
import { CharacterId, CharacterEmotion } from '../types';
import { CustomAssetsConfig, PIXEL_ASSETS } from '../utils/assets';
import { Sparkles, Moon, Compass, Wind } from 'lucide-react';

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
  if (!speaker || speaker === 'narration' || speaker === 'system') {
    return null;
  }

  // Check if custom character asset is configured
  let customImg =
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
      : '');

  // Waswas & Grand Waswas case: ominous shadowy aura & mist
  if (speaker === 'waswas' || speaker === 'grand_waswas') {
    const isGrand = speaker === 'grand_waswas';
    return (
      <div className="w-full flex flex-col items-center justify-end h-24 sm:h-28 pointer-events-none select-none relative -mb-3 z-10">
        {customImg ? (
          <div className="relative flex flex-col items-center animate-pulse">
            <div className="relative h-24 sm:h-28 w-28 sm:w-32 overflow-hidden rounded-t-2xl filter drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]">
              <img
                src={customImg}
                alt={isGrand ? 'Le Grand Waswas' : 'Waswas'}
                className="h-full w-full object-cover object-top pixelated"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-1 bg-[#1a0b2e] text-purple-300 border border-purple-600/70 px-2.5 py-0.5 rounded-full text-[9px] font-bold font-cinzel shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              {isGrand ? 'Le Grand Waswâs' : 'Waswâs • Doute'}
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col items-center">
            <div className={`relative ${isGrand ? 'w-28 h-24 sm:w-32 sm:h-28' : 'w-24 h-20 sm:w-28 sm:h-24'} flex items-center justify-center animate-shadow-vortex`}>
              <div className="absolute inset-0 rounded-full bg-radial from-purple-950/80 via-purple-900/40 to-transparent filter blur-md" />
              <div className="w-16 h-16 rounded-full border border-purple-500/30 bg-purple-950/70 filter blur-xs animate-pulse" />
              <div className="w-10 h-10 rounded-full border border-purple-400/20 bg-purple-900/40 filter blur-[1px] animate-spin-slow" />
            </div>
            <div className="absolute bottom-1 px-2.5 py-0.5 bg-black/80 backdrop-blur-sm border border-purple-800/60 rounded-full flex items-center gap-1 shadow-lg animate-pulse">
              <Wind className="w-2.5 h-2.5 text-purple-400" />
              <span className="text-[9px] font-bold text-purple-300 font-cinzel tracking-wider">
                {isGrand ? 'Grand Waswâs' : 'Murmure intérieur'}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  const animationClass = isTyping ? 'animate-talk-sway' : 'animate-idle-breathe';

  // Alignment: Hero on the left, Noura & Jeune on the right
  const alignClass =
    speaker === 'personnage'
      ? 'justify-start pl-6 sm:pl-10'
      : speaker === 'noura' || speaker === 'jeune'
      ? 'justify-end pr-6 sm:pr-10'
      : 'justify-center';

  // Size hierarchy: Othmân is a child (~70%), Noura is a maternal adult (~100%), Jeune is a teenager (~85%)
  const sizeClasses =
    speaker === 'personnage'
      ? 'h-20 sm:h-28 md:h-32 w-20 sm:w-28 md:w-32'
      : speaker === 'noura'
      ? 'h-28 sm:h-38 md:h-42 w-28 sm:w-38 md:w-42'
      : 'h-24 sm:h-32 md:h-36 w-24 sm:w-32 md:w-36';

  const auraClass =
    speaker === 'personnage'
      ? 'filter drop-shadow-[0_0_16px_rgba(217,124,39,0.45)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]'
      : speaker === 'noura'
      ? 'filter drop-shadow-[0_0_20px_rgba(82,183,136,0.5)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]'
      : speaker === 'waswas' || speaker === 'grand_waswas'
      ? 'filter drop-shadow-[0_0_22px_rgba(168,85,247,0.7)]'
      : 'filter drop-shadow-[0_0_16px_rgba(217,119,6,0.4)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]';

  return (
    <div className={`w-full flex ${alignClass} items-end h-28 sm:h-38 md:h-42 pointer-events-none select-none relative -mb-3.5 z-10`}>
      <div className={`relative transition-all duration-300 ${animationClass} flex flex-col items-center`}>
        {customImg ? (
          /* Cropped 2/3 Bust Portrait leaning on the dialogue box with transparent background & tailored aura */
          <div className={`relative ${sizeClasses} overflow-hidden flex flex-col justify-start items-center ${auraClass}`}>
            <img
              src={customImg}
              alt={speaker}
              className="w-full h-auto object-cover object-top pixelated transform scale-110 translate-y-1"
              referrerPolicy="no-referrer"
            />
            {/* Subtle bottom gradient to blend seamlessly into the dialogue box border */}
            <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#3a2312]/40 to-transparent" />
          </div>
        ) : (
          /* SVG Pixel-Art Bust Renders (cropped to upper 2/3) */
          <>
            {speaker === 'noura' && (
              <div className="relative flex flex-col items-center filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                {/* Noura 2/3 Torso Bust */}
                <svg
                  viewBox="0 0 160 145"
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40"
                  style={{ imageRendering: 'pixelated' }}
                >
                  {/* Emerald Green Robe / Kaftan Upper Torso */}
                  <path
                    d="M 50 82 L 72 82 L 88 82 L 110 82 L 126 145 L 34 145 Z"
                    fill="#2d6a4f"
                    stroke="#1b4332"
                    strokeWidth="2.5"
                  />
                  {/* Cream Undergarment Center Drape */}
                  <path d="M 74 95 L 86 95 L 90 145 L 70 145 Z" fill="#f8f4eb" stroke="#c4b59b" strokeWidth="1.5" />

                  {/* Leather Belt at Waist with Golden Buckle */}
                  <rect x="52" y="90" width="56" height="8" rx="1" fill="#7a4b25" stroke="#3a2312" strokeWidth="1.5" />
                  <rect x="76" y="87" width="10" height="14" rx="2" fill="#e69138" stroke="#3a2312" strokeWidth="1.5" />

                  {/* Brown Leather Satchel / Messenger Bag */}
                  <rect x="34" y="104" width="26" height="30" rx="4" fill="#8c532b" stroke="#3a2312" strokeWidth="2" />
                  <path d="M 34 104 L 60 104 L 56 118 L 38 118 Z" fill="#6a3e1e" stroke="#3a2312" strokeWidth="1.5" />
                  <circle cx="47" cy="122" r="2.5" fill="#e69138" stroke="#3a2312" strokeWidth="1" />

                  {/* Leather Shoulder Strap across Torso */}
                  <path d="M 72 48 L 42 108" stroke="#7a4b25" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 72 48 L 42 108" stroke="#3a2312" strokeWidth="1" strokeLinecap="round" fill="none" />

                  {/* Wide Flared Emerald Sleeves */}
                  <path d="M 50 82 L 36 102 L 56 122 L 66 104 Z" fill="#2d6a4f" stroke="#1b4332" strokeWidth="2" />
                  <path d="M 38 100 L 58 120" stroke="#e69138" strokeWidth="4" />
                  <path d="M 110 82 L 138 98 L 126 126 L 102 100 Z" fill="#2d6a4f" stroke="#1b4332" strokeWidth="2" />
                  <path d="M 136 96 L 124 124" stroke="#e69138" strokeWidth="4" />

                  {/* Hands */}
                  <circle cx="68" cy="80" r="7" fill="#f0ca9f" stroke="#3a2312" strokeWidth="1.5" />
                  <path d="M 134 85 C 138 80, 154 82, 152 94 C 146 98, 134 94, 134 88 Z" fill="#f0ca9f" stroke="#3a2312" strokeWidth="1.5" />

                  {/* Noura's Sand-Colored Hijab & Shawl Draping */}
                  <path
                    d="M 50 40 C 40 55, 22 100, 24 130 C 30 135, 42 125, 46 110"
                    fill="#dcd0b8"
                    stroke="#3a2312"
                    strokeWidth="2"
                  />
                  <path
                    d="M 54 28 C 54 10, 102 10, 102 28 C 104 50, 108 80, 96 86 C 80 92, 58 92, 54 82 C 50 68, 54 45, 54 28 Z"
                    fill="#e8dcc4"
                    stroke="#3a2312"
                    strokeWidth="2.5"
                  />
                  <path d="M 58 48 C 70 60, 90 60, 98 48" stroke="#c4b59b" strokeWidth="2" fill="none" />
                  <path d="M 55 68 C 72 82, 86 82, 98 68" stroke="#c4b59b" strokeWidth="2" fill="none" />

                  {/* Face Silhouette */}
                  <ellipse cx="80" cy="40" rx="14" ry="18" fill="#f0ca9f" stroke="#3a2312" strokeWidth="1.8" />
                </svg>
              </div>
            )}

            {speaker === 'personnage' && (
              <div className="relative flex flex-col items-center filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                {/* Protagonist 2/3 Torso Bust */}
                <svg
                  viewBox="0 0 160 145"
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40"
                  style={{ imageRendering: 'pixelated' }}
                >
                  {/* Deep Blue Adventurer Tunic */}
                  <path
                    d="M 44 90 L 116 90 L 120 145 L 40 145 Z"
                    fill="#284868"
                    stroke="#16293d"
                    strokeWidth="2.5"
                  />

                  {/* Brown Leather Belt & Gold Buckle */}
                  <rect x="42" y="120" width="76" height="9" rx="1" fill="#6d3d1a" stroke="#20150e" strokeWidth="1.5" />
                  <rect x="74" y="117" width="12" height="15" rx="2" fill="#e69138" stroke="#20150e" strokeWidth="1.5" />

                  {/* Arms */}
                  <path d="M 38 92 L 24 116 L 38 126 L 46 100 Z" fill="#284868" stroke="#16293d" strokeWidth="2" />
                  <rect x="22" y="116" width="16" height="10" rx="2" fill="#f0e6d2" stroke="#20150e" strokeWidth="1.5" />
                  <circle cx="28" cy="132" r="7" fill="#f2cfa6" stroke="#3a2312" strokeWidth="1.5" />

                  <path d="M 122 92 L 136 116 L 122 126 L 114 100 Z" fill="#284868" stroke="#16293d" strokeWidth="2" />
                  <rect x="122" y="116" width="16" height="10" rx="2" fill="#f0e6d2" stroke="#20150e" strokeWidth="1.5" />
                  <circle cx="132" cy="132" r="7" fill="#f2cfa6" stroke="#3a2312" strokeWidth="1.5" />

                  {/* Red / Terracotta Hooded Scarf / Cowl */}
                  <path
                    d="M 44 68 C 40 92, 120 92, 116 68 C 122 84, 126 102, 80 105 C 34 102, 38 84, 44 68 Z"
                    fill="#b84433"
                    stroke="#2a1506"
                    strokeWidth="2.5"
                  />
                  <path d="M 52 82 C 70 94, 90 94, 108 82" stroke="#87291c" strokeWidth="2" fill="none" />

                  {/* Face Silhouette */}
                  <ellipse cx="80" cy="54" rx="18" ry="20" fill="#f2cfa6" stroke="#3a2312" strokeWidth="2" />

                  {/* Spiky Brown Anime/RPG Hair */}
                  <path
                    d="M 54 46 C 46 25, 62 12, 80 14 C 98 12, 114 25, 106 46 C 114 42, 118 56, 110 65 C 104 52, 98 46, 80 44 C 62 46, 56 52, 50 65 C 42 56, 46 42, 54 46 Z"
                    fill="#593418"
                    stroke="#2a1506"
                    strokeWidth="2.5"
                  />
                  <path d="M 70 16 L 76 8 L 84 16 L 94 10 L 98 22" stroke="#2a1506" strokeWidth="2" fill="#593418" />
                </svg>
              </div>
            )}

            {speaker === 'jeune' && (
              <div className="relative flex flex-col items-center filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                {/* Young Villager 2/3 Bust */}
                <svg
                  viewBox="0 0 120 125"
                  className="w-24 h-24 sm:w-30 sm:h-30 md:w-34 md:h-34"
                  style={{ imageRendering: 'pixelated' }}
                >
                  <path
                    d="M 38 35 C 38 20, 82 20, 82 35 Z"
                    fill="#deb887"
                    stroke="#3a2312"
                    strokeWidth="2"
                  />
                  <path
                    d="M 36 38 C 34 48, 86 48, 84 38 Z"
                    fill="#593c22"
                  />
                  <ellipse cx="60" cy="54" rx="17" ry="19" fill="#f5d5b0" stroke="#3a2312" strokeWidth="2" />
                  <path
                    d="M 28 98 L 42 82 L 78 82 L 92 98 L 96 125 L 24 125 Z"
                    fill="#8c6b4e"
                    stroke="#3a2312"
                    strokeWidth="2"
                  />
                  <path d="M 48 84 L 60 108 L 72 84 Z" fill="#fbf7ee" stroke="#3a2312" strokeWidth="1.5" />
                </svg>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
