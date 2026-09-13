import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  Download, 
  RotateCcw, 
  Sparkles, 
  AlertCircle,
  Gamepad2,
  Star,
  MessageCircle
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

export interface FeedbackData {
  name: string;
  age: string;
  firstTime: string;
  completed: string;
  duration: string;
  slowScene: string;
  action1: string;
  action2: string;
  action3: string;
  validation: string;
  quiz: string;
  design: string;
  navigation: string;
  feeling: string;
  recommend: string;
  liked: string;
  disliked: string;
  nextChapter: string;
  suggestions: string;
  email: string;
}

const INITIAL_DATA: FeedbackData = {
  name: '',
  age: '',
  firstTime: '',
  completed: '',
  duration: '',
  slowScene: '',
  action1: '',
  action2: '',
  action3: '',
  validation: '',
  quiz: '',
  design: '4',
  navigation: '',
  feeling: '',
  recommend: '8',
  liked: '',
  disliked: '',
  nextChapter: '',
  suggestions: '',
  email: ''
};

interface TesterFeedbackFormProps {
  onLaunchGame?: () => void;
}

export const TesterFeedbackForm: React.FC<TesterFeedbackFormProps> = ({ onLaunchGame }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FeedbackData>(INITIAL_DATA);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastDownloadUrl, setLastDownloadUrl] = useState<string | null>(null);

  const totalSteps = 6;

  const updateField = (field: keyof FeedbackData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMsg(null);
  };

  const validateCurrentStep = (): boolean => {
    setErrorMsg(null);
    if (currentStep === 0) {
      if (!formData.age) {
        setErrorMsg("Veuillez sélectionner la tranche d'âge du joueur.");
        return false;
      }
    } else if (currentStep === 1) {
      if (!formData.completed) {
        setErrorMsg("Veuillez préciser si vous avez terminé le Chapitre 1.");
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.validation) {
        setErrorMsg("Veuillez indiquer si la validation des actions réelles était claire.");
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.quiz) {
        setErrorMsg("Veuillez donner votre avis sur la difficulté des quiz.");
        return false;
      }
      if (!formData.navigation) {
        setErrorMsg("Veuillez indiquer si la navigation était fluide.");
        return false;
      }
    } else if (currentStep === 4) {
      if (!formData.feeling) {
        setErrorMsg("Veuillez choisir votre sentiment à la fin du chapitre.");
        return false;
      }
      if (!formData.recommend) {
        setErrorMsg("Veuillez attribuer une note de recommandation de 0 à 10.");
        return false;
      }
    } else if (currentStep === 5) {
      if (!formData.nextChapter) {
        setErrorMsg("Veuillez indiquer si vous souhaitez continuer vers le Chapitre 2.");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep((prev) => prev + 1);
        const el = document.getElementById('tester-questionnaire');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handlePrev = () => {
    setErrorMsg(null);
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      const el = document.getElementById('tester-questionnaire');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const buildWhatsAppUrl = (data: FeedbackData) => {
    const phone = '212699245542';
    const lines = [
      "السلام عليكم ! Voici mon retour de testeur sur NOUR (Chapitre 1) :",
      "",
      `👤 Prénom : ${data.name.trim() || 'Anonyme'}`,
      `🎂 Tranche d'âge : ${data.age || 'Non spécifié'}`,
      `✨ Première fois : ${data.firstTime === 'oui' ? 'Oui, première fois' : 'Non, a déjà joué'}`,
      "",
      "🎮 EXPÉRIENCE DU JEU :",
      `• Chapitre 1 terminé : ${data.completed === 'oui' ? 'Oui, entièrement' : data.completed === 'partiel' ? 'Partiellement' : 'Arrêté avant'}`,
      `• Durée approximative : ~${data.duration || '30'} minutes`,
      data.slowScene ? `• Scène longue/ralentie : ${data.slowScene}` : '',
      "",
      "🌟 ACTIONS RÉELLES (Vie courante) :",
      `• Scène 1 (Lit rangé) : ${data.action1 || 'Non spécifié'}`,
      `• Scène 2 (Bismillâh eau) : ${data.action2 || 'Non spécifié'}`,
      `• Scène 3 (Saluer un proche) : ${data.action3 || 'Non spécifié'}`,
      `• Clarté de validation : ${data.validation || 'ok'}`,
      "",
      "🎨 DESIGN & ERGONOMIE :",
      `• Difficulté des quiz : ${data.quiz || 'Bien équilibré'}`,
      `• Note Pixel-Art : ${data.design}/5 ⭐`,
      `• Fluidité navigation : ${data.navigation || 'Fluide'}`,
      `• Sentiment ressenti : ${data.feeling || 'Satisfait'}`,
      `• Recommandation : ${data.recommend}/10 ⭐`,
      "",
      data.liked ? `❤️ Ce qui a le plus plu :\n« ${data.liked} »\n` : '',
      data.disliked ? `⚠️ Frustrations / critiques :\n« ${data.disliked} »\n` : '',
      `🚀 Envie du Chapitre 2 : ${data.nextChapter === 'oui' ? 'Oui, absolument !' : data.nextChapter === 'peut-etre' ? 'Peut-être' : 'Non'}`,
      data.suggestions ? `💡 Suggestions d'amélioration :\n« ${data.suggestions} »\n` : '',
      data.email ? `📧 Email de contact : ${data.email}` : ''
    ].filter(Boolean);

    const text = lines.join('\n');
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const downloadJsonBackup = (data: FeedbackData) => {
    try {
      const payload = {
        app: "NOUR - La Voie de la Sagesse",
        version: "Chapitre 1 - Beta Testeur",
        date: new Date().toISOString(),
        feedback: data
      };
      const json = JSON.stringify(payload, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `nour-feedback-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (e) {
      console.error("JSON export error:", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);

    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      language: typeof navigator !== 'undefined' ? navigator.language : 'fr'
    };

    // 1. Sauvegarde locale dans localStorage
    try {
      const existingRaw = localStorage.getItem('nour_tester_feedbacks');
      const existingList = existingRaw ? JSON.parse(existingRaw) : [];
      existingList.push(submissionData);
      localStorage.setItem('nour_tester_feedbacks', JSON.stringify(existingList));
    } catch (err) {
      console.warn("LocalStorage save warning:", err);
    }

    // 2. Sauvegarde dans Cloud Firestore
    try {
      await addDoc(collection(db, 'feedbacks'), {
        ...submissionData,
        createdAt: serverTimestamp()
      });
      console.log("Feedback recorded in Firestore successfully.");
    } catch (err) {
      console.warn("Firestore save warning:", err);
    }

    // 3. Ouvrir automatiquement WhatsApp vers le +212699245542
    try {
      const waUrl = buildWhatsAppUrl(formData);
      window.open(waUrl, '_blank');
    } catch (err) {
      console.warn("WhatsApp open error:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    const el = document.getElementById('tester-questionnaire');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleRestart = () => {
    setFormData(INITIAL_DATA);
    setCurrentStep(0);
    setIsSubmitted(false);
    setErrorMsg(null);
  };

  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div id="tester-questionnaire" className="w-full max-w-2xl mx-auto">
      {/* Questionnaire Card Frame */}
      <div className="bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl shadow-[0_8px_0_#3a2312] overflow-hidden relative">
        {/* Corner Decorative Diamonds */}
        <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45 pointer-events-none z-10" />
        <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45 pointer-events-none z-10" />
        <div className="absolute bottom-3 left-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45 pointer-events-none z-10" />
        <div className="absolute bottom-3 right-3 w-2.5 h-2.5 bg-[#d97c27] border border-[#3a2312] rotate-45 pointer-events-none z-10" />

        {/* Header Ribbon */}
        <div className="bg-[#f3ebd9] px-5 py-4 sm:px-8 sm:py-5 border-b-2 border-[#3a2312] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#d97c27] border-2 border-[#3a2312] flex items-center justify-center text-[#1a1209] shadow-xs shrink-0">
              <Sparkles className="w-5 h-5 fill-amber-200" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#3a2312] font-cinzel leading-tight">
                Questionnaire Bêta-Testeurs
              </h2>
              <p className="text-xs sm:text-sm text-[#7a5332] font-medium">
                Vos retours sincères façonnent l'aventure NOUR.
              </p>
            </div>
          </div>

          {!isSubmitted && (
            <div className="flex items-center gap-2 self-start sm:self-auto bg-[#ebdfc8] px-3 py-1.5 rounded-full border border-[#3a2312] text-xs font-bold text-[#5c3e23] font-cinzel shadow-inner">
              <span>Étape {currentStep + 1} / {totalSteps}</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="w-full h-2.5 bg-[#ebdfc8] border-b border-[#3a2312] relative overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#d97c27] to-[#e69138] transition-all duration-300 ease-out border-r border-[#3a2312]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        {/* Content Body */}
        <div className="p-5 sm:p-8">
          {isSubmitted ? (
            /* Thank You State */
            <div className="flex flex-col items-center text-center gap-4 py-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-3xl bg-[#d8f3dc] border-3 border-[#2d6a4f] text-[#2d6a4f] flex items-center justify-center shadow-[0_4px_0_#2d6a4f]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-black uppercase tracking-widest text-[#2d6a4f] font-cinzel">
                  BarakAllahu fikoum !
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#3a2312] font-cinzel">
                  Merci infiniment pour vos retours !
                </h3>
                <p className="text-xs sm:text-sm text-[#5c3e23] max-w-md mx-auto leading-relaxed mt-1">
                  Vos réponses ont été enregistrées avec succès et préparées pour être envoyées directement à l'équipe sur WhatsApp.
                </p>
              </div>

              {/* WhatsApp Action Card */}
              <div className="w-full bg-[#ebf5e9] border-2 border-[#2d6a4f] rounded-2xl p-4 text-left flex flex-col gap-2.5 mt-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1b4332] font-cinzel">
                  <MessageCircle className="w-4 h-4 text-[#2d6a4f] fill-[#2d6a4f]/20" />
                  <span>Envoyer directement à l'équipe sur WhatsApp (+212 699 245 542)</span>
                </div>
                <p className="text-xs text-[#2d522f] leading-relaxed">
                  Cliquez sur le bouton vert ci-dessous pour transmettre automatiquement votre bilan complet par message à notre équipe.
                </p>

                <a
                  href={buildWhatsAppUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm font-cinzel border-2 border-[#128C7E] shadow-[0_3px_0_#128C7E] active:translate-y-0.5 transition-all flex items-center justify-center gap-2 text-center mt-1 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Envoyer mon bilan sur WhatsApp (+212 699 245 542)</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full mt-3">
                {onLaunchGame && (
                  <button
                    type="button"
                    onClick={onLaunchGame}
                    className="flex-1 py-3 px-5 rounded-2xl bg-[#2d6a4f] hover:bg-[#1b4332] text-[#fbf7ee] font-black text-sm font-cinzel border-2 border-[#1b4332] shadow-[0_3px_0_#1b4332] active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Gamepad2 className="w-4 h-4" />
                    <span>Lancer le Jeu (Web)</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleRestart}
                  className="py-3 px-4 rounded-2xl bg-[#ebdfc8] hover:bg-[#ebdcc4] text-[#7a5332] font-bold text-xs sm:text-sm font-cinzel border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Nouveau retour</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => downloadJsonBackup(formData)}
                  className="text-[11px] text-[#8c6b4e] hover:text-[#3a2312] underline font-medium cursor-pointer"
                >
                  Télécharger une copie JSON sur mon appareil (optionnel)
                </button>
              </div>
            </div>
          ) : (
            /* 6 Interactive Steps */
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* SECTION 1: INFO */}
              {currentStep === 0 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                  <div className="border-b border-[#3a2312]/20 pb-2">
                    <h3 className="text-base sm:text-lg font-black text-[#3a2312] font-cinzel flex items-center gap-2">
                      <span>1. À propos de vous</span>
                    </h3>
                    <p className="text-xs text-[#7a5332]">Commençons par faire connaissance avec le joueur.</p>
                  </div>

                  {/* Nom */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312]">
                      Quel est votre prénom ou pseudo ? <span className="text-[#8c6b4e] font-normal">(optionnel)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="Ex : Rayan, Safia, Othmân..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f3ebd9] border-2 border-[#3a2312] text-sm text-[#3a2312] placeholder-[#a68a70] focus:outline-hidden focus:border-[#d97c27] shadow-inner transition-colors"
                    />
                  </div>

                  {/* Âge */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312] flex items-center gap-1">
                      <span>Âge du joueur</span>
                      <span className="text-[#d97c27] font-black">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { id: '5-8', label: '5-8 ans' },
                        { id: '9-12', label: '9-12 ans' },
                        { id: '13-17', label: '13-17 ans' },
                        { id: '18+', label: '18 ans ou +' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('age', item.id)}
                          className={`py-2.5 px-3 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
                            formData.age === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Première fois */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312]">
                      C'est votre première fois sur NOUR ?
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { id: 'oui', label: '✨ Oui, première fois' },
                        { id: 'non', label: '🔁 Non, j\'ai déjà joué' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('firstTime', item.id)}
                          className={`py-2.5 px-3 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
                            formData.firstTime === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 2: GAMEPLAY */}
              {currentStep === 1 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                  <div className="border-b border-[#3a2312]/20 pb-2">
                    <h3 className="text-base sm:text-lg font-black text-[#3a2312] font-cinzel flex items-center gap-2">
                      <span>2. Expérience du jeu</span>
                    </h3>
                    <p className="text-xs text-[#7a5332]">Votre ressenti sur le déroulement de la partie.</p>
                  </div>

                  {/* Terminé Ch. 1 */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312] flex items-center gap-1">
                      <span>Avez-vous terminé le Chapitre 1 entièrement ?</span>
                      <span className="text-[#d97c27] font-black">*</span>
                    </label>
                    <div className="flex flex-col gap-2">
                      {[
                        { id: 'oui', label: '✅ Oui, complètement jusqu\'à la fin' },
                        { id: 'partiel', label: '⏳ Partiellement (en cours de route)' },
                        { id: 'non', label: '🛑 Non, j\'ai arrêté avant' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('completed', item.id)}
                          className={`py-2.5 px-4 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer text-left flex items-center justify-between ${
                            formData.completed === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          <span>{item.label}</span>
                          {formData.completed === item.id && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Durée */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312]">
                      Combien de temps avez-vous joué environ ?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: '15', label: '⏱️ Moins de 15 min' },
                        { id: '30', label: '⏱️ 15 à 30 minutes' },
                        { id: '60', label: '⏱️ 30 à 60 minutes' },
                        { id: '90', label: '⏱️ Plus de 1 heure' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('duration', item.id)}
                          className={`py-2 px-3 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
                            formData.duration === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scène ralentie */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312]">
                      Quelle scène vous a le plus ralenti ou semblé longue ?
                    </label>
                    <input
                      type="text"
                      value={formData.slowScene}
                      onChange={(e) => updateField('slowScene', e.target.value)}
                      placeholder="Ex : Le carrefour du poteau, les quiz, le combat final..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f3ebd9] border-2 border-[#3a2312] text-sm text-[#3a2312] placeholder-[#a68a70] focus:outline-hidden focus:border-[#d97c27] shadow-inner"
                    />
                  </div>
                </div>
              )}

              {/* SECTION 3: ACTIONS RÉELLES */}
              {currentStep === 2 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                  <div className="border-b border-[#3a2312]/20 pb-2">
                    <h3 className="text-base sm:text-lg font-black text-[#3a2312] font-cinzel flex items-center gap-2">
                      <span>3. Actions dans la vraie vie</span>
                    </h3>
                    <p className="text-xs text-[#7a5332]">Le cœur pédagogique de NOUR : avez-vous réalisé les gestes ?</p>
                  </div>

                  {/* Scène 1 : Lit */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312]">
                      🛏️ Scène 1 : Avez-vous vraiment rangé votre lit ?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'oui', label: 'Oui, tout à fait' },
                        { id: 'partiel', label: 'En partie' },
                        { id: 'non', label: 'Non' },
                        { id: 'nspp', label: 'Pas applicable' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('action1', item.id)}
                          className={`py-2 px-2.5 rounded-xl border-2 font-bold text-xs transition-all cursor-pointer text-center ${
                            formData.action1 === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scène 2 : Bismillah */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312]">
                      💧 Scène 2 : Avez-vous bu l'eau avec « Bismillâh » ?
                    </label>
                    <div className="flex flex-col gap-2">
                      {[
                        { id: 'oui', label: 'Oui, assis en disant Bismillâh' },
                        { id: 'partiellement', label: 'Oui, mais sans le rituel complet' },
                        { id: 'non', label: 'Non, j\'ai juste validé dans le jeu' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('action2', item.id)}
                          className={`py-2 px-3 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer text-left ${
                            formData.action2 === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scène 3 : Saluer */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312]">
                      🤝 Scène 3 : Avez-vous salué un proche ou voisin ?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'oui', label: 'Oui, avec le sourire' },
                        { id: 'non', label: 'Non, pas encore' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('action3', item.id)}
                          className={`py-2 px-3 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
                            formData.action3 === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Clarté validation */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312] flex items-center gap-1">
                      <span>Comment validez-vous les actions ? Était-ce clair ?</span>
                      <span className="text-[#d97c27] font-black">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'tres-clair', label: 'Très clair 👍' },
                        { id: 'ok', label: 'C\'était ok 👌' },
                        { id: 'confus', label: 'Confus ❓' },
                        { id: 'nspp', label: 'Je ne sais pas' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('validation', item.id)}
                          className={`py-2.5 px-2 rounded-xl border-2 font-bold text-xs transition-all cursor-pointer text-center ${
                            formData.validation === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 4: UX & DESIGN */}
              {currentStep === 3 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                  <div className="border-b border-[#3a2312]/20 pb-2">
                    <h3 className="text-base sm:text-lg font-black text-[#3a2312] font-cinzel flex items-center gap-2">
                      <span>4. Interface & Graphismes</span>
                    </h3>
                    <p className="text-xs text-[#7a5332]">Votre appréciation du design et de l'ergonomie.</p>
                  </div>

                  {/* Quiz difficulté */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312] flex items-center gap-1">
                      <span>Les quiz d'apprentissage : difficultés ?</span>
                      <span className="text-[#d97c27] font-black">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'trop-facile', label: 'Trop faciles' },
                        { id: 'ok', label: 'Bien équilibrés ✨' },
                        { id: 'trop-dur', label: 'Trop difficiles' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('quiz', item.id)}
                          className={`py-2.5 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
                            formData.quiz === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Note Pixel-art / Design (1 à 5) */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312] flex items-center justify-between">
                      <span>Le pixel-art et les décors vous ont plu ?</span>
                      <span className="text-xs text-[#d97c27] font-black font-cinzel">{formData.design} / 5</span>
                    </label>
                    <div className="flex justify-between gap-2">
                      {['1', '2', '3', '4', '5'].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => updateField('design', val)}
                          className={`flex-1 py-3 rounded-2xl border-2 font-black text-sm sm:text-base transition-all cursor-pointer text-center flex flex-col items-center gap-0.5 ${
                            formData.design === val
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_4px_0_#3a2312] -translate-y-1'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          <span>{val}</span>
                          <span className="text-[10px] opacity-70">★</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-[11px] text-[#8c6b4e] px-1 font-medium">
                      <span>1 = Pas du tout</span>
                      <span>5 = Coup de cœur !</span>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312] flex items-center gap-1">
                      <span>La navigation était-elle fluide ?</span>
                      <span className="text-[#d97c27] font-black">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'fluide', label: 'Fluide 🚀' },
                        { id: 'ok', label: 'Acceptable 👍' },
                        { id: 'confus', label: 'Confuse 😕' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('navigation', item.id)}
                          className={`py-2.5 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
                            formData.navigation === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 5: SENTIMENT GÉNÉRAL */}
              {currentStep === 4 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                  <div className="border-b border-[#3a2312]/20 pb-2">
                    <h3 className="text-base sm:text-lg font-black text-[#3a2312] font-cinzel flex items-center gap-2">
                      <span>5. Sentiment général</span>
                    </h3>
                    <p className="text-xs text-[#7a5332]">Ce que vous avez ressenti en jouant.</p>
                  </div>

                  {/* Sentiment final */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312] flex items-center gap-1">
                      <span>À la fin du Chapitre 1, vous vous sentiez... ?</span>
                      <span className="text-[#d97c27] font-black">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'fier', label: 'Fier(e) 🌟' },
                        { id: 'satisfait', label: 'Satisfait(e) 😊' },
                        { id: 'neutre', label: 'Neutre 😐' },
                        { id: 'decu', label: 'Déçu(e) 😞' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('feeling', item.id)}
                          className={`py-2.5 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
                            formData.feeling === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* NPS Recommandation (0-10) */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312] flex items-center justify-between">
                      <span>Recommanderiez-vous NOUR à un ami ?</span>
                      <span className="text-xs text-[#d97c27] font-black font-cinzel">{formData.recommend} / 10</span>
                    </label>
                    <div className="grid grid-cols-6 sm:grid-cols-11 gap-1 sm:gap-1.5">
                      {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((score) => (
                        <button
                          key={score}
                          type="button"
                          onClick={() => updateField('recommend', score)}
                          className={`py-2 rounded-lg border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
                            formData.recommend === score
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-[11px] text-[#8c6b4e] px-1 font-medium">
                      <span>0 = Pas du tout</span>
                      <span>10 = Absolument !</span>
                    </div>
                  </div>

                  {/* Ce qui a plu */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312]">
                      Ce qui vous a le PLUS plu :
                    </label>
                    <textarea
                      value={formData.liked}
                      onChange={(e) => updateField('liked', e.target.value)}
                      rows={2}
                      placeholder="Ex : Les dialogues avec Noura, les choix moraux, la musique..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f3ebd9] border-2 border-[#3a2312] text-sm text-[#3a2312] placeholder-[#a68a70] focus:outline-hidden focus:border-[#d97c27] shadow-inner resize-none"
                    />
                  </div>

                  {/* Ce qui a frustré */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312]">
                      Ce qui vous a frustré ou déçu :
                    </label>
                    <textarea
                      value={formData.disliked}
                      onChange={(e) => updateField('disliked', e.target.value)}
                      rows={2}
                      placeholder="Soyez honnête, vos critiques nous aident à progresser !"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f3ebd9] border-2 border-[#3a2312] text-sm text-[#3a2312] placeholder-[#a68a70] focus:outline-hidden focus:border-[#d97c27] shadow-inner resize-none"
                    />
                  </div>
                </div>
              )}

              {/* SECTION 6: POUR LA SUITE */}
              {currentStep === 5 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                  <div className="border-b border-[#3a2312]/20 pb-2">
                    <h3 className="text-base sm:text-lg font-black text-[#3a2312] font-cinzel flex items-center gap-2">
                      <span>6. Pour la suite de l'aventure</span>
                    </h3>
                    <p className="text-xs text-[#7a5332]">Votre envie de poursuivre et vos idées.</p>
                  </div>

                  {/* Chapitre 2 */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312] flex items-center gap-1">
                      <span>Voudriez-vous continuer vers le Chapitre 2 ?</span>
                      <span className="text-[#d97c27] font-black">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'oui', label: 'Oui, absolument ! 🔥' },
                        { id: 'peut-etre', label: 'Peut-être 🤔' },
                        { id: 'non', label: 'Non ❌' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateField('nextChapter', item.id)}
                          className={`py-2.5 px-2 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
                            formData.nextChapter === item.id
                              ? 'bg-[#d97c27] text-[#1a1209] border-[#3a2312] shadow-[0_3px_0_#3a2312] -translate-y-0.5'
                              : 'bg-[#f3ebd9] text-[#3a2312] border-[#3a2312]/60 hover:border-[#3a2312] hover:bg-[#ebdfc8]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312]">
                      Vos suggestions ou idées pour améliorer NOUR :
                    </label>
                    <textarea
                      value={formData.suggestions}
                      onChange={(e) => updateField('suggestions', e.target.value)}
                      rows={3}
                      placeholder="Des idées de quêtes réelles, d'améliorations sonores, de dialogues..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f3ebd9] border-2 border-[#3a2312] text-sm text-[#3a2312] placeholder-[#a68a70] focus:outline-hidden focus:border-[#d97c27] shadow-inner resize-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-bold text-[#3a2312]">
                      Votre adresse email <span className="text-[#8c6b4e] font-normal">(optionnel, pour être prévenu de la sortie du Ch. 2)</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="votre.email@exemple.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f3ebd9] border-2 border-[#3a2312] text-sm text-[#3a2312] placeholder-[#a68a70] focus:outline-hidden focus:border-[#d97c27] shadow-inner"
                    />
                  </div>
                </div>
              )}

              {/* Error Message */}
              {errorMsg && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-100/90 border-2 border-red-800/40 text-red-900 text-xs font-bold animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-700" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Stepper Navigation Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2 border-t-2 border-[#3a2312]/20">
                {currentStep > 0 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="py-2.5 px-4 rounded-xl bg-[#ebdfc8] hover:bg-[#ebdcc4] text-[#3a2312] font-bold text-xs sm:text-sm font-cinzel border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Précédent</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="py-2.5 px-6 rounded-xl bg-[#d97c27] hover:bg-[#e69138] text-[#1a1209] font-black text-xs sm:text-sm font-cinzel border-2 border-[#3a2312] shadow-[0_4px_0_#3a2312] active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer ml-auto"
                  >
                    <span>Suivant</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3 px-6 sm:px-7 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm font-cinzel border-2 border-[#128C7E] shadow-[0_4px_0_#128C7E] active:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer ml-auto disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Préparation de l'envoi...</span>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Envoyer via WhatsApp ✓</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
