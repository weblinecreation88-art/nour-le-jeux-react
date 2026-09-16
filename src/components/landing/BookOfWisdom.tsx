import { useState } from 'react';
import { WISDOM_CARDS } from '../../data/gameData';
import { WisdomCard } from '../../types';
import { BookOpen, Sparkles, Quote, CheckCircle2, Bookmark, Scroll } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function BookOfWisdom() {
  const { t } = useLanguage();
  const cards = t.wisdomBook.cards || [];
  const [selectedId, setSelectedId] = useState<string>(cards[0]?.id || 'adab_parole');
  const selectedCard = cards.find(c => c.id === selectedId) || cards[0];

  if (!selectedCard) return null;

  return (
    <section id="savoir" className="py-24 bg-[#0a080e] relative overflow-hidden">
      
      {/* Mirage Desert Mist Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Assassin's Creed Mirage Codex Style */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/40 text-[#f5efe6] text-xs font-cinzel font-semibold tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Scroll className="w-3.5 h-3.5 text-[#e5c158]" />
            {t.wisdomBook.badge}
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#fbf6ec] tracking-wide">
            {t.wisdomBook.title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs font-cinzel tracking-widest text-[#d8c29d]/80 uppercase">
            <span>{t.wisdomBook.subTagline}</span>
          </div>
          <p className="text-[#d8c29d] text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            {t.wisdomBook.subtitle}
          </p>
        </div>

        {/* 2-Column Codex Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Illuminated Manuscript Index */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs uppercase tracking-widest font-cinzel font-bold text-[#e5c158]">
                {t.wisdomBook.cardsUnlocked}
              </span>
              <span className="text-[11px] font-cinzel text-[#d8c29d]/70">
                {cards.length} {t.wisdomBook.sheets}
              </span>
            </div>

            <div className="space-y-2.5">
              {cards.map((card) => {
                const isSelected = selectedCard.id === card.id;
                return (
                  <button
                    key={card.id}
                    onClick={() => setSelectedId(card.id)}
                    className={`w-full p-3.5 sm:p-4 rounded-xl text-left rtl:text-right transition-all duration-300 cursor-pointer border flex items-center justify-between gap-3.5 ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#2a1e12] via-[#20170f] to-[#16100c] border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.25)] ring-1 ring-[#e5c158]/50'
                        : 'bg-[#141017] border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:bg-[#1a141e]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                        isSelected 
                          ? 'bg-[#d4af37]/25 border-[#e5c158] text-[#ffd700]' 
                          : 'bg-[#1b1510] border-[#d4af37]/20 text-[#d8c29d]'
                      }`}>
                        <Bookmark className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className={`font-cinzel font-bold text-sm truncate ${
                          isSelected ? 'text-[#fff8eb]' : 'text-[#ede2cf]'
                        }`}>
                          {card.title}
                        </h4>
                        <span className="text-xs text-[#d8c29d]/80 truncate block">
                          {card.concept}
                        </span>
                      </div>
                    </div>

                    <span className={`text-[10px] font-cinzel uppercase px-2 py-0.5 rounded tracking-wider shrink-0 border ${
                      isSelected
                        ? 'bg-[#d4af37]/20 border-[#d4af37]/60 text-[#ffd700]'
                        : 'bg-[#0b080e] border-[#d4af37]/20 text-[#d8c29d]/70'
                    }`}>
                      {card.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Genuine Illuminated Obsidian Codex Sheet */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#181320] via-[#120e18] to-[#0d0a12] border-2 border-[#d4af37]/60 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] space-y-6 text-[#ede2cf] gilded-relic-frame">
              
              {/* Parchment Antique Header Stamp */}
              <div className="flex items-start justify-between border-b border-[#d4af37]/30 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] sm:text-xs font-cinzel uppercase tracking-widest text-[#e5c158] font-bold">
                      ✧ Codex • {selectedCard.id.toUpperCase()} ✧
                    </span>
                  </div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-[#fbf6ec] tracking-tight">
                    {selectedCard.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#d8c29d] mt-0.5">
                    {selectedCard.concept}
                  </p>
                </div>

                {/* Relic Seal Medallion */}
                <div className="w-14 h-14 rounded-full border-2 border-[#d4af37] bg-gradient-to-br from-[#e0bb53] via-[#b88628] to-[#805713] flex items-center justify-center text-[#201507] shadow-md shrink-0">
                  <Sparkles className="w-6 h-6 text-[#fff8eb] drop-shadow" />
                </div>
              </div>

              {/* Calligraphy Cartouche (Baghdad Style) */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-[#21160d] via-[#1a1109] to-[#21160d] border-2 border-[#b88628] text-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-[#e5c158]/10 via-transparent to-transparent pointer-events-none" />
                <p className="font-amiri text-2xl sm:text-4xl font-bold text-[#fce8a6] leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
                  {selectedCard.arabicPhrase}
                </p>
                <div className="mt-1 text-[11px] font-cinzel tracking-widest text-[#d8c29d]/70 uppercase">
                  {t.wisdomBook.wordsOfGuidance}
                </div>
              </div>

              {/* Translated Parchment Quote */}
              <div className="relative p-5 sm:p-6 rounded-xl bg-[#1d1728]/90 border-l-4 border-[#ffd700] border-y border-r border-[#d4af37]/30 text-[#fbf6ec] font-serif italic text-base sm:text-lg leading-relaxed shadow-inner">
                <Quote className="w-7 h-7 text-[#ffd700]/30 absolute -top-3 -left-3" />
                <p className="relative z-10 leading-relaxed">
                  « {selectedCard.quote} »
                </p>
                <div className="mt-3 text-right rtl:text-left">
                  <span className="text-xs font-sans not-italic font-bold text-[#e5c158] tracking-wide">
                    {t.wisdomBook.revealedSource} {selectedCard.source}
                  </span>
                </div>
              </div>

              {/* Moral Application in Game and Real Life */}
              <div className="space-y-2 pt-1">
                <span className="text-xs uppercase tracking-wider font-cinzel font-bold text-[#ffd700] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#48bb78]" />
                  {t.wisdomBook.spiritualScope}
                </span>
                <p className="text-xs sm:text-sm text-[#ede2cf] leading-relaxed font-sans bg-[#171220] p-4 rounded-xl border border-[#d4af37]/30 shadow-sm">
                  {selectedCard.lesson}
                </p>
              </div>

              {/* Bottom Relic Stamp */}
              <div className="pt-2 flex items-center justify-between border-t border-[#d4af37]/30 text-[11px] font-cinzel text-[#d8c29d]">
                <span>{t.wisdomBook.category} {selectedCard.category}</span>
                <span className="font-amiri text-sm font-bold text-[#fce8a6]">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
