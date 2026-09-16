import { Language } from './translations';

export interface GameUI {
  hud: {
    level: string;
    faithXp: string;
    waswasGauge: string;
    day: string;
    streak: string;
    soundOn: string;
    soundOff: string;
    menu: string;
    language: string;
  };
  nav: {
    adventure: string;
    map: string;
    quests: string;
    inventory: string;
    profile: string;
  };
  dialogue: {
    continue: string;
    skip: string;
    history: string;
    choicePrompt: string;
    waswasWarning: string;
    pontDeNourBadge: string;
    speakerOthman: string;
    speakerNoura: string;
    speakerWaswas: string;
    speakerSage: string;
    speakerYouth: string;
    speakerMerchant: string;
    speakerChild: string;
    speakerNarration: string;
  };
  actions: {
    modalTitle: string;
    realWorldMission: string;
    instructionHeader: string;
    reflectionHeader: string;
    validateButton: string;
    validatedBadge: string;
    xpEarned: string;
    close: string;
  };
  quiz: {
    modalTitle: string;
    questionHeader: string;
    submitAnswer: string;
    correctAnswer: string;
    wrongAnswer: string;
    explanationHeader: string;
    continue: string;
    tryAgain: string;
  };
  climax: {
    battleTitle: string;
    subtitle: string;
    mistOpacity: string;
    currentVirtue: string;
    victoryHeader: string;
    victoryDesc: string;
    continueJourney: string;
  };
  chapterEnd: {
    congratsTitle: string;
    chapterCompleted: string;
    summaryTitle: string;
    continueToNext: string;
    replayChapter: string;
    backToVillage: string;
  };
  history: {
    title: string;
    empty: string;
    close: string;
  };
}

