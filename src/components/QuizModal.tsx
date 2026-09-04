import React, { useState, useRef, useEffect } from 'react';
import { Quiz } from '../types';
import { CharacterAvatar } from './CharacterAvatar';
import { CheckCircle2, XCircle, BookOpen, ArrowRight, ShieldCheck, RotateCcw } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { CustomAssetsConfig } from '../utils/assets';

interface QuizModalProps {
  quiz: Quiz;
  onComplete: () => void;
  customAssets?: CustomAssetsConfig;
}

export const QuizModal: React.FC<QuizModalProps> = ({ quiz, onComplete, customAssets }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    setSelectedOptionId(optionId);
    setIsAnswered(true);

    if (optionId === quiz.correctOptionId) {
      soundManager.playQuizSuccess();
    } else {
      soundManager.playSelect();
    }

    // Smoothly scroll down to reveal explanation on mobile/small screens
    setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          top: scrollContainerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const isCorrect = selectedOptionId === quiz.correctOptionId;

  return (
    <div className="w-full max-w-lg mx-auto px-2.5 sm:px-4 z-30 animate-in fade-in zoom-in-95 duration-200 select-none">
      <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-3xl shadow-[0_6px_0_#3a2312] flex flex-col max-h-[82vh] sm:max-h-[85vh] relative overflow-hidden">
        {/* Pinned Header */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 border-b-2 border-[#3a2312] bg-[#f3ebd9] shrink-0 z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] text-[#3a2312]">
              <BookOpen className="w-4 h-4 text-[#d97c27]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#8c5a2b] uppercase tracking-wider font-cinzel">
                Apprentissage & Réflexion
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-[#3a2312] font-cinzel line-clamp-1">
                Quiz — {quiz.topic}
              </h3>
            </div>
          </div>

          <span className="text-[10px] font-bold text-[#8c5a2b] bg-[#ebdfc8] px-2.5 py-0.5 rounded-full border border-[#3a2312] font-mono shrink-0">
            {quiz.reference.reference}
          </span>
        </div>

        {/* Scrollable Content Body */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-3.5 sm:p-4 flex flex-col gap-3 custom-scrollbar"
        >
          {/* Prompt from Noura */}
          <div className="flex items-start gap-2.5 sm:gap-3 bg-[#ebdfc8] p-2.5 sm:p-3 rounded-2xl border-2 border-[#3a2312] shrink-0">
            <CharacterAvatar
              speaker={quiz.promptSpeaker}
              size="sm"
              customAssets={customAssets}
            />
            <div className="flex-1">
              <span className="text-[10px] font-bold text-[#2d6a4f] font-cinzel">
                NOURA
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#3a2312] leading-snug">
                « {quiz.question} »
              </p>
            </div>
          </div>

          {/* 4 Options Grid */}
          <div className="grid grid-cols-1 gap-2 shrink-0">
            {quiz.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              const resolvedStyle = isAnswered
                ? option.isCorrect
                  ? 'bg-[#ebf5e9] border-[#4a804d] text-[#2d522f] shadow-[0_2px_0_#3a2312] font-bold'
                  : isSelected
                  ? 'bg-[#fde8e8] border-[#c53030] text-[#9b2c2c] shadow-[0_2px_0_#3a2312]'
                  : 'bg-[#ebdfc8]/50 border-[#b89f81] text-[#8c6b4e] opacity-60'
                : 'bg-[#f3ebd9] border-[#3a2312] text-[#3a2312] hover:bg-[#ebdcc4] shadow-[0_2px_0_#3a2312]';

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border-2 transition-all text-left text-xs sm:text-sm font-bold cursor-pointer ${resolvedStyle}`}
                >
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#ebdfc8] text-[10px] sm:text-[11px] font-bold flex items-center justify-center border border-[#3a2312] shrink-0 font-mono">
                    {option.id}
                  </span>
                  <span className="flex-1 leading-snug">{option.text}</span>
                  {isAnswered && option.isCorrect && (
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a804d] shrink-0" />
                  )}
                  {isAnswered && isSelected && !option.isCorrect && (
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#c53030] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation & Verified Source Card */}
          {isAnswered && (
            <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-1">
              <div
                className={`p-3 sm:p-4 rounded-2xl border-2 ${
                  isCorrect
                    ? 'bg-[#ebf5e9] border-[#4a804d] text-[#2d522f]'
                    : 'bg-[#fde8e8] border-[#c53030] text-[#9b2c2c]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-[#3a2312]/15">
                  <div className="flex items-center gap-1.5">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#4a804d]" />
                        <span className="text-[11px] sm:text-xs font-bold text-[#2d522f] font-cinzel">
                          Bonne Réponse !
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-[#c53030]" />
                        <span className="text-[11px] sm:text-xs font-bold text-[#9b2c2c] font-cinzel">
                          Réponse Incorrecte
                        </span>
                      </>
                    )}
                  </div>

                  <span className="text-[9px] uppercase font-bold text-[#8c5a2b] font-cinzel">
                    Source Islamique
                  </span>
                </div>

                <p className="text-xs text-[#3a2312] leading-relaxed font-sans font-medium">
                  {quiz.explanation}
                </p>

                {/* Reference Excerpt */}
                <div className="mt-2 pt-2 border-t border-[#3a2312]/15 flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold text-[#8c5a2b]">
                    {quiz.reference.concept} — {quiz.reference.reference}
                  </span>
                  <p className="text-[11px] italic text-[#6b4724]">
                    « {quiz.reference.citationText} »
                  </p>
                  {quiz.reference.arabic && (
                    <p className="text-right text-base text-[#3a2312] font-amiri dir-rtl mt-0.5">
                      {quiz.reference.arabic}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pinned Sticky Bottom Footer with Action / Validation Button */}
        <div className="p-3 sm:p-3.5 bg-[#f3ebd9] border-t-2 border-[#3a2312] shrink-0 z-10">
          <div className="flex flex-col gap-2">
            {isAnswered && !isCorrect && (
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] text-[#6b4724] font-medium">
                  Relis la source et réessaie.
                </span>
                <button
                  onClick={() => setIsAnswered(false)}
                  className="px-4 py-2 bg-[#e69138] hover:bg-[#f0a04b] text-[#3a2312] font-bold text-xs rounded-xl transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 font-cinzel border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Réessayer</span>
                </button>
              </div>
            )}
            
            <button
              onClick={() => {
                soundManager.playSelect();
                onComplete();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#e69138] hover:bg-[#f0a04b] text-[#3a2312] font-black text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-[#3a2312] shadow-[0_4px_0_#3a2312] transition-all cursor-pointer font-cinzel uppercase tracking-wider"
            >
              <span>Valider et Continuer (Forcer)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
