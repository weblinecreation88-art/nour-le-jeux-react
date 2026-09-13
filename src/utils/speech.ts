// Accessible Hybrid Speech Manager for Nour : Le Jeu
// 1. Plays Studio MP3 audio file if present in /audio/ch{N}/{beatId}.mp3
// 2. Automatically falls back to native Web Speech API if MP3 is missing (0 MB footprint)

export type SpeakerRole =
  | 'personnage'
  | 'noura'
  | 'waswas'
  | 'grand_waswas'
  | 'jeune'
  | 'enfant'
  | 'marchand'
  | 'narration'
  | 'savant'
  | string;

export const SILENT_SPEAKERS = ['waswas', 'grand_waswas'] as const;

/**
 * Checks if a speaker is silent (no audio playback):
 * - waswas & grand_waswas: inward whisper/passing doubt (not spoken aloud)
 * (Note: narration and savant represent Le Vieux Sage and have full audio acting)
 */
export function isSilentSpeaker(speaker?: string): boolean {
  if (!speaker) return false;
  return (
    speaker === 'waswas' ||
    speaker === 'grand_waswas'
  );
}

class SpeechManager {
  private synth: SpeechSynthesis | null = null;
  private isEnabled: boolean = true;
  private isSpeaking: boolean = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private currentAudio: HTMLAudioElement | null = null;
  private frenchVoices: SpeechSynthesisVoice[] = [];
  private listeners: ((isSpeaking: boolean) => void)[] = [];
  private stateListeners: ((isEnabled: boolean) => void)[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      // Voice is enabled by default for full immersive cinema experience
      // Only disabled if user explicitly turned it off (stored === 'false')
      try {
        const stored = localStorage.getItem('nour_voice_narration');
        this.isEnabled = stored !== 'false';
      } catch {
        this.isEnabled = true;
      }

      if ('speechSynthesis' in window) {
        this.synth = window.speechSynthesis;
        this.loadVoices();
        if (this.synth.onvoiceschanged !== undefined) {
          this.synth.onvoiceschanged = () => this.loadVoices();
        }
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    this.frenchVoices = voices.filter(
      (v) => v.lang.startsWith('fr') || v.lang.startsWith('FR')
    );
  }

  public isSupported(): boolean {
    return this.synth !== null || typeof Audio !== 'undefined';
  }

  public isVoiceEnabled(): boolean {
    return this.isEnabled;
  }

  public getIsSpeaking(): boolean {
    return this.isSpeaking;
  }

  public setVoiceEnabled(enabled: boolean): boolean {
    this.isEnabled = enabled;
    try {
      localStorage.setItem('nour_voice_narration', String(enabled));
    } catch {
      // Ignore storage errors
    }

    if (!enabled) {
      this.stop();
    }

    this.notifyStateListeners();
    return this.isEnabled;
  }

  public toggleVoice(): boolean {
    return this.setVoiceEnabled(!this.isEnabled);
  }

  public onSpeakingChange(callback: (isSpeaking: boolean) => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }

  public onStateChange(callback: (isEnabled: boolean) => void): () => void {
    this.stateListeners.push(callback);
    return () => {
      this.stateListeners = this.stateListeners.filter((cb) => cb !== callback);
    };
  }

  private notifySpeaking(speaking: boolean) {
    this.isSpeaking = speaking;
    this.listeners.forEach((cb) => {
      try {
        cb(speaking);
      } catch {
        // ignore
      }
    });
  }

  private notifyStateListeners() {
    this.stateListeners.forEach((cb) => {
      try {
        cb(this.isEnabled);
      } catch {
        // ignore
      }
    });
  }

  /**
   * Cleans text for pleasant, fluent and natural speech synthesis
   */
  public cleanTextForSpeech(rawText: string): string {
    if (!rawText) return '';
    return rawText
      .replace(/ﷺ/g, 'paix et bénédictions sur lui')
      .replace(/\(ra\)/gi, "qu'Allah l'agrée")
      .replace(/\(as\)/gi, 'que la paix soit sur lui')
      .replace(/[➔➜➝→]/g, ' puis ')
      .replace(/\(Al-Woudou'\)/gi, 'Al Woudou')
      .replace(/\(Al-Iman\)/gi, 'Al Imane')
      .replace(/\(Salat\)/gi, 'Salat')
      .replace(/\(Zakat\)/gi, 'Zakat')
      .replace(/\(Hajj\)/gi, 'Hadj')
      .replace(/\(Fajr[^)]*\)/gi, '')
      .replace(/[*_#`~«»"]/g, ' ') // remove markdown and extra quotes
      .replace(/\([^)]*\)/g, (match) => {
        // Keep informative text inside parenthesis if not an emotion or empty
        const inner = match.slice(1, -1).trim();
        if (/^(soupir|chuchote|pense|triste|joyeux|ému|doute|silence)/i.test(inner)) {
          return '';
        }
        return ` ${inner} `;
      })
      .replace(/\s+/g, ' ') // normalize whitespace
      .trim();
  }

  /**
   * Choose voice and pitch/rate based on character
   */
  private getVoiceConfig(speaker: SpeakerRole) {
    let pitch = 1.0;
    let rate = 0.92;
    let preferredVoice: SpeechSynthesisVoice | undefined;

    switch (speaker) {
      case 'narration':
      case 'savant':
        pitch = 0.85; // Deep masculine tone for old wise man
        rate = 0.88;
        preferredVoice = this.frenchVoices.find(
          (v) =>
            (v.name.toLowerCase().includes('male') ||
             v.name.toLowerCase().includes('thomas') ||
             v.name.toLowerCase().includes('paul') ||
             v.name.toLowerCase().includes('nicolas') ||
             v.name.toLowerCase().includes('claude') ||
             v.name.toLowerCase().includes('georges') ||
             v.name.toLowerCase().includes('bernard')) &&
            !v.name.toLowerCase().includes('female')
        );
        if (!preferredVoice) {
          preferredVoice = this.frenchVoices.find(
            (v) =>
              !v.name.toLowerCase().includes('female') &&
              !v.name.toLowerCase().includes('amelie') &&
              !v.name.toLowerCase().includes('hortense') &&
              !v.name.toLowerCase().includes('celine') &&
              !v.name.toLowerCase().includes('julie') &&
              !v.name.toLowerCase().includes('audrey')
          );
        }
        break;

      case 'noura':
        pitch = 1.08;
        rate = 0.92;
        preferredVoice = this.frenchVoices.find(
          (v) =>
            v.name.toLowerCase().includes('female') ||
            v.name.toLowerCase().includes('hortense') ||
            v.name.toLowerCase().includes('amelie') ||
            v.name.toLowerCase().includes('celine') ||
            v.name.toLowerCase().includes('julie') ||
            v.name.toLowerCase().includes('audrey')
        );
        break;

      case 'personnage':
        pitch = 1.15;
        rate = 0.96;
        break;

      case 'waswas':
      case 'grand_waswas':
        pitch = 0.62;
        rate = 0.82;
        break;

      case 'enfant':
        pitch = 1.25;
        rate = 0.95;
        break;

      case 'marchand':
        pitch = 0.88;
        rate = 1.0;
        break;

      default:
        pitch = 1.0;
        rate = 0.92;
        break;
    }

    const selectedVoice = preferredVoice || this.frenchVoices[0];
    return { pitch, rate, voice: selectedVoice };
  }

  /**
   * Hybrid playback: tries MP3 first, falls back to native Web Speech API
   */
  public speakBeat(
    beat: { id?: string; speaker: SpeakerRole; text: string; chapter?: number },
    options?: { onEnd?: () => void; force?: boolean }
  ) {
    if (!this.isEnabled && !options?.force) return;
    this.stop();

    // Waswâs (inward whisper/passing thought) and Narration (scene descriptions) are strictly silent
    if (isSilentSpeaker(beat.speaker)) {
      options?.onEnd?.();
      return;
    }

    const cleanText = this.cleanTextForSpeech(beat.text);
    if (!cleanText) {
      options?.onEnd?.();
      return;
    }

    // Try playing MP3 if beat.id is present
    if (beat.id) {
      let chapterNum = beat.chapter;
      if (!chapterNum) {
        const match = beat.id.match(/^s(\d+)/);
        if (match) {
          const sId = parseInt(match[1], 10);
          if (sId === 201 || sId === 202 || sId >= 17) {
            chapterNum = 3;
          } else if (sId === 142 || (sId >= 10 && sId <= 16)) {
            chapterNum = 2;
          } else {
            chapterNum = 1;
          }
        } else {
          chapterNum = 1;
        }
      }

      const audioUrl = `/audio/ch${chapterNum}/${beat.id}.mp3`;

      try {
        const audio = new Audio(audioUrl);
        let hasStarted = false;

        audio.onplay = () => {
          hasStarted = true;
          this.currentAudio = audio;
          this.notifySpeaking(true);
        };

        audio.onended = () => {
          this.notifySpeaking(false);
          this.currentAudio = null;
          options?.onEnd?.();
        };

        audio.onerror = () => {
          // MP3 does not exist or failed to load: graceful fallback to native speech
          if (!hasStarted) {
            this.speak(beat.speaker, cleanText, options);
          }
        };

        audio.play().catch(() => {
          // Autoplay policy or 404: fallback
          if (!hasStarted) {
            this.speak(beat.speaker, cleanText, options);
          }
        });
        return;
      } catch {
        // Fallback below
      }
    }

    // Direct native speech fallback
    this.speak(beat.speaker, cleanText, options);
  }

  /**
   * Checks if text contains Arabic or non-French scripts
   */
  public isNonFrenchText(text: string): boolean {
    if (!text) return false;
    return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
  }

  /**
   * Speaks the dialogue beat text via native Web Speech API
   */
  public speak(
    speaker: SpeakerRole,
    rawText: string,
    options?: {
      prefixSpeakerName?: boolean;
      onEnd?: () => void;
      force?: boolean;
    }
  ) {
    if (isSilentSpeaker(speaker)) {
      options?.onEnd?.();
      return;
    }
    if (!this.synth) return;
    if (!this.isEnabled && !options?.force) return;

    this.stop();

    if (this.isNonFrenchText(rawText)) {
      options?.onEnd?.();
      return;
    }

    const textToSpeak = this.cleanTextForSpeech(rawText);
    if (!textToSpeak) {
      options?.onEnd?.();
      return;
    }

    if (this.frenchVoices.length === 0) {
      this.loadVoices();
    }

    const { pitch, rate, voice } = this.getVoiceConfig(speaker);

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'fr-FR';
    utterance.pitch = pitch;
    utterance.rate = rate;
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      this.notifySpeaking(true);
    };

    utterance.onend = () => {
      this.notifySpeaking(false);
      this.currentUtterance = null;
      options?.onEnd?.();
    };

    utterance.onerror = () => {
      this.notifySpeaking(false);
      this.currentUtterance = null;
    };

    this.currentUtterance = utterance;

    setTimeout(() => {
      if (this.synth && this.currentUtterance === utterance) {
        this.synth.speak(utterance);
      }
    }, 40);
  }

  /**
   * Speaks full quiz question followed by each option
   */
  public speakQuiz(
    question: string,
    options?: string[],
    speaker: SpeakerRole = 'noura',
    onEnd?: () => void
  ) {
    if (!this.isEnabled) return;
    this.stop();

    let fullQuizText = `Question. ${question}. `;
    if (options && options.length > 0) {
      const optionLetters = ['A', 'B', 'C', 'D', 'E'];
      options.forEach((opt, idx) => {
        const cleanOpt = opt.replace(/^[A-E]\.\s*/, '');
        fullQuizText += `Choix ${optionLetters[idx] || idx + 1} : ${cleanOpt}. `;
      });
    }

    this.speak(speaker, fullQuizText, { onEnd, force: true });
  }

  /**
   * Speaks a single option
   */
  public speakOption(
    optionText: string,
    letter?: string,
    speaker: SpeakerRole = 'noura',
    onEnd?: () => void
  ) {
    if (!this.isEnabled) return;
    this.stop();

    const cleanOpt = optionText.replace(/^[A-E]\.\s*/, '');
    const textToSpeak = letter ? `Choix ${letter} : ${cleanOpt}` : cleanOpt;
    this.speak(speaker, textToSpeak, { onEnd, force: true });
  }

  /**
   * Speaks a concise, positive or constructive audio feedback (~1 second)
   */
  public speakFeedback(
    isCorrect: boolean,
    speaker: SpeakerRole = 'noura',
    onEnd?: () => void
  ) {
    if (!this.isEnabled) return;
    this.stop();

    const text = isCorrect ? 'Bonne réponse !' : "Ce n'est pas tout à fait cela.";
    this.speak(speaker, text, { onEnd, force: true });
  }

  /**
   * Speaks full quiz answer explanation & reference (on demand)
   */
  public speakExplanation(
    explanation: string,
    isCorrect?: boolean,
    sourceRef?: string,
    onEnd?: () => void
  ) {
    if (!this.isEnabled) return;
    this.stop();

    let text = `${explanation}. `;
    if (sourceRef) {
      text += `Source : ${sourceRef}`;
    }

    this.speak('savant', text, { onEnd, force: true });
  }

  /**
   * Stop currently playing speech or MP3 audio
   */
  public stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (!this.synth) return;
    if (this.synth.speaking || this.synth.pending) {
      this.synth.cancel();
    }
    this.notifySpeaking(false);
    this.currentUtterance = null;
  }
}

export const speechManager = new SpeechManager();
