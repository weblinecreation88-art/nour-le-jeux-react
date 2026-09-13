import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, BookOpen, Sun, Moon } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { PIXEL_ASSETS, CustomAssetsConfig } from '../utils/assets';
import { useLanguage } from '../context/LanguageContext';
import { gameTranslations } from '../i18n/gameTranslations';
import { CharacterTraits } from '../types';
import { getWaswasAdaptiveAttack } from '../utils/characterTraits';

interface DuelRound {
  id: string;
  whisper: string;
  whisperSubtitle: string;
  arabic?: string;
  options: {
    id: 'A' | 'B' | 'C';
    text: string;
    concept: string;
    isCorrect: boolean;
    feedback: string;
  }[];
}

const DUEL_ROUNDS: DuelRound[] = [
  {
    id: 'round_istiadhah',
    whisper: '« Tu es perdu dans cette vallée sombre... Personne ne viendra à ton secours, renonce à ta quête ! »',
    whisperSubtitle: 'Attaque du doute et de la solitude',
    arabic: 'وَإِمَّا يَنزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ',
    options: [
      {
        id: 'A',
        text: '« Aʿūdhu billāhi mina sh-shayṭān ! Allah est mon protecteur et mon refuge suprême ! »',
        concept: 'Istiʿādhah (Refuge divin)',
        isCorrect: true,
        feedback: 'Le refuge sincère auprès d’Allah dissipe le premier voile de ténèbres !'
      },
      {
        id: 'B',
        text: '« C’est vrai... Je suis trop seul et trop faible pour continuer. »',
        concept: 'Capitulation face au doute',
        isCorrect: false,
        feedback: 'Le Waswâs se nourrit de ton sentiment de solitude.'
      },
      {
        id: 'C',
        text: '« Tais-toi ! Je suis assez fort tout seul, je n’ai besoin de rien ! »',
        concept: 'Orgueil & Illusion d’autosuffisance',
        isCorrect: false,
        feedback: 'L’orgueil aveugle le cœur et offre une prise au Waswâs.'
      }
    ]
  },
  {
    id: 'round_ilm',
    whisper: '« Tout ce que tu as appris n’est que mensonge ! Tes lectures et tes méditations ne valent rien ! »',
    whisperSubtitle: 'Attaque contre la science et la vérité',
    arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
    options: [
      {
        id: 'A',
        text: '« J’ai peut-être tort... Rien n’a de sens dans ce monde. »',
        concept: 'Doute épistémique',
        isCorrect: false,
        feedback: 'Le doute s’infiltre quand on abandonne la certitude du Savoir.'
      },
      {
        id: 'B',
        text: '« ʿIlm : La recherche de la vérité éclaire l’esprit et anéantit l’illusion ! »',
        concept: 'Force du Savoir authentique',
        isCorrect: true,
        feedback: 'La lumière du Savoir authentique consume les fausses promesses du Waswâs !'
      },
      {
        id: 'C',
        text: '« Je sais déjà tout, personne ne peut m’apprendre quoi que ce soit ! »',
        concept: 'Prétention stérile',
        isCorrect: false,
        feedback: 'Prétendre tout savoir empêche de recevoir la guidance.'
      }
    ]
  },
  {
    id: 'round_hilm',
    whisper: '« Regarde ce village qui t’a rejeté ! Mets-toi en colère, crie, venge-toi et détruis tout ! »',
    whisperSubtitle: 'Provocation à la colère et à l’agressivité',
    arabic: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',
    options: [
      {
        id: 'A',
        text: '« Tu as raison, ils méritent ma rancœur et ma colère noire ! »',
        concept: 'Emportement destructeur',
        isCorrect: false,
        feedback: 'La rancœur nourrit le feu du Waswâs et noircit le cœur.'
      },
      {
        id: 'B',
        text: '« Hilm & Sabr : Le vrai fort est celui qui maîtrise sa colère avec douceur ! »',
        concept: 'Hilm (Maîtrise de soi & Douceur)',
        isCorrect: true,
        feedback: 'La maîtrise de soi et la douceur éteignent le brasier du Waswâs !'
      },
      {
        id: 'C',
        text: '« Je vais crier de toutes mes forces pour prouver que je n’ai pas peur ! »',
        concept: 'Réaction impulsive',
        isCorrect: false,
        feedback: 'L’agitation inutile ne remplace pas la paix du cœur.'
      }
    ]
  },
  {
    id: 'round_tawakkul',
    whisper: '« Tu as commis trop d’erreurs en chemin. Tu n’atteindras jamais la Cité... Abandonne ! »',
    whisperSubtitle: 'Tentative d’insuffler le désespoir',
    arabic: 'إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ',
    options: [
      {
        id: 'A',
        text: '« Tawakkul : Les bonnes actions effacent les erreurs, et j’avance avec confiance ! »',
        concept: 'Espérance & Action constante',
        isCorrect: true,
        feedback: 'L’espérance en la miséricorde et l’action bienfaisante terrassent définitivement l’Ombre !'
      },
      {
        id: 'B',
        text: '« C’est vrai, mes erreurs prouvent que je suis condamné à l’échec. »',
        concept: 'Désespoir de la miséricorde',
        isCorrect: false,
        feedback: 'Le désespoir est l’arme ultime du Waswâs.'
      },
      {
        id: 'C',
        text: '« Je n’ai jamais commis la moindre faute, je suis parfait ! »',
        concept: 'Orgueil d’infaillibilité',
        isCorrect: false,
        feedback: 'Reconnaître ses manques avec humilité est le secret de la vraie force.'
      }
    ]
  }
];

