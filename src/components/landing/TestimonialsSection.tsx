import React from 'react';
import { Gamepad2, MessageSquareHeart, Award, ShieldCheck, Sparkles, Send, ArrowDownCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const beta = t.testimonials;

  const scrollToQuestionnaire = () => {
    const el = document.getElementById('tester-questionnaire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappMessage = encodeURIComponent("Salam Abderrahmane, j'ai testé le Chapitre 1 de NOUR et je souhaite vous partager mon ressenti :");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=212699245542&text=${whatsappMessage}`;

  const steps = [
    {
      id: 'step1',
      icon: Gamepad2,
      badge: beta.step1Badge,
      title: beta.step1Title,
      desc: beta.step1Desc,
      border: 'border-amber-500/40',
      iconBg: 'bg-amber-500/20 text-amber-300 border border-amber-400/50',
      badgeBg: 'bg-[#2b1f0e] text-[#ffd700]'
    },
    {
      id: 'step2',
      icon: MessageSquareHeart,
      badge: beta.step2Badge,
      title: beta.step2Title,
      desc: beta.step2Desc,
      border: 'border-emerald-500/40',
      iconBg: 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50',
      badgeBg: 'bg-[#0a231b] text-emerald-300'
    },
    {
      id: 'step3',
      icon: Award,
      badge: beta.step3Badge,
      title: beta.step3Title,
      desc: beta.step3Desc,
      border: 'border-purple-500/40',
      iconBg: 'bg-purple-500/20 text-purple-300 border border-purple-400/50',
      badgeBg: 'bg-[#1e1128] text-purple-300'
    }
  ];

  return (
    <section id="avis" className="py-24 bg-[#0a080e] relative overflow-hidden">
      
      {/* Warm desert glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/50 text-[#ffd700] text-xs font-cinzel font-semibold tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>{beta.badge}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-[#fbf6ec] tracking-wide">
            {beta.title}
          </h2>

          <div className="flex items-center justify-center gap-2 text-xs font-cinzel tracking-widest text-[#ffd700]/90 uppercase">
            <span>{beta.subTagline}</span>
          </div>

          <p className="text-[#d8c29d] text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            {beta.subtitle}
          </p>
        </div>

        {/* 3 Beta Collaboration Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#18131e] via-[#130f18] to-[#0d0a11] border ${item.border} shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:border-[#ffd700]/80 hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)] transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg} shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-cinzel font-bold border border-white/10 ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#fbf6ec] mb-3 group-hover:text-[#ffd700] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#d8c29d]/80 font-cinzel">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700]" />
                  <span>Co-création éthique</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call To Action Buttons for Testers */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToQuestionnaire}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-[#e5c158] via-[#ffd700] to-[#c59b27] text-stone-950 font-cinzel font-extrabold text-sm sm:text-base tracking-wider shadow-[0_0_30px_rgba(229,193,88,0.5)] hover:shadow-[0_0_45px_rgba(229,193,88,0.8)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2.5"
          >
            <ArrowDownCircle className="w-5 h-5" />
            <span>{beta.ctaForm}</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#0e271e] hover:bg-[#13382b] border border-emerald-400/60 text-emerald-200 font-cinzel font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Send className="w-4 h-4 text-emerald-400" />
            <span>{beta.ctaWhatsapp}</span>
          </a>
        </div>

        {/* Ethical Commitment Banner (Gilded Relic Frame) */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#241910] via-[#1a131f] to-[#16221c] border-2 border-[#d4af37]/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.8)] gilded-relic-frame">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 border border-[#e5c158]/50 flex items-center justify-center text-[#ffd700] shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-cinzel font-bold text-base text-[#fbf6ec]">
                {beta.guaranteeTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#d8c29d] mt-0.5 font-sans leading-relaxed">
                {beta.guaranteeDesc}
              </p>
            </div>
          </div>
          <span className="shrink-0 px-4 py-2 rounded-xl bg-[#0d0912] border border-[#d4af37]/40 text-xs font-cinzel font-bold text-[#ffd700] tracking-wider shadow-inner">
            {beta.pegi}
          </span>
        </div>

      </div>
    </section>
  );
}
