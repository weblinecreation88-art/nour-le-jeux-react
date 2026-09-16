import { logEvent } from 'firebase/analytics';
import { analyticsPromise } from '../firebase';

/**
 * Envoie un événement personnalisé à Firebase Analytics de manière sécurisée (Web / Capacitor / Offline).
 */
export async function trackEvent(eventName: string, params: Record<string, any> = {}) {
  try {
    const analytics = await analyticsPromise;
    if (analytics) {
      logEvent(analytics, eventName, params);
      if (import.meta.env.DEV) {
        console.log(`[Analytics] 📊 ${eventName}`, params);
      }
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn(`[Analytics] ⚠️ Échec d'envoi pour ${eventName}:`, err);
    }
  }
}

/**
 * Enregistre le changement d'écran ou d'onglet et met à jour le document.title.
 */
export function trackScreenView(screenName: string, screenClass: string = 'GameApp') {
  if (typeof document !== 'undefined') {
    document.title = `NOUR — ${screenName}`;
  }
  trackEvent('screen_view', {
    firebase_screen: screenName,
    firebase_screen_class: screenClass,
    screen_name: screenName
  });
}

/**
 * Track la complétion d'un quiz interactif de savoir.
 */
export function trackQuizCompleted(quizId: string, isCorrect: boolean, category?: string) {
  trackEvent('quiz_completed', {
    quiz_id: quizId,
    success: isCorrect ? 1 : 0,
    category: category || 'Général'
  });
}

/**
 * Track la validation d'une action prophétique ou défi dans le monde réel (ex: verre d'eau).
 */
export function trackRealActionValidated(actionId: string, actionTitle: string, xpReward: number) {
  trackEvent('adab_action_validated', {
    action_id: actionId,
    action_title: actionTitle,
    xp_reward: xpReward
  });
}

/**
 * Track la validation et fin d'une scène d'aventure.
 */
export function trackSceneCompleted(sceneId: number, sceneTitle: string) {
  trackEvent('scene_completed', {
    scene_id: sceneId,
    scene_title: sceneTitle
  });
}

/**
 * Track la fin complète du Chapitre 1.
 */
export function trackChapterCompleted(chapterId: number, xpTotal: number, level: number) {
  trackEvent('chapter_completed', {
    chapter_id: chapterId,
    xp_total: xpTotal,
    player_level: level
  });
}

/**
 * Track le basculement d'une quête quotidienne ou de vie.
 */
export function trackQuestToggled(questId: string, title: string, completed: boolean) {
  trackEvent('quest_toggled', {
    quest_id: questId,
    quest_title: title,
    completed: completed ? 1 : 0
  });
}

import { Capacitor } from '@capacitor/core';

/**
 * Track le clic sur le bouton de téléchargement de l'APK Android (Google Drive).
 */
export function trackApkDownloadClick(sourceLocation: string = 'hero') {
  trackEvent('apk_download_click', {
    source_location: sourceLocation,
    platform: Capacitor.isNativePlatform() ? 'android_apk' : 'web_browser',
    timestamp: new Date().toISOString()
  });
}

/**
 * Track le clic sur l'action de test ou lancement direct du jeu depuis la Landing Page.
 */
export function trackPlayGameClick(sourceLocation: string = 'hero_primary') {
  trackEvent('play_game_click', {
    source_location: sourceLocation,
    platform: Capacitor.isNativePlatform() ? 'android_apk' : 'web_browser',
    timestamp: new Date().toISOString()
  });
}

/**
 * Track le lancement ou reprise du jeu depuis le SplashScreen ou la Landing Page.
 */
export function trackGameStarted(isNewGame: boolean, level: number, xp: number) {
  trackEvent('game_started', {
    is_new_game: isNewGame ? 1 : 0,
    player_level: level,
    player_xp: xp,
    platform: Capacitor.isNativePlatform() ? 'android_apk' : 'web_pwa'
  });
}

/**
 * Track le combat ou la dissipation du Waswâs.
 */
export function trackWaswasCombatCompleted(victory: boolean, waswasXp: number) {
  trackEvent('waswas_combat_completed', {
    victory: victory ? 1 : 0,
    waswas_xp: waswasXp
  });
}

/**
 * Track le maintien ou la mise à jour de la série de jours consécutifs (streak).
 */
export function trackStreakUpdated(streakDays: number) {
  trackEvent('streak_updated', {
    streak_days: streakDays
  });
}
