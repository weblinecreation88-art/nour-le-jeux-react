import { Shield, HeartHandshake, Compass, BookOpen, Sparkles, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function GameplayMechanics() {
  const { t } = useLanguage();

  const mechanics = [
    {
      id: "waswas",
      badge: t.mechanics.mech1Badge,
      title: t.mechanics.mech1Title,
      icon: Shield,
      color: "purple",
      bgImage: "/game-assets/waswas_bg.jpg",
      quote: t.mechanics.mech1Quote,
      description: t.mechanics.mech1Desc,
      points: t.mechanics.mech1Points
    },
    {
      id: "ponts",
      badge: t.mechanics.mech2Badge,
      title: t.mechanics.mech2Title,
      icon: HeartHandshake,
      color: "emerald",
      bgImage: "/game-assets/chambre.jpg",
      quote: t.mechanics.mech2Quote,
      description: t.mechanics.mech2Desc,
      points: t.mechanics.mech2Points
    },
    {
      id: "carrefour",
      badge: t.mechanics.mech3Badge,
      title: t.mechanics.mech3Title,
      icon: Compass,
      color: "amber",
      bgImage: "/game-assets/carrefour.jpg",
      quote: t.mechanics.mech3Quote,
      description: t.mechanics.mech3Desc,
      points: t.mechanics.mech3Points
    },
    {
      id: "savoir",
      badge: t.mechanics.mech4Badge,
      title: t.mechanics.mech4Title,
      icon: BookOpen,
      color: "sky",
      bgImage: "/game-assets/verger.jpg",
      quote: t.mechanics.mech4Quote,
      description: t.mechanics.mech4Desc,
      points: t.mechanics.mech4Points
    }
  ];

  return (
    <section id="mecaniques" className="py-24 bg-[#0a080e] relative overflow-hidden">
      
      {/* Mirage Desert Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/40 text-[#f5efe6] text-xs font-cinzel font-semibold tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#e5c158]" />
            {t.mechanics.badge}
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#fbf6ec] tracking-wide">
            {t.mechanics.title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs font-cinzel tracking-widest text-[#d8c29d]/80 uppercase">
            <span>{t.mechanics.subTagline}</span>
          </div>
          <p className="text-[#d8c29d] text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            {t.mechanics.subtitle}
          </p>
        </div>

        {/* 4 Mechanics Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mechanics.map((mech) => {
            const Icon = mech.icon;
            return (
              <div
                key={mech.id}
                className="relative rounded-2xl bg-gradient-to-b from-[#18131e] via-[#120f18] to-[#0c0a10] border border-[#d4af37]/30 overflow-hidden group hover:border-[#e5c158] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
              >
                {/* Visual Backdrop Header */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={mech.bgImage}
                    alt={mech.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-65"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120f18] via-[#120f18]/40 to-transparent" />
                  
                  {/* Badge & Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#0d0912]/85 backdrop-blur-md border border-[#d4af37]/40 text-[#fce8a6] text-xs font-semibold font-cinzel tracking-wide shadow-md">
                      ✧ {mech.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#22170f]/90 border border-[#d4af37]/50 backdrop-blur-md flex items-center justify-center text-[#e5c158] shadow-[0_0_12px_rgba(212,175,55,0.25)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#fbf6ec]">
                      {mech.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-sm text-[#d8c29d] leading-relaxed font-sans">
                      {mech.description}
                    </p>

                    {/* Feature Points */}
                    <div className="space-y-2.5 pt-1">
                      {mech.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#ede2cf]">
                          <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 border border-[#e5c158]/50 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-[#e5c158]" />
                          </div>
                          <span className="leading-snug">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Poetic Parchment Quote Strip */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#241a12]/80 to-[#18110b]/80 border-l-2 border-[#e5c158] border-y border-r border-[#d4af37]/20 text-xs italic text-[#fce8a6]/90 font-serif leading-relaxed shadow-sm">
                    {mech.quote}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
