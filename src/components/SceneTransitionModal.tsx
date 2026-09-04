import React from 'react';
import { Scene, Quiz, RealAction } from '../types';
import { QUIZZES, REAL_ACTIONS } from '../data/chapter1';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  BookOpen,
  Award,
  Compass
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import { CustomAssetsConfig } from '../utils/assets';

interface SceneTransitionModalProps {
  completedScene: Scene;
  nextScene?: Scene;
  customAssets?: CustomAssetsConfig;
  onProceedToNextScene: () => void;
  onReplayScene: () => void;
}

interface SceneValidationDetail {
  conceptTitle: string;
  conceptKey: string;
  keyLearning: string;
  quizId?: string;
  actionId?: string;
  choiceSummary?: string;
}

// Scene-specific validation summaries
const SCENE_VALIDATION_DETAILS: Record<number, SceneValidationDetail> = {
  1: {
    conceptTitle: 'Le Premier Pas & La Clarté',
    conceptKey: 'action_lit',
    keyLearning: 'Les grandes habitudes débutent par des actes simples et réguliers.',
    actionId: 'action_lit'
  },
  2: {
    conceptTitle: 'Le Choix du Chemin & L’Orientation',
    conceptKey: 'choix_chemin',
    keyLearning: 'Avancer avec réflexion et humilité, un pas à la fois sans chercher à tout contrôler d’avance.',
    choiceSummary: 'Orientation choisie avec détermination pour aller vers les autres.'
  },
  3: {
    conceptTitle: 'Istiʿādhah — Demande de Refuge',
    conceptKey: 'istiadhah',
    keyLearning: 'Face aux doutes intérieurs, se rappeler d’Allah recentre le cœur et dissipe la peur.',
    quizId: 'quiz_istiadhah'
  },
  4: {
    conceptTitle: 'Taʿāruf — L’Entre-connaissance',
    conceptKey: 'taaruf',
    keyLearning: 'Aller vers autrui avec bienveillance et respecter la dignité de chacun.',
    quizId: 'quiz_taaruf',
    actionId: 'action_parler'
  },
  5: {
    conceptTitle: 'Adab du Langage — La Sagesse des Mots',
    conceptKey: 'adab',
    keyLearning: 'Parler en bien ou garder un silence bienveillant et constructif.',
    quizId: 'quiz_adab'
  },
  6: {
    conceptTitle: 'Sabr — La Patience Persévérante',
    conceptKey: 'sabr',
    keyLearning: 'Accueillir les refus et obstacles sans amertume, persévérer sans s’emporter.',
    quizId: 'quiz_sabr'
  },
  7: {
    conceptTitle: 'Niyyah — La Pureté de l’Intention',
    conceptKey: 'niyyah',
    keyLearning: 'La valeur de l’acte réside dans l’intention sincère pour Allah, sans vanité.',
    quizId: 'quiz_niyyah',
    actionId: 'action_geste'
  },
  8: {
    conceptTitle: 'Shukr — La Gratitude Sincère',
    conceptKey: 'shukr',
    keyLearning: 'Reconnaître les bienfaits d’Allah avec gratitude nourrit l’abondance spirituelle.',
    quizId: 'quiz_shukr'
  }
};

