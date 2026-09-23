import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#09080e] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            {t.faq.badge}
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.faq.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {t.faq.items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-gradient-to-b from-[#181320] via-[#120e18] to-[#0c0a12] border border-[#d4af37]/30 hover:border-[#ffd700]/60 overflow-hidden transition-all duration-300 shadow-md"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-[#d4af37]/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-cinzel font-bold text-sm sm:text-base text-[#fbf6ec] leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#ffd700] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#ede2cf] leading-relaxed font-sans border-t border-[#d4af37]/15 bg-[#0e0a14]/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
