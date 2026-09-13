import { useState } from 'react';
import { CHARACTERS } from '../../data/gameData';
import { Character } from '../../types';
import { Users, Sparkles, Heart, Shield, Compass, BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CharactersSection() {
  const { t } = useLanguage();
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(CHARACTERS[0]);

  return (
    <section id="personnages" className="py-24 bg-[#0c0a13] relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            {t.characters.badge}
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.characters.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {t.characters.subtitle}
          </p>
        </div>

        {/* Character Navigation Tabs (Portraits) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {CHARACTERS.map((char) => {
            const isSelected = selectedCharacter.id === char.id;
            return (
              <button
                key={char.id}
                onClick={() => setSelectedCharacter(char)}
                className={`p-4 rounded-xl text-left transition-all duration-300 cursor-pointer border flex flex-col sm:flex-row items-center gap-3 ${
                  isSelected 
                    ? 'bg-gradient-to-r from-[#1e192c] to-[#171322] border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] scale-102' 
                    : 'bg-[#12101b] border-amber-500/20 hover:border-amber-400/40 hover:bg-[#181524]'
                }`}
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-900/80 border border-amber-500/30 shrink-0 p-1">
                  <img
                    src={char.portrait}
                    alt={char.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center sm:text-left min-w-0">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <span className="font-cinzel font-bold text-sm text-stone-100 truncate">
                      {char.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-amber-400/80 font-medium block truncate">
                    {char.role}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Character Spotlight Card */}
        <div className="relative rounded-2xl bg-[#14121f] border-2 border-amber-500/30 overflow-hidden shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Big Character Artwork & Calligraphy */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-b from-stone-900 via-[#1b172a] to-stone-900 border-2 border-amber-500/40 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
                <img
                  src={selectedCharacter.portrait}
                  alt={selectedCharacter.name}
                  className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Arabic Name Display */}
              {selectedCharacter.arabicName && (
                <div className="mt-4">
                  <span className="font-amiri text-4xl text-amber-400/90 font-bold block select-none">
                    {selectedCharacter.arabicName}
                  </span>
                </div>
              )}
            </div>

            {/* Right: Biography, Quote & Moral Attributes */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Name & Role Header */}
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                  {selectedCharacter.role}
                </div>
                <h3 className="font-cinzel text-3xl sm:text-4xl font-black text-amber-100">
                  {selectedCharacter.name}
                </h3>
              </div>

              {/* Character Quote */}
              <div className="p-4 rounded-xl bg-amber-950/20 border-l-4 border-amber-400 text-stone-200 italic font-serif text-sm sm:text-base leading-relaxed">
                {selectedCharacter.quote}
              </div>

              {/* Bio description */}
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
                {selectedCharacter.description}
              </p>

              {/* Traits Pills */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-cinzel font-bold text-amber-400 block">
                  Traits Fondamentaux
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCharacter.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 rounded-full bg-[#1e192c] border border-amber-500/20 text-xs text-stone-300 font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Moral Stats / Virtues Bars */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] uppercase tracking-wider font-cinzel font-bold text-amber-400 block">
                  Attributs du Cœur & de l'Esprit
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Sagesse */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-stone-300">
                      <span className="flex items-center gap-1.5 font-medium">
                        <BookOpen className="w-3.5 h-3.5 text-sky-400" /> Sagesse & Discernement
                      </span>
                      <span className="font-mono text-sky-300">{selectedCharacter.stats.sagesse}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-900 overflow-hidden border border-sky-500/20">
                      <div 
                        className="h-full bg-gradient-to-r from-sky-600 to-sky-400 rounded-full transition-all duration-500" 
                        style={{ width: `${selectedCharacter.stats.sagesse}%` }} 
                      />
                    </div>
                  </div>

                  {/* Sérénité */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-stone-300">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Heart className="w-3.5 h-3.5 text-emerald-400" /> Paix Intérieure & Foi
                      </span>
                      <span className="font-mono text-emerald-300">{selectedCharacter.stats.serenite}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-900 overflow-hidden border border-emerald-500/20">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-500" 
                        style={{ width: `${selectedCharacter.stats.serenite}%` }} 
                      />
                    </div>
                  </div>

                  {/* Courage */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-stone-300">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Shield className="w-3.5 h-3.5 text-amber-400" /> Courage Moral
                      </span>
                      <span className="font-mono text-amber-300">{selectedCharacter.stats.courage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-900 overflow-hidden border border-amber-500/20">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-500" 
                        style={{ width: `${selectedCharacter.stats.courage}%` }} 
                      />
                    </div>
                  </div>

                  {/* Hilm */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-stone-300">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Al-Hilm (Maîtrise de soi)
                      </span>
                      <span className="font-mono text-purple-300">{selectedCharacter.stats.hilm}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-900 overflow-hidden border border-purple-500/20">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-400 rounded-full transition-all duration-500" 
                        style={{ width: `${selectedCharacter.stats.hilm}%` }} 
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
