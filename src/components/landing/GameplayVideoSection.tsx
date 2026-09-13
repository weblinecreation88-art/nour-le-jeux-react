import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles, Download, Gamepad2, Compass, ShieldCheck } from 'lucide-react';
import { APK_DOWNLOAD_URL } from '../../data/gameData';
import { useLanguage } from '../../context/LanguageContext';

interface GameplayVideoSectionProps {
  onOpenGame: () => void;
}

export const GameplayVideoSection: React.FC<GameplayVideoSectionProps> = ({ onOpenGame }) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<number | null>(null);

  // Auto-hide controls when playing and inactive
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const clickPos = (e.clientX - rect.left) / rect.width;
    const targetTime = clickPos * (videoRef.current.duration || 0);
    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section 
      id="gameplay-video" 
      className="relative py-20 bg-[#09080e] overflow-hidden border-t border-b border-amber-500/20"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-purple-900/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.gameplayVideo.badge}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-400">
            {t.gameplayVideo.title}
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {t.gameplayVideo.subtitle}
          </p>
        </div>

        {/* Video Player Showcase Frame */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Halo lighting behind the video */}
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-emerald-600/20 to-purple-600/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

          {/* Main Player Box */}
          <div 
            ref={containerRef}
            className="relative rounded-2xl bg-[#0c0a14] border-2 border-amber-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Top decorative header strip */}
            <div className="px-4 py-2.5 bg-[#120f1e] border-b border-amber-500/20 flex items-center justify-between text-xs text-stone-300 select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-cinzel font-semibold text-amber-200 tracking-wide hidden sm:inline">
                  NOUR — Démo de Gameplay (Pixel-Art RPG)
                </span>
              </div>
              <div className="flex items-center gap-2 text-stone-400 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>1080p • 60 FPS</span>
              </div>
            </div>

            {/* Video Element & Overlay Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center cursor-pointer" onClick={togglePlay}>
              <video
                ref={videoRef}
                src="/game-assets/video-gameplay.mp4"
                poster="/game-assets/affiche_nour.jpg"
                playsInline
                preload="metadata"
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleVideoEnded}
                className="w-full h-full object-contain"
              />

              {/* Big Central Play Button when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all">
                  <div className="relative group/btn">
                    <div className="absolute -inset-3 bg-amber-500/40 rounded-full blur-md animate-pulse" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-stone-950 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.8)] transform transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                      title="Lire la vidéo"
                      aria-label="Lire la vidéo"
                    >
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-stone-950 translate-x-0.5" />
                    </button>
                  </div>
                  <div className="absolute bottom-6 px-4 py-1.5 rounded-full bg-[#0e0c15]/80 border border-amber-500/30 text-amber-200 text-xs font-cinzel font-semibold backdrop-blur-md">
                    Cliquez pour lancer la vidéo (32s)
                  </div>
                </div>
              )}

              {/* Video Bottom Control Bar */}
              <div 
                className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent transition-opacity duration-300 ${
                  showControls || !isPlaying || isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Progress Bar (Scrubber) */}
                <div 
                  ref={progressRef}
                  onClick={handleProgressClick}
                  className="w-full h-2 bg-white/20 hover:h-2.5 rounded-full cursor-pointer relative mb-3 transition-all overflow-hidden"
                >
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full relative"
                    style={{ width: `${progressPercent}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md transform translate-x-1/2" />
                  </div>
                </div>

                {/* Controls Row */}
                <div className="flex items-center justify-between text-stone-200 text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    {/* Play/Pause toggle */}
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg hover:bg-white/10 text-amber-300 hover:text-amber-200 transition cursor-pointer"
                      title={isPlaying ? 'Mettre en pause' : 'Lire'}
                      aria-label={isPlaying ? 'Mettre en pause' : 'Lire'}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-amber-300" />
                      ) : (
                        <Play className="w-5 h-5 fill-amber-300" />
                      )}
                    </button>

                    {/* Mute/Unmute toggle */}
                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded-lg hover:bg-white/10 text-stone-300 hover:text-amber-300 transition flex items-center gap-1.5 cursor-pointer"
                      title={isMuted ? 'Activer le son' : 'Couper le son'}
                      aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-5 h-5 text-amber-400" />
                          <span className="text-[11px] text-amber-300/90 hidden xs:inline">Son désactivé</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-5 h-5 text-emerald-400" />
                          <span className="text-[11px] text-emerald-300/90 hidden xs:inline">Son actif</span>
                        </>
                      )}
                    </button>

                    {/* Time indicator */}
                    <span className="font-mono text-xs text-stone-400">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Right side controls: Fullscreen */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.currentTime = 0;
                          videoRef.current.play();
                          setIsPlaying(true);
                        }
                      }}
                      className="p-1.5 rounded-lg hover:bg-white/10 text-stone-300 hover:text-amber-300 transition cursor-pointer"
                      title="Recommencer"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    <button
                      onClick={toggleFullscreen}
                      className="p-1.5 rounded-lg hover:bg-white/10 text-stone-300 hover:text-amber-300 transition cursor-pointer"
                      title="Plein écran"
                      aria-label="Plein écran"
                    >
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Strategic Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 max-w-5xl mx-auto">
          
          <div className="p-5 rounded-xl bg-[#12101b] border border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-base font-bold text-amber-100 mb-1">
              Artisanat Pixel-Art & Poésie
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Des décors minutieusement dessinés, une lumière dorée du crépuscule et des ambiances sonores inspirées pour une immersion sereine.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#12101b] border border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-300 mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-base font-bold text-amber-100 mb-1">
              Épreuves Spirituelles & Choix
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Affrontez les murmures intérieurs (Waswâs), domptez la colère avec le Hilm et choisissez la douceur guidée par les Hadiths authentiques.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#12101b] border border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-3">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-base font-bold text-amber-100 mb-1">
              Les « Ponts de Nour » en Vie Réelle
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Le jeu dépasse l'écran : accomplissez des missions bienveillantes concrètes dans votre foyer pour débloquer la suite de l'aventure.
            </p>
          </div>

        </div>

        {/* Strategic Dual Call To Actions below Video */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={onOpenGame}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-stone-950 font-cinzel font-extrabold text-sm sm:text-base tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_45px_rgba(245,158,11,0.8)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3"
          >
            <Play className="w-5 h-5 fill-stone-950" />
            <span>Lancer l'Aventure Immédiatement</span>
          </button>

          <a
            href={APK_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-800/80 hover:bg-emerald-700/90 border border-emerald-400/50 text-emerald-100 font-cinzel font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Download className="w-4 h-4 text-emerald-300" />
            <span>Télécharger l'APK Android (Drive)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
