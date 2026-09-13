import React, { useState } from 'react';
import { BookOpen, X, MessageSquare } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface HistoryEntry {
  speaker: string;
  text: string;
  sceneId: number;
}

interface HistoryModalProps {
  history: HistoryEntry[];
  onClose: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  history,
  onClose
}) => {
  const [filterSpeaker, setFilterSpeaker] = useState<string>('all');

  const filteredHistory = history.filter((entry) => {
    if (filterSpeaker === 'all') return true;
    return entry.speaker.toLowerCase().includes(filterSpeaker.toLowerCase());
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 select-none">
      <div className="bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-[0_12px_30px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b-2 border-[#3a2312] bg-[#f3ebd9]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] text-[#d97c27] shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#8c5a2b] uppercase tracking-widest font-cinzel">
                Journal du récit
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel">
                Historique des Dialogues
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playSelect();
              onClose();
            }}
            title="Fermer"
            className="p-2 rounded-xl bg-[#ebdfc8] hover:bg-[#d9c7ab] text-[#3a2312] border-2 border-[#3a2312] transition-colors cursor-pointer shadow-xs active:translate-y-0.5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="px-4 py-2.5 bg-[#ebdfc8] border-b border-[#d2be9f] flex items-center gap-1.5 overflow-x-auto">
          {['all', 'Personnage', 'Noura', 'Waswas', 'Narration'].map((spk) => (
            <button
              key={spk}
              onClick={() => {
                soundManager.playSelect();
                setFilterSpeaker(spk);
              }}
              style={
                filterSpeaker === spk
                  ? { backgroundColor: '#d97c27', color: '#1a1209' }
                  : { backgroundColor: '#fbf7ee', color: '#5c4028' }
              }
              className={`px-3 py-1 rounded-xl text-xs font-black font-cinzel transition-all cursor-pointer ${
                filterSpeaker === spk
                  ? 'text-[#1a1209] font-black shadow-xs border-2 border-[#3a2312]'
                  : 'text-[#5c4028] hover:bg-[#f3ebd9] border border-[#d2be9f]'
              }`}
            >
              {spk === 'all' ? 'Tous' : spk}
            </button>
          ))}
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-3 bg-[#fdfbf7] custom-scrollbar">
          {filteredHistory.length === 0 ? (
            <div className="text-center py-12 text-[#8c6b4e] flex flex-col items-center">
              <MessageSquare className="w-8 h-8 mb-2 opacity-50 text-[#d97c27]" />
              <p className="text-xs font-cinzel">Aucun dialogue enregistré pour le moment.</p>
            </div>
          ) : (
            filteredHistory.map((entry, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#f3ebd9] border-2 border-[#3a2312] flex flex-col gap-1 text-left shadow-xs"
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#d97c27] font-cinzel">
                    {entry.speaker}
                  </span>
                  <span className="text-[#8c5a2b] font-mono font-bold">
                    Scène {entry.sceneId}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#3a2312] whitespace-pre-line leading-relaxed">
                  {entry.text}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
