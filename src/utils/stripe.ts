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
  stripeUrl: string;
}

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
      description: 'Déblocage complet de la suite de l\'aventure, du Codex et badge Mécène.',
      badge: 'Offre Limitée de Lancement 🔥',
      icon: '⭐',
      highlight: true,
      isLimitedLaunchPromo: true,
      stripeUrl: 'https://buy.stripe.com/test_4gM4gB7QR3ThbJlgjK3Ru01'
    }
  ] as SupportTier[]
};

const SUPPORTER_STORAGE_KEY = 'nour_supporter_status';

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