const DUEL_ROUNDS_EN: DuelRound[] = [
  {
    id: 'round_istiadhah',
    whisper: '« You are lost in this dark valley... No one is coming to save you, abandon your quest! »',
    whisperSubtitle: 'Attack of doubt and loneliness',
    arabic: 'وَإِمَّا يَنزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ',
    options: [
      {
        id: 'A',
        text: '« Aʿūdhu billāhi mina sh-shayṭān! Allah is my supreme protector and refuge! »',
        concept: 'Istiʿādhah (Divine Refuge)',
        isCorrect: true,
        feedback: 'Sincere refuge in Allah instantly pierces the first veil of darkness!'
      },
      {
        id: 'B',
        text: '« It is true... I am too alone and weak to keep going. »',
        concept: 'Surrender to doubt',
        isCorrect: false,
        feedback: 'The Waswas feeds upon feelings of helplessness and isolation.'
      },
      {
        id: 'C',
        text: '« Be quiet! I am strong enough on my own, I need no help! »',
        concept: 'Arrogance & Self-sufficiency illusion',
        isCorrect: false,
        feedback: 'Arrogance blinds the heart and yields ground to the Waswas.'
      }
    ]
  },
  {
    id: 'round_ilm',
    whisper: '« Everything you learned is a lie! Your readings and meditations are worthless! »',
    whisperSubtitle: 'Attack on sacred knowledge and truth',
    arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
    options: [
      {
        id: 'A',
        text: '« Maybe I am wrong... Nothing makes sense anymore. »',
        concept: 'Epistemic doubt',
        isCorrect: false,
        feedback: 'Doubt enters when one lets go of certainty rooted in knowledge.'
      },
      {
        id: 'B',
        text: '« ʿIlm: The quest for sacred truth enlightens the soul and shatters falsehood! »',
        concept: 'Power of Authentic Knowledge',
        isCorrect: true,
        feedback: 'The light of authentic Knowledge incinerates the false whisperings of Waswas!'
      },
      {
        id: 'C',
        text: '« I already know everything, nobody can teach me a thing! »',
        concept: 'Sterile pretension',
        isCorrect: false,
        feedback: 'Pretending to know all blocks the heart from receiving divine guidance.'
      }
    ]
  },
  {
    id: 'round_hilm',
    whisper: '« Look at this village that rejected you! Rage, shout, take revenge and burn it all! »',
    whisperSubtitle: 'Provocation to fury and anger',
    arabic: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',
    options: [
      {
        id: 'A',
        text: '« You are right, they deserve all my hatred and burning anger! »',
        concept: 'Destructive wrath',
        isCorrect: false,
        feedback: 'Grudges fuel the fire of Waswas and darken the heart.'
      },
      {
        id: 'B',
        text: '« Hilm & Sabr: The truly strong is the one who masterfully subdues anger with gentle grace! »',
        concept: 'Hilm (Self-control & Gentleness)',
        isCorrect: true,
        feedback: 'Self-restraint and gentleness extinguish the blazing furnace of Waswas!'
      },
      {
        id: 'C',
        text: '« I will scream with all my might to prove I have no fear! »',
        concept: 'Impulsive reaction',
        isCorrect: false,
        feedback: 'Pointless commotion cannot replace inner serenity of the heart.'
      }
    ]
  },
  {
    id: 'round_tawakkul',
    whisper: '« You made too many errors along the road. You will never reach the City of Light... Give up! »',
    whisperSubtitle: 'Attempting to inject despair',
    arabic: 'إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ',
    options: [
      {
        id: 'A',
        text: '« Tawakkul: Righteous deeds wipe out shortcomings, and I move forward with trust in Allah! »',
        concept: 'Hope & Persistent Action',
        isCorrect: true,
        feedback: 'Hope in divine mercy and constant good actions conquer the Shadow forever!'
      },
      {
        id: 'B',
        text: '« It is true, my shortcomings prove that I am doomed to failure. »',
        concept: 'Despair of divine mercy',
        isCorrect: false,
        feedback: 'Despair is the ultimate weapon of the Waswas.'
      },
      {
        id: 'C',
        text: '« I have never made any mistake, I am completely flawless! »',
        concept: 'Pride of infallibility',
        isCorrect: false,
        feedback: 'Humbly acknowledging one’s faults is the secret of genuine strength.'
      }
    ]
  }
];

