import React from 'react';
import { Scene } from '../types';
import { REAL_ACTIONS } from '../data/chapter1';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  Lock,
  Compass,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import { CustomAssetsConfig, DEFAULT_ASSETS, PIXEL_ASSETS } from '../utils/assets';

// Character Avatars for the Journey Line
import avatarOthman from '../assets/images/pixel_othman_child_portrait.png';
import avatarNoura from '../assets/images/pixel_noura_maternal_guide.png';

// Scene Background Illustrations for Transitions (Extracted from Master Art Sheet)
import trans1 from '../assets/images/transitions/transition_scene_1.jpg';
import trans2 from '../assets/images/transitions/transition_scene_2.jpg';
import trans3 from '../assets/images/transitions/transition_scene_3.jpg';
import trans4 from '../assets/images/transitions/transition_scene_4.jpg';
import trans5 from '../assets/images/transitions/transition_scene_5.jpg';
import trans6 from '../assets/images/transitions/transition_scene_6.jpg';
import trans7 from '../assets/images/transitions/transition_scene_7.jpg';
import trans8 from '../assets/images/transitions/transition_scene_8.jpg';
import trans9 from '../assets/images/transitions/transition_scene_9.jpg';

interface SceneTransitionModalProps {
  completedScene: Scene;
  nextScene?: Scene;
  playerXp?: number;
  onOpenQuiz?: () => void;
  customAssets?: CustomAssetsConfig;
  onProceedToNextScene: () => void;
  onReplayScene: () => void;
}

// Multilingual Poetic Metadata for Scene Transitions Across All Chapters
interface TransitionData {
  title: { fr: string; ar: string; en: string };
  subtitle: { fr: string; ar: string; en: string };
  brief: { fr: string; ar: string; en: string };
  image?: string;
  video?: string;
}

// Function to resolve the authentic visual illustration for any scene
export const getSceneIllustration = (scene: Scene, customAssets?: CustomAssetsConfig): string => {
  const theme = scene.backgroundTheme || (scene as any).backgroundKey;

  // Custom asset override if provided by player
  if (theme && customAssets?.backgrounds && (customAssets.backgrounds as any)[theme]) {
    return (customAssets.backgrounds as any)[theme];
  }

  // Exact theme mapping from DEFAULT_ASSETS
  switch (theme) {
    case 'chambre':
    case 'chambre_maladie':
      return customAssets?.backgrounds?.chambre || DEFAULT_ASSETS.backgrounds.chambre;
    case 'carrefour':
      return customAssets?.backgrounds?.carrefour || DEFAULT_ASSETS.backgrounds.carrefour;
    case 'waswas':
      return customAssets?.backgrounds?.waswas || DEFAULT_ASSETS.backgrounds.waswas;
    case 'vallee':
      return customAssets?.backgrounds?.vallee || DEFAULT_ASSETS.backgrounds.vallee;
    case 'village':
      return customAssets?.backgrounds?.village || DEFAULT_ASSETS.backgrounds.village;
    case 'village_mefiant':
      return customAssets?.backgrounds?.village_mefiant || DEFAULT_ASSETS.backgrounds.village_mefiant;
    case 'ruelle':
    case 'refus':
      return customAssets?.backgrounds?.refus_jeune_corde || DEFAULT_ASSETS.backgrounds.refus_jeune_corde;
    case 'verger':
    case 'geste':
      return customAssets?.backgrounds?.geste || DEFAULT_ASSETS.backgrounds.geste;
    case 'jardin':
      return customAssets?.backgrounds?.jardin || DEFAULT_ASSETS.backgrounds.jardin;
    case 'climax':
      return customAssets?.backgrounds?.climax || DEFAULT_ASSETS.backgrounds.climax;
    case 'marche_colere':
      return customAssets?.backgrounds?.marche_renverse || DEFAULT_ASSETS.backgrounds.marche_renverse;
    case 'mosquee_ablutions':
    case 'patio_remedes':
      return customAssets?.backgrounds?.mosquee_patio || DEFAULT_ASSETS.backgrounds.mosquee_patio;
    case 'marche_apaise':
      return customAssets?.backgrounds?.marche_reconcilie || DEFAULT_ASSETS.backgrounds.marche_reconcilie;
    case 'climax_hilm':
    case 'montagne_interieure':
      return customAssets?.backgrounds?.montagne_climax || DEFAULT_ASSETS.backgrounds.montagne_climax;
    case 'apothicaire':
    case 'maison_soins':
      return customAssets?.backgrounds?.maison_soins || DEFAULT_ASSETS.backgrounds.maison_soins;
    case 'mosquee_attelle':
    case 'mosquee_marches':
      return customAssets?.backgrounds?.mosquee_marches || DEFAULT_ASSETS.backgrounds.mosquee_marches;
    case 'verger_amandiers':
      return customAssets?.backgrounds?.verger_amandiers || DEFAULT_ASSETS.backgrounds.verger_amandiers;
    case 'atelier_sculpture':
      return customAssets?.backgrounds?.atelier_sculpture || DEFAULT_ASSETS.backgrounds.atelier_sculpture;
    case 'cuisine_bouillon':
      return customAssets?.backgrounds?.cuisine_bouillon || DEFAULT_ASSETS.backgrounds.cuisine_bouillon;
    case 'verger_lanterne':
      return customAssets?.backgrounds?.verger_fleur || DEFAULT_ASSETS.backgrounds.verger_fleur;
    case 'epilogue':
    case 'epilogue_ch3':
      return customAssets?.backgrounds?.epilogue || DEFAULT_ASSETS.backgrounds.epilogue;
    default:
      break;
  }

  // Scene ID fallback
  switch (scene.id) {
    case 1:
      return trans1 || DEFAULT_ASSETS.backgrounds.chambre;
    case 2:
      return trans2 || DEFAULT_ASSETS.backgrounds.carrefour;
    case 3:
      return trans3 || DEFAULT_ASSETS.backgrounds.waswas;
    case 4:
      return trans4 || DEFAULT_ASSETS.backgrounds.vallee;
    case 5:
      return trans5 || DEFAULT_ASSETS.backgrounds.village;
    case 6:
      return trans6 || DEFAULT_ASSETS.backgrounds.refus_jeune_corde;
    case 7:
      return trans7 || DEFAULT_ASSETS.backgrounds.geste;
    case 8:
      return trans8 || DEFAULT_ASSETS.backgrounds.jardin;
    case 9:
      return trans9 || DEFAULT_ASSETS.backgrounds.climax;
    case 10:
      return DEFAULT_ASSETS.backgrounds.carrefour;
    case 11:
      return DEFAULT_ASSETS.backgrounds.marche_renverse;
    case 12:
      return DEFAULT_ASSETS.backgrounds.village_mefiant;
    case 13:
      return DEFAULT_ASSETS.backgrounds.mosquee_patio;
    case 14:
      return DEFAULT_ASSETS.backgrounds.marche_reconcilie;
    case 142:
      return DEFAULT_ASSETS.backgrounds.mosquee_patio;
    case 15:
      return DEFAULT_ASSETS.backgrounds.montagne_climax;
    case 16:
      return DEFAULT_ASSETS.backgrounds.epilogue;
    case 17:
      return DEFAULT_ASSETS.backgrounds.chambre;
    case 18:
      return DEFAULT_ASSETS.backgrounds.maison_soins;
    case 19:
      return DEFAULT_ASSETS.backgrounds.mosquee_marches;
    case 20:
      return DEFAULT_ASSETS.backgrounds.maison_soins;
    case 201:
      return DEFAULT_ASSETS.backgrounds.verger_amandiers;
    case 202:
      return DEFAULT_ASSETS.backgrounds.atelier_sculpture;
    case 21:
      return DEFAULT_ASSETS.backgrounds.vallee;
    case 22:
      return DEFAULT_ASSETS.backgrounds.verger_fleur;
    case 23:
      return DEFAULT_ASSETS.backgrounds.cuisine_bouillon;
    case 24:
      return DEFAULT_ASSETS.backgrounds.jardin;
    case 25:
      return DEFAULT_ASSETS.backgrounds.montagne_climax;
    case 26:
      return DEFAULT_ASSETS.backgrounds.epilogue;
    default:
      return DEFAULT_ASSETS.backgrounds.carrefour;
  }
};

