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
                className="rounded-xl bg-[#13101d] border border-amber-500/20 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-amber-500/5 transition-colors"
                >
                  <span className="font-cinzel font-bold text-sm sm:text-base text-stone-100">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans border-t border-amber-500/10 bg-[#0f0d18]">
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