export const gameTranslations: Record<Language, GameUI> = {
  fr: {
    hud: {
      level: 'Niveau',
      faithXp: 'Nour / Lumière',
      waswasGauge: 'Pression de l\'Ombre',
      day: 'Jour',
      streak: 'Série',
      soundOn: 'Audio Actif',
      soundOff: 'Audio Coupé',
      menu: 'Menu',
      language: 'Langue'
    },
    nav: {
      adventure: 'Aventure',
      map: 'Chemin',
      quests: 'Quêtes',
      inventory: 'Inventaire',
      profile: 'Profil'
    },
    dialogue: {
      continue: 'Continuer',
      skip: 'Passer',
      history: 'Historique',
      choicePrompt: 'Faites votre choix avec sincérité :',
      waswasWarning: '⚠️ Murmure du Waswâs',
      pontDeNourBadge: '✨ Pont de Nour',
      speakerOthman: 'Othmân',
      speakerNoura: 'Noura',
      speakerWaswas: 'Le Waswâs',
      speakerSage: 'Le Sage',
      speakerYouth: 'Jeune du Village',
      speakerMerchant: 'Marchand',
      speakerChild: 'Enfant',
      speakerNarration: 'Récit'
    },
    actions: {
      modalTitle: 'Quête Réelle • Éclat du Monde',
      realWorldMission: 'Une action dans ta vraie vie apporte de la lumière à ton voyage :',
      instructionHeader: 'Invitation à agir dans le réel :',
      reflectionHeader: 'Méditation intérieure :',
      validateButton: 'J’ai accompli cette action dans la vraie vie !',
      validatedBadge: '✓ Action validée avec succès',
      xpEarned: '+{xp} Nour obtenus !',
      close: 'Fermer'
    },
    quiz: {
      modalTitle: 'Épreuve de Sagesse & Hadith',
      questionHeader: 'Question :',
      submitAnswer: 'Valider ma réponse',
      correctAnswer: '✨ Excellente réponse !',
      wrongAnswer: 'Ce n’est pas tout à fait cela. Réfléchis encore :',
      explanationHeader: 'Enseignement prophétique :',
      continue: 'Continuer l’aventure',
      tryAgain: 'Réessayer'
    },
    climax: {
      battleTitle: 'Le Combat de l’Âme : Le Sommet du Chapitre 1',
      subtitle: 'Dissipez les 5 couches de brume du Waswâs par les vertus du cœur.',
      mistOpacity: 'Brume du Waswâs :',
      currentVirtue: 'Étape spirituelle :',
      victoryHeader: '✨ Lumière & Sérénité Restaurées !',
      victoryDesc: 'Le Waswâs s’est évaporé face à l’Istiʿādhah et la pureté d’intention.',
      continueJourney: 'Poursuivre vers l’Aube'
    },
    chapterEnd: {
      congratsTitle: 'Félicitations !',
      chapterCompleted: 'Chapitre 1 Complété avec Succès',
      summaryTitle: 'Ce que ton cœur a acquis :',
      continueToNext: 'Découvrir la suite au Poteau',
      replayChapter: 'Rejouer le Chapitre 1',
      backToVillage: 'Retour au Village'
    },
    history: {
      title: 'Historique des Dialogues',
      empty: 'Aucun dialogue enregistré pour le moment.',
      close: 'Fermer'
    }
  },
  en: {
    hud: {
      level: 'Level',
      faithXp: 'Nour / Light',
      waswasGauge: 'Shadow Pressure',
      day: 'Day',
      streak: 'Streak',
      soundOn: 'Audio On',
      soundOff: 'Audio Off',
      menu: 'Menu',
      language: 'Language'
    },
    nav: {
      adventure: 'Adventure',
      map: 'The Path',
      quests: 'Quests',
      inventory: 'Inventory',
      profile: 'Profile'
    },
    dialogue: {
      continue: 'Continue',
      skip: 'Skip',
      history: 'History',
      choicePrompt: 'Make your choice with a sincere heart:',
      waswasWarning: '⚠️ Waswas Whisper',
      pontDeNourBadge: '✨ Bridge of Nour',
      speakerOthman: 'Othman',
      speakerNoura: 'Noura',
      speakerWaswas: 'The Waswas',
      speakerSage: 'The Elder',
      speakerYouth: 'Village Youth',
      speakerMerchant: 'Merchant',
      speakerChild: 'Child',
      speakerNarration: 'Narrator'
    },
    actions: {
      modalTitle: 'Life Quest • World Glow',
      realWorldMission: 'An action in your real life brings light to your journey:',
      instructionHeader: 'Invitation to act in real life:',
      reflectionHeader: 'Heart Contemplation:',
      validateButton: 'I did it just now in real life!',
      validatedBadge: '✓ Action Successfully Completed',
      xpEarned: '+{xp} Nour Earned!',
      close: 'Close'
    },
    quiz: {
      modalTitle: 'Wisdom & Hadith Challenge',
      questionHeader: 'Question:',
      submitAnswer: 'Confirm My Answer',
      correctAnswer: '✨ Excellent Answer!',
      wrongAnswer: 'Not quite. Reflect once more:',
      explanationHeader: 'Prophetic Wisdom:',
      continue: 'Continue the Journey',
      tryAgain: 'Try Again'
    },
    climax: {
      battleTitle: 'Battle of the Soul: Chapter 1 Summit',
      subtitle: 'Dispel the 5 layers of Waswas fog using virtues of the heart.',
      mistOpacity: 'Waswas Fog Level:',
      currentVirtue: 'Spiritual Step:',
      victoryHeader: '✨ Light & Serenity Restored!',
      victoryDesc: 'The Waswas has vanished before Istiʿādhah and pure intention.',
      continueJourney: 'Step forward into the Dawn'
    },
    chapterEnd: {
      congratsTitle: 'Congratulations!',
      chapterCompleted: 'Chapter 1 Successfully Completed',
      summaryTitle: 'Virtues Your Heart Has Gained:',
      continueToNext: 'Discover the Next Chapter at the Signpost',
      replayChapter: 'Replay Chapter 1',
      backToVillage: 'Return to Village'
    },
    history: {
      title: 'Dialogue Log',
      empty: 'No dialogues recorded yet.',
      close: 'Close'
    }
  },
  ar: {
    hud: {
      level: 'المستوى',
      faithXp: 'نور / إشراق',
      waswasGauge: 'ضغط الوسواس',
      day: 'اليوم',
      streak: 'التتابع',
      soundOn: 'الصوت مفعّل',
      soundOff: 'الصوت مغلق',
      menu: 'القائمة',
      language: 'اللغة'
    },
    nav: {
      adventure: 'المغامرة',
      map: 'الطريق',
      quests: 'المهمات',
      inventory: 'الحقيبة',
      profile: 'الملف'
    },
    dialogue: {
      continue: 'متابعة',
      skip: 'تخطي',
      history: 'السجل',
      choicePrompt: 'اختر بنيّة صادقة وموقف نبيل :',
      waswasWarning: '⚠️ وسوسة خفية',
      pontDeNourBadge: '✨ جسر النور',
      speakerOthman: 'عثمان',
      speakerNoura: 'نورة',
      speakerWaswas: 'الوسواس',
      speakerSage: 'الحكيم',
      speakerYouth: 'فتى القرية',
      speakerMerchant: 'التاجر',
      speakerChild: 'الطفل',
      speakerNarration: 'الراوي'
    },
    actions: {
      modalTitle: 'مهمة واقعية • إشراق العالم',
      realWorldMission: 'عمل في واقعك يضفي نوراً على رحلتك :',
      instructionHeader: 'دعوة للعمل في الواقع :',
      reflectionHeader: 'تأمل قلبي :',
      validateButton: 'لقد قمت بهذا العمل الطيب في الواقع !',
      validatedBadge: '✓ تم إنجاز العمل بنجاح',
      xpEarned: '+{xp} نور مضاف !',
      close: 'إغلاق'
    },
    quiz: {
      modalTitle: 'اختبار الحكمة والحديث الشريف',
      questionHeader: 'السؤال :',
      submitAnswer: 'تأكيد الإجابة',
      correctAnswer: '✨ أحسنت! إجابة صحيحة وموفقة',
      wrongAnswer: 'ليس هذا هو الجواب الدقيق، تدبر وتأمل ثانية :',
      explanationHeader: 'الفائدة النبوية والتربوية :',
      continue: 'متابعة المغامرة',
      tryAgain: 'حاول مجدداً'
    },
    climax: {
      battleTitle: 'معركة تزكية النفس : ذروة الفصل الأول',
      subtitle: 'بدد طبقات غمام الوسواس الخمس بأنوار الإيمان والاستعاذة بالله.',
      mistOpacity: 'كثافة غمامة الوسواس :',
      currentVirtue: 'المقام القلبي الحالي :',
      victoryHeader: '✨ أشرق نور الطمأنينة واليقين !',
      victoryDesc: 'تبددت وساوس الشك والخوف بفضل الاستعاذة بالله وصدق النية.',
      continueJourney: 'المضي نحو فجر اليوم الجديد'
    },
    chapterEnd: {
      congratsTitle: 'مبارك عليك !',
      chapterCompleted: 'تم إتمام الفصل الأول بنجاح وتوفيق',
      summaryTitle: 'ما اكتسبه قلبك في هذه المرحلة :',
      continueToNext: 'استكشاف الفصل التالي عند مفترق الطرق',
      replayChapter: 'إعادة الفصل الأول',
      backToVillage: 'العودة لمفترق القرية'
    },
    history: {
      title: 'سجل الحوارات',
      empty: 'لا توجد حوارات مسجلة بعد.',
      close: 'إغلاق'
    }
  }
};
