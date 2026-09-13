import { useState } from 'react';
import { X, ExternalLink, Smartphone, Monitor, Maximize2, RotateCcw } from 'lucide-react';
import { GAME_URL } from '../../data/gameData';

interface GameViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GameViewerModal({ isOpen, onClose }: GameViewerModalProps) {
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'desktop'>('mobile');
  const [iframeKey, setIframeKey] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[94vh] rounded-2xl bg-[#110f1a] border-2 border-amber-500/40 shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden">
        
        {/* Modal Header Bar */}
        <div className="bg-[#0b0a12] px-4 py-3 border-b border-amber-500/20 flex items-center justify-between gap-3 text-xs">
          
          {/* Game Title Info */}
          <div className="flex items-center gap-3">
            <span className="font-cinzel font-bold text-sm text-amber-200 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              NOUR — Chapitre 1 : Le chemin commence
            </span>
            <span className="hidden sm:inline-block text-[10px] text-stone-400 px-2 py-0.5 rounded bg-stone-900 border border-amber-500/20">
              Session Live
            </span>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex items-center gap-2">
            
            {/* Switch mobile / desktop view */}
            <div className="hidden sm:flex items-center bg-[#171424] border border-amber-500/20 rounded-lg p-0.5">
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                  deviceMode === 'mobile' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:text-white'
                }`}
                title="Format Smartphone (Recommandé)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                  deviceMode === 'desktop' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:text-white'
                }`}
                title="Format Plein Écran"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Large</span>
              </button>
            </div>

            {/* Reload iframe */}
            <button
              onClick={() => setIframeKey(k => k + 1)}
              className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 cursor-pointer"
              title="Recharger la partie"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Open in new window */}
            <a
              href={GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-amber-950/60 hover:bg-amber-900/80 border border-amber-500/30 text-amber-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Ouvrir en plein écran</span>
            </a>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-900 hover:bg-red-950/60 border border-stone-700 hover:border-red-500/50 text-stone-300 hover:text-red-300 cursor-pointer transition-colors"
              aria-label="Fermer le jeu"
            >
              <X className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* Modal Body / iFrame Viewport */}
        <div className="flex-1 bg-[#09080e] relative flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          
          <div className={`relative transition-all duration-300 h-full flex flex-col items-center justify-center ${
            deviceMode === 'mobile' 
              ? 'w-full max-w-[420px] rounded-3xl border-4 border-stone-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden bg-[#121118]' 
              : 'w-full h-full rounded-xl border border-stone-800 overflow-hidden'
          }`}>
            
            {/* Top Phone speaker notch in mobile mode */}
            {deviceMode === 'mobile' && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-stone-900 rounded-full z-20 pointer-events-none opacity-80" />
            )}

            <iframe
              key={iframeKey}
              src={GAME_URL}
              title="Jeu NOUR Chapitre 1"
              className="w-full h-full border-0 bg-[#121118]"
              allow="autoplay; fullscreen"
            />
          </div>

        </div>

        {/* Modal Sub-Footer Tips */}
        <div className="bg-[#0b0a12] px-4 py-2 border-t border-amber-500/10 flex items-center justify-between text-[11px] text-stone-400">
          <span>💡 Astuce : Cliquez sur l'écran pour faire avancer les dialogues et choix d'Othmân.</span>
          <span className="text-amber-400/70 font-mono">Site officiel : playnour.online</span>
        </div>

      </div>
    </div>
  );
}
