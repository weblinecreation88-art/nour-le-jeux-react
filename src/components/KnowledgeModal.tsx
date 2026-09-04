import React, { useState } from 'react';
import { KNOWLEDGE_ITEMS } from '../data/knowledge';
import { ISLAMIC_QUIZZES } from '../data/islamicQuizzes';
import { KnowledgeItem, IslamicQuizQuestion } from '../types';
import {
  Compass,
  X,
  BookOpen,
  CheckCircle,
  Lock,
  ShieldCheck,
  Search,
  Sparkles,
  Zap,
  HelpCircle,
  Award,
  ArrowRight,
  Check,
  AlertCircle
} from 'lucide-react';
import { soundManager } from '../utils/audio';

interface KnowledgeModalProps {
  unlockedIds: string[];
  completedQuizIds?: string[];
  onCompleteQuiz?: (quizId: string, xpReward: number) => void;
  onClose: () => void;
  initialTab?: 'knowledge' | 'quizzes';
  currentXp?: number;
  currentLevel?: number;
}

export const KnowledgeModal: React.FC<KnowledgeModalProps> = ({
  unlockedIds,
  completedQuizIds = [],
  onCompleteQuiz,
  onClose,
  initialTab = 'knowledge',
  currentXp = 0,
  currentLevel = 1
}) => {
  const [activeMainTab, setActiveMainTab] = useState<'knowledge' | 'quizzes'>(initialTab);

  // Knowledge concepts state
  const [selectedItem, setSelectedItem] = useState<KnowledgeItem | null>(KNOWLEDGE_ITEMS[0]);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Quiz state
  const initialUncompletedIndex = ISLAMIC_QUIZZES.findIndex(q => !completedQuizIds.includes(q.id));
  const [activeQuiz, setActiveQuiz] = useState<IslamicQuizQuestion | null>(
    ISLAMIC_QUIZZES[initialUncompletedIndex === -1 ? 0 : initialUncompletedIndex]
  );
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizSuccess, setQuizSuccess] = useState<boolean>(false);
  const [localCompletedQuizzes, setLocalCompletedQuizzes] = useState<string[]>(completedQuizIds);

  React.useEffect(() => {
    setLocalCompletedQuizzes(completedQuizIds);
  }, [completedQuizIds]);

  const filteredKnowledge = KNOWLEDGE_ITEMS.filter((item) => {
    const matchesFilter =
      filterType === 'all' || item.sourceType.toLowerCase() === filterType.toLowerCase();
    const matchesSearch =
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.reference.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // User requested to unlock all questions
  const maxUnlockIndex = ISLAMIC_QUIZZES.length - 1;

  const handleSelectQuiz = (quiz: IslamicQuizQuestion) => {
    if ((window as any).quizAdvanceTimer) {
      clearTimeout((window as any).quizAdvanceTimer);
    }
    soundManager.playSelect();
    setActiveQuiz(quiz);
    setSelectedOptionIndex(null);
    setQuizSubmitted(false);
    setQuizSuccess(false);
  };

  const handleValidateQuiz = () => {
    if (!activeQuiz || selectedOptionIndex === null) return;

    setQuizSubmitted(true);
    if (selectedOptionIndex === activeQuiz.correctIndex) {
      setQuizSuccess(true);
      soundManager.playQuizSuccess();
      
      let nextCompleted = localCompletedQuizzes;
      if (!localCompletedQuizzes.includes(activeQuiz.id)) {
        nextCompleted = [...localCompletedQuizzes, activeQuiz.id];
        setLocalCompletedQuizzes(nextCompleted);
        if (onCompleteQuiz) {
          onCompleteQuiz(activeQuiz.id, activeQuiz.xpReward);
        }
      }

      // Auto-advance after 3.5s
      const timer = setTimeout(() => {
        const nextQuiz = ISLAMIC_QUIZZES.find(q => !nextCompleted.includes(q.id));
        if (nextQuiz) {
          handleSelectQuiz(nextQuiz);
        }
      }, 3500);
      
      // Save timer to window so we can clear it if they click manually
      (window as any).quizAdvanceTimer = timer;

    } else {
      setQuizSuccess(false);
      soundManager.playSelect();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-[0_12px_30px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#ebdcc4] bg-[#f3ebd9]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#e69138]/20 border border-[#e69138]/40 text-[#f0a04b]">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#e69138] uppercase tracking-widest font-cinzel">
                Livre du Savoir & Épreuves
              </span>
              <h2 className="text-base sm:text-xl font-bold text-[#3a2312] font-cinzel">
                Bibliothèque & Quiz Islamiques
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end mr-1">
              <span className="text-[10px] font-bold text-[#8c5a2b] uppercase tracking-widest font-cinzel">Niv. {currentLevel}</span>
              <span className="text-sm font-black text-[#d97c27] bg-[#fdf5e6] px-2.5 py-0.5 rounded-lg border border-[#d97c27]/40 shadow-sm">
                {currentXp} XP
              </span>
            </div>
            <button
              onClick={() => {
                soundManager.playSelect();
                onClose();
              }}
              className="p-2 rounded-xl bg-[#ebdcc4] hover:bg-[#d9c7ab] text-[#6b4724] transition-colors cursor-pointer border border-[#8c5a2b]/30"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Primary Tabs (Sagesse vs Quiz +XP) */}
        <div className="grid grid-cols-2 p-2 gap-2 bg-[#ebdfc8] border-b border-[#ebdcc4]">
          <button
            onClick={() => {
              soundManager.playSelect();
              setActiveMainTab('knowledge');
            }}
            className={`py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm font-cinzel flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeMainTab === 'knowledge'
                ? 'bg-gradient-to-r from-[#e69138] to-[#f0a04b] text-[#1a1209] shadow-md scale-[1.01]'
                : 'bg-[#f3ebd9] text-[#6b4724] hover:bg-[#2e2340]'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Notions de Sagesse (ʿIlm)</span>
          </button>

          <button
            onClick={() => {
              soundManager.playSelect();
              setActiveMainTab('quizzes');
            }}
            className={`py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm font-cinzel flex items-center justify-center gap-2 transition-all cursor-pointer relative ${
              activeMainTab === 'quizzes'
                ? 'bg-gradient-to-r from-[#2d6a4f] to-[#52b788] text-white shadow-md scale-[1.01]'
                : 'bg-[#f3ebd9] text-emerald-300 hover:bg-[#2e2340]'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Quiz & Défis (+XP)</span>
            <span className="text-[10px] bg-amber-400 text-zinc-950 px-2 py-0.5 rounded-full font-black">
              Gagne de l'XP
            </span>
          </button>
        </div>

        {/* TAB 1: KNOWLEDGE CONCEPTS */}
        {activeMainTab === 'knowledge' && (
          <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
            {/* Filter and Search Bar */}
            <div className="p-3 sm:px-5 sm:py-2.5 bg-[#f3ebd9] border-b border-[#ebdcc4] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {['all', 'Coran', 'Hadith', 'Enseignement'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      filterType === type
                        ? 'bg-[#e69138] text-zinc-950 shadow-sm font-bold'
                        : 'bg-[#ebdcc4] text-[#6b4724] hover:bg-[#d9c7ab]'
                    }`}
                  >
                    {type === 'all' ? 'Toutes les notions' : type}
                  </button>
                ))}
              </div>

              <div className="relative flex-1 sm:flex-initial min-w-[180px]">
                <Search className="w-3.5 h-3.5 text-[#8c5a2b] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1 bg-white/60 border border-[#8c5a2b]/30 rounded-lg text-xs text-[#3a2312] placeholder:text-[#a37c56] focus:outline-none focus:border-[#e69138]"
                />
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
              {/* Left List of Concepts */}
              <div className="md:col-span-5 border-r border-[#ebdcc4] overflow-y-auto p-3 flex flex-col gap-2 max-h-[35vh] md:max-h-full">
                {filteredKnowledge.map((item) => {
                  const isUnlocked = unlockedIds.includes(item.id);
                  const isSelected = selectedItem?.id === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        soundManager.playSelect();
                        setSelectedItem(item);
                      }}
                      className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start justify-between gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-[#ebdfc8] border-[#e69138] shadow-md'
                          : 'bg-[#fbf7ee] border-[#ebdcc4] hover:bg-[#ebdfc8]'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                              item.sourceType === 'Coran'
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
                                : item.sourceType === 'Hadith'
                                ? 'bg-blue-950 text-blue-300 border border-blue-800/60'
                                : 'bg-purple-950 text-purple-300 border border-purple-800/60'
                            }`}
                          >
                            {item.sourceType}
                          </span>
                          {isUnlocked ? (
                            <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" /> Acquis
                            </span>
                          ) : (
                            <span className="text-[10px] text-[#a37c56] font-medium flex items-center gap-1">
                              <Lock className="w-3 h-3" /> À découvrir
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-bold text-[#3a2312] truncate font-cinzel">
                          {item.term}
                        </h4>
                        <p className="text-xs text-[#8c5a2b] line-clamp-1">{item.translation}</p>
                      </div>
                      <span className="text-sm font-amiri text-[#f0a04b]/70 shrink-0 font-arabic">
                        {item.arabic}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Detail Pane */}
              <div className="md:col-span-7 p-4 sm:p-6 overflow-y-auto bg-[#fdfbf7] flex flex-col justify-between">
                {selectedItem ? (
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#e69138] uppercase tracking-wider font-cinzel">
                          {selectedItem.chapterSceneRef}
                        </span>
                        <span className="text-xs text-[#8c5a2b]">{selectedItem.reference}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#3a2312] font-cinzel">
                        {selectedItem.term}
                      </h3>
                      <p className="text-xs text-[#f0a04b] font-medium mt-0.5">
                        {selectedItem.transliteration} — {selectedItem.translation}
                      </p>
                    </div>

                    <div className="p-4 bg-[#f3ebd9] border border-[#ebdcc4] rounded-2xl text-center">
                      <span className="text-2xl sm:text-3xl font-amiri text-amber-200 font-arabic leading-relaxed">
                        {selectedItem.arabic}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xs font-bold text-[#6b4724] uppercase tracking-wider mb-1 font-cinzel">
                          Sens & Enseignement
                        </h4>
                        <p className="text-sm text-[#6b4724] leading-relaxed font-sans bg-[#f3ebd9] p-3 rounded-xl border border-[#ebdcc4]">
                          {selectedItem.summary}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-[#6b4724] uppercase tracking-wider mb-1 font-cinzel">
                          Contexte & Pratique quotidienne
                        </h4>
                        <p className="text-xs text-[#8c5a2b] leading-relaxed font-sans">
                          {selectedItem.detailedContext}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-[#a37c56] py-12">
                    <Compass className="w-12 h-12 stroke-[1.5] mb-2 opacity-50" />
                    <p className="text-xs">Sélectionnez une notion pour afficher les détails.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ISLAMIC QUIZZES (+XP) */}
        {activeMainTab === 'quizzes' && (
          <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
            {/* Top Bar: Progress */}
            <div className="p-3 sm:px-5 sm:py-3 bg-[#f3ebd9] border-b border-[#ebdcc4] flex justify-end">
              <div className="text-xs sm:text-sm text-emerald-600 font-bold flex items-center gap-2 bg-[#ebf5e9] px-3 py-1.5 rounded-full border border-emerald-200">
                <Award className="w-4 h-4" />
                <span>
                  {localCompletedQuizzes.length} / {ISLAMIC_QUIZZES.length} réussis
                </span>
              </div>
            </div>

            {/* Quiz Content Grid */}
            <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
              {/* Left Quiz List */}
              <div className="md:col-span-5 border-r border-[#ebdcc4] overflow-y-auto p-3 flex flex-col gap-2 max-h-[35vh] md:max-h-full">
                {ISLAMIC_QUIZZES.map((quiz, index) => {
                  const isDone = localCompletedQuizzes.includes(quiz.id);
                  const isCurrent = activeQuiz?.id === quiz.id;

                  return (
                    <button
                      key={quiz.id}
                      onClick={() => {
                        if (index <= maxUnlockIndex) {
                          handleSelectQuiz(quiz);
                        }
                      }}
                      disabled={index > maxUnlockIndex}
                      className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start justify-between gap-2.5 ${
                        index > maxUnlockIndex
                          ? 'bg-[#fbf7ee]/50 border-[#ebdcc4]/50 opacity-60 cursor-not-allowed grayscale'
                          : isCurrent
                          ? 'bg-[#f3ebd9] border-[#e69138] shadow-md cursor-pointer'
                          : 'bg-[#fbf7ee] border-[#ebdcc4] hover:bg-[#ebdfc8] cursor-pointer'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase ${
                              quiz.difficulty === 'facile'
                                ? 'bg-[#d8f3dc] text-[#1b4332] border border-[#74c69d]'
                                : quiz.difficulty === 'moyen'
                                ? 'bg-[#ffedd5] text-[#9a3412] border border-[#fdba74]'
                                : 'bg-[#fee2e2] text-[#991b1b] border border-[#fca5a5]'
                            }`}
                          >
                            {quiz.difficulty}
                          </span>
                          <span className="text-[10px] text-[#d97c27] font-bold">
                            +{quiz.xpReward} XP
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#3a2312] line-clamp-2">
                          {index + 1}. {index > maxUnlockIndex ? 'Question verrouillée' : quiz.question}
                        </h4>
                      </div>

                      {isDone ? (
                        <div className="w-6 h-6 rounded-full bg-[#ebf5e9] border border-[#4a804d] text-[#2d522f] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : index > maxUnlockIndex ? (
                        <div className="w-6 h-6 rounded-full bg-[#ebdcc4] border border-[#8c5a2b]/30 text-[#8c5a2b] flex items-center justify-center shrink-0">
                          <Lock className="w-3 h-3" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-[#ebdcc4] border border-[#8c5a2b]/30 text-[#8c5a2b] flex items-center justify-center shrink-0 text-[10px] font-bold">
                          ?
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right Quiz Active Pane */}
              <div className="md:col-span-7 p-4 sm:p-6 overflow-y-auto bg-[#fdfbf7] flex flex-col justify-between">
                {activeQuiz ? (
                  <div className="flex flex-col gap-4">
                    {/* Header of Active Quiz */}
                    <div className="flex items-center justify-between border-b border-[#ebdcc4] pb-3">
                      <div>
                        <span className="text-[10px] font-bold text-[#4a804d] uppercase tracking-widest font-cinzel">
                          {activeQuiz.category}
                        </span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs sm:text-sm font-black text-[#d97c27] font-cinzel bg-[#fdf5e6] px-2.5 py-1 rounded-xl border border-[#d97c27]/40">
                          +{activeQuiz.xpReward} XP
                        </span>
                      </div>
                    </div>

                    {/* Arabic calligraphic banner if available */}
                    {activeQuiz.arabic && (
                      <div className="p-2.5 bg-[#f3ebd9] border border-[#ebdcc4] rounded-xl text-center">
                        <span className="text-lg font-amiri text-[#8c5a2b] font-arabic">
                          {activeQuiz.arabic}
                        </span>
                      </div>
                    )}

                    {/* 3 or 4 Options to choose from */}
                    <div className="flex flex-col gap-2">
                      {activeQuiz.options.map((option, idx) => {
                        const isSelected = selectedOptionIndex === idx;
                        const isCorrect = idx === activeQuiz.correctIndex;
                        let optionStyle =
                          'bg-[#fbf7ee] border-[#ebdcc4] text-[#3a2312] hover:bg-[#ebdfc8] hover:border-[#8c5a2b]';

                        if (quizSubmitted) {
                          if (isCorrect) {
                            optionStyle =
                              'bg-[#4a804d] border-[#2d522f] text-white shadow-md scale-[1.01]';
                          } else if (isSelected && !isCorrect) {
                            optionStyle =
                              'bg-[#9b2226] border-[#660708] text-white opacity-90';
                          } else {
                            optionStyle = 'bg-[#e4d7c0] border-[#8c5a2b]/30 text-[#a37c56] opacity-50';
                          }
                        } else if (isSelected) {
                          optionStyle =
                            'bg-[#f0a04b] border-[#e69138] text-[#1a1209] shadow-md scale-[1.01]';
                        }

                        return (
                          <button
                            key={idx}
                            disabled={quizSubmitted && quizSuccess}
                            onClick={() => {
                              soundManager.playSelect();
                              setSelectedOptionIndex(idx);
                            }}
                            className={`p-2.5 sm:p-3 rounded-xl border-2 text-xs sm:text-sm font-semibold text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
                          >
                            <span>{option}</span>
                            {quizSubmitted && isCorrect && (
                              <CheckCircle className="w-5 h-5 text-white shrink-0" />
                            )}
                            {quizSubmitted && isSelected && !isCorrect && (
                              <AlertCircle className="w-5 h-5 text-white shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Submit / Retry Button */}
                    {!quizSubmitted ? (
                      <button
                        onClick={handleValidateQuiz}
                        disabled={selectedOptionIndex === null}
                        className={`w-full py-2.5 mt-2 rounded-xl font-bold text-xs sm:text-sm font-cinzel transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          selectedOptionIndex !== null
                            ? 'bg-gradient-to-r from-[#e69138] to-[#f0a04b] text-[#1a1209] shadow-lg hover:scale-[1.01] active:translate-y-0.5'
                            : 'bg-[#ebdcc4] text-[#a37c56] cursor-not-allowed'
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Valider ma réponse</span>
                      </button>
                    ) : (
                      <div className="flex flex-col gap-3 animate-in fade-in duration-300">
                        <div
                          className={`p-3.5 rounded-2xl border ${
                            quizSuccess
                              ? 'bg-[#ebf5e9] border-[#4a804d] text-[#1b4332]'
                              : 'bg-[#fde2e4] border-[#9b2226] text-[#660708]'
                          }`}
                        >
                          <div className="flex items-center gap-2 font-bold text-sm mb-1 font-cinzel">
                            {quizSuccess ? (
                              <>
                                <Sparkles className="w-4 h-4 text-[#4a804d]" />
                                <span>Excellente réponse ! (+{activeQuiz.xpReward} XP gagnés)</span>
                              </>
                            ) : (
                              <>
                                <AlertCircle className="w-4 h-4 text-[#9b2226]" />
                                <span>Ce n'est pas tout à fait cela. Réessaie !</span>
                              </>
                            )}
                          </div>
                          <p className="text-xs leading-relaxed text-[#3a2312] mt-1">
                            {activeQuiz.explanation}
                          </p>
                          {activeQuiz.hadithOrQuranRef && (
                            <p className="text-[11px] text-[#8c5a2b] font-bold italic mt-2">
                              📖 Réf : {activeQuiz.hadithOrQuranRef}
                            </p>
                          )}
                        </div>

                        {!quizSuccess ? (
                          <button
                            onClick={() => {
                              soundManager.playSelect();
                              setQuizSubmitted(false);
                              setSelectedOptionIndex(null);
                            }}
                            className="w-full py-2.5 rounded-xl bg-[#d9c7ab] hover:bg-[#cba886] text-[#3a2312] font-bold text-xs font-cinzel transition-all cursor-pointer"
                          >
                            Réessayer cette question
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              const nextQuiz = ISLAMIC_QUIZZES.find(q => !localCompletedQuizzes.includes(q.id));
                              if (nextQuiz) {
                                handleSelectQuiz(nextQuiz);
                              }
                            }}
                            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#2d6a4f] to-[#52b788] text-white font-bold text-xs font-cinzel transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                          >
                            <span>Question suivante</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-[#a37c56] py-12">
                    <HelpCircle className="w-12 h-12 stroke-[1.5] mb-2 opacity-50" />
                    <p className="text-xs">Sélectionnez un quiz pour tester vos connaissances.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
