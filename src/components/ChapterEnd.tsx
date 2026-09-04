import React, { useEffect } from 'react';
import { Sparkles, Sun, Compass, RotateCcw, HeartHandshake, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { CustomAssetsConfig, DEFAULT_ASSETS } from '../utils/assets';

interface ChapterEndProps {
  xpTotal: number;
  onReplay: () => void;
  onOpenKnowledge: () => void;
  onContinueAdventure?: () => void;
  customAssets?: CustomAssetsConfig;
}

export const ChapterEnd: React.FC<ChapterEndProps> = ({
  xpTotal,
  onReplay,
  onOpenKnowledge,
  onContinueAdventure,
  customAssets
}) => {
  useEffect(() => {
    soundManager.playChapterComplete();
  }, []);

  const endIllustration = customAssets?.backgrounds?.fin || DEFAULT_ASSETS.backgrounds.fin;

  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-6 z-30 animate-in fade-in zoom-in-95 duration-500 my-auto py-4">
      <div className="bg-[#191526]/95 backdrop-blur-xl border-2 border-amber-500/70 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col gap-4 text-center relative overflow-hidden">
        {/* Glow background */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Epic Ending Artwork Banner */}
        {endIllustration && (
          <div className="relative w-full h-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-lg">
            <img
              src={endIllustration}
              alt="Fin du Chapitre 1 — Le chemin commence"
              className="w-full h-full object-cover pixelated"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191526] via-transparent to-black/20" />
            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-left">
              <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl border border-amber-400/40">
                <span className="text-[10px] sm:text-xs font-bold text-amber-300 font-cinzel">
                  « Le chemin ne fait que commencer. »
                </span>
              </div>
              <div className="bg-amber-500/90 text-zinc-950 px-2.5 py-0.5 rounded-lg text-[10px] font-black font-cinzel uppercase">
                Chapitre 1 Conclu
              </div>
            </div>
          </div>
        )}

        {/* Badge & Title */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 p-0.5 shadow-md shadow-amber-500/30 flex items-center justify-center">
              <Sun className="w-5 h-5 text-zinc-950 animate-spin-slow" />
            </div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-cinzel">
              Voyage Accompli
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-zinc-100 font-cinzel">
            CHAPITRE 1 TERMINÉ
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 italic">
            « Le Premier Pas • De l'Intention à l'Action »
          </p>
        </div>

        {/* XP and Unlocked Notion Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-950/60 to-zinc-900 border border-amber-500/40 flex flex-col items-center justify-center gap-0.5 shadow-inner">
            <div className="flex items-center gap-1.5 text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold font-cinzel">XP Total Obtenu</span>
            </div>
            <span className="text-2xl font-black text-amber-300 font-cinzel">
              {xpTotal} XP
            </span>
            <span className="text-[10px] text-zinc-400">Progression du voyageur</span>
          </div>

          <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-zinc-900 border border-emerald-500/40 flex flex-col items-center justify-center gap-0.5 shadow-inner">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <Compass className="w-4 h-4" />
              <span className="text-xs font-bold font-cinzel">Notion Débloquée</span>
            </div>
            <span className="text-base font-black text-emerald-300 font-cinzel">
              ʿIlm — Savoir & Action
            </span>
            <span className="text-[10px] text-zinc-400">Ajouté à la Bibliothèque</span>
          </div>
        </div>

        {/* Summary Path of Chapter 1 */}
        <div className="p-3.5 rounded-2xl bg-[#221c30] border border-zinc-800 text-left flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider font-cinzel">
              Le Fil Conducteur Intégré
            </span>
            <span className="text-[10px] text-zinc-400 font-mono">8 piliers validés</span>
          </div>
          <p className="text-[11px] sm:text-xs font-semibold text-zinc-200 leading-relaxed font-mono bg-zinc-950/40 px-2.5 py-1.5 rounded-lg border border-zinc-800/80">
            ʿIlm → effort → action → sabr → adab → salām → niyyah → shukr
          </p>
          <div className="text-[11px] text-zinc-300/90 leading-relaxed italic">
            « Allah est Celui qui donne les bienfaits et permet les causes. Le jeu ne transforme jamais une invocation en pouvoir. »
          </div>
        </div>

        {/* Final Daily Mission Reminder */}
        <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-2.5 text-left">
          <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold text-emerald-300 font-cinzel flex items-center gap-1">
              <span>Mission dans la vraie vie</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </span>
            <p className="text-xs text-zinc-200">
              Va vers quelqu'un aujourd'hui. Dis-lui « As-salāmu ʿalaykum », puis laisse la rencontre se faire avec bienveillance.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5 pt-2">
          {onContinueAdventure && (
            <button
              onClick={() => {
                soundManager.playSelect();
                onContinueAdventure();
              }}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-zinc-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-amber-900/40 border-2 border-amber-300 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer font-cinzel tracking-wide"
            >
              <span>L'Aventure Continue</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                soundManager.playSelect();
                onOpenKnowledge();
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600/80 to-amber-700/80 hover:from-amber-500 hover:to-amber-600 text-zinc-100 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-amber-500/40 shadow-md transition-all cursor-pointer font-cinzel"
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>Bibliothèque du Savoir</span>
            </button>

            <button
              onClick={() => {
                soundManager.playSelect();
                onReplay();
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-[#272136] hover:bg-[#342c48] border border-zinc-700 text-zinc-300 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer font-cinzel"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Rejouer le Chapitre 1</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
