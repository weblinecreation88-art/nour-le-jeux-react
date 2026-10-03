import React, { useMemo, useState } from 'react';
import { Beat, Scene } from '../types';
import storyboard from '../../scripts/storyboard_ch1.json';

// Plans illustrés générés par scripts/generate_ch1_shots.mjs (public/game-assets/ch1_shots/<id>.jpg)
const SHOT_BY_BEAT: Record<string, { id: string; src: string; scene: number }> = {};
for (const shot of storyboard.shots) {
  for (const beatId of shot.beats) {
    SHOT_BY_BEAT[beatId] = { id: shot.id, scene: shot.scene, src: `/game-assets/ch1_shots/${shot.id}.jpg` };
  }
}

interface StoryShotOverlayProps {
  scene: Scene;
  currentBeat?: Beat;
  isContemplating?: boolean;
}

/**
 * Calque posé au-dessus du décor : affiche le plan qui correspond à la réplique en cours.
 * Une image absente ou en erreur reste invisible, le décor de la scène prend alors le relais.
 */
export const StoryShotOverlay: React.FC<StoryShotOverlayProps> = ({ scene, currentBeat, isContemplating }) => {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  // Plans de la scène courante, montés à l'avance pour un fondu sans délai réseau
  const sceneShots = useMemo(
    () => storyboard.shots.filter((s) => s.scene === scene.id && !failed[s.id]),
    [scene.id, failed]
  );
  if (sceneShots.length === 0) return null;

  const active = currentBeat ? SHOT_BY_BEAT[currentBeat.id] : undefined;
  const activeId = active && active.scene === scene.id ? active.id : null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[25]">
      {sceneShots.map((shot) => {
        const src = `/game-assets/ch1_shots/${shot.id}.jpg`;
        const visible = activeId === shot.id && loaded[shot.id];
        return (
          <div
            key={shot.id}
            className={`absolute inset-0 flex items-center justify-center bg-[#181422] transition-opacity duration-700 ease-in-out ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl scale-110" />
            <img
              src={src}
              alt=""
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              onLoad={() => setLoaded((l) => ({ ...l, [shot.id]: true }))}
              onError={() => setFailed((f) => ({ ...f, [shot.id]: true }))}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          </div>
        );
      })}
    </div>
  );
};
