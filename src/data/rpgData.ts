import { QuestItem, BadgeItem, EquipmentItem, PlayerStats, TravelerAppearance } from '../types';

export const INITIAL_STATS: PlayerStats = {
  discipline: 12,
  savoir: 8,
  patience: 9,
  bonte: 7,
  constance: 11
};

export const INITIAL_QUESTS: QuestItem[] = [
  {
    id: 'q_priere',
    title: 'Prière',
    description: 'Accomplir les prières du jour',
    xpReward: 50,
    category: 'daily',
    completed: false,
    iconType: 'prayer'
  },
  {
    id: 'q_lecture',
    title: 'Lecture 5 min',
    description: 'Lire quelque chose d’utile',
    xpReward: 30,
    category: 'daily',
    completed: false,
    iconType: 'book'
  },
  {
    id: 'q_focus',
    title: '15 min sans distraction',
    description: 'Rester concentré',
    xpReward: 40,
    category: 'daily',
    completed: false,
    iconType: 'focus'
  },
  {
    id: 'q_bonus',
    title: 'Objectifs bonus',
    description: 'Faire une bonne action spontanée',
    xpReward: 20,
    category: 'daily',
    completed: false,
    iconType: 'bonus'
  },
  {
    id: 'q_story_1',
    title: 'Le Premier Pas',
    description: 'Quitter la chambre et choisir son chemin au Grand Poteau',
    xpReward: 100,
    category: 'story',
    completed: false,
    iconType: 'story',
    progress: { current: 0, max: 1 }
  },
  {
    id: 'q_story_2',
    title: 'Dissiper le Grand Waswâs',
    description: 'Triompher des murmures du doute au sommet et faire triompher la lumière',
    xpReward: 200,
    category: 'story',
    completed: false,
    iconType: 'boss',
    progress: { current: 0, max: 1 }
  }
];

export const INITIAL_BADGES: BadgeItem[] = [
  {
    id: 'b_premier_pas',
    title: 'Premier pas',
    description: 'Accomplir ta première quête',
    category: 'progression',
    unlocked: true,
    iconName: 'star'
  },
  {
    id: 'b_7_jours',
    title: '7 jours',
    description: 'Avoir 7 jours de série',
    category: 'habitudes',
    unlocked: true,
    iconName: 'flame'
  },
  {
    id: 'b_curieux',
    title: 'Curieux',
    description: 'Lire 10 minutes 10 fois',
    category: 'habitudes',
    unlocked: true,
    iconName: 'book'
  },
  {
    id: 'b_discipline',
    title: 'Discipliné',
    description: '15 min sans distraction 5 fois',
    category: 'habitudes',
    unlocked: false,
    iconName: 'shield'
  },
  {
    id: 'b_pont',
    title: 'Pont de la rencontre',
    description: 'Rencontrer Noura',
    category: 'histoire',
    unlocked: true,
    iconName: 'compass'
  },
  {
    id: 'b_determine',
    title: 'Déterminé',
    description: 'Reprendre après 3 jours d’arrêt',
    category: 'habitudes',
    unlocked: true,
    iconName: 'heart'
  },
  {
    id: 'b_explorateur',
    title: 'Explorateur',
    description: 'Terminer le Chapitre 1',
    category: 'histoire',
    unlocked: false,
    iconName: 'map'
  },
  {
    id: 'b_voyageur',
    title: 'Voyageur',
    description: 'Atteindre le niveau 10',
    category: 'progression',
    unlocked: false,
    iconName: 'trophy'
  },
  {
    id: 'b_lumiere_vive',
    title: 'Lumière vive',
    description: 'Atteindre 50% de lumière',
    category: 'progression',
    unlocked: false,
    iconName: 'sun'
  }
];

export const INITIAL_EQUIPMENT: EquipmentItem[] = [
  {
    id: 'eq_tenue_voyageur',
    name: 'Tunique de Lin',
    category: 'tenue',
    equipped: true,
    statBonus: '+2 Constance',
    description: 'Une tenue simple et respirante pour les longues marches.'
  },
  {
    id: 'eq_tenue_noble',
    name: 'Robe du Sage',
    category: 'tenue',
    equipped: false,
    statBonus: '+4 Savoir',
    description: 'Tissée avec soin dans un fil noble.'
  },
  {
    id: 'eq_cape_marcheur',
    name: 'Cape de Marcheur',
    category: 'cape',
    equipped: true,
    statBonus: '+3 Patience',
    description: 'Protège du vent et du soleil couchant.'
  },
  {
    id: 'eq_cape_desert',
    name: 'Voile Émeraude',
    category: 'cape',
    equipped: false,
    statBonus: '+3 Bonté',
    description: 'Un voile léger teinté d’or et de vert.'
  },
  {
    id: 'eq_sac_cuir',
    name: 'Besace en cuir',
    category: 'sac',
    equipped: true,
    statBonus: '+5 Inventaire',
    description: 'Idéale pour transporter ses parchemins.'
  },
  {
    id: 'eq_lanterne_espoir',
    name: 'Lanterne d’Espoir',
    category: 'lanterne',
    equipped: true,
    statBonus: '+10% Lumière',
    description: 'Une flamme perpétuelle qui dissipe le doute.'
  },
  // Items / Objets
  {
    id: 'it_parchemin',
    name: 'Parchemin du Savoir',
    category: 'objet',
    description: 'Contient les enseignements précieux d’Isti’ādhah.'
  },
  {
    id: 'it_tasbih',
    name: 'Chapelet de Bois',
    category: 'objet',
    description: 'Aide à ancrer la constance et le Dhikr.'
  },
  {
    id: 'res_graine',
    name: 'Graines de Grenade',
    category: 'ressource',
    description: 'Récoltées dans l’oasis abandonnée.'
  },
  {
    id: 'dec_tapis',
    name: 'Tapis Artisanal',
    category: 'decoration',
    description: 'Décore le sol de ta chambre avec élégance.'
  }
];

export const INITIAL_APPEARANCE: TravelerAppearance = {
  bodyType: 1,
  skinColor: 2,
  eyeType: 1,
  hairStyle: 'Chauve',
  beardStyle: 'Aucune',
  outfitId: 'eq_tenue_voyageur'
};
