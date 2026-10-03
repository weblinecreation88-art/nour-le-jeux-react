import React from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function EmailCaptureSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-[#0a080e] relative border-t border-[#d4af37]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#fbf6ec]">
          Recevez la fiche d'activités du chapitre 1
        </h2>
        <p className="text-[#d8c29d] text-sm sm:text-base max-w-xl mx-auto font-sans">
          Inscrivez-vous pour recevoir des ressources pédagogiques exclusives, des fiches d'activités pour accompagner vos enfants hors écran, et être informé des sorties des prochains chapitres.
        </p>
        
        <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d8c29d]/60" />
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#1b1510]/50 border border-[#d4af37]/40 text-[#f5efe6] placeholder-[#d8c29d]/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/50 transition-all text-base"
              required
            />
          </div>
          <button 
            type="submit"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#e5c158] to-[#c59b27] text-stone-950 font-cinzel font-bold text-sm tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] whitespace-nowrap"
          >
            Recevoir la fiche
          </button>
        </form>

        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <label className="flex items-start gap-2 text-xs text-[#d8c29d] max-w-lg text-left cursor-pointer">
            <input type="checkbox" required className="mt-0.5 accent-[#e5c158]" />
            <span>
              J'accepte de recevoir les fiches d'activités et actualités de NOUR. Vos données ne seront jamais partagées. Vous pouvez vous désinscrire à tout moment. <a href="#" className="underline hover:text-[#f5efe6]">Politique de confidentialité (RGPD)</a>.
            </span>
          </label>
          <div className="flex items-center gap-4 text-xs text-[#d8c29d]/70 mt-1">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Gratuit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zéro spam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