const ALL_SCENE_TRANSITIONS: Record<number, TransitionData> = {
  // CHAPITRE 1 : LE PREMIER PAS VERS L'AUTRE
  1: {
    title: { fr: 'LA CHAMBRE', ar: 'الْغُرْفَةُ', en: 'THE ROOM' },
    subtitle: { fr: "L'Éveil du Matin", ar: 'إِشْرَاقَةُ الصَّبَاحِ', en: 'Morning Awakening' },
    brief: {
      fr: "La chambre paisible éclairée par la première lueur de l'aube.",
      ar: 'الْغُرْفَةُ الْهَادِئَةُ الْمُضَاءَةُ بِأَوَّلِ خُيُوطِ شُرُوقِ الشَّمْسِ.',
      en: 'The peaceful room illuminated by the first morning light.'
    },
    image: trans1
  },
  2: {
    title: { fr: 'LE POTEAU AUX CHEMINS', ar: 'عَمُودُ مُفْتَرَقِ الطُّرُقِ', en: 'THE CROSSROADS POST' },
    subtitle: { fr: 'Le Chemin Commence', ar: 'خُطْوَةُ الِانْطِلَاقِ', en: 'The Journey Begins' },
    brief: {
      fr: 'Othmân a franchi le seuil. Devant lui, les sentiers de l’aventure s’ouvrent sous le soleil levant.',
      ar: 'عَبَرَ عُثْمَانُ عَتَبَةَ بَيْتِهِ، فَتَفَتَّحَتْ أَمَامَهُ مَسَالِكُ الرِّحْلَةِ تَحْتَ ضِيَاءِ الشَّمْسِ الْمُشْرِقَةِ.',
      en: 'Othman has crossed the threshold. Before him, the winding trails of adventure unfold under the rising sun.'
    },
    image: trans2,
    video: '/game-assets/scene1/08_chemin_vers_poteau.mp4'
  },
  3: {
    title: { fr: 'LE PREMIER WASWAS', ar: 'الْوَسْوَاسُ الْأَوَّلُ', en: 'THE FIRST WASWAS' },
    subtitle: { fr: 'La pensée qui bloque', ar: 'الْفِكْرَةُ الَّتِي تُعَرْقِلُ', en: 'The Paralyzing Thought' },
    brief: {
      fr: 'Le sentier rocheux escarpé plongé dans les volutes de brume violette.',
      ar: 'الْمَسَارُ الصَّخْرِيُّ الْوَعِرُ الْمَغْمُورُ بِسُحُبِ الضَّبَابِ الْبَنَفْسَجِيِّ.',
      en: 'The steep rocky path immersed in swirling purple mist.'
    },
    image: trans3
  },
  4: {
    title: { fr: 'JE NE VEUX PLUS ÊTRE SEUL', ar: '« لَمْ أَعُدْ أُرِيدُ أَنْ أَكُونَ وَحِيدًا »', en: 'NO LONGER ALONE' },
    subtitle: { fr: "L'Appel de la Rencontre", ar: 'نِدَاءُ التَّعَارُفِ', en: 'The Call to Meet' },
    brief: {
      fr: 'La vue lointaine vers les fumées et les toits du village.',
      ar: 'مَنْظَرٌ بَعِيدٌ يُطِلُّ عَلَى دُخَانِ الْمَنَازِلِ وَأَسْطُحِ الْقَرْيَةِ.',
      en: 'The distant view over the smoke and rooftops of the village.'
    },
    image: trans4
  },
  5: {
    title: { fr: 'LE VILLAGE', ar: 'الْقَرْيَةُ', en: 'THE VILLAGE' },
    subtitle: { fr: 'La Cité des Cœurs', ar: 'مَيْدَانُ الْقُلُوبِ', en: 'The Square of Hearts' },
    brief: {
      fr: 'La place pavée avec la fontaine et les maisons en pierre.',
      ar: 'السَّاحَةُ الْمُرَصَّفَةُ مَعَ الْيَنْبُوعِ وَالْبُيُوتِ الْحَجَرِيَّةِ الْعَتِيقَةِ.',
      en: 'The cobblestone square with the fountain and stone dwellings.'
    },
    image: trans5
  },
  6: {
    title: { fr: 'LE REFUS', ar: 'الرَّفْضُ', en: 'THE REFUSAL' },
    subtitle: { fr: "L'Épreuve du Sabr", ar: 'امْتِحَانُ الصَّبْرِ', en: 'The Test of Sabr' },
    brief: {
      fr: "La ruelle de l'artisan cordier avec les arches ombragées.",
      ar: 'زُقَاقُ صَانِعِ الْحِبَالِ مَعَ الْأَقْوَاسِ الْمُظَلَّلَةِ.',
      en: 'The rope artisan alley beneath the shaded stone arches.'
    },
    image: trans6
  },
  7: {
    title: { fr: 'LE GESTE', ar: 'الْمُبَادَرَةُ الصَّادِقَةُ', en: 'THE GESTURE' },
    subtitle: { fr: 'La Niyyah Secrète', ar: 'إِخْلَاصُ النِّيَّةِ', en: 'The Pure Intention' },
    brief: {
      fr: 'Le verger d’oliviers et les paniers sous la lumière dorée.',
      ar: 'بُسْتَانُ الزَّيْتُونِ وَالسِّلَالُ تَحْتَ أَشِعَّةِ الشَّمْسِ الذَّهَبِيَّةِ.',
      en: 'The olive grove and baskets bathed in golden sunlight.'
    },
    image: trans7
  },
  8: {
    title: { fr: 'LE JARDIN ABANDONNÉ', ar: 'الْبُسْتَانُ الْمَهْجُورُ', en: 'THE ABANDONED GARDEN' },
    subtitle: { fr: 'La Gratitude Révélée', ar: 'نُورُ الشُّكْرِ', en: 'Gratitude Revealed' },
    brief: {
      fr: "L'ancien verger fleuri avec la vieille lanterne.",
      ar: 'الْبُسْتَانُ الْقَدِيمُ الْمُزْهِرُ مَعَ الْفَانُوسِ الْعَتِيقِ.',
      en: 'The old blooming orchard with the vintage lantern.'
    },
    image: trans8
  },
  9: {
    title: { fr: 'LE GRAND WASWAS', ar: 'الْوَسْوَاسُ الْأَكْبَرُ', en: 'THE GRAND WASWAS' },
    subtitle: { fr: "Le Sommet de l'Éveil", ar: 'ذِرْوَةُ الْيَقِينِ', en: 'The Summit of Awakening' },
    brief: {
      fr: "Le sommet de la montagne face à la tempête intérieure et l'aube naissante.",
      ar: 'قِمَّةُ الْجَبَلِ فِي مُوَاجَهَةِ الْعَاصِفَةِ الدَّاخِلِيَّةِ وَإِشْرَاقِ الْفَجْرِ.',
      en: 'The mountain summit facing the inner storm and the rising dawn.'
    },
    image: trans9
  },

  // CHAPITRE 2 : LE CHEMIN DU HILM
  10: {
    title: { fr: "L'AUBE AU GRAND POTEAU", ar: 'الْفَجْرُ عِنْدَ عَمُودِ الطُّرُقِ', en: 'DAWN AT THE CROSSROADS' },
    subtitle: { fr: 'Le Carrefour des Chemins', ar: 'مُفْتَرَقُ الطُّرُقِ', en: 'The Crossroads of Paths' },
    brief: {
      fr: "Othmân reprend sa marche à l'aube dorée vers de nouvelles épreuves du cœur.",
      ar: 'يَسْتَأْنِفُ عُثْمَانُ مَسِيرَهُ عِنْدَ الْفَجْرِ نَحْوَ آفَاقٍ جَدِيدَةٍ مِنَ الْحِكْمَةِ.',
      en: 'Othman resumes his walk at golden dawn towards new trials of the heart.'
    },
    image: DEFAULT_ASSETS.backgrounds.carrefour
  },
  11: {
    title: { fr: "L'ÉCLAT DU MARCHÉ", ar: 'ضَجِيجُ السُّوقِ', en: 'THE MARKET TUMULT' },
    subtitle: { fr: "L'Accusation Injuste", ar: 'الاتِّهَامُ الْبَاطِلُ', en: 'The Unjust Accusation' },
    brief: {
      fr: "Devant les étals de grenades sous les minarets, l'épreuve de l'accusation injuste.",
      ar: 'أَمَامَ أَكْشَاكِ الرُّمَّانِ تَحْتَ الْمَنَارَاتِ، يَمْتَحِنُ الصَّخَبُ صَبْرَ الْفَتَى.',
      en: 'Before the pomegranate stalls beneath towering minarets, the test of wrongful blame.'
    },
    image: DEFAULT_ASSETS.backgrounds.marche_renverse
  },
  12: {
    title: { fr: "L'ÉPREUVE DU SILENCE", ar: 'امْتِحَانُ الصَّمْتِ', en: 'THE TEST OF SILENCE' },
    subtitle: { fr: 'La Maîtrise dans la Tourmente', ar: 'ضَبْطُ النَّفْسِ عِنْدَ الْغَضَبِ', en: 'Restraint in the Storm' },
    brief: {
      fr: 'Face aux provocations et à la foule méfiante, le noble bouclier du silence et du Hilm.',
      ar: 'فِي وَجْهِ اسْتِفْزَازِ الْجَمْعِ، يُشْهِرُ عُثْمَانُ دِرْعَ الصَّمْتِ وَالْحِلْمِ النَّبِيلِ.',
      en: 'Facing provocation and wary glares, the noble shield of silence and self-control.'
    },
    image: DEFAULT_ASSETS.backgrounds.village_mefiant
  },
  13: {
    title: { fr: 'LA FONTAINE AUX VIGNES', ar: 'نَافُورَةُ الأَعْنَابِ', en: 'THE FOUNTAIN OF VINES' },
    subtitle: { fr: "Éteindre le feu par l'eau", ar: 'إِطْفَاءُ الْغَضَبِ بِالْمَاءِ', en: 'Extinguish Fire with Water' },
    brief: {
      fr: "Le patio ombragé de la mosquée où l'eau des ablutions apaise le feu de la colère.",
      ar: 'فِنَاءُ الْمَسْجِدِ الظَّلِيلُ حَيْثُ يُطْفِئُ مَاءُ الْوُضُوءِ بَرَكِينَ الْغَضَبِ.',
      en: 'The shaded mosque courtyard where cooling ablution water soothes the fiery heart.'
    },
    image: DEFAULT_ASSETS.backgrounds.mosquee_patio
  },
  14: {
    title: { fr: 'LA PARURE DE DOUCEUR', ar: 'زِينَةُ الرِّفْقِ', en: 'THE ADORNMENT OF GENTLENESS' },
    subtitle: { fr: 'Désarmer la discorde', ar: 'إِخْمَادُ الْفِتْنَةِ بِاللِّينِ', en: 'Disarming Discord' },
    brief: {
      fr: 'Le retour bienveillant auprès du marchand et le don de la grenade dorée de réconciliation.',
      ar: 'الْعَوْدَةُ الصَّادِقَةُ لِمُسَاعَدَةِ التَّاجِرِ وَإِهْدَاءُ رُمَّانَةِ الصُّلْحِ وَالْمَوَدَّةِ.',
      en: 'Returning with gentle service to help the merchant, sealed by the gift of peace.'
    },
    image: DEFAULT_ASSETS.backgrounds.marche_reconcilie
  },
  142: {
    title: { fr: 'LE MURMURE SOUS LA TREILLE', ar: 'نَجْوَى تَحْتَ الْعَرِيشِ', en: 'WHISPER BENEATH THE TRELLIS' },
    subtitle: { fr: "L'Invocation Secrète", ar: 'دُعَاءُ الْغَيْبِ لِلْمُسِيءِ', en: 'The Secret Prayer' },
    brief: {
      fr: "La prière sincère et invisible formulée pour celui qui nous a heurté, au murmure de l'eau.",
      ar: 'دُعَاءٌ صَادِقٌ بِالْهِدَايَةِ لِمَنْ أَسَاءَ، فِي خَلْوَةِ الْفِنَاءِ الظَّلِيلِ.',
      en: 'A sincere invisible prayer of guidance for the one who wronged us, by the trickling fountain.'
    },
    image: DEFAULT_ASSETS.backgrounds.mosquee_patio
  },
  15: {
    title: { fr: "L'OMBRE DE LA RANCŒUR", ar: 'ظِلُّ الْحِقْدِ وَالْغِلِّ', en: 'THE SHADOW OF RESENTMENT' },
    subtitle: { fr: 'Le Duel du Hilm', ar: 'مُعْتَرَكُ كَظْمِ الْغَيْظِ', en: 'The Duel of Restraint' },
    brief: {
      fr: "Éteindre les dernières braises de la rancœur pour libérer le cœur de toute amertume.",
      ar: 'إِخْمَادُ آخِرِ جَمَرَاتِ الْغِلِّ لِتَطْهِيرِ الْفُؤَادِ مِنَ الْمَرَارَةِ.',
      en: 'Extinguishing the last embers of grudge to free the heart from all bitterness.'
    },
    image: DEFAULT_ASSETS.backgrounds.montagne_climax
  },
  16: {
    title: { fr: 'LE CŒUR PAISIBLE', ar: 'الْقَلْبُ السَّلِيمُ', en: 'THE TRANQUIL HEART' },
    subtitle: { fr: 'La Paix Victorieuse', ar: 'انْتِصَارُ السَّلَامِ', en: 'Peace Victorious' },
    brief: {
      fr: 'Le triomphe de la douceur et la sérénité retrouvée sous la lumière dorée du crépuscule.',
      ar: 'انْتِصَارُ الرِّفْقِ وَعَوْدَةُ الطُّمَأْنِينَةِ تَحْتَ أَنْوَارِ الْغُرُوبِ الذَّهَبِيَّةِ.',
      en: 'The triumph of prophetic gentleness and serenity restored under the golden sunset.'
    },
    image: DEFAULT_ASSETS.backgrounds.epilogue
  },

  // CHAPITRE 3 : LA MONTAGNE INTÉRIEURE (SABR & TAWAKKUL)
  17: {
    title: { fr: 'LE MATIN DIFFICILE', ar: 'صَبَاحُ الْفُتُورِ', en: 'THE FRAIL MORNING' },
    subtitle: { fr: "L'Épreuve du Corps", ar: 'ابْتِلَاءُ الْجَسَدِ', en: 'The Trial of the Body' },
    brief: {
      fr: 'Accueillir la maladie et la fatigue passagère avec humilité sans céder au doute.',
      ar: 'اسْتِقْبَالُ الْمَرَضِ وَالْوَهَنِ بِالتَّسْلِيمِ وَالتَّوَاضُعِ دُونَ اسْتِسْلَامٍ لِلْيَأْسِ.',
      en: 'Accepting physical illness and fatigue with humility without yielding to despair.'
    },
    image: DEFAULT_ASSETS.backgrounds.chambre
  },
  18: {
    title: { fr: "LE DISPENSAIRE DE L'APOTHICAIRE", ar: 'دُكَّانُ الصَّيْدَلِيِّ', en: 'THE APOTHECARY DISPENSARY' },
    subtitle: { fr: 'La Quête des Causes', ar: 'الْأَخْذُ بِالْأَسْبَابِ', en: 'Seeking the Means' },
    brief: {
      fr: 'Lier la confiance en Dieu à la recherche attentive des remèdes dans l’officine des soins.',
      ar: 'التَّدَاوِي وَالْأَخْذُ بِأَسْبَابِ الشِّفَاءِ مَعَ تَعَلُّقِ الْقَلْبِ بِالشَّافِي سُبْحَانَهُ.',
      en: 'Binding reliance upon God with the mindful pursuit of healing remedies.'
    },
    image: DEFAULT_ASSETS.backgrounds.maison_soins
  },
  19: {
    title: { fr: 'CELUI QUI PRIE AVEC UNE ATTELLE', ar: 'الْمُصَلِّي ذُو الْجَبِيرَةِ', en: 'THE BOY IN THE SPLINT' },
    subtitle: { fr: "L'Endurance Sereine", ar: 'الصَّبْرُ الْجَمِيلُ', en: 'Endurance Without Complaint' },
    brief: {
      fr: "L'enfant priant avec ardeur et dignité sur les marches de la mosquée malgré sa blessure.",
      ar: 'الْفَتَى يُصَلِّي بِخُشُوعٍ عَلَى دَرَجِ الْمَسْجِدِ رَغْمَ إِصَابَتِهِ كَمَثَلٍ حَيٍّ فِي الصَّبْرِ.',
      en: 'The child praying with dignity on the mosque steps despite his heavy wooden splint.'
    },
    image: DEFAULT_ASSETS.backgrounds.mosquee_marches
  },
  20: {
    title: { fr: 'LES REMÈDES PROPHÉTIQUES', ar: 'الْبَلْسَمُ النَّبَوِيُّ', en: 'PROPHETIC REMEDIES' },
    subtitle: { fr: 'La Talbîna et le Miel', ar: 'التَّلْبِينَةُ وَالْعَسَلُ', en: 'Talbina and Honey' },
    brief: {
      fr: 'La préparation du doux breuvage d’orge et de miel pour réconforter le cœur éprouvé.',
      ar: 'إِعْدَادُ حَسَاءِ التَّلْبِينَةِ وَالْعَسَلِ لِتَهْدِئَةِ فُؤَادِ الْمَرِيضِ وَتَجْدِيدِ قُوَاهُ.',
      en: 'Preparing soothing barley and golden honey to comfort the strained heart.'
    },
    image: DEFAULT_ASSETS.backgrounds.maison_soins
  },
  201: {
    title: { fr: 'LA CUEILLETTE SOUS LES AMANDIERS', ar: 'جَنْيُ اللَّوْزِ الْمُزْهِرِ', en: 'AMONG BLOOMING ALMONDS' },
    subtitle: { fr: 'Le Souffle du Grand Air', ar: 'نَسِيمُ الصَّبَاحِ', en: 'The Morning Breeze' },
    brief: {
      fr: "La marche vivifiante parmi les fleurs d'amandiers pour reprendre des forces au grand air.",
      ar: 'جَوْلَةٌ مُنْعِشَةٌ بَيْنَ أَشْجَارِ اللَّوْزِ لِتَجْدِيدِ النَّشَاطِ فِي رِحَابِ الطَّبِيعَةِ.',
      en: 'An invigorating walk among almond blossoms to regain stamina in the open air.'
    },
    image: DEFAULT_ASSETS.backgrounds.verger_amandiers
  },
  202: {
    title: { fr: "LE MANUSCRIT D'AYYŪB", ar: 'مَخْطُوطَةُ أَيُّوبَ', en: 'THE SCROLL OF AYYUB' },
    subtitle: { fr: 'La Patience Sublime', ar: 'الصَّبْرُ الْأَيُّوبِيُّ', en: 'Sublime Patience' },
    brief: {
      fr: "Méditation silencieuse sur les récits d'endurance des Prophètes face aux épreuves de la vie.",
      ar: 'تَأَمُّلٌ فِي قِصَصِ صَبْرِ الْأَنْبِيَاءِ وَيَقِينِهِمْ بِفَرَجِ اللَّهِ الْقَرِيبِ.',
      en: 'Silent contemplation on prophetic endurance and unwavering trust in divine ease.'
    },
    image: DEFAULT_ASSETS.backgrounds.atelier_sculpture
  },
  21: {
    title: { fr: 'LE POIDS DE LA HALTE', ar: 'ثِقَلُ الْمَسِيرِ', en: 'THE WEIGHT OF THE ASCENT' },
    subtitle: { fr: "L'Ascension Patiente", ar: 'خُطُوَاتٌ ثَابِتَةٌ', en: 'Patient Stepping' },
    brief: {
      fr: 'Avancer avec régularité sur les sentiers rocheux de la montagne sans se précipiter.',
      ar: 'مُوَاصَلَةُ الصُّعُودِ فِي الْمَسَالِكِ الْجَبَلِيَّةِ بِخُطَى ثَابِتَةٍ دُونَ تَعَجُّلٍ.',
      en: 'Advancing with steady cadence upon steep mountain paths without haste.'
    },
    image: DEFAULT_ASSETS.backgrounds.vallee
  },
  22: {
    title: { fr: 'NOMMER LA DOULEUR SANS HONTE', ar: 'الاعْتِرَافُ بِالضَّعْفِ', en: 'NAMING PAIN WITHOUT SHAME' },
    subtitle: { fr: 'La Clarté de l’Âme', ar: 'صِدْقُ النَّفْسِ', en: 'Inner Truth' },
    brief: {
      fr: 'Déposer le fardeau de la fierté et accueillir ses fragilités avec sincérité pour guérir.',
      ar: 'التَّخَلِّي عَنِ الْكِبْرِ وَقَبُولُ الضَّعْفِ الْبَشَرِيِّ كَبِدَايَةٍ حَقِيقِيَّةٍ لِلشِّفَاءِ.',
      en: 'Laying down the burden of pride and accepting human fragility to begin true healing.'
    },
    image: DEFAULT_ASSETS.backgrounds.verger_fleur
  },
  23: {
    title: { fr: "L'AMĀNAH DU CORPS & LE BOUILLON", ar: 'أَمَانَةُ الْجَسَدِ وَالْحَسَاءُ', en: 'BODY AS A TRUST & WARM BROTH' },
    subtitle: { fr: 'La Fraternité en Acte', ar: 'التَّرَاحُمُ الأَخَوِيُّ', en: 'Compassion in Action' },
    brief: {
      fr: 'Le bouillon fumant offert par le voisin, geste modeste de compassion qui réchauffe l’âme.',
      ar: 'حَسَاءٌ سَاخِنٌ يُقَدِّمُهُ الْجَارُ، لَفْتَةُ أُخُوَّةٍ بَسِيطَةٍ تَبْعَثُ الدِّفْءَ فِي الْقُلُوبِ.',
      en: 'Steaming broth offered by a neighbor, a simple act of brotherly warmth.'
    },
    image: DEFAULT_ASSETS.backgrounds.cuisine_bouillon
  },
  24: {
    title: { fr: 'LA GRAINE SOUS TERRE', ar: 'الْبَذْرَةُ فِي ظُلُمَاتِ التُّرَابِ', en: 'THE SEED IN THE DARK' },
    subtitle: { fr: "L'Attente Féconde", ar: 'الصَّبْرُ الْمُثْمِرُ', en: 'Fertile Waiting' },
    brief: {
      fr: "Méditation sur la graine qui attend dans l'obscurité avant de percer vers le soleil.",
      ar: 'تَأَمُّلٌ فِي الْحَبَّةِ الَّتِي تَصْبِرُ فِي عُمْقِ التُّرَابِ قَبْلَ أَنْ تَنْبُتَ نَحْوَ الضِّيَاءِ.',
      en: 'Contemplation upon the seed waiting in silent darkness before bursting into sunlight.'
    },
    image: DEFAULT_ASSETS.backgrounds.jardin
  },
  25: {
    title: { fr: 'LA MONTAGNE INTÉRIEURE', ar: 'الْجَبَلُ الدَّاخِلِيُّ', en: 'THE INNER MOUNTAIN' },
    subtitle: { fr: 'Le Sommet du Sabr', ar: 'ذِرْوَةُ الصَّبْرِ', en: 'The Summit of Sabr' },
    brief: {
      fr: 'Le combat décisif contre le découragement et le triomphe lumineux de la persévérance.',
      ar: 'الْمُعْتَرَكُ الْحَاسِمُ ضِدَّ الْيَأْسِ وَانْتِصَارُ الصَّبْرِ الْمُضِيءِ فِي أَعَالِي الْقِمَمِ.',
      en: 'The decisive stand against defeatism and the shining victory of perseverance.'
    },
    image: DEFAULT_ASSETS.backgrounds.montagne_climax
  },
  26: {
    title: { fr: "L'AUBE DE LA SAGESSE", ar: 'فَجْرُ الْحِكْمَةِ', en: 'DAWN OF WISDOM' },
    subtitle: { fr: 'La Paix de l’Âme', ar: 'سَكِينَةُ الرُّوحِ', en: 'Peace of the Soul' },
    brief: {
      fr: 'Une paix inébranlable et un regard renouvelé sur la beauté et le sens des épreuves.',
      ar: 'سَكِينَةٌ رَاسِخَةٌ وَرُؤْيَةٌ نُورَانِيَّةٌ مُتَجَدِّدَةٌ لِمَعْنَى الِابْتِلَاءَاتِ وَحِكْمَتِهَا.',
      en: 'Unshakable serenity and a renewed vision of the deeper wisdom behind all trials.'
    },
    image: DEFAULT_ASSETS.backgrounds.epilogue
  }
};