const DUEL_ROUNDS_AR: DuelRound[] = [
  {
    id: 'round_istiadhah',
    whisper: '« لقد ضللت طريقك في هذا الوادي المظلم... لن يأتي أحد لإنقاذك، فاستسلم وتخلَّ عن مسعاك! »',
    whisperSubtitle: 'هجوم الشك والوحشة',
    arabic: 'وَإِمَّا يَنزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ',
    options: [
      {
        id: 'A',
        text: '« أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ! الله هو حمايتي وملاذي الأعلى! »',
        concept: 'الاستعاذة (الالتجاء إلى الله)',
        isCorrect: true,
        feedback: 'الاستعاذة الصادقة تمزق أول حجب الظلام والشك!'
      },
      {
        id: 'B',
        text: '« هذا صحيح... أنا وحيد وضعيف ولا قدرة لي على المواصلة. »',
        concept: 'الاستسلام للشك',
        isCorrect: false,
        feedback: 'يتغذى الوسواس على شعورك بالوحدة والضعف.'
      },
      {
        id: 'C',
        text: '« اصمت! أنا قوي بمفردي ولست بحاجة لأي عون! »',
        concept: 'الكبر ووهم الاكتفاء بالنفس',
        isCorrect: false,
        feedback: 'الكبر يعمي البصيرة ويمنح الوسواس مدخلاً إلى قلبك.'
      }
    ]
  },
  {
    id: 'round_ilm',
    whisper: '« كل ما تعلمته باطل وسراب! قراءاتك وتأملاتك لا قيمة لها في هذا العالم! »',
    whisperSubtitle: 'الطعن في العلم والحقيقة',
    arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
    options: [
      {
        id: 'A',
        text: '« ربما أنا مخطئ... لا شيء له معنى بعد الآن. »',
        concept: 'الشك والتردد',
        isCorrect: false,
        feedback: 'يتسلل الشك حين يتخلى المرء عن يقين العلم النافع.'
      },
      {
        id: 'B',
        text: '« العلم: طلب الحق يُنير العقل ويبدد أوهام الباطل! »',
        concept: 'قوة العلم الأصيل',
        isCorrect: true,
        feedback: 'نور العلم الحقيقي يحرق وساوس الوهم والجهل!'
      },
      {
        id: 'C',
        text: '« أنا أعلم كل شيء ولا يستطيع أحد أن يعلمني شيئاً! »',
        concept: 'ادعاء المعرفة',
        isCorrect: false,
        feedback: 'ادعاء الإحاطة يمنع القلب من قبول الهداية.'
      }
    ]
  },
  {
    id: 'round_hilm',
    whisper: '« انظر إلى أهل هذه القرية الذين أداروا ظهورهم لك! اغضب واصرخ وانتقم ودمر كل شيء! »',
    whisperSubtitle: 'التحريض على الغضب والعدوانية',
    arabic: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',
    options: [
      {
        id: 'A',
        text: '« معك حق، إنهم يستحقون غضبي وحقدي الدفين! »',
        concept: 'الغضب المدمر',
        isCorrect: false,
        feedback: 'الحقد يغذي نار الوسواس ويظلم القلب.'
      },
      {
        id: 'B',
        text: '« الحلم والصبر: الشديد الحق من يملك نفسه عند الغضب بالرفق والأناة! »',
        concept: 'الحلم (ضبط النفس والرفق)',
        isCorrect: true,
        feedback: 'كظم الغيظ والرفق يطفئان لهيب الوسواس!'
      },
      {
        id: 'C',
        text: '« سأصرخ بأعلى صوتي لأثبت للجميع أنني لا أخاف! »',
        concept: 'انفعال طائش',
        isCorrect: false,
        feedback: 'الصخب والانفعال لا يحلان محل سكينة القلب.'
      }
    ]
  },
  {
    id: 'round_tawakkul',
    whisper: '« لقد ارتكبت أخطاء كثيرة في مسيرتك... لن تبلغ مدينة النور أبداً، فاستسلم! »',
    whisperSubtitle: 'محاولة بث اليأس والقنوط',
    arabic: 'إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ',
    options: [
      {
        id: 'A',
        text: '« التوكل: إن الحسنات يذهبن السيئات، وسأمضي واثقاً في رحمة الله! »',
        concept: 'الرجاء والعمل الصالح المستمر',
        isCorrect: true,
        feedback: 'الرجاء في رحمة الله والعمل الصالح يقضيان على الظلام نهائياً!'
      },
      {
        id: 'B',
        text: '« هذا صحيح، أخطائي تثبت أنني محكوم بالفشل. »',
        concept: 'اليأس من رحمة الله',
        isCorrect: false,
        feedback: 'اليأس هو السلاح الأخير والأخطر للوسواس.'
      },
      {
        id: 'C',
        text: '« أنا لم أرتكب أي خطأ قط، وأنا كامل منزه عن الزلل! »',
        concept: 'غرور العصمة',
        isCorrect: false,
        feedback: 'الاعتراف بالتقصير بتواضع هو سر القوة الحقيقية.'
      }
    ]
  }
];

