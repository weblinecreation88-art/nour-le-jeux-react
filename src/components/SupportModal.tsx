import React, { useState } from 'react';
import {
  X,
  Heart,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Crown,
  Coffee,
  Star,
  Lock,
  Unlock,
  ArrowRight
} from 'lucide-react';
import { STRIPE_CONFIG, SupportTier, openStripeCheckout, setSupporterStatus } from '../utils/stripe';
import { soundManager } from '../utils/audio';

interface SupportModalProps {
  onClose: () => void;
  onUnlocked?: () => void;
  reason?: 'chapter_end' | 'general' | 'profile';
}

export const SupportModal: React.FC<SupportModalProps> = ({
  onClose,
  onUnlocked,
  reason = 'general'
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>('founder');

  const handleSelectTier = (tier: SupportTier) => {
    soundManager.playSelect();
    setSelectedTier(tier.id);
  };

  const handleProceedStripe = (tier: SupportTier) => {
    soundManager.playSelect();
    openStripeCheckout(tier.stripeUrl);
  };

  const handleApplyPromoCode = () => {
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'NOUR2026' || clean === 'SAGESSE' || clean === 'WAQF' || clean === 'MECENE') {
      soundManager.playQuizSuccess();
      setSupporterStatus(true);
      setPromoFeedback('🎉 Accès Fondateur & Chapitres Débloqués avec succès !');
      setTimeout(() => {
        onUnlocked?.();
        onClose();
      }, 1200);
    } else {
      soundManager.playSelect();
      setPromoFeedback('Code invalide. Essayez avec un lien Stripe ou contactez le support.');
    }
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 select-none">
      <div className="bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl w-full max-w-lg shadow-[0_12px_32px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden max-h-[94vh] sm:max-h-[90vh] relative">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#f3ebd9] border-b-2 border-[#3a2312] shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-[#1a1209] border border-[#3a2312] shadow-xs">
              <Crown className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-black text-[#3a2312] font-cinzel leading-tight">
                Soutenir le Projet Nour
              </h2>
              <span className="text-[10px] text-[#2d6a4f] font-bold font-mono">
                Waqf Numérique & Mécénat Éthique
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playSelect();
              onClose();
            }}
            title="Fermer"
            className="p-1.5 rounded-xl bg-[#ebdfc8] hover:bg-[#d9c7ab] text-[#3a2312] transition-colors cursor-pointer border border-[#3a2312] active:translate-y-0.5 shadow-xs"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col gap-3.5">
          {/* Mission & Purpose Banner */}
          <div className="p-3.5 rounded-2xl bg-[#ebf5e9] border-2 border-[#2d6a4f] flex items-start gap-3 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-[#d8f3dc] border-2 border-[#2d6a4f] flex items-center justify-center text-[#2d6a4f] shrink-0 mt-0.5">
              <Heart className="w-5 h-5 fill-emerald-600 text-emerald-600" />
            </div>
            <div className="flex-1 text-xs sm:text-sm text-[#1b4332] leading-relaxed">
              <span className="font-black font-cinzel block text-[#14532d] mb-0.5">
                {reason === 'chapter_end'
                  ? 'Félicitations pour le Chapitre 1 ! 🌿'
                  : 'Une Aventure 100% Indépendante & Saine 📖'}
              </span>
              <p className="text-xs text-[#2d522f]">
                <strong>Nour</strong> est conçu sans aucune publicité intrusive. Votre soutien finance les voix d'acteurs de qualité, les animations et permet d'offrir cette éducation au plus grand nombre.
              </p>
            </div>
          </div>

          {/* 3 Support Tiers */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel">
              Choisis ton niveau de soutien :
            </span>

            {STRIPE_CONFIG.tiers.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => handleSelectTier(tier)}
                  className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col gap-2 relative ${
                    tier.highlight
                      ? 'bg-gradient-to-br from-[#fffbeb] via-[#fef3c7] to-[#fde68a] border-[#d97c27] shadow-md ring-2 ring-[#d97c27]/40'
                      : 'bg-[#fbf7ee] hover:bg-[#f3ebd9] border-[#d2be9f] text-[#3a2312]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{tier.icon}</span>
                      <div>
                        <span className="font-black text-xs sm:text-sm text-[#3a2312] font-cinzel block">
                          {tier.name}
                        </span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {tier.discountRate ? (
                            <span className="text-[10px] font-black text-white bg-[#dc2626] px-2 py-0.5 rounded-md shadow-xs animate-pulse">
                              {tier.discountRate} OFFRE DE LANCEMENT
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold text-[#8c5a2b]">
                              {tier.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end shrink-0">
                      {tier.originalPrice && (
                        <span className="text-[11px] sm:text-xs font-bold font-mono line-through text-[#8c2b2b]/70 decoration-2">
                          {tier.originalPrice}
                        </span>
                      )}
                      <span className={`text-base sm:text-lg font-black font-mono leading-tight ${
                        tier.discountRate ? 'text-[#b91c1c]' : 'text-[#2d6a4f]'
                      }`}>
                        {tier.price}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#5c4028] leading-snug">
                    {tier.description}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProceedStripe(tier);
                    }}
                    className={`w-full py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm font-cinzel flex items-center justify-center gap-2 border-2 transition-all active:translate-y-0.5 cursor-pointer shadow-xs ${
                      tier.highlight
                        ? 'bg-[#d97c27] hover:bg-[#c26a1b] text-white border-[#3a2312]'
                        : 'bg-[#2d6a4f] hover:bg-[#1b4332] text-white border-[#1b4332]'
                    }`}
                  >
                    <span>Profiter de l'offre ({tier.price})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Partner / Code Unlock Box */}
          <div className="p-3 bg-[#f3ebd9] border border-[#d2be9f] rounded-2xl flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase text-[#8c5a2b] font-cinzel">
              Tu as déjà soutenu ou reçu un code d'accès ?
            </span>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ex: NOUR2026"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-white border border-[#b89f81] rounded-xl px-3 py-1.5 text-xs font-mono uppercase font-bold text-[#3a2312] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
              />
              <button
                type="button"
                onClick={handleApplyPromoCode}
                className="px-3 py-1.5 rounded-xl bg-[#ebdfc8] hover:bg-[#d9c7ab] text-[#3a2312] font-bold text-xs font-cinzel border border-[#3a2312] cursor-pointer active:scale-95"
              >
                Activer
              </button>
            </div>
            {promoFeedback && (
              <span className="text-[10px] font-bold text-[#2d6a4f]">{promoFeedback}</span>
            )}
          </div>
        </div>

        {/* Pinned Footer */}
        <div className="p-3.5 bg-[#f3ebd9] border-t-2 border-[#3a2312] shrink-0 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[10px] text-[#5c4028] font-bold">
            <ShieldCheck className="w-4 h-4 text-[#2d6a4f]" />
            <span>Paiement 100% sécurisé par Stripe</span>
          </div>

          <button
            type="button"
            onClick={() => {
              soundManager.playSelect();
              onClose();
            }}
            className="text-xs font-bold text-[#8c5a2b] hover:text-[#3a2312] underline font-cinzel cursor-pointer"
          >
            Continuer l'aventure gratuitement
          </button>
        </div>
      </div>
    </div>
  );
};
