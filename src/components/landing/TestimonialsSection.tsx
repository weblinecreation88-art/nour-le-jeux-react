import { TESTIMONIALS } from '../../data/gameData';
import { Star, MessageSquareQuote, ShieldCheck, Heart } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="avis" className="py-24 bg-[#0d0b14] relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5" />
            L'Écho de la Communauté
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-amber-100">
            Adopté par les Familles & Joueurs
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Découvrez pourquoi parents, éducateurs et rôlistes saluent la bienveillance 
            et la fraîcheur novatrice de l'aventure NOUR.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#14111f] border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
                    {t.badge}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-sm text-stone-200 leading-relaxed italic font-serif">
                  « {t.content} »
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-amber-500/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/30 to-purple-800/40 border border-amber-400/40 flex items-center justify-center font-cinzel font-bold text-amber-200 text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-sm text-stone-100">
                    {t.name}
                  </h4>
                  <span className="text-xs text-stone-400">
                    {t.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Ethical Commitment Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-950/40 via-[#181324] to-emerald-950/40 border border-amber-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-cinzel font-bold text-base text-amber-100">
                Garantie Sans Violence • 100% Bienveillant
              </h4>
              <p className="text-xs text-stone-300 mt-0.5">
                Une expérience saine, sans micro-transactions, sans pop-ups publicitaires, respectueuse de votre attention.
              </p>
            </div>
          </div>
          <span className="shrink-0 px-4 py-2 rounded-xl bg-stone-900 border border-amber-500/30 text-xs font-mono text-amber-300">
            PEGI 3+ / Tout Public
          </span>
        </div>

      </div>
    </section>
  );
}
