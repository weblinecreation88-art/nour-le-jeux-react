import React, { useState } from 'react';
import { RealAction } from '../types';
import { Check, HeartHandshake, Sparkles, Sun, ArrowRight, BookmarkCheck, CalendarCheck, ShieldCheck } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import { gameTranslations } from '../i18n/gameTranslations';
import { getLocalizedRealAction } from '../utils/narrativeI18n';

interface RealActionModalProps {
  action: RealAction;
  onValidate: (mode: 'done' | 'pledge' | 'skip') => void;
  onHarvestXp?: (amount: number, reason: string, startX?: number, startY?: number) => void;
}

export const RealActionModal: React.FC<RealActionModalProps> = ({
  action,
  onValidate,
  onHarvestXp
}) => {
  const { language, isRtl } = useLanguage();
  const t = gameTranslations[language]?.actions || gameTranslations.fr.actions;
  const activeAction = getLocalizedRealAction(action, language);
  const [confirmed, setConfirmed] = useState(false);

  const fullXp = action.xpReward || 30;
  const pledgeXp = Math.max(10, Math.round(fullXp / 2));

  const handleChoice = (mode: 'done' | 'pledge' | 'skip', e?: React.MouseEvent) => {
    setConfirmed(true);
    const clientX = e?.clientX;
    const clientY = e?.clientY;

    if (mode === 'done') {
      if (onHarvestXp) {
        onHarvestXp(fullXp, `Action réelle accomplie : ${activeAction.title}`, clientX, clientY);
      } else {
        soundManager.playXpHarvest();
      }
      setTimeout(() => {
        onValidate('done');
      }, 700);
    } else if (mode === 'pledge') {
      if (onHarvestXp) {
        onHarvestXp(pledgeXp, `Engagement d'Adab pris : ${activeAction.title}`, clientX, clientY);
      } else {
        soundManager.playSelect();
      }
      setTimeout(() => {
        onValidate('pledge');
      }, 700);
    } else {
      soundManager.playSelect();
      onValidate('skip');
    }
  };

  const doneLabel = language === 'ar'
    ? `فعلتها الآن في الواقع! (+${fullXp} نقطة)`
    : language === 'en'
    ? `I did it just now in real life! (+${fullXp} XP)`
    : `C'est fait à l'instant dans le réel ! (+${fullXp} XP)`;

  const pledgeLabel = language === 'ar'
    ? `أتعهد بالقيام بها اليوم (+${pledgeXp} نقطة + تضاف لمهامي)`
    : language === 'en'
    ? `I pledge to do it today (+${pledgeXp} XP + added to Quests)`
    : `Je m'engage à le faire aujourd'hui (+${pledgeXp} XP + Quêtes)`;

  const skipLabel = language === 'ar'
    ? 'تخطي الآن (متابعة القصة)'
    : language === 'en'
    ? 'Skip for now (Continue story)'
    : 'Passer pour l\'instant (Continuer l\'histoire)';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/75 backdrop-blur-xs select-none animate-in fade-in duration-200"
    >
      <div className="w-full max-w-md bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl p-4 sm:p-6 shadow-[0_10px_0_#3a2312] flex flex-col gap-3.5 relative my-auto max-h-[94vh] overflow-y-auto custom-scrollbar animate-in zoom-in-95 duration-200">
        {/* Decorative Corner Diamonds */}
        <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45" />
        <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45" />
        <div className="absolute bottom-3 left-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45" />
        <div className="absolute bottom-3 right-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45" />

        {/* Glowing Top Emblem */}
        <div className="flex flex-col items-center text-center gap-2 pt-1">
          <div className="relative">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-b from-[#f2e6d0] via-[#e5d4bb] to-[#d8c3a5] border-2 border-[#3a2312] shadow-[0_3px_0_#3a2312] flex items-center justify-center text-[#2d6a4f]">
              <HeartHandshake className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#e69138] border border-[#3a2312] flex items-center justify-center text-[#1a1209] shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          <div>
            <span className="text-xs font-black text-[#1b4332] uppercase tracking-wider font-cinzel bg-[#d8f3dc] px-4 py-1 rounded-full border-2 border-[#2d6a4f] shadow-xs inline-flex items-center gap-1.5">
              🌿 {t.modalTitle}
            </span>
            <h3 className="text-base sm:text-lg md:text-xl font-black text-[#3a2312] font-cinzel mt-2 tracking-wide uppercase">
              {activeAction.title}
            </h3>
          </div>
        </div>

        {/* Mission Card */}
        <div className="w-full bg-[#f3ebd9] border-2 border-[#3a2312] p-4 rounded-2xl flex flex-col gap-2 shadow-inner text-center">
          <div className="flex items-center justify-center gap-1.5 pb-1 border-b border-[#ebdcc4]">
            <Sun className="w-4 h-4 text-[#d97c27]" />
            <span className="text-xs font-black text-[#2d6a4f] font-cinzel uppercase tracking-wider">
              {t.instructionHeader}
            </span>
          </div>

          <p className={`font-bold text-[#1f3f21] ${isRtl ? 'font-amiri text-base sm:text-lg md:text-xl leading-[1.85] text-right' : 'text-sm sm:text-base leading-relaxed'}`}>
            « {activeAction.instruction} »
          </p>

          <span className="text-[10px] text-[#6b4724] italic">
            ✦ {language === 'ar' ? 'اختر بصدق مع نفسك كيف تريد التفاعل مع هذا التوجيه' : 'Choisissez en toute sincérité votre niveau d\'engagement pour cette action.'} ✦
          </span>
        </div>

        {/* 3 Sincerity Options */}
        <div className="flex flex-col gap-2 w-full pt-1">
          {/* 1. FAIT À L'INSTANT (100% XP) */}
          <button
            type="button"
            onClick={(e) => handleChoice('done', e)}
            disabled={confirmed}
            className="w-full py-3 px-3.5 rounded-2xl bg-gradient-to-r from-[#2d6a4f] via-[#3a8461] to-[#2d6a4f] hover:brightness-110 text-white font-black text-xs sm:text-sm font-cinzel border-2 border-[#1b4332] shadow-[0_3px_0_#1b4332] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-between gap-2 uppercase tracking-wide group"
          >
            <div className="flex items-center gap-2 text-left min-w-0 flex-1">
              <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
              <span className="truncate">{doneLabel}</span>
            </div>
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
          </button>

          {/* 2. ENGAGEMENT DU JOUR (50% XP + AJOUT QUÊTES) */}
          <button
            type="button"
            onClick={(e) => handleChoice('pledge', e)}
            disabled={confirmed}
            className="w-full py-3 px-3.5 rounded-2xl bg-gradient-to-r from-[#d97c27] via-[#e69138] to-[#d97c27] hover:brightness-110 text-[#1a1209] font-black text-xs sm:text-sm font-cinzel border-2 border-[#3a2312] shadow-[0_3px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-between gap-2 tracking-wide group"
          >
            <div className="flex items-center gap-2 text-left min-w-0 flex-1">
              <CalendarCheck className="w-4 h-4 text-[#1a1209] shrink-0" />
              <span className="truncate">{pledgeLabel}</span>
            </div>
            <ArrowRight className={`w-4 h-4 text-[#1a1209] group-hover:translate-x-1 transition-transform shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
          </button>

          {/* 3. PASSER SANS XP */}
          <button
            type="button"
            onClick={(e) => handleChoice('skip', e)}
            disabled={confirmed}
            className="w-full py-2 px-3 rounded-xl bg-[#ebdfc8] hover:bg-[#e0cfb4] text-[#4a2e18] font-bold text-xs font-cinzel border border-[#3a2312]/40 active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>{skipLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

