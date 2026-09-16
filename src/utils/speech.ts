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
 * Checks if a speaker is silent (no audio playback).
 * Waswâs / Grand Waswâs are strictly silent (internal whispers / passing thoughts in the mind - NO vocal audio).
 */
export function isSilentSpeaker(speaker?: string): boolean {
  if (!speaker) return false;
  const s = speaker.toLowerCase().trim();
  return s === 'waswas' || s === 'grand_waswas' || s.includes('waswas');
}

class SpeechManager {
  private synth: SpeechSynthesis | null = null;
  private isEnabled: boolean = true;
  private isSpeaking: boolean = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private currentAudio: HTMLAudioElement | null = null;
  private currentBeatId: string | null = null;
  private pendingAudio: { audio: HTMLAudioElement; beatId: string } | null = null;
  private resumeGestureHandler: (() => void) | null = null;
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

      // Proactively unlock audio on first interaction
      const onFirstGesture = () => {
        this.unlock();
        window.removeEventListener('pointerdown', onFirstGesture, true);
        window.removeEventListener('touchstart', onFirstGesture, true);
        window.removeEventListener('keydown', onFirstGesture, true);
      };
      window.addEventListener('pointerdown', onFirstGesture, { capture: true, once: true });
      window.addEventListener('touchstart', onFirstGesture, { capture: true, once: true });
      window.addEventListener('keydown', onFirstGesture, { capture: true, once: true });

      if ('speechSynthesis' in window) {
        this.synth = window.speechSynthesis;
        this.loadVoices();
        if (this.synth.onvoiceschanged !== undefined) {
          this.synth.onvoiceschanged = () => this.loadVoices();
        }
      }
    }
  }

  /**
   * Proactively unlocks HTML5 Audio on modern browsers
   */
  public unlock() {
    if (typeof window === 'undefined') return;
    try {
      const silentAudio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
      silentAudio.volume = 0.01;
      silentAudio.play().catch(() => {});
    } catch {}
    if (this.pendingAudio && this.pendingAudio.beatId === this.currentBeatId) {
      const toPlay = this.pendingAudio.audio;
      this.pendingAudio = null;
      toPlay.play().catch(() => {});
    }
    this.disarmUserGestureResume();
  }

  private armUserGestureResume(beatId: string, audio: HTMLAudioElement) {
    if (typeof window === 'undefined') return;
    this.disarmUserGestureResume();
    this.pendingAudio = { audio, beatId };

    this.resumeGestureHandler = () => {
      if (this.pendingAudio && this.pendingAudio.beatId === this.currentBeatId) {
        console.log('[SpeechManager] 🔊 Lecture audio reprise sur geste utilisateur pour beat:', beatId);
        const toPlay = this.pendingAudio.audio;
        this.pendingAudio = null;
        toPlay.play().catch(() => {});
      }
      this.disarmUserGestureResume();
    };

    window.addEventListener('click', this.resumeGestureHandler, { capture: true, once: true });
    window.addEventListener('touchstart', this.resumeGestureHandler, { capture: true, once: true });
    window.addEventListener('keydown', this.resumeGestureHandler, { capture: true, once: true });
  }

  private disarmUserGestureResume() {
    if (typeof window === 'undefined') return;
    if (this.resumeGestureHandler) {
      window.removeEventListener('click', this.resumeGestureHandler, true);
      window.removeEventListener('touchstart', this.resumeGestureHandler, true);
      window.removeEventListener('keydown', this.resumeGestureHandler, true);
      this.resumeGestureHandler = null;
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

    const beatId = beat.id || `beat_${Date.now()}`;
    this.currentBeatId = beatId;

    // Try playing MP3 if beat.id is present
    if (beat.id) {
      let chapterNum = beat.chapter;
      if (!chapterNum) {
        const match = beat.id.match(/^s(\d+)/);
        if (match) {
          const sId = parseInt(match[1], 10);
          if (sId === 142 || (sId >= 10 && sId <= 16)) {
            chapterNum = 2;
          } else if (sId === 201 || sId === 202 || (sId >= 17 && sId <= 25)) {
            chapterNum = 3;
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
        audio.preload = 'auto';
        // Immediately assign currentAudio so any stop() call can stop it immediately
        this.currentAudio = audio;

        audio.onplay = () => {
          if (this.currentAudio !== audio) {
            audio.pause();
            return;
          }
          this.notifySpeaking(true);
        };

        audio.onended = () => {
          if (this.currentAudio === audio) {
            this.notifySpeaking(false);
            this.currentAudio = null;
            options?.onEnd?.();
          }
        };

        audio.onerror = (e) => {
          console.warn(`[SpeechManager] MP3 non trouvé ou inaccessible: ${audioUrl}`, e);
          if (this.currentAudio === audio) {
            this.currentAudio = null;
            this.notifySpeaking(false);
            options?.onEnd?.();
          }
        };

        audio.play().catch((err) => {
          console.warn(`[SpeechManager] Autoplay restreint ou erreur pour ${audioUrl}:`, err?.message || err);
          if (this.currentAudio === audio) {
            // Autoplay blocked: wait for user gesture on this specific beat WITHOUT triggering native TTS simultaneously!
            this.armUserGestureResume(beatId, audio);
          }
        });
        return;
      } catch (e) {
        console.warn(`[SpeechManager] Exception Audio:`, e);
      }
    }

    // If no audio file, silently finish without robotic TTS interruption
    options?.onEnd?.();
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
   * Speaks full quiz question followed by each option - DISABLED (silenced as requested)
   */
  public speakQuiz(
    _question: string,
    _options?: string[],
    _speaker: SpeakerRole = 'noura',
    onEnd?: () => void
  ) {
    onEnd?.();
  }

  /**
   * Speaks a single option - DISABLED (silenced as requested)
   */
  public speakOption(
    _optionText: string,
    _letter?: string,
    _speaker: SpeakerRole = 'noura',
    onEnd?: () => void
  ) {
    onEnd?.();
  }

  /**
   * Speaks feedback - DISABLED (silenced as requested)
   */
  public speakFeedback(
    _isCorrect: boolean,
    _speaker: SpeakerRole = 'noura',
    onEnd?: () => void
  ) {
    onEnd?.();
  }

  /**
   * Speaks explanation - DISABLED (silenced as requested)
   */
  public speakExplanation(
    _explanation: string,
    _isCorrect?: boolean,
    _sourceRef?: string,
    onEnd?: () => void
  ) {
    onEnd?.();
  }

  /**
   * Stop currently playing speech or MP3 audio
   */
  public stop() {
    this.disarmUserGestureResume();
    this.pendingAudio = null;
    this.currentBeatId = null;

    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
        this.currentAudio.src = '';
      } catch {}
      this.currentAudio = null;
    }
    if (this.synth) {
      try {
        if (this.synth.speaking || this.synth.pending) {
          this.synth.cancel();
        }
      } catch {}
    }
    this.notifySpeaking(false);
    this.currentUtterance = null;
  }
}

export const speechManager = new SpeechManager();
