import { Beat, DialogueChoice, Quiz, RealAction, Scene } from '../types';
import { Language } from '../i18n/translations';
import { CHAPTER_1_TRANSLATIONS } from '../i18n/chapter1Translations';

export const getLocalizedBeatText = (beat: Beat, language: Language = 'fr'): string => {
  if (language === 'fr') {
    return beat.text || '';
  }

  const langSet = CHAPTER_1_TRANSLATIONS[language];
  if (langSet && langSet.beats && langSet.beats[beat.id]) {
    return langSet.beats[beat.id];
  }

  return beat.text || '';
};

export const stripLeadingEmoji = (text: string): string => {
  if (!text) return '';
  return text.replace(/^[\p{Extended_Pictographic}\uFE0F\u200D\u20E3\s]+/u, '').trim();
};

export const getLocalizedChoiceLabel = (choice: DialogueChoice, language: Language = 'fr'): string => {
  let label = choice.label;
  if (language !== 'fr') {
    const langSet = CHAPTER_1_TRANSLATIONS[language];
    if (langSet && langSet.choices && langSet.choices[choice.id]) {
      label = langSet.choices[choice.id].label;
    }
  }

  return stripLeadingEmoji(label);
};

export const getLocalizedQuiz = (quiz: Quiz, language: Language = 'fr'): Quiz => {
  if (language === 'fr') {
    return quiz;
  }

  const langSet = CHAPTER_1_TRANSLATIONS[language];
  if (!langSet || !langSet.quizzes || !langSet.quizzes[quiz.id]) {
    return quiz;
  }

  const localizedData = langSet.quizzes[quiz.id];
  return {
    ...quiz,
    question: localizedData.question || quiz.question,
    options: quiz.options.map((opt) => ({
      ...opt,
      text: localizedData.options[opt.id] || opt.text
    })),
    explanation: localizedData.explanation || quiz.explanation,
    theologicalNote: localizedData.theologicalNote || quiz.theologicalNote,
    reference: quiz.reference
      ? {
          ...quiz.reference,
          citationText: localizedData.citationText || quiz.reference.citationText
        }
      : undefined
  };
};

export const getLocalizedRealAction = (action: RealAction, language: Language = 'fr'): RealAction => {
  if (language === 'fr') {
    return action;
  }

  const langSet = CHAPTER_1_TRANSLATIONS[language];
  if (!langSet || !langSet.realActions || !langSet.realActions[action.id]) {
    return action;
  }

  const localizedData = langSet.realActions[action.id];
  return {
    ...action,
    title: localizedData.title || action.title,
    instruction: localizedData.instruction || action.instruction,
    subtext: localizedData.subtext || action.subtext,
    reflectionPrompt: localizedData.reflectionPrompt || action.reflectionPrompt
  };
};

export const getLocalizedScene = (
  scene: Scene,
  language: Language = 'fr'
): { title: string; subtitle?: string; description?: string } => {
  if (language === 'fr') {
    return {
      title: scene.title,
      subtitle: scene.subtitle,
      description: scene.description
    };
  }

  const langSet = CHAPTER_1_TRANSLATIONS[language];
  if (langSet && langSet.scenes && langSet.scenes[scene.id]) {
    return {
      title: langSet.scenes[scene.id].title || scene.title,
      subtitle: langSet.scenes[scene.id].subtitle || scene.subtitle,
      description: langSet.scenes[scene.id].description || scene.description
    };
  }

  return {
    title: scene.title,
    subtitle: scene.subtitle,
    description: scene.description
  };
};
