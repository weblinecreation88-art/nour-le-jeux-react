import React, { useState, useEffect, useRef } from 'react';
import { Beat, DialogueChoice, CharacterTraits } from '../types';
import { CharacterAvatar } from './CharacterAvatar';
import { NarrativeActorStage } from './NarrativeActorStage';
import { ArrowRight, CornerDownLeft, FastForward, Lock, Sparkles, X, Volume2, VolumeX, RotateCcw, Crown, ExternalLink } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { speechManager, isSilentSpeaker } from '../utils/speech';
import { CustomAssetsConfig } from '../utils/assets';
import { openStripeCheckout } from '../utils/stripe';
import { useLanguage } from '../context/LanguageContext';
import { gameTranslations } from '../i18n/gameTranslations';
import { TRAIT_CONFIG, getPersonalityProfile } from '../utils/characterTraits';
import { getLocalizedBeatText, getLocalizedChoiceLabel } from '../utils/narrativeI18n';

interface DialogueBoxProps {
  beat: Beat;
  onNext: () => void;
  onSelectChoice?: (choice: DialogueChoice) => void;
  customAssets?: CustomAssetsConfig;
  waswasToast?: { amount: number; reason?: string; isNegative?: boolean } | null;
  traits?: CharacterTraits;
  narrativeFlags?: Record<string, boolean | string | number>;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  beat,
  onNext,
  onSelectChoice,
  customAssets,
  waswasToast,
  traits,
  narrativeFlags
}) => {
  const { language, isRtl } = useLanguage();
  const gameUI = gameTranslations[language] || gameTranslations.fr;
  const [displayedText, setDisplayedText] = useState('');
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [lockedChoicePopup, setLockedChoicePopup] = useState<{
    title: string;
    message: string;
    isStripePromo?: boolean;
    stripeUrl?: string;
    originalPrice?: string;
    promoPrice?: string;
    discountRate?: string;
  } | null>(null);
  const [isTyping, setIsTyping] = useState(true);
  const textRef = useRef<string>('');

  // Dynamic character profile & dominant trait calculation
  const dominantTrait = traits
    ? ((Object.keys(traits) as (keyof CharacterTraits)[]).sort(
        (a, b) => (traits[b] || 0) - (traits[a] || 0)
      )[0] || 'discipline')
    : 'discipline';

  const personalityProfile = traits ? getPersonalityProfile(traits) : null;
  const archetypeTitle = personalityProfile?.title.toLowerCase() || '';
  const archetypeKey = archetypeTitle.includes('persévérant')
    ? 'perseverant'
    : archetypeTitle.includes('pacificateur')
    ? 'pacificateur'
    : archetypeTitle.includes('sage')
    ? 'sage'
    : archetypeTitle.includes('dynamique')
    ? 'dynamique'
    : archetypeTitle.includes('patient')
    ? 'patient'
    : archetypeTitle.includes('méthodique')
    ? 'methodique'
    : archetypeTitle.includes('serviteur')
    ? 'serviteur'
    : archetypeTitle.includes('méditant')
    ? 'meditant'
    : archetypeTitle.includes('résilient')
    ? 'resilient'
    : 'equilibre';

  let fullText = getLocalizedBeatText(beat, language);
  let fullArabicText = beat.arabicText;

  if (beat.adaptiveVariants && beat.adaptiveVariants.length > 0) {
    // 1. Matched by requiredFlag + dominantTrait
    let matched = beat.adaptiveVariants.find((v) => {
      if (!v.requiredFlag || !narrativeFlags) return false;
      const flagVal = narrativeFlags[v.requiredFlag];
      const flagMatches = v.requiredFlagValue !== undefined ? flagVal === v.requiredFlagValue : Boolean(flagVal);
      return flagMatches && v.dominantTrait === dominantTrait;
    });

    // 2. Matched by requiredFlag alone (with optional requiredFlagValue)
    if (!matched) {
      matched = beat.adaptiveVariants.find((v) => {
        if (!v.requiredFlag || !narrativeFlags) return false;
        const flagVal = narrativeFlags[v.requiredFlag];
        const flagMatches = v.requiredFlagValue !== undefined ? flagVal === v.requiredFlagValue : Boolean(flagVal);
        return flagMatches && !v.dominantTrait && !v.archetype;
      });
    }

    // 3. Matched by archetype (e.g. perseverant, pacificateur, sage, dynamique, etc.)
    if (!matched) {
      matched = beat.adaptiveVariants.find((v) => v.archetype && (v.archetype === archetypeKey || archetypeTitle.includes(v.archetype)));
    }

    // 4. Matched by dominantTrait alone
    if (!matched) {
      matched = beat.adaptiveVariants.find((v) => v.dominantTrait && v.dominantTrait === dominantTrait && !v.requiredFlag && !v.archetype);
    }

    if (matched) {
      fullText = matched.text;
      if (matched.arabicText) fullArabicText = matched.arabicText;
    }
  }

  const activeVignette =
    (beat.adaptiveVariants &&
      beat.adaptiveVariants.length > 0 &&
      beat.adaptiveVariants.find((v) => {
        if (!v.requiredFlag || !narrativeFlags) return false;
        const flagVal = narrativeFlags[v.requiredFlag];
        return v.requiredFlagValue !== undefined ? flagVal === v.requiredFlagValue : Boolean(flagVal);
      })?.actionVignette) ||
    beat.actionVignette;

  const isWaswas = beat.speaker === 'waswas' || beat.speaker === 'grand_waswas';
  const isSilent = isSilentSpeaker(beat.speaker);

  // Accessible Speech Synthesis State
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(speechManager.isVoiceEnabled());
  const [isSpeaking, setIsSpeaking] = useState(speechManager.getIsSpeaking());

  useEffect(() => {
    const unsubSpeaking = speechManager.onSpeakingChange((speaking) => {
      setIsSpeaking(speaking);
    });
    const unsubState = speechManager.onStateChange((enabled) => {
      setIsVoiceEnabled(enabled);
    });
    return () => {
      unsubSpeaking();
      unsubState();
    };
  }, []);

  // Floating Waswâs info badge directly in the middle above the dialogue
  const [activeWaswasImpact, setActiveWaswasImpact] = useState<{
    amount: number;
    reason?: string;
    isNegative: boolean;
  } | null>(null);

  useEffect(() => {
    if (typeof beat.waswasXpAmount === 'number' && beat.waswasXpAmount !== 0) {
      const isNeg = beat.waswasXpAmount < 0;
      setActiveWaswasImpact({
        amount: Math.abs(beat.waswasXpAmount),
        reason: beat.waswasReason || (isNeg ? "L'Ombre recule..." : "Le doute s'insinue..."),
        isNegative: isNeg
      });
    } else if (waswasToast) {
      setActiveWaswasImpact({
        amount: waswasToast.amount,
        reason: waswasToast.reason,
        isNegative: !!waswasToast.isNegative
      });
    } else {
      setActiveWaswasImpact(null);
    }
  }, [beat.id, beat.waswasXpAmount, beat.waswasReason, waswasToast]);

  useEffect(() => {
    setDisplayedText('');
    setSelectedChoiceId(null);
    setIsTyping(true);
    textRef.current = fullText;

    // Trigger vocal narration if enabled (hybrid MP3 + native TTS fallback)
    if (speechManager.isVoiceEnabled()) {
      speechManager.speakBeat({
        id: beat.id,
        speaker: beat.speaker,
        text: fullText
      });
    }

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

    return () => {
      clearInterval(interval);
      speechManager.stop();
    };
  }, [beat.id, fullText, beat.speaker]);

  const handleSkipOrNext = () => {
    // Proactively unlock HTML5 Audio Context on user gesture
    speechManager.unlock();

    if (isTyping) {
      // Instant reveal
      setDisplayedText(fullText);
      setIsTyping(false);
    } else {
      const hasChoices = beat.choices && beat.choices.length > 0;
      if (!hasChoices) {
        soundManager.playDialogueClick();
        speechManager.stop();
        setActiveWaswasImpact(null);
        onNext();
      }
    }
  };

  const getSpeakerTitle = () => {
    if (beat.isPontDeNour) {
      return gameUI.dialogue.pontDeNourBadge;
    }
    switch (beat.speaker) {
      case 'personnage':
        return gameUI.dialogue.speakerOthman.toUpperCase();
      case 'noura':
        return gameUI.dialogue.speakerNoura.toUpperCase();
      case 'waswas':
        return gameUI.dialogue.speakerWaswas.toUpperCase();
      case 'grand_waswas':
        return ('GRAND ' + gameUI.dialogue.speakerWaswas).toUpperCase();
      case 'jeune':
        return gameUI.dialogue.speakerYouth.toUpperCase();
      case 'enfant':
        return gameUI.dialogue.speakerChild.toUpperCase();
      case 'marchand':
        return gameUI.dialogue.speakerMerchant.toUpperCase();
      case 'narration':
        return gameUI.dialogue.speakerSage.toUpperCase();
      default:
        return gameUI.dialogue.speakerNarration.toUpperCase();
    }
  };

  const getSpeakerTagStyle = () => {
    if (beat.isPontDeNour) {
      return 'bg-emerald-950/80 text-emerald-200 border-emerald-400/70 shadow-[0_0_14px_rgba(82,183,136,0.4)]';
    }
    switch (beat.speaker) {
      case 'personnage':
        return 'bg-[#0e2a47]/85 text-sky-200 border-sky-400/70 shadow-md';
      case 'noura':
        return 'bg-[#0f3822]/85 text-emerald-200 border-emerald-400/70 shadow-md';
      case 'waswas':
      case 'grand_waswas':
        return 'bg-[#3b1248]/85 text-fuchsia-200 border-fuchsia-500/70 shadow-md';
      case 'jeune':
        return 'bg-[#3d2614]/85 text-amber-100 border-amber-500/60 shadow-md';
      case 'enfant':
        return 'bg-[#0e3b4a]/85 text-cyan-200 border-cyan-400/70 shadow-[0_0_10px_rgba(14,116,144,0.35)]';
      case 'marchand':
        return 'bg-[#4a1c0d]/85 text-amber-200 border-amber-500/70 shadow-[0_0_10px_rgba(234,88,12,0.35)]';
      case 'narration':
        return 'bg-[#2b1708]/85 text-amber-300 border-amber-500/60 shadow-[0_0_10px_rgba(217,124,39,0.35)]';
      default:
        return 'bg-black/75 text-amber-200 border-amber-500/50 shadow-md';
    }
  };

  const [cursorIndex, setCursorIndex] = useState(0);

  // Reset cursor to 0 when new choices appear
  useEffect(() => {
    setCursorIndex(0);
  }, [beat.id, beat.choices]);

  // Keyboard navigation for Zelda-style choices (Arrow Up, Arrow Down, Enter, Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if modal popup is active
      if (lockedChoicePopup) return;

      if (isTyping) {
        if (e.key === ' ' || e.key === 'Enter') {
          handleSkipOrNext();
        }
        return;
      }

      const choices = beat.choices || [];
      if (choices.length > 0) {
        if (e.key === 'ArrowUp' || e.key === 'Up') {
          e.preventDefault();
          soundManager.playDialogueClick();
          setCursorIndex((prev) => (prev > 0 ? prev - 1 : choices.length - 1));
        } else if (e.key === 'ArrowDown' || e.key === 'Down') {
          e.preventDefault();
          soundManager.playDialogueClick();
          setCursorIndex((prev) => (prev < choices.length - 1 ? prev + 1 : 0));
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const targetChoice = choices[cursorIndex];
          if (targetChoice) {
            if (targetChoice.disabled) {
              soundManager.playDialogueClick();
              setLockedChoicePopup({
                title: targetChoice.badge || 'Pack Fondateur',
                message:
                  targetChoice.disabledReason ||
                  "Débloquez immédiatement les Chapitres 2 & 3 pour vivre la suite de l'aventure et soutenir ce projet sans publicité !",
                isStripePromo: targetChoice.isStripePromo,
                stripeUrl: targetChoice.stripeUrl,
                originalPrice: targetChoice.originalPrice,
                promoPrice: targetChoice.promoPrice,
                discountRate: targetChoice.discountRate
              });
            } else {
              setSelectedChoiceId(targetChoice.id);
              soundManager.playSelect();
              setTimeout(() => {
                if (onSelectChoice) onSelectChoice(targetChoice);
              }, 350);
            }
          }
        }
      } else {
        if (e.key === ' ' || e.key === 'Enter') {
          handleSkipOrNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTyping, beat.choices, cursorIndex, onSelectChoice, lockedChoicePopup]);

  return (
    <div className={`w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4 md:px-6 z-30 select-none flex flex-col items-center ${isWaswas && isTyping ? 'animate-screen-rumble' : ''}`}>
      {/* Dynamic Grand Character Sprite / Actor on Stage (standing tall behind the dialogue box) */}
      <NarrativeActorStage
        speaker={beat.speaker}
        emotion={beat.emotion}
        isTyping={isTyping}
        customAssets={customAssets}
      />

      {/* Main Zelda-Style Glassmorphic Translucent Dialogue Frame (100% Sharp Transparent Background) */}
      <div
        onClick={(!beat.choices || beat.choices.length === 0) ? handleSkipOrNext : undefined}
        className={`w-full relative z-20 bg-black/35 sm:bg-black/30 border ${
          beat.isPontDeNour
            ? 'border-emerald-400/70 ring-2 ring-[#52b788]/60 shadow-[0_8px_32px_rgba(45,106,79,0.5)]'
            : 'border-amber-400/50 shadow-[0_8px_32px_rgba(0,0,0,0.6)] ring-1 ring-white/10'
        } rounded-2xl sm:rounded-3xl pt-3.5 pb-2.5 px-3.5 sm:pt-5 sm:pb-4 sm:px-5 transition-all duration-200 cursor-pointer group text-[#ffffff]`}
      >
        {/* Floating Waswâs Info Banner in purple directly above the dialogue box */}
        {activeWaswasImpact && (
          <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 z-40 pointer-events-none animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-300 max-w-[94vw] sm:max-w-md w-auto">
            <div
              className={`px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 shadow-2xl flex items-center gap-2 whitespace-nowrap ${
                !activeWaswasImpact.isNegative
                  ? 'bg-[#2b083d]/90 border-fuchsia-400 text-fuchsia-100 shadow-[0_0_24px_rgba(217,70,239,0.7)] ring-2 ring-fuchsia-400/40'
                  : 'bg-[#042f24]/90 border-emerald-400 text-emerald-100 shadow-[0_0_24px_rgba(52,211,153,0.7)] ring-2 ring-emerald-400/40'
              }`}
            >
              <span className="text-xs sm:text-sm shrink-0">
                {!activeWaswasImpact.isNegative ? '🌑' : '✨'}
              </span>
              <span className="text-[11px] sm:text-xs font-black font-mono tracking-wide shrink-0">
                {!activeWaswasImpact.isNegative
                  ? `+${activeWaswasImpact.amount} Doute`
                  : `-${activeWaswasImpact.amount} Doute`}
              </span>
              {activeWaswasImpact.reason && (
                <>
                  <span className="opacity-40 text-xs shrink-0">•</span>
                  <span className="text-[10px] sm:text-[11px] font-semibold truncate max-w-[180px] xs:max-w-[240px] sm:max-w-[320px]">
                    {activeWaswasImpact.reason}
                  </span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Floating Name Banner Plaque */}
        {beat.speaker && beat.speaker !== 'system' && (
          <div className="absolute -top-3.5 sm:-top-4.5 left-3 sm:left-6 z-30 flex items-center">
            <div
              className={`px-3 sm:px-5 py-0.5 sm:py-1 rounded-t-lg sm:rounded-t-xl rounded-br-xl sm:rounded-br-2xl border shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex items-center gap-1.5 ${getSpeakerTagStyle()}`}
              style={{
                clipPath: 'polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest font-cinzel drop-shadow-md uppercase">
                {getSpeakerTitle()}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-start sm:items-stretch gap-2.5 sm:gap-4">
          {/* Incrusted Speaker Avatar / Portrait Medallion */}
          {beat.speaker && beat.speaker !== 'system' && (
            <div className="flex flex-col items-center justify-start sm:justify-center pt-0.5 sm:pt-0 shrink-0">
              <div className="relative p-0.5 sm:p-1 rounded-xl sm:rounded-2xl bg-black/35 border border-amber-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center justify-center">
                <CharacterAvatar
                  speaker={beat.speaker}
                  emotion={beat.emotion}
                  size="md"
                  customAssets={customAssets}
                />
                {/* Decorative corner accent */}
                <div className="absolute -bottom-1 -right-1 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#d97c27] border border-amber-300/80 rotate-45 rounded-xs" />
              </div>
            </div>
          )}

          {/* Dialogue Body with scroll protection for small screens */}
          <div className="flex-1 min-w-0 flex flex-col gap-1.5 sm:gap-2 max-h-[36vh] sm:max-h-[48vh] overflow-y-auto pr-0.5 custom-scrollbar">
            {/* Top Bar inside box: Voice narration toggle, replay & skip button */}
            <div className="flex items-center justify-end min-h-[20px] sm:min-h-[24px] gap-1.5 sm:gap-2">
              {/* Voice toggle button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const newState = speechManager.toggleVoice();
                  setIsVoiceEnabled(newState);
                  if (newState) {
                    speechManager.speakBeat({ id: beat.id, speaker: beat.speaker, text: fullText }, { force: true });
                  } else {
                    speechManager.stop();
                  }
                }}
                className={`flex items-center gap-1 text-[9px] sm:text-[10px] font-bold transition-all px-2 py-0.5 rounded-lg border shadow-xs cursor-pointer ${
                  isVoiceEnabled
                    ? 'bg-[#0f2d1e]/90 text-[#6ee7b7] border-[#059669] ring-1 ring-[#10b981]/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]'
                    : 'bg-red-950/70 text-red-300 border-red-500/50 hover:bg-red-900/80 shadow-[0_0_8px_rgba(239,68,68,0.3)]'
                }`}
                title={isVoiceEnabled ? "Désactiver la lecture vocale" : "Cliquer pour activer la lecture vocale"}
                aria-label={isVoiceEnabled ? "Désactiver la voix" : "Activer la voix"}
              >
                {isVoiceEnabled ? (
                  <>
                    <Volume2 className={`w-3 h-3 text-[#34d399] ${isSpeaking ? 'animate-pulse' : ''}`} />
                    <span>Voix Active</span>
                    {isSpeaking && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-ping" />
                    )}
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3 h-3 text-red-400" />
                    <span className="text-red-300 font-extrabold">Voix Coupée (Activer)</span>
                  </>
                )}
              </button>

              {/* Replay speech button (always accessible for non-silent characters) */}
              {!isSilent && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    speechManager.setVoiceEnabled(true);
                    setIsVoiceEnabled(true);
                    speechManager.speakBeat({ id: beat.id, speaker: beat.speaker, text: fullText }, { force: true });
                  }}
                  className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-amber-300 hover:text-white transition-colors px-1.5 py-0.5 rounded-lg bg-black/40 border border-amber-500/40 shadow-xs cursor-pointer"
                  title="Réécouter la réplique"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span className="hidden xs:inline">Réécouter</span>
                </button>
              )}

              {/* Skip typewriter button */}
              {isTyping && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDisplayedText(fullText);
                    setIsTyping(false);
                  }}
                  className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-amber-300 hover:text-white transition-colors px-2 py-0.5 rounded-lg bg-black/40 border border-amber-500/40 shadow-xs cursor-pointer"
                >
                  <FastForward className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  Passer
                </button>
              )}
            </div>

            {/* Visual Action Vignette Card */}
            {activeVignette && (
              <div
                className={`my-1.5 p-2 sm:p-2.5 rounded-xl border flex items-center gap-2.5 sm:gap-3.5 backdrop-blur-md shadow-lg animate-in fade-in zoom-in-95 duration-300 ${
                  activeVignette.glowColor === 'emerald'
                    ? 'bg-emerald-950/85 border-emerald-500/70 text-emerald-100 shadow-[0_0_16px_rgba(16,185,129,0.35)]'
                    : activeVignette.glowColor === 'cyan'
                    ? 'bg-cyan-950/85 border-cyan-500/70 text-cyan-100 shadow-[0_0_16px_rgba(6,182,212,0.35)]'
                    : activeVignette.glowColor === 'purple'
                    ? 'bg-purple-950/85 border-purple-500/70 text-purple-100 shadow-[0_0_16px_rgba(168,85,247,0.35)]'
                    : activeVignette.glowColor === 'blue'
                    ? 'bg-blue-950/85 border-blue-500/70 text-blue-100 shadow-[0_0_16px_rgba(59,130,246,0.35)]'
                    : 'bg-amber-950/85 border-amber-500/70 text-amber-100 shadow-[0_0_16px_rgba(245,158,11,0.35)]'
                }`}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-black/60 border border-white/25 flex items-center justify-center text-xl sm:text-2xl shrink-0 shadow-inner">
                  {activeVignette.icon}
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider font-cinzel px-1.5 py-0.5 rounded bg-black/50 border border-white/15">
                      {activeVignette.badge}
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-cinzel tracking-wide truncate">
                      {activeVignette.title}
                    </span>
                  </div>
                  {activeVignette.description && (
                    <span className="text-[10px] sm:text-[11px] opacity-90 mt-0.5 line-clamp-2">
                      {activeVignette.description}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Arabic Script callout if present */}
            {fullArabicText && (
              <div className="py-1 px-2 border-r-3 border-[#d97c27] text-right font-amiri text-base sm:text-lg md:text-xl text-amber-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] tracking-wide dir-rtl my-0.5">
                {fullArabicText}
              </div>
            )}

            {/* Main Dialogue Text lines with high-contrast text shadow for 100% readability over transparent background */}
            <div
              className={`text-[#ffffff] whitespace-pre-line min-h-[32px] sm:min-h-[44px] [text-shadow:_0_1px_4px_rgb(0_0_0_/_95%),_0_2px_8px_rgb(0_0_0_/_85%)] ${
                isRtl
                  ? 'font-amiri text-base sm:text-lg md:text-xl leading-[1.9] text-right font-semibold'
                  : 'text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed font-medium'
              }`}
            >
              {displayedText}
              {isTyping && (
                <span className="inline-block w-1.5 sm:w-2 h-3 sm:h-3.5 ml-1 bg-[#d97c27] animate-pulse align-middle shadow-[0_0_8px_#d97c27]" />
              )}
            </div>

            {/* Click to continue prompt */}
            {!isTyping && (!beat.choices || beat.choices.length === 0) && (
              <div className="flex justify-end items-center gap-1.5 text-[11px] sm:text-xs font-bold text-amber-300 font-cinzel pt-1 animate-pulse select-none [text-shadow:_0_1px_4px_rgb(0_0_0_/_95%)]">
                <span>Continuer</span>
                <CornerDownLeft className="w-3.5 h-3.5 text-amber-300" />
              </div>
            )}

            {/* Zelda-Style Response Menu with Arrow Indicator */}
            {beat.choices && beat.choices.length > 0 && !isTyping && (
              <div className="mt-2 pt-2 border-t border-white/15 flex flex-col gap-2 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 font-cinzel uppercase tracking-wider flex items-center gap-1 [text-shadow:_0_1px_4px_rgb(0_0_0_/_95%)]">
                      <span>✦</span>
                      <span>Réponse :</span>
                    </span>
                  </div>
                  {selectedChoiceId && (
                    <span className="text-[9px] sm:text-[10px] bg-emerald-950/90 text-emerald-300 border border-emerald-500/60 px-2 py-0.5 rounded-full font-bold shadow-md">
                      Choix validé ✓
                    </span>
                  )}
                </div>
                
                {/* Vertical Stacked Zelda-Style Choice Capsules */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  {beat.choices.map((choice, idx) => {
                    const isSelected = selectedChoiceId === choice.id;
                    const isCursorActive = cursorIndex === idx;
                    const isStripeDisabled = choice.disabled;

                    if (isStripeDisabled) {
                      return (
                        <button
                          key={choice.id}
                          type="button"
                          onMouseEnter={() => setCursorIndex(idx)}
                          onClick={(e) => {
                            e.stopPropagation();
                            soundManager.playDialogueClick();
                            setLockedChoicePopup({
                              title: choice.badge || 'Pack Fondateur',
                              message:
                                choice.disabledReason ||
                                "Débloquez immédiatement les Chapitres 2 & 3 pour vivre la suite de l'aventure et soutenir ce projet sans publicité !",
                              isStripePromo: choice.isStripePromo,
                              stripeUrl: choice.stripeUrl,
                              originalPrice: choice.originalPrice,
                              promoPrice: choice.promoPrice,
                              discountRate: choice.discountRate
                            });
                          }}
                          className={`flex items-center justify-between p-2.5 sm:p-3 rounded-2xl border transition-all cursor-pointer text-left relative ${
                            isCursorActive
                              ? 'bg-amber-950/40 border-amber-400/80 text-amber-100 shadow-[0_0_14px_rgba(251,191,36,0.25)] translate-x-1'
                              : 'bg-black/35 border-white/10 text-stone-300 hover:bg-black/55'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0 flex-1">
                            {/* Zelda Pointer Arrow */}
                            <span className={`text-sm sm:text-base font-black transition-all ${
                              isCursorActive ? 'text-amber-400 opacity-100 animate-pulse drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]' : 'opacity-0 w-2'
                            }`}>
                              ▶
                            </span>
                            <span className="text-xs sm:text-sm font-semibold leading-snug line-clamp-2 [text-shadow:_0_1px_3px_rgb(0_0_0_/_90%)]">
                              {getLocalizedChoiceLabel(choice, language)}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 shrink-0 ml-2">
                            {choice.badge && (
                              <span className="text-[9px] font-black px-2 py-0.5 rounded-md bg-[#dc2626] text-white font-cinzel shadow-xs animate-pulse">
                                {choice.badge}
                              </span>
                            )}
                            <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          </div>
                        </button>
                      );
                    }

                    // Check if choice has trait gains
                    const traitKeys = choice.traitGains ? (Object.keys(choice.traitGains) as (keyof CharacterTraits)[]) : [];

                    return (
                      <button
                        key={choice.id}
                        disabled={selectedChoiceId !== null}
                        onMouseEnter={() => setCursorIndex(idx)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedChoiceId(choice.id);
                          soundManager.playSelect();
                          setTimeout(() => {
                            if (onSelectChoice) onSelectChoice(choice);
                          }, 350);
                        }}
                        className={`flex items-center justify-between p-2.5 sm:p-3 rounded-2xl border transition-all cursor-pointer text-left relative ${
                          isSelected
                            ? 'bg-emerald-950/70 border-emerald-400 text-emerald-100 shadow-[0_0_20px_rgba(52,211,153,0.4)] scale-[1.01]'
                            : isCursorActive
                            ? 'bg-amber-950/50 border-amber-400 text-white shadow-[0_0_16px_rgba(251,191,36,0.35)] translate-x-1 sm:translate-x-1.5'
                            : 'bg-black/30 hover:bg-black/55 border-white/20 text-[#f5f0e6]'
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                          {/* Zelda Glowing Pointer Arrow */}
                          <span className={`text-sm sm:text-base font-black transition-all shrink-0 ${
                            isCursorActive || isSelected
                              ? 'text-amber-400 opacity-100 animate-pulse drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]'
                              : 'opacity-0 w-2.5'
                          }`}>
                            ▶
                          </span>

                          <span className={`text-xs sm:text-sm leading-snug [text-shadow:_0_1px_3px_rgb(0_0_0_/_90%)] ${
                            isCursorActive ? 'text-amber-100 font-bold' : 'text-[#f5f0e6] font-semibold'
                          }`}>
                            {getLocalizedChoiceLabel(choice, language)}
                          </span>
                        </div>
                        
                        <div className="mt-0 flex flex-wrap items-center justify-end gap-1.5 shrink-0 ml-2">
                          {traitKeys.map((tk) => {
                            const cfg = TRAIT_CONFIG[tk];
                            if (!cfg) return null;
                            return (
                              <span
                                key={tk}
                                className={`text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${cfg.badgeColor} font-cinzel flex items-center gap-1 bg-black/40 shadow-xs`}
                              >
                                <span>{cfg.icon}</span>
                                <span>{cfg.label}</span>
                              </span>
                            );
                          })}

                          {choice.badge && (
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-[#2d6a4f] text-[#d8f3dc] font-cinzel">
                              {choice.badge}
                            </span>
                          )}

                          <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            isCursorActive ? 'text-amber-400 translate-x-0.5' : 'text-stone-400 opacity-60'
                          }`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Friendly Locked Choice Modal / Stripe Launch Promo */}
      {lockedChoicePopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 select-none"
          onClick={() => setLockedChoicePopup(null)}
        >
          <div
            className="w-full max-w-sm bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl p-5 sm:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.85)] flex flex-col items-center gap-3.5 text-center select-none animate-in zoom-in-95 duration-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => {
                soundManager.playSelect();
                setLockedChoicePopup(null);
              }}
              title="Fermer"
              className="absolute top-3 right-3 p-1.5 rounded-xl bg-[#ebdfc8] hover:bg-[#d9c7ab] text-[#3a2312] transition-colors cursor-pointer border border-[#3a2312] active:translate-y-0.5 shadow-xs"
            >
              <X className="w-4 h-4" />
            </button>

            {lockedChoicePopup.isStripePromo ? (
              <>
                {/* Header Icon */}
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-[#3a2312] flex items-center justify-center shadow-inner text-[#1a1209]">
                  <Crown className="w-7 h-7 fill-current" />
                </div>

                {/* Badge & Title */}
                <div>
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#dc2626] px-2.5 py-0.5 rounded-full border border-[#991b1b] shadow-xs animate-pulse font-cinzel">
                      {lockedChoicePopup.discountRate || '-38%'} OFFRE DE LANCEMENT
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#3a2312] font-cinzel">
                    Pack Fondateur (Chapitres 2 & 3)
                  </h3>
                </div>

                {/* Pricing Box */}
                <div className="w-full bg-[#f3ebd9] border-2 border-[#d97c27] rounded-2xl p-3 flex items-center justify-between shadow-xs">
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold text-[#8c5a2b] block font-cinzel">
                      Tarif Promotionnel
                    </span>
                    <span className="text-[11px] text-[#5c4028] font-medium">
                      Accès illimité sans pub
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-[#8c6b4e] line-through font-bold">
                      {lockedChoicePopup.originalPrice || '7,99 €'}
                    </span>
                    <span className="text-xl font-black text-[#d97c27] font-cinzel leading-none">
                      {lockedChoicePopup.promoPrice || '4,99 €'}
                    </span>
                  </div>
                </div>

                {/* Message Body */}
                <div className="w-full bg-[#ebf5e9] border border-[#2d6a4f]/40 rounded-xl p-2.5 text-left text-[11px] text-[#1b4332] space-y-1">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="text-emerald-700">✓</span> <span><strong>Chapitre 2</strong> : La Maîtrise de la Colère (Le Hilm & le Marchand)</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="text-emerald-700">✓</span> <span><strong>Chapitre 3</strong> : La Patience face à l'Épreuve (L'Enfant à l'Attelle)</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="text-emerald-700">✓</span> <span>Codex complet, quêtes réelles & soutien 100% sans publicité</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="w-full flex flex-col gap-2 mt-1">
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playSelect();
                      openStripeCheckout(
                        lockedChoicePopup.stripeUrl ||
                          'https://buy.stripe.com/test_4gM4gB7QR3ThbJlgjK3Ru01'
                      );
                    }}
                    style={{
                      backgroundColor: '#e69138',
                      backgroundImage: 'linear-gradient(135deg, #e69138 0%, #f0a04b 100%)',
                      color: '#1a1209'
                    }}
                    className="w-full py-3 px-4 rounded-2xl text-[#1a1209] font-black text-xs sm:text-sm font-cinzel border-2 border-[#3a2312] shadow-[0_3px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer hover:brightness-105 flex items-center justify-center gap-2"
                  >
                    <span>Débloquer sur Stripe ({lockedChoicePopup.promoPrice || '4,99 €'})</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playSelect();
                      setLockedChoicePopup(null);
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-[#ebdfc8] hover:bg-[#d9c7ab] text-[#5c4028] font-bold text-xs font-cinzel border border-[#3a2312]/40 transition-colors cursor-pointer"
                  >
                    Continuer le Chapitre 1
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Standard Non-promo Locked Modal */}
                <div className="w-13 h-13 rounded-2xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center shadow-inner text-[#d97c27]">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel bg-[#ebdfc8] px-3 py-1 rounded-full border border-[#3a2312]">
                    {lockedChoicePopup.title}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel mt-2">
                    Un chemin pour plus tard ! 🌿
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5c4028] leading-relaxed font-medium bg-[#f3ebd9] p-3 rounded-2xl border border-[#d2be9f]">
                  {lockedChoicePopup.message}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    soundManager.playSelect();
                    setLockedChoicePopup(null);
                  }}
                  style={{
                    backgroundColor: '#e69138',
                    backgroundImage: 'linear-gradient(135deg, #e69138 0%, #f0a04b 100%)',
                    color: '#1a1209'
                  }}
                  className="w-full py-3 px-4 rounded-2xl text-[#1a1209] font-black text-xs sm:text-sm font-cinzel border-2 border-[#3a2312] shadow-[0_3px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer hover:brightness-105"
                >
                  Continuer le Chapitre 1
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