export const SceneTransitionModal: React.FC<SceneTransitionModalProps> = ({
  completedScene,
  nextScene,
  customAssets,
  onProceedToNextScene,
  onReplayScene
}) => {
  const details: SceneValidationDetail = SCENE_VALIDATION_DETAILS[completedScene.id] || {
    conceptTitle: completedScene.title,
    conceptKey: 'generic',
    keyLearning: 'Leçon validée avec succès sur le chemin de la sagesse.'
  };

  const quiz: Quiz | undefined = details.quizId ? QUIZZES[details.quizId] : undefined;
  const action: RealAction | undefined = details.actionId ? REAL_ACTIONS[details.actionId] : undefined;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in zoom-in-95 duration-200 select-none">
      <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-3xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-[0_6px_0_#3a2312] overflow-hidden relative">
        {/* Header */}
        <div className="p-3.5 sm:p-4 border-b-2 border-[#3a2312] bg-[#f3ebd9] flex items-center justify-between shrink-0 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-[#ebdfc8] border-2 border-[#3a2312] text-[#3a2312] flex items-center justify-center shadow-[0_2px_0_#3a2312]">
              <Award className="w-5 h-5 text-[#d97c27]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-[#8c5a2b] uppercase tracking-widest font-cinzel">
                  Validation de Scène {completedScene.id}/9
                </span>
                <span className="text-[9px] bg-[#ebf5e9] text-[#2d522f] border border-[#4a804d] px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3 text-[#4a804d]" /> Validé
                </span>
              </div>
              <h2 className="text-xs sm:text-sm font-bold text-[#3a2312] font-cinzel">
                {completedScene.title} {completedScene.subtitle && `— ${completedScene.subtitle}`}
              </h2>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 flex flex-col gap-2.5 custom-scrollbar">
          {/* Main Key Learning Card */}
          <div className="p-3.5 rounded-2xl bg-[#f3ebd9] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 text-[#d97c27]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold font-cinzel uppercase tracking-wider">
                Enseignement & Acquis Validés
              </span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#3a2312] font-cinzel">
              {details.conceptTitle}
            </h3>
            <p className="text-xs text-[#6b4724] leading-relaxed font-sans">
              « {details.keyLearning} »
            </p>
          </div>

          {/* Quiz Validated Card (if applicable) */}
          {quiz && (
            <div className="p-3 rounded-2xl bg-[#f3ebd9] border-2 border-[#3a2312] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#4a804d]" />
                  <span className="text-xs font-bold text-[#3a2312] font-cinzel">
                    Épreuve du Savoir : {quiz.topic}
                  </span>
                </div>
                <span className="text-[9px] text-[#8c5a2b] bg-[#ebdfc8] px-2 py-0.5 rounded border border-[#3a2312] font-mono">
                  {quiz.reference.reference}
                </span>
              </div>

              <div className="bg-[#fbf7ee] p-2.5 rounded-xl border border-[#3a2312] flex flex-col gap-1">
                <span className="text-[10px] text-[#8c5a2b] font-bold">Question :</span>
                <p className="text-xs text-[#3a2312] font-medium">« {quiz.question} »</p>
                <div className="mt-1 pt-1 border-t border-[#ebdcc4] flex items-center gap-1.5 text-xs text-[#2d522f] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4a804d] shrink-0" />
                  <span>Réponse : {quiz.options.find((o) => o.id === quiz.correctOptionId)?.text}</span>
                </div>
              </div>

              {quiz.reference.arabic && (
                <p className="text-right text-base text-[#3a2312] font-amiri dir-rtl mt-0.5">
                  {quiz.reference.arabic}
                </p>
              )}
            </div>
          )}

          {/* Real Action / Choice Card (if applicable) */}
          {action && (
            <div className="p-3 rounded-2xl bg-[#ebf5e9] border-2 border-[#4a804d] flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#4a804d] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#2d522f] font-cinzel">
                    Action Concrète Validée
                  </span>
                  <span className="text-[10px] text-[#d97c27] bg-[#fbf7ee] px-1.5 py-0.2 rounded border border-[#3a2312] font-mono font-bold">
                    +{action.xpReward} XP
                  </span>
                </div>
                <span className="text-xs font-bold text-[#2d522f]">{action.title}</span>
                <p className="text-[11px] text-[#4a804d]">{action.instruction}</p>
              </div>
            </div>
          )}

          {details.choiceSummary && (
            <div className="p-2.5 rounded-2xl bg-[#ebdfc8] border border-[#3a2312] flex items-center gap-2 text-xs text-[#3a2312]">
              <Compass className="w-4 h-4 text-[#d97c27] shrink-0" />
              <span>{details.choiceSummary}</span>
            </div>
          )}

          {/* Next Scene Preview */}
          {nextScene && (
            <div className="p-2.5 bg-[#ebdfc8] rounded-2xl border-2 border-[#3a2312] flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-[#8c5a2b] uppercase font-cinzel">
                  Étape Suivante
                </span>
                <span className="text-xs font-bold text-[#3a2312] font-cinzel">
                  Scène {nextScene.id} : {nextScene.title} {nextScene.subtitle && `(${nextScene.subtitle})`}
                </span>
              </div>
              <span className="text-[10px] text-[#d97c27] font-bold">{nextScene.location}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-3 sm:p-3.5 border-t-2 border-[#3a2312] bg-[#f3ebd9] flex items-center justify-between gap-2 shrink-0 z-10">
          <button
            onClick={() => {
              soundManager.playSelect();
              onReplayScene();
            }}
            className="px-3 py-2 rounded-xl bg-[#ebdfc8] hover:bg-[#ebdcc4] text-[#3a2312] border-2 border-[#3a2312] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-[0_2px_0_#3a2312]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Relire</span>
          </button>

          <button
            onClick={() => {
              soundManager.playSelect();
              onProceedToNextScene();
            }}
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#e69138] hover:bg-[#f0a04b] text-[#3a2312] font-black text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-[#3a2312] shadow-[0_3px_0_#3a2312] transition-all cursor-pointer font-cinzel uppercase tracking-wider"
          >
            <span>
              {nextScene
                ? `Continuer sur la Carte`
                : 'Voir le Bilan du Chapitre'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
