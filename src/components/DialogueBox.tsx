import React, { useState, useEffect, useRef } from 'react';
import { Beat, DialogueChoice } from '../types';
import { CharacterAvatar } from './CharacterAvatar';
import { NarrativeActorStage } from './NarrativeActorStage';
import { ArrowRight, CornerDownLeft, FastForward, Lock, Sparkles, X } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { CustomAssetsConfig } from '../utils/assets';

interface DialogueBoxProps {
  beat: Beat;
  onNext: () => void;
  onSelectChoice?: (choice: DialogueChoice) => void;
  customAssets?: CustomAssetsConfig;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  beat,
  onNext,
  onSelectChoice,
  customAssets
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [lockedChoicePopup, setLockedChoicePopup] = useState<{ title: string; message: string } | null>(null);
  const [isTyping, setIsTyping] = useState(true);
  const textRef = useRef<string>('');
  const fullText = beat.text || '';
  const isWaswas = beat.speaker === 'waswas' || beat.speaker === 'grand_waswas';

  useEffect(() => {
    setDisplayedText('');
    setSelectedChoiceId(null);
    setIsTyping(true);
    textRef.current = fullText;

    let index = 0;
    const speed = 18; // ms per char

    // Fast typing effect
    const interval = setInterval(() => {
      index += 1;
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        if (index % 4 === 0) {
          soundManager.playDialogueClick();
        }
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [beat.id, fullText]);

  const handleSkipOrNext = () => {
    if (isTyping) {
      // Instant reveal
      setDisplayedText(fullText);
      setIsTyping(false);
    } else {
      if (beat.type === 'dialogue') {
        soundManager.playDialogueClick();
        onNext();
      }
    }
  };

  const getSpeakerTitle = () => {
    switch (beat.speaker) {
      case 'personnage':
        return 'OTHMÂN';
      case 'noura':
        return 'NOURA';
      case 'waswas':
        return 'WASWAS';
      case 'grand_waswas':
        return 'GRAND WASWAS';
      case 'jeune':
        return 'JEUNE VILLAGEOIS';
      default:
        return 'NARRATION';
    }
  };

  const getSpeakerTagStyle = () => {
    switch (beat.speaker) {
      case 'personnage':
        return 'bg-[#284868] text-[#f0e6d2] border-[#16293d]';
      case 'noura':
        return 'bg-[#2d6a4f] text-[#d8f3dc] border-[#1b4332]';
      case 'waswas':
      case 'grand_waswas':
        return 'bg-[#5c2a63] text-[#f3d9fa] border-[#38153d]';
      case 'jeune':
        return 'bg-[#8c6b4e] text-[#fbf7ee] border-[#3a2312]';
      default:
        return 'bg-[#ebdfc8] text-[#3a2312] border-[#3a2312]';
    }
  };

  return (
    <div className={`w-full max-w-xl mx-auto px-3 sm:px-6 z-30 select-none flex flex-col items-center ${isWaswas && isTyping ? 'animate-screen-rumble' : ''}`}>
      {/* Dynamic Grand Character Sprite / Actor on Stage */}
      <NarrativeActorStage
        speaker={beat.speaker}
        emotion={beat.emotion}
        isTyping={isTyping}
        customAssets={customAssets}
      />

      <div
        onClick={beat.type === 'dialogue' ? handleSkipOrNext : undefined}
        className="w-full relative bg-[#fbf7ee] border-2 border-[#3a2312] rounded-3xl p-4 sm:p-5 shadow-[0_5px_0_#3a2312] transition-all duration-200 cursor-pointer group"
      >
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Avatar Icon */}
          {beat.speaker && (
            <div className="shrink-0">
              <CharacterAvatar
                speaker={beat.speaker}
                emotion={beat.emotion}
                size="md"
                customAssets={customAssets}
              />
            </div>
          )}

          {/* Dialogue Body */}
          <div className="flex-1 min-w-0 flex flex-col gap-1.5">
            {/* Header: Speaker Name Badge */}
            <div className="flex items-center justify-between">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-[10px] sm:text-xs font-bold tracking-wider font-cinzel border-2 shadow-[0_1px_0_#3a2312] ${getSpeakerTagStyle()}`}
              >
                {getSpeakerTitle()}
              </span>

              {isTyping && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDisplayedText(fullText);
                    setIsTyping(false);
                  }}
                  className="flex items-center gap-1 text-[10px] font-bold text-[#8c5a2b] hover:text-[#3a2312] transition-colors px-2 py-0.5 rounded-lg bg-[#ebdfc8] border border-[#3a2312]"
                >
                  <FastForward className="w-3 h-3" />
                  Passer
                </button>
              )}
            </div>

            {/* Arabic Script callout if present */}
            {beat.arabicText && (
              <div className="py-1 px-3 bg-[#ebdfc8] border-r-4 border-[#d97c27] rounded-xl text-right font-amiri text-base sm:text-lg text-[#3a2312] tracking-wide dir-rtl my-1">
                {beat.arabicText}
              </div>
            )}

            {/* Text lines */}
            <div className="text-[#3a2312] text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line font-medium min-h-[44px]">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-2 h-3.5 ml-1 bg-[#d97c27] animate-pulse align-middle" />
              )}
            </div>

