import React from 'react';
import { Gamepad2, Users, HeartHandshake, ShieldCheck, BookOpen, Smartphone, Play, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { trackPlayGameClick } from '../../utils/analytics';

interface FamilySectionProps {
  onOpenGame: () => void;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ onOpenGame }) => {
  const { t } = useLanguage();
  const f = t.familySection;

  const familyPoints = [
    {
      id: 'quiz',
      icon: Gamepad2,
      badge: f.quizBadge,
      title: f.quizTitle,
      desc: f.quizDesc,
      color: 'amber',
      border: 'border-[#ffd700]/50 ring-1 ring-[#ffd700]/20',
      badgeBg: 'bg-[#2b1f0e]',
      badgeText: 'text-[#ffd700]',
      iconBg: 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
    },
    {
      id: 'age',
      icon: Users,
      badge: f.ageBadge,
      title: f.ageTitle,
      desc: f.ageDesc,
      color: 'amber',
      border: 'border-[#d4af37]/40',
      badgeBg: 'bg-[#241a10]',
      badgeText: 'text-[#ffd700]',
      iconBg: 'bg-amber-950/60 text-amber-300'
    },
    {
      id: 'parents',
      icon: HeartHandshake,
      badge: f.parentsBadge,
      title: f.parentsTitle,
      desc: f.parentsDesc,
      color: 'emerald',
      border: 'border-emerald-500/40',
      badgeBg: 'bg-[#0a231b]',
      badgeText: 'text-emerald-300',
      iconBg: 'bg-emerald-950/60 text-emerald-300'
    },
    {
      id: 'ethics',
      icon: ShieldCheck,
      badge: f.ethicsBadge,
      title: f.ethicsTitle,
      desc: f.ethicsDesc,
      color: 'purple',
      border: 'border-purple-500/40',
      badgeBg: 'bg-[#1e1128]',
      badgeText: 'text-purple-300',
      iconBg: 'bg-purple-950/60 text-purple-300'
    },
    {
      id: 'sources',
      icon: BookOpen,
      badge: f.sourcesBadge,
      title: f.sourcesTitle,
      desc: f.sourcesDesc,
      color: 'sky',
      border: 'border-sky-500/40',
      badgeBg: 'bg-[#0e1d2c]',
      badgeText: 'text-sky-300',
      iconBg: 'bg-sky-950/60 text-sky-300'
    },
    {
      id: 'devices',
      icon: Smartphone,
      badge: f.devicesBadge,
      title: f.devicesTitle,
      desc: f.devicesDesc,
      color: 'amber',
      border: 'border-[#d4af37]/40',
      badgeBg: 'bg-[#241a10]',
      badgeText: 'text-[#f5ebd7]',
      iconBg: 'bg-amber-950/60 text-amber-300'
    }
  ];

  return (
    <section id="pour-les-familles" className="py-20 sm:py-28 bg-[#0a0810] relative overflow-hidden border-t border-[#d4af37]/25">
      {/* Subtle desert ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#d4af37]/10 via-[#9c6f1c]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-950/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/50 text-[#ffd700] text-xs font-cinzel font-semibold tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>{f.badge}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-[#fbf6ec] tracking-wide">
            {f.title}
          </h2>

          <p className="text-[#d8c29d] text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            {f.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid (6 Balanced Cards: 3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {familyPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#181322] via-[#130f1c] to-[#0d0a14] border ${item.border} shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#ffd700]/70 hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)] transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg} border border-white/10 group-hover:scale-110 transition-transform shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-cinzel font-bold border border-white/10 ${item.badgeBg} ${item.badgeText}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#fbf6ec] mb-2.5 group-hover:text-[#ffd700] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Sub-accent decorative line */}
                <div className="pt-5 mt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#d8c29d]/70 font-cinzel">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Sérénité & Clarté</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Closing Action Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              trackPlayGameClick('family_section');
              onOpenGame();
            }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#e5c158] via-[#ffd700] to-[#c59b27] text-[#120e06] font-cinzel font-black text-base sm:text-lg tracking-wider shadow-[0_0_35px_rgba(229,193,88,0.5)] hover:shadow-[0_0_55px_rgba(229,193,88,0.85)] hover:scale-105 active:scale-95 transition-all cursor-pointer ring-2 ring-[#fff3cc]/80"
          >
            <Play className="w-5 h-5 fill-[#120e06]" />
            <span>{f.cardCta}</span>
          </button>
          <div className="text-xs text-[#d8c29d]/80 pt-2.5 font-cinzel">
            ✧ 100% Gratuit • Sans inscription • Immédiat dans le navigateur
          </div>
        </div>

      </div>
    </section>
  );
};
export default FamilySection;
