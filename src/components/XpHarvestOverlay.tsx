import React, { useEffect, useState, useMemo } from 'react';
import { Sparkles, Zap, Star } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface XpHarvestOverlayProps {
  amount: number;
  reason?: string;
  startX?: number;
  startY?: number;
  onComplete: () => void;
}

interface Particle {
  id: number;
  icon: 'star' | 'zap' | 'sparkle';
  burstX: number;
  burstY: number;
  delayMs: number;
  size: number;
}

export const XpHarvestOverlay: React.FC<XpHarvestOverlayProps> = ({
  amount,
  reason,
  startX,
  startY,
  onComplete
}) => {
  const [phase, setPhase] = useState<'burst' | 'fly' | 'done'>('burst');
  const [targetPos, setTargetPos] = useState<{ x: number; y: number }>({ x: 100, y: 30 });

  const originX = startX ?? (typeof window !== 'undefined' ? window.innerWidth / 2 : 200);
  const originY = startY ?? (typeof window !== 'undefined' ? window.innerHeight / 2 : 300);

  // Generate 10 celebratory particles
  const particles: Particle[] = useMemo(() => {
    const icons: Particle['icon'][] = ['star', 'zap', 'sparkle', 'star', 'sparkle', 'zap', 'star', 'sparkle', 'star', 'zap'];
    return icons.map((icon, i) => {
      const angle = (i / icons.length) * 2 * Math.PI + (Math.random() * 0.4 - 0.2);
      const distance = 70 + Math.random() * 80;
      return {
        id: i,
        icon,
        burstX: Math.cos(angle) * distance,
        burstY: Math.sin(angle) * distance,
        delayMs: i * 35,
        size: 18 + Math.floor(Math.random() * 12)
      };
    });
  }, []);

  useEffect(() => {
    // Play the sparkling harvest sound
    soundManager.playXpHarvest();

    // Find destination header XP target position
    if (typeof document !== 'undefined') {
      const targetEl = document.getElementById('pixelio-header-xp-target');
      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        setTargetPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
    }

    // Step 1: Burst outwards (0 to 350ms)
    // Step 2: Fly towards header target (350ms to 1200ms)
    const flyTimer = setTimeout(() => {
      setPhase('fly');
    }, 350);

    // Step 3: Complete & cleanup
    const endTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 1400);

    return () => {
      clearTimeout(flyTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden select-none">
      {/* Dimmed Golden Aura */}
      <div className="absolute inset-0 bg-amber-950/20 backdrop-blur-[1px] animate-in fade-in duration-300" />

      {/* Central Big Award Splash */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2.5 transition-all duration-500 pointer-events-none ${
          phase === 'fly' ? 'opacity-0 scale-90 -translate-y-20' : 'opacity-100 scale-100 animate-in zoom-in-75 duration-300'
        }`}
      >
        {/* Radiant Golden Sunburst Medallion */}
        <div className="relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-yellow-600 via-amber-400 via-yellow-200 to-amber-500 border-4 border-yellow-100 shadow-[0_0_40px_rgba(250,204,21,0.95),0_8px_0_#78350f] flex items-center justify-center animate-bounce">
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full border-2 border-yellow-200/80 bg-gradient-to-b from-amber-300 via-yellow-200 to-amber-400 flex items-center justify-center shadow-inner">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-amber-950 fill-yellow-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
            </div>
          </div>
          <div className="absolute -inset-4 bg-yellow-400/40 rounded-full blur-2xl animate-pulse" />
        </div>

        {/* Big Golden Number */}
        <div className="bg-[#fbf7ee] border-3 border-[#3a2312] px-6 py-2.5 rounded-2xl shadow-[0_6px_0_#3a2312] flex flex-col items-center">
          <span className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 font-cinzel leading-none drop-shadow-sm">
            +{amount} XP
          </span>
          <span className="text-xs sm:text-sm font-black text-amber-900 uppercase font-cinzel tracking-wider mt-1 flex items-center gap-1">
            <span>🪙</span>
            <span>Pièces d'Or Récoltées !</span>
          </span>
        </div>

        {reason && (
          <div className="bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full border border-yellow-400/50 text-xs sm:text-sm font-bold text-yellow-200 text-center max-w-xs shadow-md">
            {reason}
          </div>
        )}
      </div>

      {/* 10 Flying Radiant Golden Coin Particles */}
      {particles.map((p) => {
        let curX = originX;
        let curY = originY;

        if (phase === 'burst') {
          curX = originX + p.burstX;
          curY = originY + p.burstY;
        } else if (phase === 'fly' || phase === 'done') {
          curX = targetPos.x;
          curY = targetPos.y;
        }

        const isFlying = phase === 'fly';

        return (
          <div
            key={p.id}
            style={{
              transform: `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%) ${
                isFlying ? 'scale(0.5)' : 'scale(1.15)'
              }`,
              transition: isFlying
                ? `transform 0.65s cubic-bezier(0.25, 1, 0.5, 1) ${p.delayMs}ms, opacity 0.5s ease-out 0.3s`
                : 'transform 0.32s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
              opacity: isFlying ? (phase === 'done' ? 0 : 0.95) : 1
            }}
            className="absolute left-0 top-0 will-change-transform pointer-events-none"
          >
            {/* Minted Radiant 3D Gold Coin */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 border-2 border-yellow-100 shadow-[0_0_20px_rgba(250,204,21,0.95),0_3px_6px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(180,83,9,0.7)] flex items-center justify-center text-amber-950">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-yellow-100/70 bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-300 flex items-center justify-center shadow-inner">
                {p.icon === 'star' && <Star className="w-4 h-4 fill-amber-950 stroke-amber-950" />}
                {p.icon === 'zap' && <Zap className="w-4 h-4 fill-amber-950 stroke-amber-950" />}
                {p.icon === 'sparkle' && <Sparkles className="w-4 h-4 fill-amber-950 stroke-amber-950" />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
