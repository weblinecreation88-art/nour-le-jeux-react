import React from 'react';
import { Scene, Beat, DialogueChoice } from '../types';
import { CustomAssetsConfig, DEFAULT_ASSETS } from '../utils/assets';

interface SceneBackgroundProps {
  scene: Scene;
  currentBeat?: Beat;
  onSelectChoice?: (choice: DialogueChoice) => void;
  climaxStepIndex?: number; // 0 to 6
  waswasDissolved?: boolean;
  customAssets?: CustomAssetsConfig;
  isContemplating?: boolean;
  completedRealActions?: string[];
}

export const SceneBackground: React.FC<SceneBackgroundProps> = ({
  scene,
  currentBeat,
  onSelectChoice,
  climaxStepIndex = 0,
  waswasDissolved = false,
  customAssets,
  isContemplating = false,
  completedRealActions = []
}) => {
  const rawTheme = scene.backgroundTheme || (scene as any).backgroundKey || 'chambre';
  const theme =
    rawTheme === 'ruelle'
      ? 'refus'
      : rawTheme === 'cour'
      ? 'village'
      : rawTheme === 'verger'
      ? 'jardin'
      : rawTheme;

  // Dynamic Real-Action Scene for Scene 1 (Chambre):
  // Bed messy vs Bed made based on completedRealActions ('action_lit')
  if (theme === 'chambre') {
    const isBedMade =
      completedRealActions.includes('action_lit') ||
      Boolean(
        currentBeat &&
        currentBeat.id &&
        !['s1_intro_1', 's1_intro_2', 's1_intro_3', 's1_b1', 's1_b2', 's1_b3', 's1_b4', 's1_b5', 's1_b6', 's1_b6_choice', 's1_b7', 's1_pont_lit', 's1_b8', 's1_b9'].includes(currentBeat.id)
      );
    const bgDefait = customAssets?.backgrounds?.chambre_defait || DEFAULT_ASSETS.backgrounds.chambre_defait;
    const bgFait = customAssets?.backgrounds?.chambre || DEFAULT_ASSETS.backgrounds.chambre;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {/* Layer 1: Lit défait (Visible when bed is NOT made) */}
        {bgDefait && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isBedMade ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img
              src={bgDefait}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgDefait}
              alt="Chambre au réveil — Lit défait"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Layer 2: Lit fait (Fades in when bed IS made) */}
        {bgFait && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isBedMade ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={bgFait}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgFait}
              alt="Chambre rangée — Lit fait"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Subtle dark gradient overlay for dialogue legibility (softer during contemplation) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${
            isContemplating
              ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
              : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
          }`}
        />
      </div>
    );
  }

  // Dynamic Real-Action Scene for Scene 2 (Carrefour):
  // Backpack on ground vs picked up and strapped on based on completedRealActions ('action_depart')
  if (theme === 'carrefour') {
    const isDepartReady = completedRealActions.includes('action_depart');
    const bgSacPose = customAssets?.backgrounds?.carrefour_sac_pose || DEFAULT_ASSETS.backgrounds.carrefour_sac_pose;
    const bgDepart = customAssets?.backgrounds?.carrefour || DEFAULT_ASSETS.backgrounds.carrefour;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {/* Layer 1: Sac posé au sol (Visible avant de valider l'action du départ) */}
        {bgSacPose && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isDepartReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img
              src={bgSacPose}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgSacPose}
              alt="Carrefour des chemins — Pause et hésitation"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Layer 2: Sac ramassé / Prêt pour la marche (Visible après la duʿāʾ et l'action) */}
        {bgDepart && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isDepartReady ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={bgDepart}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgDepart}
              alt="Carrefour des chemins — En route vers le village"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Subtle dark gradient overlay for dialogue legibility (softer during contemplation) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${
            isContemplating
              ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
              : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
          }`}
        />
      </div>
    );
  }

  // Dynamic Real-Action Scene for Chapitre 2 — Scène 11/12 (Marché & Colère):
  if (theme === 'marche_colere') {
    const isSilenceDone = completedRealActions.includes('action_silence_colere');
    const bgRenverse = customAssets?.backgrounds?.marche_renverse || DEFAULT_ASSETS.backgrounds.marche_renverse || DEFAULT_ASSETS.backgrounds.village_mefiant;
    const bgVillage = customAssets?.backgrounds?.village || DEFAULT_ASSETS.backgrounds.village;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgRenverse && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isSilenceDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img src={bgRenverse} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgRenverse} alt="Place du marché — Étal renversé et fruits au sol" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        {bgVillage && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isSilenceDone ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={bgVillage} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgVillage} alt="Place du marché — Le calme préservé par le silence" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
      </div>
    );
  }

  // Dynamic Scene for Chapitre 2 — Scène 12 (Village Méfiant / Tension du Marché):
  if (theme === 'village_mefiant') {
    const bgMefiant = customAssets?.backgrounds?.village_mefiant || DEFAULT_ASSETS.backgrounds.village_mefiant || DEFAULT_ASSETS.backgrounds.village;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgMefiant && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={bgMefiant} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgMefiant} alt="Ruelle du village sous la tension" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Dynamic Real-Action Scene for Chapitre 2 — Scène 13 (Fontaine de la Mosquée & Ablutions):
  if (theme === 'mosquee_ablutions') {
    const isAblutionDone = completedRealActions.includes('action_ablution_calme');
    const bgPatio = customAssets?.backgrounds?.mosquee_patio || DEFAULT_ASSETS.backgrounds.mosquee_patio;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgPatio && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={bgPatio} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgPatio} alt="Patio ombragé aux vignes et fontaine en pierre claire" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        {/* Effet d'eau cristalline et lumière fraîche après les ablutions */}
        {isAblutionDone && (
          <div className="absolute inset-0 bg-cyan-400/10 mix-blend-screen pointer-events-none animate-pulse duration-1000" />
        )}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Dynamic Real-Action Scene for Chapitre 2 — Scène 14 (Le Retour au Marché & Réconciliation):
  if (theme === 'marche_apaise') {
    const isPardonDone = completedRealActions.includes('action_pardon_noble');
    const bgRenverse = customAssets?.backgrounds?.marche_renverse || DEFAULT_ASSETS.backgrounds.marche_renverse || DEFAULT_ASSETS.backgrounds.village_mefiant;
    const bgReconcilie = customAssets?.backgrounds?.marche_reconcilie || DEFAULT_ASSETS.backgrounds.marche_reconcilie || DEFAULT_ASSETS.backgrounds.village;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgRenverse && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isPardonDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img src={bgRenverse} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgRenverse} alt="Le Marchand ramasse péniblement ses grenades au sol" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        {bgReconcilie && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isPardonDone ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={bgReconcilie} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgReconcilie} alt="Le Marchand réconcilié — Offrande de la grenade de paix" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Dynamic Climax Scene for Chapitre 2 — Scène 15 (Climax du Hilm):
  if (theme === 'climax_hilm') {
    const isResolved = waswasDissolved || climaxStepIndex >= 6;
    const bgClimaxFeu = customAssets?.backgrounds?.montagne_climax || customAssets?.backgrounds?.climax || DEFAULT_ASSETS.backgrounds.montagne_climax;
    const bgClimaxApaise = customAssets?.backgrounds?.climax_apaise || DEFAULT_ASSETS.backgrounds.climax_apaise;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgClimaxFeu && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isResolved ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img src={bgClimaxFeu} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgClimaxFeu} alt="Combat intérieur — Waswas de la colère et brume ardente" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        {bgClimaxApaise && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isResolved ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={bgClimaxApaise} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgClimaxApaise} alt="Lumière retrouvée — Paix et douceur victorieuses" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Epilogue Scene for Chapitre 2 — Scène 16 (Le Cœur Paisible — Coucher de soleil sur la vallée et les minarets):
  if (theme === 'epilogue') {
    const bgEpilogue = customAssets?.backgrounds?.epilogue || DEFAULT_ASSETS.backgrounds.epilogue;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgEpilogue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={bgEpilogue}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgEpilogue}
              alt="Coucher de soleil baignant la vallée — Minarets à l'horizon"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${
            isContemplating
              ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
              : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
          }`}
        />
      </div>
    );
  }

  // Dynamic Real-Action Scene for Chapitre 3 — Scène 17 (Chambre & Fièvre):
  if (theme === 'chambre_maladie') {
    const isEcouteDone = completedRealActions.includes('action_ecouter_corps');
    const bgDefait = customAssets?.backgrounds?.chambre_defait || DEFAULT_ASSETS.backgrounds.chambre_defait;
    const bgChambre = customAssets?.backgrounds?.chambre || DEFAULT_ASSETS.backgrounds.chambre;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgDefait && (
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${isEcouteDone ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <img src={bgDefait} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgDefait} alt="Chambre d'Othmân — Fièvre et corps ralenti" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        {bgChambre && (
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${isEcouteDone ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <img src={bgChambre} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgChambre} alt="Chambre d'Othmân — Accueil doux et verre d'eau fraîche" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Dynamic Scene for Chapitre 3 — Scène 18 (Dispensaire de l'Apothicaire):
  if (theme === 'apothicaire') {
    const bgMaison = customAssets?.backgrounds?.maison_soins || DEFAULT_ASSETS.backgrounds.maison_soins;
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgMaison && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={bgMaison} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgMaison} alt="Dispensaire de l'apothicaire — Le Tawakkul des soins" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Dynamic Scene for Chapitre 3 — Scène 19 (Marches de la Mosquée & l'Enfant à l'Attelle):
  if (theme === 'mosquee_attelle') {
    const bgMosquee = customAssets?.backgrounds?.mosquee_marches || DEFAULT_ASSETS.backgrounds.mosquee_marches;
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgMosquee && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={bgMosquee} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgMosquee} alt="Marches de la mosquée — Celui qui prie avec une attelle" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Dynamic Scene for Chapitre 3 — Scène 20 (Patio de la Mosquée & Remèdes Prophétiques):
  if (theme === 'patio_remedes') {
    const bgPatio = customAssets?.backgrounds?.mosquee_patio || DEFAULT_ASSETS.backgrounds.mosquee_patio;
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgPatio && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={bgPatio} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgPatio} alt="Patio de la mosquée — Miel, Talbîna et Nigelle" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Dynamic Scene for Chapitre 3 — Scène 21 & 24 (Verger, Lanterne & Micro-progrès):
  if (theme === 'verger_lanterne') {
    const isProgresDone = completedRealActions.includes('action_micro_progres') || completedRealActions.includes('action_rompre_isolement');
    const bgVerger = customAssets?.backgrounds?.verger_fleur || DEFAULT_ASSETS.backgrounds.verger_fleur;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgVerger && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={bgVerger} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgVerger} alt="Verger au crépuscule — La petite lanterne et la fleur blanche" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        {/* Glow effect on the lantern and flower when action validated */}
        {isProgresDone && (
          <div className="absolute inset-0 bg-amber-500/10 mix-blend-screen pointer-events-none animate-pulse duration-1000" />
        )}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Dynamic Scene for Chapitre 3 — Scène 20A (La Cueillette sous les Amandiers):
  if (theme === 'verger_amandiers') {
    const bgAmandiers = customAssets?.backgrounds?.verger_amandiers || DEFAULT_ASSETS.backgrounds.verger_amandiers;
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgAmandiers && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={bgAmandiers} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgAmandiers} alt="Verger d'amandiers en fleurs — La cueillette fraternelle" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        {/* Soft spring sunlight shimmer */}
        <div className="absolute inset-0 bg-amber-200/5 mix-blend-screen pointer-events-none" />
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Dynamic Scene for Chapitre 3 — Scène 22 (Atelier sous la treille de figuiers & Outils de sculpture):
  if (theme === 'atelier_sculpture') {
    const isNommerEmotionsDone = completedRealActions.includes('action_nommer_emotions');
    const bgAtelier = customAssets?.backgrounds?.atelier_sculpture || DEFAULT_ASSETS.backgrounds.atelier_sculpture;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgAtelier && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={bgAtelier}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgAtelier}
              alt="Atelier d'Othmân sous la treille de figuiers — Sac de voyageur et outils de sculpture"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        {/* Soft emerald glow of relief and inner peace once emotions are named */}
        {isNommerEmotionsDone && (
          <div className="absolute inset-0 bg-emerald-500/10 mix-blend-screen pointer-events-none animate-pulse duration-1000" />
        )}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${
            isContemplating
              ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
              : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
          }`}
        />
      </div>
    );
  }

  // Dynamic Scene for Chapitre 3 — Scène 23 (L'Amānah du Corps & le Bouillon):
  if (theme === 'cuisine_bouillon') {
    const isBouillonDone = completedRealActions.includes('action_remercier_aidant');
    const bgCuisine = customAssets?.backgrounds?.cuisine_bouillon || DEFAULT_ASSETS.backgrounds.cuisine_bouillon;
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgCuisine && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={bgCuisine} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgCuisine} alt="Cuisine d'Othmân — La soupière de bouillon chaud et les grenades" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        {/* Warm hearth glow when gratitude action is completed */}
        {isBouillonDone && (
          <div className="absolute inset-0 bg-amber-400/10 mix-blend-screen pointer-events-none animate-pulse duration-1000" />
        )}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Dynamic Scene for Chapitre 3 — Scène 25 (Climax de la Montagne Intérieure):
  if (theme === 'climax_maladie') {
    const isResolved = waswasDissolved || climaxStepIndex >= 4;
    const bgClimaxMontagne = customAssets?.backgrounds?.montagne_climax || DEFAULT_ASSETS.backgrounds.montagne_climax;
    const bgClimaxApaise = customAssets?.backgrounds?.climax_apaise || DEFAULT_ASSETS.backgrounds.climax_apaise;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {bgClimaxMontagne && (
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${isResolved ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <img src={bgClimaxMontagne} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgClimaxMontagne} alt="Sommet de la Montagne Intérieure — Le brouillard violet du découragement" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        {bgClimaxApaise && (
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${isResolved ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <img src={bgClimaxApaise} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
            <img src={bgClimaxApaise} alt="L'Aube sur la Montagne Intérieure — La persévérance triomphante" className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${isContemplating ? 'scale-105' : 'scale-100'}`} referrerPolicy="no-referrer" />
          </div>
        )}
        <div className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${isContemplating ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20' : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'}`} />
      </div>
    );
  }

  // Dynamic Real-Action Scene for Scene 3 (Waswas):
  // Purple doubt mist vs sunny clear road based on completedRealActions ('action_istiadhah')
  // or if scene 3 beat has progressed to/past dissolution
  if (theme === 'waswas') {
    const isIstiadhahDone =
      completedRealActions.includes('action_istiadhah') ||
      (scene.id === 3 && currentBeat && ['s3_b18', 's3_b19', 's3_b20'].includes(currentBeat.id));
    const bgMist = customAssets?.backgrounds?.waswas || DEFAULT_ASSETS.backgrounds.waswas;
    const bgClair = customAssets?.backgrounds?.waswas_clair || DEFAULT_ASSETS.backgrounds.waswas_clair;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {/* Layer 1: Brume violette de Waswas (Visible avant l'action d'Istiʿādhah) */}
        {bgMist && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isIstiadhahDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img
              src={bgMist}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgMist}
              alt="Sentier envahi par la brume du Waswas"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Layer 2: Sentier ensoleillé et dégagé (Fades in dès que l'Istiʿādhah est faite) */}
        {bgClair && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isIstiadhahDone ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={bgClair}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgClair}
              alt="Sentier dégagé et lumineux après refuge en Allah"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Subtle dark gradient overlay for dialogue legibility (softer during contemplation) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${
            isContemplating
              ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
              : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
          }`}
        />
      </div>
    );
  }

  // Scene 4 (Vallée / Abords du village fleuri):
  if (theme === 'vallee') {
    const bgVallee = customAssets?.backgrounds?.vallee || DEFAULT_ASSETS.backgrounds.vallee;
    if (bgVallee) {
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
          <img src={bgVallee} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
          <img
            src={bgVallee}
            alt={scene.title || "Vue sur la vallée"}
            className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
              isContemplating ? 'scale-105' : 'scale-100'
            }`}
            referrerPolicy="no-referrer"
          />
          <div
            className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${
              isContemplating
                ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
                : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
            }`}
          />
        </div>
      );
    }
  }

  // Dynamic Real-Action Scene for Scene 5 (Village Square):
  // Guarded/wary villagers vs warm/friendly villagers based on completedRealActions ('action_salam_village')
  // or if scene 5 beat has progressed to/past friendly reception
  if (theme === 'village') {
    const isVillageFriendly =
      completedRealActions.includes('action_salam_village') ||
      (scene.id === 5 && currentBeat && ['s5_act_salam', 's5_xp_salam', 's5_b11', 's5_b12', 's5_b13', 's5_b14', 's5_b15'].includes(currentBeat.id));
    const bgMefiant = customAssets?.backgrounds?.village_mefiant || DEFAULT_ASSETS.backgrounds.village_mefiant;
    const bgAccueillant = customAssets?.backgrounds?.village || DEFAULT_ASSETS.backgrounds.village;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {/* Layer 1: Villageois méfiants et distants (Visible avant l'action du Salām/Adab) */}
        {bgMefiant && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isVillageFriendly ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img
              src={bgMefiant}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgMefiant}
              alt="Place du village — Habitants méfiants et distants"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Layer 2: Villageois souriants et accueillants (Fades in dès que le Salām/Adab est accompli) */}
        {bgAccueillant && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isVillageFriendly ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={bgAccueillant}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgAccueillant}
              alt="Place du village — Accueil chaleureux et fraternel"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Subtle dark gradient overlay for dialogue legibility (softer during contemplation) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${
            isContemplating
              ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
              : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
          }`}
        />
      </div>
    );
  }

  // Dynamic Real-Action Scene for Scene 6 (Refus / Ruelle):
  // Young boy repairing rope at workbench vs young boy departed & alley peaceful after Sabr
  if (theme === 'refus') {
    const isSabrDone =
      completedRealActions.includes('action_sabr_refus') ||
      (scene.id === 6 && currentBeat && ['s6_b8', 's6_b9', 's6_b10', 's6_b11', 's6_b12', 's6_b13', 's6_b14', 's6_b15', 's6_act_sabr', 's6_xp_sabr', 's6_b16', 's6_b17', 's6_b18', 's6_b19', 's6_b20'].includes(currentBeat.id));
    const bgJeuneCorde = customAssets?.backgrounds?.refus_jeune_corde || DEFAULT_ASSETS.backgrounds.refus_jeune_corde;
    const bgRuelleApaisee = customAssets?.backgrounds?.refus || DEFAULT_ASSETS.backgrounds.refus;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {/* Layer 1: Jeune villageois affairé à réparer sa corde à l'établi */}
        {bgJeuneCorde && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isSabrDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img
              src={bgJeuneCorde}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgJeuneCorde}
              alt="Ruelle du village — Jeune villageois réparant sa corde"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Layer 2: Établi vide, le jeune est parti, ruelle apaisée et sereine */}
        {bgRuelleApaisee && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isSabrDone ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={bgRuelleApaisee}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgRuelleApaisee}
              alt="Ruelle du village — Sérénité et patience (Sabr)"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Subtle dark gradient overlay for dialogue legibility (softer during contemplation) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${
            isContemplating
              ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
              : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
          }`}
        />
      </div>
    );
  }

  // Dynamic Real-Action Scene for Scene 7 (Le Geste / Chemin des oliviers):
  // Overturned baskets with scattered fruits vs baskets upright, full & path clean based on completedRealActions ('action_geste')
  if (theme === 'geste') {
    const isGesteDone =
      completedRealActions.includes('action_geste') ||
      (scene.id === 7 && currentBeat && ['s7_b16', 's7_b17', 's7_act_geste', 's7_xp_geste', 's7_b18', 's7_b19', 's7_b20'].includes(currentBeat.id));
    const bgRenverse = customAssets?.backgrounds?.geste_renverse || DEFAULT_ASSETS.backgrounds.geste_renverse;
    const bgRanges = customAssets?.backgrounds?.geste || DEFAULT_ASSETS.backgrounds.geste;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {/* Layer 1: Paniers renversés et fruits éparpillés (Visible avant l'action de ramassage) */}
        {bgRenverse && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isGesteDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img
              src={bgRenverse}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (DEFAULT_ASSETS.backgrounds.geste_renverse && e.currentTarget.src !== DEFAULT_ASSETS.backgrounds.geste_renverse) {
                  e.currentTarget.src = DEFAULT_ASSETS.backgrounds.geste_renverse;
                }
              }}
            />
            <img
              src={bgRenverse}
              alt="Chemin des oliviers — Paniers renversés et fruits éparpillés"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (DEFAULT_ASSETS.backgrounds.geste_renverse && e.currentTarget.src !== DEFAULT_ASSETS.backgrounds.geste_renverse) {
                  e.currentTarget.src = DEFAULT_ASSETS.backgrounds.geste_renverse;
                }
              }}
            />
          </div>
        )}

        {/* Layer 2: Paniers redressés, pleins et alignés contre le muret, chemin propre (Fades in après l'action) */}
        {bgRanges && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isGesteDone ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={bgRanges}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (DEFAULT_ASSETS.backgrounds.geste && e.currentTarget.src !== DEFAULT_ASSETS.backgrounds.geste) {
                  e.currentTarget.src = DEFAULT_ASSETS.backgrounds.geste;
                }
              }}
            />
            <img
              src={bgRanges}
              alt="Chemin des oliviers — Fruits ramassés et paniers bien rangés"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (DEFAULT_ASSETS.backgrounds.geste && e.currentTarget.src !== DEFAULT_ASSETS.backgrounds.geste) {
                  e.currentTarget.src = DEFAULT_ASSETS.backgrounds.geste;
                }
              }}
            />
          </div>
        )}

        {/* Subtle dark gradient overlay for dialogue legibility (softer during contemplation) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${
            isContemplating
              ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
              : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
          }`}
        />
      </div>
    );
  }

  // Dynamic Real-Action Scene for Scene 8 (Le Jardin Abandonné / Le Ruisseau de Shukr):
  // Stream clogged with dry leaves & old watering pot vs clear sparkling water & fragrant herbs
  // based on completedRealActions ('action_shukr')
  if (theme === 'jardin') {
    const isJardinRevived =
      completedRealActions.includes('action_shukr') ||
      (scene.id === 8 && currentBeat && ['s8_act_shukr', 's8_xp_shukr', 's8_b15', 's8_b16', 's8_b17', 's8_b18'].includes(currentBeat.id));
    const bgEncombre = customAssets?.backgrounds?.jardin_encombre || DEFAULT_ASSETS.backgrounds.jardin_encombre;
    const bgRevived = customAssets?.backgrounds?.jardin || DEFAULT_ASSETS.backgrounds.jardin;

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {/* Layer 1: Jardin encombré, ruisseau obstrué de feuilles mortes (Visible avant l'action de Shukr) */}
        {bgEncombre && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isJardinRevived ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img
              src={bgEncombre}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (DEFAULT_ASSETS.backgrounds.jardin_encombre && e.currentTarget.src !== DEFAULT_ASSETS.backgrounds.jardin_encombre) {
                  e.currentTarget.src = DEFAULT_ASSETS.backgrounds.jardin_encombre;
                }
              }}
            />
            <img
              src={bgEncombre}
              alt="Jardin abandonné — Ruisseau obstrué de branchages et feuilles mortes"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (DEFAULT_ASSETS.backgrounds.jardin_encombre && e.currentTarget.src !== DEFAULT_ASSETS.backgrounds.jardin_encombre) {
                  e.currentTarget.src = DEFAULT_ASSETS.backgrounds.jardin_encombre;
                }
              }}
            />
          </div>
        )}

        {/* Layer 2: Ruisseau dégagé, eau claire et vive, herbes et figues éclatantes (Fades in après l'action) */}
        {bgRevived && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isJardinRevived ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={bgRevived}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (DEFAULT_ASSETS.backgrounds.jardin && e.currentTarget.src !== DEFAULT_ASSETS.backgrounds.jardin) {
                  e.currentTarget.src = DEFAULT_ASSETS.backgrounds.jardin;
                }
              }}
            />
            <img
              src={bgRevived}
              alt="Jardin revivifié — Eau limpide et bienfaits du Créateur (Shukr)"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (DEFAULT_ASSETS.backgrounds.jardin && e.currentTarget.src !== DEFAULT_ASSETS.backgrounds.jardin) {
                  e.currentTarget.src = DEFAULT_ASSETS.backgrounds.jardin;
                }
              }}
            />
          </div>
        )}

        {/* Subtle dark gradient overlay for dialogue legibility (softer during contemplation) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${
            isContemplating
              ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
              : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
          }`}
        />
      </div>
    );
  }

  // Dynamic Real-Action Scene for Scene 9 (Le Grand Waswas / Climax):
  // 3 Phases:
  // 1. Vortex storm during confrontation with progressive dawn piercing per resilience step (0 to 6)
  // 2. Clear sunny peaceful pavilion ruins once defeated
  // 3. Wide valley sunrise vista with Othmân & Noura on chapter end
  if (theme === 'climax') {
    const isChapterEnd =
      currentBeat?.type === 'chapter_end' ||
      (scene.id === 9 && currentBeat && ['s9_b35', 's9_b36', 's9_b37', 's9_b38'].includes(currentBeat.id));

    const isWaswasDefeated =
      waswasDissolved ||
      climaxStepIndex >= 6 ||
      (scene.id === 9 &&
        currentBeat &&
        [
          's9_b21',
          's9_b22',
          's9_b23',
          's9_b24',
          's9_b25',
          's9_b26',
          's9_b27',
          's9_b28',
          's9_b29',
          's9_b30',
          's9_b31',
          's9_b32',
          's9_b33',
          's9_b34'
        ].includes(currentBeat.id));

    const bgFin = customAssets?.backgrounds?.fin || DEFAULT_ASSETS.backgrounds.fin;
    const bgPavillonApaise = customAssets?.backgrounds?.climax_apaise || DEFAULT_ASSETS.backgrounds.climax_apaise;
    const bgVortex = customAssets?.backgrounds?.climax || DEFAULT_ASSETS.backgrounds.climax;

    // Phase 3: Final Chapter Panorama (Othmân & Noura on the cliff overlook)
    if (isChapterEnd && bgFin) {
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center animate-in fade-in duration-1000 bg-[#181422]">
          <img src={bgFin} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
          <img
            src={bgFin}
            alt="L'aube dorée sur la vallée — Chapitre 1 achevé"
            className={`relative w-full h-full object-contain object-bottom transition-transform duration-[4000ms] ease-out ${
              isContemplating ? 'scale-105' : 'scale-100'
            }`}
            referrerPolicy="no-referrer"
          />
          <div
            className={`absolute inset-0 transition-all duration-1000 pointer-events-none ${
              isContemplating
                ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
                : 'bg-gradient-to-t from-black/70 via-black/20 to-black/40'
            }`}
          />
        </div>
      );
    }

    // Phases 1 & 2: Progressive dawn during resilience steps, full golden morning once defeated
    const dawnOpacity = isWaswasDefeated ? 1 : Math.min(0.85, (climaxStepIndex / 6));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {/* Layer 1: Le Vortex Sombre du Grand Waswas */}
        {bgVortex && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isWaswasDefeated ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img
              src={bgVortex}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgVortex}
              alt="Le Grand Waswas — Vortex d'angoisse au-dessus du pavillon"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Layer 2: Le Pavillon Apaisé sous le Soleil Levant (S'illumine progressivement à chaque étape de résilience) */}
        {bgPavillonApaise && (
          <div
            style={{ opacity: dawnOpacity }}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              dawnOpacity > 0 ? '' : 'pointer-events-none'
            }`}
          >
            <img
              src={bgPavillonApaise}
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110"
              alt=""
              referrerPolicy="no-referrer"
            />
            <img
              src={bgPavillonApaise}
              alt="Pavillon antique apaisé — Le Waswas est vaincu par la foi et l'action"
              className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
                isContemplating ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Subtle dark gradient overlay for dialogue legibility */}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none z-10 ${
            isContemplating
              ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
              : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
          }`}
        />
      </div>
    );
  }

  // Check if custom or default background asset exists
  const customBg =
    customAssets?.backgrounds?.[theme as keyof typeof customAssets.backgrounds] ||
    (DEFAULT_ASSETS.backgrounds as Record<string, string | undefined>)[theme];

  if (customBg) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center bg-[#181422]">
        {/* Blurred backdrop to fill screen without ugly black bars */}
        <img src={customBg} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl transform scale-110" alt="" referrerPolicy="no-referrer" />
        <img
          src={customBg}
          alt={scene.title}
          className={`relative w-full h-full object-contain object-center transition-transform duration-[4000ms] ease-out ${
            isContemplating ? 'scale-105' : 'scale-100'
          }`}
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark gradient overlay for dialogue legibility (softer during contemplation) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 pointer-events-none ${
            isContemplating
              ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20'
              : 'bg-gradient-to-t from-black/20 via-transparent to-black/10'
          }`}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Dynamic atmospheric layer based on scene */}

      {theme === 'chambre' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#1e1b2e] via-[#2a1d29] to-[#1a141a]">
          {/* Morning Window Light */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-48 bg-amber-100/10 rounded-t-full blur-xl transform rotate-12" />
          <div className="absolute top-12 left-12 w-28 h-40 border-4 border-amber-900/60 rounded-t-full bg-gradient-to-b from-sky-400/20 to-amber-200/30 overflow-hidden shadow-[0_0_50px_rgba(251,191,36,0.15)]">
            <div className="w-full h-full relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-amber-900/60" />
              <div className="absolute top-0 left-1/2 w-1 h-full bg-amber-900/60" />
              {/* Early morning horizon in window */}
              <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-emerald-950 to-amber-700/30" />
            </div>
          </div>
          {/* Bed & Room Furniture Silhouette */}
          <div className="absolute bottom-28 left-6 md:left-20 w-44 md:w-56 h-28 bg-[#3d271d] rounded-t-2xl border-t-2 border-amber-600/30 shadow-2xl">
            <div className="absolute top-2 left-3 w-16 h-10 bg-amber-100/40 rounded-lg border border-amber-200/50" />
            <div className="absolute top-8 left-2 right-2 bottom-0 bg-[#5c3a28] rounded-t-lg" />
          </div>
          {/* Rug */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-72 md:w-96 h-12 bg-amber-900/30 rounded-full border border-amber-600/20 blur-2xs" />
          {/* Ambient Dust Motes */}
          <div className="absolute top-20 left-1/3 w-2 h-2 rounded-full bg-amber-200/30 animate-pulse" />
          <div className="absolute top-36 left-1/2 w-1.5 h-1.5 rounded-full bg-amber-200/40 animate-ping" />
        </div>
      )}

      {theme === 'carrefour' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#172238] via-[#2a3b4c] to-[#1a231b]">
          {/* Distant Hills */}
          <div className="absolute top-20 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#1a2d36] rounded-[100%] scale-150 transform -translate-y-6" />
          <div className="absolute top-32 left-0 right-0 h-52 bg-gradient-to-b from-transparent to-[#14241e] rounded-[100%] scale-125" />
          {/* Path Crossroads */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-[#362719] via-[#4d3925] to-transparent clip-path-path" />
          {/* Signpost */}
          <div className="absolute bottom-28 left-12 md:left-28 flex flex-col items-center">
            {/* Wooden post */}
            <div className="w-4 h-48 bg-[#422c1b] border-r border-amber-900/80 rounded-t-sm shadow-xl relative">
              {/* Top sign left */}
              <div className="absolute top-6 -left-16 w-20 h-6 bg-[#63432a] border border-amber-500/40 rounded-l-md transform -rotate-3 flex items-center justify-center shadow-md">
                <span className="text-[9px] font-bold text-amber-200 tracking-wider">VALLÉE</span>
              </div>
              {/* Second sign right */}
              <div className="absolute top-16 -right-20 w-24 h-6 bg-[#573922] border border-amber-500/40 rounded-r-md transform rotate-6 flex items-center justify-center shadow-md">
                <span className="text-[9px] font-bold text-amber-200 tracking-wider">VILLAGE</span>
              </div>
              {/* Third sign */}
              <div className="absolute top-28 -left-20 w-22 h-6 bg-[#4c311c] border border-amber-500/40 rounded-l-md transform -rotate-6 flex items-center justify-center shadow-md">
                <span className="text-[9px] font-bold text-amber-200 tracking-wider">SENTIER</span>
              </div>
            </div>
            {/* Post base stones */}
            <div className="w-12 h-5 bg-stone-700 rounded-full -mt-2 border border-stone-600" />
          </div>
          {/* Morning Sky Clouds */}
          <div className="absolute top-6 right-12 w-48 h-14 bg-amber-200/10 rounded-full blur-xl" />
        </div>
      )}

      {theme === 'waswas' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#130d1e] via-[#1a1228] to-[#0c0814] overflow-hidden">
          {/* Heavy Dark Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-purple-950/40 to-black/90 pointer-events-none" />
          
          {/* Ethereal Smoky Vortex Layers (Symbolic - No Creature) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-purple-800/30 bg-radial from-purple-950/50 via-purple-900/20 to-transparent filter blur-xl animate-shadow-vortex" />
          <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-purple-950/40 filter blur-2xl animate-pulse" />
          <div className="absolute bottom-16 right-1/4 w-72 h-72 rounded-full bg-purple-950/30 filter blur-3xl" />
          
          {/* Whispering Shadow Tendrils */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-950/30 to-black/80" />
          
          {/* Distant glimmer of hope/guidance struggling through the fog */}
          <div className="absolute top-12 right-16 w-16 h-16 bg-amber-400/15 rounded-full blur-xl animate-pulse" />
        </div>
      )}

      {theme === 'vallee' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#1e3345] via-[#2f4b48] to-[#1e311f]">
          {/* Valley hills */}
          <div className="absolute top-24 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#284234] rounded-t-[50%] scale-150" />
          <div className="absolute top-36 -left-20 w-full h-64 bg-gradient-to-b from-[#21382b] to-[#17271e] rounded-t-[40%]" />
          <div className="absolute top-40 -right-20 w-full h-64 bg-gradient-to-b from-[#2a4737] to-[#15241b] rounded-t-[40%]" />
          {/* Village rooftops in distance */}
          <div className="absolute top-44 left-1/2 -translate-x-1/2 flex gap-4 items-end opacity-70">
            <div className="w-8 h-8 bg-amber-800/80 clip-path-triangle" />
            <div className="w-10 h-10 bg-amber-700/80 clip-path-triangle" />
            <div className="w-6 h-6 bg-amber-900/80 clip-path-triangle" />
          </div>
          {/* Green rolling road */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#362719] via-[#33462b] to-transparent" />
        </div>
      )}

      {theme === 'village' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#2a384c] via-[#483d37] to-[#2b221a]">
          {/* Village buildings backdrop */}
          <div className="absolute bottom-28 left-4 md:left-12 w-36 md:w-48 h-52 bg-[#544337] rounded-t-md border-t-2 border-amber-600/30">
            <div className="w-full h-8 bg-[#7a3b2e] -mt-2 rounded-t-sm" />
            <div className="w-8 h-10 bg-amber-200/20 mx-auto mt-6 rounded-t-full border border-amber-400/30" />
          </div>
          <div className="absolute bottom-28 right-4 md:right-12 w-40 md:w-56 h-60 bg-[#44362d] rounded-t-md border-t-2 border-amber-600/30">
            <div className="w-full h-10 bg-[#6d3327] -mt-3 rounded-t-sm" />
            <div className="w-10 h-12 bg-amber-200/20 mx-auto mt-6 rounded-t-full border border-amber-400/30" />
          </div>
          {/* Central Stone Well */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
            {/* Well Roof */}
            <div className="w-24 h-10 bg-[#7a3e28] rounded-t-full border-t-2 border-amber-500/40 shadow-lg relative">
              <div className="absolute -bottom-6 left-2 w-1.5 h-8 bg-[#422c1b]" />
              <div className="absolute -bottom-6 right-2 w-1.5 h-8 bg-[#422c1b]" />
            </div>
            {/* Stone well base */}
            <div className="w-28 h-14 bg-stone-700 rounded-lg border-2 border-stone-600 shadow-xl flex items-center justify-center mt-6">
              <div className="w-20 h-4 bg-stone-900 rounded-full border border-stone-800" />
            </div>
          </div>
        </div>
      )}

      {theme === 'refus' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#242b3b] via-[#363231] to-[#1c1815]">
          {/* Shaded alley stone walls */}
          <div className="absolute top-0 bottom-0 left-0 w-28 md:w-44 bg-[#38302b] border-r-2 border-amber-900/40 shadow-2xl">
            {/* Vine leaves */}
            <div className="absolute top-12 right-2 w-16 h-32 flex flex-col gap-2 opacity-60">
              <div className="w-4 h-3 bg-emerald-700 rounded-full transform rotate-45" />
              <div className="w-5 h-3 bg-emerald-800 rounded-full transform -rotate-12" />
              <div className="w-4 h-3 bg-emerald-600 rounded-full" />
            </div>
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-28 md:w-44 bg-[#2f2723] border-l-2 border-amber-900/40 shadow-2xl" />
          {/* Warm alleyway center with stone textures */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-60 bg-gradient-to-t from-[#423428] to-transparent" />
        </div>
      )}

      {theme === 'geste' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#26374a] via-[#3d4239] to-[#252319]">
          {/* Olive trees at edges */}
          <div className="absolute top-16 left-6 w-32 h-44 flex flex-col items-center">
            <div className="w-28 h-28 bg-emerald-900/70 rounded-full border border-emerald-700/30 blur-2xs" />
            <div className="w-4 h-24 bg-[#3d2719] -mt-6 rounded-b-md" />
          </div>
          <div className="absolute top-12 right-6 w-36 h-48 flex flex-col items-center">
            <div className="w-32 h-32 bg-emerald-800/60 rounded-full border border-emerald-700/30 blur-2xs" />
            <div className="w-5 h-24 bg-[#3d2719] -mt-6 rounded-b-md" />
          </div>
          {/* Scattered baskets on road */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-6 items-center opacity-80">
            <div className="w-8 h-6 bg-[#684729] rounded-sm transform rotate-12 border border-amber-700" />
            <div className="w-7 h-5 bg-[#593c22] rounded-sm transform -rotate-6 border border-amber-700" />
          </div>
        </div>
      )}

      {theme === 'jardin' && (
        <div className="w-full h-full relative bg-gradient-to-b from-[#1b2b2b] via-[#243d32] to-[#18261e]">
          {/* Stone walls of old garden */}
          <div className="absolute bottom-28 left-0 right-0 h-16 bg-[#3a4439] border-t-2 border-emerald-800/40 rounded-t-lg" />
          {/* Fruit Tree thriving */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="relative w-48 md:w-60 h-44 bg-gradient-to-b from-emerald-700/70 to-emerald-950/80 rounded-full border border-emerald-500/40 shadow-2xl flex items-center justify-center">
              {/* Hidden fruits */}
              <div className="absolute top-10 left-12 w-3 h-3 bg-purple-400 rounded-full shadow-sm" />
              <div className="absolute top-16 right-14 w-3 h-3 bg-purple-400 rounded-full shadow-sm" />
              <div className="absolute bottom-12 left-20 w-3.5 h-3.5 bg-amber-400 rounded-full shadow-sm" />
            </div>
            {/* Trunk */}
            <div className="w-8 h-20 bg-[#422c1b] -mt-6 rounded-b-md border-r border-amber-950" />
          </div>
          {/* Clean stream running at bottom */}
          <div className="absolute bottom-12 left-0 right-0 h-8 bg-gradient-to-r from-teal-900/40 via-cyan-600/30 to-teal-900/40 blur-2xs" />
        </div>
      )}

      {theme === 'climax' && (
        <div className="w-full h-full relative transition-all duration-1000 bg-gradient-to-b from-[#110b1a] via-[#1a1129] to-[#0c0813] overflow-hidden">
          {/* Sky dynamically brightens with each resilience step (0 to 6) */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-amber-500/30 via-sky-400/20 to-transparent transition-opacity duration-1000 pointer-events-none z-10"
            style={{ opacity: Math.min(1, climaxStepIndex * 0.2) }}
          />

          {/* Mountains silhouette */}
          <div className="absolute top-28 left-0 right-0 h-56 bg-gradient-to-b from-transparent to-[#181124] rounded-t-[100%] scale-150" />

          {/* Symbolic swirling mist & waswas shadow vortex that dissolves with dhikr */}
          {!waswasDissolved && (
            <div
              className="absolute inset-0 flex items-center justify-center transition-all duration-700 pointer-events-none"
              style={{
                opacity: Math.max(0.05, 1 - climaxStepIndex * 0.16)
              }}
            >
              {/* Central dissipating shadow vortex */}
              <div
                className="w-96 h-96 rounded-full border-2 border-purple-800/20 bg-radial from-purple-950/70 via-purple-900/30 to-transparent filter blur-2xl animate-shadow-vortex"
                style={{
                  transform: `scale(${Math.max(0.3, 1 - climaxStepIndex * 0.12)})`
                }}
              />
              <div className="absolute inset-0 bg-radial from-transparent via-purple-950/40 to-black/80" />
            </div>
          )}

          {/* Golden Sunrise rising when climax is won */}
          {(climaxStepIndex >= 6 || waswasDissolved) && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-300/40 rounded-full blur-3xl animate-pulse z-20" />
          )}
        </div>
      )}
    </div>
  );
};
