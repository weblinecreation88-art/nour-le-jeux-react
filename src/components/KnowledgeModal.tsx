import React, { useState } from 'react';
import { KNOWLEDGE_ITEMS } from '../data/knowledge';
import { KnowledgeItem } from '../types';
import {
  Compass,
  X,
  BookOpen,
  CheckCircle,
  Lock,
  Search,
  ChevronLeft
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
  onClose,
  currentXp = 0,
  currentLevel = 1
}) => {
  const [selectedItem, setSelectedItem] = useState<KnowledgeItem | null>(KNOWLEDGE_ITEMS[0]);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);

  const filteredKnowledge = KNOWLEDGE_ITEMS.filter((item) => {
    const matchesFilter =
      filterType === 'all' || item.sourceType.toLowerCase() === filterType.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.reference.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleSelectItem = (item: KnowledgeItem) => {
    soundManager.playSelect();
    setSelectedItem(item);
    setMobileDetailOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-[0_12px_30px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 border-b-2 border-[#3a2312] bg-[#f3ebd9]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#e69138]/20 border border-[#e69138]/50 text-[#d97c27] shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#3a2312] font-cinzel leading-tight">
                Livre du Savoir
              </h2>
              <span className="text-[10px] text-[#8c5a2b] font-bold tracking-wider uppercase font-cinzel">
                Notions de Sagesse (ʿIlm)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-bold text-[#8c5a2b] font-cinzel">Niv. {currentLevel}</span>
              <span className="text-xs font-mono font-black text-[#d97c27] bg-[#fdf5e6] px-2 py-0.5 rounded-md border border-[#d97c27]/40 shadow-xs">
                {currentXp} XP
              </span>
            </div>
            <button
              onClick={() => {
                soundManager.playSelect();
                onClose();
              }}
              title="Fermer"
              className="p-1.5 sm:p-2 rounded-xl bg-[#ebdcc4] hover:bg-[#d9c7ab] text-[#3a2312] transition-colors cursor-pointer border border-[#3a2312] shadow-xs"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="px-3 py-2 sm:px-5 sm:py-2.5 bg-[#ebdfc8] border-b border-[#ebdcc4] flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-1.5">
            {['all', 'Coran', 'Hadith'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold font-cinzel transition-all cursor-pointer ${
                  filterType === type
                    ? 'bg-[#e69138] text-[#1a1209] shadow-xs font-bold border border-[#b86e24]'
                    : 'bg-[#fbf7ee] text-[#6b4724] hover:bg-[#f3ebd9] border border-[#d2be9f]'
                }`}
              >
                {type === 'all' ? 'Toutes les notions' : type}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative min-w-[140px] max-w-[200px]">
            <Search className="w-3 h-3 text-[#8c5a2b] absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-7 pr-2.5 py-1 bg-white/70 border border-[#8c5a2b]/30 rounded-xl text-xs text-[#3a2312] placeholder:text-[#a37c56] focus:outline-none focus:border-[#e69138]"
            />
          </div>
        </div>

        {/* Content Body: Side-by-side on desktop, Drill-down toggle on mobile */}
        <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* List of Concepts (hidden on mobile when detail is open) */}
          <div
            className={`md:col-span-5 border-r border-[#ebdcc4] overflow-y-auto p-3 flex flex-col gap-2 ${
              mobileDetailOpen ? 'hidden md:flex' : 'flex'
            }`}
          >
            {filteredKnowledge.map((item) => {
              const isUnlocked = unlockedIds.includes(item.id);
              const isSelected = selectedItem?.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectItem(item)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-[#ebdfc8] border-[#e69138] shadow-md ring-2 ring-[#e69138]/40'
                      : 'bg-[#fbf7ee] border-[#ebdcc4] hover:bg-[#ebdfc8]'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded-md font-bold uppercase ${
                          item.sourceType === 'Coran'
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
                            : 'bg-blue-950 text-blue-300 border border-blue-800/60'
                        }`}
                      >
                        {item.sourceType}
                      </span>
                      {isUnlocked ? (
                        <span className="text-[10px] text-[#2d6a4f] font-bold flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Acquis
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#a37c56] font-medium flex items-center gap-1">
                          <Lock className="w-3 h-3" /> À découvrir
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#3a2312] truncate font-cinzel">
                      {item.term}
                    </h4>
                    <p className="text-[11px] text-[#8c5a2b] line-clamp-1">{item.translation}</p>
                  </div>
                  <span className="text-base font-amiri text-[#f0a04b] shrink-0 font-arabic">
                    {item.arabic}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail Pane (visible on mobile only when detail is open, always visible on desktop) */}
          <div
            className={`md:col-span-7 p-4 sm:p-6 overflow-y-auto bg-[#fdfbf7] flex flex-col justify-between ${
              !mobileDetailOpen ? 'hidden md:flex' : 'flex'
            }`}
          >
            {/* Mobile Back Button */}
            <div className="md:hidden mb-3">
              <button
                onClick={() => setMobileDetailOpen(false)}
                className="flex items-center gap-1 text-xs font-bold text-[#d97c27] bg-[#ebdfc8] px-3 py-1.5 rounded-xl border border-[#3a2312] shadow-xs cursor-pointer font-cinzel"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Retour à la liste des notions</span>
              </button>
            </div>

            {selectedItem ? (
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#e69138] uppercase tracking-wider font-cinzel">
                      {selectedItem.chapterSceneRef}
                    </span>
                    <span className="text-xs text-[#8c5a2b] font-mono">{selectedItem.reference}</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-[#3a2312] font-cinzel">
                    {selectedItem.term}
                  </h3>
                  <p className="text-xs text-[#d97c27] font-medium mt-0.5">
                    {selectedItem.transliteration} — {selectedItem.translation}
                  </p>
                </div>

                <div className="p-3 sm:p-4 bg-[#f3ebd9] border border-[#ebdcc4] rounded-2xl text-center">
                  <span className="text-2xl sm:text-3xl font-amiri text-[#8c5a2b] font-arabic leading-relaxed">
                    {selectedItem.arabic}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-[#6b4724] uppercase tracking-wider mb-1 font-cinzel">
                      Sens & Enseignement
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4a2e18] leading-relaxed font-sans bg-[#f3ebd9] p-3 rounded-xl border border-[#ebdcc4]">
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
    </div>
  );
};
