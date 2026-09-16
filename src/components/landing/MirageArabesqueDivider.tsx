import React from 'react';

interface MirageArabesqueDividerProps {
  className?: string;
  withStar?: boolean;
}

export const MirageArabesqueDivider: React.FC<MirageArabesqueDividerProps> = ({ 
  className = "my-12 sm:my-16",
  withStar = true
}) => {
  return (
    <div className={`relative flex items-center justify-center max-w-4xl mx-auto px-6 ${className}`} aria-hidden="true">
      {/* Left Gilded Tapering Rule */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-[#e5c158]" />

      {/* Center Islamic Arabesque Star Medallion */}
      {withStar && (
        <div className="flex items-center gap-2 px-4 shrink-0 select-none">
          <span className="text-[#d4af37]/60 text-xs">◆</span>
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Outer Rotated Diamond */}
            <div className="absolute inset-0 border border-[#d4af37]/70 rotate-45 rounded-xs" />
            {/* Inner Rotated Diamond for 8-Point Star Effect */}
            <div className="absolute inset-1 border border-[#e5c158] rotate-12 rounded-xs bg-[#130f1d]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#fbf6ec] shadow-[0_0_8px_#fbf6ec]" />
          </div>
          <span className="text-[#d4af37]/60 text-xs">◆</span>
        </div>
      )}

      {/* Right Gilded Tapering Rule */}
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/40 to-[#e5c158]" />
    </div>
  );
};

export default MirageArabesqueDivider;
