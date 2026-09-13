import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Compass, RotateCcw, HeartHandshake, Award, CheckCircle2, ArrowRight, Film, Volume2, VolumeX, FastForward, Save, Play, BookmarkCheck, Crown, Heart } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { CustomAssetsConfig, DEFAULT_ASSETS } from '../utils/assets';
import { trackChapterCompleted } from '../utils/analytics';
import { useLanguage } from '../context/LanguageContext';
import { gameTranslations } from '../i18n/gameTranslations';

import { CharacterTraits } from '../types';
import { getPersonalityProfile, TRAIT_CONFIG, INITIAL_CHARACTER_TRAITS } from '../utils/characterTraits';

interface ChapterEndProps {
  xpTotal: number;
  chapterNumber?: number;
  traits?: CharacterTraits;
  onReplay: () => void;
  onOpenKnowledge: () => void;
  onContinueAdventure?: () => void;
  onSaveAndExit?: () => void;
  onOpenFeedback?: () => void;
  onOpenSupport?: () => void;
  customAssets?: CustomAssetsConfig;
}

export const ChapterEnd: React.FC<ChapterEndProps> = ({
  xpTotal,
  chapterNumber = 1,
  traits,
  onReplay,
  onOpenKnowledge,
  onContinueAdventure,
  onSaveAndExit,
  onOpenFeedback,
  onOpenSupport,
  customAssets
}) => {
  const { language, isRtl } = useLanguage();
  const t = gameTranslations[language]?.chapterEnd || gameTranslations.fr.chapterEnd;

  const [showEndingCinematic, setShowEndingCinematic] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);

  const personality = getPersonalityProfile(traits || INITIAL_CHARACTER_TRAITS);

  useEffect(() => {
    soundManager.playChapterComplete();
    trackChapterCompleted(chapterNumber, xpTotal, chapterNumber);
  }, [xpTotal, chapterNumber]);

  const handleSkipOrCloseCinematic = () => {
    try {
      sessionStorage.setItem(`nour_seen_ending_cinematic_ch${chapterNumber}`, 'true');
    } catch {
      // ignore
    }
    setShowEndingCinematic(false);
  };

  // Grand Epilogue Pure Fullscreen Cinematic View (Style Professeur Layton / Ghibli)
  if (showEndingCinematic) {
    return (
      <div
        onClick={() => {
          soundManager.playSelect();
          handleSkipOrCloseCinematic();
        }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-black text-[#fbf7ee] select-none overflow-hidden cursor-pointer animate-in fade-in duration-700"
      >
        {/* 100% Fullscreen Video Edge to Edge - Pure Animation */}
        <video
          src="/cinematic_ending.mp4"
          autoPlay
          playsInline
          muted={isMuted}
          onEnded={handleSkipOrCloseCinematic}
          className="absolute inset-0 w-full h-full object-cover sm:object-contain bg-black"
        />

        {/* Minimal Transparent Floating Bar in Header */}
        <div className="relative z-20 flex items-center justify-between p-3 sm:p-6 pointer-events-none">
          {/* Subtle Transparent Title */}
          <div className="text-[#ffd699]/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-widest font-cinzel text-xs sm:text-sm uppercase font-bold px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-amber-500/20 shadow-md">
            {chapterNumber === 3
              ? 'La Montagne Intérieure'
              : chapterNumber === 2
              ? 'La Paix Retrouvée'
              : "L'Aube sur la Vallée"}
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
              title={isMuted ? 'Activer le son' : 'Couper le son'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-300" />}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                soundManager.playSelect();
                handleSkipOrCloseCinematic();
              }}
              className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold font-cinzel text-white/85 hover:text-white bg-black/40 hover:bg-black/70 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer shadow-md"
            >
              <span>Passer</span>
              <FastForward className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Discreet bottom hint */}
        <div className="relative z-20 pb-5 sm:pb-8 text-center pointer-events-none">
          <span className="text-[10px] sm:text-xs text-white/60 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] font-cinzel tracking-widest uppercase bg-black/30 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
            Touchez l'écran pour découvrir le bilan
          </span>
        </div>
      </div>
    );
  }

  const endIllustration = customAssets?.backgrounds?.fin || DEFAULT_ASSETS.backgrounds.fin;

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/65 backdrop-blur-xs select-none animate-in fade-in duration-200"
    >
      <div className="w-full max-w-lg bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl shadow-[0_8px_0_#3a2312] flex flex-col max-h-[92vh] sm:max-h-[88vh] relative overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Decorative Corner Diamonds */}
        <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45 pointer-events-none z-20" />
        <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45 pointer-events-none z-20" />
        <div className="absolute bottom-3 left-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45 pointer-events-none z-20" />
        <div className="absolute bottom-3 right-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45 pointer-events-none z-20" />

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
          {/* Ending Animated Artwork Banner */}
          <div className="relative w-full h-36 sm:h-44 shrink-0 overflow-hidden border-b-2 border-[#3a2312] shadow-sm bg-[#3a2312]">
            <img
              src={endIllustration}
              alt="Fin de Chapitre"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <video
              src="/cinematic_ending.mp4"
              poster={endIllustration}
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 w-full h-full object-cover"
              onError={(e) => {
                // Hide video on error so fallback image stays visible
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#fbf7ee] via-transparent to-black/35 pointer-events-none" />
            <div className="absolute bottom-2 left-3 right-3 z-30 flex items-center justify-between text-left pointer-events-auto">
              <div className="bg-[#f3ebd9]/95 backdrop-blur-md px-2.5 py-1 rounded-xl border border-[#3a2312] shadow-xs">
                <span className="text-[10px] sm:text-xs font-bold text-[#3a2312] font-cinzel">
                  {chapterNumber === 3
                    ? '« Lā yukallifullāhu nafsan illā wusʿahā. »'
                    : chapterNumber === 2
                    ? '« Le vrai fort est celui qui maîtrise sa colère. »'
                    : '« Le chemin ne fait que commencer. »'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowEndingCinematic(true)}
                className="bg-[#d97c27] hover:bg-[#e69138] text-[#1a1209] px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-black font-cinzel uppercase border border-[#3a2312] shadow-xs flex items-center gap-1 cursor-pointer transition-all active:translate-y-0.5"
              >
                <Film className="w-3 h-3" />
                <span>Revoir</span>
              </button>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 flex flex-col gap-3 text-center">
            {/* Badge & Title */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1.5 bg-[#ebdfc8] px-3.5 py-1 rounded-full border-2 border-[#3a2312] shadow-xs">
                <Sun className="w-4 h-4 text-[#d97c27] animate-spin-slow" />
                <span className="text-xs font-black text-[#8c5a2b] uppercase tracking-widest font-cinzel">
                  {chapterNumber === 3
                    ? 'Persévérance & Guérison !'
                    : chapterNumber === 2
                    ? 'Maîtrise & Noblessse !'
                    : 'Victoire Accomplie !'}
                </span>
              </div>
              <h1 className="text-lg sm:text-2xl font-black text-[#3a2312] font-cinzel tracking-wide">
                {chapterNumber === 3
                  ? 'CHAPITRE 3 TERMINÉ ! 🏔️'
                  : chapterNumber === 2
                  ? 'CHAPITRE 2 TERMINÉ ! 🌿'
                  : 'CHAPITRE 1 TERMINÉ ! 🎉'}
              </h1>
              <p className="text-xs sm:text-sm text-[#5c4028] font-bold">
                {chapterNumber === 3
                  ? '« Othmân a conquis sa montagne intérieure avec patience, soins et dignité »'
                  : chapterNumber === 2
                  ? '« Othmân a dominé le feu intérieur par la douceur et le pardon »'
                  : '« Othmân a franchi le premier pas avec sagesse et courage »'}
              </p>
            </div>

            {/* XP and Unlocked Notion Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-2xl bg-[#f3ebd9] border-2 border-[#3a2312] flex flex-col items-center justify-center gap-1 shadow-inner">
                <div className="flex items-center gap-1.5 text-[#d97c27]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold font-cinzel">XP Total</span>
                </div>
                <span className="text-xl sm:text-2xl font-black text-[#d97c27] font-cinzel leading-none">
                  {xpTotal} XP
                </span>
                <span className="text-[11px] text-[#8c6b4e] font-bold">Score du voyageur</span>
              </div>

              <div className="p-3 rounded-2xl bg-[#ebf5e9] border-2 border-[#2d6a4f] flex flex-col items-center justify-center gap-1 shadow-inner">
                <div className="flex items-center gap-1.5 text-[#2d6a4f]">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-bold font-cinzel">Sagesse</span>
                </div>
                <span className="text-sm sm:text-base font-black text-[#2d6a4f] font-cinzel leading-tight text-center">
                  {chapterNumber === 3
                    ? 'Sabr & Chifāʾ'
                    : chapterNumber === 2
                    ? 'Al-Ḥilm (La Douceur)'
                    : 'ʿIlm (Le Savoir)'}
                </span>
                <span className="text-[11px] text-[#2d522f] font-bold">Validé & appris</span>
              </div>
            </div>

            {/* Character Traits Evolution: « L'Âme d'Othmân a Évolué » */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#fbf7ee] via-[#f7f0e0] to-[#eedfc4] border-2 border-[#8c5a2b] flex flex-col gap-2.5 text-left shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-[#8c5a2b] font-cinzel tracking-wider flex items-center gap-1.5">
                  <span>🌱</span>
                  <span>L'Âme d'Othmân • Bilan de tes choix</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#8c5a2b]/15 text-[#8c5a2b] text-[10px] font-bold font-cinzel">
                  {personality.dominantTraitName} dominant
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#ebdfc8] border-2 border-[#8c5a2b] flex items-center justify-center text-2xl shadow-xs shrink-0">
                  {TRAIT_CONFIG[personality.dominantTrait]?.icon || '🌱'}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-[#3a2312] font-cinzel leading-tight">
                    {personality.title}
                  </h3>
                  <p className="text-[11px] text-[#8c5a2b] font-bold italic">
                    « {personality.subtitle} »
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#5c3e1e] leading-relaxed">
                {personality.description}
              </p>

              {/* Forces du tempérament & vertus */}
              <div className="grid grid-cols-3 gap-1.5 pt-1.5 border-t border-[#8c5a2b]/20">
                {(['discipline', 'sabr', 'hilm', 'adab', 'vitalite', 'ilm'] as const).map((traitKey) => {
                  const cfg = TRAIT_CONFIG[traitKey];
                  const isPrimary = traitKey === personality.dominantTrait || traitKey === personality.secondaryTrait;
                  return (
                    <div
                      key={traitKey}
                      className={`flex items-center justify-center gap-1 px-2 py-1 rounded-xl border shadow-xs ${
                        isPrimary
                          ? 'bg-[#ebdfc8] border-[#8c5a2b] font-bold text-[#3a2312]'
                          : 'bg-white/60 border-[#8c5a2b]/20 text-[#6b4724]'
                      }`}
                    >
                      <span className="text-xs">{cfg.icon}</span>
                      <span className="text-[10px] font-cinzel">
                        {cfg.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Final Real Life Mission - Big, Engaging and Punchy */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#ebf5e9] border-2 border-[#2d6a4f] flex items-start gap-3 text-left shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#d8f3dc] border-2 border-[#2d6a4f] flex items-center justify-center text-[#2d6a4f] shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-black text-[#1b4332] font-cinzel">
                    Ta Mission dans la vraie vie :
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#2d6a4f]" />
                </div>
                <p className="text-xs sm:text-sm text-[#2d522f] font-bold leading-relaxed">
                  {chapterNumber === 3
                    ? 'Aujourd\'hui, prends des nouvelles d\'une personne malade ou isolée dans ton entourage, envoie-lui une duʿāʾ de guérison et prends soin de ton corps avec gratitude ! 🤲'
                    : chapterNumber === 2
                    ? 'Aujourd\'hui, si une situation t\'énerve ou que quelqu\'un te bouscule, retiens-toi, respire profondément 3 secondes, et réponds avec calme ou un sourire ! 🤝'
                    : 'Va voir quelqu\'un aujourd\'hui, offre-lui un beau sourire et dis-lui : « As-salāmu ʿalaykum » ! 😊'}
                </p>
              </div>
            </div>

            {/* Bannière Déblocage du Chapitre Suivant & Statut Sauvegarde */}
            <div className="p-3.5 sm:p-4.5 rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-[#dcfce7] border-2 border-[#16a34a] flex flex-col gap-2.5 text-left shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-0.5 rounded-full bg-[#16a34a] text-white text-[10px] sm:text-[11px] font-black uppercase font-cinzel tracking-wider shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-emerald-200" />
                  <span>{chapterNumber === 3 ? 'Aventure Complète !' : 'Nouveau Chapitre Débloqué !'}</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#15803d] flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-full border border-emerald-300 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Progression sauvegardée</span>
                </span>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-black text-[#14532d] font-cinzel">
                  {chapterNumber === 3
                    ? '🎉 Tu as terminé la trilogie principale de Nour !'
                    : chapterNumber === 2
                    ? '🏔️ Tu as débloqué le Chapitre 3 : La Montagne Intérieure !'
                    : '🌿 Tu as débloqué le Chapitre 2 : Le Chemin du Hilm !'}
                </h3>
                <p className="text-xs text-[#166534] font-medium mt-1 leading-relaxed">
                  {chapterNumber === 3
                    ? `Toutes tes sagesses et tes ${xpTotal} XP sont gravés. Tu peux rejouer chaque chapitre ou explorer la carte !`
                    : chapterNumber === 2
                    ? `Tes ${xpTotal} XP sont enregistrés. Othmân s'apprête à affronter l'épreuve du corps, la patience et les remèdes prophétiques.`
                    : `Tes ${xpTotal} XP et ta maîtrise de l'Istiʿādhah sont enregistrés ! Othmân va apprendre à maîtriser sa colère avec douceur.`}
                </p>
              </div>

              <div className="pt-2 border-t border-emerald-200/90 flex items-center justify-between text-[11px] font-bold text-[#15803d]">
                <span>👉 Souhaites-tu continuer maintenant ou sauvegarder pour plus tard ?</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pinned Footer with Action Buttons (Always visible on mobile!) */}
        <div className="p-3.5 sm:p-4 bg-[#f3ebd9] border-t-2 border-[#3a2312] shrink-0 flex flex-col gap-2.5 z-10">
          {/* Toast de confirmation de sauvegarde */}
          {saveFeedback && (
            <div className="w-full py-2.5 px-3 rounded-xl bg-[#16a34a] text-white text-xs font-bold font-cinzel flex items-center justify-center gap-2 animate-in fade-in slide-in-from-top-2 shadow-md">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>{saveFeedback}</span>
            </div>
          )}

          {/* Boutons Principaux : CONTINUER ou SAUVEGARDER */}
          <div className="flex flex-col sm:flex-row gap-2">
            {onContinueAdventure && (
              <button
                onClick={() => {
                  soundManager.playSelect();
                  onContinueAdventure();
                }}
                className="flex-1 py-3 sm:py-3.5 px-4 rounded-2xl bg-[#2d6a4f] hover:bg-[#1b4332] text-[#fbf7ee] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_0_#1b4332] border-2 border-[#1b4332] active:translate-y-0.5 transition-all cursor-pointer font-cinzel tracking-wide uppercase"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>
                  {chapterNumber === 3
                    ? "Continuer l'Aventure"
                    : chapterNumber === 2
                    ? 'Continuer vers le Chapitre 3'
                    : 'Continuer vers le Chapitre 2'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => {
                soundManager.playXpHarvest();
                setSaveFeedback('Progression & XP sauvegardés ! Redirection vers la Carte...');
                setTimeout(() => {
                  if (onSaveAndExit) {
                    onSaveAndExit();
                  } else if (onContinueAdventure) {
                    onContinueAdventure();
                  }
                }, 800);
              }}
              className="flex-1 py-3 sm:py-3.5 px-4 rounded-2xl bg-[#ebdfc8] hover:bg-[#deb887] text-[#3a2312] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_3px_0_#3a2312] border-2 border-[#3a2312] active:translate-y-0.5 transition-all cursor-pointer font-cinzel tracking-wide uppercase"
            >
              <Save className="w-4 h-4 text-[#8c5a2b]" />
              <span>Sauvegarder & Pause</span>
            </button>
          </div>

          {/* Bouton Mécénat / Soutenir Nour */}
          {onOpenSupport && (
            <button
              onClick={() => {
                soundManager.playSelect();
                onOpenSupport();
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#fef3c7] via-[#fde68a] to-[#fef3c7] hover:brightness-105 text-[#1a1209] font-black text-xs flex items-center justify-center gap-2 shadow-[0_2px_0_#3a2312] border-2 border-[#3a2312] active:translate-y-0.5 transition-all cursor-pointer font-cinzel tracking-wide"
            >
              <Crown className="w-3.5 h-3.5 text-[#d97c27] fill-[#d97c27]" />
              <span>Soutenir le Projet & Devenir Mécène 🌟</span>
            </button>
          )}

          {/* Bouton Avis Testeur */}
          {onOpenFeedback && (
            <button
              onClick={() => {
                soundManager.playSelect();
                onOpenFeedback();
              }}
              className="w-full py-2 px-3 rounded-xl bg-[#ebdfc8] hover:bg-[#d9c7ab] text-[#3a2312] font-bold text-xs flex items-center justify-center gap-2 shadow-[0_2px_0_#3a2312] border-2 border-[#3a2312] active:translate-y-0.5 transition-all cursor-pointer font-cinzel tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 fill-amber-300 text-amber-600" />
              <span>Donner mon avis testeur (Questionnaire)</span>
            </button>
          )}

          {/* Boutons Secondaires : Bibliothèque & Rejouer */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                soundManager.playSelect();
                onOpenKnowledge();
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-[#ebdfc8] hover:bg-[#ebdcc4] text-[#3a2312] font-bold text-xs flex items-center justify-center gap-1.5 border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer font-cinzel"
            >
              <Compass className="w-3.5 h-3.5 text-[#2d6a4f]" />
              <span>Bibliothèque</span>
            </button>

            <button
              onClick={() => {
                soundManager.playSelect();
                onReplay();
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-[#ebdfc8] hover:bg-[#ebdcc4] text-[#8c5a2b] font-bold text-xs flex items-center justify-center gap-1.5 border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer font-cinzel"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#8c5a2b]" />
              <span>Rejouer ce chapitre</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
