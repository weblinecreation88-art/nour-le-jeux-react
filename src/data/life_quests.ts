import { LifeQuest } from '../types';

export const lifeQuests: LifeQuest[] = [
  {
    id: 'lq_adab_1',
    title: 'Sourire sincère',
    description: 'Saluer au moins 3 personnes avec le sourire.',
    category: 'daily',
    virtue: 'Akhlaq',
    xpReward: 10,
  },
  {
    id: 'lq_ordre_1',
    title: 'Espace ordonné',
    description: 'Rendre son espace personnel (chambre/bureau) propre et ordonné.',
    category: 'daily',
    virtue: 'Akhlaq',
    xpReward: 10,
  },
  {
    id: 'lq_gratitude_1',
    title: 'Merci sincère',
    description: 'Remercier sincèrement une personne ayant rendu un service.',
    category: 'daily',
    virtue: 'Shukr',
    xpReward: 10,
  },
  {
    id: 'lq_ilm_weekly_1',
    title: 'Nouvelle invocation',
    description: 'Apprendre et comprendre le sens d\'une nouvelle invocation de la vie quotidienne.',
    category: 'weekly',
    virtue: 'Ilm',
    xpReward: 30,
  },
  {
    id: 'lq_ilm_weekly_2',
    title: 'Savant illustre',
    description: 'Lire la biographie d\'un savant dans le Codex.',
    category: 'weekly',
    virtue: 'Ilm',
    xpReward: 30,
  },
  {
    id: 'lq_sabr_special_1',
    title: 'Maîtrise de la colère',
    description: 'En cas de frustration ou d\'énervement, faire une pause et effectuer l\'Istiʿādhah.',
    category: 'special',
    virtue: 'Sabr',
    xpReward: 50,
  },
];
