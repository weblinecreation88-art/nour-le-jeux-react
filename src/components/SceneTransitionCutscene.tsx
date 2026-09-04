import React, { useState, useEffect } from 'react';
import { Scene } from '../types';
import { Compass, MapPin, Sparkles, ArrowRight, Footprints, FastForward } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { CustomAssetsConfig } from '../utils/assets';
import { CharacterAvatar } from './CharacterAvatar';

interface SceneTransitionCutsceneProps {
  fromScene?: Scene;
  toScene: Scene;
  customAssets?: CustomAssetsConfig;
  onFinish: () => void;
}

export const SceneTransitionCutscene: React.FC<SceneTransitionCutsceneProps> = ({
  fromScene,
  toScene,
  customAssets,
  onFinish
}) => {
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    soundManager.playSceneTransition();

    const duration = 3600; // 3.6s
    const stepTime = 40;
    const increment = (stepTime / duration) * 100;

    const timer = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [toScene.id]);

  const introText = toScene.beats.find((b) => b.type === 'dialogue' || b.type === 'narration')?.text ||
    'Le voyageur poursuit sa quête de rectitude et de sagesse, guidé par les enseignements sacrés.';

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#fbf7ee] text-[#3a2312] p-4 sm:p-8 select-none overflow-hidden animate-in fade-in duration-500">
      {/* Dynamic Background Pattern & Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f3ebd9] via-[#ebdfc8] to-[#fbf7ee] opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(#d97c27_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

      {/* Top Header: Journey Indicator */}
      <div className="relative z-10 w-full max-w-2xl flex items-center justify-between pt-2">
        <div className="flex items-center gap-2 bg-[#fdf5e6] border border-[#d97c27]/40 px-3.5 py-1.5 rounded-2xl backdrop-blur-md">
          <Compass className="w-4 h-4 text-[#d97c27] animate-[spin_8s_linear_infinite]" />
          <span className="text-xs font-bold font-cinzel text-[#d97c27] tracking-widest uppercase">
            En route • Scène {toScene.id} sur 9
          </span>
        </div>

        <button
          onClick={() => {
            soundManager.playSelect();
            onFinish();
          }}
          className="flex items-center gap-1.5 text-xs font-bold bg-[#f0a04b] hover:bg-[#e69138] text-[#1a1209] border border-[#d97c27]/50 px-3 py-1.5 rounded-xl cursor-pointer transition-all shadow-md active:translate-y-0.5"
        >
          <span>Passer</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center Cinematic Stage: Walking Travelers & Pathway */}
      <div className="relative z-10 w-full max-w-xl flex flex-col items-center justify-center my-auto gap-6">
        {/* Animated Pathway Visual */}
        <div className="w-full relative py-6 flex flex-col items-center">
          {/* Subtle dust / stars particle glow */}
          <div className="absolute w-48 h-48 rounded-full bg-radial from-[#e69138]/20 via-[#9c4174]/15 to-transparent blur-xl pointer-events-none" />

          {/* Walking Characters Side by Side */}
          <div className="relative flex items-end justify-center gap-8 sm:gap-12 z-10 pb-4">
            {/* Protagonist Walking Animation */}
            <div className="flex flex-col items-center animate-[bounce_1.1s_ease-in-out_infinite]">
              <div className="relative">
                <CharacterAvatar speaker="personnage" size="lg" customAssets={customAssets} />
                <div className="absolute -bottom-2 -left-1 text-[#d97c27] opacity-70 animate-pulse">
                  <Footprints className="w-3.5 h-3.5" />
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#6b4724] mt-2 font-cinzel bg-[#f3ebd9] px-2 py-0.5 rounded-full border border-[#ebdcc4]">
                Voyageur
              </span>
            </div>

            {/* Path Dashes moving */}
            <div className="flex items-center gap-1.5 opacity-60 text-[#d97c27] self-center">
              <div className="w-2 h-1 bg-[#d97c27] rounded-full animate-pulse" />
              <div className="w-3 h-1 bg-[#d97c27] rounded-full animate-pulse delay-75" />
              <div className="w-2 h-1 bg-[#d97c27] rounded-full animate-pulse delay-150" />
            </div>

            {/* Noura Walking Animation */}
            <div className="flex flex-col items-center animate-[bounce_1.1s_ease-in-out_infinite_0.55s]">
              <div className="relative">
                <CharacterAvatar speaker="noura" size="lg" customAssets={customAssets} />
                <div className="absolute -bottom-2 -right-1 text-[#4a804d] opacity-70 animate-pulse">
                  <Footprints className="w-3.5 h-3.5" />
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#1b4332] mt-2 font-cinzel bg-[#d8f3dc] px-2 py-0.5 rounded-full border border-[#74c69d]">
                Noura
              </span>
            </div>
          </div>

          {/* Dotted travel trail on ground */}
          <div className="w-full max-w-xs h-1.5 bg-[#ebdcc4] rounded-full overflow-hidden relative border border-[#d9c7ab]">
            <div
              className="h-full bg-gradient-to-r from-[#4a804d] via-[#d97c27] to-[#e69138] transition-all duration-75"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Scene Title Card */}
        <div className="w-full bg-[#fdfbf7] border-2 border-[#ebdcc4] rounded-3xl p-5 sm:p-6 text-center shadow-lg flex flex-col items-center gap-2.5 animate-in zoom-in-95 duration-400">
          <div className="flex items-center gap-2 text-[#d97c27]">
            <Sparkles className="w-4 h-4" />
            <span className="text-[11px] font-bold tracking-widest font-cinzel uppercase">
              Nouvelle Destination
            </span>
            <Sparkles className="w-4 h-4" />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-[#3a2312] font-cinzel tracking-wide drop-shadow-sm">
            {toScene.title}
          </h1>

          {toScene.subtitle && (
            <p className="text-sm font-bold text-[#d97c27] font-cinzel">
              {toScene.subtitle}
            </p>
          )}

          <div className="inline-flex items-center gap-1.5 bg-[#fdf5e6] text-[#6b4724] px-3 py-1 rounded-full text-xs font-semibold border border-[#ebdcc4] mt-1">
            <MapPin className="w-3.5 h-3.5 text-[#d97c27]" />
            <span>Lieu : {toScene.location}</span>
          </div>

          <p className="text-xs sm:text-sm text-[#8c5a2b] italic leading-relaxed max-w-md mt-2 line-clamp-2">
            « {introText} »
          </p>
        </div>
      </div>

      {/* Bottom Action: Big Enter Button & Progress */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-3 pb-2">
        <button
          onClick={() => {
            soundManager.playSelect();
            onFinish();
          }}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#d97c27] to-[#e69138] hover:from-[#e69138] hover:to-[#f0a04b] text-[#1a1209] font-black text-sm sm:text-base flex items-center justify-center gap-3 border-2 border-[#fff0d6] shadow-[0_5px_0_#8c4d15] active:translate-y-1 active:shadow-[0_2px_0_#8c4d15] transition-all cursor-pointer font-cinzel uppercase tracking-wider group"
        >
          <span>Entrer dans la Scène {toScene.id}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <span className="text-[11px] text-[#a69882] font-medium">
          Démarrage automatique dans quelques instants...
        </span>
      </div>
    </div>
  );
};
