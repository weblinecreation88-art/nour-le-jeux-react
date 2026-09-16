import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Compass, Sparkles, BookOpen, Users, ShieldAlert, Layers, Download, Crown, Menu, X, Check, MessageCircleHeart } from 'lucide-react';
import { GAME_URL, APK_DOWNLOAD_URL } from '../../data/gameData';
import { trackApkDownloadClick, trackPlayGameClick } from '../../utils/analytics';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../i18n/translations';

interface NavbarProps {
  onOpenGame: () => void;
}

// Realistic High-Definition Vector Flags
export const RealFlag = ({ lang, className = "w-5 h-3.5" }: { lang: Language; className?: string }) => {
  if (lang === 'fr') {
    return (
      <svg className={`${className} rounded-[3px] shadow-sm inline-block shrink-0 border border-white/20`} viewBox="0 0 900 600" aria-label="Drapeau Français">
        <rect width="300" height="600" fill="#002654" />
        <rect x="300" width="300" height="600" fill="#FFFFFF" />
        <rect x="600" width="300" height="600" fill="#CE1126" />
      </svg>
    );
  }
  if (lang === 'en') {
    return (
      <svg className={`${className} rounded-[3px] shadow-sm inline-block shrink-0 border border-white/20`} viewBox="0 0 60 30" aria-label="English / UK Flag">
        <clipPath id="uk-clip">
          <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <clipPath id="uk-diag">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
        </clipPath>
        <g clipPath="url(#uk-clip)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-diag)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
      </svg>
    );
  }
  // Arabic Flag (Saudi Emerald Green with elegant white Arabic Shahada & sword)
  return (
    <svg className={`${className} rounded-[3px] shadow-sm inline-block shrink-0 border border-white/20`} viewBox="0 0 600 400" aria-label="العلم العربي">
      <rect width="600" height="400" fill="#006C35" />
      <text x="300" y="205" textAnchor="middle" fill="#FFFFFF" fontSize="90" fontWeight="bold" fontFamily="Amiri, Cairo, serif">لا إله إلا الله</text>
      <path d="M160,280 L440,280 L430,268 L430,292 Z M405,260 L405,300" stroke="#FFFFFF" strokeWidth="7" fill="#FFFFFF" strokeLinecap="round" />
    </svg>
  );
};

