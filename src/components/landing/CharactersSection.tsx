import { useState } from 'react';
import { CHARACTERS } from '../../data/gameData';
import { Character } from '../../types';
import { Users, Sparkles, Heart, Shield, Compass, BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CharactersSection() {
  const { t } = useLanguage();

  const localizedCharacters = [
    {
      id: "othman",
      name: t.characters.othmanName,
      arabicName: "عُثْمَان",
      role: t.characters.othmanRole,
      portrait: "/game-assets/othman.png",
      quote: t.characters.othmanQuote,
      description: t.characters.othmanDesc,
      traits: t.characters.othmanTraits,
      stats: { sagesse: 45, serenite: 55, courage: 60, hilm: 50 }
    },
    {
      id: "noura",
      name: t.characters.nouraName,
      arabicName: "نُورَة",
      role: t.characters.nouraRole,
      portrait: "/game-assets/noura.png",
      quote: t.characters.nouraQuote,
      description: t.characters.nouraDesc,
      traits: t.characters.nouraTraits,
      stats: { sagesse: 95, serenite: 90, courage: 80, hilm: 95 }
    },
    {
      id: "waswas",
      name: t.characters.waswasName,
      arabicName: "الوَسْوَاس",
      role: t.characters.waswasRole,
      portrait: "/game-assets/waswas.png",
      quote: t.characters.waswasQuote,
      description: t.characters.waswasDesc,
      traits: t.characters.waswasTraits,
      stats: { sagesse: 10, serenite: 5, courage: 15, hilm: 10 }
    },
    {
      id: "sage",
      name: t.characters.sageName,
      arabicName: "حَكِيمُ القَرْيَة",
      role: t.characters.sageRole,
      portrait: "/game-assets/carrefour.jpg",
      quote: t.characters.sageQuote,
      description: t.characters.sageDesc,
      traits: t.characters.sageTraits,
      stats: { sagesse: 98, serenite: 92, courage: 85, hilm: 90 }
    }
  ];

  const [selectedId, setSelectedId] = useState<string>("othman");
  const selectedCharacter = localizedCharacters.find(c => c.id === selectedId) || localizedCharacters[0];

  return (
    <section id="personnages" className="py-24 bg-[#0a080e] relative overflow-hidden">
      
      {/* Background radial sand glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1510] border border-[#d4af37]/40 text-[#f5efe6] text-xs font-cinzel font-semibold tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Users className="w-3.5 h-3.5 text-[#e5c158]" />
            {t.characters.badge}
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#fbf6ec] tracking-wide">
            {t.characters.title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs font-cinzel tracking-widest text-[#d8c29d]/80 uppercase">
            <span>{t.characters.subTagline}</span>
          </div>
          <p className="text-[#d8c29d] text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            {t.characters.subtitle}
          </p>
        </div>

        {/* Character Navigation Tabs (Portraits) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {localizedCharacters.map((char) => {
            const isSelected = selectedCharacter.id === char.id;
            return (
              <button
                key={char.id}
                onClick={() => setSelectedId(char.id)}
                className={`p-4 rounded-xl text-left rtl:text-right transition-all duration-300 cursor-pointer border flex flex-col sm:flex-row items-center gap-3.5 ${
                  isSelected 
                    ? 'bg-gradient-to-r from-[#241a12] via-[#1b140e] to-[#140f0c] border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.25)] ring-1 ring-[#e5c158]/40 scale-102' 
                    : 'bg-[#141018] border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:bg-[#1a1420]'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl overflow-hidden bg-stone-900 border shrink-0 p-1 transition-all ${
                  isSelected ? 'border-[#e5c158] ring-1 ring-[#e5c158]/50 shadow-md' : 'border-[#d4af37]/30'
                }`}>
                  <img
                    src={char.portrait}
                    alt={char.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center sm:text-left rtl:sm:text-right min-w-0">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <span className={`font-cinzel font-bold text-sm truncate ${
                      isSelected ? 'text-[#fff8eb]' : 'text-[#ede2cf]'
                    }`}>
                      {char.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#e5c158] font-cinzel font-medium block truncate">
                    {char.role}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Character Spotlight Card (AC Mirage Dossier) */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#18131e] via-[#130f18] to-[#0e0b12] border-2 border-[#d4af37]/40 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-6 sm:p-10 gilded-relic-frame">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Big Character Artwork & Calligraphy */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-b from-[#241a12] via-[#17121b] to-[#0c0a0f] border-2 border-[#d4af37]/50 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-[#e5c158]/15 via-transparent to-transparent pointer-events-none" />
                <img
                  src={selectedCharacter.portrait}
                  alt={selectedCharacter.name}
                  className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Arabic Name Display */}
              {selectedCharacter.arabicName && (
                <div className="mt-4">
                  <span className="font-amiri text-4xl text-[#fce8a6] font-bold block select-none drop-shadow">
                    {selectedCharacter.arabicName}
                  </span>
                </div>
              )}
            </div>

            {/* Right: Biography, Quote & Moral Attributes */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Name & Role Header */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#20170f] border border-[#d4af37]/40 text-[#e5c158] text-xs font-cinzel font-semibold">
                  ✧ {selectedCharacter.role}
                </div>
                <h3 className="font-cinzel text-3xl sm:text-4xl font-black text-[#fbf6ec]">
                  {selectedCharacter.name}
                </h3>
              </div>

              {/* Character Quote (Parchment Ribbon Look) */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#2a1d12]/90 via-[#21170f]/80 to-[#18110b]/90 border-l-4 border-[#e5c158] border-y border-r border-[#d4af37]/20 text-[#ede2cf] italic font-serif text-sm sm:text-base leading-relaxed shadow-md">
                « {selectedCharacter.quote} »
              </div>

              {/* Bio description */}
              <p className="text-sm sm:text-base text-[#d8c29d] leading-relaxed font-sans">
                {selectedCharacter.description}
              </p>

              {/* Traits Pills */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest font-cinzel font-bold text-[#e5c158] block">
                  {t.characters.traitsTitle}
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCharacter.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 rounded-full bg-[#1b1420] border border-[#d4af37]/30 text-xs text-[#ede2cf] font-medium shadow-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Moral Stats / Virtues Bars (AC Mirage Attributes) */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] uppercase tracking-widest font-cinzel font-bold text-[#e5c158] block">
                  {t.characters.attributesTitle}
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Sagesse */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-[#d8c29d]">
                      <span className="flex items-center gap-1.5 font-cinzel font-semibold">
                        <BookOpen className="w-3.5 h-3.5 text-sky-400" /> {t.characters.statWisdom}
                      </span>
                      <span className="font-mono text-sky-300 font-bold">{selectedCharacter.stats.sagesse}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#0a080d] overflow-hidden border border-sky-500/20">
                      <div 
                        className="h-full bg-gradient-to-r from-sky-600 to-sky-400 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(56,189,248,0.5)]" 
                        style={{ width: `${selectedCharacter.stats.sagesse}%` }} 
                      />
                    </div>
                  </div>

                  {/* Sérénité */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-[#d8c29d]">
                      <span className="flex items-center gap-1.5 font-cinzel font-semibold">
                        <Heart className="w-3.5 h-3.5 text-emerald-400" /> {t.characters.statPeace}
                      </span>
                      <span className="font-mono text-emerald-300 font-bold">{selectedCharacter.stats.serenite}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#0a080d] overflow-hidden border border-emerald-500/20">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(52,211,153,0.5)]" 
                        style={{ width: `${selectedCharacter.stats.serenite}%` }} 
                      />
                    </div>
                  </div>

                  {/* Courage */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-[#d8c29d]">
                      <span className="flex items-center gap-1.5 font-cinzel font-semibold">
                        <Shield className="w-3.5 h-3.5 text-[#e5c158]" /> {t.characters.statCourage}
                      </span>
                      <span className="font-mono text-[#ffd700] font-bold">{selectedCharacter.stats.courage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#0a080d] overflow-hidden border border-[#d4af37]/30">
                      <div 
                        className="h-full bg-gradient-to-r from-[#b88628] to-[#ffd700] rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(229,193,88,0.5)]" 
                        style={{ width: `${selectedCharacter.stats.courage}%` }} 
                      />
                    </div>
                  </div>

                  {/* Hilm */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-[#d8c29d]">
                      <span className="flex items-center gap-1.5 font-cinzel font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" /> {t.characters.statHilm}
                      </span>
                      <span className="font-mono text-amber-200 font-bold">{selectedCharacter.stats.hilm}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#0a080d] overflow-hidden border border-amber-500/20">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-300 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
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
