import { useState } from 'react';
import { WISDOM_CARDS } from '../../data/gameData';
import { WisdomCard } from '../../types';
import { BookOpen, Sparkles, Quote, CheckCircle2, Bookmark } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function BookOfWisdom() {
  const { t } = useLanguage();
  const [selectedCard, setSelectedCard] = useState<WisdomCard>(WISDOM_CARDS[0]);

  return (
    <section id="savoir" className="py-24 bg-[#0d0b14] relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            {t.wisdomBook.badge}
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.wisdomBook.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {t.wisdomBook.subtitle}
          </p>
        </div>

        {/* 2-Column Codex Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Cards Shelf List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-wider font-cinzel font-bold text-amber-400 block px-1">
              Fiches Découvertes dans le Récit
            </span>

            <div className="space-y-3">
              {WISDOM_CARDS.map((card) => {
                const isSelected = selectedCard.id === card.id;
                return (
                  <button
                    key={card.id}
                    onClick={() => setSelectedCard(card)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 cursor-pointer border flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-950/70 to-[#1e192c] border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                        : 'bg-[#14111f] border-amber-500/20 hover:border-amber-400/40 hover:bg-[#191526]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0 text-amber-300">
                        <Bookmark className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-cinzel font-bold text-sm text-stone-100 truncate">
                          {card.title}
                        </h4>
                        <span className="text-xs text-amber-300/70 truncate block">
                          {card.concept}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-stone-400 shrink-0 uppercase px-2 py-0.5 rounded bg-stone-900 border border-amber-500/20">
                      {card.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Wisdom Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#181424] via-[#14111f] to-[#120f1c] border-2 border-amber-500/40 p-6 sm:p-10 shadow-2xl space-y-6">
              
              {/* Header with Title and Stamp */}
              <div className="flex items-start justify-between border-b border-amber-500/20 pb-5">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400/80 font-bold block mb-1">
                    Livre du Savoir • Fiche Débloquée
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-100">
                    {selectedCard.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-200/80 mt-0.5">
                    Concept : {selectedCard.concept}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full border border-amber-400/50 bg-amber-500/10 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Arabic Calligraphy Banner */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-amber-950/40 via-[#231b31] to-amber-950/40 border border-amber-400/30 text-center">
                <p className="font-amiri text-2xl sm:text-3xl font-bold text-amber-200 leading-relaxed drop-shadow-md">
                  {selectedCard.arabicPhrase}
                </p>
              </div>

              {/* Translated Quote with Golden Quotation Mark */}
              <div className="relative p-5 rounded-xl bg-[#1a1628] border-l-4 border-amber-400 text-stone-200 font-serif italic text-base sm:text-lg leading-relaxed">
                <Quote className="w-6 h-6 text-amber-400/40 absolute -top-3 -left-3" />
                <p>{selectedCard.quote}</p>
                <div className="mt-2 text-right">
                  <span className="text-xs font-sans not-italic text-amber-300/80 font-semibold">
                    — {selectedCard.source}
                  </span>
                </div>
              </div>

              {/* Moral Lesson & Everyday Application */}
              <div className="space-y-2 pt-2">
                <span className="text-xs uppercase tracking-wider font-cinzel font-bold text-amber-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Application dans la Quête et dans la Vraie Vie
                </span>
                <p className="text-sm text-stone-300 leading-relaxed font-sans bg-[#100d18] p-4 rounded-xl border border-amber-500/15">
                  {selectedCard.lesson}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