export default function Navbar({ onOpenGame }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize to large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generative soothing ambient sound
  const toggleAmbientSound = () => {
    try {
      if (isAudioPlaying) {
        if (audioCtx) {
          audioCtx.close();
          setAudioCtx(null);
        }
        setIsAudioPlaying(false);
      } else {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
        masterGain.connect(ctx.destination);

        const freqs = [146.83, 220.0, 261.63, 293.66, 349.23, 440.0];
        const intervals: number[] = [];

        const playHarmonic = () => {
          if (ctx.state === 'closed') return;
          const osc = ctx.createOscillator();
          const noteGain = ctx.createGain();
          const f = freqs[Math.floor(Math.random() * freqs.length)];
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, ctx.currentTime);

          noteGain.gain.setValueAtTime(0, ctx.currentTime);
          noteGain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 1.5);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5);

          osc.connect(noteGain);
          noteGain.connect(masterGain);

          osc.start();
          osc.stop(ctx.currentTime + 4.8);
        };

        playHarmonic();
        const intervalId = window.setInterval(playHarmonic, 2800);
        intervals.push(intervalId);

        setAudioCtx(ctx);
        setIsAudioPlaying(true);
      }
    } catch {
      setIsAudioPlaying(false);
    }
  };

  // Essential desktop links to guarantee no overflow
  const desktopNavLinks = [
    { label: t.navbar.motDuConcepteur, href: "#mot-du-concepteur", icon: MessageCircleHeart },
    { label: t.navbar.gameplay, href: "#gameplay-video", icon: Play },
    { label: t.navbar.adventure, href: "#histoire", icon: Compass },
    { label: t.navbar.chapters, href: "#chapitres", icon: Layers },
    { label: t.navbar.offers, href: "#tarifs", icon: Crown },
  ];

  // Full links in mobile drawer
  const allNavLinks = [
    { label: t.navbar.motDuConcepteur, href: "#mot-du-concepteur", icon: MessageCircleHeart },
    { label: t.navbar.gameplay, href: "#gameplay-video", icon: Play },
    { label: t.navbar.adventure, href: "#histoire", icon: Compass },
    { label: t.navbar.characters, href: "#personnages", icon: Users },
    { label: t.navbar.mechanics, href: "#mecaniques", icon: Sparkles },
    { label: t.navbar.demoWaswas, href: "#demo", icon: ShieldAlert },
    { label: t.navbar.chapters, href: "#chapitres", icon: Layers },
    { label: t.navbar.wisdomBook, href: "#savoir", icon: BookOpen },
    { label: t.navbar.offers, href: "#tarifs", icon: Crown },
  ];

  const languagesList: { code: Language; label: string; shortLabel: string }[] = [
    { code: 'fr', label: 'Français', shortLabel: 'FR' },
    { code: 'en', label: 'English', shortLabel: 'EN' },
    { code: 'ar', label: 'العربية', shortLabel: 'عربي' }
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a080e]/95 backdrop-blur-md border-b border-[#d4af37]/35 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.9)]' 
          : 'bg-gradient-to-b from-[#09070c]/95 via-[#09070c]/70 to-transparent pt-3 pb-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group focus:outline-none shrink-0">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#d4af37]/60 bg-gradient-to-br from-[#d4af37]/25 via-[#241a12] to-[#120e17] flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:border-[#ffd700] transition-colors">
            <span className="font-amiri text-xl sm:text-2xl font-bold text-[#ffd700] leading-none group-hover:scale-110 transition-transform">
              نور
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#fbf6ec] group-hover:text-[#ffd700] transition-colors flex items-center gap-1.5">
              NOUR
              <span className="text-[9px] uppercase font-cinzel font-bold tracking-widest px-1.5 py-0.2 rounded-full bg-[#1b140e] border border-[#d4af37]/40 text-[#ffd700]">
                RPG
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Compact & Non-overflowing) */}
        <nav className="hidden xl:flex items-center gap-1">
          {desktopNavLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-xs font-cinzel font-medium text-[#d8c29d] hover:text-[#fbf6ec] hover:bg-[#d4af37]/10 rounded-lg transition-all flex items-center gap-1.5"
              >
                <Icon className="w-3.5 h-3.5 text-[#e5c158] shrink-0" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Real Flags */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          
          {/* Real Flags Language Switcher (Visible on All Screens!) */}
          <div className="flex items-center bg-[#130f18] border border-[#d4af37]/35 rounded-xl p-1 gap-1 shadow-inner">
            {languagesList.map((l) => {
              const isActive = language === l.code;
              return (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  title={`Passer en ${l.label}`}
                  className={`flex items-center gap-1 px-1.5 sm:px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#d4af37] text-stone-950 shadow-[0_0_12px_rgba(212,175,55,0.6)] scale-105' 
                      : 'text-[#d8c29d] hover:bg-[#d4af37]/15 hover:text-[#fbf6ec] opacity-80 hover:opacity-100'
                  }`}
                >
                  <RealFlag lang={l.code} className="w-4 h-3 sm:w-5 sm:h-3.5" />
                  <span className="hidden md:inline uppercase font-cinzel text-[10px] tracking-wider">{l.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Ambient Sound Button */}
          <button
            id="btn-ambient-audio"
            onClick={toggleAmbientSound}
            aria-label="Ambiance sonore"
            title={isAudioPlaying ? t.navbar.musicOff : t.navbar.musicOn}
            className="p-2 sm:px-2.5 sm:py-1.5 rounded-xl border border-[#d4af37]/35 bg-[#1b140e]/60 hover:bg-[#d4af37]/20 text-[#e5c158] hover:text-[#ffd700] text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {isAudioPlaying ? (
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#e5c158]" />
            )}
            <span className="hidden lg:inline text-[11px] font-cinzel">{isAudioPlaying ? t.navbar.musicOn : t.navbar.musicOff}</span>
          </button>

          {/* Direct Play Button (AC Mirage Gold CTA) */}
          <button
            id="btn-nav-play"
            onClick={() => {
              trackPlayGameClick('navbar_play');
              onOpenGame();
            }}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#e5c158] via-[#ffd700] to-[#c59b27] text-stone-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(229,193,88,0.45)] hover:shadow-[0_0_25px_rgba(229,193,88,0.8)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 ring-1 ring-[#ffd700]/60"
          >
            <Play className="w-3.5 h-3.5 fill-stone-950 shrink-0" />
            <span className="font-cinzel">{t.navbar.play}</span>
          </button>

          {/* APK Android Button (Desktop) */}
          <a
            id="btn-nav-apk"
            href={APK_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackApkDownloadClick('navbar_desktop')}
            title="Télécharger l'APK Android (Google Drive)"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-[#13221b] hover:bg-[#1b3227] border border-emerald-500/50 text-emerald-200 text-xs font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md font-cinzel"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="hidden md:inline">{t.navbar.apkAndroid}</span>
          </a>

          {/* Hamburger Menu Toggle (Visible below xl) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl border border-[#d4af37]/40 text-[#fce8a6] hover:bg-[#d4af37]/15 cursor-pointer transition-colors"
            aria-label="Ouvrir le menu"
            title="Menu de navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#ffd700]" />
            ) : (
              <Menu className="w-5 h-5 text-[#ffd700]" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#100d18]/98 border-b border-amber-500/30 px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Prominent Real Flags Selector in Drawer */}
          <div className="p-3 bg-amber-950/40 rounded-2xl border border-amber-500/30 space-y-2">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
              Choix de la Langue / Language / اللغة
            </span>
            <div className="grid grid-cols-3 gap-2">
              {languagesList.map((l) => {
                const isActive = language === l.code;
                return (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                    }}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-amber-500 text-stone-950 border-amber-400 font-extrabold shadow-md scale-102' 
                        : 'bg-[#151221] border-amber-500/20 text-stone-300 hover:bg-amber-500/10'
                    }`}
                  >
                    <RealFlag lang={l.code} className="w-7 h-5" />
                    <span className="text-xs font-semibold">{l.label}</span>
                    {isActive && <Check className="w-3.5 h-3.5 text-stone-950" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-2">
            {allNavLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-amber-100/90 hover:text-amber-200 hover:bg-amber-500/15 border border-amber-500/15 bg-[#14111f] transition-all"
                >
                  <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile CTAs */}
          <div className="pt-2 border-t border-amber-500/20 flex flex-col gap-2.5">
            <button
              onClick={() => {
                trackPlayGameClick('navbar_mobile_play');
                setMobileMenuOpen(false);
                onOpenGame();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 font-bold text-center text-xs uppercase tracking-wider font-cinzel flex items-center justify-center gap-2 shadow-lg hover:scale-102 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-stone-950" />
              {t.navbar.play}
            </button>

            <a
              href={APK_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackApkDownloadClick('navbar_mobile');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-emerald-900/90 border border-emerald-400/50 text-emerald-100 font-bold text-center text-xs uppercase tracking-wider font-cinzel flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-300" />
              {t.navbar.apkAndroid} (Drive)
            </a>

            <a
              href={GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-amber-300/80 hover:underline py-1"
            >
              playnour.online ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