export const SceneTransitionModal: React.FC<SceneTransitionModalProps> = ({
  completedScene,
  nextScene,
  playerXp = 0,
  onOpenQuiz,
  customAssets,
  onProceedToNextScene,
  onReplayScene
}) => {
  const { language } = useLanguage();
  const langKey = (language === 'ar' ? 'ar' : language === 'en' ? 'en' : 'fr') as 'fr' | 'ar' | 'en';
  const isRtl = language === 'ar';

  // Determine target scene (next scene if available, or completed scene summary)
  const targetScene = nextScene || completedScene;
  const targetSceneId = targetScene.id;

  // Determine normalized step for the 7-step narrative journey
  let displayStep = targetSceneId;
  const totalChapterSteps = 7;

  if (targetSceneId <= 9) {
    // Chapter 1 (Branch at step 5: Place=5, Ruelle=6, Vergers=7)
    if (targetSceneId <= 4) {
      displayStep = targetSceneId;
    } else if (targetSceneId >= 5 && targetSceneId <= 7) {
      displayStep = 5;
    } else if (targetSceneId === 8) {
      displayStep = 6;
    } else if (targetSceneId === 9) {
      displayStep = 7;
    }
  } else if (targetSceneId >= 10 && targetSceneId <= 16) {
    // Chapter 2 (Branch at step 5: 14 or 142)
    if (targetSceneId <= 13) {
      displayStep = targetSceneId - 9;
    } else if (targetSceneId === 14 || targetSceneId === 142) {
      displayStep = 5;
    } else if (targetSceneId === 15) {
      displayStep = 6;
    } else if (targetSceneId === 16) {
      displayStep = 7;
    }
  } else {
    // Chapter 3 (Branch at step 5: 201 or 202)
    if (targetSceneId <= 20) {
      displayStep = targetSceneId - 16;
    } else if (targetSceneId === 201 || targetSceneId === 202) {
      displayStep = 5;
    } else if (targetSceneId === 21) {
      displayStep = 6;
    } else if (targetSceneId === 22) {
      displayStep = 7;
    }
  }

  const stepsList = Array.from({ length: totalChapterSteps }, (_, i) => i + 1);
  const predefined = ALL_SCENE_TRANSITIONS[targetSceneId];
  const dynamicImage = getSceneIllustration(targetScene, customAssets);

  const transitionMeta: TransitionData = {
    title: predefined?.title || { fr: targetScene.title, ar: targetScene.title, en: targetScene.title },
    subtitle: predefined?.subtitle || { fr: targetScene.subtitle || 'La Voie se poursuit', ar: 'الطَّرِيقُ يَتَوَاصَلُ', en: 'The Journey Continues' },
    brief: predefined?.brief || {
      fr: 'Le voyage continue. Chaque pas en avant forge le caractère et enrichit le savoir.',
      ar: 'يَسْتَمِرُّ السَّيْرُ. كُلُّ خُطْوَةٍ إِلَى الْأَمَامِ تَصْقُلُ النَّفْسَ وَتَزِيدُ فِي الْحِكْمَةِ.',
      en: 'The journey moves forward. Every step shapes the spirit and enriches wisdom.'
    },
    image: (predefined && predefined.image) ? predefined.image : dynamicImage,
    video: predefined?.video
  };

  // Action completed in previous scene
  const actionBeat = completedScene.beats.find((b) => b.type === 'real_action');
  const action = actionBeat?.realActionId ? REAL_ACTIONS[actionBeat.realActionId] : undefined;

  // Spiritual Gate & XP requirements
  const nextRequiredXp = nextScene?.requiredXp || 0;
  const isLocked = Boolean(nextScene && nextRequiredXp > playerXp);
  const missingXp = Math.max(0, nextRequiredXp - playerXp);
  const xpPercent = nextRequiredXp > 0 ? Math.min(100, Math.round((playerXp / nextRequiredXp) * 100)) : 100;

  // Header Subtitle Phrases
  const headerSubtitleText = {
    fr: 'LE VOYAGE SE POURSUIT',
    ar: 'الطَّرِيقُ يَتَوَاصَلُ',
    en: 'THE JOURNEY CONTINUES'
  }[langKey];

  const ctaButtonText = isLocked
    ? {
        fr: `DÉBLOQUER LA PORTE (+${missingXp} XP REQUIS)`,
        ar: `فَتْحُ الْبَابِ (+${missingXp} نُقْطَةٍ مَطْلُوبَةٍ)`,
        en: `UNLOCK THE GATE (+${missingXp} XP NEEDED)`
      }[langKey]
    : {
        fr: 'POURSUIVRE LE VOYAGE',
        ar: 'مُوَاصَلَةُ الرِّحْلَةِ',
        en: 'CONTINUE THE JOURNEY'
      }[langKey];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-300 select-none overflow-y-auto">
      {/* Container with warm antique ivory & parchment aesthetic */}
      <div 
        dir={isRtl ? 'rtl' : 'ltr'}
        className="bg-[#fbf7ee] border-2 border-[#d97c27]/40 rounded-3xl w-full max-w-2xl shadow-[0_16px_48px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col my-auto relative animate-in zoom-in-95 duration-300"
      >
        {/* Subtle Decorative Background Corner Foliage (SVGs) */}
        <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-900 fill-current">
            <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-15 transform scale-x-[-1]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-900 fill-current">
            <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" />
          </svg>
        </div>

        {/* 1. Top Header: Scene Number Pill & Noble Journey Subtitle */}
        <div className="pt-6 pb-2 px-6 flex flex-col items-center text-center gap-1.5 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f4ebd9] border border-[#d2be9f] text-[#8c5a2b] shadow-xs">
            <span className="text-amber-600 text-xs">✦</span>
            <span className="font-cinzel text-xs font-bold tracking-widest uppercase">
              {language === 'ar'
                ? `الْمَشْهَدُ ${displayStep} • ${totalChapterSteps}`
                : `SCÈNE ${displayStep} • ${totalChapterSteps}`}
            </span>
            <span className="text-amber-600 text-xs">✦</span>
          </div>

          <div className="flex items-center gap-3 text-stone-500 text-[11px] font-cinzel tracking-widest uppercase mt-0.5">
            <span className="h-px w-8 bg-[#d2be9f]/60" />
            <span className="text-[#8c5a2b] font-semibold">{headerSubtitleText}</span>
            <span className="h-px w-8 bg-[#d2be9f]/60" />
          </div>
        </div>

        {/* 2. Companion Journey Progression Bar (Othmân ➔ Noura) */}
        <div className="px-8 py-3 flex items-center justify-center gap-3 z-10 max-w-md mx-auto w-full">
          {/* Othmân Avatar Badge */}
          <div 
            className="w-10 h-10 rounded-full border-2 border-[#d97c27] bg-[#1a1209] overflow-hidden shadow-sm shrink-0 flex items-center justify-center"
            title="Othmân"
          >
            <img 
              src={avatarOthman} 
              alt="Othmân" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Interactive Journey Line */}
          <div className="flex-1 flex items-center justify-between relative px-2">
            <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-0.5 bg-[#e0d0b8]" />
            <div 
              className="absolute left-2 top-1/2 -translate-y-1/2 h-0.5 bg-[#d97c27] transition-all duration-700" 
              style={{ width: `${Math.min(100, Math.max(0, ((displayStep - 1) / (totalChapterSteps - 1)) * 100))}%` }}
            />

            {stepsList.map((dotId) => {
              const isPast = dotId < displayStep;
              const isCurrent = dotId === displayStep;

              return (
                <div 
                  key={dotId} 
                  className={`relative z-10 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isCurrent
                      ? 'w-4 h-4 bg-[#d97c27] border-2 border-[#fbf7ee] shadow-[0_0_8px_rgba(217,124,39,0.8)] scale-110'
                      : isPast
                      ? 'w-2.5 h-2.5 bg-[#d97c27]'
                      : 'w-2 h-2 bg-[#d2be9f]'
                  }`}
                />
              );
            })}
          </div>

          {/* Noura Avatar Badge */}
          <div 
            className="w-10 h-10 rounded-full border-2 border-[#2d6a4f] bg-[#1a1209] overflow-hidden shadow-sm shrink-0 flex items-center justify-center"
            title="Noura"
          >
            <img 
              src={avatarNoura} 
              alt="Noura" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* 3. Central 16:9 Cinematic Landscape Frame */}
        <div className="px-5 sm:px-8 py-2 z-10">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[#d97c27]/40 shadow-md group bg-[#161322]">
            {transitionMeta.video ? (
              <video
                src={transitionMeta.video}
                poster={transitionMeta.image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <img
                src={transitionMeta.image}
                alt={transitionMeta.title[langKey]}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            )}
            {/* Soft Ambient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 4. Scene Title, Poetic Subtitle & Brief */}
        <div className="px-6 sm:px-10 py-3 text-center flex flex-col gap-1.5 z-10">
          {/* Main Title with Elegant Ornaments */}
          <h2 className="font-cinzel text-xl sm:text-2xl font-black text-[#3a2312] tracking-wide flex items-center justify-center gap-2">
            <span className="text-amber-600 text-sm">✦</span>
            <span>{transitionMeta.title[langKey]}</span>
            <span className="text-amber-600 text-sm">✦</span>
          </h2>

          {/* Poetic Subtitle */}
          <p className="font-cinzel text-xs sm:text-sm font-bold text-[#b45309] italic">
            — {transitionMeta.subtitle[langKey]} —
          </p>

          {/* Poetic Brief */}
          <p className="text-xs sm:text-[13px] text-[#5c4028] italic font-serif leading-relaxed max-w-lg mx-auto mt-1">
            {transitionMeta.brief[langKey]}
          </p>
        </div>

        {/* Action XP Reward Badge if applicable */}
        {action && (
          <div className="mx-6 sm:mx-10 mb-2 p-2.5 rounded-xl bg-[#ebf5e9] border border-[#74c69d] flex items-center justify-between gap-3 text-xs z-10 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <span className="font-bold text-[#2d522f]">
                {language === 'ar' ? 'مهمة واقعية مُنجزة : ' : 'Action dans la vraie vie : '}
                <span className="font-normal">{action.title}</span>
              </span>
            </div>
            <span className="font-mono font-black text-[#2d522f] bg-[#d8f3dc] px-2 py-0.5 rounded-md border border-[#74c69d]">
              +{action.xpReward} XP
            </span>
          </div>
        )}

        {/* Spiritual Gate / Missing XP Notification */}
        {isLocked && (
          <div className="mx-6 sm:mx-10 mb-3 p-3 rounded-2xl bg-amber-50 border border-amber-400 flex items-center justify-between gap-3 z-10 text-xs">
            <div className="flex items-center gap-2 text-amber-900">
              <Lock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                {language === 'ar'
                  ? `الباب مغلق : يلزمك ${missingXp} نقطة علم إضافية.`
                  : `Porte fermée : il te manque ${missingXp} XP.`}
              </span>
            </div>
            {onOpenQuiz && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playSelect();
                  onOpenQuiz();
                }}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold font-cinzel text-xs cursor-pointer shadow-xs shrink-0"
              >
                {language === 'ar' ? 'اختبار علم ⚡' : 'Quiz Savoir ⚡'}
              </button>
            )}
          </div>
        )}

        {/* 5. Bottom Action: Noble CTA Button & Replay Option */}
        <div className="pt-2 pb-6 px-6 sm:px-10 flex flex-col items-center gap-3 z-10">
          <button
            type="button"
            onClick={() => {
              soundManager.playSelect();
              if (isLocked) {
                onOpenQuiz?.();
              } else {
                onProceedToNextScene();
              }
            }}
            className="w-full sm:w-auto min-w-[280px] py-3 px-8 rounded-2xl bg-gradient-to-r from-[#d97c27] via-[#ea8c35] to-[#d97c27] hover:brightness-105 active:translate-y-0.5 text-white font-cinzel font-bold text-sm sm:text-base border border-amber-300/40 shadow-[0_4px_16px_rgba(217,124,39,0.35)] flex items-center justify-center gap-2.5 transition-all cursor-pointer"
          >
            <span>{ctaButtonText}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>

          {/* Discreet Replay Button */}
          <button
            type="button"
            onClick={() => {
              soundManager.playSelect();
              onReplayScene();
            }}
            className="text-[11px] text-[#8c5a2b] hover:text-[#3a2312] underline font-cinzel font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3 text-[#d97c27]" />
            <span>
              {language === 'ar'
                ? 'إعادة قراءة المشهد السابق'
                : 'Relire la scène précédente'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
