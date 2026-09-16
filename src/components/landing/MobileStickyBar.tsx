import React, { useState, useEffect } from 'react';
import { Play, Download } from 'lucide-react';
import { APK_DOWNLOAD_URL } from '../../data/gameData';
import { trackPlayGameClick, trackApkDownloadClick } from '../../utils/analytics';
import { useLanguage } from '../../context/LanguageContext';

interface MobileStickyBarProps {
  onOpenGame: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenGame }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Reveal sticky bar when scrolled past 260px
      if (window.scrollY > 260) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div 
      id="mobile-sticky-cta"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0d0a16]/95 backdrop-blur-lg border-t border-amber-500/30 px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_-8px_32px_rgba(0,0,0,0.9)] animate-in slide-in-from-bottom-5 duration-300"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.6rem)' }}
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-2.5">
        
        {/* Left: Mini Badge & Branding */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/30 to-purple-900/50 border border-amber-400/40 flex items-center justify-center shrink-0">
            <span className="font-amiri text-amber-300 font-bold text-sm leading-none">نور</span>
          </div>
          <div className="truncate">
            <div className="font-cinzel text-xs font-bold text-amber-100 truncate">
              {t.mobileSticky.title}
            </div>
            <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.mobileSticky.subtitle}
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* APK Icon Button */}
          <a
            href={APK_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackApkDownloadClick('mobile_sticky_bar')}
            className="p-2.5 rounded-xl bg-stone-900 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-950/60 transition-colors"
            title={t.hero.downloadApk}
            aria-label={t.hero.downloadApk}
          >
            <Download className="w-4 h-4" />
          </a>

          {/* Primary 1-Click Launch Button */}
          <button
            onClick={() => {
              trackPlayGameClick('mobile_sticky_bar');
              onOpenGame();
            }}
            className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-stone-950 font-cinzel font-extrabold text-xs sm:text-sm tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.5)] active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-stone-950" />
            <span>{t.mobileSticky.cta}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
export default MobileStickyBar;
