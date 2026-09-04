import React from 'react';
import { Scene, Beat, DialogueChoice } from '../types';
import { CustomAssetsConfig, DEFAULT_ASSETS } from '../utils/assets';

interface SceneBackgroundProps {
  scene: Scene;
  currentBeat?: Beat;
  onSelectChoice?: (choice: DialogueChoice) => void;
  climaxStepIndex?: number; // 0 to 6
  waswasDissolved?: boolean;
  customAssets?: CustomAssetsConfig;
}

export const SceneBackground: React.FC<SceneBackgroundProps> = ({
  scene,
  currentBeat,
  onSelectChoice,
  climaxStepIndex = 0,
  waswasDissolved = false,
  customAssets
}) => {
  const theme = scene.backgroundTheme;

  // For Scene 9 (climax), if waswas is dissolved / defeated (or past beat 20), show the golden dawn/sunset background
  if (theme === 'climax' && (waswasDissolved || climaxStepIndex >= 6)) {
    const dawnBg = customAssets?.backgrounds?.fin || DEFAULT_ASSETS.backgrounds.fin;
    if (dawnBg) {
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center animate-in fade-in duration-1000 bg-[#181422]">
          {/* Blurred backdrop to fill screen without ugly black bars */}
          <img src={dawnBg} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
          <img
            src={dawnBg}
            alt="L'aube dorée sur la vallée"
            className="relative w-full h-full object-contain object-bottom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 pointer-events-none" />
        </div>
      );
    }
  }

  // Check if custom background asset exists
  const customBg = customAssets?.backgrounds?.[theme];

  if (customBg) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {/* Blurred backdrop to fill screen without ugly black bars */}
        <img src={customBg} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
        <img
          src={customBg}
          alt={scene.title}
          className="relative w-full h-full object-contain object-center"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark gradient overlay for dialogue legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Dynamic atmospheric layer based on scene */}

      {theme === 'chambre' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#1e1b2e] via-[#2a1d29] to-[#1a141a]">
          {/* Morning Window Light */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-48 bg-amber-100/10 rounded-t-full blur-xl transform rotate-12" />
          <div className="absolute top-12 left-12 w-28 h-40 border-4 border-amber-900/60 rounded-t-full bg-gradient-to-b from-sky-400/20 to-amber-200/30 overflow-hidden shadow-[0_0_50px_rgba(251,191,36,0.15)]">
            <div className="w-full h-full relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-amber-900/60" />
              <div className="absolute top-0 left-1/2 w-1 h-full bg-amber-900/60" />
              {/* Early morning horizon in window */}
              <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-emerald-950 to-amber-700/30" />
            </div>
          </div>
          {/* Bed & Room Furniture Silhouette */}
          <div className="absolute bottom-28 left-6 md:left-20 w-44 md:w-56 h-28 bg-[#3d271d] rounded-t-2xl border-t-2 border-amber-600/30 shadow-2xl">
            <div className="absolute top-2 left-3 w-16 h-10 bg-amber-100/40 rounded-lg border border-amber-200/50" />
            <div className="absolute top-8 left-2 right-2 bottom-0 bg-[#5c3a28] rounded-t-lg" />
          </div>
          {/* Rug */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-72 md:w-96 h-12 bg-amber-900/30 rounded-full border border-amber-600/20 blur-2xs" />
          {/* Ambient Dust Motes */}
          <div className="absolute top-20 left-1/3 w-2 h-2 rounded-full bg-amber-200/30 animate-pulse" />
          <div className="absolute top-36 left-1/2 w-1.5 h-1.5 rounded-full bg-amber-200/40 animate-ping" />
        </div>
      )}

      {theme === 'carrefour' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#172238] via-[#2a3b4c] to-[#1a231b]">
          {/* Distant Hills */}
          <div className="absolute top-20 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#1a2d36] rounded-[100%] scale-150 transform -translate-y-6" />
          <div className="absolute top-32 left-0 right-0 h-52 bg-gradient-to-b from-transparent to-[#14241e] rounded-[100%] scale-125" />
          {/* Path Crossroads */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-[#362719] via-[#4d3925] to-transparent clip-path-path" />
          {/* Signpost */}
          <div className="absolute bottom-28 left-12 md:left-28 flex flex-col items-center">
            {/* Wooden post */}
            <div className="w-4 h-48 bg-[#422c1b] border-r border-amber-900/80 rounded-t-sm shadow-xl relative">
              {/* Top sign left */}
              <div className="absolute top-6 -left-16 w-20 h-6 bg-[#63432a] border border-amber-500/40 rounded-l-md transform -rotate-3 flex items-center justify-center shadow-md">
                <span className="text-[9px] font-bold text-amber-200 tracking-wider">VALLÉE</span>
              </div>
              {/* Second sign right */}
              <div className="absolute top-16 -right-20 w-24 h-6 bg-[#573922] border border-amber-500/40 rounded-r-md transform rotate-6 flex items-center justify-center shadow-md">
                <span className="text-[9px] font-bold text-amber-200 tracking-wider">VILLAGE</span>
              </div>
              {/* Third sign */}
              <div className="absolute top-28 -left-20 w-22 h-6 bg-[#4c311c] border border-amber-500/40 rounded-l-md transform -rotate-6 flex items-center justify-center shadow-md">
                <span className="text-[9px] font-bold text-amber-200 tracking-wider">SENTIER</span>
              </div>
            </div>
            {/* Post base stones */}
            <div className="w-12 h-5 bg-stone-700 rounded-full -mt-2 border border-stone-600" />
          </div>
          {/* Morning Sky Clouds */}
          <div className="absolute top-6 right-12 w-48 h-14 bg-amber-200/10 rounded-full blur-xl" />
        </div>
      )}

      {theme === 'waswas' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#130d1e] via-[#1a1228] to-[#0c0814] overflow-hidden">
          {/* Heavy Dark Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-purple-950/40 to-black/90 pointer-events-none" />
          
          {/* Ethereal Smoky Vortex Layers (Symbolic - No Creature) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-purple-800/30 bg-radial from-purple-950/50 via-purple-900/20 to-transparent filter blur-xl animate-shadow-vortex" />
          <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-purple-950/40 filter blur-2xl animate-pulse" />
          <div className="absolute bottom-16 right-1/4 w-72 h-72 rounded-full bg-purple-950/30 filter blur-3xl" />
          
          {/* Whispering Shadow Tendrils */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-950/30 to-black/80" />
          
          {/* Distant glimmer of hope/guidance struggling through the fog */}
          <div className="absolute top-12 right-16 w-16 h-16 bg-amber-400/15 rounded-full blur-xl animate-pulse" />
        </div>
      )}

      {theme === 'vallee' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#1e3345] via-[#2f4b48] to-[#1e311f]">
          {/* Valley hills */}
          <div className="absolute top-24 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#284234] rounded-t-[50%] scale-150" />
          <div className="absolute top-36 -left-20 w-full h-64 bg-gradient-to-b from-[#21382b] to-[#17271e] rounded-t-[40%]" />
          <div className="absolute top-40 -right-20 w-full h-64 bg-gradient-to-b from-[#2a4737] to-[#15241b] rounded-t-[40%]" />
          {/* Village rooftops in distance */}
          <div className="absolute top-44 left-1/2 -translate-x-1/2 flex gap-4 items-end opacity-70">
            <div className="w-8 h-8 bg-amber-800/80 clip-path-triangle" />
            <div className="w-10 h-10 bg-amber-700/80 clip-path-triangle" />
            <div className="w-6 h-6 bg-amber-900/80 clip-path-triangle" />
          </div>
          {/* Green rolling road */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#362719] via-[#33462b] to-transparent" />
        </div>
      )}

      {theme === 'village' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#2a384c] via-[#483d37] to-[#2b221a]">
          {/* Village buildings backdrop */}
          <div className="absolute bottom-28 left-4 md:left-12 w-36 md:w-48 h-52 bg-[#544337] rounded-t-md border-t-2 border-amber-600/30">
            <div className="w-full h-8 bg-[#7a3b2e] -mt-2 rounded-t-sm" />
            <div className="w-8 h-10 bg-amber-200/20 mx-auto mt-6 rounded-t-full border border-amber-400/30" />
          </div>
          <div className="absolute bottom-28 right-4 md:right-12 w-40 md:w-56 h-60 bg-[#44362d] rounded-t-md border-t-2 border-amber-600/30">
            <div className="w-full h-10 bg-[#6d3327] -mt-3 rounded-t-sm" />
            <div className="w-10 h-12 bg-amber-200/20 mx-auto mt-6 rounded-t-full border border-amber-400/30" />
          </div>
          {/* Central Stone Well */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
            {/* Well Roof */}
            <div className="w-24 h-10 bg-[#7a3e28] rounded-t-full border-t-2 border-amber-500/40 shadow-lg relative">
              <div className="absolute -bottom-6 left-2 w-1.5 h-8 bg-[#422c1b]" />
              <div className="absolute -bottom-6 right-2 w-1.5 h-8 bg-[#422c1b]" />
            </div>
            {/* Stone well base */}
            <div className="w-28 h-14 bg-stone-700 rounded-lg border-2 border-stone-600 shadow-xl flex items-center justify-center mt-6">
              <div className="w-20 h-4 bg-stone-900 rounded-full border border-stone-800" />
            </div>
          </div>
        </div>
      )}

      {theme === 'refus' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#242b3b] via-[#363231] to-[#1c1815]">
          {/* Shaded alley stone walls */}
          <div className="absolute top-0 bottom-0 left-0 w-28 md:w-44 bg-[#38302b] border-r-2 border-amber-900/40 shadow-2xl">
            {/* Vine leaves */}
            <div className="absolute top-12 right-2 w-16 h-32 flex flex-col gap-2 opacity-60">
              <div className="w-4 h-3 bg-emerald-700 rounded-full transform rotate-45" />
              <div className="w-5 h-3 bg-emerald-800 rounded-full transform -rotate-12" />
              <div className="w-4 h-3 bg-emerald-600 rounded-full" />
            </div>
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-28 md:w-44 bg-[#2f2723] border-l-2 border-amber-900/40 shadow-2xl" />
          {/* Warm alleyway center with stone textures */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-60 bg-gradient-to-t from-[#423428] to-transparent" />
        </div>
      )}

      {theme === 'geste' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#26374a] via-[#3d4239] to-[#252319]">
          {/* Olive trees at edges */}
          <div className="absolute top-16 left-6 w-32 h-44 flex flex-col items-center">
            <div className="w-28 h-28 bg-emerald-900/70 rounded-full border border-emerald-700/30 blur-2xs" />
            <div className="w-4 h-24 bg-[#3d2719] -mt-6 rounded-b-md" />
          </div>
          <div className="absolute top-12 right-6 w-36 h-48 flex flex-col items-center">
            <div className="w-32 h-32 bg-emerald-800/60 rounded-full border border-emerald-700/30 blur-2xs" />
            <div className="w-5 h-24 bg-[#3d2719] -mt-6 rounded-b-md" />
          </div>
          {/* Scattered baskets on road */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-6 items-center opacity-80">
            <div className="w-8 h-6 bg-[#684729] rounded-sm transform rotate-12 border border-amber-700" />
            <div className="w-7 h-5 bg-[#593c22] rounded-sm transform -rotate-6 border border-amber-700" />
          </div>
        </div>
      )}

      {theme === 'jardin' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#1b2b2b] via-[#243d32] to-[#18261e]">
          {/* Stone walls of old garden */}
          <div className="absolute bottom-28 left-0 right-0 h-16 bg-[#3a4439] border-t-2 border-emerald-800/40 rounded-t-lg" />
          {/* Fruit Tree thriving */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="relative w-48 md:w-60 h-44 bg-gradient-to-b from-emerald-700/70 to-emerald-950/80 rounded-full border border-emerald-500/40 shadow-2xl flex items-center justify-center">
              {/* Hidden fruits */}
              <div className="absolute top-10 left-12 w-3 h-3 bg-purple-400 rounded-full shadow-sm" />
              <div className="absolute top-16 right-14 w-3 h-3 bg-purple-400 rounded-full shadow-sm" />
              <div className="absolute bottom-12 left-20 w-3.5 h-3.5 bg-amber-400 rounded-full shadow-sm" />
            </div>
            {/* Trunk */}
            <div className="w-8 h-20 bg-[#422c1b] -mt-6 rounded-b-md border-r border-amber-950" />
          </div>
          {/* Clean stream running at bottom */}
          <div className="absolute bottom-12 left-0 right-0 h-8 bg-gradient-to-r from-teal-900/40 via-cyan-600/30 to-teal-900/40 blur-2xs" />
        </div>
      )}

      {theme === 'climax' && (
        <div className="w-full h-full relative transition-all duration-1000 bg-gradient-to-b from-[#110b1a] via-[#1a1129] to-[#0c0813] overflow-hidden">
          {/* Sky dynamically brightens with each resilience step (0 to 6) */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-amber-500/30 via-sky-400/20 to-transparent transition-opacity duration-1000 pointer-events-none z-10"
            style={{ opacity: Math.min(1, climaxStepIndex * 0.2) }}
          />

          {/* Mountains silhouette */}
          <div className="absolute top-28 left-0 right-0 h-56 bg-gradient-to-b from-transparent to-[#181124] rounded-t-[100%] scale-150" />

          {/* Symbolic swirling mist & waswas shadow vortex that dissolves with dhikr */}
          {!waswasDissolved && (
            <div
              className="absolute inset-0 flex items-center justify-center transition-all duration-700 pointer-events-none"
              style={{
                opacity: Math.max(0.05, 1 - climaxStepIndex * 0.16)
              }}
            >
              {/* Central dissipating shadow vortex */}
              <div
                className="w-96 h-96 rounded-full border-2 border-purple-800/20 bg-radial from-purple-950/70 via-purple-900/30 to-transparent filter blur-2xl animate-shadow-vortex"
                style={{
                  transform: `scale(${Math.max(0.3, 1 - climaxStepIndex * 0.12)})`
                }}
              />
              <div className="absolute inset-0 bg-radial from-transparent via-purple-950/40 to-black/80" />
            </div>
          )}

          {/* Golden Sunrise rising when climax is won */}
          {(climaxStepIndex >= 6 || waswasDissolved) && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-300/40 rounded-full blur-3xl animate-pulse z-20" />
          )}
        </div>
      )}
    </div>
  );
};