const CHAPTER_3_DUEL_ROUNDS: DuelRound[] = [
  {
    id: 'round_c3_revolte',
    whisper: '« Si Dieu t’aimait vraiment, Il ne t’aurait pas affaibli par la maladie ! Tu as été abandonné ! »',
    whisperSubtitle: 'Attaque de la révolte et du sentiment d’injustice',
    arabic: 'مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ إِلَّا كَفَّرَ اللَّهُ بِهِ مِنْ خَطَايَاهُ',
    options: [
      {
        id: 'A',
        text: '« Sabr & Purification : L’épreuve purifie le cœur et élève le serviteur en dignité auprès d’Allah ! »',
        concept: 'Sens spirituel de l’épreuve (Bukhari 5641)',
        isCorrect: true,
        feedback: 'La certitude que la maladie est une miséricorde purificatrice repousse le venin de la révolte !'
      },
      {
        id: 'B',
        text: '« C’est vrai... Pourquoi les autres sont-ils en forme et moi alité ? C’est injuste. »',
        concept: 'Jalousie et amertume',
        isCorrect: false,
        feedback: 'Se comparer aux autres dans l’épreuve nourrit l’Ombre.'
      },
      {
        id: 'C',
        text: '« Je vais forcer sur mon corps et courir jusqu’à m’évanouir pour prouver que je vais bien ! »',
        concept: 'Déni téméraire',
        isCorrect: false,
        feedback: 'Maltraiter son corps contredit l’Amānah divine.'
      }
    ]
  },
  {
    id: 'round_c3_fardeau',
    whisper: '« Regarde-toi ! Tu es devenu un fardeau inutile pour ta famille ! Isole-toi dans la honte ! »',
    whisperSubtitle: 'Attaque de la culpabilité et de l’isolement',
    arabic: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ',
    options: [
      {
        id: 'A',
        text: '« Je refuse de voir qui que ce soit, je ne veux de la pitié de personne ! »',
        concept: 'Fierté d’isolement',
        isCorrect: false,
        feedback: 'La fausse pudeur empêche les cœurs de se soutenir.'
      },
      {
        id: 'B',
        text: '« Fraternité & Humilité : Accepter la main tendue et dire merci est une noble vertu partagée ! »',
        concept: 'L’Entraide fraternelle (Coran 5:2 & Tirmidhi 1954)',
        isCorrect: true,
        feedback: 'L’accueil de l’amour fraternel détruit les murs glacés de la solitude !'
      },
      {
        id: 'C',
        text: '« C’est de leur faute si je suis tombé malade, ils ne m’ont pas assez protégé ! »',
        concept: 'Accusation des proches',
        isCorrect: false,
        feedback: 'Rejeter la faute sur les siens détruit les liens sacrés.'
      }
    ]
  },
  {
    id: 'round_c3_remedes',
    whisper: '« Les remèdes ne servent à rien ! La guérison est une illusion, tu seras diminué pour toujours ! »',
    whisperSubtitle: 'Attaque du fatalisme passif et du renoncement',
    arabic: 'تَدَاوَوْا فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ دَوَاءً',
    options: [
      {
        id: 'A',
        text: '« Alors je ne prends plus aucun soin et j’attends la fin sans bouger. »',
        concept: 'Fatalisme destructeur',
        isCorrect: false,
        feedback: 'Délaisser les causes utiles est une faute contre la sagesse prophétique.'
      },
      {
        id: 'B',
        text: '« Tawakkul Actif : Allah a créé un remède pour chaque mal, je prends les causes avec espoir ! »',
        concept: 'Tawakkul authentique (Bukhari 5678)',
        isCorrect: true,
        feedback: 'Agir par les causes utiles tout en s’en remettant à Allah dissout le piège du renoncement !'
      },
      {
        id: 'C',
        text: '« Ce sont les médicaments seuls qui ont le pouvoir absolu de me sauver. »',
        concept: 'Attachement aveugle au matériel',
        isCorrect: false,
        feedback: 'Le remède est un moyen, mais le Guérisseur Suprême est Ash-Shāfī.'
      }
    ]
  },
  {
    id: 'round_c3_graine',
    whisper: '« Tu as perdu tant de temps ! Tes compagnons ont gravi la montagne sans toi ! Tu as échoué ! »',
    whisperSubtitle: 'Attaque de l’impatience et du désespoir temporel',
    arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا • إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    options: [
      {
        id: 'A',
        text: '« C’est vrai, mes journées de convalescence ont été totalement inutiles. »',
        concept: 'Dévalorisation du temps de pause',
        isCorrect: false,
        feedback: 'Le Waswâs veut te faire mépriser la patience silencieuse.'
      },
      {
        id: 'B',
        text: '« La Graine & la Renaissance : La halte sous terre prépare l’éclosion de demain, avec la facilité ! »',
        concept: 'Espérance active & Résilience (Coran 94:5-6)',
        isCorrect: true,
        feedback: 'La lumière du renouveau triomphe ! Le cœur a vaincu sa Montagne Intérieure !'
      },
      {
        id: 'C',
        text: '« Je vais courir et sauter dès maintenant pour rattraper mon retard ! »',
        concept: 'Précipitation téméraire',
        isCorrect: false,
        feedback: 'La hâte aveugle conduit à la rechute.'
      }
    ]
  }
];

