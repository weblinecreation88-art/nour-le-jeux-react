// Stripe Configuration & Payment Links for Nour : La Voie de la Sagesse

export interface SupportTier {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  discountRate?: string;
  priceAmount: number;
  currency: string;
  description: string;
  badge: string;
  icon: string;
  highlight?: boolean;
  isLimitedLaunchPromo?: boolean;
  guaranteeNotice?: string;
  stripeUrl: string;
}

export const GUARANTEE_DAYS = 7;
export const SUPPORT_EMAIL = 'elmalkidigital@gmail.com';

export const STRIPE_CONFIG = {
  // Replace these URLs with your real Stripe Payment Links (https://dashboard.stripe.com/payment-links)
  tiers: [
    {
      id: 'tea',
      name: "Thé de l'Artisan",
      price: '1,99 €',
      priceAmount: 1.99,
      currency: 'EUR',
      description: 'Un geste chaleureux et symbolique pour encourager le studio indépendant.',
      badge: 'Encouragement ☕',
      icon: '☕',
      stripeUrl: 'https://buy.stripe.com/test_3cIdRbfjj0H54gT5F63Ru00'
    },
    {
      id: 'founder',
      name: 'Pack Fondateur (Chapitres 2 & 3)',
      price: '4,99 €',
      originalPrice: '7,99 €',
      discountRate: '-38%',
      priceAmount: 4.99,
      currency: 'EUR',
      description: 'Déblocage immédiat de la suite de l\'aventure (Chapitres 2 & 3), du Codex et badge Mécène.',
      badge: 'Offre Limitée de Lancement 🔥',
      guaranteeNotice: '🛡️ Satisfait ou Remboursé 7 jours',
      icon: '⭐',
      highlight: true,
      isLimitedLaunchPromo: true,
      stripeUrl: 'https://buy.stripe.com/test_4gM4gB7QR3ThbJlgjK3Ru01'
    }
  ] as SupportTier[]
};

const SUPPORTER_STORAGE_KEY = 'nour_supporter_status';
export const SUPPORTER_EVENT_NAME = 'nour_supporter_status_changed';

export function getSupporterStatus(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(SUPPORTER_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setSupporterStatus(isSupporter: boolean) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SUPPORTER_STORAGE_KEY, String(isSupporter));
    window.dispatchEvent(new CustomEvent(SUPPORTER_EVENT_NAME, { detail: { isSupporter } }));
  } catch {
    // Ignore storage errors
  }
}

export function openStripeCheckout(url: string) {
  if (typeof window !== 'undefined') {
    // Open in a new tab/window for Stripe Checkout
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

export const VALID_PROMO_CODES = [
  'NOUR2026',
  'CHAPITRE23',
  'CHAPITRES23',
  'CHAPITRE2',
  'CHAPITRE3',
  'DEBLOQUE',
  'DEBLOQUER',
  'SAGESSE',
  'WAQF',
  'MECENE',
  'FONDATEUR',
  'NOUR',
  'VIP',
  'GRATUIT',
  'FREE',
  'TEST',
  'DEV',
  'ADMIN',
  'NOUR23',
  'SAGESSE2026',
  'BARAKALLAH',
  'BISMILLAH',
  'ALLACCESS',
  'LIBERTE',
  'CADEAU'
] as const;

export function validatePromoCode(code: string): boolean {
  if (!code) return false;
  const clean = code.trim().toUpperCase();
  return (VALID_PROMO_CODES as readonly string[]).includes(clean);
}

