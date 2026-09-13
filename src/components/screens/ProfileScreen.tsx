import React, { useState } from 'react';
import { Flame, Trophy, Award, Sparkles, ChevronLeft, ChevronRight, Check, Shield, BookOpen, Clock, Heart, Anchor, Sun, Map, RotateCcw, Save, ScrollText, Volume2, VolumeX, Image as ImageIcon, ArrowRight, Lock, CheckCircle2, Star, GraduationCap } from 'lucide-react';
import { PlayerProgress, TravelerAppearance, BadgeItem, PLAYER_RANKS, getPlayerRank, getNextPlayerRank, CharacterTraits } from '../../types';
import { PIXEL_ASSETS } from '../../utils/assets';
import { soundManager } from '../../utils/audio';
import { getPersonalityProfile, TRAIT_CONFIG, INITIAL_CHARACTER_TRAITS } from '../../utils/characterTraits';

interface ProfileScreenProps {
  progress: PlayerProgress;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
  onOpenAssetManager?: () => void;
  onOpenSupport?: () => void;
  onUpdateAppearance?: (appearance: TravelerAppearance) => void;
  onResetProgress?: () => void;
  onHarvestXp?: (amount: number, reason: string, startX?: number, startY?: number) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  progress,
  soundEnabled,
  onToggleSound,
  onOpenAssetManager,
  onOpenSupport,
  onUpdateAppearance,
  onResetProgress,
  onHarvestXp
}) => {
  const [profileSubTab, setProfileSubTab] = useState<'progression' | 'badges' | 'rangs'>('progression');
  const [badgeFilter, setBadgeFilter] = useState<'tous' | 'progression' | 'habitudes' | 'histoire'>('tous');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const currentRank = getPlayerRank(progress.xp);
  const nextRank = getNextPlayerRank(progress.xp);
  const personality = getPersonalityProfile(progress.traits || INITIAL_CHARACTER_TRAITS);

  const filteredBadges = progress.badges.filter((b) => {
    if (badgeFilter === 'tous') return true;
    return b.category === badgeFilter;
  });

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return <span className="text-xl">⭐</span>;
      case 'flame':
        return <span className="text-xl">🔥</span>;
      case 'book':
        return <span className="text-xl">📖</span>;
      case 'shield':
        return <span className="text-xl">🛡️</span>;
      case 'compass':
        return <span className="text-xl">🧭</span>;
      case 'heart':
        return <span className="text-xl">💛</span>;
      case 'map':
        return <span className="text-xl">🗺️</span>;
      case 'trophy':
        return <span className="text-xl">🏆</span>;
      case 'sun':
        return <span className="text-xl">☀️</span>;
      default:
        return <span className="text-xl">🎖️</span>;
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-3 sm:px-6 pt-3 pb-12 max-w-md mx-auto w-full gap-3 select-none custom-scrollbar">
      {/* Sub Tabs */}
      <div className="grid grid-cols-3 p-1 bg-[#ebdfc8] border-2 border-[#3a2312] rounded-2xl shadow-[0_2px_0_#3a2312]">
        {(
          [
            { id: 'progression', label: 'Parcours' },
            { id: 'badges', label: 'Badges' },
            { id: 'rangs', label: 'Rangs & Titres' }
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              soundManager.playSelect();
              setProfileSubTab(tab.id);
            }}
            className={`py-1.5 text-xs font-bold rounded-xl transition-all font-cinzel text-center cursor-pointer ${
              profileSubTab === tab.id
                ? 'bg-[#fbf7ee] text-[#3a2312] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312]'
                : 'text-[#8c6b4e] hover:text-[#3a2312]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* SECTION 1: PROGRESSION — TON PARCOURS */}
      {profileSubTab === 'progression' && (
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel">
              XP, Lumière, série, statistiques
            </span>
            <h1 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel">
              PROGRESSION – TON PARCOURS
            </h1>
          </div>

          {/* Level & XP Overview Card with Current Rank Badge */}
          <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-3xl p-4 shadow-[0_3px_0_#3a2312] flex flex-col gap-3">
            <div className="flex items-center justify-between">
              {/* Level Circle */}
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel">
                  NIVEAU
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center shadow-[0_2px_0_#3a2312]">
                  <span className="text-lg font-black text-[#3a2312] font-mono">
                    {progress.level}
                  </span>
                </div>
              </div>

              {/* XP Bar */}
              <div className="flex-1 px-4 flex flex-col items-center">
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-xs font-black text-[#6b4724] font-mono">
                    {progress.xp} XP
                  </span>
                  {nextRank && (
                    <span className="text-[10px] font-bold text-[#8c5a2b]">
                      Prochain rang à {nextRank.minXp} XP
                    </span>
                  )}
                </div>
                <div className="w-full h-3 bg-[#d9c5ab] rounded-full border border-[#4a2e18] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#d97c27] to-[#e69138]"
                    style={{
                      width: `${Math.min(100, (progress.xp / (nextRank ? nextRank.minXp : 1200)) * 100)}%`,
                      backgroundColor: '#d97c27'
                    }}
                  />
                </div>
              </div>

              {/* Light Percent */}
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel">
                  LUMIÈRE
                </span>
                <div className="flex items-center gap-1 bg-[#ebdfc8] border-2 border-[#3a2312] px-2 py-1.5 rounded-2xl shadow-[0_2px_0_#3a2312]">
                  <span className="text-base">🏮</span>
                  <span className="text-xs font-bold text-[#3a2312] font-mono">
                    {progress.lightPercent}%
                  </span>
                </div>
              </div>
            </div>

            {/* Current Honorary Title Ribbon */}
            <div 
              onClick={() => {
                soundManager.playSelect();
                setProfileSubTab('rangs');
              }}
              className="flex items-center justify-between p-2.5 bg-[#ebdfc8] hover:bg-[#e4d5be] border-2 border-[#3a2312] rounded-2xl cursor-pointer transition-all shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{currentRank.icon}</span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold uppercase text-[#8c5a2b] font-cinzel">
                      Rang Actuel (Niv. {currentRank.level})
                    </span>
                    <span className="text-[10px] font-amiri font-bold text-[#b45309]">
                      {currentRank.arabicTitle}
                    </span>
                  </div>
                  <span className="text-xs font-black text-[#3a2312] font-cinzel leading-none block">
                    {currentRank.title}
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#d97c27] bg-[#fbf7ee] px-2 py-1 rounded-lg border border-[#3a2312]/30 font-cinzel">
                Voir l'arbre ➔
              </span>
            </div>
          </div>

          {/* Waswâs Emprise Card in Profile */}
          <div className="bg-[#fbf7ee] border-2 border-purple-900/60 rounded-3xl p-3 sm:p-4 shadow-[0_3px_0_#3a2312] flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-950/80 border-2 border-purple-500 flex items-center justify-center text-lg shadow-sm shrink-0">
              🌑
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between text-xs font-black font-cinzel text-purple-950 mb-1">
                <span>EMPRISE DU WASWÂS</span>
                <span className="font-mono text-purple-700">{progress.waswasXp || 0}/100</span>
              </div>
              <div className="w-full h-2.5 bg-purple-950/20 rounded-full border border-purple-800/40 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-800 via-fuchsia-600 to-purple-500 rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.max((progress.waswasXp || 0) > 0 ? 6 : 0, Math.min(100, progress.waswasXp || 0))}%`,
                    backgroundColor: '#9333ea'
                  }}
                />
              </div>
              <span className="text-[9px] text-[#6b4724] font-medium mt-1 leading-tight">
                Augmente lors des erreurs aux quiz, diminue avec les bonnes actions.
              </span>
            </div>
          </div>

          {/* Streaks */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-2xl bg-[#fbf7ee] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] flex items-center gap-2.5">
              <Flame className="w-6 h-6 text-[#d97c27] fill-[#d97c27] shrink-0" />
              <div>
                <span className="text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel block leading-tight">
                  SÉRIE ACTUELLE
                </span>
                <span className="text-sm font-bold text-[#3a2312] font-mono">
                  {progress.streakDays} jours
                </span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[#fbf7ee] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] flex items-center gap-2.5">
              <Trophy className="w-6 h-6 text-[#c97d28] shrink-0" />
              <div>
                <span className="text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel block leading-tight">
                  MEILLEURE SÉRIE
                </span>
                <span className="text-sm font-bold text-[#3a2312] font-mono">
                  {progress.bestStreakDays} jours
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Personality & Character Traits Card: « L'Âme d'Othmân » */}
          <div className="bg-[#fbf7ee] border-2 border-[#8c5a2b] rounded-3xl p-4 shadow-[0_3px_0_#3a2312] flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-[#8c5a2b] uppercase font-cinzel tracking-wider flex items-center gap-1.5">
                <span>🌱</span>
                <span>L'Âme d'Othmân • Le Miroir de tes Choix</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#8c5a2b]/15 text-[#8c5a2b] text-[10px] font-bold font-cinzel">
                Tempérament Actuel
              </span>
            </div>

            {/* Title & Narrative description */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#ebdfc8]/60 border border-[#8c5a2b]/30">
              <div className="w-12 h-12 rounded-2xl bg-[#ebdfc8] border-2 border-[#8c5a2b] flex items-center justify-center text-2xl shadow-xs shrink-0">
                {TRAIT_CONFIG[personality.dominantTrait]?.icon || '🌱'}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-black text-[#3a2312] font-cinzel leading-tight">
                  {personality.title}
                </h3>
                <p className="text-[11px] text-[#8c5a2b] font-bold italic truncate">
                  « {personality.subtitle} »
                </p>
              </div>
            </div>

            <p className="text-xs text-[#5c3e1e] leading-relaxed">
              {personality.description}
            </p>

            {/* Forces actuelles & Axes d'évolution */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-300/60 flex flex-col gap-1">
                <span className="text-[9px] font-bold text-emerald-900 uppercase font-cinzel flex items-center gap-1">
                  <span>✨</span>
                  <span>Forces Rayonnantes</span>
                </span>
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {[personality.dominantTrait, personality.secondaryTrait].map((tk) => {
                    const cfg = TRAIT_CONFIG[tk];
                    if (!cfg) return null;
                    return (
                      <span key={tk} className="text-[10px] font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-md border border-emerald-300 flex items-center gap-1">
                        <span>{cfg.icon}</span>
                        <span>{cfg.label}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-300/60 flex flex-col gap-1">
                <span className="text-[9px] font-bold text-amber-900 uppercase font-cinzel flex items-center gap-1">
                  <span>🧭</span>
                  <span>À continuer de déployer</span>
                </span>
                <span className="text-[10px] text-amber-800 leading-tight italic">
                  {personality.advice}
                </span>
              </div>
            </div>

            {/* Qualitative Virtues Overview */}
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel">
                LES 6 VERTUS CARDINALES D'OTHMÂN
              </span>

              <div className="grid grid-cols-2 gap-1.5">
                {(['discipline', 'sabr', 'hilm', 'adab', 'vitalite', 'ilm'] as const).map((traitKey) => {
                  const cfg = TRAIT_CONFIG[traitKey];
                  const isPrimary = traitKey === personality.dominantTrait || traitKey === personality.secondaryTrait;
                  return (
                    <div
                      key={traitKey}
                      className={`p-2 rounded-xl border flex items-center gap-2 transition-all ${
                        isPrimary
                          ? 'bg-[#ebdfc8] border-[#8c5a2b] shadow-xs'
                          : 'bg-[#fbf7ee] border-[#deb887]/60 opacity-80'
                      }`}
                      title={cfg.description}
                    >
                      <span className="text-base">{cfg.icon}</span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-[#3a2312] leading-tight">
                          {cfg.label}
                        </span>
                        <span className="text-[9px] text-[#8c5a2b] truncate">
                          {isPrimary ? 'Très affirmé' : 'En cheminement'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Habit Log if available */}
            {progress.habitLog && progress.habitLog.length > 0 && (
              <div className="pt-2 border-t border-[#8c5a2b]/20 flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel">
                  DERNIÈRES HABITUDES ANCRÉES
                </span>
                <div className="flex flex-col gap-1">
                  {progress.habitLog.slice(-3).map((habit, idx) => (
                    <div
                      key={idx}
                      className="text-[11px] text-[#5c3e1e] bg-white/70 px-2.5 py-1.5 rounded-xl border border-[#8c5a2b]/20 flex items-center gap-2"
                    >
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{habit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Supporter / Patron Banner */}
          <div className="p-3.5 bg-gradient-to-br from-[#fffbeb] via-[#fef3c7] to-[#fde68a] border-2 border-[#d97c27] rounded-3xl flex items-center justify-between shadow-[0_3px_0_#3a2312] relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#d97c27] border-2 border-[#3a2312] flex items-center justify-center text-white text-lg shadow-sm shrink-0">
                👑
              </div>
              <div>
                <span className="text-[9px] font-black text-[#8c5a2b] uppercase font-cinzel tracking-wider block">
                  Waqf & Mécénat Éthique
                </span>
                <h3 className="text-xs sm:text-sm font-black text-[#3a2312] font-cinzel leading-tight">
                  Soutenir le Projet Nour
                </h3>
                <p className="text-[10px] text-[#6b4724] font-medium leading-tight mt-0.5">
                  Finance les voix studio & débloque les chapitres.
                </p>
              </div>
            </div>

            {onOpenSupport && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playSelect();
                  onOpenSupport();
                }}
                className="px-3 py-2 rounded-xl bg-[#d97c27] hover:bg-[#c26a1b] text-white font-black text-xs font-cinzel border-2 border-[#3a2312] shadow-xs active:translate-y-0.5 cursor-pointer shrink-0 ml-2"
              >
                Soutenir ➔
              </button>
            )}
          </div>

          {/* Next Rank Goal Banner */}
          {nextRank && (
            <div className="p-3 bg-[#ebdfc8] border-2 border-[#3a2312] rounded-2xl flex items-center justify-between shadow-[0_2px_0_#3a2312]">
              <div>
                <span className="text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel block">
                  PROCHAIN RANG DE SCIENCE
                </span>
                <p className="text-xs font-bold text-[#3a2312]">
                  {nextRank.title} ({nextRank.minXp} XP requis • encore {nextRank.minXp - progress.xp} XP)
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#fbf7ee] border border-[#3a2312] flex items-center justify-center text-xl shadow-inner">
                {nextRank.icon}
              </div>
            </div>
          )}

          {/* Paramètres & Options (Son, Assets & Sauvegarde) */}
          <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-3xl p-4 shadow-[0_3px_0_#3a2312] flex flex-col gap-3">
            <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel">
              Options & Paramètres
            </span>

            {/* Audio Toggle & Asset Manager Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {onToggleSound && (
                <button
                  type="button"
                  onClick={onToggleSound}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#ebdfc8] hover:bg-[#ebdcc4] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    {soundEnabled ? (
                      <Volume2 className="w-4 h-4 text-[#d97c27]" />
                    ) : (
                      <VolumeX className="w-4 h-4 text-[#8c6b4e]" />
                    )}
                    <span className="text-xs font-bold text-[#3a2312] font-cinzel">
                      {soundEnabled ? 'Effets sonores' : 'Son coupé'}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                    soundEnabled
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-zinc-200 text-zinc-600 border-zinc-300'
                  }`}>
                    {soundEnabled ? 'ON' : 'OFF'}
                  </span>
                </button>
              )}

              {onOpenAssetManager && (
                <button
                  type="button"
                  onClick={onOpenAssetManager}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#ebdfc8] hover:bg-[#ebdcc4] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <ImageIcon className="w-4 h-4 text-[#d97c27]" />
                    <span className="text-xs font-bold text-[#3a2312] font-cinzel">
                      Assets Visuels
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#d97c27] bg-[#fbf7ee] px-2 py-0.5 rounded-md border border-[#3a2312]/30">
                    Ouvrir ➔
                  </span>
                </button>
              )}
            </div>

            <div className="flex items-center justify-between p-2.5 bg-[#f3ebd9] rounded-xl border border-[#d2be9f]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#4a804d] animate-pulse" />
                <span className="text-xs font-bold text-[#3a2312]">
                  Sauvegarde automatique active
                </span>
              </div>
              <span className="text-[10px] text-[#4a804d] font-bold bg-[#ebf5e9] px-2 py-0.5 rounded-md border border-[#4a804d]/40">
                Temps réel ✓
              </span>
            </div>

            {onResetProgress && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playSelect();
                  setShowResetConfirm(true);
                }}
                className="w-full py-2.5 rounded-xl bg-[#ebdfc8] hover:bg-[#ebdcc4] text-[#8c5a2b] hover:text-[#3a2312] border-2 border-[#8c6b4e]/60 hover:border-[#3a2312] font-bold text-xs font-cinzel transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_0_#3a2312] active:translate-y-0.5"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#d97c27]" />
                <span>Recommencer la partie à zéro</span>
              </button>
            )}

            <div className="pt-1 text-center">
              <a
                href="/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#8c5a2b] hover:text-[#3a2312] underline font-medium"
              >
                Politique de Confidentialité ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: SUCCÈS — BADGES */}
      {profileSubTab === 'badges' && (
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel">
              Tes accomplissements
            </span>
            <h1 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel">
              SUCCÈS – BADGES
            </h1>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-4 p-1 bg-[#ebdfc8] border-2 border-[#3a2312] rounded-2xl shadow-[0_2px_0_#3a2312]">
            {(
              [
                { id: 'tous', label: 'Tous' },
                { id: 'progression', label: 'Progression' },
                { id: 'habitudes', label: 'Habitudes' },
                { id: 'histoire', label: 'Histoire' }
              ] as const
            ).map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  soundManager.playSelect();
                  setBadgeFilter(filter.id);
                }}
                className={`py-1 text-[10px] sm:text-xs font-bold rounded-xl transition-all font-cinzel text-center cursor-pointer ${
                  badgeFilter === filter.id
                    ? 'bg-[#fbf7ee] text-[#3a2312] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312]'
                    : 'text-[#8c6b4e] hover:text-[#3a2312]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Badges Grid (3 columns) */}
          <div className="grid grid-cols-3 gap-2.5">
            {filteredBadges.map((badge) => (
              <div
                key={badge.id}
                className={`flex flex-col items-center text-center p-3 rounded-2xl border-2 transition-all ${
                  badge.unlocked
                    ? 'bg-[#fbf7ee] border-[#3a2312] shadow-[0_3px_0_#3a2312]'
                    : 'bg-[#ebdfc8]/60 border-[#a89078] opacity-60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-1.5 ${
                    badge.unlocked
                      ? 'bg-gradient-to-br from-amber-200 to-amber-400 border-[#3a2312] shadow-md'
                      : 'bg-[#d9c5ab] border-[#8c6b4e]'
                  }`}
                >
                  {getBadgeIcon(badge.iconName)}
                </div>
                <span className="text-[11px] font-bold text-[#3a2312] leading-tight line-clamp-1 font-cinzel">
                  {badge.title}
                </span>
                <span className="text-[9px] text-[#6b4724] leading-tight mt-0.5 line-clamp-2">
                  {badge.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: RANGS & TITRES DE SCIENCE */}
      {profileSubTab === 'rangs' && (
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel">
              Élévation de l'Âme & Connaissance
            </span>
            <h1 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel">
              RANGS & TITRES DE SCIENCE
            </h1>
          </div>

          {/* Current Rank Spotlight Card */}
          <div className="bg-gradient-to-b from-[#fbf7ee] to-[#f4ecd8] border-2 border-[#3a2312] rounded-3xl p-5 shadow-[0_4px_0_#3a2312] flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#d97c27]/20 border border-[#d97c27] text-[10px] font-bold text-[#8c5a2b] font-cinzel">
              Niveau {currentRank.level} / 5
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ebdcc4] to-[#d9c5ab] border-2 border-[#3a2312] flex items-center justify-center text-3xl shadow-[0_3px_0_#3a2312] mb-2 mt-1">
              {currentRank.icon}
            </div>

            <span className="text-xs font-bold text-[#b45309] font-amiri text-lg -mb-1">
              {currentRank.arabicTitle}
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#3a2312] font-cinzel">
              {currentRank.title}
            </h2>
            <p className="text-xs text-[#6b4724] mt-1 max-w-xs leading-relaxed font-medium">
              {currentRank.description}
            </p>

            {/* Next Rank Progression within Spotlight Card */}
            <div className="w-full mt-4 pt-3 border-t border-[#d2be9f] flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs font-bold font-mono text-[#3a2312]">
                <span>XP ACQUIS : {progress.xp} XP</span>
                {nextRank ? (
                  <span className="text-[#8c5a2b]">Objectif : {nextRank.minXp} XP</span>
                ) : (
                  <span className="text-emerald-700 font-cinzel">Rang Maximal Atteint !</span>
                )}
              </div>
              <div className="w-full h-3 bg-[#d9c5ab] rounded-full border border-[#4a2e18] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#d97c27] to-[#e69138] rounded-full transition-all"
                  style={{
                    width: `${Math.min(100, (progress.xp / (nextRank ? nextRank.minXp : 1200)) * 100)}%`
                  }}
                />
              </div>
            </div>
          </div>

          {/* Ranks Ladder List */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel">
              L'Arbre des 5 Niveaux de Science
            </span>

            {PLAYER_RANKS.map((rank) => {
              const isCurrent = currentRank.level === rank.level;
              const isUnlocked = progress.xp >= rank.minXp;

              return (
                <div
                  key={rank.level}
                  className={`p-3.5 rounded-2xl border-2 flex items-start gap-3 transition-all ${
                    isCurrent
                      ? 'bg-[#fffbeb] border-[#d97c27] shadow-[0_3px_0_#3a2312] ring-2 ring-[#d97c27]/40'
                      : isUnlocked
                      ? 'bg-[#fbf7ee] border-[#3a2312] shadow-[0_2px_0_#3a2312]'
                      : 'bg-[#ebdfc8]/60 border-[#a89078] opacity-75'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl border-2 flex items-center justify-center text-xl shrink-0 ${
                      isCurrent
                        ? 'bg-gradient-to-br from-amber-300 to-amber-500 border-[#3a2312] shadow-sm'
                        : isUnlocked
                        ? 'bg-[#ebdfc8] border-[#3a2312]'
                        : 'bg-[#d9c5ab] border-[#8c6b4e] grayscale'
                    }`}
                  >
                    {rank.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-black text-[#3a2312] font-cinzel">
                          Niveau {rank.level} : {rank.title}
                        </span>
                        {rank.arabicTitle && (
                          <span className="text-xs font-amiri text-[#b45309]">
                            ({rank.arabicTitle})
                          </span>
                        )}
                      </div>
                      {isUnlocked ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                          <CheckCircle2 className="w-3 h-3" />
                          Acquis
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-[#8c6b4e] bg-[#d9c5ab] px-2 py-0.5 rounded-full border border-[#8c6b4e]">
                          <Lock className="w-3 h-3" />
                          {rank.minXp} XP
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#6b4724] mt-0.5 leading-snug font-medium">
                      {rank.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Reset Game Confirmation Modal - Charte Graphique Nour */}
      {showResetConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 select-none"
          onClick={() => setShowResetConfirm(false)}
        >
          <div
            className="w-full max-w-sm bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl p-5 sm:p-6 shadow-[0_8px_0_#3a2312] flex flex-col items-center gap-4 text-center relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Corner Diamonds */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45" />
            <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45" />

            {/* Glowing Emblem */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-[#f2e6d0] via-[#e5d4bb] to-[#d8c3a5] border-2 border-[#3a2312] shadow-[0_3px_0_#3a2312] flex items-center justify-center text-[#d97c27]">
                <RotateCcw className="w-7 h-7" />
              </div>
              <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#e69138] border border-[#3a2312] flex items-center justify-center text-[#1a1209] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Header Title & Badge */}
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#8c5a2b] font-cinzel bg-[#ebdfc8] px-4 py-1.5 rounded-full border-2 border-[#3a2312] shadow-xs">
                ⚠️ Recommencer
              </span>
              <h3 className="text-lg sm:text-xl font-black text-[#3a2312] font-cinzel mt-2 tracking-wide">
                Recommencer à zéro ?
              </h3>
            </div>

            {/* Child-Friendly Clear Warning Box */}
            <div className="w-full bg-[#f3ebd9] border-2 border-[#3a2312] p-4 rounded-2xl flex flex-col gap-2.5 shadow-inner text-center">
              <p className="text-sm sm:text-base font-bold text-[#3a2312] leading-snug">
                Attention ! Tu vas effacer toute ton aventure et repartir du tout début.
              </p>
              
              <div className="flex items-center justify-center gap-2 bg-[#ebdfc8] py-2 px-3 rounded-xl border border-[#3a2312] text-xs sm:text-sm font-bold text-[#5c4028]">
                <span>Niveau {progress.level || 1}</span>
                <span>•</span>
                <span className="text-[#d97c27] font-black">{progress.xp || 0} XP acquis</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5 w-full">
              <button
                type="button"
                onClick={() => {
                  soundManager.playSelect();
                  setShowResetConfirm(false);
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#2d6a4f] hover:bg-[#1b4332] text-[#fbf7ee] font-black text-sm sm:text-base font-cinzel border-2 border-[#1b4332] shadow-[0_4px_0_#1b4332] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <span>Garder ma partie</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playSelect();
                  setShowResetConfirm(false);
                  if (onResetProgress) onResetProgress();
                }}
                className="w-full py-3 px-4 rounded-2xl bg-[#ebdfc8] hover:bg-[#e0cfb4] text-[#8c2b2b] font-bold text-xs sm:text-sm font-cinzel border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Oui, tout recommencer</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
