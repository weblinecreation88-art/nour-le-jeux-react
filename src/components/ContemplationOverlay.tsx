import React, { useEffect } from 'react';
import { Scene } from '../types';
import { FastForward } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ContemplationOverlayProps {
  scene: Scene;
  nextScene?: Scene;
  durationMs?: number;
  onComplete: () => void;
  onSkip: () => void;
}

export const ContemplationOverlay: React.FC<ContemplationOverlayProps> = ({
  durationMs = 3000,
  onComplete,
  onSkip
}) => {
  useEffect(() => {
    // Play soothing contemplation chime
    try {
      soundManager.playContemplationChime();
    } catch {
      // audio fallback
    }

    const timer = setTimeout(() => {
      onComplete();
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs, onComplete]);

  return (
    <div
      onClick={onSkip}
      className="fixed inset-0 z-40 flex items-start justify-end p-3 sm:p-5 pointer-events-auto select-none cursor-pointer animate-in fade-in duration-500"
      title="Toucher pour passer directement"
    >
      {/* Pure scene view: No popup, no explanatory card, no progress bar */}

      {/* Discreet skip button in top corner */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSkip();
        }}
        className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold bg-[#ebdfc8]/85 hover:bg-[#f0a04b] text-[#3a2312] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl cursor-pointer transition-all font-cinzel backdrop-blur-xs"
        title="Passer à la suite"
      >
        <span>Passer</span>
        <FastForward className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </button>
    </div>
  );
};
