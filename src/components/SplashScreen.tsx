import React, { useState, useEffect, useRef } from 'react';
import officialLogo from '../assets/images/logo_nour_transparent.png';
import { Sparkles, Play, RotateCcw, ArrowRight, ScrollText, SkipForward, Film, Volume2, VolumeX, Settings, Info, Lock, Clock } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { speechManager } from '../utils/speech';

import bgCh2 from '../assets/images/bg_marche_fruits_renverses.jpg';
import bgCh3 from '../assets/images/bg_mosquee_marches_attelle.jpg';
import bgCh4 from '../assets/images/bg_maison_soins_apothicaire.jpg';
import bgCh5 from '../assets/images/bg_climax_apaise.jpg';

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
  const [showCinematic, setShowCinematic] = useState(false);
  const [screenMode, setScreenMode] = useState<'title' | 'chapters'>('title');

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

  const [pendingAction, setPendingAction] = useState<'continue' | 'new' | null>(null);

  const handleSkipCinematic = () => {
    try {
      sessionStorage.setItem('nour_seen_cinematic', 'true');
    } catch {
      // ignore
    }
    setShowCinematic(false);

    if (pendingAction) {
      finalizeAction(pendingAction);
      setPendingAction(null);
    }
  };

  const finalizeAction = (actionType: 'continue' | 'new') => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (actionType === 'continue') {
        onContinue();
      } else {
        onNewGame();
      }
    }, 700);
  };

  const handleReplayCinematic = () => {
    try {
      soundManager.playSelect();
    } catch {
      // Audio fallback
    }
    setPendingAction(null);
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
      speechManager.unlock();
    } catch {
      // Audio fallback
    }
    
    finalizeAction(actionType);
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
        <style>
          {`
            @keyframes slow-pan {
              0% { transform: scale(1.02) translate(0px, 0px); }
              50% { transform: scale(1.08) translate(-1%, 1%); }
              100% { transform: scale(1.02) translate(1%, -1%); }
            }
            .animate-slow-pan {
              animation: slow-pan 45s ease-in-out infinite alternate;
            }
          `}
        </style>
        {/* Background Panorama Image with Slow Pan Animation */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-cover bg-center bg-no-repeat opacity-95 animate-slow-pan"
          style={{ backgroundImage: `url('/game-assets/title_screen_bg.jpg')` }}
        />

        {/* Darkening & Warm Radial Vignette to guarantee text contrast but keep panorama visible */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/80"
        />

        {/* Top Floating Replay Cinematic Button */}
        {screenMode === 'chapters' ? (
          <div className="w-full max-w-2xl mx-auto my-auto flex flex-col gap-3 relative z-10 bg-black/75 backdrop-blur-xl p-4 sm:p-6 rounded-3xl border-2 border-[#3a2312] shadow-[0_8px_32px_rgba(0,0,0,0.8)] overflow-y-auto max-h-[85vh] animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg sm:text-xl font-black font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 tracking-widest uppercase drop-shadow-md">
                Sélection des Chapitres
              </h2>
              <button onClick={() => setScreenMode('title')} className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 transition-colors cursor-pointer">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col gap-3 sm:gap-4 pb-2">
              {[
                { id: 1, title: "L'Aventure Intérieure", subtitle: "Le premier pas", status: "playable", image: "/game-assets/title_screen_bg.jpg" },
                { id: 2, title: "La Maîtrise de la Colère", subtitle: "Le Marchand", status: "locked", image: bgCh2 },
                { id: 3, title: "L'Enfant à l'Attelle", subtitle: "La Patience", status: "locked", image: bgCh3 },
                { id: 4, title: "Le Respect aux Parents", subtitle: "L'Épreuve", status: "soon", image: bgCh4 },
                { id: 5, title: "Le But de l'Existence", subtitle: "La Révélation", status: "soon", image: bgCh5 },
              ].map((ch) => (
                <div key={ch.id} className={`relative flex items-stretch gap-3 sm:gap-4 p-2 sm:p-3 rounded-2xl border ${ch.status === 'playable' ? 'border-amber-500/50 bg-amber-900/20' : 'border-white/10 bg-black/40 opacity-90'} overflow-hidden`}>
                  {/* Thumbnail */}
                  <div className="w-20 sm:w-28 h-20 sm:h-28 shrink-0 rounded-xl overflow-hidden relative border border-white/20 shadow-inner">
                    <img src={ch.image} alt={ch.title} className="w-full h-full object-cover" />
                    {ch.status !== 'playable' && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[2px]">
                        {ch.status === 'locked' ? <Lock className="w-6 h-6 text-amber-200/70" /> : <Clock className="w-6 h-6 text-sky-300/70" />}
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center py-1">
                    <div className="text-xs sm:text-sm font-bold text-amber-500/80 uppercase tracking-widest font-cinzel">Chapitre {ch.id}</div>
                    <div className="text-sm sm:text-lg font-black text-amber-100 font-cinzel leading-tight mt-0.5">{ch.title}</div>
                    <div className="text-[10px] sm:text-xs text-amber-200/60 mt-1">{ch.subtitle}</div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex flex-col justify-center pr-2 shrink-0">
                    {ch.status === 'playable' ? (
                      <button 
                        onClick={() => {
                           if (hasSavedGame && ch.id === 1) {
                             setShowNewGameConfirm(true);
                           } else {
                             handleAction('new');
                           }
                        }}
                        className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold font-cinzel text-xs sm:text-sm tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.4)] active:scale-95 transition-all cursor-pointer"
                      >
                        JOUER
                      </button>
                    ) : (
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 border border-white/10 text-white/40 font-bold font-cinzel text-[10px] sm:text-xs tracking-wider flex items-center gap-1.5 shadow-inner">
                        {ch.status === 'locked' ? <><Lock className="w-3.5 h-3.5" /> BLOQUÉ</> : <><Clock className="w-3.5 h-3.5" /> BIENTÔT</>}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Center Official Transparent Logo with Radiant Golden Aura */}
            <div className="flex flex-col items-center justify-center my-auto relative max-w-sm w-full z-10 pt-8">
              {/* Glowing halo backdrops */}
              <div className="absolute w-72 h-72 rounded-full bg-amber-500/25 blur-3xl animate-pulse pointer-events-none" />
              <div className="absolute w-52 h-52 rounded-full bg-orange-400/20 blur-2xl pointer-events-none" />

              {/* Logo Container */}
              <div className="relative group transform transition-all duration-500 hover:scale-105 flex items-center justify-center">
                <img
                  src={officialLogo}
                  alt="NOUR - Le Jeu"
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
                <div className="w-full flex flex-col gap-2 animate-in fade-in zoom-in-95 duration-500 delay-300">
                  {/* PRIMARY BUTTON */}
                  <button
                    onClick={() => {
                      if (hasSavedGame) {
                        handleAction('continue');
                      } else {
                        setScreenMode('chapters');
                      }
                    }}
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.7)',
                      backdropFilter: 'blur(8px)',
                      boxShadow: '0 0 20px rgba(245, 158, 11, 0.4), 0 4px 14px rgba(0, 0, 0, 0.5)'
                    }}
                    className="w-full flex items-center justify-center gap-3 py-3.5 px-5 rounded-2xl border-2 border-amber-500/70 hover:border-amber-400 hover:bg-black/60 active:scale-95 transition-all cursor-pointer group"
                  >
                    <Play className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                    <div className="text-center flex flex-col items-center">
                      <span className="block leading-tight font-black uppercase text-white text-sm sm:text-base font-cinzel tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {hasSavedGame ? 'CONTINUER' : 'JOUER'}
                      </span>
                      {hasSavedGame && savedSummary && (
                        <div className="mt-1">
                          <span className="inline-block text-[10px] font-mono font-bold text-amber-200 bg-black/50 px-2 py-0.5 rounded-md border border-amber-500/40">
                            Niv. {savedSummary.level} • {savedSummary.xp} XP
                          </span>
                        </div>
                      )}
                    </div>
                  </button>

                  {/* SECONDARY BUTTONS */}
                  <div className="grid grid-cols-1 gap-2 mt-1">
                    <button
                      onClick={() => {
                        soundManager.playSelect();
                        setScreenMode('chapters');
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white/90 hover:text-white font-bold text-[11px] font-cinzel tracking-wider border border-white/20 hover:border-amber-400/50 bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all cursor-pointer shadow-sm"
                    >
                      <ScrollText className="w-3.5 h-3.5 text-amber-400/80" />
                      <span>{hasSavedGame ? 'Sélection des Chapitres' : 'Sélection des Chapitres'}</span>
                    </button>
                    {hasSavedGame && (
                      <button
                        onClick={() => {
                          soundManager.playSelect();
                          setShowNewGameConfirm(true);
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white/90 hover:text-white font-bold text-[11px] font-cinzel tracking-wider border border-white/20 hover:border-amber-400/50 bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all cursor-pointer shadow-sm"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-amber-400/80" />
                        <span>Nouvelle partie</span>
                      </button>
                    )}

                    {onOpenLanding && (
                      <button
                        onClick={() => {
                          soundManager.playSelect();
                          onOpenLanding();
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white/90 hover:text-white font-bold text-[11px] font-cinzel tracking-wider border border-white/20 hover:border-amber-400/50 bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all cursor-pointer shadow-sm"
                      >
                        <Info className="w-3.5 h-3.5 text-slate-300" />
                        <span>À propos du jeu</span>
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div className="text-[10px] text-amber-200/70 font-medium text-center tracking-wide mt-1">
                NOUR - La Voie de la Sagesse
              </div>
            </div>
          </>
        )}

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
