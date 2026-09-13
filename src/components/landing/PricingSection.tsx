import React from 'react';
import { Sparkles, ExternalLink, CheckCircle2, ShieldCheck, Crown, Coffee, Heart, ArrowRight, Clock } from 'lucide-react';
import teaArtisanImage from '../../assets/images/bg_the_artisan_soutien.jpg';
import ch2MarketScene from '../../assets/images/bg_marche_fruits_renverses.jpg';
import ch4TeaserImage from '../../assets/images/bg_teaser_chapitre4_arbre.jpg';
import { openStripeCheckout } from '../../utils/stripe';
import { useLanguage } from '../../context/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();

  const handleCheckout = (url: string) => {
    openStripeCheckout(url);
  };

  const scrollToRoadmap = () => {
    const el = document.getElementById('chapitres');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tarifs" className="py-24 bg-[#0a0910] relative overflow-hidden border-t border-amber-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            {t.pricing.badge}
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.pricing.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* 3-Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
          
          {/* Colonne 1 : Soutien Libre / Thé de l'Artisan (1,99 €) */}
          <div className="rounded-3xl bg-[#13111c] border border-amber-500/20 hover:border-amber-500/40 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group">
            <div className="space-y-5">
              {/* Image Preview */}
              <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border border-amber-500/20 shadow-md">
                <img 
                  src={teaArtisanImage} 
                  alt="Thé de l'artisan et lanterne" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13111c] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#13111c]/90 border border-amber-500/40 text-amber-300 text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-sm">
                    <Coffee className="w-3.5 h-3.5" />
                    Thé de l'Artisan
                  </span>
                </div>
              </div>

              {/* Title & Pricing */}
              <div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-100 mb-1.5">
                  Soutien au Projet
                </h3>
                <p className="text-stone-300 text-xs leading-relaxed mb-3">
                  Un geste chaleureux et symbolique pour encourager notre studio et financer les voix d'acteurs.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-amber-300 font-cinzel">
                    1,99 €
                  </span>
                  <span className="text-stone-400 text-xs font-medium">
                    / don unique d'encouragement
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2 pt-2 border-t border-amber-500/10 text-xs text-stone-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Offrir un thé chaud et un grand encouragement aux créateurs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Permettre d'offrir le Chapitre 1 gratuitement à tous</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>100% Éthique, sans abonnement caché</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-2">
              <button
                type="button"
                onClick={() => handleCheckout('https://buy.stripe.com/test_3cIdRbfjj0H54gT5F63Ru00')}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-stone-800 to-stone-700 hover:from-stone-700 hover:to-stone-600 text-amber-200 font-cinzel font-bold text-xs sm:text-sm border border-amber-500/30 shadow-md active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Offrir un Thé (1,99 €)</span>
                <ExternalLink className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Colonne 2 : Pack Fondateur / Chapitres 2 & 3 (4,99 € promo) */}
          <div className="rounded-3xl bg-gradient-to-b from-[#1c1628] to-[#120e1c] border-2 border-amber-500/60 hover:border-amber-400 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-[0_15px_40px_rgba(217,124,39,0.25)] relative group ring-1 ring-amber-500/30">
            {/* Top Launch Promo Ribbon */}
            <div className="absolute -top-3.5 right-6">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-[11px] uppercase tracking-wider font-cinzel shadow-lg shadow-red-950/60 border border-red-400 animate-pulse">
                -38% OFFRE DE LANCEMENT
              </span>
            </div>

            <div className="space-y-5">
              {/* Image Preview of Chapter 2/3 Scene */}
              <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border border-amber-400/40 shadow-md">
                <img 
                  src={ch2MarketScene} 
                  alt="Scène du marché aux grenades - Chapitre 2" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1628] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#1c1628]/90 border border-amber-400 text-amber-300 text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Chapitres 2 & 3 Inclus
                  </span>
                </div>
              </div>

              {/* Title & Pricing */}
              <div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-extrabold text-amber-100 mb-1.5">
                  Pack Fondateur
                </h3>
                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="text-stone-400 line-through text-base font-bold">
                    7,99 €
                  </span>
                  <span className="text-3xl font-black text-amber-300 font-cinzel">
                    4,99 €
                  </span>
                  <span className="text-red-400 text-[10px] font-bold uppercase tracking-wider bg-red-950/60 px-1.5 py-0.5 rounded border border-red-500/30">
                    Offre Limitée
                  </span>
                </div>
                <p className="text-stone-300 text-xs leading-relaxed">
                  Débloquez l'accès complet et immédiat aux deux prochains chapitres majeurs.
                </p>
              </div>

              {/* Story Highlights & Features */}
              <div className="space-y-2 pt-2 border-t border-amber-500/20">
                <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs leading-relaxed space-y-1">
                  <div className="font-bold text-amber-200 flex items-center gap-1">
                    <span>🌾</span> Chapitre 2 : Le Chemin du Hilm
                  </div>
                  <p className="text-stone-300 text-[11px]">
                    Maîtriser le feu de la colère par la douceur sur la place du marché.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs leading-relaxed space-y-1">
                  <div className="font-bold text-purple-200 flex items-center gap-1">
                    <span>🩹</span> Chapitre 3 : L'Enfant à l'Attelle (Sabr)
                  </div>
                  <p className="text-stone-300 text-[11px]">
                    Patience face à la maladie, remèdes prophétiques & soutien fraternel.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-2">
              <button
                type="button"
                onClick={() => handleCheckout('https://buy.stripe.com/test_4gM4gB7QR3ThbJlgjK3Ru01')}
                style={{
                  backgroundColor: '#d97c27',
                  backgroundImage: 'linear-gradient(135deg, #d97c27 0%, #f59e0b 50%, #d97c27 100%)',
                  color: '#1a1209'
                }}
                className="w-full py-3.5 px-4 rounded-xl text-[#1a1209] font-cinzel font-black text-xs sm:text-sm border-2 border-amber-300 shadow-[0_4px_20px_rgba(245,158,11,0.4)] active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-110"
              >
                <span>Débloquer les Chapitres 2 & 3 (4,99 €)</span>
                <ExternalLink className="w-4 h-4 text-[#1a1209]" />
              </button>
            </div>
          </div>

          {/* Colonne 3 : TEASER CHAPITRE 4 — « Ce que tu as encore » (ARRIVE BIENTÔT) */}
          <div className="rounded-3xl bg-gradient-to-b from-[#111827] to-[#0c101c] border-2 border-emerald-500/40 hover:border-emerald-400 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-[0_15px_35px_rgba(16,185,129,0.15)] relative group">
            {/* Top Banner "ARRIVE BIENTÔT" */}
            <div className="absolute -top-3.5 right-6">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-[11px] uppercase tracking-wider font-cinzel shadow-lg shadow-emerald-950/60 border border-emerald-300 flex items-center gap-1.5 animate-pulse">
                <Sparkles className="w-3 h-3 text-amber-200" />
                ARRIVE BIENTÔT
              </span>
            </div>

            <div className="space-y-5">
              {/* Image Preview of Chapter 4 Under the Tree */}
              <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border border-emerald-500/40 shadow-md">
                <img 
                  src={ch4TeaserImage} 
                  alt="Othmân et son ami sous l'arbre observant l'oiseau - Chapitre 4" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#111827]/90 border border-emerald-400/50 text-emerald-300 text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-sm">
                    <Heart className="w-3.5 h-3.5 text-emerald-400" />
                    Chapitre 4 : Birr al-Wālidayn
                  </span>
                </div>
              </div>

              {/* Title & Status */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 font-cinzel">
                    Teaser Exclusif
                  </span>
                  <span className="text-[10px] font-amiri font-bold text-amber-300/80">
                    بر الوالدين والإحسان
                  </span>
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-extrabold text-stone-100 mb-1.5">
                  « Ce que tu as encore »
                </h3>
                <p className="text-emerald-200/90 text-xs font-semibold mb-2">
                  La Bonté envers les Parents & la Reconnaissance
                </p>
                <p className="text-stone-300 text-xs leading-relaxed font-sans">
                  Après un agacement matinal envers sa mère, Othmân quitte précipitamment la maison. Réfugié sous un grand arbre avec son ami d'enfance, ils observent en silence un oiseau nourrir son nid. Une confidence inattendue et bouleversante va bousculer son regard sur ce qu'il croyait ordinaire.
                </p>
              </div>

              {/* Teaser Story Points */}
              <div className="space-y-2 pt-2 border-t border-emerald-500/20 text-xs text-stone-300">
                <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs leading-relaxed space-y-1">
                  <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                    <span>🕊️</span> Méditation & Nature
                  </div>
                  <p className="text-stone-300 text-[11px]">
                    L'observation de l'oiseau qui part le ventre vide et revient nourrir son nid.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-teal-950/30 border border-teal-500/20 text-xs leading-relaxed space-y-1">
                  <div className="font-bold text-teal-300 flex items-center gap-1.5">
                    <span>💭</span> La Rencontre sous l'Arbre
                  </div>
                  <p className="text-stone-300 text-[11px]">
                    Une discussion sincère qui invite à reconsidérer nos liens familiaux les plus précieux.
                  </p>
                </div>
              </div>
            </div>

            {/* Teaser Action Link */}
            <div className="mt-6 pt-2">
              <button
                type="button"
                onClick={scrollToRoadmap}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-900/60 to-teal-900/60 hover:from-emerald-800/70 hover:to-teal-800/70 text-emerald-200 font-cinzel font-bold text-xs sm:text-sm border border-emerald-400/40 shadow-md active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Découvrir la Roadmap Complète</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
