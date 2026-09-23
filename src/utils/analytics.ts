import { logEvent } from 'firebase/analytics';
import { analyticsPromise } from '../firebase';
import posthog from 'posthog-js';
import { Capacitor } from '@capacitor/core';

export { posthog };

/**
 * Récupère l'instance singleton unique de PostHog (partagée avec index.html via window.posthog)
 * pour garantir un seul distinct_id et éliminer la duplication des utilisateurs.
 */
export function getPostHog() {
  if (typeof window !== 'undefined' && (window as any).posthog && typeof (window as any).posthog.capture === 'function') {
    return (window as any).posthog;
  }
  return posthog;
}

/**
 * Détecte les bots, crawlers (TikTok, Meta, Google) et navigateurs automatisés
 * pour éviter de polluer les statistiques avec du trafic fantôme (1s).
 */
export function isBotOrCrawler(): boolean {
  if (typeof window === 'undefined') return true;
  if (navigator.webdriver) return true;

  const ua = (navigator.userAgent || '').toLowerCase();
  const botSignatures = [
    'bot', 'crawler', 'spider', 'headless', 'lighthouse',
    'facebookexternalhit', 'meta-externalagent', 'bytespider',
    'tiktokbot', 'twitterbot', 'linkedinbot', 'slackbot',
    'discordbot', 'whatsapp', 'telegrambot', 'applebot',
    'googlebot', 'bingbot', 'yandex', 'duckduckbot',
    'semrushbot', 'ahrefsbot', 'pingdom', 'uptime', 'datadog'
  ];

  if (botSignatures.some(sig => ua.includes(sig))) {
    return true;
  }

  if (window.screen && (window.screen.width === 0 || window.screen.height === 0)) {
    return true;
  }

  return false;
}

/**
 * Envoie un événement à PostHog (temps réel) et à Firebase Analytics de manière sécurisée.
 */
export async function trackEvent(eventName: string, params: Record<string, any> = {}) {
  // Ignore les bots et spiders automatisés
  if (isBotOrCrawler()) {
    return;
  }

  // PostHog Real-Time Analytics (Instance singleton unique synchronisée avec le navigateur)
  try {
    if (typeof window !== 'undefined') {
      getPostHog().capture(eventName, {
        ...params,
        platform: Capacitor.isNativePlatform() ? 'android_apk' : 'web_browser',
        timestamp: new Date().toISOString()
      });
      if (import.meta.env.DEV) {
        console.log(`[PostHog] 🦔 ${eventName}`, params);
      }
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn(`[PostHog] ⚠️ Échec d'envoi pour ${eventName}:`, err);
    }
  }

  // Firebase Analytics
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
    category: category || 'Général',
    value: isCorrect ? 1 : 0,
    currency: 'USD'
  });
}

/**
 * Track la validation d'une action prophétique ou défi dans le monde réel (ex: verre d'eau).
 */
export function trackRealActionValidated(actionId: string, actionTitle: string, xpReward: number) {
  trackEvent('adab_action_validated', {
    action_id: actionId,
    action_title: actionTitle,
    xp_reward: xpReward,
    value: 1,
    currency: 'USD'
  });
}

/**
 * Track l'entrée dans une scène d'aventure (ex: Chambre = 1, Poteau = 2).
 */
export function trackSceneView(sceneId: number, sceneTitle: string) {
  trackEvent('scene_view', {
    scene_id: sceneId,
    scene_title: sceneTitle
  });
  try {
    if (typeof window !== 'undefined') {
      getPostHog().capture(`scene_${sceneId}_view`, {
        scene_id: sceneId,
        scene_title: sceneTitle
      });
    }
  } catch {}
}

/**
 * Track la validation et fin d'une scène d'aventure.
 */
export function trackSceneCompleted(sceneId: number, sceneTitle: string) {
  trackEvent('scene_completed', {
    scene_id: sceneId,
    scene_title: sceneTitle,
    value: 1,
    currency: 'USD'
  });
  try {
    if (typeof window !== 'undefined') {
      getPostHog().capture(`scene_${sceneId}_completed`, {
        scene_id: sceneId,
        scene_title: sceneTitle
      });
    }
  } catch {}
}

/**
 * Track la fin complète du Chapitre 1.
 */
export function trackChapterCompleted(chapterId: number, xpTotal: number, level: number) {
  trackEvent('chapter_completed', {
    chapter_id: chapterId,
    xp_total: xpTotal,
    player_level: level,
    value: 5,
    currency: 'USD'
  });
  // Événements standards GA4 pour jeux
  trackEvent('level_end', {
    level_name: `Chapitre ${chapterId}`,
    success: 1
  });
  trackEvent('unlock_achievement', {
    achievement_id: `chapter_${chapterId}_completed`
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

/**
 * Track le clic sur le bouton de téléchargement de l'APK Android (Google Drive).
 */
export function trackApkDownloadClick(sourceLocation: string = 'hero') {
  trackEvent('apk_download_click', {
    source_location: sourceLocation,
    platform: Capacitor.isNativePlatform() ? 'android_apk' : 'web_browser',
    value: 2,
    currency: 'USD',
    timestamp: new Date().toISOString()
  });
  trackEvent('file_download', {
    file_name: 'nour-release-direct.apk',
    file_extension: 'apk',
    link_text: 'Télécharger APK Android'
  });
}

/**
 * Track le clic sur l'action de test ou lancement direct du jeu depuis la Landing Page.
 */
export function trackPlayGameClick(sourceLocation: string = 'hero_primary') {
  trackEvent('play_game_click', {
    source_location: sourceLocation,
    platform: Capacitor.isNativePlatform() ? 'android_apk' : 'web_browser',
    value: 1,
    currency: 'USD',
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
    value: 1,
    currency: 'USD',
    platform: Capacitor.isNativePlatform() ? 'android_apk' : 'web_pwa'
  });
  trackEvent('tutorial_begin', {
    tutorial_name: 'Chapitre 1 : Le chemin commence'
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
