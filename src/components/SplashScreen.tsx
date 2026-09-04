import React, { useState, useEffect } from 'react';
import officialLogo from '../assets/images/logo_nour_officiel.jpg';
import { Sparkles, Play, RotateCcw, AlertTriangle, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface SplashScreenProps {
  hasSavedGame?: boolean;
  savedSummary?: {
    level: number;
    xp: number;
    sceneTitle: string;
  };
  onContinue: () => void;
  onNewGame: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  hasSavedGame = false,
  savedSummary,
  onContinue,
  onNewGame
}) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [readyToEnter, setReadyToEnter] = useState(false);
  const [showNewGameConfirm, setShowNewGameConfirm] = useState(false);

  useEffect(() => {
    // Smooth progress loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setReadyToEnter(true);
          return 100;
        }
        const increment = Math.floor(Math.random() * 18) + 12;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const handleAction = (actionType: 'continue' | 'new') => {
    if (isFadingOut) return;
    try {
      soundManager.playChoice();
    } catch {
      // Audio fallback
    }
    setIsFadingOut(true);
    setTimeout(() => {
      if (actionType === 'continue') {
        onContinue();
      } else {
        onNewGame();
      }
    }, 450);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between p-5 sm:p-6 bg-[#090b10] text-white select-none transition-all duration-500 ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundImage: `radial-gradient(circle at 50% 40%, rgba(217, 124, 39, 0.22) 0%, transparent 65%), radial-gradient(circle at 50% 90%, rgba(20, 30, 55, 0.4) 0%, transparent 70%)`
      }}
    >
      {/* Background celestial stars particles removed */}

      {/* Top subtle badge */}
      <div className="pt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/80 bg-amber-950/40 border border-amber-500/20 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-amber-950/40">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
        <span>Pixelio Éditions</span>
      </div>

      {/* Center Official Logo with Golden Aura */}
      <div className="flex flex-col items-center justify-center my-auto relative max-w-sm w-full">
        {/* Glowing halo backdrops */}
        <div className="absolute w-72 h-72 rounded-full bg-amber-500/20 blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute w-52 h-52 rounded-full bg-orange-400/25 blur-2xl pointer-events-none" />

        {/* Logo Container */}
        <div className="relative group transform transition-transform duration-500 hover:scale-105">
          <img
            src={officialLogo}
            alt="Nour : Le Jeu - Retrouve ta Lumière"
            className="w-64 h-64 sm:w-80 sm:h-80 object-contain drop-shadow-[0_15px_25px_rgba(217,124,39,0.35)]"
          />
        </div>
      </div>

      {/* Bottom Controls (Loading vs Continue / New Game Buttons) */}
      <div className="w-full max-w-xs flex flex-col items-center gap-3 pb-3">
        {progress < 100 ? (
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center text-xs text-amber-200/70 font-mono px-1">
              <span>Éveil de la lumière...</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 w-full bg-black/60 border border-amber-500/30 rounded-full overflow-hidden p-0.5 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-full transition-all duration-150 shadow-lg shadow-amber-500/50"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-2.5 animate-in fade-in zoom-in-95 duration-300">
            {/* Bouton Continuer (si sauvegarde existante) */}
            <button
              onClick={() => handleAction('continue')}
              className="w-full flex items-center justify-between py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#e69138] via-[#f0a04b] to-[#f5b061] hover:from-[#d97c27] hover:to-[#e69138] text-[#1a1209] font-bold text-xs sm:text-sm font-cinzel shadow-xl shadow-amber-500/30 active:scale-98 transition-all border-2 border-[#3a2312] cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <Play className="w-4 h-4 fill-current text-[#1a1209]" />
                <div className="text-left">
                  <span className="block leading-tight font-black uppercase">
                    {hasSavedGame ? 'CONTINUER LA PARTIE' : 'COMMENCER L\'AVENTURE'}
                  </span>
                  {savedSummary && (
                    <span className="text-[10px] text-[#4a2e18] font-mono font-medium block">
                      Niv. {savedSummary.level} • {savedSummary.xp} XP
                    </span>
                  )}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#1a1209] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Bouton Nouvelle Partie */}
            {hasSavedGame && (
              <button
                onClick={() => {
                  soundManager.playSelect();
                  setShowNewGameConfirm(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-bold text-xs font-cinzel border border-zinc-700/80 transition-all cursor-pointer shadow-md"
              >
                <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                <span>NOUVELLE PARTIE</span>
              </button>
            )}
          </div>
        )}

        <div className="text-[11px] text-amber-200/40 text-center tracking-wide">
          {readyToEnter ? 'Choisissez une option pour entrer' : 'Chargement de la sagesse ancestrale...'}
        </div>
      </div>

      {/* Modal Confirmation Nouvelle Partie */}
      {showNewGameConfirm && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowNewGameConfirm(false)}
        >
          <div
            className="w-full max-w-sm bg-[#fbf7ee] border-3 border-[#9b2226] rounded-3xl p-5 sm:p-6 shadow-[0_8px_0_#9b2226] flex flex-col items-center gap-4 text-center select-none animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#fde2e4] border-2 border-[#9b2226] flex items-center justify-center text-[#9b2226] shadow-inner">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase text-[#9b2226] font-cinzel bg-[#fde2e4] px-3 py-1 rounded-full border border-[#9b2226]">
                Nouvelle Partie
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel mt-2">
                Recommencer à zéro ?
              </h3>
            </div>

            <p className="text-xs text-[#5c4028] leading-relaxed bg-[#f3ebd9] p-3.5 rounded-2xl border border-[#d2be9f]">
              Êtes-vous sûr de vouloir commencer une nouvelle partie ? Votre progression précédente (XP, scènes débloquées, quiz) sera réinitialisée pour repartir depuis la Chambre.
            </p>

            <div className="flex flex-col gap-2 w-full">
              <button
                type="button"
                onClick={() => {
                  setShowNewGameConfirm(false);
                  handleAction('new');
                }}
                className="w-full py-3 rounded-2xl bg-[#9b2226] hover:bg-[#7f1d1d] text-white font-bold text-xs sm:text-sm font-cinzel border-2 border-[#5c1316] shadow-[0_3px_0_#5c1316] active:translate-y-0.5 transition-all cursor-pointer"
              >
                Oui, nouvelle partie
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playSelect();
                  setShowNewGameConfirm(false);
                }}
                className="w-full py-2.5 rounded-2xl bg-[#ebdfc8] hover:bg-[#e0cfb4] text-[#3a2312] font-bold text-xs font-cinzel border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] transition-all cursor-pointer"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
