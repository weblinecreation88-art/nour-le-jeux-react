import { Play, Sparkles, Shield, HeartHandshake, Compass, CheckCircle2, Download, Smartphone, Film, Star, ShieldCheck } from 'lucide-react';
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
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Cinematic Desert Dust, Sand Shimmer and Warm Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b14] via-[#0e0b14]/75 to-[#0e0b14]/50" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_25%] from-[#d4af37]/20 via-[#c59b27]/5 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-gradient-to-b from-[#e5c158]/15 to-[#c59b27]/5 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines, Lore & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Social Proof & Trust Badges Bar */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a231b]/90 border border-emerald-400/60 text-emerald-200 text-xs font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {t.hero.trustRating}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#241a10]/90 border border-[#d4af37]/60 text-[#f5ebd7] text-xs font-semibold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                {t.hero.studioVoicesBadge}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1e1128]/90 border border-purple-400/50 text-purple-200 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
                {t.hero.adFreeBadge}
              </span>
            </div>

            {/* Title / Logo Display with Desert Gold & Cream Calligraphy */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <h1 className="font-cinzel text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#fefbf6] via-[#f5ebd7] to-[#d4af37] drop-shadow-[0_4px_30px_rgba(212,175,55,0.45)]">
                  NOUR
                </h1>
                <span className="font-amiri text-4xl xs:text-5xl sm:text-6xl text-[#f3e5ca] font-bold leading-none select-none drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                  نُور
                </span>
              </div>
              <p className="font-cinzel text-lg sm:text-2xl text-[#e8d8be] font-semibold tracking-wide">
                {t.hero.titleLine1} — {t.hero.titleLine2}
              </p>
            </div>

            {/* Compelling Narrative Pitch in Warm Cream */}
            <p className="text-base sm:text-lg text-[#ede2cf] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-normal">
              {t.hero.description}
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#e0cfb4] pt-1 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e5c158] shrink-0" />
                <span>{t.hero.feature1Title}</span>
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

            {/* Call To Action Buttons with AC Mirage Luxury Gold Styling */}
            <div className="pt-3 space-y-3">
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

                {/* Secondary CTA: APK Download for Android Offline */}
                <a
                  id="btn-hero-apk"
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackApkDownloadClick('hero_secondary')}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-gradient-to-r from-[#0d3b2a] to-[#09261a] hover:from-[#114b35] hover:to-[#0d3b2a] border border-emerald-400/60 text-emerald-100 font-cinzel font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  title={t.hero.downloadApk}
                >
                  <Download className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>{t.hero.downloadApk}</span>
                </a>
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

              {/* Subtle Previews Sub-bar */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs">
                <button
                  id="btn-hero-video"
                  onClick={onScrollToVideo}
                  className="px-3.5 py-1.5 rounded-lg bg-[#191423]/90 hover:bg-[#251d34] border border-[#d4af37]/40 hover:border-[#e5c158] text-[#f5ebd7] font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
                >
                  <Film className="w-3.5 h-3.5 text-[#e5c158]" />
                  <span>{t.hero.ctaVideo} (32s)</span>
                </button>

                <button
                  id="btn-hero-demo"
                  onClick={onScrollToDemo}
                  className="px-3.5 py-1.5 rounded-lg bg-[#191423]/90 hover:bg-[#251d34] border border-purple-400/40 hover:border-purple-300 text-purple-200 font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                  <span>{t.hero.ctaDemo}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Game Showcase Card / Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative halo with warm golden desert sand glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#d4af37]/40 via-[#e5c158]/30 to-[#c59b27]/40 rounded-2xl blur-lg opacity-85 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />

              {/* Main Card Container with Gilded Relic Frame & Corner Accents */}
              <div className="gilded-relic-frame relative rounded-2xl bg-gradient-to-b from-[#1b1527] via-[#151020] to-[#0e0a15] border-2 border-[#d4af37]/50 overflow-hidden shadow-2xl">
                
                {/* Official Poster Visual */}
                <div className="relative aspect-[4/5] overflow-hidden group">
                  {/* Quick Video Peek Badge */}
                  <button
                    onClick={onScrollToVideo}
                    className="absolute top-3 right-3 z-20 px-3 py-1.5 rounded-full bg-[#0e0a15]/90 hover:bg-[#1f162c] border border-[#d4af37]/70 text-[#f5ebd7] text-xs font-cinzel font-bold flex items-center gap-1.5 backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    title={t.hero.cardBadge}
                  >
                    <Play className="w-3.5 h-3.5 fill-[#e5c158] text-[#e5c158]" />
                    <span>{t.hero.cardBadge}</span>
                  </button>

                  <img
                    src="/game-assets/hero_landing.png"
                    alt="Affiche officielle de NOUR : La Voie de la Sagesse"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151020] via-transparent to-black/30" />
                  
                  {/* Floating Action / Play Overlay Banner in Baghdad Ink & Parchment */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0f0b17]/95 backdrop-blur-md border border-[#d4af37]/40 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#e5c158] font-cinzel block">
                          {t.hero.cardOfficialWeb}
                        </span>
                        <h3 className="text-sm font-bold text-[#fbf6ec] font-cinzel">
                          {t.hero.cardChapter1}
                        </h3>
                        <p className="text-[11px] text-[#dfcea9]">
                          {t.hero.cardJoinOthman}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          trackPlayGameClick('hero_card');
                          onOpenGame();
                        }}
                        className="p-3 rounded-xl bg-gradient-to-r from-[#e5c158] to-[#c59b27] text-[#120e06] shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-transform hover:scale-110 active:scale-95 cursor-pointer shrink-0 border border-[#fff2b2]"
                        title={t.hero.ctaPlay}
                      >
                        <Play className="w-5 h-5 fill-[#120e06]" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Sub-Strip */}
                <div className="p-4 bg-[#0d0914] border-t border-[#d4af37]/25 flex flex-wrap items-center justify-between gap-2 text-xs text-[#d8c29d]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium text-emerald-300">{t.hero.cardActiveServer}</span>
                  </div>
                  <a
                    href={APK_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackApkDownloadClick('hero_badge')}
                    className="text-emerald-300 hover:text-emerald-200 font-medium flex items-center gap-1 hover:underline"
                    title={t.hero.cardApkDrive}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>{t.hero.cardApkDrive}</span>
                  </a>
                  <a 
                    href={GAME_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#e5c158] hover:text-[#fbf6ec] underline text-xs font-cinzel"
                  >
                    playnour.online ↗
                  </a>
                </div>

              </div>

              {/* Floating Pixel Characters Badges */}
              <div className="absolute -bottom-6 -left-6 bg-[#161322] border border-amber-500/30 rounded-xl p-2.5 shadow-xl flex items-center gap-3 backdrop-blur-md hidden sm:flex animate-float-slow">
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

              <div className="absolute -top-6 -right-6 bg-[#161322] border border-purple-500/40 rounded-xl p-2.5 shadow-xl flex items-center gap-3 backdrop-blur-md hidden sm:flex">
                <img
                  src="/game-assets/waswas.png"
                  alt="Waswâs pixel"
                  className="w-10 h-10 object-contain rounded-lg bg-purple-950/40 p-1 border border-purple-500/30"
                />
                <div>
                  <div className="text-xs font-bold text-purple-300 font-cinzel">{t.hero.waswasTitle}</div>
                  <div className="text-[10px] text-purple-300/70">{t.hero.waswasRole}</div>
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
