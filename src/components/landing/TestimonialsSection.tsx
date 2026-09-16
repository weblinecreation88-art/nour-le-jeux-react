import React from 'react';
import { Star, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="avis" className="py-24 bg-[#0a080e] relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/40 text-[#f5efe6] text-xs font-cinzel font-semibold tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Heart className="w-3.5 h-3.5 text-[#e5c158]" />
            {t.testimonials.badge}
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#fbf6ec] tracking-wide">
            {t.testimonials.title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs font-cinzel tracking-widest text-[#d8c29d]/80 uppercase">
            <span>{t.testimonials.subTag}</span>
          </div>
          <p className="text-[#d8c29d] text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            {t.testimonials.description}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#18131e] via-[#130f18] to-[#0d0a11] border border-[#d4af37]/30 hover:border-[#e5c158] hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
            >
              <div className="space-y-4">
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#ffd700]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffd700]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-cinzel uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#241a12] border border-[#d4af37]/40 text-[#fce8a6]">
                    ✧ {item.badge}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-sm text-[#ede2cf] leading-relaxed italic font-serif">
                  « {item.content} »
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-[#d4af37]/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37]/30 to-[#805713]/40 border border-[#e5c158]/50 flex items-center justify-center font-cinzel font-bold text-[#ffd700] text-sm shadow-inner">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-sm text-[#fbf6ec]">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#d8c29d]/80 font-sans">
                    {item.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Ethical Commitment Banner (Gilded Relic Frame) */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#241910] via-[#1a131f] to-[#16221c] border-2 border-[#d4af37]/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.8)] gilded-relic-frame">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 border border-[#e5c158]/50 flex items-center justify-center text-[#ffd700] shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-cinzel font-bold text-base text-[#fbf6ec]">
                {t.testimonials.ethicalTitle}
              </h4>
              <p className="text-xs text-[#d8c29d] mt-0.5 font-sans">
                {t.testimonials.ethicalDesc}
              </p>
            </div>
          </div>
          <span className="shrink-0 px-4 py-2 rounded-xl bg-[#0d0912] border border-[#d4af37]/40 text-xs font-cinzel font-bold text-[#ffd700] tracking-wider shadow-inner">
            {t.testimonials.ethicalBadge}
          </span>
        </div>

      </div>
    </section>
  );
}
