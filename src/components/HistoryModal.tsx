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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#181524] border-2 border-amber-500/50 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-800 bg-[#1f1b2e]/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-cinzel">
                Journal du récit
              </span>
              <h2 className="text-base sm:text-lg font-bold text-zinc-100 font-cinzel">
                Historique des Dialogues
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playSelect();
              onClose();
            }}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="p-3 bg-[#231e33] border-b border-zinc-800 flex items-center gap-1.5 overflow-x-auto">
          {['all', 'Personnage', 'Noura', 'Waswas', 'Narration'].map((spk) => (
            <button
              key={spk}
              onClick={() => setFilterSpeaker(spk)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterSpeaker === spk
                  ? 'bg-amber-500 text-zinc-950 font-bold'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              {spk === 'all' ? 'Tous' : spk}
            </button>
          ))}
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-3">
          {filteredHistory.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 flex flex-col items-center">
              <MessageSquare className="w-8 h-8 mb-2 opacity-40" />
              <p className="text-xs">Aucun dialogue enregistré pour le moment.</p>
            </div>
          ) : (
            filteredHistory.map((entry, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#201c2e] border border-zinc-800/80 flex flex-col gap-1 text-left"
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-amber-400 font-cinzel">
                    {entry.speaker}
                  </span>
                  <span className="text-zinc-500">
                    Scène {entry.sceneId}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 whitespace-pre-line leading-relaxed">
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
