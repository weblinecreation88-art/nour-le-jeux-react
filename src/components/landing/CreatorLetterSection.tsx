import React from 'react';
import { Heart, Sparkles, BookOpen, ShieldCheck, Play, Download, CheckCircle2, MessageCircleHeart } from 'lucide-react';
import { APK_DOWNLOAD_URL } from '../../data/gameData';
import { trackPlayGameClick, trackApkDownloadClick } from '../../utils/analytics';
import { useLanguage } from '../../context/LanguageContext';

interface CreatorLetterSectionProps {
  onOpenGame: () => void;
}

export default function CreatorLetterSection({ onOpenGame }: CreatorLetterSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="mot-du-concepteur" className="py-16 sm:py-24 bg-[#0a080e] relative overflow-hidden">
      
      {/* Mirage Desert Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-amber-600/5 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-amber-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/45 text-[#f5efe6] text-xs font-cinzel font-semibold tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <MessageCircleHeart className="w-3.5 h-3.5 text-[#e5c158]" />
            {t.creatorLetter.badge}
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#fbf6ec] tracking-wide leading-tight">
            {t.creatorLetter.title}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-cinzel tracking-widest text-[#d8c29d]/80 uppercase">
            <span>{t.creatorLetter.authorSubtitle}</span>
          </div>
        </div>

        {/* Illuminated Obsidian Codex Letter Card (Assassin's Creed Mirage Codex Style) */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#181320] via-[#120e18] to-[#0d0a12] border-2 border-[#d4af37]/60 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-[#ede2cf] gilded-relic-frame backdrop-blur-md">
          
          {/* Top Vintage Stamp & Bismillah Calligraphy */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#d4af37]/30 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d4af37] via-[#b88628] to-[#805713] p-0.5 shadow-md shrink-0 flex items-center justify-center text-[#fff8eb]">
                <span className="font-amiri text-3xl font-bold">ن</span>
              </div>
              <div>
                <span className="text-[11px] font-cinzel uppercase tracking-widest text-[#e5c158] font-bold block">
                  {t.creatorLetter.openLetter}
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl font-black text-[#fbf6ec]">
                  {t.creatorLetter.authorName}
                </h3>
                <span className="text-xs text-[#d8c29d] font-sans font-medium">
                  {t.creatorLetter.authorBio}
                </span>
              </div>
            </div>

            {/* Arabic Bismillah Calligraphy Cartouche */}
            <div className="px-5 py-2.5 rounded-xl bg-[#1d1728] border border-[#d4af37]/40 shadow-inner">
              <span className="font-amiri text-xl sm:text-2xl font-bold text-[#fce8a6] select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
            </div>
          </div>

          {/* Letter Content */}
          <div className="space-y-5 font-serif text-sm sm:text-base leading-relaxed text-[#ede2cf]">
            
            <p className="font-bold text-[#ffd700] font-cinzel text-base sm:text-lg">
              {t.creatorLetter.greeting}
              <br />
              <span className="font-sans font-normal text-sm sm:text-base text-[#d8c29d]">
                {t.creatorLetter.dearParents}
              </span>
            </p>

            <p>{t.creatorLetter.p1}</p>
            <p>{t.creatorLetter.p2}</p>
            <p>{t.creatorLetter.p3}</p>

            {/* Highlighted Callout Quote in Codex Style */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#2a1d12]/90 via-[#21170f]/80 to-[#18110b]/90 border-l-4 border-[#ffd700] border-y border-r border-[#d4af37]/30 text-[#fff8eb] my-4 shadow-md space-y-2 font-sans">
              <div className="flex items-center gap-2 text-xs font-cinzel font-bold text-[#e5c158] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#ffd700]" />
                {t.creatorLetter.calloutHeader}
              </div>
              <p className="font-serif italic text-base sm:text-lg leading-relaxed text-[#fce8a6]">
                {t.creatorLetter.calloutQuote}
              </p>
            </div>

            <p>{t.creatorLetter.p4}</p>
            <p>{t.creatorLetter.p5}</p>
            <p>{t.creatorLetter.p6}</p>

            {/* Closing Dua & Benediction */}
            <div className="pt-4 border-t border-[#d4af37]/30 space-y-2">
              <p className="font-serif italic text-base text-[#ffd700] font-medium">
                {t.creatorLetter.dua}
              </p>
              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="font-cinzel font-black text-base sm:text-lg text-[#fbf6ec] block">
                    {t.creatorLetter.signoff}
                  </span>
                  <span className="font-sans text-xs text-[#d8c29d] font-semibold">
                    {t.creatorLetter.designerTitle}
                  </span>
                </div>
                <div className="font-amiri text-lg text-[#fce8a6] font-bold">
                  {t.creatorLetter.arabicPeace}
                </div>
              </div>
            </div>

          </div>

          {/* Direct Play CTA Strip at the bottom of the letter */}
          <div className="mt-8 pt-6 border-t border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#d8c29d] font-sans">
              <CheckCircle2 className="w-4 h-4 text-[#48bb78] shrink-0" />
              <span>{t.creatorLetter.testNotice}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  trackPlayGameClick('creator_letter');
                  onOpenGame();
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#e5c158] via-[#ffd700] to-[#c59b27] text-stone-950 font-cinzel font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-stone-950" />
                <span>{t.creatorLetter.testButton}</span>
              </button>

              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackApkDownloadClick('creator_letter')}
                className="hidden sm:flex items-center gap-2 px-4 py-3 rounded-xl bg-[#21160d] hover:bg-[#2e1f13] border border-[#d4af37]/60 text-[#fce8a6] font-cinzel font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-3.5 h-3.5 text-[#ffd700]" />
                <span>{t.creatorLetter.apkButton}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
