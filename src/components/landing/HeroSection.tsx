import { Play, Sparkles, Shield, HeartHandshake, Compass, CheckCircle2, Download, Smartphone, Film } from 'lucide-react';
import { GAME_URL, APK_DOWNLOAD_URL } from '../../data/gameData';
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
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background with layered gradients and authentic game landscape */}
      <div className="absolute inset-0 z-0">
        <img
          src="/game-assets/vallee.jpg"
          alt="Paysage de la vallée de NOUR"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Cinematic Vignettes and Gold/Purple Glow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a10] via-[#0b0a10]/80 to-[#0b0a10]/60" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_30%] from-amber-500/15 via-transparent to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines, Lore & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Badges Bar */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {t.hero.stat1Label} ({t.hero.stat1Value})
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-950/50 border border-amber-500/30 text-amber-200 text-xs font-medium">
                {t.hero.badge}
              </span>
            </div>

            {/* Title / Logo Display */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <h1 className="font-cinzel text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-500 drop-shadow-[0_4px_24px_rgba(245,158,11,0.35)]">
                  NOUR
                </h1>
                <span className="font-amiri text-3xl xs:text-4xl sm:text-6xl text-amber-400 font-bold leading-none select-none drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                  نُور
                </span>
              </div>
              <p className="font-cinzel text-lg sm:text-2xl text-amber-200/90 font-semibold tracking-wide">
                {t.hero.titleLine1} — {t.hero.titleLine2}
              </p>
            </div>

            {/* Compelling Narrative Pitch */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-normal">
              {t.hero.description}
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-300/90 pt-1 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.feature1Title}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.feature2Title}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.feature3Title}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.stat2Value} • 16-Bit</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
              <button
                id="btn-hero-launch"
                onClick={onOpenGame}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-stone-950 font-cinzel font-extrabold text-sm sm:text-base tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_45px_rgba(245,158,11,0.8)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5 fill-stone-950" />
                <span>{t.hero.ctaPlay}</span>
              </button>

              <a
                id="btn-hero-apk"
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-800/80 hover:bg-emerald-700/90 border border-emerald-400/50 text-emerald-100 font-cinzel font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-300" />
                <span>{t.gameplayVideo.downloadApk}</span>
              </a>

              <button
                id="btn-hero-video"
                onClick={onScrollToVideo}
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/40 hover:border-amber-400 text-amber-200 font-cinzel font-semibold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              >
                <Film className="w-4 h-4 text-amber-400" />
                <span>{t.hero.ctaVideo}</span>
              </button>

              <button
                id="btn-hero-demo"
                onClick={onScrollToDemo}
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800/90 border border-amber-500/30 hover:border-amber-400/60 text-amber-200 font-cinzel font-semibold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.hero.ctaDemo}</span>
              </button>
            </div>

            <p className="text-[11px] text-amber-300/60 text-center lg:text-left">
              * Aucune création de compte requise • Sauvegarde automatique • Également disponible en APK Android
            </p>

          </div>

          {/* Right Column: Game Showcase Card / Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/40 via-purple-600/30 to-amber-500/40 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-[#14121d] border-2 border-amber-500/40 overflow-hidden shadow-2xl">
                
                {/* Official Poster Visual */}
                <div className="relative aspect-[4/5] overflow-hidden group">
                  {/* Quick Video Peek Badge */}
                  <button
                    onClick={onScrollToVideo}
                    className="absolute top-3 right-3 z-20 px-3 py-1.5 rounded-full bg-black/80 hover:bg-amber-950/90 border border-amber-500/50 hover:border-amber-400 text-amber-200 text-xs font-cinzel font-bold flex items-center gap-1.5 backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    title="Voir l'extrait vidéo de gameplay"
                  >
                    <Play className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>Gameplay (32s)</span>
                  </button>

                  <img
                    src="/game-assets/hero_landing.png"
                    alt="Affiche officielle de NOUR"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14121d] via-transparent to-black/20" />
                  
                  {/* Floating Action / Play Overlay Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0f0d17]/90 backdrop-blur-md border border-amber-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 font-cinzel block">
                          Version Web Officielle
                        </span>
                        <h3 className="text-sm font-bold text-stone-100 font-cinzel">
                          Chapitre 1 : Vaincre la solitude
                        </h3>
                        <p className="text-[11px] text-stone-400">
                          Accompagnez Othmân dès aujourd'hui
                        </p>
                      </div>
                      <button
                        onClick={onOpenGame}
                        className="p-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-transform hover:scale-110 active:scale-95 cursor-pointer shrink-0"
                        title="Démarrer la partie"
                      >
                        <Play className="w-5 h-5 fill-stone-950" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Sub-Strip */}
                <div className="p-4 bg-[#0d0b13] border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Serveur Actif</span>
                  </div>
                  <a
                    href={APK_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 hover:underline"
                    title="Télécharger l'APK Android depuis Google Drive"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>APK Android (Drive) ↗</span>
                  </a>
                  <a 
                    href={GAME_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-300 hover:text-amber-200 underline text-xs"
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
                  <div className="text-xs font-bold text-amber-200 font-cinzel">Othmân</div>
                  <div className="text-[10px] text-stone-400">« Le chemin commence... »</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-[#161322] border border-purple-500/40 rounded-xl p-2.5 shadow-xl flex items-center gap-3 backdrop-blur-md hidden sm:flex">
                <img
                  src="/game-assets/waswas.png"
                  alt="Waswâs pixel"
                  className="w-10 h-10 object-contain rounded-lg bg-purple-950/40 p-1 border border-purple-500/30"
                />
                <div>
                  <div className="text-xs font-bold text-purple-300 font-cinzel">Le Waswâs</div>
                  <div className="text-[10px] text-purple-300/70">L'Ombre intérieure</div>
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
              Combat contre le Waswâs
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Un système de jauge psychologique innovant où vous terrassez les murmures du doute et de la honte par la lucidité et la sérénité.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#13111c]/80 border border-amber-500/20 hover:border-amber-400/40 transition-all hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center mb-3 text-emerald-300 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-amber-100 mb-1">
              Les « Ponts de Nour »
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Le jeu brise l'écran : gagnez des points de cœur en accomplissant de réelles actions quotidiennes (ordonner son lit, sourire, écouter).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#13111c]/80 border border-amber-500/20 hover:border-amber-400/40 transition-all hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center mb-3 text-amber-300 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-amber-100 mb-1">
              Le Carrefour du Village
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Un poteau indicateur propose à Othmân 5 directions : rompre la solitude, le Hilm (douceur), le Sabr (patience), le Birr (bonté envers les parents) et le grand Climax.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#13111c]/80 border border-amber-500/20 hover:border-amber-400/40 transition-all hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-lg bg-sky-950/60 border border-sky-500/30 flex items-center justify-center mb-3 text-sky-300 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-amber-100 mb-1">
              Le Livre du Savoir
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Un recueil interactif fondé sur le Noble Coran et les hadiths authentiques (Bukhâri & Muslim) pour cultiver l'Adab au quotidien.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
