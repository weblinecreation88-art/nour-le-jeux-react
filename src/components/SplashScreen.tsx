import React, { useState, useEffect, useRef } from 'react';
import officialLogo from '../assets/images/logo_nour_transparent.png';
import { Sparkles, Play, RotateCcw, ArrowRight, ScrollText, SkipForward, Film, Volume2, VolumeX } from 'lucide-react';
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
  onOpenLanding?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  hasSavedGame = false,
  savedSummary,
  onContinue,
  onNewGame,
  onOpenLanding
}) => {
  const [showCinematic, setShowCinematic] = useState(() => {
    try {
      return sessionStorage.getItem('nour_seen_cinematic') !== 'true';
    } catch {
      return true;
    }
  });

  const [cinematicProgress, setCinematicProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const cinematicVideoRef = useRef<HTMLVideoElement | null>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [readyToEnter, setReadyToEnter] = useState(false);
  const [showNewGameConfirm, setShowNewGameConfirm] = useState(false);

  // Safely trigger cinematic playback
  useEffect(() => {
    if (showCinematic && cinematicVideoRef.current) {
      const vid = cinematicVideoRef.current;
      vid.muted = isMuted;
      vid.defaultMuted = true;
      vid.playsInline = true;
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // If autoplay was blocked, enforce muted and retry
            vid.muted = true;
            vid.play().then(() => setIsPlaying(true)).catch(() => {
              setIsPlaying(false);
            });
          });
      }
    }
  }, [showCinematic, isMuted]);

  // Ensure background loop video plays reliably on splash
  useEffect(() => {
    if (backgroundVideoRef.current) {
      const vid = backgroundVideoRef.current;
      vid.muted = true;
      vid.defaultMuted = true;
      vid.playsInline = true;
      vid.play().catch(() => {});
    }
  }, [showCinematic]);

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

  const handleSkipCinematic = () => {
    try {
      sessionStorage.setItem('nour_seen_cinematic', 'true');
    } catch {
      // ignore
    }
    setShowCinematic(false);
  };

  const handleReplayCinematic = () => {
    try {
      soundManager.playSelect();
    } catch {
      // Audio fallback
    }
    setCinematicProgress(0);
    setIsPlaying(false);
    setShowCinematic(true);
  };

  const handleCinematicTimeUpdate = () => {
    if (cinematicVideoRef.current) {
      const { currentTime, duration } = cinematicVideoRef.current;
      if (duration > 0) {
        setCinematicProgress((currentTime / duration) * 100);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cinematicVideoRef.current) {
      const nextMuted = !isMuted;
      cinematicVideoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleAction = (actionType: 'continue' | 'new') => {
    if (isFadingOut) return;
    try {
      soundManager.playSelect();
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
    <>
      {/* ============================================================ */}
      {/* 1. CINÉMATIQUE D'INTRODUCTION NARRATIVE PLEIN ÉCRAN */}
      {/* ============================================================ */}
      {showCinematic && (
        <div 
          onClick={handleSkipCinematic}
          className="fixed inset-0 z-[110] bg-black flex flex-col justify-between select-none animate-in fade-in duration-500 overflow-hidden cursor-pointer"
        >
          {/* Video Player */}
          <video
            ref={cinematicVideoRef}
            autoPlay
            muted={isMuted}
            playsInline
            preload="auto"
            onPlay={() => setIsPlaying(true)}
            onPlaying={() => setIsPlaying(true)}
            onTimeUpdate={handleCinematicTimeUpdate}
            onEnded={handleSkipCinematic}
            onError={() => {
              console.warn("Cinematic video failed to load, moving to splash");
              handleSkipCinematic();
            }}
            className="absolute inset-0 w-full h-full object-cover z-10"
          >
            <source src="/nour_le_jeu_trailer_25s.mp4" type="video/mp4" />
            <source src="/Boy_holding_magical_glowing_lantern_202609051242.mp4" type="video/mp4" />
            <source src="/intro_cinematic.mp4" type="video/mp4" />
            <source src="/intro_loop.mp4" type="video/mp4" />
          </video>

          {/* Center Play Prompt if Browser blocked unmuted autoplay */}
          {!isPlaying && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 bg-black/60 pointer-events-auto">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (cinematicVideoRef.current) {
                    cinematicVideoRef.current.muted = false;
                    setIsMuted(false);
                    cinematicVideoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
                      handleSkipCinematic();
                    });
                  }
                }}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#e69138] to-[#f5b061] text-[#1a1209] font-cinzel font-black text-sm tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.6)] active:scale-95 transition-all cursor-pointer border-2 border-amber-300 animate-pulse"
              >
                <Play className="w-5 h-5 fill-current text-[#1a1209]" />
                <span>VOIR LA BANDE-ANNONCE (INTRO)</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkipCinematic();
                }}
                className="mt-4 text-xs font-cinzel text-amber-200/80 hover:text-white underline cursor-pointer"
              >
                Passer directement au jeu
              </button>
            </div>
          )}

          {/* Top Bar Controls (Passer & Mute) */}
          <div className="relative z-30 flex items-center justify-between p-4 sm:p-6 w-full max-w-4xl mx-auto bg-gradient-to-b from-black/85 via-black/40 to-transparent">
            {/* Audio Toggle */}
            <button
              onClick={toggleMute}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 border border-amber-500/50 text-amber-200 hover:text-white text-xs font-mono transition-all active:scale-95 shadow-lg cursor-pointer"
              title={isMuted ? 'Activer le son' : 'Couper le son'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-amber-400" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
              <span className="hidden xs:inline">{isMuted ? 'Son coupé' : 'Son activé'}</span>
            </button>

            {/* Skip Button */}
            <button
              onClick={handleSkipCinematic}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 hover:bg-black/90 border-2 border-amber-400/70 text-amber-200 hover:text-white font-cinzel font-bold text-xs tracking-wider transition-all active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.4)] cursor-pointer group"
            >
              <span>Passer l'intro</span>
              <SkipForward className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Bottom Progress Bar */}
          <div className="relative z-30 w-full p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <div className="w-full max-w-md mx-auto flex flex-col items-center gap-1.5">
              <div className="w-full h-1.5 bg-white/25 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 transition-all duration-100 ease-linear shadow-[0_0_10px_#f59e0b]"
                  style={{ width: `${cinematicProgress}%` }}
                />
              </div>
              <span className="text-[11px] text-amber-200/90 font-cinzel tracking-widest uppercase font-semibold">
                PROLOGUE • L'AVENTURE INTÉRIEURE
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 2. ÉCRAN D'ACCUEIL AVEC FOND ANIMÉ ET LOGO NOUR RAYONNANT */}
      {/* ============================================================ */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-between p-5 sm:p-6 bg-[#090b10] text-white select-none transition-all duration-500 overflow-hidden ${
          isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        {/* Background Looping Video (Othmân marchant vers la cité dorée) */}
        <video
          ref={backgroundVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-85"
        >
          <source src="/intro_loop.mp4" type="video/mp4" />
          <source src="/Boy_holding_magical_glowing_lantern_202609051242.mp4" type="video/mp4" />
          <source src="/intro_cinematic.mp4" type="video/mp4" />
        </video>

        {/* Darkening & Warm Radial Vignette to guarantee 100% logo and text contrast */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#090b10]/80 via-[#090b10]/50 to-[#090b10]/90"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 38%, rgba(217, 124, 39, 0.28) 0%, transparent 65%), radial-gradient(circle at 50% 90%, rgba(9, 11, 16, 0.85) 0%, transparent 70%)`
          }}
        />

        {/* Top Floating Replay Cinematic Button */}
        <div className="relative z-10 w-full max-w-sm flex justify-end">
          <button
            onClick={handleReplayCinematic}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/55 hover:bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-200 hover:text-white text-[11px] font-cinzel tracking-wider transition-all active:scale-95 shadow-md cursor-pointer"
            title="Revoir la cinématique d'introduction"
          >
            <Film className="w-3.5 h-3.5 text-amber-400" />
            <span>Cinématique</span>
          </button>
        </div>

        {/* Center Official Transparent Logo with Radiant Golden Aura */}
        <div className="flex flex-col items-center justify-center my-auto relative max-w-sm w-full z-10">
          {/* Glowing halo backdrops */}
          <div className="absolute w-72 h-72 rounded-full bg-amber-500/25 blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute w-52 h-52 rounded-full bg-orange-400/20 blur-2xl pointer-events-none" />

          {/* Logo Container */}
          <div className="relative group transform transition-all duration-500 hover:scale-105">
            <img
              src={officialLogo}
              alt="Nour : Le Jeu - Retrouve ta Lumière"
              className="w-64 h-64 sm:w-80 sm:h-80 object-contain drop-shadow-[0_12px_32px_rgba(217,124,39,0.55)] drop-shadow-[0_0_50px_rgba(245,158,11,0.35)] select-none"
            />
          </div>
        </div>

        {/* Bottom Controls (Loading vs Continue / New Game Buttons) */}
        <div className="w-full max-w-xs flex flex-col items-center gap-3 pb-3 relative z-10">
          {progress < 100 ? (
            <div className="w-full space-y-2">
              <div className="flex justify-between items-center text-xs text-amber-200 font-mono px-1">
                <span>Éveil de la lumière...</span>
                <span className="font-bold text-amber-300">{progress}%</span>
              </div>
              <div
                className="h-2.5 w-full rounded-full overflow-hidden p-0.5 shadow-inner"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  border: '1.5px solid rgba(245, 158, 11, 0.5)'
                }}
              >
                <div
                  className="h-full rounded-full transition-all duration-150"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: '#f59e0b',
                    backgroundImage: 'linear-gradient(90deg, #f59e0b 0%, #fde047 50%, #f59e0b 100%)',
                    boxShadow: '0 0 12px rgba(245, 158, 11, 0.6)'
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-300">
              {/* Bouton Continuer / Commencer l'aventure */}
              <button
                onClick={() => handleAction('continue')}
                style={{
                  backgroundColor: '#f59e0b',
                  backgroundImage: 'linear-gradient(135deg, #fde047 0%, #f59e0b 45%, #d97706 100%)',
                  boxShadow: '0 0 25px rgba(245, 158, 11, 0.5), 0 4px 14px rgba(0, 0, 0, 0.6)'
                }}
                className="w-full flex items-center justify-between py-3.5 px-5 rounded-2xl border-2 border-[#fff3b0] hover:border-white active:scale-98 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-black/10 border border-black/15 flex items-center justify-center shrink-0">
                    <Play className="w-4 h-4 fill-[#180d02] text-[#180d02]" />
                  </div>
                  <div className="text-left">
                    <span className="block leading-tight font-black uppercase text-[#180d02] text-xs sm:text-sm font-cinzel tracking-wider drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
                      {hasSavedGame ? 'CONTINUER LA PARTIE' : 'COMMENCER L\'AVENTURE'}
                    </span>
                    {savedSummary && (
                      <div className="mt-0.5">
                        <span className="inline-block text-[10px] font-mono font-bold text-[#3a1d04] bg-amber-400/40 px-2 py-0.2 rounded-md border border-amber-700/20">
                          Niv. {savedSummary.level} • {savedSummary.xp} XP
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#180d02] group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              {/* Bouton Nouvelle Partie */}
              {hasSavedGame && (
                <button
                  onClick={() => {
                    soundManager.playSelect();
                    setShowNewGameConfirm(true);
                  }}
                  style={{
                    backgroundColor: 'rgba(20, 14, 8, 0.85)',
                    boxShadow: '0 0 16px rgba(217, 124, 39, 0.2)'
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-amber-200 hover:text-white font-bold text-xs font-cinzel tracking-wider border-2 border-amber-500/40 hover:border-amber-400 hover:bg-amber-950/60 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                  <span>NOUVELLE PARTIE</span>
                </button>
              )}

              {/* Bouton Espace Testeurs & Questionnaire */}
              {onOpenLanding && (
                <button
                  onClick={() => {
                    soundManager.playSelect();
                    onOpenLanding();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-amber-300/90 hover:text-amber-100 font-bold text-[11px] font-cinzel tracking-wider border border-amber-500/30 hover:border-amber-500/60 bg-black/45 hover:bg-black/70 transition-all cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400/40" />
                  <span>Page de Présentation & Questionnaire Testeur</span>
                </button>
              )}
            </div>
          )}

          <div className="text-xs text-amber-200/90 font-medium text-center tracking-wide drop-shadow-sm">
            {readyToEnter ? 'Choisissez une option pour entrer' : 'Chargement de la sagesse ancestrale...'}
          </div>
        </div>

      {/* Modal Confirmation Nouvelle Partie - Charte Graphique Nour */}
      {showNewGameConfirm && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none"
          onClick={() => setShowNewGameConfirm(false)}
        >
          <div
            className="w-full max-w-sm bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl p-5 sm:p-6 shadow-[0_8px_0_#3a2312] flex flex-col items-center gap-4 text-center relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Corner Diamonds */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45" />
            <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45" />

            {/* Glowing Emblem */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-[#f2e6d0] via-[#e5d4bb] to-[#d8c3a5] border-2 border-[#3a2312] shadow-[0_3px_0_#3a2312] flex items-center justify-center text-[#d97c27]">
                <RotateCcw className="w-7 h-7" />
              </div>
              <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#e69138] border border-[#3a2312] flex items-center justify-center text-[#1a1209] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Header Title & Badge */}
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#8c5a2b] font-cinzel bg-[#ebdfc8] px-4 py-1.5 rounded-full border-2 border-[#3a2312] shadow-xs">
                ⚠️ Nouvelle Partie
              </span>
              <h3 className="text-lg sm:text-xl font-black text-[#3a2312] font-cinzel mt-2 tracking-wide">
                Recommencer à zéro ?
              </h3>
            </div>

            {/* Child-Friendly Clear Warning Box */}
            <div className="w-full bg-[#f3ebd9] border-2 border-[#3a2312] p-4 rounded-2xl flex flex-col gap-2.5 shadow-inner text-center">
              <p className="text-sm sm:text-base font-bold text-[#3a2312] leading-snug">
                Attention ! Tu vas effacer toute ton aventure et repartir du tout début.
              </p>
              
              <div className="flex items-center justify-center gap-2 bg-[#ebdfc8] py-2 px-3 rounded-xl border border-[#3a2312] text-xs sm:text-sm font-bold text-[#5c4028]">
                <span>Niveau {savedSummary?.level || 1}</span>
                <span>•</span>
                <span className="text-[#d97c27] font-black">{savedSummary?.xp || 0} XP acquis</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5 w-full">
              <button
                type="button"
                onClick={() => {
                  soundManager.playSelect();
                  setShowNewGameConfirm(false);
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#2d6a4f] hover:bg-[#1b4332] text-[#fbf7ee] font-black text-sm sm:text-base font-cinzel border-2 border-[#1b4332] shadow-[0_4px_0_#1b4332] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <span>Garder ma partie</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowNewGameConfirm(false);
                  handleAction('new');
                }}
                className="w-full py-3 px-4 rounded-2xl bg-[#ebdfc8] hover:bg-[#e0cfb4] text-[#8c2b2b] font-bold text-xs sm:text-sm font-cinzel border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Oui, tout recommencer</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};
