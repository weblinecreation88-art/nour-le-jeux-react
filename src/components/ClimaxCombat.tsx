import React, { useState } from 'react';
import { CLIMAX_STEPS } from '../data/chapter1';
import { ClimaxStep } from '../types';
import { Sparkles, Shield, ArrowRight, CheckCircle2, Moon, Sun } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ClimaxCombatProps {
  onComplete: () => void;
  onStepChange?: (stepIndex: number) => void;
}

export const ClimaxCombat: React.FC<ClimaxCombatProps> = ({
  onComplete,
  onStepChange
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleActivateStep = (step: ClimaxStep, index: number) => {
    if (index !== currentStepIndex) return;

    soundManager.playClimaxStep();
    const nextIndex = currentStepIndex + 1;
    setCompletedSteps([...completedSteps, step.stepNumber]);
    setCurrentStepIndex(nextIndex);
    if (onStepChange) onStepChange(nextIndex);

    if (nextIndex >= CLIMAX_STEPS.length) {
      soundManager.playWaswasDissolve();
      setIsFinished(true);
      setTimeout(() => {
        onComplete();
      }, 1400);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-6 z-30 animate-in fade-in zoom-in-95 duration-300">
      <div className="bg-[#181424]/95 backdrop-blur-xl border-2 border-amber-500/60 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col gap-4 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/50 text-purple-300">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-cinzel">
                Résilience Spirituelle • Climax
              </span>
              <h3 className="text-base sm:text-lg font-bold text-zinc-100 font-cinzel">
                Le Vrai « Combat »
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-[#252033] px-3 py-1 rounded-xl border border-zinc-700 text-xs text-amber-300 font-bold">
            <span>Étape {Math.min(currentStepIndex + 1, 6)} / 6</span>
          </div>
        </div>

        {/* Tactical Guidance */}
        <div className="bg-amber-950/30 p-3 rounded-2xl border border-amber-500/30 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-zinc-300 leading-relaxed">
            <strong className="text-amber-300">Aucun sort magique.</strong> Face aux pensées qui veulent t'arrêter, applique dans l'ordre les 6 repères appris durant ton voyage.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-1">
          {CLIMAX_STEPS.map((step, idx) => {
            const isDone = completedSteps.includes(step.stepNumber);
            const isCurrent = idx === currentStepIndex;
            const isLocked = idx > currentStepIndex;

            let cardStyle = 'bg-[#221c2e] border-zinc-800 text-zinc-500 opacity-50';
            if (isDone) {
              cardStyle = 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.15)]';
            } else if (isCurrent) {
              cardStyle = 'bg-amber-950/60 border-amber-400 text-amber-100 ring-2 ring-amber-400/30 animate-pulse';
            }

            return (
              <button
                key={step.id}
                onClick={() => handleActivateStep(step, idx)}
                disabled={!isCurrent}
                className={`p-3.5 rounded-2xl border transition-all text-left flex flex-col gap-1.5 cursor-pointer relative ${cardStyle}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-cinzel">
                    {step.title}
                  </span>
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : isCurrent ? (
                    <ArrowRight className="w-4 h-4 text-amber-300 animate-bounce" />
                  ) : null}
                </div>

                <p className="text-xs font-semibold text-zinc-200">
                  « {step.quote} »
                </p>

                {step.arabic && (
                  <p className="text-right text-sm text-amber-200 font-amiri dir-rtl">
                    {step.arabic}
                  </p>
                )}

                <p className="text-[11px] text-zinc-400 mt-0.5">
                  {step.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Climax status message */}
        {isFinished && (
          <div className="p-3 bg-emerald-950/80 border border-emerald-400 rounded-2xl flex items-center justify-center gap-2 text-emerald-200 text-sm font-bold animate-in fade-in duration-300">
            <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
            <span>Le Waswas se dissipe dans la lumière du matin !</span>
          </div>
        )}
      </div>
    </div>
  );
};
