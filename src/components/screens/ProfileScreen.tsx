import React, { useState } from 'react';
import { Flame, Trophy, Award, Sparkles, ChevronLeft, ChevronRight, Check, Shield, BookOpen, Clock, Heart, Anchor, Sun, Map, RotateCcw, Save, AlertTriangle } from 'lucide-react';
import { PlayerProgress, TravelerAppearance, BadgeItem } from '../../types';
import { PIXEL_ASSETS } from '../../utils/assets';
import { soundManager } from '../../utils/audio';

interface ProfileScreenProps {
  progress: PlayerProgress;
  onUpdateAppearance: (appearance: TravelerAppearance) => void;
  onResetProgress?: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  progress,
  onUpdateAppearance,
  onResetProgress
}) => {
  const [profileSubTab, setProfileSubTab] = useState<'progression' | 'badges' | 'apparence'>('progression');
  const [badgeFilter, setBadgeFilter] = useState<'tous' | 'progression' | 'habitudes' | 'histoire'>('tous');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Appearance customization draft state
  const [appearanceDraft, setAppearanceDraft] = useState<TravelerAppearance>(progress.appearance);
  const [saveSuccess, setSaveSuccess] = useState(false);

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

  const hairOptions = ['Chauve', 'Court', 'Bouclé', 'Long'];
  const beardOptions = ['Aucune', 'Courte', 'Complète'];

  const handleNextHair = () => {
    const currentIndex = hairOptions.indexOf(appearanceDraft.hairStyle);
    const nextIndex = (currentIndex + 1) % hairOptions.length;
    setAppearanceDraft((prev) => ({ ...prev, hairStyle: hairOptions[nextIndex] }));
    soundManager.playSelect();
  };

  const handlePrevHair = () => {
    const currentIndex = hairOptions.indexOf(appearanceDraft.hairStyle);
    const prevIndex = (currentIndex - 1 + hairOptions.length) % hairOptions.length;
    setAppearanceDraft((prev) => ({ ...prev, hairStyle: hairOptions[prevIndex] }));
    soundManager.playSelect();
  };

  const handleNextBeard = () => {
    const currentIndex = beardOptions.indexOf(appearanceDraft.beardStyle);
    const nextIndex = (currentIndex + 1) % beardOptions.length;
    setAppearanceDraft((prev) => ({ ...prev, beardStyle: beardOptions[nextIndex] }));
    soundManager.playSelect();
  };

  const handlePrevBeard = () => {
    const currentIndex = beardOptions.indexOf(appearanceDraft.beardStyle);
    const prevIndex = (currentIndex - 1 + beardOptions.length) % beardOptions.length;
    setAppearanceDraft((prev) => ({ ...prev, beardStyle: beardOptions[prevIndex] }));
    soundManager.playSelect();
  };

  const handleNextBody = () => {
    setAppearanceDraft((prev) => ({ ...prev, bodyType: (prev.bodyType % 3) + 1 }));
    soundManager.playSelect();
  };
  const handlePrevBody = () => {
    setAppearanceDraft((prev) => ({ ...prev, bodyType: prev.bodyType === 1 ? 3 : prev.bodyType - 1 }));
    soundManager.playSelect();
  };

  const handleNextSkin = () => {
    setAppearanceDraft((prev) => ({ ...prev, skinColor: (prev.skinColor % 5) + 1 }));
    soundManager.playSelect();
  };
  const handlePrevSkin = () => {
    setAppearanceDraft((prev) => ({ ...prev, skinColor: prev.skinColor === 1 ? 5 : prev.skinColor - 1 }));
    soundManager.playSelect();
  };

  const handleNextEyes = () => {
    setAppearanceDraft((prev) => ({ ...prev, eyeType: (prev.eyeType % 4) + 1 }));
    soundManager.playSelect();
  };
  const handlePrevEyes = () => {
    setAppearanceDraft((prev) => ({ ...prev, eyeType: prev.eyeType === 1 ? 4 : prev.eyeType - 1 }));
    soundManager.playSelect();
  };

  const handleSaveAppearance = () => {
    soundManager.playQuizSuccess();
    onUpdateAppearance(appearanceDraft);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-3 sm:px-6 py-3 max-w-md mx-auto w-full gap-3 select-none custom-scrollbar">
      {/* Sub Tabs */}
      <div className="grid grid-cols-3 p-1 bg-[#ebdfc8] border-2 border-[#3a2312] rounded-2xl shadow-[0_2px_0_#3a2312]">
        {(
          [
            { id: 'progression', label: 'Parcours' },
            { id: 'badges', label: 'Badges' },
            { id: 'apparence', label: 'Apparence' }
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

          {/* Level & XP Overview Card */}
          <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-3xl p-4 shadow-[0_3px_0_#3a2312] flex items-center justify-between">
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
              <span className="text-xs font-bold text-[#6b4724] font-mono mb-1">
                {progress.xp} / 500 XP
              </span>
              <div className="w-full h-3 bg-[#d9c5ab] rounded-full border border-[#4a2e18] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#d97c27] to-[#e69138]"
                  style={{ width: `${Math.min(100, (progress.xp / 500) * 100)}%` }}
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

          {/* Detailed Stats Bars */}
          <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-3xl p-4 shadow-[0_3px_0_#3a2312] flex flex-col gap-2.5">
            <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel">
              STATISTIQUES
            </span>

            {[
              { label: 'Discipline', val: progress.stats.discipline, max: 100, color: 'bg-emerald-600', icon: '🛡️' },
              { label: 'Savoir', val: progress.stats.savoir, max: 100, color: 'bg-blue-600', icon: '📖' },
              { label: 'Patience', val: progress.stats.patience, max: 100, color: 'bg-amber-600', icon: '⏳' },
              { label: 'Bonté', val: progress.stats.bonte, max: 100, color: 'bg-rose-500', icon: '💛' },
              { label: 'Constance', val: progress.stats.constance, max: 100, color: 'bg-orange-600', icon: '⚓' }
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between gap-3">
                <div className="w-24 flex items-center gap-1.5 shrink-0">
                  <span className="text-xs">{stat.icon}</span>
                  <span className="text-xs font-semibold text-[#3a2312]">{stat.label}</span>
                </div>

                <div className="flex-1 h-2.5 bg-[#ebdcc4] rounded-full border border-[#b89f81] overflow-hidden">
                  <div
                    className={`h-full ${stat.color} rounded-full`}
                    style={{ width: `${Math.min(100, (stat.val / stat.max) * 100)}%` }}
                  />
                </div>

                <span className="text-xs font-bold text-[#3a2312] font-mono w-12 text-right">
                  {stat.val} / 100
                </span>
              </div>
            ))}
          </div>

          {/* Next Reward Banner */}
          <div className="p-3 bg-[#ebdfc8] border-2 border-[#3a2312] rounded-2xl flex items-center justify-between shadow-[0_2px_0_#3a2312]">
            <div>
              <span className="text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel block">
                PROCHAINE RÉCOMPENSE
              </span>
              <p className="text-xs font-bold text-[#3a2312]">
                Atteins le niveau 5 pour débloquer une nouvelle tenue.
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#fbf7ee] border border-[#3a2312] flex items-center justify-center text-xl shadow-inner">
              👘
            </div>
          </div>

          {/* Save Status & Reset Game Section */}
          <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-3xl p-4 shadow-[0_3px_0_#3a2312] flex flex-col gap-3">
            <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel">
              Sauvegarde & Gestion de la partie
            </span>

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
                className="w-full py-2.5 rounded-xl bg-[#fde2e4] hover:bg-[#fcd0d4] text-[#9b2226] border-2 border-[#9b2226] font-bold text-xs font-cinzel transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Recommencer la partie à zéro</span>
              </button>
            )}
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

      {/* SECTION 3: PERSONNALISATION — APPARENCE */}
      {profileSubTab === 'apparence' && (
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel">
              Personnalise ton voyageur
            </span>
            <h1 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel">
              PERSONNALISATION – APPARENCE
            </h1>
          </div>

          {/* Customizer Stage Card */}
          <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-3xl p-4 shadow-[0_3px_0_#3a2312] flex flex-col items-center gap-3">
            {/* Live Sprite Preview with side arrows */}
            <div className="flex items-center justify-center gap-4 w-full py-2">
              <button
                onClick={handlePrevHair}
                className="w-8 h-8 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center cursor-pointer shadow-[0_2px_0_#3a2312]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="w-24 h-32 flex items-center justify-center">
                <img
                  src={PIXEL_ASSETS.traveler}
                  alt="Aperçu Personnage"
                  className="w-20 h-28 object-contain drop-shadow-md"
                />
              </div>

              <button
                onClick={handleNextHair}
                className="w-8 h-8 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center cursor-pointer shadow-[0_2px_0_#3a2312]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Selectors Grid */}
            <div className="grid grid-cols-3 gap-2 w-full">
              {/* Corps */}
              <div className="p-2 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] flex flex-col items-center justify-between text-center gap-1">
                <span className="text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel">Corps</span>
                <div className="flex items-center gap-1 w-full justify-between px-1">
                  <button onClick={handlePrevBody} className="p-0.5 hover:text-[#e69138] cursor-pointer"><ChevronLeft className="w-3.5 h-3.5" /></button>
                  <span className="text-xs font-bold text-[#3a2312] font-mono">{String(appearanceDraft.bodyType).padStart(2, '0')}</span>
                  <button onClick={handleNextBody} className="p-0.5 hover:text-[#e69138] cursor-pointer"><ChevronRight className="w-3.5 h-3.5" /></button>
                </div>
              </div>

              {/* Peau */}
              <div className="p-2 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] flex flex-col items-center justify-between text-center gap-1">
                <span className="text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel">Peau</span>
                <div className="flex items-center gap-1 w-full justify-between px-1">
                  <button onClick={handlePrevSkin} className="p-0.5 hover:text-[#e69138] cursor-pointer"><ChevronLeft className="w-3.5 h-3.5" /></button>
                  <span className="text-xs font-bold text-[#3a2312] font-mono">{String(appearanceDraft.skinColor).padStart(2, '0')}</span>
                  <button onClick={handleNextSkin} className="p-0.5 hover:text-[#e69138] cursor-pointer"><ChevronRight className="w-3.5 h-3.5" /></button>
                </div>
              </div>

              {/* Yeux */}
              <div className="p-2 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] flex flex-col items-center justify-between text-center gap-1">
                <span className="text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel">Yeux</span>
                <div className="flex items-center gap-1 w-full justify-between px-1">
                  <button onClick={handlePrevEyes} className="p-0.5 hover:text-[#e69138] cursor-pointer"><ChevronLeft className="w-3.5 h-3.5" /></button>
                  <span className="text-xs font-bold text-[#3a2312] font-mono">{String(appearanceDraft.eyeType).padStart(2, '0')}</span>
                  <button onClick={handleNextEyes} className="p-0.5 hover:text-[#e69138] cursor-pointer"><ChevronRight className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            </div>

            {/* Coiffure Selector */}
            <div className="flex items-center justify-between w-full px-2 py-1.5 bg-[#ebdfc8] border-2 border-[#3a2312] rounded-xl">
              <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel">
                Coiffure
              </span>
              <div className="flex items-center gap-2">
                <button onClick={handlePrevHair} className="p-1 hover:text-[#e69138]">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold text-[#3a2312] min-w-[60px] text-center font-mono">
                  {appearanceDraft.hairStyle}
                </span>
                <button onClick={handleNextHair} className="p-1 hover:text-[#e69138]">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Barbe Selector */}
            <div className="flex items-center justify-between w-full px-2 py-1.5 bg-[#ebdfc8] border-2 border-[#3a2312] rounded-xl">
              <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel">
                Barbe
              </span>
              <div className="flex items-center gap-2">
                <button onClick={handlePrevBeard} className="p-1 hover:text-[#e69138]">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold text-[#3a2312] min-w-[60px] text-center font-mono">
                  {appearanceDraft.beardStyle}
                </span>
                <button onClick={handleNextBeard} className="p-1 hover:text-[#e69138]">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Enregistrer Button */}
            <button
              onClick={handleSaveAppearance}
              className="w-full py-3 rounded-2xl bg-[#e69138] hover:bg-[#f0a04b] text-[#3a2312] font-black text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-[#3a2312] shadow-[0_4px_0_#3a2312] transition-all cursor-pointer font-cinzel uppercase tracking-wider mt-1"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Enregistré !</span>
                </>
              ) : (
                <span>Enregistrer</span>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Reset Game Confirmation Modal */}
      {showResetConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowResetConfirm(false)}
        >
          <div
            className="w-full max-w-sm bg-[#fbf7ee] border-3 border-[#9b2226] rounded-3xl p-5 sm:p-6 shadow-[0_8px_0_#9b2226] flex flex-col items-center gap-4 text-center select-none animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#fde2e4] border-2 border-[#9b2226] flex items-center justify-center text-[#9b2226] shadow-inner">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase text-[#9b2226] font-cinzel bg-[#fde2e4] px-3 py-1 rounded-full border border-[#9b2226]">
                Attention
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel mt-2">
                Recommencer à zéro ?
              </h3>
            </div>

            <p className="text-xs text-[#5c4028] leading-relaxed bg-[#f3ebd9] p-3.5 rounded-2xl border border-[#d2be9f]">
              Cette action va réinitialiser toute votre progression : vos points d'XP, les quiz réussis, vos quêtes et vos scènes débloquées pour repartir du début.
            </p>

            <div className="flex flex-col gap-2 w-full">
              <button
                type="button"
                onClick={() => {
                  soundManager.playSelect();
                  setShowResetConfirm(false);
                  if (onResetProgress) onResetProgress();
                }}
                className="w-full py-3 rounded-2xl bg-[#9b2226] hover:bg-[#7f1d1d] text-white font-bold text-xs sm:text-sm font-cinzel border-2 border-[#5c1316] shadow-[0_3px_0_#5c1316] active:translate-y-0.5 transition-all cursor-pointer"
              >
                Oui, réinitialiser la partie
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playSelect();
                  setShowResetConfirm(false);
                }}
                className="w-full py-2.5 rounded-2xl bg-[#ebdfc8] hover:bg-[#e0cfb4] text-[#3a2312] font-bold text-xs font-cinzel border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] transition-all cursor-pointer"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