interface ClimaxCombatProps {
  waswasXp?: number;
  traits?: CharacterTraits;
  onComplete: () => void;
  onStepChange?: (stepIndex: number) => void;
  onOpenHilmQuiz?: () => void;
  customAssets?: CustomAssetsConfig;
  chapterNumber?: number;
}

export const ClimaxCombat: React.FC<ClimaxCombatProps> = ({
  waswasXp = 0,
  traits,
  onComplete,
  onStepChange,
  onOpenHilmQuiz,
  customAssets,
  chapterNumber = 1
}) => {
  const { language, isRtl } = useLanguage();
  const t = gameTranslations[language]?.climax || gameTranslations.fr.climax;

  const ch1Rounds = language === 'ar' ? DUEL_ROUNDS_AR : language === 'en' ? DUEL_ROUNDS_EN : DUEL_ROUNDS;
  const baseRounds = chapterNumber === 3 ? CHAPTER_3_DUEL_ROUNDS : ch1Rounds;

  // Build the dynamic duel round that specifically targets the player's dominant built trait!
  const adaptiveAttack = getWaswasAdaptiveAttack(traits);
  const adaptiveRound: DuelRound = {
    id: `adaptive_${adaptiveAttack.dominantTrait}`,
    whisper: adaptiveAttack.whisper,
    whisperSubtitle: adaptiveAttack.whisperSubtitle,
    arabic: adaptiveAttack.arabic,
    options: adaptiveAttack.options
  };

  const activeDuelRounds = [
    baseRounds[0],
    adaptiveRound,
    baseRounds[baseRounds.length - 1]
  ];

  // Waswâs total HP scales with accumulated waswasXp (base 100 + up to 50 bonus HP)
  const maxWaswasHp = 100 + Math.round(waswasXp * 0.5);
  const [waswasHp, setWaswasHp] = useState<number>(maxWaswasHp);
  const [playerHp, setPlayerHp] = useState<number>(100);

  const [currentRoundIdx, setCurrentRoundIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<'A' | 'B' | 'C' | null>(null);
  const [roundFeedback, setRoundFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isVictory, setIsVictory] = useState<boolean>(false);
  const [isDefeat, setIsDefeat] = useState<boolean>(false);

  const currentRound = activeDuelRounds[currentRoundIdx] || activeDuelRounds[0];
  const bossAvatar = customAssets?.characters?.grand_waswas || PIXEL_ASSETS.waswasAvatar;

  const handleSelectOption = (option: DuelRound['options'][number]) => {
    if (isProcessing || isVictory || isDefeat) return;

    setSelectedOptionId(option.id);
    setIsProcessing(true);

    if (option.isCorrect) {
      soundManager.playClimaxStep();
      const dmg = Math.ceil(maxWaswasHp / activeDuelRounds.length);
      const nextWaswasHp = Math.max(0, waswasHp - dmg);
      setWaswasHp(nextWaswasHp);

      setRoundFeedback({
        isCorrect: true,
        text: option.feedback
      });

      setTimeout(() => {
        if (currentRoundIdx + 1 >= activeDuelRounds.length || nextWaswasHp <= 0) {
          soundManager.playWaswasDissolve();
          setIsVictory(true);
        } else {
          const nextIdx = currentRoundIdx + 1;
          setCurrentRoundIdx(nextIdx);
          setSelectedOptionId(null);
          setRoundFeedback(null);
          setIsProcessing(false);
          if (onStepChange) onStepChange(nextIdx);
        }
      }, 1500);
    } else {
      soundManager.playSelect();
      const dmg = 35 + Math.round(waswasXp * 0.15);
      const nextPlayerHp = Math.max(0, playerHp - dmg);
      setPlayerHp(nextPlayerHp);

      setRoundFeedback({
        isCorrect: false,
        text: option.feedback
      });

      setTimeout(() => {
        if (nextPlayerHp <= 0) {
          setIsDefeat(true);
        } else {
          setSelectedOptionId(null);
          setRoundFeedback(null);
          setIsProcessing(false);
        }
      }, 1600);
    }
  };

  const handleRetryCombat = () => {
    soundManager.playSelect();
    setPlayerHp(100);
    setWaswasHp(maxWaswasHp);
    setCurrentRoundIdx(0);
    setSelectedOptionId(null);
    setRoundFeedback(null);
    setIsProcessing(false);
    setIsDefeat(false);
    setIsVictory(false);
    if (onStepChange) onStepChange(0);
  };

  const othmanLabel = language === 'ar' ? 'سكينة عثمان' : language === 'en' ? "Othmân's Serenity" : 'Sérénité Othmân';
  const bossLabel = chapterNumber === 3
    ? (language === 'ar' ? 'وسواس الهجران' : language === 'en' ? 'Waswas of Despair' : "Waswâs de l'Abandon")
    : (language === 'ar' ? 'الوسواس الأكبر' : language === 'en' ? 'Grand Waswas' : 'Grand Waswâs');

  const trialProgressLabel = language === 'ar'
    ? `الإمتحان ${currentRoundIdx + 1}/${activeDuelRounds.length}`
    : language === 'en'
    ? `Trial ${currentRoundIdx + 1}/${activeDuelRounds.length}`
    : `Épreuve ${currentRoundIdx + 1}/${activeDuelRounds.length}`;

  const choosePrompt = language === 'ar'
    ? '💡 اختر ردك الروحي بالحكمة واليقين:'
    : language === 'en'
    ? '💡 Choose your spiritual reply:'
    : '💡 Choisis ta riposte spirituelle :';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/80 backdrop-blur-sm select-none animate-in fade-in duration-200"
    >
      <div className="w-full max-w-md bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl shadow-[0_8px_0_#3a2312] flex flex-col max-h-[94vh] sm:max-h-[90vh] relative overflow-hidden animate-in zoom-in-95 duration-200">
        {/* HEADER: Dual Mini Health Bars (Othmân vs Grand Waswâs) */}
        <div className="p-3 sm:p-3.5 bg-[#f3ebd9] border-b-2 border-[#3a2312] shrink-0 flex items-center justify-between gap-3">
          {/* Othmân Sérénité */}
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center justify-between text-[10px] sm:text-xs font-black font-cinzel text-[#2d6a4f]">
              <span className="flex items-center gap-1">
                <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-300" />
                <span>{othmanLabel}</span>
              </span>
              <span className="font-mono">{playerHp}/100</span>
            </div>
            <div className="w-full h-2.5 bg-black/30 rounded-full border border-[#2d6a4f]/50 overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#2d6a4f] via-[#52b788] to-[#74c69d] rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, playerHp)}%` }}
              />
            </div>
          </div>

          {/* VS Divider */}
          <span className="text-[10px] font-black text-[#8c5a2b] font-cinzel shrink-0 px-1">
            VS
          </span>

          {/* Waswâs Ombre */}
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center justify-between text-[10px] sm:text-xs font-black font-cinzel text-purple-900">
              <span className="flex items-center gap-1">
                <Moon className="w-3.5 h-3.5 text-purple-600 fill-purple-300" />
                <span>{bossLabel}</span>
              </span>
              <span className="font-mono">{waswasHp}/{maxWaswasHp}</span>
            </div>
            <div className="w-full h-2.5 bg-black/30 rounded-full border border-purple-800/50 overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-purple-950 via-purple-700 to-fuchsia-600 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, (waswasHp / maxWaswasHp) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* SCROLLABLE MAIN BODY */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 flex flex-col gap-3 custom-scrollbar">
          {/* DEFEAT SCREEN */}
          {isDefeat ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-purple-950/20 border-2 border-purple-800 flex items-center justify-center shadow-lg">
                <Moon className="w-9 h-9 text-purple-800 fill-purple-900/40 animate-pulse" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-black text-[#3a2312] font-cinzel leading-tight">
                  {language === 'ar' ? 'أحكم حجاب الشك إغلاقه...' : language === 'en' ? 'The Veil of Doubt Closed in...' : 'Le Voile du Doute s’est refermé...'}
                </h3>
                <p className="text-xs sm:text-sm text-[#6b4724] font-medium mt-1 leading-relaxed max-w-xs">
                  {language === 'ar'
                    ? 'أمام هجمات الوسواس، احتاج قلبك إلى مزيد من الثبات. قوِّ روحك بالحلم واليقين لتعود أقوى!'
                    : language === 'en'
                    ? 'Against the assaults of the Waswas, your heart wavered. Strengthen your soul with gentle forbearance and Knowledge to return stronger!'
                    : 'Face aux assauts du Waswâs, ton cœur a manqué de fermeté. Fortifie ton esprit avec la sagesse du Hilm et le Savoir pour revenir plus fort !'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 w-full mt-2">
                {onOpenHilmQuiz && (
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playSelect();
                      onOpenHilmQuiz();
                    }}
                    style={{
                      backgroundColor: '#1b4332',
                      backgroundImage: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
                      color: '#ffffff'
                    }}
                    className="w-full py-3.5 px-4 rounded-2xl text-white font-black text-xs sm:text-sm font-cinzel border-2 border-[#0d281e] shadow-[0_4px_0_#0d281e] active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 tracking-wide uppercase hover:brightness-110"
                  >
                    <BookOpen className="w-4 h-4 text-amber-300" />
                    <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {language === 'ar' ? 'تقوية القلب (اختبار الحلم والعلم)' : language === 'en' ? 'Fortify My Heart (Wisdom Quiz)' : 'Fortifier mon cœur (Quiz du Hilm & Savoir)'}
                    </span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleRetryCombat}
                  style={{
                    backgroundColor: '#ebdfc8',
                    color: '#3a2312'
                  }}
                  className="w-full py-3 px-4 rounded-2xl text-[#3a2312] font-black text-xs sm:text-sm font-cinzel border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 hover:bg-[#e0cfb4]"
                >
                  <RotateCcw className="w-4 h-4 text-[#3a2312]" />
                  <span>{language === 'ar' ? 'إعادة المواجهة فوراً' : language === 'en' ? 'Retry Combat Immediately' : 'Réessayer le combat immédiatement'}</span>
                </button>
              </div>
            </div>
          ) : isVictory ? (
            /* VICTORY SCREEN */
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-amber-400/30 border-2 border-amber-500 flex items-center justify-center shadow-lg animate-bounce">
                <Sun className="w-10 h-10 text-amber-500 fill-amber-300" />
              </div>

              <div>
                <h3 className="text-base sm:text-xl font-black text-[#1b4332] font-cinzel leading-tight">
                  {t.victoryHeader}
                </h3>
                <p className="text-xs sm:text-sm text-[#2d6a4f] font-bold mt-1 max-w-xs leading-relaxed">
                  {chapterNumber === 3
                    ? (language === 'ar' ? "بالصبر وتقبل العلاج والتوكل على الله، انتصرت على جبل الألم الداخلي!" : language === 'en' ? "Through Patience (Sabr), accepting care and total trust in Allah (Tawakkul), you conquered your Inner Mountain!" : "Par la Patience (Sabr), l'accueil humble des soins et la confiance totale en Allah (Tawakkul), tu as triomphé de ta Montagne Intérieure !")
                    : (language === 'ar' ? "بفضل الاستعاذة والعلم والحلم والتوكل على الله، تلاشى الوسواس الأكبر تماماً وتبددت ظلمته مع إشراقة الفجر!" : language === 'en' ? "Through Istiʿādhah, Knowledge, Hilm, and Tawakkul, the Grand Waswas completely dissolved in the morning light!" : "Grâce à l’Istiʿādhah, au Savoir, au Hilm et au Tawakkul, le Grand Waswâs s’est totalement dissipé dans la brume du matin !")}
                </p>
              </div>

              <button
                type="button"
                onClick={onComplete}
                style={{
                  backgroundColor: '#1b4332',
                  backgroundImage: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
                  color: '#ffffff'
                }}
                className="w-full mt-3 py-4 px-4 rounded-2xl text-white font-black text-sm sm:text-base font-cinzel border-2 border-[#0d281e] shadow-[0_4px_0_#0d281e] active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide hover:brightness-110"
              >
                <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{t.continueJourney}</span>
                <ArrowRight className={`w-5 h-5 text-amber-300 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          ) : (
            /* ACTIVE DUEL ROUND */
            <>
              {/* Boss Speech & Whisper Box */}
              <div className="bg-[#f3ebd9] border-2 border-[#3a2312] rounded-2xl p-3 sm:p-3.5 flex items-start gap-2.5 sm:gap-3 shadow-xs relative">
                {/* Waswâs Avatar */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-purple-950/80 border-2 border-purple-500 overflow-hidden shrink-0 p-0.5 shadow-md">
                  <img
                    src={bossAvatar}
                    alt="Grand Waswâs"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider font-cinzel text-purple-900">
                      {bossLabel}
                    </span>
                    <span className="text-[9px] font-bold font-mono text-[#8c5a2b] bg-[#ebdfc8] px-1.5 py-0.2 rounded border border-[#d2be9f]">
                      {trialProgressLabel}
                    </span>
                  </div>

                  <p className={`font-bold text-[#2a1c12] italic ${isRtl ? 'font-amiri text-base sm:text-lg leading-[1.8] text-right' : 'text-xs sm:text-sm leading-snug'}`}>
                    {currentRound.whisper}
                  </p>

                  {currentRound.arabic && (
                    <p className="text-right text-sm sm:text-base text-[#8c5a2b] font-amiri dir-rtl mt-1 leading-relaxed">
                      {currentRound.arabic}
                    </p>
                  )}
                </div>
              </div>

              {/* Round Feedback Alert if triggered */}
              {roundFeedback && (
                <div
                  className={`p-2.5 rounded-xl border-2 text-xs sm:text-sm font-bold flex items-center gap-2 animate-in fade-in duration-200 ${
                    roundFeedback.isCorrect
                      ? 'bg-[#ebf5e9] border-[#2d6a4f] text-[#1b4332]'
                      : 'bg-[#fee2e2] border-[#b91c1c] text-[#991b1b]'
                  }`}
                >
                  {roundFeedback.isCorrect ? (
                    <Sparkles className="w-4 h-4 text-[#2d6a4f] shrink-0" />
                  ) : (
                    <RotateCcw className="w-4 h-4 text-[#b91c1c] shrink-0" />
                  )}
                  <span>{roundFeedback.text}</span>
                </div>
              )}

              {/* Riposte Choice Buttons */}
              <div className="flex flex-col gap-2 mt-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#8c5a2b] font-cinzel">
                  {choosePrompt}
                </span>

                {currentRound.options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  let btnStyle = 'bg-[#fbf7ee] border-[#3a2312] text-[#3a2312] hover:bg-[#f3ebd9]';

                  if (isSelected) {
                    if (opt.isCorrect) {
                      btnStyle = 'bg-[#d8f3dc] border-[#2d6a4f] text-[#1b4332] ring-2 ring-[#2d6a4f]';
                    } else {
                      btnStyle = 'bg-[#fee2e2] border-[#b91c1c] text-[#991b1b] ring-2 ring-[#b91c1c]';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={isProcessing}
                      onClick={() => handleSelectOption(opt)}
                      className={`p-3 rounded-2xl border-2 font-bold transition-all cursor-pointer shadow-[0_2px_0_#3a2312] active:translate-y-0.5 flex items-start gap-2.5 ${
                        isRtl ? 'text-right font-amiri text-base sm:text-lg leading-[1.8]' : 'text-left text-xs sm:text-sm'
                      } ${btnStyle} ${
                        isProcessing && !isSelected ? 'opacity-50' : ''
                      }`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#ebdfc8] border border-[#3a2312] text-xs font-black flex items-center justify-center font-mono shrink-0 mt-0.5">
                        {opt.id}
                      </span>
                      <div className="flex-1 leading-snug">
                        <span>{opt.text}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
