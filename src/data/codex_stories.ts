import { CodexStory } from '../types';

export const codexStories: CodexStory[] = [
  {
    id: 'codex_nawawi',
    title: 'L\'Imam An-Nawawi',
    content: 'L\'Imam An-Nawawi, de son vrai nom Yahya ibn Sharaf, était un éminent savant et un ascète. Il est notamment connu pour ses recueils de hadiths, dont "Les Jardins des Vertueux" (Riyad as-Salihin) et ses "40 Hadiths". Sa vie était dédiée à l\'apprentissage (Ilm) et à l\'adoration.',
    type: 'biography',
    requiredIlmLevel: 1,
  },
  {
    id: 'codex_bukhari',
    title: 'L\'Imam Al-Bukhari',
    content: 'Muhammad ibn Isma\'il al-Bukhari est célèbre pour son recueil de hadiths, le Sahih al-Bukhari, considéré comme le livre le plus authentique après le Coran. Sa mémorisation exceptionnelle et sa rigueur scientifique sont un modèle pour tout étudiant en sciences islamiques.',
    type: 'biography',
    requiredIlmLevel: 2,
  },
  {
    id: 'codex_invocation_sabr',
    title: 'L\'Istiʿādhah',
    content: 'Dire "Aʿūdhu billāhi minash-shayṭānir-rajīm" (Je cherche refuge auprès d\'Allah contre Satan le banni) est une protection essentielle lors de la colère ou de l\'énervement.',
    type: 'invocation',
    requiredIlmLevel: 1,
  }
];
