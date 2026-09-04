import React, { useState } from 'react';
import { RealAction } from '../types';
import { Check, HeartHandshake, Sparkles, Sun, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface RealActionModalProps {
  action: RealAction;
  onValidate: () => void;
}

export const RealActionModal: React.FC<RealActionModalProps> = ({
  action,
  onValidate
}) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    soundManager.playActionComplete();
    setTimeout(() => {
      onValidate();
    }, 600);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-2.5 sm:px-6 z-30 animate-in fade-in zoom-in-95 duration-200 select-none">
      <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-3xl p-4 sm:p-5 shadow-[0_6px_0_#3a2312] flex flex-col gap-3 max-h-[82vh] relative overflow-hidden">
        {/* Action Header */}
        <div className="flex items-center gap-2.5 border-b-2 border-[#3a2312] pb-2 shrink-0">
          <div className="p-1.5 sm:p-2 rounded-2xl bg-[#ebdfc8] border-2 border-[#3a2312] text-[#3a2312]">
            <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-[#2d6a4f]" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#8c5a2b] uppercase tracking-widest font-cinzel">
              Action dans la vraie vie
            </span>
            <h3 className="text-xs sm:text-sm font-bold text-[#3a2312] font-cinzel">
              {action.title}
            </h3>
          </div>
        </div>

        {/* Scrollable middle body */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-2.5 custom-scrollbar pr-0.5">
          {/* Central Instruction Card */}
          <div className="p-3.5 rounded-2xl bg-[#ebf5e9] border-2 border-[#4a804d] flex flex-col gap-1 shadow-[0_2px_0_#3a2312]">
            <div className="flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-[#d97c27]" />
              <span className="text-[10px] sm:text-xs font-bold text-[#2d522f] font-cinzel">
                Mission concrète
              </span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-[#2d522f] leading-relaxed">
              {action.instruction}
            </p>
            {action.subtext && (
              <p className="text-[11px] text-[#4a804d] mt-0.5">
                {action.subtext}
              </p>
            )}
          </div>

          {/* Theological / Educational Reminder */}
          <p className="text-[11px] text-[#6b4724] text-center italic px-2">
            « {action.reflectionPrompt} »
          </p>
        </div>

        {/* Pinned Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 pt-1 shrink-0">
          <button
            onClick={handleConfirm}
            disabled={confirmed}
            className="flex-1 py-2.5 sm:py-3 px-3.5 rounded-xl bg-[#4a804d] hover:bg-[#5a9c5e] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-[#3a2312] shadow-[0_3px_0_#3a2312] transition-all cursor-pointer font-cinzel"
          >
            <Check className="w-4 h-4" />
            <span>C'est fait !</span>
            <span className="text-[10px] sm:text-[11px] bg-[#2d522f] px-1.5 py-0.5 rounded text-white font-mono font-bold">
              +{action.xpReward} XP
            </span>
          </button>

          <button
            onClick={handleConfirm}
            disabled={confirmed}
            className="flex-1 py-2.5 sm:py-3 px-3.5 rounded-xl bg-[#ebdfc8] hover:bg-[#ebdcc4] border-2 border-[#3a2312] text-[#3a2312] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_2px_0_#3a2312] transition-all cursor-pointer font-cinzel"
          >
            <span>Je m'y engage</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#3a2312]" />
          </button>
        </div>
      </div>
    </div>
  );
};
