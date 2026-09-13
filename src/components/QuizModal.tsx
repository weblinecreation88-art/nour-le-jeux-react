import React, { useState, useRef, useEffect } from 'react';
import { Quiz } from '../types';
import { CharacterAvatar } from './CharacterAvatar';
import {
  CheckCircle2,
  XCircle,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import { speechManager } from '../utils/speech';
import { CustomAssetsConfig } from '../utils/assets';
import { useLanguage } from '../context/LanguageContext';
import { gameTranslations } from '../i18n/gameTranslations';
import { getLocalizedQuiz } from '../utils/narrativeI18n';

interface QuizModalProps {
  quiz: Quiz;
  onComplete: () => void;
  onHarvestXp?: (amount: number, reason: string, startX?: number, startY?: number) => void;
  onWaswasMistake?: (amount: number, reason: string) => void;
  customAssets?: CustomAssetsConfig;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  quiz,
  onComplete,
  onHarvestXp,
  onWaswasMistake,
  customAssets
}) => {
  const { language, isRtl } = useLanguage();
  const t = gameTranslations[language]?.quiz || gameTranslations.fr.quiz;
  const activeQuiz = getLocalizedQuiz(quiz, language);

  // Defensive normalization of quiz props to prevent any runtime crashes
  const rawOptions = (activeQuiz && Array.isArray(activeQuiz.options)) ? activeQuiz.options : [];
  const normalizedOptions: { id: 'A' | 'B' | 'C' | 'D'; text: string; isCorrect: boolean }[] = rawOptions.map((opt: any, index: number) => {
    const defaultLetter = (['A', 'B', 'C', 'D'][index] || 'A') as 'A' | 'B' | 'C' | 'D';
    if (typeof opt === 'string') {
      const isAns = (activeQuiz as any).correctAnswer !== undefined ? index === (activeQuiz as any).correctAnswer : index === 0;
      return { id: defaultLetter, text: opt, isCorrect: isAns };
    }
    return {
      id: opt.id || defaultLetter,
      text: opt.text || String(opt),
      isCorrect: opt.isCorrect ?? ((activeQuiz.correctOptionId && opt.id === activeQuiz.correctOptionId) || false)
    };
  });

  const correctOptionId: 'A' | 'B' | 'C' | 'D' = activeQuiz?.correctOptionId || normalizedOptions.find((o) => o.isCorrect)?.id || 'A';
  const reference = activeQuiz?.reference || {
    concept: activeQuiz?.topic || 'Sagesse & Enseignement',
    reference: 'Enseignement',
    citationText: activeQuiz?.explanation || '',
    sourceType: 'Coran' as const,
    arabic: ''
  };
  const promptSpeaker = activeQuiz?.promptSpeaker || 'noura';

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [mistakeReported, setMistakeReported] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = speechManager.onSpeakingChange((speaking) => {
      setIsSpeaking(speaking);
    });
    return () => {
      unsub();
      speechManager.stop();
    };
  }, []);

  // Auto-read question and choices on open if voice is enabled (only for French)
  useEffect(() => {
    if (language === 'fr' && speechManager.isVoiceEnabled() && !isAnswered && normalizedOptions.length > 0) {
      const timer = setTimeout(() => {
        const optionsTexts = normalizedOptions.map((o) => `${o.id}. ${o.text}`);
        speechManager.speakQuiz(
          quiz?.question || '',
          optionsTexts,
          promptSpeaker
        );
      }, 350);
      return () => {
        clearTimeout(timer);
        speechManager.stop();
      };
    }
  }, [quiz?.id, isAnswered, language]);

  const handleToggleSpeakQuiz = () => {
    if (language !== 'fr') return;
    if (isSpeaking) {
      speechManager.stop();
    } else {
      const optionsTexts = normalizedOptions.map((o) => `${o.id}. ${o.text}`);
      speechManager.speakQuiz(
        quiz?.question || '',
        optionsTexts,
        promptSpeaker
      );
    }
  };

  const handleSpeakExplanation = () => {
    if (language !== 'fr') return;
    if (isSpeaking) {
      speechManager.stop();
    } else {
      const isCorrect = selectedOptionId === correctOptionId;
      speechManager.speakExplanation(
        quiz?.explanation || '',
        isCorrect,
        reference ? `${reference.concept} - ${reference.reference}` : ''
      );
    }
  };

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    speechManager.stop();
    setSelectedOptionId(optionId);
    setIsAnswered(true);

    const isOptionCorrect = optionId === correctOptionId;
    if (isOptionCorrect) {
      soundManager.playQuizSuccess();
    } else {
      soundManager.playSelect();
      if (!mistakeReported && onWaswasMistake) {
        onWaswasMistake(15, `Doute nourri : Le Waswâs prend de la force !`);
        setMistakeReported(true);
      }
    }

    // Short, punchy audio feedback (~1s) if voice enabled and language is French
    if (language === 'fr' && speechManager.isVoiceEnabled()) {
      setTimeout(() => {
        speechManager.speakFeedback(isOptionCorrect, promptSpeaker);
      }, 300);
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

  const isCorrect = selectedOptionId === correctOptionId;

  const hintText = language === 'ar'
    ? '💡 اختر الإجابة التي تراها صحيحة'
    : language === 'en'
    ? '💡 Select the answer you think is correct'
    : '💡 Sélectionne la réponse qui te semble juste';

  const wrongWarning = language === 'ar'
    ? 'ليست الإجابة الصحيحة (قَوِيَ الوسواس قليلاً).'
    : language === 'en'
    ? 'Not the right answer (the Waswas grew stronger).'
    : "Ce n'est pas la bonne réponse (le Waswâs s'est renforcé).";

  const harvestLabel = language === 'ar'
    ? 'احصل على +25 نقطة إيمان!'
    : language === 'en'
    ? 'COLLECT MY +25 XP!'
    : 'RÉCOLTER MES +25 XP !';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200 select-none"
    >
      <div className="w-full max-w-lg bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl shadow-[0_8px_0_#3a2312] flex flex-col max-h-[85vh] relative overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Pinned Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b-2 border-[#3a2312] bg-[#f3ebd9] shrink-0 z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] text-[#3a2312]">
              <BookOpen className="w-4 h-4 text-[#d97c27]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-[#8c5a2b] uppercase tracking-wider font-cinzel">
                  {t.modalTitle}
                </span>
                <span className="text-[9px] font-black text-[#2d6a4f] bg-[#d8f3dc] px-1.5 py-0.2 rounded-md border border-[#74c69d]">
                  +25 XP
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#3a2312] font-cinzel line-clamp-1">
                {quiz.topic}
              </h3>
            </div>
          </div>

          <span className="text-[10px] font-bold text-[#8c5a2b] bg-[#ebdfc8] px-2 py-0.5 rounded-full border border-[#3a2312] font-mono shrink-0">
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
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1.5">
                <span className="text-xs font-bold text-[#2d6a4f] font-cinzel">
                  {language === 'ar' ? 'نورة' : 'NOURA'}
                </span>
                {language === 'fr' && (
                  <button
                    type="button"
                    onClick={handleToggleSpeakQuiz}
                    title={isSpeaking ? 'Arrêter la lecture' : 'Écouter la question et les choix'}
                    className={`p-1.5 rounded-lg border-2 transition-all cursor-pointer shrink-0 active:scale-95 shadow-2xs flex items-center justify-center ${
                      isSpeaking
                        ? 'bg-[#d97c27] text-white border-[#3a2312] animate-pulse ring-2 ring-[#d97c27]/40'
                        : 'bg-[#fbf7ee] hover:bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]'
                    }`}
                  >
                    {isSpeaking ? (
                      <VolumeX className="w-3.5 h-3.5" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>
              <p className={`font-bold text-[#3a2312] mt-0.5 ${isRtl ? 'font-amiri text-base sm:text-lg md:text-xl leading-[1.8] text-right' : 'text-sm sm:text-base leading-snug'}`}>
                « {quiz.question} »
              </p>
            </div>
          </div>

          {/* 4 Options Grid */}
          <div className="grid grid-cols-1 gap-2.5 shrink-0">
            {normalizedOptions.map((option) => {
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
                  className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl border-2 transition-all font-bold cursor-pointer ${
                    isRtl ? 'text-right font-amiri text-base sm:text-lg leading-[1.8]' : 'text-left text-sm sm:text-base'
                  } ${resolvedStyle}`}
                >
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-[#ebdfc8] text-xs sm:text-sm font-black flex items-center justify-center border border-[#3a2312] shrink-0 font-mono">
                    {option.id}
                  </span>
                  <span className="flex-1 leading-snug">{option.text}</span>
                  {isAnswered && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-[#4a804d] shrink-0" />
                  )}
                  {isAnswered && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-[#c53030] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation & Verified Source Card */}
          {isAnswered && (
            <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-1">
              <div
                className={`p-3.5 sm:p-4 rounded-2xl border-2 ${
                  isCorrect
                    ? 'bg-[#ebf5e9] border-[#4a804d] text-[#2d522f]'
                    : 'bg-[#fde8e8] border-[#c53030] text-[#9b2c2c]'
                }`}
              >
                <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#3a2312]/15">
                  <div className="flex items-center gap-1.5">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a804d]" />
                        <span className="text-xs sm:text-sm font-bold text-[#2d522f] font-cinzel">
                          {t.correctAnswer}
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#c53030]" />
                        <span className="text-xs sm:text-sm font-bold text-[#9b2c2c] font-cinzel">
                          {t.wrongAnswer}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {language === 'fr' && (
                      <button
                        type="button"
                        onClick={handleSpeakExplanation}
                        title={isSpeaking ? "Arrêter l'audio" : "Écouter l'explication"}
                        className="p-1 rounded-lg bg-white/80 hover:bg-white text-[#3a2312] border border-[#3a2312]/30 transition-all cursor-pointer shrink-0 active:scale-95"
                      >
                        {isSpeaking ? (
                          <VolumeX className="w-3.5 h-3.5 text-[#d97c27]" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5 text-[#2d6a4f]" />
                        )}
                      </button>
                    )}
                    <span className="text-[10px] uppercase font-bold text-[#8c5a2b] font-cinzel">
                      {t.explanationHeader}
                    </span>
                  </div>
                </div>

                <p className={`text-[#3a2312] ${isRtl ? 'font-amiri text-base sm:text-lg leading-[1.85] text-right font-medium' : 'text-xs sm:text-sm leading-relaxed font-sans font-medium'}`}>
                  {quiz.explanation}
                </p>

                {/* Reference Excerpt */}
                {reference && (
                  <div className="mt-2.5 pt-2 border-t border-[#3a2312]/15 flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-[#8c5a2b]">
                      {reference.concept} — {reference.reference}
                    </span>
                    {reference.citationText && (
                      <p className="text-xs italic text-[#6b4724]">
                        « {reference.citationText} »
                      </p>
                    )}
                    {reference.arabic && (
                      <p className="text-right text-base sm:text-lg text-[#3a2312] font-amiri dir-rtl mt-0.5">
                        {reference.arabic}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Pinned Sticky Bottom Footer */}
        <div className="p-3 sm:p-4 bg-[#f3ebd9] border-t-2 border-[#3a2312] shrink-0 z-10">
          <div className="flex flex-col gap-2">
            {!isAnswered && (
              <div className="text-center py-1">
                <span className="text-xs text-[#8c5a2b] font-bold font-cinzel">
                  {hintText}
                </span>
              </div>
            )}

            {isAnswered && !isCorrect && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-[#b91c1c] font-bold">
                    {wrongWarning}
                  </span>
                  <button
                    onClick={() => {
                      soundManager.playSelect();
                      setIsAnswered(false);
                      setSelectedOptionId(null);
                    }}
                    style={{
                      backgroundColor: '#e69138',
                      backgroundImage: 'linear-gradient(135deg, #e69138 0%, #f0a04b 100%)',
                      color: '#1a1209'
                    }}
                    className="px-4 py-2.5 text-[#1a1209] font-black text-xs sm:text-sm rounded-xl transition-all cursor-pointer shrink-0 flex items-center gap-1.5 font-cinzel border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 hover:brightness-105"
                  >
                    <RotateCcw className="w-4 h-4 text-[#1a1209]" />
                    <span>{t.tryAgain}</span>
                  </button>
                </div>
              </div>
            )}

            {isAnswered && isCorrect && (
              <button
                type="button"
                onClick={(e) => {
                  if (onHarvestXp) {
                    onHarvestXp(25, `Quiz réussi : ${quiz.topic}`, e.clientX, e.clientY);
                  } else {
                    soundManager.playQuizSuccess();
                  }
                  setTimeout(() => {
                    onComplete();
                  }, 500);
                }}
                style={{
                  backgroundColor: '#1b4332',
                  backgroundImage: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
                  color: '#ffffff'
                }}
                className="w-full py-3.5 px-4 rounded-2xl text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 border-2 border-[#0d281e] shadow-[0_4px_0_#0d281e] active:translate-y-0.5 transition-all cursor-pointer font-cinzel uppercase tracking-wider hover:brightness-110"
              >
                <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
                <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{harvestLabel}</span>
                <ArrowRight className={`w-5 h-5 text-amber-300 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
