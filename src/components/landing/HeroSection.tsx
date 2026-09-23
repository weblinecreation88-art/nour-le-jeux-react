import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Shield, HeartHandshake, Compass, CheckCircle2, Download, Smartphone, Film, Star, ShieldCheck, Maximize2 } from 'lucide-react';
import { GAME_URL, APK_DOWNLOAD_URL } from '../../data/gameData';
import { trackApkDownloadClick, trackPlayGameClick } from '../../utils/analytics';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSectionProps {
  onOpenGame: () => void;
  onScrollToDemo: () => void;
  onScrollToVideo?: () => void;
}

export default function HeroSection({ onOpenGame, onScrollToDemo, onScrollToVideo }: HeroSectionProps) {
  const { t } = useLanguage();
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);
  const [isHeroMuted, setIsHeroMuted] = useState(true);

  // Safely trigger video playback on mount (muted for browser policy)
  React.useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.defaultMuted = true;
      heroVideoRef.current.muted = true;
      heroVideoRef.current.play().then(() => {
        setIsHeroPlaying(true);
      }).catch(() => {
        // Fallback if browser blocks un-interacted autoplay
        setIsHeroPlaying(false);
      });
    }
  }, []);

  const toggleHeroPlay = () => {
    if (!heroVideoRef.current) return;
    if (heroVideoRef.current.paused) {
      heroVideoRef.current.play().then(() => setIsHeroPlaying(true)).catch(() => setIsHeroPlaying(false));
    } else {
      heroVideoRef.current.pause();
      setIsHeroPlaying(false);
    }
  };

  const toggleHeroMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!heroVideoRef.current) return;
    heroVideoRef.current.muted = !heroVideoRef.current.muted;
    setIsHeroMuted(heroVideoRef.current.muted);
    if (heroVideoRef.current.paused) {
      heroVideoRef.current.play().then(() => setIsHeroPlaying(true)).catch(() => {});
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#0e0b14] via-[#15101f] to-[#0d0a13]"
    >
      {/* Background with layered desert sand atmosphere and authentic game landscape */}
      <div className="absolute inset-0 z-0">
        <img
          src="/game-assets/vallee.jpg"
          alt="Paysage de la vallée de NOUR : Le 1er RPG Islamique"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Cinematic Desert Dust, Sand Shimmer and Warm Vignettes */}
        <div className="hero-bg-overlay absolute inset-0 bg-gradient-to-t from-[#0e0b14] via-[#0e0b14]/75 to-[#0e0b14]/50" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_25%] from-[#d4af37]/20 via-[#c59b27]/5 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-gradient-to-b from-[#e5c158]/15 to-[#c59b27]/5 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines, Lore & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Social Proof & Single Prominent Trust Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d2a20] border border-emerald-400/70 text-emerald-200 text-xs font-bold shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {t.hero.trustRating}
              </span>
            </div>

            {/* Title / Logo Display with Direct Promise & Calligraphy */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3.5">
                <h1 className="font-cinzel text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#fefbf6] via-[#f5ebd7] to-[#d4af37] drop-shadow-[0_4px_30px_rgba(212,175,55,0.45)]">
                  NOUR
                </h1>
                <span className="font-amiri text-4xl xs:text-5xl sm:text-6xl text-[#f3e5ca] font-bold leading-none select-none drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                  نُور
                </span>
              </div>
              
              {/* Direct Value Proposition Header */}
              <h2 className="font-cinzel text-xl sm:text-2xl lg:text-3xl text-[#fce8a6] font-bold tracking-wide leading-snug">
                {t.hero.titleLine1} — {t.hero.titleLine2}
              </h2>

              {/* Poetic Sub-tagline preserved */}
              <p className="hero-poetic-subtitle font-serif italic text-xs sm:text-sm tracking-wider uppercase">
                ✧ {t.hero.heroSubtitleDirect} ✧
              </p>
            </div>

            {/* Compelling Narrative Pitch in Warm Cream */}
            <p className="text-base sm:text-lg text-[#ede2cf] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-normal">
              {t.hero.description}
            </p>

            {/* Combat by Quiz Highlight Banner (Zero Sword / Zero Destructive Magic) */}
            <div className="hero-quiz-card p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#201530]/90 via-[#181126]/90 to-[#1b1910]/90 border border-amber-400/40 shadow-[0_4px_25px_rgba(0,0,0,0.5)] max-w-xl mx-auto lg:mx-0 flex items-start gap-3.5 text-left">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/25 via-purple-500/20 to-amber-600/20 border border-amber-400/60 flex items-center justify-center shrink-0 text-xl shadow-inner">
                ⚔️
              </div>
              <div className="space-y-1">
                <div className="font-cinzel text-xs sm:text-sm font-bold text-amber-200 flex items-center gap-2 flex-wrap">
                  <span>{t.hero.combatQuizPillTitle}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-400/70 text-[10px] text-emerald-300 font-sans font-bold uppercase tracking-wider shadow-sm">
                    Gameplay Clé • 100% Sagesse
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#e8dac1] leading-relaxed font-sans font-normal">
                  {t.hero.combatQuizPillDesc}
                </p>
              </div>
            </div>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#e0cfb4] pt-1 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e5c158] shrink-0" />
                <span className="font-bold text-amber-200">{t.hero.feature1Title}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e5c158] shrink-0" />
                <span>{t.hero.feature2Title}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e5c158] shrink-0" />
                <span>{t.hero.feature3Title}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e5c158] shrink-0" />
                <span>{t.hero.stat2Value} • 16-Bit</span>
              </div>
            </div>

            {/* Call To Action Buttons with Strict Hierarchy */}
            <div className="pt-3 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
                {/* Primary CTA: 1-Click Game Launch in Browser */}
                <button
                  id="btn-hero-launch"
                  onClick={() => {
                    trackPlayGameClick('hero_primary');
                    onOpenGame();
                  }}
                  className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-gradient-to-r from-[#e5c158] via-[#ffd700] to-[#c59b27] text-[#120e06] font-cinzel font-black text-base sm:text-lg tracking-wider shadow-[0_0_40px_rgba(212,175,55,0.65)] hover:shadow-[0_0_60px_rgba(212,175,55,0.95)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3 ring-2 ring-[#fff3cc]/80 group border border-[#ffffff]/40"
                  title={t.hero.ctaPlay}
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-[#120e06] group-hover:scale-110 transition-transform shrink-0" />
                  <span>{t.hero.ctaPlay}</span>
                </button>

                {/* Secondary Action: Video Discovery Button */}
                <button
                  id="btn-hero-video"
                  onClick={onScrollToVideo}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#1a1424]/90 hover:bg-[#281f38] border border-[#d4af37]/50 hover:border-[#ffd700] text-[#f5ebd7] font-cinzel font-bold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <Film className="w-4 h-4 text-[#e5c158]" />
                  <span>{t.hero.ctaVideo}</span>
                </button>
              </div>

              {/* Friction Reducers Micro-Copy */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1.5 text-xs text-[#dfcea9] pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {t.hero.frictionFree}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {t.hero.frictionDevice}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {t.hero.frictionBackup}
                </span>
              </div>

              {/* Discreet Secondary Link: Android APK (Non-intrusive & Reassuring) */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs">
                <a
                  id="btn-hero-apk"
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackApkDownloadClick('hero_discreet_link')}
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-800 dark:text-emerald-300 font-semibold hover:text-emerald-900 dark:hover:text-emerald-200 transition-colors underline underline-offset-4 decoration-emerald-500/50"
                  title="Télécharger l'application Android (Bêta)"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span>{t.hero.apkNote}</span>
                </a>

                <span className="text-stone-500 hidden sm:inline">•</span>

                <button
                  id="btn-hero-demo"
                  onClick={onScrollToDemo}
                  className="inline-flex items-center gap-1.5 text-xs text-purple-900 dark:text-purple-300 font-semibold hover:text-purple-950 dark:hover:text-purple-200 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" />
                  <span>{t.hero.ctaDemo} ↗</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Game Showcase Card / Frame (Phone Mockup) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md flex justify-center">
              
              {/* Phone Mockup Outer Frame */}
              <div className="relative w-[280px] sm:w-[320px] rounded-[2.5rem] border-[8px] border-[#1f1a29] bg-[#1f1a29] shadow-2xl shadow-[#d4af37]/10">
                {/* Outer decorative halo */}
                <div className="absolute -inset-6 bg-gradient-to-r from-[#d4af37]/20 via-[#e5c158]/10 to-[#c59b27]/20 rounded-[3rem] blur-2xl opacity-85 hover:opacity-100 transition duration-1000 animate-pulse-slow -z-10" />

                {/* iPhone-style Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30">
                  <div className="w-24 h-5 bg-[#1f1a29] rounded-b-xl"></div>
                </div>
                
                {/* Screen Content */}
                <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[9/16] group cursor-pointer border border-[#d4af37]/20">
                  
                  {/* Video Player */}
                  <div onClick={toggleHeroPlay} className="absolute inset-0">
                    <video
                      ref={heroVideoRef}
                      src="/game-assets/tiktok_promo.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      onPlay={() => setIsHeroPlaying(true)}
                      onPause={() => setIsHeroPlaying(false)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Controls Overlay */}
                  <div className="absolute bottom-5 right-4 z-20 flex flex-col gap-3">
                    {/* Sound Mute/Unmute */}
                    <button
                      onClick={toggleHeroMute}
                      className="p-3 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 text-white backdrop-blur-md shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
                      title={isHeroMuted ? "Activer le son" : "Couper le son"}
                    >
                      {isHeroMuted ? (
                        <VolumeX className="w-5 h-5 text-white/80" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-emerald-400" />
                      )}
                    </button>
                    {/* Play/Pause */}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleHeroPlay(); }}
                      className="p-3 rounded-full bg-gradient-to-r from-[#e5c158] to-[#c59b27] hover:scale-110 active:scale-95 border border-[#fff2b2] text-[#120e06] shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all cursor-pointer flex items-center justify-center"
                      title={isHeroPlaying ? "Mettre en pause" : "Lire la vidéo"}
                    >
                      {isHeroPlaying ? (
                        <Pause className="w-5 h-5 fill-[#120e06]" />
                      ) : (
                        <Play className="w-5 h-5 fill-[#120e06] translate-x-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Paused Indicator Center Icon */}
                  {!isHeroPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-16 h-16 rounded-full bg-[#e5c158]/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-[#e5c158]/50 animate-pulse">
                        <Play className="w-8 h-8 fill-stone-900 translate-x-1" />
                      </div>
                    </div>
                  )}
                  
                </div>
              </div>

              {/* Floating Pixel Characters Badges */}
              <div className="absolute bottom-10 -left-6 bg-[#161322] border border-amber-500/30 rounded-xl p-2.5 shadow-xl flex items-center gap-3 backdrop-blur-md hidden md:flex animate-float-slow z-20">
                <img
                  src="/game-assets/othman.png"
                  alt="Othmân pixel"
                  className="w-10 h-10 object-contain rounded-lg bg-amber-950/40 p-1 border border-amber-500/30"
                />
                <div>
                  <div className="text-xs font-bold text-amber-200 font-cinzel">{t.characters.othmanName}</div>
                  <div className="text-[10px] text-stone-400">{t.hero.othmanQuote}</div>
                </div>
              </div>

              <div className="absolute top-10 -right-6 bg-[#161322] border border-purple-500/40 rounded-xl p-2.5 shadow-xl flex items-center gap-3 backdrop-blur-md hidden md:flex z-20">
                <img
                  src="/game-assets/waswas.png"
                  alt="Waswâs pixel"
                  className="w-10 h-10 object-contain rounded-lg bg-purple-950/40 p-1 border border-purple-500/30"
                />
                <div>
                  <div className="text-xs font-bold text-purple-300 font-cinzel">{t.hero.waswasTitle}</div>
                  <div className="text-[10px] text-purple-900 dark:text-purple-300/80 font-medium">{t.hero.waswasRole}</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-xl bg-[#13111c]/80 border border-amber-500/20 hover:border-amber-400/40 transition-all hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center mb-3 text-purple-300 group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-amber-100 mb-1">
              {t.hero.featWaswasTitle}
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.hero.featWaswasDesc}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#13111c]/80 border border-amber-500/20 hover:border-amber-400/40 transition-all hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center mb-3 text-emerald-300 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-amber-100 mb-1">
              {t.hero.featBridgesTitle}
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.hero.featBridgesDesc}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#13111c]/80 border border-amber-500/20 hover:border-amber-400/40 transition-all hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center mb-3 text-amber-300 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-amber-100 mb-1">
              {t.hero.featCrossroadsTitle}
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.hero.featCrossroadsDesc}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#13111c]/80 border border-amber-500/20 hover:border-amber-400/40 transition-all hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-lg bg-sky-950/60 border border-sky-500/30 flex items-center justify-center mb-3 text-sky-300 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-amber-100 mb-1">
              {t.hero.featKnowledgeTitle}
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.hero.featKnowledgeDesc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
