import React, { useState, useEffect, useRef } from 'react';
import { CHAPTERS } from '../../data/gameData';
import { Chapter } from '../../types';
import { Layers, Play, Lock, CheckCircle, MapPin, Sparkles, ChevronLeft, ChevronRight, Pause, Play as PlayIcon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ChaptersRoadmapProps {
  onOpenGame: () => void;
}

export default function ChaptersRoadmap({ onOpenGame }: ChaptersRoadmapProps) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const activeChapter: Chapter = CHAPTERS[activeIndex] || CHAPTERS[0];

  const SLIDE_DURATION = 6000; // 6 seconds per chapter

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CHAPTERS.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? CHAPTERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CHAPTERS.length);
  };

  return (
    <section 
      id="chapitres" 
      className="py-24 bg-[#0a0812] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 bg-radial-[circle_at_20%_30%] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-inner">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            {t.roadmap.badge}
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.roadmap.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {t.roadmap.subtitle}
          </p>
        </div>

        {/* Chapters Navigation Bar with Auto-slide Controls */}
        <div className="mb-6 flex flex-col gap-3">
          
          {/* Top helper indicator & auto-slide controls */}
          <div className="flex items-center justify-between text-xs text-stone-400 px-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px] font-cinzel">
                🧭 Choisis un Chapitre ({activeIndex + 1}/{CHAPTERS.length})
              </span>
              {isHovered && (
                <span className="text-[10px] text-stone-400 bg-stone-900 px-2 py-0.5 rounded-md border border-stone-800">
                  Défilement en pause
                </span>
              )}
            </div>

            {/* Arrows & Pause Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                title={isAutoPlay ? "Mettre en pause le défilement automatique" : "Activer le défilement automatique"}
                className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-amber-500/20 text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
              >
                {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <PlayIcon className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={handlePrev}
                aria-label="Chapitre précédent"
                className="p-1.5 rounded-lg bg-stone-900 hover:bg-amber-950/60 border border-amber-500/30 text-amber-300 hover:scale-105 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Chapitre suivant"
                className="p-1.5 rounded-lg bg-stone-900 hover:bg-amber-950/60 border border-amber-500/30 text-amber-300 hover:scale-105 transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chapters Horizontal Navigation Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar">
            {CHAPTERS.map((ch, idx) => {
              const isSelected = activeIndex === idx;
              const isAvailable = ch.status === 'available';

              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`shrink-0 px-4 sm:px-5 py-3 rounded-2xl border-2 text-left transition-all duration-300 cursor-pointer flex items-center gap-3 relative ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 border-amber-300 text-stone-950 shadow-[0_0_25px_rgba(245,158,11,0.5)] scale-105 z-10'
                      : 'bg-[#151221] hover:bg-[#201c30] border-amber-500/20 hover:border-amber-400/50 text-stone-200 hover:scale-102'
                  }`}
                >
                  {/* Active Indicator Pulse Ring */}
                  {isSelected && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-300"></span>
                    </span>
                  )}

                  {/* Chapter Number Badge */}
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-black text-xs shrink-0 ${
                    isSelected
                      ? 'bg-stone-950 text-amber-300 border border-stone-800 shadow-md'
                      : isAvailable 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40' 
                      : 'bg-stone-900 text-stone-400 border border-stone-700'
                  }`}>
                    {ch.number}
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`font-cinzel font-black text-xs sm:text-sm whitespace-nowrap ${
                        isSelected ? 'text-stone-950 font-black drop-shadow-xs' : 'text-stone-100 font-bold'
                      }`}>
                        {ch.title}
                      </span>
                      {isAvailable ? (
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-stone-950' : 'bg-emerald-400'} animate-pulse`} />
                      ) : (
                        <Lock className={`w-3 h-3 ${isSelected ? 'text-stone-900' : 'text-stone-500'}`} />
                      )}
                    </div>
                    <span className={`text-[10px] font-amiri block whitespace-nowrap ${
                      isSelected ? 'text-stone-900 font-black' : 'text-amber-300/70 font-bold'
                    }`}>
                      {ch.arabicTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Animated Slide Progress Bar */}
          {isAutoPlay && !isHovered && (
            <div className="w-full h-1 bg-stone-900 rounded-full overflow-hidden">
              <div 
                key={activeIndex}
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-[progress_6s_linear]"
                style={{
                  animation: `progressBar ${SLIDE_DURATION}ms linear`
                }}
              />
            </div>
          )}
        </div>

        {/* Selected Chapter Presentation Showcase */}
        <div className="relative rounded-3xl bg-[#13111e] border-2 border-amber-500/40 overflow-hidden shadow-2xl transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Visual Scene Background */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[520px]">
              <img
                src={activeChapter.bgImage}
                alt={activeChapter.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#13111e]/40 to-[#13111e]" />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border shadow-lg ${
                  activeChapter.status === 'available'
                    ? 'bg-emerald-950/90 text-emerald-300 border-emerald-400/60'
                    : 'bg-stone-900/90 text-stone-200 border-stone-600'
                }`}>
                  {activeChapter.statusLabel}
                </span>
                <span className="font-amiri text-2xl sm:text-3xl text-amber-300 font-bold drop-shadow-lg">
                  {activeChapter.arabicTitle}
                </span>
              </div>

              {/* Location pin */}
              <div className="absolute bottom-6 left-6 right-6 p-3 rounded-2xl bg-[#0c0a12]/85 backdrop-blur-md border border-amber-500/30 text-xs text-stone-200 flex items-center gap-2.5 shadow-md">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">{activeChapter.location}</span>
              </div>

              {/* Floating Prev / Next Controls over Image for Mobile */}
              <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex items-center justify-between lg:hidden pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 flex items-center justify-center pointer-events-auto hover:bg-black/80"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 flex items-center justify-center pointer-events-auto hover:bg-black/80"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column: Chapter Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/40 text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
                      Chapitre {activeChapter.number}
                    </span>
                    <span className="text-xs text-stone-400">
                      • {activeChapter.statusLabel}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-amber-100 leading-tight">
                    {activeChapter.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-amber-200/90">
                    {activeChapter.subtitle}
                  </p>
                </div>

                {/* Virtue Pillar */}
                <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 flex items-center gap-3.5 shadow-inner">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-300/80 block font-cinzel tracking-wider">
                      Vertu Centrale à Maîtriser
                    </span>
                    <span className="text-sm sm:text-base font-bold text-amber-100 font-cinzel">
                      {activeChapter.virtue}
                    </span>
                  </div>
                </div>

                {/* Synopsis */}
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
                  {activeChapter.synopsis}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] uppercase tracking-wider font-cinzel font-bold text-amber-400 block">
                    Épreuves & Quêtes Clés du Chapitre
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeChapter.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-stone-300 p-2.5 rounded-xl bg-[#191526] border border-amber-500/10">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button & Quick Switcher */}
              <div className="pt-5 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                {activeChapter.status === 'available' ? (
                  <button
                    onClick={onOpenGame}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-stone-950 font-cinzel font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:scale-105 active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-stone-950" />
                    <span>Jouer au Chapitre 1 Maintenant</span>
                  </button>
                ) : (
                  <div className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-stone-900 border border-stone-700 text-stone-300 text-xs flex items-center gap-2.5">
                    <Lock className="w-4 h-4 text-amber-400" />
                    <span>Débloquable dans le Pack Fondateur</span>
                  </div>
                )}

                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                  {CHAPTERS.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveIndex(dotIdx)}
                      aria-label={`Aller au chapitre ${dotIdx + 1}`}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeIndex === dotIdx 
                          ? 'w-8 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]' 
                          : 'w-2.5 bg-stone-700 hover:bg-stone-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
