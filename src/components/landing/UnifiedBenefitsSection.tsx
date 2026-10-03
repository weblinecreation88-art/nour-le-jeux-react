import React from 'react';
import { Sparkles, HeartHandshake, Shield, Compass, BookOpen } from 'lucide-react';
import GameplayMechanics from './GameplayMechanics';
import BookOfWisdom from './BookOfWisdom';

export default function UnifiedBenefitsSection() {
  return (
    <section id="unified-benefits" className="py-20 bg-[#0a080e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#e5c158]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/40 text-[#f5efe6] text-xs font-cinzel font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#e5c158]" />
            Valeurs & Apprentissages
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-[#fbf6ec]">
            Ce que l'enfant apprend
          </h2>
          <p className="text-[#d8c29d] text-base sm:text-lg leading-relaxed font-sans">
            Un parcours unique qui relie le monde virtuel aux actions du quotidien. Des défis bienveillants et des quizz pour grandir avec sagesse.
          </p>
        </div>

        {/* Part 1: Gameplay Mechanics */}
        <div className="mb-20">
          <GameplayMechanics />
        </div>

        {/* Part 2: Book of Wisdom (Quizz / Knowledge) */}
        <div className="mb-20">
          <BookOfWisdom />
        </div>

        {/* Part 3: Real Life / Off-screen actions (Parent-child dialogue) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#15101a] to-[#0c0a10] border border-[#d4af37]/40 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-5">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#fbf6ec]">
                Le dialogue Parents-Enfant au cœur de l'aventure
              </h3>
              <p className="text-[#d8c29d] text-base leading-relaxed">
                Le jeu ne se termine pas à l'écran. À la fin de certains chapitres, l'enfant est invité à accomplir une action réelle : ranger sa chambre, sourire à ses parents, ou apaiser une dispute. 
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3 text-sm text-[#e8dac1]">
                  <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Des actions basées sur l'honneur et la confiance.</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#e8dac1]">
                  <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Aucune donnée privée ou photo demandée.</span>
                </li>
              </ul>
            </div>
            
            <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden border border-[#d4af37]/30 relative group shadow-2xl">
               <img
                 src="/game-assets/family_bond.jpg" 
                 alt="Action réelle en famille"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                 onError={(e) => { (e.target as HTMLImageElement).src = '/game-assets/chambre.jpg'; }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                 <span className="font-cinzel text-sm font-bold text-[#ffd700]">Ponts de Nour (IRL)</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
