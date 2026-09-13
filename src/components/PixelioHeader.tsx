import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Zap, Compass, Sparkles, Globe } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { PIXEL_ASSETS, CustomAssetsConfig } from '../utils/assets';
import { useLanguage } from '../context/LanguageContext';
import { gameTranslations } from '../i18n/gameTranslations';
import { RealFlag } from './landing/Navbar';
import { Language } from '../i18n/translations';

interface PixelioHeaderProps {
  level: number;
  xp: number;
  maxXp?: number;
  lightPercent?: number;
  streakDays?: number;
  waswasXp?: number;
  onOpenMap?: () => void;
  onOpenKnowledge?: () => void;
  onOpenQuiz?: () => void;
  onOpenLanding?: () => void;
  customAssets?: CustomAssetsConfig;
  hasSpiritualGatePending?: boolean;
}

export const PixelioHeader: React.FC<PixelioHeaderProps> = ({
  level,
  xp,
  maxXp = 500,
  waswasXp = 0,
  onOpenMap,
  onOpenKnowledge,
  onOpenQuiz,
  onOpenLanding,
  customAssets,
  hasSpiritualGatePending = false
}) => {
  const heroAvatar = customAssets?.characters?.personnage || PIXEL_ASSETS.traveler;

  // Animated progressive XP roll-up
  const [displayedXp, setDisplayedXp] = useState(xp);
  const [isGaining, setIsGaining] = useState(false);
  const [lastGain, setLastGain] = useState<number | null>(null);
  const prevXpRef = useRef(xp);

  // Animated Waswâs XP & pulse
  const [displayedWaswasXp, setDisplayedWaswasXp] = useState(waswasXp);
  const [isWaswasGaining, setIsWaswasGaining] = useState(false);
  const [isWaswasDecreasing, setIsWaswasDecreasing] = useState(false);
  const [lastWaswasGain, setLastWaswasGain] = useState<number | null>(null);
  const [lastWaswasDecrease, setLastWaswasDecrease] = useState<number | null>(null);
  const prevWaswasXpRef = useRef(waswasXp);

  useEffect(() => {
    const diff = xp - prevXpRef.current;
    if (diff > 0) {
      setIsGaining(true);
      setLastGain(diff);

      const startVal = prevXpRef.current;
      const endVal = xp;
      const duration = 900; // 900ms roll-up
      const startTime = performance.now();

      const animateRoll = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        // Smooth easeOutQuad
        const ease = 1 - (1 - progress) * (1 - progress);
        const currentVal = Math.round(startVal + (endVal - startVal) * ease);
        setDisplayedXp(currentVal);

        if (progress < 1) {
          requestAnimationFrame(animateRoll);
        } else {
          setDisplayedXp(endVal);
          setTimeout(() => {
            setIsGaining(false);
            setLastGain(null);
          }, 400);
        }
      };

      requestAnimationFrame(animateRoll);
    } else {
      setDisplayedXp(xp);
    }

    prevXpRef.current = xp;
  }, [xp]);

  useEffect(() => {
    const diff = waswasXp - prevWaswasXpRef.current;
    if (diff > 0) {
      setIsWaswasGaining(true);
      setIsWaswasDecreasing(false);
      setLastWaswasGain(diff);
      setDisplayedWaswasXp(waswasXp);
      const timer = setTimeout(() => {
        setIsWaswasGaining(false);
        setLastWaswasGain(null);
      }, 2500);
      return () => clearTimeout(timer);
    } else if (diff < 0) {
      setIsWaswasDecreasing(true);
      setIsWaswasGaining(false);
      setLastWaswasDecrease(Math.abs(diff));
      setDisplayedWaswasXp(waswasXp);
      const timer = setTimeout(() => {
        setIsWaswasDecreasing(false);
        setLastWaswasDecrease(null);
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setDisplayedWaswasXp(waswasXp);
    }
    prevWaswasXpRef.current = waswasXp;
  }, [waswasXp]);

  const { language, isRtl, setLanguage } = useLanguage();
  const t = gameTranslations[language]?.hud || gameTranslations.fr.hud;
  const tNav = gameTranslations[language]?.nav || gameTranslations.fr.nav;

  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setShowLangMenu(false);
      }
    };
    if (showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLangMenu]);

  const xpPercent = Math.min(100, Math.round((displayedXp / maxXp) * 100));

  return (
    <header
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full bg-black/55 backdrop-blur-md border-b border-amber-500/30 px-1.5 sm:px-4 pt-[max(0.35rem,env(safe-area-inset-top))] pb-1 sm:py-2 flex items-center justify-between shadow-lg z-40 select-none text-white transition-all shrink-0"
    >
      {/* Left: Avatar & Dual Gauges (Othmân Nour & Waswâs Ombre) */}
      <div className="flex items-center gap-1 sm:gap-3 shrink-0">
        {/* Avatar badge */}
        <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-950/70 border-2 border-amber-400/60 overflow-hidden p-0.5 relative shadow-md shrink-0">
          <img
            src={heroAvatar}
            alt="Le Voyageur"
            className="w-full h-full object-cover rounded-md sm:rounded-lg"
          />
        </div>

        {/* 1. Othmân XP Block (Gleaming Pure Gold) */}
        <div
          id="pixelio-header-xp-target"
          className={`flex flex-col justify-center relative transition-transform duration-300 ${
            isGaining ? 'scale-105 drop-shadow-[0_0_14px_#f59e0b]' : ''
          }`}
        >
          <div className="flex items-center gap-1 sm:gap-1.5 relative">
            <span className="text-[8px] sm:text-[10px] font-black text-amber-950 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-300 px-1 sm:px-1.5 py-0.2 rounded-md border border-yellow-200 font-mono shadow-xs uppercase">
              {t.level.slice(0, 4)}. {level}
            </span>
            <span
              className={`text-[8px] sm:text-[10px] font-bold font-mono transition-colors duration-200 ${
                isGaining ? 'text-yellow-300 font-black scale-105' : 'text-amber-100/90'
              }`}
            >
              {displayedXp}/{maxXp}
            </span>

            {/* Floating gain badge when XP increases */}
            {isGaining && lastGain && (
              <span className="absolute top-full mt-1.5 left-2 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-200 text-amber-950 font-black text-[8px] sm:text-xs font-mono px-1.5 py-0.2 rounded-full border border-yellow-100 shadow-[0_0_12px_rgba(250,204,21,0.9)] animate-bounce z-50 whitespace-nowrap">
                +{lastGain} XP 🪙
              </span>
            )}
          </div>

          {/* Bar 1: Pure Radiant Golden XP Bar */}
          <div
            className={`w-12 xs:w-16 sm:w-28 h-2 sm:h-2.5 bg-black/60 rounded-full border overflow-hidden relative mt-0.5 sm:mt-1 shadow-inner transition-all duration-300 ${
              isGaining ? 'border-yellow-200 ring-2 ring-yellow-400/80 shadow-[0_0_14px_#fbbf24]' : 'border-amber-500/50'
            }`}
          >
            <div
              className={`h-full rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(250,204,21,0.9)] ${
                isGaining
                  ? 'bg-gradient-to-r from-yellow-300 via-white to-yellow-400 animate-pulse'
                  : 'bg-gradient-to-r from-yellow-500 via-amber-300 via-yellow-200 to-amber-400'
              }`}
              style={{ width: `${xpPercent}%` }}
            />
          </div>
        </div>

        {/* 2. Waswâs XP Block (Purple) - High Visibility on Mobile */}
        <div
          title={`${t.waswasGauge} : ${displayedWaswasXp}/100`}
          className={`flex flex-col justify-center relative transition-transform duration-300 ${
            isWaswasGaining
              ? 'scale-105 drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]'
              : isWaswasDecreasing
              ? 'scale-95 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]'
              : ''
          }`}
        >
          <div className="flex items-center gap-1 sm:gap-1.5 relative">
            <span className="text-[7.5px] sm:text-[9.5px] font-black text-fuchsia-200 bg-purple-950/90 px-1 sm:px-1.5 py-0.2 rounded-md border border-purple-400/60 font-mono shadow-xs flex items-center gap-0.5 sm:gap-1">
              <span>🌑</span>
              <span className="tracking-wide">{t.waswasGauge.slice(0, 7)}</span>
            </span>
            <span
              className={`text-[8px] sm:text-[10px] font-bold font-mono transition-colors duration-200 ${
                isWaswasGaining
                  ? 'text-fuchsia-300 font-black scale-105'
                  : isWaswasDecreasing
                  ? 'text-emerald-300 font-bold'
                  : 'text-purple-300/90'
              }`}
            >
              {displayedWaswasXp}/100
            </span>

            {/* Floating Waswâs pulse badge when Waswâs increases */}
            {isWaswasGaining && (
              <span className="absolute top-full mt-1.5 right-0 bg-gradient-to-r from-purple-800 to-fuchsia-700 text-purple-100 font-black text-[8px] sm:text-[9px] font-mono px-1.5 py-0.2 rounded-full border border-purple-400 shadow-md animate-bounce z-50 whitespace-nowrap">
                +{lastWaswasGain || 15} 🌑
              </span>
            )}

            {/* Floating Waswâs purification badge when Waswâs decreases */}
            {isWaswasDecreasing && (
              <span className="absolute top-full mt-1.5 right-0 bg-gradient-to-r from-emerald-800 to-teal-700 text-emerald-100 font-black text-[8px] sm:text-[9px] font-mono px-1.5 py-0.2 rounded-full border border-emerald-400 shadow-md animate-bounce z-50 whitespace-nowrap">
                -{lastWaswasDecrease || 15} ✨
              </span>
            )}
          </div>

          {/* Bar 2: Waswâs Shadow Bar (Purple) */}
          <div
            className={`w-12 xs:w-16 sm:w-28 h-2 sm:h-2.5 bg-purple-950/90 rounded-full border overflow-hidden relative mt-0.5 sm:mt-1 shadow-inner transition-all duration-300 ${
              isWaswasGaining
                ? 'border-purple-300 ring-2 ring-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]'
                : isWaswasDecreasing
                ? 'border-emerald-400 ring-1 ring-emerald-400/60 shadow-[0_0_8px_rgba(52,211,153,0.5)]'
                : 'border-purple-600/70 shadow-[0_0_6px_rgba(147,51,234,0.4)]'
            }`}
          >
            <div
              className={`h-full rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(168,85,247,0.8)] ${
                isWaswasGaining
                  ? 'bg-gradient-to-r from-purple-500 via-fuchsia-300 to-purple-400 animate-pulse'
                  : isWaswasDecreasing
                  ? 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600'
                  : 'bg-gradient-to-r from-purple-800 via-fuchsia-600 to-purple-500'
              }`}
              style={{ width: `${Math.max(displayedWaswasXp > 0 ? 6 : 0, Math.min(100, displayedWaswasXp))}%` }}
            />
          </div>
        </div>
      </div>

      {/* Right: Actions (Language Switcher, Carte, Quiz, Savoir) */}
      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
        {/* In-Game Language Switcher */}
        <div className="relative" ref={langMenuRef}>
          <button
            onClick={() => {
              soundManager.playSelect();
              setShowLangMenu(!showLangMenu);
            }}
            title={t.language}
            className="px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-xl bg-black/40 hover:bg-black/60 border border-amber-400/40 hover:border-amber-400 text-amber-200 transition-all cursor-pointer shadow-sm flex items-center gap-1 active:scale-95 text-[10px] sm:text-xs shrink-0"
          >
            <RealFlag lang={language} className="w-4 h-3 rounded-[2px]" />
            <span className="font-bold uppercase font-mono text-[9px] sm:text-[11px]">{language}</span>
          </button>

          {showLangMenu && (
            <div className={`absolute top-full mt-1.5 ${isRtl ? 'left-0' : 'right-0'} bg-[#2d1b0e] border-2 border-amber-400/60 rounded-xl p-1.5 shadow-2xl flex flex-col gap-1 z-50 min-w-[110px] animate-in zoom-in-95 duration-150`}>
              <button
                onClick={() => {
                  setLanguage('fr');
                  setShowLangMenu(false);
                  soundManager.playSelect();
                }}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all text-left w-full ${
                  language === 'fr' ? 'bg-amber-500 text-amber-950 font-black' : 'text-amber-100 hover:bg-amber-900/60'
                }`}
              >
                <RealFlag lang="fr" className="w-4 h-3" />
                <span>Français</span>
              </button>

              <button
                onClick={() => {
                  setLanguage('en');
                  setShowLangMenu(false);
                  soundManager.playSelect();
                }}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all text-left w-full ${
                  language === 'en' ? 'bg-amber-500 text-amber-950 font-black' : 'text-amber-100 hover:bg-amber-900/60'
                }`}
              >
                <RealFlag lang="en" className="w-4 h-3" />
                <span>English</span>
              </button>

              <button
                onClick={() => {
                  setLanguage('ar');
                  setShowLangMenu(false);
                  soundManager.playSelect();
                }}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all text-left w-full ${
                  language === 'ar' ? 'bg-amber-500 text-amber-950 font-black' : 'text-amber-100 hover:bg-amber-900/60'
                }`}
              >
                <RealFlag lang="ar" className="w-4 h-3" />
                <span className="font-cairo">العربية</span>
              </button>
            </div>
          )}
        </div>

        {/* Carte Button (Shown on sm: screens since Voyage is permanent in BottomNavBar) */}
        {onOpenMap && (
          <button
            onClick={() => {
              soundManager.playSelect();
              onOpenMap();
            }}
            title={tNav.map}
            className="hidden sm:flex px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-amber-500/25 hover:bg-amber-500/40 border-2 border-amber-400/60 text-amber-200 hover:text-white font-bold transition-all cursor-pointer shadow-md items-center gap-1.5 active:scale-95 font-cinzel text-[10px] sm:text-xs tracking-wider backdrop-blur-sm shrink-0"
          >
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            <span>{tNav.map}</span>
          </button>
        )}

        {/* Dedicated Islamic Quiz (+XP) Button */}
        {onOpenQuiz && (
          <button
            onClick={() => {
              soundManager.playSelect();
              onOpenQuiz();
            }}
            title={
              hasSpiritualGatePending
                ? 'Savoir requis pour la suite du voyage ! Réponds aux Quiz (+XP)'
                : 'Quiz & Défis (+XP)'
            }
            className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl border-2 transition-all cursor-pointer shadow-md flex items-center gap-1 active:scale-95 font-cinzel text-[10px] sm:text-xs shrink-0 ${
              hasSpiritualGatePending
                ? 'bg-[#2d6a4f] hover:bg-[#387f5e] border-amber-400 text-amber-200 font-black ring-2 ring-amber-400/70 animate-pulse shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                : 'bg-[#2d6a4f]/90 hover:bg-[#387f5e] border-[#52b788]/60 text-emerald-100 font-bold'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 shrink-0 ${hasSpiritualGatePending ? 'fill-amber-300 text-amber-300 animate-bounce' : 'fill-amber-300 text-amber-300'}`} />
            <span>Quiz</span>
            <span className="hidden xs:inline text-[9px] font-mono text-amber-300">+XP</span>
          </button>
        )}

        {/* Knowledge Book Button */}
        {onOpenKnowledge && (
          <button
            onClick={() => {
              soundManager.playSelect();
              onOpenKnowledge();
            }}
            title="Livre du Savoir (Sagesse)"
            className="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl bg-amber-600/90 border-2 border-amber-400/60 hover:bg-amber-500 text-white font-bold transition-all cursor-pointer shadow-md flex items-center gap-1 active:scale-95 font-cinzel text-[10px] sm:text-xs shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden xs:inline">{language === 'ar' ? 'العلم' : language === 'en' ? 'Wisdom' : 'Savoir'}</span>
          </button>
        )}

        {/* Landing Page & Tester Questionnaire Button */}
        {onOpenLanding && (
          <button
            onClick={() => {
              soundManager.playSelect();
              onOpenLanding();
            }}
            title="Questionnaire Bêta-Testeur"
            className="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl bg-[#ebdfc8] hover:bg-[#ebdcc4] border-2 border-[#3a2312] text-[#3a2312] font-black transition-all cursor-pointer shadow-xs flex items-center gap-1 active:scale-95 font-cinzel text-[10px] sm:text-xs shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d97c27] fill-[#d97c27] shrink-0" />
            <span className="hidden xs:inline">{language === 'ar' ? 'رأي' : language === 'en' ? 'Feedback' : 'Avis'}</span>
          </button>
        )}
      </div>
    </header>
  );
};
