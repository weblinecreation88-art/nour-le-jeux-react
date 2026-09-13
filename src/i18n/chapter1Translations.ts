import { Language } from './translations';

export interface Chapter1TranslationSet {
  scenes: Record<number, { title: string; subtitle?: string; description?: string }>;
  beats: Record<string, string>;
  adaptiveVariants?: Record<string, string>;
  choices: Record<string, { label: string; habitMessage?: string; fallbackLabel?: string }>;
  quizzes: Record<string, {
    question: string;
    options: Record<string, string>;
    explanation: string;
    theologicalNote?: string;
    citationText?: string;
  }>;
  realActions: Record<string, {
    title: string;
    instruction: string;
    subtext: string;
    reflectionPrompt: string;
  }>;
  climaxSteps: Record<string, {
    title: string;
    meaning: string;
    description: string;
  }>;
}

export const CHAPTER_1_TRANSLATIONS: Record<Language, Chapter1TranslationSet> = {
  fr: {
    scenes: {
      1: { title: 'Le Réveil d’Othmân', subtitle: 'La chambre au lever du soleil' },
      2: { title: 'La Clé du Départ', subtitle: 'Le seuil de la maison' },
      3: { title: 'L’Appel du Devoir', subtitle: 'Vers le village' },
      4: { title: 'L’Épreuve du Marché', subtitle: 'Le tumulte des étals' },
      5: { title: 'La Traversée du Carrefour', subtitle: 'Le poteau indicateur' },
      6: { title: 'L’Atelier de l’Artisan', subtitle: 'La forge et le bois' },
      7: { title: 'L’Orangerie et la Vigne', subtitle: 'Le verger en fleurs' },
      8: { title: 'Le Premier Combat Intérieur', subtitle: 'Face au doute' },
      9: { title: 'L’Aube de la Sagesse', subtitle: 'L’arbre protecteur' }
    },
    beats: {
      s1_intro_1: 'La lumière de l’aube pénètre doucement par la fenêtre entrouverte de la chambre.',
      s1_intro_2: 'Un souffle d’air frais annonce le début d’une nouvelle journée d’apprentissage.',
      s1_intro_3: 'Othmân ouvre les yeux, encore à moitié endormi sous sa couverture.',
      s1_b1: '... Déjà l’aube. Tout est si silencieux.',
      s1_b2: 'As-salāmu ʿalaykum Othmân. Une nouvelle journée commence sous le regard bienveillant du Créateur. Comment souhaites-tu commencer ce matin ?',
      s1_b3: 'Chaque geste du matin prépare ton cœur et ton esprit pour la journée qui s’annonce.',
      s1_b4: 'Tu as raison Noura. Ranger mon lit et remettre de l’ordre dans mes affaires... cela m’aidera à voir clair dès le matin.',
      s1_b5: 'La discipline commence par les gestes invisibles. Ranger son lit, c’est honorer son espace.',
      s1_b6: 'Tu peux prendre un instant pour faire ton lit dans le monde réel.',
      s1_b7: 'Me voilà prêt pour la première étape. Un esprit clair dans un lieu ordonné.',
      s1_pont_lit: 'Le Prophète ﷺ aimait l’ordre, la propreté et la constance dans les petites actions quotidiennes.',
      s1_b8: 'Excellent début Othmân. L’ordre extérieur apaise le tumulte intérieur.',
      s1_b9: 'Mon corps a encore besoin de se réveiller... J’ai la gorge un peu sèche.',
      s1_b10: 'Le corps est un dépôt précieux confié par ton Créateur. En prendre soin avec les bonnes manières prophétiques fait de chaque gorgée une source de bienfait.',
      s1_water_1: 'Voici une carafe d’eau fraîche. Te souviens-tu des manières enseignées par le Messager d’Allah ﷺ lorsqu’on s’abreuve ?',
      s1_water_2: 'S’asseoir calmement, tenir le récipient de la main droite, prononcer le Nom d’Allah et boire en trois respirations paisibles.',
      s1_water_3: 'Prends le temps de boire un verre d’eau dans la vraie vie en observant cet adab.',
      s1_pont_eau: 'Le Prophète ﷺ buvait en trois gorgées et s’asseyait pour s’abreuver avec sérénité et gratitude.',
      s1_water_4: 'Al-Hamdulillāh. Cette eau fraîche revigore mon corps et apaise mon esprit.',
      s1_b13: 'L’ordre, le soin du corps et la gratitude... Ton matin commence sous les meilleures dispositions.',
      s1_b14: 'Noura, avant de quitter la maison, j’aimerais réciter l’invocation du matin pour placer ma journée sous la protection d’Allah.',
      s1_b15: 'L’Istiʿādhah et les adhkar du matin illuminent le cœur et dissipent les ombres du découragement.',
      s1_b16: 'Voyons si tu te souviens de la formule sacrée pour chercher refuge auprès d’Allah.',
      s1_b18: '« Aʿūdhu billāhi mina sh-shayṭāni r-rajīm ». Je cherche refuge auprès d’Allah contre le doute et le murmure égarant.',
      s1_b19: 'Ton esprit est prêt. L’aventure de ce jour t’attend au-delà du seuil.',
      s2_b1: 'Othmân se tient devant la porte d’entrée de la demeure familiale.',
      s2_b2: 'Le chemin s’ouvre devant moi... Vers où mes pas vont-ils me mener aujourd’hui ?',
      s2_b3: 'Chaque départ est un acte de foi. Placer sa confiance en Allah avant de faire le premier pas.',
      s2_b4: '« Bismillâh, tawakkaltu ʿalâ Allâh, wa lâ hawla wa lâ quwwata illâ billâh ».',
      s2_b5: 'Une invocation puissante qui place le voyageur sous la garde du Tout-Miséricordieux.',
      s2_b6: 'Tu peux préparer ton sac et réciter cette duʿāʾ de départ dans la vraie vie.',
      s2_b7: 'Mon sac est prêt, mon intention est renouvelée. Je sors avec sérénité.',
      s2_dua_1: 'La confiance en Allah (Tawakkul) n’exclut pas la prévoyance : on attache sa monture, puis on s’en remet au Seigneur.',
      s2_dua_2: 'Exactement. Agir concrètement tout en gardant le cœur attaché au Créateur.',
      s2_dua_3: 'Regarde au loin Othmân : la brume se lève sur la vallée du village.',
      s2_dua_4: 'Les gens commencent à vaquer à leurs occupations.',
      s2_pont_depart: 'Le Prophète ﷺ disait en sortant de chez lui : « Au nom d’Allah, je place ma confiance en Allah. Nulle force ni puissance que par Allah ».',
      s2_dua_6: 'Marchons d’un pas assuré.',
      s2_b9: 'Le village est tout proche. De nouvelles rencontres nous attendent.',
      s3_b1: 'Othmân arrive aux abords du village.',
      s3_b2: 'Les ruelles s’animent peu à peu. Les marchands ouvrent leurs échoppes.',
      s3_b3: 'Un jeune homme passe à côté de nous d’un pas pressé sans un regard.',
      s3_b4: 'Dois-je lui adresser la parole ou continuer mon chemin ?',
      s3_b5: 'Le salām est la première clé qui ouvre les cœurs fermés.',
      s3_b6: 'Que souhaites-tu dire à ce jeune villageois ?',
      s3_b7: '« As-salāmu ʿalaykum wa raḥmatullāh ! »',
      s3_b8: 'Le jeune homme s’arrête, surpris mais visiblement touché par cette salutation chaleureuse.',
      s3_b9: '« Wa ʿalaykumu s-salām... Merci voyageur, ta bienveillance illumine ma matinée. »',
      s3_pont_salam: 'Le Prophète ﷺ a enseigné : « Répandez le Salām entre vous et vous vous aimerez ».',
      s3_b11: 'Un simple mot sincère a suffi à transformer l’atmosphère.',
      s3_b12: 'Continuons vers le cœur du marché.',
      s4_b1: 'Le marché du village est en pleine effervescence.',
      s4_b2: 'Des paniers de fruits sont empilés près des étals.',
      s4_b3: 'Soudain, un marchand trébuche et renverse son chargement de dattes et de figues !',
      s4_b4: 'Personne ne semble s’en soucier dans la cohue générale.',
      s4_b5: 'Othmân voit la détresse dans les yeux du vieil homme.',
      s4_b6: 'Que vas-tu faire face à cet imprévu ?',
      s4_b7: 'Othmân s’accroupit aussitôt pour ramasser les fruits et remettre les caisses en ordre.',
      s4_b8: 'Le marchand le regarde avec une immense gratitude : « Que Dieu te bénisse jeune homme, peu de gens s’arrêtent pour aider sans rien attendre en retour. »',
      s4_b9: '« C’est tout naturel, nous sommes frères dans l’humanité et la foi. »',
      s4_pont_aide: 'Le Prophète ﷺ a dit : « Allah aide Son serviteur tant que celui-ci aide son frère ».',
      s4_b11: 'Cette entraide discrète a allégé le fardeau d’un travailleur honnête.',
      s4_b12: 'Reprenons notre route vers le carrefour des collines.',
      s5_b1: 'Othmân et Noura atteignent un carrefour dominé par un grand panneau indicateur en bois.',
      s5_b2: 'Plusieurs sentiers s’offrent à nous : l’un mène aux vergers, l’autre vers l’atelier des artisans.',
      s5_b3: 'Une ombre furtive semble flotter dans l’air... Un vent frais fait frissonner les feuilles.',
      s5_b4: 'Un murmure insidieux résonne au fond de l’esprit d’Othmân.',
      s5_b5: '« Pourquoi te fatiguer autant pour des inconnus ? Pense d’abord à toi-même... »',
      s5_b6: 'C’est le murmure du Waswâs qui tente d’introduire le doute et l’égoïsme.',
      s5_b7: 'Comment souhaites-tu réagir face à cette pensée parasite ?',
      s5_b8: '« Je cherche refuge auprès d’Allah contre le doute et l’égoïsme. Mon cœur reste fixé sur le bien. »',
      s5_b9: 'La brume s’estompe immédiatement sous la force du rappel divin.',
      s5_pont_refuge: '« Et si jamais le Diable t’incite à quelque mauvaise action, cherche refuge auprès d’Allah. Il est Celui qui entend et sait tout. » (Coran 41:36)',
      s5_b11: 'Le carrefour est dégagé. Choisissons notre destination.',
      s6_b1: 'Devant nous se dresse l’atelier de sculpture et de menuiserie du village.',
      s6_b2: 'Un artisan sculpte patiemment un morceau de bois d’olivier.',
      s6_b3: 'Ses gestes sont précis, mesurés et empreints de dévouement.',
      s6_b4: 'L’Ihsān : rechercher l’excellence dans chaque travail accompli.',
      s6_b5: 'L’artisan s’arrête et essuie son front : « La beauté d’un ouvrage ne réside pas dans la vitesse, mais dans la sincérité du geste. »',
      s6_b6: 'Comment réponds-tu aux paroles du maître artisan ?',
      s6_b7: '« Votre patience et votre maîtrise m’inspirent. Le travail bien fait est une prière en action. »',
      s6_b8: 'L’artisan sourit : « Prends ce petit fuseau de bois gravé, jeune voyageur. Qu’il te rappelle de toujours persévérer avec patience (Sabr). »',
      s6_pont_ihsan: 'Le Prophète ﷺ a dit : « Certes, Allah aime que lorsque l’un de vous accomplit une œuvre, il la perfectionne avec excellence ».',
      s6_b10: 'Un précieux enseignement sur la constance et l’humilité.',
      s7_b1: 'Le sentier nous conduit à travers de magnifiques vergers d’amandiers et d’oliviers.',
      s7_b2: 'Une source d’eau claire serpente entre les arbres fruitiers.',
      s7_b3: 'La nature tout entière témoigne de la générosité et de l’harmonie de la création divine.',
      s7_b4: '« C’est Lui qui fait descendre du ciel une eau grâce à laquelle Nous faisons germer toute plante... » (Coran 6:99)',
      s7_b5: 'Prenons un moment de recueillement et de gratitude (Shukr).',
      s7_b6: 'Othmân s’abreuve à la source et arrose délicatement une jeune pousse d’arbre à ses pieds.',
      s7_b7: 'Prendre soin du vivant est un acte noble qui attire la bénédiction divine.',
      s7_pont_shukr: '« Si vous êtes reconnaissants, très certainement J’augmenterai Mes bienfaits pour vous » (Coran 14:7).',
      s7_b9: 'Le crépuscule commence à teinter le ciel de nuances dorées et pourpres.',
      s8_b1: 'Alors que la nuit approche, un brouillard épais s’épaissit sur le sentier escarpé.',
      s8_b2: 'Le Grand Waswâs surgit sous la forme d’un tourbillon ténébreux.',
      s8_b3: '« Tu crois avoir accompli de grandes choses aujourd’hui ? Tu n’es rien... Tes efforts seront bientôt oubliés... »',
      s8_b4: 'Le doute tente d’éteindre la lumière du cœur et d’effacer les progrès accomplis.',
      s8_b5: 'Othmân, puise dans tout ce que tu as appris aujourd’hui : l’Istiʿādhah, le Savoir, la Patience, le Bon Comportement et l’Action sincère !',
      s8_b6: 'Le combat spirituel s’engage au plus profond de l’âme.',
      s9_b1: 'Le tourbillon d’ombre se dissout totalement dans un éclat de lumière dorée.',
      s9_b2: 'Le calme et la paix reviennent sur la montagne et dans le cœur d’Othmân.',
      s9_b3: 'L’aube nouvelle se lève sur l’horizon.',
      s9_b4: 'Le Vieux Sage apparaît au sommet du sentier, un doux sourire sur les lèvres.',
      s9_b5: '« Félicitations, Othmân. Tu as surmonté ta première grande épreuve intérieure. »',
      s9_b6: '« Ce que tu as bâti aujourd’hui n’est pas un simple savoir, mais une force d’âme qui t’accompagnera toute ta vie. »',
      s9_b7: 'Othmân incline la tête avec humilité : « Rien n’aurait été possible sans l’aide d’Allah et les rappels de Noura. »',
      s9_b8: 'Le Chapitre 1 s’achève, mais la grande quête de la Sagesse ne fait que commencer.'
    },
    choices: {
      s1_c1: { label: 'Ranger mon lit avec soin (+Discipline)' },
      s1_c2: { label: 'Boire un verre d’eau selon la tradition (+Vitalité)' },
      s1_c3: { label: 'Réciter l’invocation du matin (+ʿIlm)' },
      s1_water_c1: { label: 'M’asseoir et boire en trois gorgées avec gratitude (+Adab, +Hilm)' },
      s1_water_c2: { label: 'Boire d’un trait sans m’attarder (+Vitalité)' },
      s2_c1: { label: 'Vérifier mon sac et réciter la duʿāʾ de départ (+Discipline, +Sabr)' },
      s2_c2: { label: 'Sortir immédiatement plein d’enthousiasme (+Vitalité)' },
      s3_c1: { label: 'Saluer le jeune homme avec un sourire sincère (+Adab, +Hilm)' },
      s3_c2: { label: 'Continuer ma marche sans déranger (+Discipline)' },
      s4_c1: { label: 'Aider le marchand à ramasser ses fruits (+Adab, +Sabr)' },
      s4_c2: { label: 'Regarder si quelqu’un d’autre s’en occupe (+Hilm)' },
      s5_c1: { label: 'Réciter l’Istiʿādhah et chasser le doute (+ʿIlm, +Hilm)' },
      s5_c2: { label: 'Faire une pause et méditer calmement (+Sabr)' },
      s6_c1: { label: 'Écouter avec respect la leçon de l’artisan (+ʿIlm, +Adab)' },
      s6_c2: { label: 'L’aider à ranger ses outils (+Discipline, +Vitalité)' }
    },
    quizzes: {
      quiz_istiadhah: {
        question: 'Que peut-on dire lorsqu’on cherche refuge auprès d’Allah contre Shayṭān ?',
        options: {
          A: 'Il n’y a rien à dire, il faut juste ignorer.',
          B: 'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm.',
          C: 'Une formule que chacun invente.',
          D: 'Il faut être savant pour avoir le droit de le dire.'
        },
        explanation: 'L’istiʿādhah est explicitement mentionnée dans le Coran : lorsqu’on cherche protection ou récitation, on demande refuge auprès d’Allah contre le Shayṭān.'
      },
      quiz_taaruf: {
        question: 'Pourquoi Allah a-t-Il créé les peuples et les tribus ?',
        options: {
          A: 'Pour qu’ils se comparent.',
          B: 'Pour que les gens puissent se connaître.',
          C: 'Pour que chacun reste de son côté.',
          D: 'Pour déterminer qui est supérieur.'
        },
        explanation: 'Coran 49:13 indique que les peuples et tribus ont été créés « pour que vous vous entreconnaissiez » (Taʿāruf).'
      },
      quiz_adab: {
        question: 'Que faire lorsqu’on n’a rien de bon à dire ?',
        options: {
          A: 'Parler quand même.',
          B: 'Répondre sur le même ton.',
          C: 'Garder le silence.',
          D: 'Se moquer.'
        },
        explanation: 'Le Prophète ﷺ a enseigné de parler en bien ou de garder le silence.'
      },
      quiz_sabr: {
        question: 'Quel comportement correspond le mieux au sabr ?',
        options: {
          A: 'Insister jusqu’à ce que l’autre accepte.',
          B: 'Persévérer avec patience face à la difficulté.',
          C: 'Abandonner immédiatement.',
          D: 'Faire semblant que ça ne fait pas mal.'
        },
        explanation: 'Le Sabr est une endurance constructive : on accepte la réalité d’une épreuve sans s’emporter.'
      },
      quiz_niyyah: {
        question: 'Dans une bonne action, quelle chose compte notamment auprès d’Allah ?',
        options: {
          A: 'Être applaudi.',
          B: 'Être impressionnant.',
          C: 'L’intention avec laquelle on agit.',
          D: 'Recevoir quelque chose en retour.'
        },
        explanation: 'Le hadith établit que la valeur spirituelle de chaque action dépend de la pureté de l’intention (la Niyyah).'
      },
      quiz_shukr: {
        question: 'Comment appelle-t-on la gratitude envers Allah pour Ses bienfaits ?',
        options: {
          A: 'Le sabr.',
          B: 'L’adab.',
          C: 'Le shukr.',
          D: 'La niyyah.'
        },
        explanation: 'Le Shukr est la reconnaissance sincère des dons d’Allah.'
      },
      quiz_ilm: {
        question: 'Tout ce que tu as appris aujourd’hui... qu’est-ce qui t’a réellement permis d’avancer ?',
        options: {
          A: 'La chance.',
          B: 'L’XP.',
          C: 'Le ʿilm, les efforts et le fait de passer à l’action.',
          D: 'Le fait d’avoir toujours eu raison.'
        },
        explanation: 'Le savoir seul ne suffit pas s’il reste abstrait. Il prend vie lorsqu’il est concrétisé par l’action.'
      }
    },
    realActions: {
      action_lit: {
        title: 'Ranger ton lit',
        instruction: 'Prends une minute pour faire ou bien ranger ton lit dans la vraie vie.',
        subtext: 'Une petite habitude simple qui installe la clarté pour la journée.',
        reflectionPrompt: 'As-tu remis ton lit en ordre ce matin ou vas-tu le faire tout de suite ?'
      },
      action_eau: {
        title: 'Boire un verre d’eau (Adab prophétique)',
        instruction: 'Va chercher un verre d’eau dans la vraie vie. Assieds-toi, tiens le verre de la main droite, dis « Bismillâh » et bois paisiblement en trois gorgées. Conclus par « Al-Hamdulillâh ».',
        subtext: 'Une sunnah quotidienne de gratitude, de calme et de présence d’esprit.',
        reflectionPrompt: 'As-tu pensé à t’asseoir et à prononcer le nom d’Allah avant de boire ?'
      },
      action_depart: {
        title: 'La Duʿāʾ du départ & préparer son sac',
        instruction: 'Vérifie que ton sac ou cartable est bien fermé dans la vraie vie. Puis récite la duʿāʾ de départ en plaçant ta confiance en Allah : « Bismillâh, tawakkaltu ʿalâ Allâh, wa lâ hawla wa lâ quwwata illâ billâh ».',
        subtext: 'Le croyant pose les causes concrètes (préparer ses affaires) et s’en remet au Créateur avec sérénité.',
        reflectionPrompt: 'As-tu pris l’habitude de confier tes pas à Allah avant de sortir de chez toi ?'
      },
      action_istiadhah: {
        title: 'Réciter l’Istiʿādhah & poser le pas',
        instruction: 'Prends une inspiration calme dans la vraie vie. Récite à voix claire : « Aʿūdhu billāhi mina sh-shayṭāni r-rajīm » pour chercher refuge auprès d’Allah, puis décide d’avancer malgré les doutes intérieurs.',
        subtext: 'La demande sincère de refuge recentre le cœur et brise l’emprise du découragement.',
        reflectionPrompt: 'As-tu pris l’habitude de demander refuge auprès d’Allah lorsque le doute te traverse ?'
      },
      action_salam_village: {
        title: 'Le Salām & le sourire fraternel',
        instruction: 'Aujourd’hui : offre un Salām sincère ou un sourire chaleureux à quelqu’un dans la vraie vie. Le Prophète ﷺ a enseigné que le sourire à son frère est une aumône (Sadaqah).',
        subtext: 'La bienveillance désarme la méfiance et transforme les cœurs fermés.',
        reflectionPrompt: 'As-tu offert un sourire ou un mot de paix aujourd’hui ?'
      },
      action_sabr_refus: {
        title: 'Le Sabr face au refus',
        instruction: 'Pense à un refus ou une contrariété du quotidien. Prends une profonde inspiration et dis avec ton cœur : « Al-Hamdulillâh ʿalâ kulli hāl » sans colère ni rancœur.',
        subtext: 'Le Sabr est une force d’âme : on accueille la réponse de l’autre avec respect et on continue d’avancer dignement.',
        reflectionPrompt: 'As-tu déjà réussi à accepter un « non » avec calme et noblesse ?'
      },
      action_parler: {
        title: 'Adresser la parole',
        instruction: 'Aujourd’hui : adresse la parole avec bienveillance à quelqu’un que tu connais peu.',
        subtext: 'Un simple mot ou une salutation respectueuse suffit à initier le taʿāruf.',
        reflectionPrompt: 'Prêt à tenter une petite salutation bienveillante aujourd’hui ?'
      },
      action_geste: {
        title: 'Une bonne action discrète (Niyyah pure)',
        instruction: 'Aujourd’hui : accomplis un geste d’aide ou range quelque chose qui traîne dans ta maison ou ta classe, sans rien dire à personne et sans chercher à être félicité.',
        subtext: 'Agir en secret pour Allah préserve la pureté du cœur.',
        reflectionPrompt: 'As-tu déjà accompli une bonne action que personne d’autre qu’Allah n’a vue ?'
      },
      action_shukr: {
        title: 'Le Shukr & le soin du vivant',
        instruction: 'Prends une minute dans la vraie vie : 1. Pense à 3 bienfaits précieux qu’Allah t’a accordés et dis « Al-Hamdulillâh ». 2. Arrose une plante chez toi pour prendre soin de la création.',
        subtext: 'Prendre soin de la vie est un acte d’adoration.',
        reflectionPrompt: 'Quels sont les trois bienfaits pour lesquels tu es le plus reconnaissant aujourd’hui ?'
      },
      action_mission_jour: {
        title: 'Mission du Jour : As-salāmu ʿalaykum',
        instruction: 'Va vers quelqu’un. Dis-lui : « As-salāmu ʿalaykum ». Puis laisse la rencontre se faire naturellement.',
        subtext: 'Le meilleur des deux est celui qui commence par le salām.',
        reflectionPrompt: 'La paix offerte de bon cœur ouvre les portes de la véritable fraternité.'
      }
    },
    climaxSteps: {
      step_istiadhah: {
        title: '1. Se rappeler d’Allah',
        meaning: 'Je cherche refuge auprès d’Allah contre le doute et le découragement.',
        description: 'Face au doute oppressant, chercher refuge auprès d’Allah recentre l’âme et dissipe la peur.'
      },
      step_ilm: {
        title: '2. Se rappeler ce qu’il a appris',
        meaning: 'La connaissance authentique dissipe les ténèbres de l’ignorance.',
        description: 'Se remémorer les sagesses apprises renforce la certitude face aux illusions.'
      },
      step_sabr: {
        title: '3. Faire preuve de patience',
        meaning: 'La patience et la persévérance brisent l’impatience du doute.',
        description: 'Tenir bon dans l’épreuve sans céder à la panique ni à la rancœur.'
      },
      step_adab: {
        title: '4. Garder la noblesse du comportement',
        meaning: 'La bienveillance et le respect élèvent l’âme au-dessus du conflit.',
        description: 'Répondre avec sagesse et douceur même face à l’adversité.'
      },
      step_effort: {
        title: '5. Fournir l’effort sincère',
        meaning: 'L’effort pour plaire au Créateur purifie le cœur.',
        description: 'Poser les actes nécessaires avec dévouement et constance.'
      },
      step_action: {
        title: '6. Passer à l’action avec confiance',
        meaning: 'Placer sa pleine confiance en Allah et avancer.',
        description: 'Le doute disparaît dès que le pas est franchi dans la lumière.'
      }
    }
  },

  en: {
    scenes: {
      1: { title: 'The Awakening of Othmân', subtitle: 'The room at sunrise' },
      2: { title: 'The Key of Departure', subtitle: 'The doorstep of the house' },
      3: { title: 'The Call of Duty', subtitle: 'Towards the village' },
      4: { title: 'The Trial of the Marketplace', subtitle: 'The bustle of the stalls' },
      5: { title: 'Crossing the Crossroads', subtitle: 'The wooden signboard' },
      6: { title: 'The Artisan’s Workshop', subtitle: 'The forge and woodcraft' },
      7: { title: 'The Orchard and the Vine', subtitle: 'The blooming grove' },
      8: { title: 'The First Inner Battle', subtitle: 'Confronting doubt' },
      9: { title: 'The Dawn of Wisdom', subtitle: 'The sheltering tree' }
    },
    beats: {
      s1_intro_1: 'The soft dawn light gently filters through the half-open bedroom window.',
      s1_intro_2: 'A fresh morning breeze heralds the start of a new day of learning and growth.',
      s1_intro_3: 'Othmân opens his eyes, still half-asleep under his blanket.',
      s1_b1: '... Dawn already. Everything is so peaceful and quiet.',
      s1_b2: 'As-salāmu ʿalaykum Othmân! A brand new day begins under the benevolent gaze of the Creator. How would you like to start this morning?',
      s1_b3: 'Every small morning gesture prepares your heart and mind for the day ahead.',
      s1_b4: 'You are right, Noura. Making my bed and putting my things in order... will help me find mental clarity right from the morning.',
      s1_b5: 'Discipline begins with the quiet, unseen acts. Making one’s bed is honoring one’s living space.',
      s1_b6: 'You can take a moment to make your bed in the real world right now.',
      s1_b7: 'I am ready for the first step. A clear mind in an orderly place.',
      s1_pont_lit: 'The Prophet ﷺ loved cleanliness, orderliness, and constancy in small daily actions.',
      s1_b8: 'An excellent beginning, Othmân. Outward order brings inner peace.',
      s1_b9: 'My body still needs to wake up... My throat feels a bit dry.',
      s1_b10: 'The body is a precious trust (Amanah) gifted by your Creator. Caring for it with prophetic manners turns every sip into a source of blessing.',
      s1_water_1: 'Here is a jug of cool water. Do you remember the etiquette taught by the Messenger of Allah ﷺ when drinking?',
      s1_water_2: 'Sit down calmly, hold the cup in your right hand, pronounce the Name of Allah (Bismillāh), and drink peacefully in three breaths.',
      s1_water_3: 'Take a moment to drink a glass of water in real life while observing this mindful adab.',
      s1_pont_eau: 'The Prophet ﷺ drank in three breaths and sat down to drink with calm and heartfelt gratitude.',
      s1_water_4: 'Al-Hamdulillāh! This fresh water revives my body and clarifies my thoughts.',
      s1_b13: 'Order, bodily care, and gratitude... Your morning begins with the highest of dispositions.',
      s1_b14: 'Noura, before heading out, I would like to recite the morning supplication to place my day under Allah’s protection.',
      s1_b15: 'The Istiʿādhah and morning adhkar illuminate the heart and dissolve the creeping fog of doubt.',
      s1_b16: 'Let us see if you recall the sacred phrase used to seek refuge in Allah.',
      s1_b18: '« Aʿūdhu billāhi mina sh-shayṭāni r-rajīm ». I seek refuge with Allah from doubt and whisperings of despair.',
      s1_b19: 'Your spirit is steadfast and ready. Today’s noble adventure awaits beyond the doorstep.',
      s2_b1: 'Othmân stands before the wooden entrance door of the family home.',
      s2_b2: 'The open road unfolds before me... Where shall my footsteps lead me today?',
      s2_b3: 'Every departure is an act of sincere faith. Placing one’s trust in Allah before taking the first step.',
      s2_b4: '« Bismillāh, tawakkaltu ʿalā Allāh, wa lâ hawla wa lâ quwwata illā billāh ».',
      s2_b5: 'A powerful prayer that wraps the traveler in the sheltering care of the Most Merciful.',
      s2_b6: 'You can check your backpack and recite this departure duʿāʾ in real life right now.',
      s2_b7: 'My pack is ready, my intention is renewed. I step out with tranquility.',
      s2_dua_1: 'Reliance upon Allah (Tawakkul) never negates practical effort: tie your camel first, then entrust all outcomes to the Lord.',
      s2_dua_2: 'Exactly. Taking practical action while keeping the heart attached to the Creator.',
      s2_dua_3: 'Look into the distance, Othmân: the morning mist is rising gently over the village valley.',
      s2_dua_4: 'The villagers are beginning their daily duties.',
      s2_pont_depart: 'The Prophet ﷺ said when leaving home: « In the name of Allah, I trust in Allah. There is no power nor might except with Allah ».',
      s2_dua_6: 'Let us walk forward with purposeful strides.',
      s2_b9: 'The village is just ahead. New meetings and lessons await us.',
      s3_b1: 'Othmân reaches the welcoming outskirts of the village.',
      s3_b2: 'The cobblestone alleys slowly awaken. Merchants are opening their wooden shutters.',
      s3_b3: 'A young man hurries past us with a tense look, without raising his eyes.',
      s3_b4: 'Should I speak to him or simply continue on my way?',
      s3_b5: 'The Salām is the very first golden key that unlocks guarded hearts.',
      s3_b6: 'What would you like to say to this passing villager?',
      s3_b7: '« As-salāmu ʿalaykum wa raḥmatullāh! »',
      s3_b8: 'The young man pauses, startled yet visibly touched by this warm, genuine greeting.',
      s3_b9: '« Wa ʿalaykumu s-salām... Thank you, traveler. Your kindness has brightened my morning. »',
      s3_pont_salam: 'The Prophet ﷺ taught: « Spread peace among yourselves, and you will love one another ».',
      s3_b11: 'A single sincere word was enough to transform the entire atmosphere.',
      s3_b12: 'Let us continue onward towards the village marketplace.',
      s4_b1: 'The village marketplace is buzzing with vibrant morning energy.',
      s4_b2: 'Baskets of dates, figs, and pomegranate are stacked high beside the stalls.',
      s4_b3: 'Suddenly, an elderly merchant stumbles and drops his wooden crate, spilling his fruits across the ground!',
      s4_b4: 'Nobody seems to notice in the bustling morning crowd.',
      s4_b5: 'Othmân catches the worried look in the old merchant’s eyes.',
      s4_b6: 'What will you do in the face of this unexpected incident?',
      s4_b7: 'Othmân immediately kneels down to carefully gather the scattered fruits and steady the crate.',
      s4_b8: 'The merchant gazes up with deep gratitude: « May Allah bless you, young man. Few people pause to lend a hand without expecting anything in return. »',
      s4_b9: '« It is my duty. We are brothers in humanity and faith. »',
      s4_pont_aide: 'The Prophet ﷺ said: « Allah remains in the aid of His servant as long as the servant remains in the aid of his brother ».',
      s4_b11: 'This quiet act of service has lifted the heavy burden of an honest worker.',
      s4_b12: 'Let us proceed towards the crossroads overlooking the hilltops.',
      s5_b1: 'Othmân and Noura arrive at a junction marked by a large carved oak signboard.',
      s5_b2: 'Several paths lie before us: one winds towards the orchard groves, the other towards the craft workshops.',
      s5_b3: 'A faint shadow seems to drift in the wind... A sudden chilly gust rustles the dry leaves.',
      s5_b4: 'An insidious whisper echoes deep inside Othmân’s thoughts.',
      s5_b5: '« Why tire yourself helping strangers? Think of yourself first and foremost... »',
      s5_b6: 'It is the whisper of Waswâs, seeking to sow selfishness and doubt into your resolve.',
      s5_b7: 'How do you choose to respond to this troubling whisper?',
      s5_b8: '« I seek refuge with Allah against doubt and vanity. My heart remains anchored in goodness. »',
      s5_b9: 'The shadowy mist dissolves instantly before the light of divine remembrance.',
      s5_pont_refuge: '« And if an evil suggestion comes to you from Satan, then seek refuge in Allah. Indeed, He is Hearing and Knowing. » (Quran 41:36)',
      s5_b11: 'The path is clear once more. Let us choose our destination.',
      s6_b1: 'Before us stands the traditional woodworking and sculpting workshop of the village.',
      s6_b2: 'A master artisan is patiently carving an olive wood panel.',
      s6_b3: 'His hand movements are steady, deliberate, and full of heartfelt dedication.',
      s6_b4: 'Ihsān: seeking excellence and sincerity in every craft and deed.',
      s6_b5: 'The artisan looks up and wipes his brow: « The true beauty of any craft lies not in hasty speed, but in the sincerity of each stroke. »',
      s6_b6: 'How do you respond to the master craftsman’s wisdom?',
      s6_b7: '« Your patience and mastery are truly inspiring. Dedicated work is worship in action. »',
      s6_b8: 'The artisan smiles warmly: « Take this carved olive spindle, young traveler. May it remind you to always persevere with patience (Sabr). »',
      s6_pont_ihsan: 'The Prophet ﷺ said: « Verily, Allah loves that whenever any one of you performs a deed, he perfects it with excellence ».',
      s6_b10: 'A precious lesson in patience, humility, and dedication.',
      s7_b1: 'The quiet trail leads us into fragrant almond orchards and terraced olive trees.',
      s7_b2: 'A crystal-clear natural spring flows gently among the roots.',
      s7_b3: 'All of creation bears witness to the harmony, abundance, and generosity of the Creator.',
      s7_b4: '« It is He who sends down water from the sky, and with it We bring forth vegetation of every kind... » (Quran 6:99)',
      s7_b5: 'Let us take a mindful moment of contemplation and gratitude (Shukr).',
      s7_b6: 'Othmân drinks from the cool spring and gently waters a small sapling growing beside the path.',
      s7_b7: 'Caring for living creation is a noble act of worship that invites divine blessings.',
      s7_pont_shukr: '« If you are grateful, I will surely increase [My favor] upon you » (Quran 14:7).',
      s7_b9: 'Dusk begins to tint the evening sky in majestic shades of gold and deep violet.',
      s8_b1: 'As darkness falls, a thick shadowy fog gathers rapidly along the steep ridge path.',
      s8_b2: 'The Grand Waswâs emerges from the shadows as a swirling vortex of doubts.',
      s8_b3: '« You think you achieved something great today? You are nobody... Your small efforts will vanish and be forgotten... »',
      s8_b4: 'The dark whisper attempts to extinguish the inner flame and erase the day’s spiritual progress.',
      s8_b5: 'Othmân, draw upon everything you learned today: Istiʿādhah, Knowledge, Patience, Good Manners, and Sincere Action!',
      s8_b6: 'The true inner battle begins in the depths of the soul.',
      s9_b1: 'The dark vortex dissolves completely into a radiant cascade of golden light.',
      s9_b2: 'Profound peace and tranquility return to the mountain and fill Othmân’s heart.',
      s9_b3: 'A brand new dawn breaks across the vast valley horizon.',
      s9_b4: 'The Wise Elder appears at the top of the stone stairs with a gentle, approving smile.',
      s9_b5: '« Congratulations, Othmân. You have overcome your first great inner trial. »',
      s9_b6: '« What you built today is not mere factual information, but inner strength of character that will stay with you throughout your journey. »',
      s9_b7: 'Othmân bows his head with humility: « None of this would have been possible without Allah’s guidance and Noura’s reminders. »',
      s9_b8: 'Chapter 1 reaches its completion, but your noble quest for Wisdom has only just begun.'
    },
    choices: {
      s1_c1: { label: 'Make my bed with care (+Discipline)' },
      s1_c2: { label: 'Drink water following prophetic etiquette (+Vitality)' },
      s1_c3: { label: 'Recite the morning supplication (+ʿIlm)' },
      s1_water_c1: { label: 'Sit down and drink in 3 sips with gratitude (+Adab, +Hilm)' },
      s1_water_c2: { label: 'Drink quickly without lingering (+Vitality)' },
      s2_c1: { label: 'Check my bag and recite the departure duʿāʾ (+Discipline, +Sabr)' },
      s2_c2: { label: 'Step outside immediately with high energy (+Vitality)' },
      s3_c1: { label: 'Greet the young villager with a warm smile (+Adab, +Hilm)' },
      s3_c2: { label: 'Keep walking quietly without disturbing (+Discipline)' },
      s4_c1: { label: 'Help the merchant gather his spilled fruits (+Adab, +Sabr)' },
      s4_c2: { label: 'Wait to see if someone else assists him (+Hilm)' },
      s5_c1: { label: 'Recite the Istiʿādhah and dispel the doubt (+ʿIlm, +Hilm)' },
      s5_c2: { label: 'Pause and meditate calmly on the trail (+Sabr)' },
      s6_c1: { label: 'Listen respectfully to the artisan’s lesson (+ʿIlm, +Adab)' },
      s6_c2: { label: 'Help him organize his woodworking tools (+Discipline, +Vitality)' }
    },
    quizzes: {
      quiz_istiadhah: {
        question: 'What can one say when seeking refuge in Allah from Satan?',
        options: {
          A: 'There is nothing to say, one should just ignore it.',
          B: 'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm.',
          C: 'A custom phrase that anyone invents.',
          D: 'Only scholars are allowed to pronounce it.'
        },
        explanation: 'Istiʿādhah is explicitly stated in the Quran: whenever seeking protection or recitation, we seek refuge in Allah from Satan.'
      },
      quiz_taaruf: {
        question: 'Why did Allah create nations and tribes?',
        options: {
          A: 'So that they compare themselves to one another.',
          B: 'So that people may get to know one another.',
          C: 'So that everyone stays isolated in their corner.',
          D: 'To determine who is superior in status.'
        },
        explanation: 'Quran 49:13 teaches that nations and tribes were created « so that you may know one another » (Taʿāruf).'
      },
      quiz_adab: {
        question: 'What should one do when having nothing good to say?',
        options: {
          A: 'Speak anyway.',
          B: 'Respond aggressively.',
          C: 'Keep silent.',
          D: 'Make fun of others.'
        },
        explanation: 'The Prophet ﷺ taught to speak good or remain silent.'
      },
      quiz_sabr: {
        question: 'Which attitude best represents Sabr (patience)?',
        options: {
          A: 'Insisting aggressively until the other yields.',
          B: 'Persevering with calm patience in the face of difficulty.',
          C: 'Giving up immediately in despair.',
          D: 'Pretending that nothing hurts.'
        },
        explanation: 'Sabr is constructive endurance: accepting realities and difficulties with dignity and without anger.'
      },
      quiz_niyyah: {
        question: 'In any good deed, what truly matters before Allah?',
        options: {
          A: 'Being applauded by the crowd.',
          B: 'Looking impressive to others.',
          C: 'The sincere intention behind the action.',
          D: 'Getting something material in return.'
        },
        explanation: 'The famous hadith confirms that deeds are judged solely by the purity of intentions (Niyyah).'
      },
      quiz_shukr: {
        question: 'What is the term for sincere gratitude towards Allah for His blessings?',
        options: {
          A: 'Sabr.',
          B: 'Adab.',
          C: 'Shukr.',
          D: 'Niyyah.'
        },
        explanation: 'Shukr is the sincere and active recognition of Allah’s gifts and favors.'
      },
      quiz_ilm: {
        question: 'Of all that you learned today, what truly enabled you to move forward?',
        options: {
          A: 'Mere luck.',
          B: 'XP points.',
          C: 'ʿIlm (knowledge), inner effort, and taking practical action.',
          D: 'Always being proven right.'
        },
        explanation: 'Knowledge alone is not enough if it remains theoretical; it comes alive when combined with sincere effort and action.'
      }
    },
    realActions: {
      action_lit: {
        title: 'Make your bed',
        instruction: 'Take a minute to make your bed properly in real life right now.',
        subtext: 'A simple daily habit that fosters clarity and order for the entire day.',
        reflectionPrompt: 'Did you tidy your bed this morning or will you do it right now?'
      },
      action_eau: {
        title: 'Drink a glass of water (Prophetic Adab)',
        instruction: 'Get a glass of fresh water in real life. Sit down, hold the glass in your right hand, say « Bismillāh » and drink calmly in three sips. Conclude with « Al-Hamdulillāh ».',
        subtext: 'A daily sunnah of mindfulness, calm, and heartfelt gratitude.',
        reflectionPrompt: 'Did you remember to sit down and pronounce the name of Allah before drinking?'
      },
      action_depart: {
        title: 'Departure Duʿāʾ & Pack Preparation',
        instruction: 'Check that your backpack is neatly packed in real life. Then recite the departure duʿāʾ placing your trust in Allah: « Bismillāh, tawakkaltu ʿalā Allāh, wa lâ hawla wa lâ quwwata illā billāh ».',
        subtext: 'The believer takes practical steps (packing essentials) and relies upon the Creator with complete peace.',
        reflectionPrompt: 'Have you built the habit of entrusting your journey to Allah before stepping outside?'
      },
      action_istiadhah: {
        title: 'Recite the Istiʿādhah & Step Forward',
        instruction: 'Take a deep, calm breath in real life. Recite clearly: « Aʿūdhu billāhi mina sh-shayṭāni r-rajīm » to seek refuge in Allah, then choose to move forward despite lingering doubts.',
        subtext: 'Sincere refuge centers the heart and breaks the hold of discouragement.',
        reflectionPrompt: 'Do you make a habit of seeking refuge in Allah whenever doubt crosses your mind?'
      },
      action_salam_village: {
        title: 'The Salām & Warm Smile',
        instruction: 'Today: offer a sincere Salām or a warm smile to someone in real life. The Prophet ﷺ taught that smiling at your brother is an act of charity (Sadaqah).',
        subtext: 'Kindness disarms mistrust and softens guarded hearts.',
        reflectionPrompt: 'Did you offer a smile or a peaceful greeting to someone today?'
      },
      action_sabr_refus: {
        title: 'Sabr in the Face of Refusal',
        instruction: 'Think of a setback or disappointment. Take a deep breath and say with conviction: « Al-Hamdulillāh ʿalā kulli hāl » without resentment or bitterness.',
        subtext: 'Sabr is inner dignity: accepting circumstances with grace and continuing forward with honor.',
        reflectionPrompt: 'Have you ever managed to accept a « no » with calm and composure?'
      },
      action_parler: {
        title: 'Initiate a Conversation',
        instruction: 'Today: speak kindly to someone you do not know very well.',
        subtext: 'A simple respectful word is enough to begin mutual acquaintance (Taʿāruf).',
        reflectionPrompt: 'Ready to try a small, friendly greeting today?'
      },
      action_geste: {
        title: 'A Discreet Good Deed (Pure Niyyah)',
        instruction: 'Today: do an act of service or tidy something up in your house or classroom without telling anyone or seeking praise.',
        subtext: 'Acting quietly for Allah preserves the purity and sincerity of the heart.',
        reflectionPrompt: 'Have you ever done a good deed that no one saw except Allah?'
      },
      action_shukr: {
        title: 'Shukr & Care for Living Creation',
        instruction: 'Take a minute in real life: 1. Think of 3 precious blessings Allah granted you and say « Al-Hamdulillāh ». 2. Water a houseplant or garden plant to care for creation.',
        subtext: 'Caring for living creation is a blessed act of worship.',
        reflectionPrompt: 'What are three blessings you are most grateful for today?'
      },
      action_mission_jour: {
        title: 'Daily Quest: As-salāmu ʿalaykum',
        instruction: 'Walk up to someone today and say: « As-salāmu ʿalaykum ». Then let the conversation flow naturally.',
        subtext: 'The best of two people is the one who initiates the greeting of peace.',
        reflectionPrompt: 'Peace offered from the heart opens the door to true brotherhood.'
      }
    },
    climaxSteps: {
      step_istiadhah: {
        title: '1. Remember Allah',
        meaning: 'I seek refuge with Allah against doubt and despair.',
        description: 'In the face of heavy doubt, seeking refuge in Allah centers the soul and disperses fear.'
      },
      step_ilm: {
        title: '2. Recall what he learned',
        meaning: 'Authentic knowledge dispels the darkness of ignorance.',
        description: 'Remembering wisdom previously acquired fortifies certainty against false illusions.'
      },
      step_sabr: {
        title: '3. Exercise Patience',
        meaning: 'Steadfast patience overcomes the impatience of doubt.',
        description: 'Standing firm in hardship without giving in to panic or resentment.'
      },
      step_adab: {
        title: '4. Maintain Nobility of Character',
        meaning: 'Kindness and respect elevate the soul above conflict.',
        description: 'Responding with gentle wisdom even in challenging moments.'
      },
      step_effort: {
        title: '5. Put in Sincere Effort',
        meaning: 'Effort exerted for the Creator purifies the heart.',
        description: 'Taking the necessary practical steps with devotion and constancy.'
      },
      step_action: {
        title: '6. Take Action with Trust in Allah',
        meaning: 'Place complete trust in Allah and step forward.',
        description: 'Doubt vanishes the very moment one takes a step in the light of truth.'
      }
    }
  },

  ar: {
    scenes: {
      1: { title: 'استيقاظ عثمان', subtitle: 'الغرفة مع إشراقة الفجر' },
      2: { title: 'مفتاح الانطلاق', subtitle: 'عتبة المنزل' },
      3: { title: 'نداء الواجب', subtitle: 'نحو القرية' },
      4: { title: 'ابتلاء السوق', subtitle: 'حركة الدكاكين' },
      5: { title: 'عبور المفترق', subtitle: 'الشاخصة الخشبية' },
      6: { title: 'ورشة الحرفي', subtitle: 'فن الخشب والنجارة' },
      7: { title: 'البستان والكرم', subtitle: 'حدائق اللوز والزيتون' },
      8: { title: 'المعركة الباطنية الأولى', subtitle: 'مواجهة الوسواس والشك' },
      9: { title: 'فجر الحكمة', subtitle: 'شجرة السكينة' }
    },
    beats: {
      s1_intro_1: 'تتسلل أنوار الفجر الهادئة بلطف من خلال نافذة الغرفة المواربة.',
      s1_intro_2: 'نسيم عليل يبشر ببداية يوم جديد من العلم والعمل الصالح.',
      s1_intro_3: 'يفتح عثمان عينيه، مستيقظاً بهدوء تحت غطائه الدافئ.',
      s1_b1: '... لقد بزغ الفجر. كم يبدو العالم هادئاً وجميلاً.',
      s1_b2: 'السلام عليكم يا عثمان! يبدأ يوم جديد تحت رعاية الخالق الكريم. كيف تود أن تبدأ هذا الصباح المبارك؟',
      s1_b3: 'كل خطوة مباركة في الصباح تهيئ القلب والعقل لما ينتظرك من سعي.',
      s1_b4: 'معكِ حق يا نورا. ترتيب سريري وتنظيم أشيائي سيعينني على صفاء الذهن منذ بداية اليوم.',
      s1_b5: 'الانضباط يبدأ بالأفعال الصغيرة الخفية. ترتيب السرير إكرام للمكان الذي تعيش فيه.',
      s1_b6: 'يمكنك الآن أن ترتب سريرك في عالمك الحقيقي لتنال ثمار هذا الانضباط.',
      s1_b7: 'ها قد أصبحت جاهزاً للخطوة الأولى. عقل صافٍ في مكان مرتب.',
      s1_pont_lit: 'كان النبي ﷺ يحب النظافة والترتيب والمداومة على الأعمال الصالحة وإن قلت.',
      s1_b8: 'بداية مباركة يا عثمان. النظام الظاهر يبعث الطمأنينة في الباطن.',
      s1_b9: 'يحتاج بدني إلى الانتعاش... أشعر ببعض العطش.',
      s1_b10: 'الجسد أمانة غالية من الخالق سبحانه. وحين ترعاه بآداب النبي ﷺ، تصبح كل قطرة ماء بركة ونوراً.',
      s1_water_1: 'ها هو إبريق الماء العذب. هل تتذكر الآداب النبوية الشريفة عند الشرب؟',
      s1_water_2: 'أن تجلس بهدوء، وتمسك الإناء بيدك اليمنى، وتسمي الله، وتشرب على ثلاث دفعات بسكينة وحمد.',
      s1_water_3: 'خذ وقتاً لتشرب كأساً من الماء في الواقع مطبقاً هذا الأدب النبوي الرفيع.',
      s1_pont_eau: 'كان النبي ﷺ يشرب على ثلاث مرات ويجلس عند الشرب شاكراً حامداً ربه.',
      s1_water_4: 'الحمد لله! هذا الماء العذب أعاد الحيوية إلى بدني وأنار فكري.',
      s1_b13: 'النظام، ورعاية البدن، والشكر... لقد بدأ صباحك بأفضل السجايا والخصال.',
      s1_b14: 'يا نورا، قبل مغادرة البيت، أريد أن أردد أذكار الصباح لأجعل يومي في حفظ الله ورعايته.',
      s1_b15: 'الاستعاذة وأذكار الصباح تنير البصيرة وتطرد ظلمات الشك والوهن.',
      s1_b16: 'لنستحضر الصيغة الشريفة لطلب الحماية والعياذ بالله تعالى.',
      s1_b18: '« أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ».. أستجير بالله من الشك والوسوسة والتثبيط.',
      s1_b19: 'أصبحت روحك مطمئنة وعازمة. مغامرة اليوم تناديك خلف عتبة الباب.',
      s2_b1: 'يقف عثمان أمام باب البيت متطلعاً إلى الأفق الرحب.',
      s2_b2: 'الطريق ينبسط أمامي... إلى أين ستأخذني خطواتي اليوم؟',
      s2_b3: 'كل خروج وسعي هو عمل إيماني. توكل على الله قبل أن تخطو الخطوة الأولى.',
      s2_b4: '« بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ ».',
      s2_b5: 'دعاء جامع يجعل الساعي في كنف الرحمن وحفظه التام.',
      s2_b6: 'تفقد حقيبتك وردد دعاء الخروج في واقعك مستحضراً معاني التوكل.',
      s2_b7: 'حقيبتي مرتبة، ونيتي متجددة. أنطلق بسكينة واطمئنان.',
      s2_dua_1: 'التوكل على الله لا ينافي الأخذ بالأسباب: اعقلها أولاً ثم توكل على ربك.',
      s2_dua_2: 'حقاً. نعمل بجد في الواقع مع تعلق القلب بالخالق وحده.',
      s2_dua_3: 'انظر إلى الأفق يا عثمان: الضباب ينجلي بلطف عن وادي القرية.',
      s2_dua_4: 'أهل القرية يشرعون في أعمالهم الصباحية.',
      s2_pont_depart: 'قال النبي ﷺ إذا خرج من بيته: « بسم الله توكلت على الله، لا حول ولا قوة إلا بالله ».',
      s2_dua_6: 'لنمضِ بخطى واثقة ومباركة.',
      s2_b9: 'القرية قريبة منا، ولقاءات جديدة تنتظرنا.',
      s3_b1: 'يصل عثمان إلى مشارف القرية الوادعة.',
      s3_b2: 'الأزقة تدب فيها الحركة، والتجار يفتحون دكاكينهم.',
      s3_b3: 'يمر شاب مسرعاً بجانبنا بملامح منشغلة دون أن يلتفت.',
      s3_b4: 'هل أبادره بالسلام والحديث أم أواصل مسيري؟',
      s3_b5: 'السلام هو المفتاح الأول الذي يفتح مغاليق القلوب.',
      s3_b6: 'ماذا تود أن تقول لهذا الشاب القروي؟',
      s3_b7: '« السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ! »',
      s3_b8: 'يتوقف الشاب مندهشاً وسعيداً بهذه التحية الصادقة والابتسامة الطيبة.',
      s3_b9: '« وعليكم السلام ورحمة الله.. شكراً لك أيها المسافر، لقد أشرق صباحي بلطفك. »',
      s3_pont_salam: 'قال النبي ﷺ: « أَفْشُوا السَّلَامَ بَيْنَكُمْ تَحَابُّوا ».',
      s3_b11: 'كلمة طيبة واحدة كانت كافية لتغيير الموقف بأسره.',
      s3_b12: 'لنتابع طريقنا نحو قلب سوق القرية.',
      s4_b1: 'سوق القرية يمتلئ بالنشاط والحيوية الصباحية.',
      s4_b2: 'سلال التمر والتين والرمان مصفوفة أمام المتاجر.',
      s4_b3: 'فجأة، يتعثر تاجر مسن ويسقط صندوق ثماره لتتناثر الفاكهة على الأرض!',
      s4_b4: 'لا أحد يلتفت إليه في خضم الزحام وانشغال الناس.',
      s4_b5: 'يرى عثمان علامات الحرج والحيرة في عيني الشيخ المسن.',
      s4_b6: 'ماذا ستفعل أمام هذا الموقف غير المتوقع؟',
      s4_b7: 'يسارع عثمان بالنزول إلى الأرض ويجمع الثمار بعناية ليعيد ترتيب الصندوق.',
      s4_b8: 'ينظر إليه التاجر بامتنان عميق: « بارك الله فيك يا بني، قليلون من يتوقفون للمساعدة دون انتظار مقابل. »',
      s4_b9: '« هذا واجبي، فنحن إخوة في الإنسانية والإيمان. »',
      s4_pont_aide: 'قال النبي ﷺ: « وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ ».',
      s4_b11: 'هذا العون الخالص خفف عبئاً كبيراً عن عامل مكافح.',
      s4_b12: 'لنستأنف طريقنا نحو مفترق الطرق بين التلال.',
      s5_b1: 'يصل عثمان ونورا إلى مفترق طرق تعلوه شاخصة خشبية كبيرة.',
      s5_b2: 'تتفرع الدروب أمامنا: مسار يفضي إلى البساتين، وآخر نحو ورش الحرفيين.',
      s5_b3: 'ظل غريب يلوح في الأفق.. ورياح باردة تحرك أوراق الشجر.',
      s5_b4: 'وسوسة خفية تتردد في أعماق عثمان.',
      s5_b5: '« لماذا تجهد نفسك من أجل الغرباء؟ فكر في نفسك ومصلحتك أولاً... »',
      s5_b6: 'هذا صوت الوسواس يسعى لزرع الأنانية والتردد في قلبك.',
      s5_b7: 'كيف سترد على هذه الوسوسة العابرة؟',
      s5_b8: '« أستعيذ بالله من الشك والأنانية، وسيبقى قلبي ثابتاً على حب الخير. »',
      s5_b9: 'يتلاشى الضباب المظلم فوراً بقوة الذكر والاستعاذة الصادقة.',
      s5_pont_refuge: '« وَإِمَّا يَنزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ ۖ إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ » (فصلت: 36)',
      s5_b11: 'لقد انقشع الغبار عن الطريق. لنختر وجهتنا المباركة.',
      s6_b1: 'أمامنا ورشة النجارة والنحت التقليدية في القرية.',
      s6_b2: 'يجلس حرفي ماهر ينحت قطعة من خشب الزيتون بصبر وتؤدة.',
      s6_b3: 'حركاته متقنة ودقيقة ومليئة بالإخلاص والتركيز.',
      s6_b4: 'الإحسان: طلب الإتقان والكمال في كل عمل يعمله الإنسان.',
      s6_b5: 'يمسح الحرفي جبينه قائلاً: « جمال العمل ليس في العجلة والسرعة، بل في إخلاص اليد والقلب. »',
      s6_b6: 'بماذا تجيب على حكمة هذا الصانع الماهر؟',
      s6_b7: '« صبركم وإتقانكم يلهمانني حقاً. فالعمل المتقن عبادة وسعي في الخير. »',
      s6_b8: 'يبتسم الحرفي قائلاً: « خذ هذه القطعة المنحوتة يا بني، لتذكرك دوماً بفضيلة الصبر والإتقان. »',
      s6_pont_ihsan: 'قال النبي ﷺ: « إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ ».',
      s6_b10: 'درس بليغ في الصبر والإتقان والتواضع.',
      s7_b1: 'يقودنا المسار الهادئ بين بساتين اللوز وأشجار الزيتون المباركة.',
      s7_b2: 'ينساب نبع ماء رقراق بين جذوع الأشجار المثمرة.',
      s7_b3: 'الطبيعة برمتها تشهد على إبداع الخالق وحكمته وسعة فضله.',
      s7_b4: '« وَهُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ... » (الأنعام: 99)',
      s7_b5: 'لنقف لحظة تفكر وامتنان وشكر لله العظيم.',
      s7_b6: 'يشرب عثمان من النبع ويسقي نبتة صغيرة تنمو بجانب الطريق.',
      s7_b7: 'الإحسان إلى الأحياء والبيئة من شيم الصالحين التي تجلب البركة.',
      s7_pont_shukr: '« لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ » (إبراهيم: 7).',
      s7_b9: 'يميل قرص الشمس نحو المغيب ملوناً الأفق بظلال ذهبية وأرجوانية.',
      s8_b1: 'مع حلول المساء، يتكاثف ضباب مظلم عند الممر الجبلي الضيق.',
      s8_b2: 'يبرز الوسواس الكبير كدوامة مظلمة تحاول إثارة المخاوف.',
      s8_b3: '« أتظن أنك صنعت شيئاً ذا قيمة اليوم؟ أنت لست شيئاً.. وكل سعيك سينسى هباءً... »',
      s8_b4: 'يسعى الوسواس لإطفاء نور العزم ومحو ثمار هذا اليوم الطيب.',
      s8_b5: 'يا عثمان، استجمع كل ما تعلمته اليوم: الاستعاذة، والعلم، والصبر، وحسن الخلق، والعمل الصالح!',
      s8_b6: 'تبدأ المعركة الباطنية في أعماق النفس والقلب.',
      s9_b1: 'تتلاشى دوامة الظلام تماماً في شعاع ساطع من النور الذهبي.',
      s9_b2: 'تعود السكينة والسلام إلى الجبل ويمتلئ قلب عثمان بالطمأنينة.',
      s9_b3: 'فجر جديد ينبثق في الأفق حاملاً معه الأمل والبصيرة.',
      s9_b4: 'يظهر الشيخ الحكيم أعلى الدرج مبتسماً بمودة واعتزاز.',
      s9_b5: '« هنيئاً لك يا عثمان. لقد اجتزت أول ابتلاء باطني بنجاح وثبات. »',
      s9_b6: '« ما بنيته اليوم ليس مجرد معلومات، بل هو خلق متين ونور يسري في قلبك طوال رحلتك. »',
      s9_b7: 'يحني عثمان رأسه بتواضع قائلاً: « ما كان هذا ليتم إلا بفضل الله وهدايته ثم توجيهات نورا. »',
      s9_b8: 'ينتهي الفصل الأول، لكن رحلة الحكمة والنور لا تزال في مطلعها.'
    },
    choices: {
      s1_c1: { label: 'ترتيب السرير بإتقان (+انضباط)' },
      s1_c2: { label: 'شرب الماء وفق الهدي النبوي (+حيوية)' },
      s1_c3: { label: 'قراءة أذكار الصباح والدعاء (+علم)' },
      s1_water_c1: { label: 'الجلوس والشرب على 3 دفعات بشكر (+أدب، +حِلم)' },
      s1_water_c2: { label: 'الشرب سريعاً دون تمهل (+حيوية)' },
      s2_c1: { label: 'تفقد الحقيبة وترديد دعاء الخروج (+انضباط، +صبر)' },
      s2_c2: { label: 'الخروج فوراً بحماس ونشاط (+حيوية)' },
      s3_c1: { label: 'تحية الشاب بابتسامة صادقة (+أدب، +حِلم)' },
      s3_c2: { label: 'مواصلة المسير دون إزعاج (+انضباط)' },
      s4_c1: { label: 'مساعدة التاجر في جمع ثماره (+أدب، +صبر)' },
      s4_c2: { label: 'التريث لرؤية إن كان غيري سيعينه (+حِلم)' },
      s5_c1: { label: 'الاستعاذة بالله وطرد الشك (+علم، +حِلم)' },
      s5_c2: { label: 'أخذ استراحة والتأمل بهدوء (+صبر)' },
      s6_c1: { label: 'الاستماع باحترام لحكمة الحرفي (+علم، +أدب)' },
      s6_c2: { label: 'مساعدته في ترتيب أدوات النجارة (+انضباط، +حيوية)' }
    },
    quizzes: {
      quiz_istiadhah: {
        question: 'ماذا نقول عند طلب العياذ والحماية بالله من وساوس الشيطان؟',
        options: {
          A: 'لا شيء يقال، بل نتجاهل الأمر فقط.',
          B: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ.',
          C: 'عبارة يخترعها كل إنسان بنفسه.',
          D: 'لا يحق نطقها إلا للعلماء فقط.'
        },
        explanation: 'وردت الاستعاذة صريحة في القرآن الكريم عند طلب الحفظ وعند القراءة: نستعيذ بالله العظيم من الشيطان الرجيم.'
      },
      quiz_taaruf: {
        question: 'لماذا جعل الله الناس شعوباً وقبائل؟',
        options: {
          A: 'ليتفاخروا بالأنساب والألقاب.',
          B: 'ليتعارفوا ويتعاونوا في الخير.',
          C: 'لينعزل كل طرف في مكانه.',
          D: 'لتحديد من هو الأعلى سلطة.'
        },
        explanation: 'تنص الآية الكريمة (الحجرات: 13) على أن الحكمة هي التعارف: « وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ».'
      },
      quiz_adab: {
        question: 'ما هو الهدي النبوي حين لا يجد المرء كلاماً طيباً ليقوله؟',
        options: {
          A: 'أن يتكلم على أية حال.',
          B: 'أن يرد بكلام غليظ.',
          C: 'أن يلزم الصمت.',
          D: 'أن يسخر من الآخرين.'
        },
        explanation: 'علّمنا النبي ﷺ: « مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ ».'
      },
      quiz_sabr: {
        question: 'أي المواقف التالية يمثل الصبر الحقيقي؟',
        options: {
          A: 'الإلحاح بعنف حتى يوافق الطرف الآخر.',
          B: 'الثبات والتؤدة مع الرضا عند مواجهة الصعاب.',
          C: 'الاستسلام الفوري واليأس.',
          D: 'التظاهر بعدم الاكتراث.'
        },
        explanation: 'الصبر هو ثبات القلب والنفس وحسن الاستجابة عند البلاء دون سخط أو عنف.'
      },
      quiz_niyyah: {
        question: 'في أي عمل صالح، ما الذي يحدد قيمته وقبوله عند الله؟',
        options: {
          A: 'تصفيق الناس ومديحهم.',
          B: 'المظهر الجذاب.',
          C: 'إخلاص النية لله وحده.',
          D: 'المكسب المادي العاجل.'
        },
        explanation: 'الحديث النبوي الشريف يؤكد: « إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى ».'
      },
      quiz_shukr: {
        question: 'ما هو المصطلح المعبر عن الاعتراف بفضل الله ونعمه والثناء عليه؟',
        options: {
          A: 'الصبر.',
          B: 'الأدب.',
          C: 'الشكر.',
          D: 'النية.'
        },
        explanation: 'الشكر هو الاعتراف القلبي والعملي بنعم الله سبحانه، وبه تدوم النعم وتزيد.'
      },
      quiz_ilm: {
        question: 'من كل ما تعلمته اليوم... ما الذي يجعلك تتقدم وتثمر في رحلتك؟',
        options: {
          A: 'الحظ والصدفة فقط.',
          B: 'نقاط اللعبة وحدها.',
          C: 'العلم النافع مع السعي الصادق والعمل في الواقع.',
          D: 'الادعاء الدائم لمعرفة كل شيء.'
        },
        explanation: 'العلم لا يكتمل إلا بالعمل والإخلاص والمثابرة في التطبيق العملي.'
      }
    },
    realActions: {
      action_lit: {
        title: 'ترتيب السرير',
        instruction: 'خذ دقيقة الآن لترتيب سريرك بإتقان في عالمك الحقيقي.',
        subtext: 'عادة يومية بسيطة تزرع الانضباط والصفاء لسائر اليوم.',
        reflectionPrompt: 'هل رتبت سريرك هذا الصباح أم ستقوم بذلك الآن بكل همة؟'
      },
      action_eau: {
        title: 'شرب الماء (الأدب النبوي)',
        instruction: 'أحضر كأساً من الماء النقي. اجلس، وامسك الكأس بيمينك، وقل « بسم الله » واشرب على ثلاث دفعات، ثم اختم بـ « الحمد لله ».',
        subtext: 'سنة نبوية يومية تبعث على السكينة والشكر وحضور القلب.',
        reflectionPrompt: 'هل تذكرت الجلوس والتسمية قبل أن تشرب؟'
      },
      action_depart: {
        title: 'دعاء الخروج وتجهيز الحقيبة',
        instruction: 'تأكد من ترتيب حقيبتك في الواقع، ثم ردد دعاء الخروج متوكلاً على الله: « بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ ».',
        subtext: 'المؤمن يأخذ بالأسباب ثم يفوّض أمره إلى الخالق باطمئنان.',
        reflectionPrompt: 'هل اعتدت استيداع خطواتك لله قبل الخروج من المنزل؟'
      },
      action_istiadhah: {
        title: 'الاستعاذة والمضي قُدماً',
        instruction: 'خذ نفساً هادئاً وردد بصوت واضح: « أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ » مستجيراً بربك، ثم امضِ بعزم متجاوزاً وساوس الشك.',
        subtext: 'الاستعاذة الصادقة تطمئن القلب وتكسر شوكة التثبيط.',
        reflectionPrompt: 'هل تستحضر الاستعاذة بالله كلما راودتك وساوس التردد؟'
      },
      action_salam_village: {
        title: 'إفشاء السلام والابتسامة',
        instruction: 'اليوم: ألقِ السلام بصدق أو ابتسم بمودة في وجه من تقابله في يومك. فالابتسامة في وجه أخيك صدقة.',
        subtext: 'حسن الخلق يزيل الجفاء ويؤلف بين القلوب.',
        reflectionPrompt: 'هل أهديت ابتسامة أو تحية سلام لشخص اليوم؟'
      },
      action_sabr_refus: {
        title: 'الصبر عند خيبة الأمل والرفض',
        instruction: 'تذكر موقفاً لم يسر كما اشتهيت. خذ نفساً عميقاً وقل بقلبك: « الحمد لله على كل حال » دون غضب أو ضغينة.',
        subtext: 'الصبر عزة نفس: نقبل قضاء الله باحترام ونواصل السير بكرامة.',
        reflectionPrompt: 'هل استطعت يوماً استقبال أمر صعب بهدوء ونبل؟'
      },
      action_parler: {
        title: 'المبادرة بالحديث الطيب',
        instruction: 'اليوم: بادر بحديث طيب وخلق نبيل مع شخص لا تعرفه كثيراً.',
        subtext: 'كلمة واحدة صادقة كفيلة ببدء التعارف وبناء الألفة.',
        reflectionPrompt: 'هل أنت مستعد لبدء تحية طيبة اليوم؟'
      },
      action_geste: {
        title: 'صنيع خير خفي (إخلاص النية)',
        instruction: 'اليوم: افعل صنيع خير أو رتب شيئاً في بيتك أو صفك دون أن تخبر أحداً ودون انتظار ثناء من البشر.',
        subtext: 'العمل الصالح في السر يزكي النفس ويحفظ نقاء القلب.',
        reflectionPrompt: 'هل قمت من قبل بعمل صالح لم يره إلا الله وحده؟'
      },
      action_shukr: {
        title: 'الشكر ورعاية الأحياء',
        instruction: 'خذ دقيقة في واقعك: 1. استحضر 3 نعم عظيمة أنعم الله بها عليك وقل « الحمد لله ». 2. اسقِ نبتة في بيتك رعاية لخلق الله.',
        subtext: 'الإحسان إلى النبات والحيوان من أفضل القربات.',
        reflectionPrompt: 'ما هي النعم الثلاث التي تشعر بأكبر امتنان لها اليوم؟'
      },
      action_mission_jour: {
        title: 'مهمة اليوم: السَّلَامُ عَلَيْكُمْ',
        instruction: 'أقبل على أحدهم اليوم وقل له بمودة: « السَّلَامُ عَلَيْكُمْ ». ودع المحبة تتسلل إلى القلوب.',
        subtext: 'خير الناس من يبدأ بالسلام.',
        reflectionPrompt: 'السلام الصادق يفتح أبواب الإخاء والمحبة الحقيقية.'
      }
    },
    climaxSteps: {
      step_istiadhah: {
        title: '1. الاستعاذة بالله والذكر',
        meaning: 'أستجير بالله العظيم من الشك والوسوسة والتثبيط.',
        description: 'أمام ظلمات الشك، الاستعاذة بالله تعيد للروح سكينتها وتطرد الخوف.'
      },
      step_ilm: {
        title: '2. استحضار العلم واليقين',
        meaning: 'العلم الحق الصادق يبدد ظلمات الجهل والأوهام.',
        description: 'تذكر المعارف والحكم النبوية يثبت القلب أمام الشبهات.'
      },
      step_sabr: {
        title: '3. الصبر والثبات',
        meaning: 'الصبر والمصابرة يكسران حدة العجلة والجزع.',
        description: 'الثبات في وجه الصعاب دون يأس أو سخط.'
      },
      step_adab: {
        title: '4. لزوم مكارم الأخلاق',
        meaning: 'الرفق والأدب يسموان بالنفس فوق المهاترات.',
        description: 'الرد بالحكمة واللين حتى في أصعب اللحظات.'
      },
      step_effort: {
        title: '5. بذل الجهد الصادق',
        meaning: 'السعي الخالص لوجه الله يطهر القلب ويزكيه.',
        description: 'الأخذ بالأسباب بكل إخلاص ومثابرة.'
      },
      step_action: {
        title: '6. الانطلاق والعمل بتوكل',
        meaning: 'التوكل التام على الله والمضي قُدماً.',
        description: 'يتلاشى الشك فور أن يخطو العبد خطوته الأولى في نور الحق.'
      }
    }
  }
};
