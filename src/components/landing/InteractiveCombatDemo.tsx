import { useState } from 'react';
import { ShieldAlert, Sparkles, RefreshCw, Heart, Eye, CheckCircle, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface InteractiveCombatDemoProps {
  onOpenGame: () => void;
}

export default function InteractiveCombatDemo({ onOpenGame }: InteractiveCombatDemoProps) {
  const { t } = useLanguage();
  const [waswasLevel, setWaswasLevel] = useState(65);
  const [serenityLevel, setSerenityLevel] = useState(35);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isVictorious, setIsVictorious] = useState(false);
  const [historyCount, setHistoryCount] = useState(0);

  const handleChoice = (type: 'defeat' | 'anger' | 'wisdom') => {
    setHistoryCount(prev => prev + 1);

    if (type === 'defeat') {
      const newWaswas = Math.min(100, waswasLevel + 25);
      const newSerenity = Math.max(10, serenityLevel - 20);
      setWaswasLevel(newWaswas);
      setSerenityLevel(newSerenity);
      setFeedback("🌫️ " + t.combatDemo.action4Desc);
      setIsVictorious(false);
    } else if (type === 'anger') {
      setWaswasLevel(Math.min(90, waswasLevel + 10));
      setFeedback("⚡ " + t.combatDemo.shadowWhisper);
      setIsVictorious(false);
    } else if (type === 'wisdom') {
      setWaswasLevel(0);
      setSerenityLevel(100);
      setIsVictorious(true);
      setFeedback("✨ " + t.combatDemo.victoryTitle + " — " + t.combatDemo.victoryDesc);
    }
  };

  const handleReset = () => {
    setWaswasLevel(65);
    setSerenityLevel(35);
    setFeedback(null);
    setIsVictorious(false);
  };

  return (
    <section id="demo" className="py-20 relative overflow-hidden bg-[#0e0c15]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0a10] via-[#0e0c15] to-[#0b0a10]" />
      <div 
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          isVictorious ? 'opacity-30 bg-radial-[circle_at_50%_40%] from-amber-400 via-emerald-500/20 to-transparent' : 'opacity-20 bg-radial-[circle_at_50%_40%] from-purple-900 via-transparent to-transparent'
        }`} 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold">
            <ShieldAlert className="w-3.5 h-3.5" />
            {t.combatDemo.badge}
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-amber-100">
            {t.combatDemo.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-sans">
            {t.combatDemo.subtitle}
          </p>
        </div>

        {/* The Combat Arena Card */}
        <div className="relative rounded-2xl bg-[#14111e] border-2 border-amber-500/30 overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)]">
          
          {/* Top Bar: Scene Location and State */}
          <div className="bg-[#0b0912] px-6 py-3 border-b border-amber-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-cinzel font-bold text-amber-200">Scène : Le Carrefour des Chemins</span>
            </div>
            <div className="flex items-center gap-4 text-stone-400">
              <span>Épreuve : <strong>La peur du rejet</strong></span>
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 cursor-pointer font-medium"
                title="Réinitialiser le simulateur"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Réinitialiser</span>
              </button>
            </div>
          </div>

          {/* Arena Stage */}
          <div className="relative p-6 sm:p-8 space-y-6">
            
            {/* Visual Opponents / Portraits Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Othmân (Hero Status) */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1626] border border-amber-500/20">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-amber-950/40 border border-amber-400/40 shrink-0">
                  <img
                    src="/game-assets/othman.png"
                    alt="Othmân"
                    className="w-full h-full object-contain p-1"
                  />
                  {isVictorious && (
                    <div className="absolute inset-0 bg-amber-400/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-yellow-300 animate-spin" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-cinzel font-bold text-sm text-amber-200">Othmân</span>
                    <span className="text-xs font-mono text-emerald-400">{serenityLevel}% Sérénité</span>
                  </div>
                  {/* Serenity Bar */}
                  <div className="w-full h-2.5 rounded-full bg-stone-900 overflow-hidden border border-emerald-500/30">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-300 transition-all duration-500 rounded-full"
                      style={{ width: `${serenityLevel}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-stone-400 mt-1 block">
                    {isVictorious ? "Cœur apaisé & intention pure" : "Sensible aux jugements d'autrui"}
                  </span>
                </div>
              </div>

              {/* Waswâs (Opponent Shadow) */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1f162c] border border-purple-500/30">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-purple-950/60 border border-purple-400/40 shrink-0">
                  <img
                    src="/game-assets/waswas.png"
                    alt="Waswâs"
                    className={`w-full h-full object-contain p-1 transition-opacity duration-500 ${
                      isVictorious ? 'opacity-20 grayscale' : 'opacity-90 animate-pulse'
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-cinzel font-bold text-sm text-purple-200">L'Ombre du Waswâs</span>
                    <span className="text-xs font-mono text-purple-300">{waswasLevel}% Trouble</span>
                  </div>
                  {/* Waswâs Gauge */}
                  <div className="w-full h-2.5 rounded-full bg-stone-900 overflow-hidden border border-purple-500/30">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 transition-all duration-500 rounded-full"
                      style={{ width: `${waswasLevel}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-stone-400 mt-1 block">
                    {isVictorious ? "Ombre vaincue et dissipée" : "Murmure actif dans l'esprit"}
                  </span>
                </div>
              </div>

            </div>

            {/* The Dialogue & Whisper Box */}
            <div className={`p-5 rounded-xl transition-all duration-300 border ${
              isVictorious 
                ? 'bg-emerald-950/30 border-emerald-500/40' 
                : 'bg-purple-950/30 border-purple-500/30'
            }`}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-900/80 flex items-center justify-center shrink-0 border border-amber-500/30 text-amber-300">
                  {isVictorious ? <Sparkles className="w-4 h-4 text-emerald-400" /> : <ShieldAlert className="w-4 h-4 text-purple-400" />}
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-amber-300/80 block">
                    {isVictorious ? "Climat Apaisé" : "Murmure du Waswâs à l'oreille d'Othmân :"}
                  </span>
                  <p className="text-sm sm:text-base italic text-stone-200 leading-relaxed font-serif">
                    {isVictorious 
                      ? "« Le silence bienveillant s'est installé. Othmân s'approche d'un pas ferme, salue d'un sourire sincère. L'amitié naît d'un cœur serein. »"
                      : "« Regarde ces jeunes au loin... Ils ne te connaissent pas. Si tu t'approches, ils vont te trouver bizarre et se moquer de toi. Reste en arrière, c'est bien plus prudent... »"
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Feedback Message */}
            {feedback && (
              <div className={`p-4 rounded-xl text-xs sm:text-sm font-medium leading-relaxed animate-fade-in ${
                isVictorious 
                  ? 'bg-emerald-900/40 border border-emerald-400/50 text-emerald-200' 
                  : 'bg-stone-900/90 border border-amber-500/30 text-amber-200'
              }`}>
                {feedback}
              </div>
            )}

            {/* Choices Grid */}
            {!isVictorious ? (
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider font-cinzel font-bold text-amber-300 block">
                  Quelle réponse donnez-vous à travers Othmân ?
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Choice 1: Defeat */}
                  <button
                    onClick={() => handleChoice('defeat')}
                    className="p-4 rounded-xl bg-[#171424] hover:bg-[#201c32] border border-purple-500/20 hover:border-purple-400/50 text-left transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 group-hover:text-purple-300 block mb-1">
                        Option A : Céder au doute
                      </span>
                      <p className="text-xs text-stone-300 leading-snug">
                        « C'est vrai... Je suis trop timide, je ferais mieux de faire demi-tour et de rentrer chez moi. »
                      </p>
                    </div>
                    <span className="text-[10px] text-red-400/80 mt-3 block font-mono">
                      +25% Doute Waswâs
                    </span>
                  </button>

                  {/* Choice 2: Anger */}
                  <button
                    onClick={() => handleChoice('anger')}
                    className="p-4 rounded-xl bg-[#171424] hover:bg-[#201c32] border border-amber-500/20 hover:border-amber-400/50 text-left transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 group-hover:text-amber-300 block mb-1">
                        Option B : S'imposer par la colère
                      </span>
                      <p className="text-xs text-stone-300 leading-snug">
                        « Je vais crier et taper du pied pour qu'ils soient bien obligés de me prêter attention ! »
                      </p>
                    </div>
                    <span className="text-[10px] text-amber-400/80 mt-3 block font-mono">
                      Trouble & instabilité
                    </span>
                  </button>

                  {/* Choice 3: Wisdom & Isti'adha */}
                  <button
                    onClick={() => handleChoice('wisdom')}
                    className="p-4 rounded-xl bg-gradient-to-b from-amber-950/40 via-[#1c1626] to-[#171424] hover:from-amber-900/50 border-2 border-amber-400/60 hover:border-amber-300 text-left transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)] cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Option C : Discernement & Foi
                      </span>
                      <p className="text-xs text-amber-100 font-medium leading-snug">
                        « أَعُوذُ بِاللَّهِ — Je cherche refuge auprès d'Allah. Mon intention est pure : un sourire est une aumône, j'avance en paix. »
                      </p>
                    </div>
                    <span className="text-[10px] text-emerald-300 mt-3 block font-mono font-bold">
                      ✨ Dissipe 100% du Waswâs !
                    </span>
                  </button>

                </div>
              </div>
            ) : (
              /* Victory Card Banner */
              <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-950/70 via-[#192420] to-amber-950/50 border-2 border-emerald-400/60 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/60 mx-auto flex items-center justify-center text-emerald-300">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-emerald-200">
                    Fiche du Livre du Savoir Débloquée !
                  </h4>
                  <p className="text-xs text-stone-300 max-w-lg mx-auto mt-1">
                    Vous venez d'expérimenter la première mécanique du jeu. Dans le chapitre 1 complet, 
                    Othmân rencontre de nombreux villageois et débloque plus de 15 sagesses.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={onOpenGame}
                    className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-stone-950" />
                    <span>Lancer le Chapitre 1 Complet</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-300 hover:text-stone-100 text-xs font-medium cursor-pointer"
                  >
                    Rejouer la démo
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Footer note */}
          <div className="bg-[#0c0a13] p-3 text-center border-t border-amber-500/10 text-[11px] text-stone-400">
            Dans NOUR, aucun combat n'utilise la violence physique. La victoire s'obtient par la clarté du cœur, la foi et l'éthique de la parole.
          </div>

        </div>

      </div>
    </section>
  );
}