            {/* Choices selection for choice beat */}
            {beat.choices && beat.choices.length > 0 && !isTyping && (
              <div className="mt-2 pt-2 border-t border-[#ebdcc4] flex flex-col gap-2 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#8c5a2b] font-cinzel">
                    Choisissez une direction :
                  </span>
                  {selectedChoiceId && (
                    <span className="text-[10px] bg-[#ebf5e9] text-[#2d522f] border border-[#4a804d] px-2 py-0.5 rounded-full font-bold">
                      Choix validé ✓
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {beat.choices.map((choice) => {
                    const isSelected = selectedChoiceId === choice.id;
                    const isDisabled = choice.disabled;

                    if (isDisabled) {
                      return (
                        <button
                          key={choice.id}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            soundManager.playDialogueClick();
                            setLockedChoicePopup({
                              title: choice.badge || 'Chapitre à venir',
                              message:
                                choice.disabledReason ||
                                "Ce chemin mène à une future aventure ! Termine d'abord la quête du Chapitre 1 (« Les Rencontres & Se faire des amis »). Les autres chapitres arrivent très bientôt in sha Allah !"
                            });
                          }}
                          className="flex flex-col justify-between p-2.5 rounded-xl border-2 border-dashed border-[#8c6b4e]/60 bg-[#ebdfc8]/60 text-[#7a5a3d] text-left opacity-75 hover:opacity-100 hover:bg-[#e4d4ba] transition-all cursor-pointer shadow-sm relative group"
                        >
                          <div className="flex items-start justify-between gap-1.5 w-full">
                            <span className="text-[11px] font-semibold leading-snug line-clamp-2">
                              {choice.label}
                            </span>
                            <Lock className="w-3.5 h-3.5 text-[#8c5a2b] shrink-0 mt-0.5" />
                          </div>
                          {choice.badge && (
                            <div className="mt-1.5 self-start">
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-[#d8c7ad] text-[#5e4125] font-cinzel">
                                {choice.badge}
                              </span>
                            </div>
                          )}
                        </button>
                      );
                    }

                    return (
                      <button
                        key={choice.id}
                        disabled={selectedChoiceId !== null}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedChoiceId(choice.id);
                          soundManager.playSelect();
                          setTimeout(() => {
                            if (onSelectChoice) onSelectChoice(choice);
                          }, 350);
                        }}
                        className={`flex flex-col justify-between p-2.5 rounded-xl border-2 text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#ebf5e9] border-[#4a804d] text-[#2d522f] shadow-[0_3px_0_#3a2312] scale-[1.02]'
                            : 'bg-[#ebdfc8] hover:bg-[#e0cfb4] border-[#3a2312] text-[#3a2312] shadow-[0_2px_0_#3a2312] hover:-translate-y-0.5'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1.5 w-full">
                          <span className="text-xs font-bold leading-snug">
                            {choice.label}
                          </span>
                          <ArrowRight className="w-4 h-4 text-[#3a2312] shrink-0" />
                        </div>
                        {choice.badge && (
                          <div className="mt-1.5 self-start">
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-[#2d6a4f] text-[#d8f3dc] font-cinzel">
                              {choice.badge}
                            </span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Next Indicator */}
        {!isTyping && beat.type === 'dialogue' && (
          <div className="flex justify-end items-center mt-1.5 pt-1.5 border-t border-[#ebdcc4]">
            <div className="flex items-center gap-1.5 text-xs text-[#d97c27] font-bold animate-pulse font-cinzel">
              <span>Continuer</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </div>
          </div>
        )}
      </div>

      {/* Friendly Locked Choice Modal */}
      {lockedChoicePopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLockedChoicePopup(null)}
        >
          <div
            className="w-full max-w-sm bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl p-5 sm:p-6 shadow-[0_8px_0_#3a2312] flex flex-col items-center gap-4 text-center select-none animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center shadow-inner text-[#d97c27]">
              <Sparkles className="w-7 h-7 animate-pulse" />
            </div>

            {/* Badge & Title */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel bg-[#ebdfc8] px-3 py-1 rounded-full border border-[#3a2312]">
                {lockedChoicePopup.title}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel mt-2">
                Un chemin pour plus tard ! 🌿
              </h3>
            </div>

            {/* Message Body */}
            <p className="text-xs sm:text-sm text-[#5c4028] leading-relaxed font-medium bg-[#f3ebd9] p-3 rounded-2xl border border-[#d2be9f]">
              {lockedChoicePopup.message}
            </p>

            {/* Action Button */}
            <button
              type="button"
              onClick={() => {
                soundManager.playSelect();
                setLockedChoicePopup(null);
              }}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#e69138] to-[#f0a04b] hover:from-[#d97c27] hover:to-[#e69138] text-[#1a1209] font-bold text-xs sm:text-sm font-cinzel border-2 border-[#3a2312] shadow-[0_3px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer"
            >
              Continuer le Chapitre 1
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
