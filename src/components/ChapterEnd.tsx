import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FastForward,
  Play,
  Save
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import { CustomAssetsConfig } from '../utils/assets';
import { trackChapterCompleted } from '../utils/analytics';
import { useLanguage } from '../context/LanguageContext';
import { CharacterTraits } from '../types';
import { getPersonalityProfile, TRAIT_CONFIG, INITIAL_CHARACTER_TRAITS } from '../utils/characterTraits';

interface ChapterEndProps {
  xpTotal: number;
  chapterNumber?: number;
  traits?: CharacterTraits;
  isSupporter?: boolean;
  onReplay: () => void;
  onOpenKnowledge: () => void;
  onContinueAdventure?: () => void;
  onSaveAndExit?: () => void;
  onOpenFeedback?: () => void;
  onOpenSupport?: () => void;
  customAssets?: CustomAssetsConfig;
}

export const ChapterEnd: React.FC<ChapterEndProps> = ({
  xpTotal,
  chapterNumber = 1,
  traits,
  isSupporter = false,
  onReplay,
  onContinueAdventure,
  onSaveAndExit,
  onOpenFeedback
}) => {
  const { language, isRtl } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);

  const personality = getPersonalityProfile(traits || INITIAL_CHARACTER_TRAITS);

  useEffect(() => {
    soundManager.playChapterComplete();
    trackChapterCompleted(chapterNumber, xpTotal, chapterNumber);
  }, [xpTotal, chapterNumber]);

  const isFinalPopup = currentSlide === 1;

  // Auto-advance slide 0 (Trésors) after 7.5 seconds
  useEffect(() => {
    if (isFinalPopup) return;
    const timer = setTimeout(() => {
      setCurrentSlide(1);
    }, 7500);
    return () => clearTimeout(timer);
  }, [isFinalPopup]);

  const goToNextSlide = () => {
    soundManager.playSelect();
    setCurrentSlide(1);
  };

  const goToPrevSlide = () => {
    soundManager.playSelect();
    setCurrentSlide(0);
  };

  const nextChapterTitle =
    chapterNumber === 1
      ? 'Chapitre 2 : Le Chemin du Hilm'
      : chapterNumber === 2
      ? 'Chapitre 3 : La Montagne Intérieure'
      : 'Trilogie de Nour Complète !';

  const headerTag = isFinalPopup
    ? language === 'ar'
      ? 'خِتَامُ الْفَصْلِ • الْمُغَامَرَةُ تَتَوَاصَلُ'
      : 'CHAPITRE ACCOMPLI • EN ROUTE'
    : language === 'ar'
    ? 'ثَمَرَاتُ الرِّحْلَةِ • قِمَّةُ الْفَصْلِ'
    : 'BILAN DU CHAPITRE • TRÉSORS FORGÉS';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md select-none animate-in fade-in duration-300"
    >
      <div className="w-full max-w-xl bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl shadow-[0_12px_32px_rgba(0,0,0,0.85)] flex flex-col relative overflow-hidden my-auto animate-in zoom-in-95 duration-300">
        
        {/* Top Floating Bar: Chapter Tag & Skip Button */}
        <div className="pt-3.5 px-5 pb-2 flex items-center justify-between border-b border-[#3a2312]/15 bg-[#f5ecdc]/80 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d97c27] animate-ping" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#8c5a2b] font-cinzel">
              {headerTag}
            </span>
          </div>

          {!isFinalPopup && (
            <button
              onClick={() => {
                soundManager.playSelect();
                setCurrentSlide(1);
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#ebdfc8] hover:bg-[#d97c27] text-[#3a2312] hover:text-white border border-[#3a2312]/40 text-[10px] sm:text-xs font-black font-cinzel tracking-wider uppercase transition-all cursor-pointer shadow-xs active:translate-y-0.5"
              title="Passer directement au choix final"
            >
              <span>Passer</span>
              <FastForward className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* ÉCRAN 1 (SLIDE 0) : LES TRÉSORS DU CŒUR & STATS SANS SCROLL */}
        {currentSlide === 0 && (
          <div className="p-4 sm:p-6 flex flex-col justify-between animate-in fade-in slide-in-from-right-3 duration-400 min-h-[340px] sm:min-h-[380px]">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500 fill-amber-300 shrink-0" />
                <h2 className="text-sm sm:text-lg font-black text-[#3a2312] font-cinzel">
                  {language === 'ar' ? 'ثَمَرَاتُ الْقَلْبِ الْمُكْتَسَبَةُ' : 'Les Trésors Forgés dans l’Âme'}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-2xl bg-[#f3ebd9] border-2 border-[#8c5a2b] flex flex-col items-center justify-center text-center shadow-xs">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#8c5a2b] font-cinzel uppercase tracking-wider">
                    Score du Voyageur
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#d97c27] font-cinzel mt-0.5">
                    +{xpTotal} XP
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-[#e8f5e9] border-2 border-[#2d6a4f] flex flex-col items-center justify-center text-center shadow-xs">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#2d6a4f] font-cinzel uppercase tracking-wider">
                    Tempérament Forgé
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#1b4332] font-cinzel mt-0.5">
                    {personality.title}
                  </span>
                </div>
              </div>

              <div className="p-2.5 sm:p-3 bg-[#f5ebd7]/70 rounded-2xl border border-[#d2be9f] flex flex-col gap-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#8c5a2b] font-cinzel">
                  Vertus révélées au fil de tes choix :
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['adab', 'sabr', 'hilm', 'discipline', 'vitalite', 'ilm'] as const).map((tk) => {
                    const cfg = TRAIT_CONFIG[tk];
                    return (
                      <div
                        key={tk}
                        className="flex items-center gap-1 px-2 py-1 rounded-xl bg-white/70 border border-[#d2be9f]/60 text-[#3a2312] shadow-xs text-center justify-center"
                      >
                        <span className="text-xs">{cfg.icon}</span>
                        <span className="text-[10px] font-cinzel font-bold truncate">{cfg.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-[#3a2312]/15 mt-2">
              <span className="text-[11px] text-[#8c5a2b] font-bold italic">
                {language === 'ar' ? 'كُلُّ خُطْوَةٍ صَادِقَةٍ تُنِيرُ الطَّرِيقَ...' : '« L’effort sincère porte toujours ses fruits. »'}
              </span>
              <button
                onClick={goToNextSlide}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#d97c27] hover:bg-[#bf6818] text-white font-black text-xs font-cinzel tracking-wider uppercase shadow-xs transition-all cursor-pointer active:translate-y-0.5"
              >
                <span>Suivant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ÉCRAN 2 (SLIDE 1) : LE POP-UP FINAL — SANS AUCUN SCROLL ! */}
        {currentSlide === 1 && (
          <div className="p-4 sm:p-6 flex flex-col justify-between animate-in zoom-in-95 duration-400 min-h-[340px] sm:min-h-[380px]">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#f59e0b] to-[#fde047] border-2 border-[#3a2312] flex items-center justify-center text-xl sm:text-2xl shadow-md">
                🏆
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <span className="px-3 py-0.5 rounded-full bg-[#16a34a] text-white text-[10px] font-black uppercase tracking-widest font-cinzel shadow-xs">
                  {language === 'ar' ? 'تَمَّ إِتْمَامُ الْفَصْلِ بِنَجَاحٍ' : 'Chapitre Accompli ✓'}
                </span>
                <h1 className="text-base sm:text-xl font-black text-[#3a2312] font-cinzel tracking-wide mt-1">
                  {nextChapterTitle}
                </h1>
                <p className="text-xs sm:text-sm text-[#6b4724] font-bold max-w-md mt-0.5">
                  {chapterNumber === 1
                    ? isSupporter || xpTotal >= 450
                      ? 'Tes sagesses et tes XP sont sauvegardés. Prêt pour la suite de l’aventure avec Othmân ?'
                      : 'Tes sagesses et tes XP sont sauvegardés. Débloque les Chapitres 2 & 3 avec le Pack Fondateur ou en atteignant 450 XP.'
                    : 'Ta progression est enregistrée dans ton carnet de voyage.'}
                </p>
              </div>

              {saveFeedback && (
                <div className="w-full py-1.5 px-3 rounded-xl bg-[#16a34a] text-white text-xs font-bold font-cinzel flex items-center justify-center gap-2 animate-in fade-in shadow-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{saveFeedback}</span>
                </div>
              )}
            </div>

            {/* LES DEUX BOUTONS PRINCIPAUX — CLAIRS, VISIBLES, SANS SCROLL */}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-[#3a2312]/15">
              {onContinueAdventure && (
                <div className="flex flex-col gap-1 w-full">
                  <button
                    onClick={() => {
                      soundManager.playSelect();
                      onContinueAdventure();
                    }}
                    className={`w-full py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2.5 border-2 active:translate-y-0.5 transition-all cursor-pointer font-cinzel tracking-wider uppercase ${
                      chapterNumber === 1 && !isSupporter && xpTotal < 450
                        ? 'bg-gradient-to-r from-[#d97c27] via-[#f59e0b] to-[#d97c27] hover:brightness-110 text-[#1a1209] border-amber-300 shadow-[0_4px_16px_rgba(245,158,11,0.35)]'
                        : 'bg-[#2d6a4f] hover:bg-[#1b4332] text-white border-[#1b4332] shadow-[0_4px_0_#1b4332]'
                    }`}
                  >
                    {chapterNumber === 1 && !isSupporter && xpTotal < 450 ? (
                      <>
                        <Sparkles className="w-4 h-4 fill-current text-[#1a1209]" />
                        <span>Débloquer les Chapitres 2 & 3 (4,99 €)</span>
                        <ArrowRight className="w-4 h-4 text-[#1a1209]" />
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-white" />
                        <span>
                          {chapterNumber === 3
                            ? "Ouvrir la Carte du Voyage"
                            : chapterNumber === 2
                            ? 'Continuer vers le Chapitre 3'
                            : 'Continuer vers le Chapitre 2'}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {chapterNumber === 1 && !isSupporter && xpTotal < 450 && (
                    <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#2d6a4f] pt-0.5">
                      <span className="inline-block">🛡️</span>
                      <span>Offre Pack Fondateur • Garantie Satisfait ou Remboursé 7j</span>
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={() => {
                  soundManager.playSelect();
                  onReplay();
                }}
                className="w-full py-2.5 px-4 rounded-2xl bg-[#ebdfc8] hover:bg-[#dfceb5] text-[#3a2312] font-black text-xs flex items-center justify-center gap-2 border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer font-cinzel tracking-wider uppercase"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#8c5a2b]" />
                <span>Rejouer ce Chapitre</span>
              </button>

              {/* Liens discrets tout en bas */}
              <div className="flex items-center justify-center gap-4 pt-1 text-[11px] font-bold text-[#8c5a2b]">
                <button
                  onClick={goToPrevSlide}
                  className="hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Revoir mes Trésors</span>
                </button>

                {onSaveAndExit && (
                  <>
                    <span>•</span>
                    <button
                      onClick={() => {
                        soundManager.playXpHarvest();
                        setSaveFeedback('Progression sauvegardée ! Redirection...');
                        setTimeout(() => onSaveAndExit(), 600);
                      }}
                      className="hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Save className="w-3 h-3" />
                      <span>Sauvegarder & Pause</span>
                    </button>
                  </>
                )}

                {onOpenFeedback && (
                  <>
                    <span>•</span>
                    <button
                      onClick={onOpenFeedback}
                      className="hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>Donner mon avis</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Stepper Dots (1, 2) */}
        <div className="py-2 px-6 bg-[#f5ecdc]/80 border-t border-[#3a2312]/15 flex items-center justify-center gap-2 shrink-0">
          {[0, 1].map((stepIdx) => {
            const isActive = stepIdx === currentSlide;
            const isPassed = stepIdx < currentSlide;
            return (
              <button
                key={stepIdx}
                onClick={() => {
                  soundManager.playSelect();
                  setCurrentSlide(stepIdx);
                }}
                aria-label={'Étape ' + (stepIdx + 1)}
                className={'h-2 rounded-full transition-all cursor-pointer ' + (
                  isActive
                    ? 'w-6 bg-[#d97c27] shadow-xs'
                    : isPassed
                    ? 'w-2 bg-[#2d6a4f]'
                    : 'w-2 bg-[#d2be9f]'
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
