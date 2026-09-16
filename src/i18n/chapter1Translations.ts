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
      1: { title: 'La Chambre', subtitle: '« L’Éveil & le Premier Pas »' },
      2: { title: 'Le Poteau aux Chemins', subtitle: '« Le Choix du But »' },
      3: { title: 'Le Premier Waswas', subtitle: '« La pensée qui bloque »' },
      4: { title: '« Je ne veux plus être seul »', subtitle: 'Taʿāruf' },
      5: { title: 'Le Village', subtitle: '« Les bonnes manières »' },
      6: { title: 'Le Refus', subtitle: '« Tout le monde ne dira pas oui »' },
      7: { title: 'Le Geste', subtitle: '« Pourquoi aider ? »' },
      8: { title: 'Le Jardin Abandonné', subtitle: '« Regarder ce qu’on a déjà reçu »' },
      9: { title: 'Le Grand Waswas', subtitle: '« Le Sommet de l’Éveil »' }
    },
    beats: {
      s1_hook_1: 'L’aube éclaire doucement les murs de la chambre. Othmân est assis au bord de son lit, les yeux posés sur son sac de voyage encore vide.',
      s1_hook_2: 'C’est aujourd’hui, Othmân. Le jour où tu as décidé de descendre vers le village.',
      s1_hook_3: 'Oui... J’ai toujours vécu protégé sur cette colline. Je veux apprendre, découvrir le monde et aller vers les autres... mais dès que j’y pense, j’ai peur de ne pas trouver ma place.',
      s1_hook_4: 'La sagesse et les nobles compagnons ne se trouvent pas en restant enfermé, mon fils. Par quoi veux-tu commencer ta journée ?',
      s1_water_othman: 'Je vais commencer par boire un peu d’eau fraîche.',
      s1_water_noura_ask: 'Avant de boire... te souviens-tu des manières enseignées par le Prophète ﷺ ?',
      s1_water_noura_teach: 'Prends ton temps. Le Prophète ﷺ a enseigné une façon consciente de boire : commencer par Bismillāh, tenir de la main droite, et boire en trois gorgées calmes. Même les actes du quotidien deviennent culte avec la présence d’esprit.',
      s1_water_othman_drink: 'Al-Hamdulillāh... L’eau est fraîche et apaisante. Je me sens calme et prêt à avancer.',
      s1_order_othman: 'Je vais commencer par ranger un peu ma chambre et faire mon lit.',
      s1_order_noura_ask: 'Une excellente habitude. Ordonner son espace aide à ordonner son esprit. Mais sais-tu avec quelle intention nous devrions le faire ?',
      s1_order_noura_teach: '« Les actions ne valent que par les intentions ». Faire son lit ou ranger sa chambre devient un acte de beauté et de piété tant que le cœur est sincère.',
      s1_order_othman_done: 'Tout est en ordre maintenant. Mes yeux se posent sur mon sac de voyage... Je suis prêt à descendre.',
      s1_sandals_othman: 'Je vais préparer mes sandales. Je crois que je suis prêt à sortir.',
      s1_sandals_noura_ask: 'Prépare-toi à franchir le pas. Avant de sortir de chez toi, il y a une invocation puissante à apprendre.',
      s1_sandals_noura_teach: 'Exactement : confier ses pas à Allah avant de poser le pied dehors donne une force inébranlable.',
      s1_sandals_othman_recite: '« Bismillâh, tawakkaltu ʿalâ Allâh, wa lâ hawla wa lâ quwwata illâ billâh ».',
      s1_door_hesitation: 'Ma main touche la poignée de fer... Maman, mon cœur s’accélère d’un coup. Et si personne ne voulait de moi là-bas ?',
      s1_waswas_whisper: 'Tu crois vraiment que tu vas réussir ? Reste dans ta chambre. Tu vas bégayer dès le premier mot. Retourne dans ton lit...',
      s1_noura_wisdom: 'Tu entends cela ? Le doute cherche toujours à te paralyser au seuil. Ne débats pas avec lui : place ta confiance en Allah et fais ton pas !',
      s1_door_open: 'Le battant de bois s’ouvre sur l’air frais du matin. Othmân franchit le seuil. Les murmures s’estompent derrière lui tandis qu’il descend la colline vers la lisière du bois.',
      s2_b1: 'Othmân et Noura arrivent devant un grand poteau indicateur en chêne au croisement des sentiers. Othmân dépose un instant son sac de voyage par terre pour s’essuyer le front.',
      s2_b2_noura: 'Tu es sorti de chez toi, Othmân. Mais sortir n’est pas encore avancer. Regarde ce poteau.',
      s2_b3_othman: 'Chaque panneau indique une direction différente... Par quoi dois-je commencer mon voyage ?',
      s2_b4_noura: 'C’est à toi de choisir ce que tu veux travailler aujourd’hui. Chaque chemin est une quête pour faire grandir ton cœur.',
      s2_choice_reaction: 'Je choisis d’aller vers les autres ! Je ne veux plus rester enfermé dans ma solitude. Je veux apprendre à créer de vrais liens fraternels.',
      s2_tawakkul_reminder: 'Alors commençons par la rencontre ! Confie ton cœur à Allah et avançons avec sérénité.',
      s3_b1: 'Le sentier se rétrécit sous des rochers escarpés. Une brume violacée et lourde s’élève du sol. Un Waswas émerge : une ombre chuchotante, sans consistance physique, mais chargée de doute.',
      s3_b2: 'Tu n’y arriveras jamais.\nTu veux te faire des amis ? Tu n’es même pas capable d’adresser la parole à un inconnu sans bégayer.',
      s3_b3: 'Maman... Ses paroles... C’est exactement ce que je me répétais ce matin dans mon lit.',
      s3_b6: 'Il ne lit pas dans tes pensées, Othmân. Il souffle sur tes doutes pour te paralyser et te pousser à faire demi-tour. Cette ombre n’a aucun pouvoir réel, sauf celui que tu lui accordes.',
      s3_b7: 'Mais comment faire taire une pensée qui me serre la gorge ?',
      s3_b7_bis: 'On ne débat pas avec le doute, mon fils. On cherche refuge auprès de Celui qui dissipe les ténèbres.',
      s3_b9: '« Aʿūdhu billāhi mina sh-shayṭāni r-rajīm ! »',
      s3_b10: 'L’ombre ténébreuse commence à vaciller et à perdre de sa consistance.',
      s3_b11: 'Regarde, elle recule ! C’est bon, elle est vaincue ?',
      s3_b14: 'Attention : ce n’est pas une formule magique, Othmân. Tu as cherché refuge auprès d’Allah avec ton cœur. Maintenant, ancre cette parole et avance d’un pas physique résolu !',
      s3_pont_istiadhah: 'Et toi, lorsque le doute, la timidité ou une voix intérieure cherche à te paralyser dans ta vie réelle... Respire avec calme, cherche refuge auprès d’Allah en récitant l’Istiʿādhah, et décide de poser ton pas en avant !',
      s3_b16: 'Le cœur raffermi par la demande de protection divine, Othmân plante fermement son bâton et fait un grand pas en avant.',
      s3_b17: 'Tu vas quand même échouer...',
      s3_b18: 'Peut-être. Mais je place ma confiance en Allah et j’avance !',
      s3_b19: 'La brume violette éclate en une pluie d’étincelles dorées ! Le sentier redevient clair, bordé de fleurs sauvages et inondé d’une douce chaleur.',
      s3_b19_reaction: 'Elle s’est évaporée... Le chemin est entièrement dégagé et lumineux !',
      s3_b19_noura: 'Le doute n’a aucune consistance face au rappel sincère d’Allah et au courage d’agir. Garde cette leçon précieusement.',
      s4_b1: 'En contrebas, les toits de tuiles rouges du village scintillent au soleil. Les silhouettes des habitants vont et viennent entre les ruelles et les vergers.',
      s4_b2: 'Regarde tout ce monde... Ils ont tous l’air tellement occupés et sûrs d’eux. Si je m’approche, ils vont se demander qui je suis et me trouver bizarre.',
      s4_b3: 'Pourquoi bizarre, Othmân ?',
      s4_b4: 'Parce que je ne connais personne ici. On ne vient pas du même coin, on n’a pas la même vie... Et si on n’avait rien à se dire ?',
      s4_b5: 'Tu penses vraiment qu’Allah a créé des personnes aux vécus et visages si variés pour que chacun reste terré derrière ses volets fermés ?',
      s4_b9: 'Le verset 49:13... Des nations et des tribus « pour que vous vous entreconnaissiez » (Taʿāruf). Donc la différence entre les gens n’est pas un obstacle... C’est une invitation voulue par Dieu !',
      s4_b10: 'Exactement. La différence n’est pas un mur qui sépare, c’est un pont à traverser. Alors, prêt à tenter le premier pas ?',
      s4_pont_parler: 'Et toi dans ta vraie vie... Y a-t-il quelqu’un à qui tu n’as jamais osé adresser la parole ? Un voisin, un camarade, un commerçant ? Aujourd’hui, franchis ce pont et offre-lui une salutation bienveillante.',
      s4_b14: 'J’ai salué un vieux monsieur qui taillait ses vignes. Il s’est redressé et m’a souri chaleureusement ! Finalement... c’était beaucoup moins terrifiant que dans ma tête.',
      s4_b15: 'La peur grandit toujours dans le silence et l’immobilité, mon fils. Dès que tu fais le pas avec sincérité, elle s’efface. Regarde : plusieurs chemins s’offrent à nous pour explorer ce village.',
      s5_b1: 'Othmân et Noura pénètrent sur la place centrale pavée. Autour de la fontaine d’eau fraîche, plusieurs villageois s’interrompent : bras croisés, regards méfiants, personne n’ose faire le premier geste vers les nouveaux arrivants.',
      s5_b2: 'Brrr... L’accueil est glacial. Ils me fixent comme si j’allais leur voler leurs paniers d’olives.',
      s5_b3: 'Plus loin près des étals, deux marchands haussent vivement le ton au sujet d’un sac de grain. Othmân gonfle le torse et fait mine de s’approcher pour intervenir.',
      s5_b4: 'Attends, je pourrais m’interposer au milieu de leur dispute ! Comme ça, tout le monde verra que j’ai du caractère.',
      s5_b5: 'Othmân... Tu veux parler... ou tu veux vraiment aider ?',
      s5_b6: 'Je... En fait, je voulais juste qu’on me remarque. Je ne connais même pas l’histoire de leur sac de grain.',
      s5_b8: '« Que celui qui croit en Allah et au Jour dernier dise du bien ou qu’il garde le silence ». Garder le silence quand on n’a rien d’utile à apporter, c’est aussi une preuve de maturité.',
      s5_b9: 'Exactement. Mais pour briser la glace sans s’immiscer, connais-tu la clé la plus pure ? Le Salām et un sourire sincère.',
      s5_b10: 'Le Prophète ﷺ a enseigné que le sourire offert à son frère est une aumône (Sadaqah). Offre-leur la paix du fond du cœur, et regarde ce qui se passe.',
      s5_pont_salam: 'Et toi, as-tu pensé à cette aumône accessible à chaque instant ? Offre aujourd’hui un Salām sincère ou un sourire chaleureux à quelqu’un dans ton entourage. Le Prophète ﷺ a dit que le sourire à son frère est une aumône.',
      s5_b11: 'As-salāmu ʿalaykum wa rahmatullāhi wa barakātuh !',
      s5_b12: 'En entendant cette salutation paisible et en voyant le visage lumineux d’Othmân, la méfiance fond comme neige au soleil ! Les villageois décroisent les bras, sourient et lui répondent d’un geste accueillant.',
      s5_b13: 'Ils m’ont répondu ! Même le vieux marchand grincheux m’a fait un signe amical de la tête !',
      s5_b14: 'La bienveillance désarme toujours la méfiance, mon fils. Tu as su poser le pas avec noblesse et respect. Rejoignons maintenant le calme des terrasses fleuries.',
      s6_b1: 'Othmân s’engage d’un pas curieux sous une arche de pierre fraîche. Un jeune villageois de son âge est assis près d’un établi, en train de tresser et réparer une corde de chanvre.',
      s6_b2: 'Salam alaykoum ! Tu veux venir faire un bout de chemin avec nous ? On explore les sentiers de la vallée !',
      s6_b3: 'Wa alaykoum salam... Non, désolé. J’ai une commande urgente de cordage à livrer avant ce soir.',
      s6_b8: 'Le jeune artisan boucle sa corde d’un geste précis, ramasse ses outils sans un regard de plus et disparaît au fond de l’atelier.\nUn lourd silence s’installe dans la ruelle. Othmân reste figé, la main encore à demi tendue dans le vide.',
      s6_b9: 'J’ai... j’ai été trop brusque ? Pourquoi a-t-il refusé alors que j’avais pourtant souri et salué ?',
      s6_b10: 'Tu n’as rien fait de mal, mon fils. Mais le monde ne tourne pas autour de notre envie du moment. Ce garçon a sa journée, son travail, ses contraintes. Ton intention était belle, mais il a le droit le plus strict de dire non.',
      s6_b11: 'Je sais bien... Mais ça fait quand même un pincement au cœur. On a l’impression d’avoir échoué.',
      s6_b12: 'C’est parce que tu attendais une récompense immédiate : son approbation. C’est précisément là que commence le vrai Sabr.',
      s6_b16: 'Le verset 2:153... Chercher secours dans l’endurance et la prière. Le Sabr, ce n’est ni bouder, ni forcer la porte. C’est accueillir ce qui arrive avec calme, dignité et respect.',
      s6_pont_sabr: 'Et toi... Pense à un refus, une contrariété ou un imprévu qui ne s’est pas passé comme tu le voulais. Respire calmement, détache ton cœur de l’aigreur et dis avec sincérité : « Al-Hamdulillâh ʿalâ kulli hāl ».',
      s6_b18: 'Al-Hamdulillâh ʿalâ kulli hāl. La déception est passée. Ce n’est pas parce qu’une porte se ferme qu’il faut s’arrêter de marcher.',
      s6_b19: 'Magnifique maturité, Othmân. La patience (Sabr) purifie le cœur du dépit et de l’orgueil. Retrouvons maintenant le calme des terrasses fleuries.',
      s7_b1: 'Sur le chemin des oliviers, un paysan trébuche. Ses deux grands paniers en osier se renversent lourdement dans la poussière, dispersant ses fruits mûrs sur la route.',
      s7_b2: 'Attends, il faut l’aider ! Ses paniers sont complètement renversés.',
      s7_b3: 'Othmân s’agenouille sans hésiter et commence à ramasser les figues et les olives une à une pour les ranger.',
      s7_b4: 'Pourquoi l’aides-tu, Othmân ?',
      s7_b5: 'Parce qu’il est âgé et qu’il ne s’en sortirait pas tout seul avant la nuit.',
      s7_b6: 'Et si personne ne te voyait ? Ni lui, ni les passants, ni moi ?',
      s7_b7: 'Je l’aiderais quand même ! Ce n’est pas pour les gens que je ramasse ces fruits.',
      s7_b12: '« Les actions ne valent que par leurs intentions ». Donc je ne dois jamais faire le bien pour qu’on me dise que je suis gentil ou généreux.',
      s7_b13: 'L’intention est un secret intime entre toi et ton Créateur. Dès qu’on cherche à la brandir devant les gens, elle s’évapore.',
      s7_pont_geste: 'Et toi dans ton quotidien... Peux-tu accomplir un petit geste discret (ranger un objet qui traîne, rendre un service chez toi ou dans ton entourage) sans rien dire à personne et pour Allah seul ? C’est cela, la Niyyah pure.',
      s7_b18: 'Regarde maman : tous les fruits sont remis en place, les paniers sont calés contre le muret et le chemin est dégagé !',
      s7_b19: 'Et tu l’as fait discrètement, avec humilité. C’est cette pureté d’intention (Niyyah) qui donne tout son poids à chaque acte. Continuons notre route vers le verger paisible.',
      s8_b1: 'Après cette rencontre au village, le sentier remonte vers un ancien verger en terrasses de pierre sèche. Les mauvaises herbes ont envahi le ruisseau et des branches mortes jonchent le sol.',
      s8_b2: 'Quel dommage... Tout est abandonné ici. Il n’y a plus rien qui pousse, c’est triste.',
      s8_b3: 'Regarde mieux, Othmân. Ne t’arrête pas à ce qui a l’air sec.',
      s8_b4: 'Othmân s’accroupit, écarte les feuilles sèches et découvre sous les pierres des pousses de romarin odorantes, quelques figues mûres et un filet d’eau fraîche qui murmure.',
      s8_b5: 'Il y en avait sous les branchages ! De l’eau vive, des fruits... Ça ne demandait qu’à respirer.',
      s8_b6: 'Parfois, on est tellement obsédé par ce qui manque qu’on ne voit même plus ce qu’on a déjà reçu.',
      s8_b10: 'Le verset 14:7... « Si vous êtes reconnaissants, très certainement J’augmenterai Mes bienfaits pour vous ». La gratitude (Shukr), ce n’est pas faire semblant que tout est parfait...',
      s8_b12: 'C’est ouvrir les yeux sur les trésors qu’Allah a déjà déposés autour de nous, même quand la situation semble difficile.',
      s8_pont_shukr: 'Et toi... Avant de penser à ce qui te manque, prends une minute : identifie 3 bienfaits précieux qu’Allah t’a accordés aujourd’hui et dis « Al-Hamdulillâh ». Puis arrose une plante chez toi pour prendre soin de la création.',
      s8_b15: 'Regarde maman ! En dégageant les branches mortes et les débris, le ruisseau coule à nouveau à plein filet. L’eau est si claire !',
      s8_b16: 'Regarde ce qui était déjà là, Othmân. Il suffisait simplement de prendre le temps de le remarquer... et d’en prendre soin.',
      s9_b1: 'Le col de la montagne se resserre sous une voûte d’ombre glacée. Des colonnes de pierre antique se dressent en silence. Devant eux, le Grand Waswas se forme : un vortex tourbillonnant, obscur et menaçant.',
      s9_b2: 'Tu pensais vraiment avoir accompli quelque chose ? Regarde-toi, Othmân. Tu as hésité dès le matin, tu as balbutié sur la place, et tu t’es fait rejeter par le premier garçon venu.',
      s9_b4: 'Tu veux des amis ? Pourquoi voudrait-on de toi ? Tu es trop faible, trop timide, trop quelconque pour qu’on s’intéresse à toi.',
      s9_b5: 'C’est vrai... Peut-être que je me berçais d’illusions. Je ne suis pas fait pour les voyages ni pour avoir des amis.',
      s9_b7: 'Regarde derrière toi, mon fils. Ne regarde pas ses illusions ; regarde ce que tu as réellement construit tout au long du chemin.',
      s9_b8: 'Des étincelles dorées s’allument dans la pénombre, dévoilant les souvenirs de la traversée : Le lit fait au réveil... L’Istiʿādhah prononcée... Le sourire rendu sur la place... Le refus accueilli avec Sabr... Les fruits ramassés en secret... L’eau claire dans le verger.',
      s9_b9: 'Tu as appris.',
      s9_b10: 'Tu as essayé.',
      s9_b11: 'Tu as trébuché.',
      s9_b12: 'Et tu t’es relevé. Chaque pas que tu as fait est un acte réel, sincère, que personne ne peut t’enlever.',
      s9_b14: 'Hadith de Muslim 2664 : « Recherche avec ardeur ce qui t’est profitable, demande l’aide d’Allah et ne sois pas impuissant ». Le savoir ne suffit pas seul : la foi, l’effort et l’action doivent s’unir !',
      s9_b18: 'Le Grand Waswas déploie ses dernières rafales de vent noir. Othmân se tient droit : le cœur empli des 6 piliers de résilience découverts sur son chemin.',
      s9_b19: 'Tu vas échouer ! Tu n’es rien !',
      s9_b20: 'Peut-être. Mais je vais essayer de tout mon cœur et de toute ma détermination !',
      s9_b21: 'Dans un éclat de lumière dorée, le tourbillon sombre se brise et s’évapore totalement ! Le soleil du matin se lève sur la crête, illuminant les pierres antiques d’une chaleur éclatante.',
      s9_b22: 'Un silence magnifique et apaisant enveloppe le sommet. La brise est douce et tiède.',
      s9_b23: 'Ce matin, je croyais que mon seul but était de me faire aimer des gens.',
      s9_b24: 'Et maintenant ?',
      s9_b25: 'Maintenant, j’ai compris que mon rôle est d’apporter la lumière : aller vers les autres, accepter leur refus avec patience, faire le bien en secret, et remercier Allah pour chaque bienfait.',
      s9_b32: 'Tu as trouvé ta lumière, mon fils. Est-ce qu’on continue la route ?',
      s9_b33: 'Oui ! Mais d’abord, je veux redescendre au village. Ce matin, entendre les enfants rire et jouer au ballon me serrait le cœur par peur d’être rejeté. Mais par la grâce d’Allah, cette peur ne me retient plus ! J’ai promis d’aller vers eux avec le sourire et de partager cette joie.',
      s9_pont_mission: 'Et toi qui as gravi le sommet de ce premier chapitre... Othmân a surmonté sa peur. À ton tour : va vers quelqu’un dans ton quotidien, dis-lui de bon cœur « As-salāmu ʿalaykum », et laisse la fraternité opérer naturellement.',
      s9_b35: 'Othmân et Noura reprennent leur marche vers l’horizon doré. Au-delà des crêtes, les terres du Chapitre 2 commencent à se dessiner sous le ciel limpide.',
      s9_b36: 'Le chemin ne fait que commencer.',
      s9_b37: 'En route !'
    },
    choices: {
      c_eau: { label: '💧 Boire un peu d’eau fraîche (Adab de la Sunnah)' },
      c_ordre: { label: '🧹 Ranger ma chambre et faire mon lit (Discipline & Niyyah)' },
      c_sandales: { label: '👟 Préparer mes sandales pour le départ (Tawakkul)' },
      c_door_push: { label: '« Bismillāh ! » — Pousser la porte et avancer malgré le doute' },
      c1: { label: '🌿 Chapitre 1 : « Aller vers les autres » — Rencontrer avec bienveillance & confiance (Taʿāruf)' },
      c_place: { label: '🏛️ Descendre au cœur du village (Place centrale & fontaine)' },
      c_ruelle: { label: '🧶 S’engager dans une ruelle en contrebas (Le jeune artisan)' },
      c_vergers: { label: '🧺 Longer les murets de pierre vers les vergers (Le vieux paysan)' }
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
      quiz_doua_maison: {
        question: 'Quelle invocation le Prophète ﷺ nous a-t-il enseigné de réciter en franchissant le seuil de sa maison ?',
        options: {
          A: 'On ne dit rien, il suffit de courir vite.',
          B: '« Bismillâh, tawakkaltu ʿalâ Allâh, wa lâ hawla wa lâ quwwata illâ billâh ».',
          C: 'Une formule réservée uniquement aux longs voyages.',
          D: 'On la récite seulement s’il fait nuit dehors.'
        },
        explanation: 'Le Prophète ﷺ a enseigné que lorsqu’un croyant sort en disant cette duʿāʾ, il lui est répondu : « Tu es guidé, préservé et protégé ».'
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
      quiz_adab_boire: {
        question: 'Selon la noble Sunnah, quelle bienséance le Prophète ﷺ nous a-t-il enseignée avant et pendant que l’on boit ?',
        options: {
          A: 'Boire debout d’un seul trait sans respirer.',
          B: 'Boire avec la main gauche en marchant vite.',
          C: 'S’asseoir, dire Bismillâh, boire de la main droite en 3 gorgées et dire Al-Hamdulillâh.',
          D: 'Souffler plusieurs fois à l’intérieur du récipient.'
        },
        explanation: 'Le Prophète ﷺ a enseigné de boire assis, avec la main droite, en prononçant Bismillâh, en respirant à l’extérieur du récipient par trois fois, et en concluant par Al-Hamdulillâh.'
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
      1: { title: 'The Room', subtitle: '« The Awakening & The First Step »' },
      2: { title: 'The Crossroads Signpost', subtitle: '« Choosing the Goal »' },
      3: { title: 'The First Waswas', subtitle: '« The Paralyzing Thought »' },
      4: { title: '« I Don\'t Want to Be Alone Anymore »', subtitle: 'Taʿāruf' },
      5: { title: 'The Village', subtitle: '« Good Manners & Gentle Speech »' },
      6: { title: 'The Rejection', subtitle: '« Not Everyone Will Say Yes »' },
      7: { title: 'The Good Deed', subtitle: '« Why Help Others? »' },
      8: { title: 'The Abandoned Garden', subtitle: '« Seeing What We Have Received »' },
      9: { title: 'The Grand Waswas', subtitle: '« The Summit of Awakening »' }
    },
    beats: {
      s1_hook_1: 'The dawn softly illuminates the walls of the room. Othman sits at the edge of his bed, his eyes fixed on his still-empty travel bag.',
      s1_hook_2: 'Today is the day, Othman. The day you decided to head down toward the village.',
      s1_hook_3: 'Yes... I have always lived sheltered on this hill. I want to learn, explore the world, and connect with others... but as soon as I think about it, I fear I will never belong.',
      s1_hook_4: 'Wisdom and noble companions are never found by staying locked inside, my son. How would you like to begin your day?',
      s1_water_othman: 'I will start by drinking some fresh water.',
      s1_water_noura_ask: 'Before drinking... do you remember the etiquettes taught by the Prophet ﷺ?',
      s1_water_noura_teach: 'Take your time. The Prophet ﷺ taught a mindful way of drinking: start with Bismillāh, drink with your right hand, and sip in three calm breaths. Even simple daily habits become worship when done with awareness.',
      s1_water_othman_drink: 'Al-Hamdulillāh... The water is so cool and refreshing. I feel peaceful and ready to move forward.',
      s1_order_othman: 'I will start by tidying my room and making my bed.',
      s1_order_noura_ask: 'A great beginning. Bringing order to your space helps bring clarity to your mind. But do you know with what intention we should do this?',
      s1_order_noura_teach: '« Actions are judged only by intentions ». Making your bed or tidying your room becomes an act of beauty and worship as long as the heart is sincere.',
      s1_order_othman_done: 'Everything is in order now. My eyes look upon my travel bag... I am ready to head down.',
      s1_sandals_othman: 'I will prepare my sandals. I believe I am ready to step outside.',
      s1_sandals_noura_ask: 'Prepare to cross the threshold. Before stepping out of your home, there is a powerful supplication you can learn.',
      s1_sandals_noura_teach: 'Exactly: entrusting your steps to Allah before stepping into the world gives unshakeable strength.',
      s1_sandals_othman_recite: '« Bismillāh, tawakkaltu ʿalā Allāh, wa lâ hawla wa lâ quwwata illā billâh ».',
      s1_door_hesitation: 'My hand touches the iron handle... Mother, my heart is racing all of a sudden. What if nobody wants me out there?',
      s1_waswas_whisper: 'Do you really think you can succeed out there? Stay inside. You will stammer at the very first word. Go back to your room...',
      s1_noura_wisdom: 'Do you hear that? Doubt always tries to paralyze you at the threshold. Do not debate with it: place your trust in Allah and take your step!',
      s1_door_open: 'The wooden door opens onto the crisp morning air. Othman crosses the threshold. The whispers fade behind him as he walks down the hillside toward the edge of the woods.',
      s2_b1: 'Othman and Noura arrive before a large carved oak signpost at the crossroads. Othman sets his pack on the ground for a moment to wipe his brow.',
      s2_b2_noura: 'You have left home, Othman. But stepping out is not yet journeying. Look at this signpost.',
      s2_b3_othman: 'Each sign points toward a different direction... What should I begin my journey with?',
      s2_b4_noura: 'It is up to you to choose what you wish to work on today. Every path is a quest to grow your heart.',
      s2_choice_reaction: 'I choose to connect with others! I do not want to remain trapped in my solitude. I want to build sincere bonds of brotherhood.',
      s2_tawakkul_reminder: 'Then let us begin with meeting others! Entrust your heart to Allah and let us move forward peacefully.',
      s3_b1: 'The trail narrows beneath steep crags. A heavy, violet mist rises from the earth. A Waswas emerges: a whispering shadow, bodiless yet dense with doubt.',
      s3_b2: 'You will never make it.\nYou want friends? You cannot even speak to a stranger without stammering.',
      s3_b3: 'Mother... His words... They are the exact doubts I repeated to myself this morning in bed.',
      s3_b6: 'He cannot read your mind, Othman. He blows upon your insecurities to paralyze you into turning back. This shadow holds no real power except what you grant it.',
      s3_b7: 'How do I silence a thought that constricts my throat with dread?',
      s3_b7_bis: 'We do not debate doubt, my son. We seek refuge with the One who dispels all darkness.',
      s3_b9: '« Aʿūdhu billāhi mina sh-shayṭāni r-rajīm! »',
      s3_b10: 'The shadowy figure begins to waver and lose its hold.',
      s3_b11: 'Look, it is backing away! Is it truly defeated?',
      s3_b14: 'Remember: it is not a magic chant, Othman. You sought refuge with a sincere heart. Now anchor that faith with a resolute physical step forward!',
      s3_pont_istiadhah: 'And you, whenever doubt, shyness, or an inner whisper paralyzes you in real life... Breathe calmly, seek refuge in Allah with the Istiʿādhah, and choose to take that courageous step forward!',
      s3_b16: 'Heart fortified by divine refuge, Othman plants his walking stick firmly and takes a bold stride forward.',
      s3_b17: 'You will fail regardless...',
      s3_b18: 'Perhaps. But I place my trust in Allah and I move forward!',
      s3_b19: 'The violet mist shatters into a shower of golden sparks! The trail clears completely, bordered with wildflowers and bathed in warm sunshine.',
      s3_b19_reaction: 'It completely evaporated... The path ahead is wide open and radiant!',
      s3_b19_noura: 'Doubt has no substance against sincere remembrance of Allah and the courage to take action. Treasure this lesson.',
      s4_b1: 'Below, the red-tiled roofs of the village glisten in the morning sun. The silhouettes of villagers bustle between alleys and groves.',
      s4_b2: 'Look at all those people... They all seem so busy and confident. If I approach, they will wonder who I am and think I am strange.',
      s4_b3: 'Why strange, Othman?',
      s4_b4: 'Because I know nobody here. We come from different places, lead different lives... What if we have nothing to say to each other?',
      s4_b5: 'Do you truly think Allah created people with diverse backgrounds and faces just so everyone stays barricaded behind closed shutters?',
      s4_b9: 'Surah 49:13... Nations and tribes « that you may know one another » (Taʿāruf). So differences are not a barrier... They are a divine invitation to connect!',
      s4_b10: 'Exactly. Difference is not a wall that divides, but a bridge to cross. Are you ready to take that first step?',
      s4_pont_parler: 'And you in your daily life... Is there someone you have never dared speak to? A neighbor, classmate, or shopkeeper? Cross that bridge today and offer them a kind greeting.',
      s4_b14: 'I greeted an elderly man tending his vines. He straightened up and smiled warmly at me! It turned out to be far less frightening than in my imagination.',
      s4_b15: 'Fear always grows in silence and stillness, my son. The moment you step forward with sincerity, it vanishes. Look: several paths open before us.',
      s5_b1: 'Othman and Noura enter the paved central square. Around the fresh water fountain, villagers pause: crossed arms, guarded looks, no one makes the first move.',
      s5_b2: 'Brrr... A chilly welcome. They are looking at me as if I came to snatch their olive baskets.',
      s5_b3: 'Nearby by the stalls, two merchants raise their voices in a sharp dispute over a grain sack. Othman puffs his chest and prepares to step in.',
      s5_b4: 'Wait, I could jump right into their argument! That way everyone will see that I have strong character.',
      s5_b5: 'Othman... Do you want to speak to be seen... or do you truly want to help?',
      s5_b6: 'I... honestly, I just wanted people to notice me. I do not even know what their grain dispute is about.',
      s5_b8: '« Whoever believes in Allah and the Last Day, let him speak good or remain silent ». Staying quiet when we have nothing beneficial to contribute is also a sign of maturity.',
      s5_b9: 'Exactly. And to break the ice without meddling, do you know the purest key? The Salām and a sincere smile.',
      s5_b10: 'The Prophet ﷺ taught that a smile offered to your brother is a charity (Sadaqah). Offer them peace from your heart, and watch what happens.',
      s5_pont_salam: 'And you, have you thought about this effortless charity? Offer a sincere Salām or warm smile to someone today. Smiling at your brother is Sadaqah.',
      s5_b11: 'As-salāmu ʿalaykum wa rahmatullāhi wa barakātuh!',
      s5_b12: 'Hearing this serene greeting and seeing Othman’s radiant face, suspicion melts like snow under the sun! The villagers uncross their arms, smile, and wave back.',
      s5_b13: 'They answered me! Even the grumpy merchant nodded with a friendly grin!',
      s5_b14: 'Kindness always disarms mistrust, my son. You took the step with dignity and respect. Let us head toward the tranquil terraced orchards.',
      s6_b1: 'Othman steps with curiosity beneath a cool stone archway. A village boy his age is seated by a workbench, braiding and repairing a hemp rope.',
      s6_b2: 'Salam alaykoum! Would you like to walk with us for a bit? We are exploring the valley paths!',
      s6_b3: 'Wa alaykoum salam... No, sorry. I have an urgent rope order to finish before sunset.',
      s6_b8: 'The young artisan finishes his knot with precision, packs his tools without another glance, and disappears into the back of the workshop.\nA heavy silence settles in the alley. Othman stands frozen, his hand still half-extended.',
      s6_b9: 'Was I... was I too abrupt? Why did he say no when I smiled and greeted him politely?',
      s6_b10: 'You did nothing wrong, my son. But the world does not revolve around our timing. This boy has his day, his duties, his deadlines. Your intention was pure, but he has every right to say no.',
      s6_b11: 'I know... but it still stings a bit. You feel like you failed.',
      s6_b12: 'That is because you were expecting an immediate reward: his approval. That is precisely where true Sabr begins.',
      s6_b16: 'Verse 2:153... Seek help through patience and prayer. Sabr is neither sulking nor forcing the door. It is welcoming outcomes with poise and dignity.',
      s6_pont_sabr: 'And you... Think of a refusal or unexpected setback. Breathe deeply, free your heart from bitterness, and say with sincerity: « Al-Hamdulillāh ʿalâ kulli hāl ».',
      s6_b18: 'Al-Hamdulillāh ʿalâ kulli hāl. The disappointment has passed. A closed door is no reason to stop walking.',
      s6_b19: 'Beautiful maturity, Othman. Sabr cleanses the heart of resentment and pride. Let us head toward the peaceful orchard terraces.',
      s7_b1: 'On the olive path, an elderly farmer trips. His two large wicker baskets overturn in the dust, scattering ripe figs and olives across the road.',
      s7_b2: 'Wait, we have to help him! His baskets are completely spilled.',
      s7_b3: 'Othman kneels down without hesitation and begins gathering the scattered fruit one by one.',
      s7_b4: 'Why are you helping him, Othman?',
      s7_b5: 'Because he is elderly and could not manage alone before nightfall.',
      s7_b6: 'And what if nobody saw you? Not him, not passersby, not me?',
      s7_b7: 'I would still help him! I am not picking up this fruit for people’s praise.',
      s7_b12: '« Actions are judged only by intentions ». So I should never do good deeds just so people call me kind or generous.',
      s7_b13: 'Intention is an intimate secret between you and your Creator. The moment we flaunt it before others, its reward evaporates.',
      s7_pont_geste: 'And you in your daily life... Can you perform a discreet act of kindness (tidying something, removing litter) without telling anyone, solely for Allah? That is pure Niyyah.',
      s7_b18: 'Look, mother: all the fruit is safely back in the baskets, stacked against the wall, and the path is clear!',
      s7_b19: 'And you did it discreetly, with genuine humility. That purity of intention (Niyyah) gives every deed its true weight. Let us continue.',
      s8_b1: 'Beyond the village, the path ascends toward an ancient terraced stone orchard. Overgrowth has choked the stream and dry branches litter the ground.',
      s8_b2: 'What a pity... Everything here seems abandoned. Nothing grows anymore, it feels so sad.',
      s8_b3: 'Look closer, Othman. Do not stop at what looks dry on the surface.',
      s8_b4: 'Othman kneels, parts the dry leaves, and discovers fragrant rosemary shoots, ripe figs, and a gentle trickle of fresh spring water.',
      s8_b5: 'It was right here under the dry twigs! Living water, fruit... It just needed room to breathe.',
      s8_b6: 'Sometimes we are so fixated on what is missing that we become blind to the blessings we have already received.',
      s8_b10: 'Surah 14:7... « If you are grateful, I will surely increase [My favor] upon you ». Gratitude (Shukr) is not pretending everything is flawless...',
      s8_b12: 'It is opening our eyes to the treasures Allah has already placed around us, even when circumstances seem challenging.',
      s8_pont_shukr: 'And you... Before dwelling on what you lack, take a minute: name 3 precious blessings Allah granted you today and say « Al-Hamdulillāh ». Then water a plant to care for creation.',
      s8_b15: 'Look, mother! After clearing the dead branches, the stream flows freely again. The water is so crystal-clear!',
      s8_b16: 'Look at what was already here, Othman. It only needed someone to notice... and care for it.',
      s9_b1: 'The mountain pass narrows beneath a cold, shadowy vault. Ancient stone pillars stand in silence. Before them, the Grand Waswas forms: a swirling dark vortex.',
      s9_b2: 'Did you really think you accomplished anything? Look at yourself, Othman. You hesitated from morning, you fumbled in the square, and you got rejected by the first boy you met.',
      s9_b4: 'You want friends? Why would anyone want you? You are too weak, too shy, too ordinary for anyone to care.',
      s9_b5: 'It\'s true... Maybe I was fooling myself. Maybe I\'m not cut out for journeys or making friends.',
      s9_b7: 'Look behind you, my son. Do not look at his illusions; look at what you actually built along the way.',
      s9_b8: 'Golden sparks ignite in the gloom, unveiling the memories of the journey: The bed made at dawn... The Istiʿādhah spoken... The smile returned in the square... The refusal accepted with Sabr... The fruit gathered in secret... The clear water in the orchard.',
      s9_b9: 'You learned.',
      s9_b10: 'You tried.',
      s9_b11: 'You stumbled.',
      s9_b12: 'And you stood back up. Every step you took is a real, sincere act that no one can take away from you.',
      s9_b14: 'Hadith of Muslim 2664: « Strive for that which benefits you, seek the help of Allah, and do not be helpless ». Knowledge alone is not enough: faith, effort, and action must unite!',
      s9_b18: 'The Grand Waswas unleashes its final gusts of dark wind. Othman stands upright: heart filled with the 6 pillars of resilience he discovered on his path.',
      s9_b19: 'You will fail! You are nothing!',
      s9_b20: 'Maybe. But I will try with all my heart and determination!',
      s9_b21: 'In a burst of golden light, the dark vortex shatters and evaporates completely! The morning sun rises over the ridge, illuminating the ancient stones with brilliant warmth.',
      s9_b22: 'A magnificent, peaceful silence envelops the summit. The breeze is gentle and warm.',
      s9_b23: 'This morning, I thought my only goal was getting people to like me.',
      s9_b24: 'And now?',
      s9_b25: 'Now I understand that my true role is to bring light: to reach out to others, accept their refusal with patience, do good in secret, and thank Allah for every gift.',
      s9_b32: 'You have found your light, my son. Shall we continue the journey?',
      s9_b33: 'Yes! But first, I want to head back down to the village. This morning, hearing the children laughing and playing ball broke my heart with fear of being rejected. But by Allah\'s grace, that fear no longer holds me back! I promised to go meet them with a smile and share this joy.',
      s9_pont_mission: 'And you, traveler who climbed to the summit of this first chapter... Othmân overcame his fear. Now it\'s your turn: reach out to someone in your daily life, say from your heart « As-salāmu ʿalaykum », and let brotherhood unfold naturally.',
      s9_b35: 'Othman and Noura resume their journey toward the golden horizon. Beyond the mountain peaks, the lands of Chapter 2 begin to take shape under the clear sky.',
      s9_b36: 'The path has only just begun.',
      s9_b37: 'Let\'s go!'
    },
    choices: {
      c_eau: { label: '💧 Drink fresh water (Prophetic Adab)' },
      c_ordre: { label: '🧹 Tidy my room and make my bed (Discipline & Niyyah)' },
      c_sandales: { label: '👟 Prepare my sandals for departure (Tawakkul)' },
      c_door_push: { label: '« Bismillāh! » — Push the door open and step forward despite doubt' },
      c1: { label: '🌿 Chapter 1: « Connecting with Others » — Meeting with goodwill & trust (Taʿāruf)' },
      c_place: { label: '🏛️ Head to village center (Central square & fountain)' },
      c_ruelle: { label: '🧶 Enter the shaded alley (The young artisan)' },
      c_vergers: { label: '🧺 Follow stone walls to orchards (The elderly farmer)' }
    },
    quizzes: {
      quiz_istiadhah: {
        question: 'What can we say when seeking refuge in Allah from Satan (Shayṭān)?',
        options: {
          A: 'There is nothing to say, you just have to ignore it.',
          B: 'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm.',
          C: 'A formula that each person invents on their own.',
          D: 'You must be a certified scholar to be allowed to say it.'
        },
        explanation: 'The Istiʿādhah is explicitly mentioned in the Quran: when seeking protection or recitation, we ask refuge with Allah from the outcast devil.'
      },
      quiz_doua_maison: {
        question: 'Which supplication did the Prophet ﷺ teach us to recite when crossing the threshold of our home?',
        options: {
          A: 'We say nothing, running fast is enough.',
          B: '« Bismillāh, tawakkaltu ʿalā Allāh, wa lâ hawla wa lâ quwwata illā billāh ».',
          C: 'A formula reserved only for long caravan journeys.',
          D: 'We recite it only if it is completely dark outside.'
        },
        explanation: 'The Prophet ﷺ taught that when a believer leaves home reciting this duʿāʾ, it is said to him: « You are guided, defended, and protected ».'
      },
      quiz_taaruf: {
        question: 'Why did Allah create nations and tribes according to Surah Al-Hujurat?',
        options: {
          A: 'So that they compare and brag with pride.',
          B: 'So that people may get to know one another.',
          C: 'So that everyone stays isolated in their corner.',
          D: 'To determine which group is superior to others.'
        },
        explanation: 'Quran 49:13 indicates that nations and tribes were created « that you may know one another » (Taʿāruf).'
      },
      quiz_adab_boire: {
        question: 'According to the noble Sunnah, what mindful etiquette did the Prophet ﷺ teach us when drinking?',
        options: {
          A: 'Drinking while standing in one single gulp without breathing.',
          B: 'Drinking with the left hand while walking briskly.',
          C: 'Sitting down, saying Bismillāh, drinking with the right hand in 3 sips, and concluding with Al-Hamdulillāh.',
          D: 'Blowing repeatedly into the cup to cool it down.'
        },
        explanation: 'The Prophet ﷺ taught to drink while seated, with the right hand, reciting Bismillāh, breathing outside the cup three times, and praising Allah with Al-Hamdulillāh.'
      },
      quiz_adab: {
        question: 'What should one do when having nothing good to say?',
        options: {
          A: 'Speak anyway just to be heard.',
          B: 'Respond with the same harsh tone.',
          C: 'Remain silent.',
          D: 'Mock the situation.'
        },
        explanation: 'The Prophet ﷺ taught: « Whoever believes in Allah and the Last Day, let him speak good or remain silent ».'
      },
      quiz_sabr: {
        question: 'Which attitude best reflects true Sabr (noble patience)?',
        options: {
          A: 'Insisting until the other person gives in by force.',
          B: 'Persevering with calm and dignity in the face of difficulty.',
          C: 'Giving up immediately with bitter resentment.',
          D: 'Pretending that nothing hurts while harboring grudges.'
        },
        explanation: 'Sabr is constructive moral endurance: accepting trials without losing temper and continuing to move forward with noble poise.'
      },
      quiz_niyyah: {
        question: 'In any righteous deed, what matters most in the sight of Allah?',
        options: {
          A: 'Being loudly applauded by the crowd.',
          B: 'Looking impressive in the eyes of others.',
          C: 'The sincere intention in the heart for Allah alone.',
          D: 'Receiving an immediate material reward in return.'
        },
        explanation: 'The hadith states: « Actions are judged only by intentions ». An action is accepted only when motivated by sincere devotion to the Creator.'
      },
      quiz_shukr: {
        question: 'What do we call genuine gratitude to Allah for His boundless blessings?',
        options: {
          A: 'Sabr.',
          B: 'Adab.',
          C: 'Shukr.',
          D: 'Niyyah.'
        },
        explanation: 'Shukr is the heartfelt acknowledgment of Allah’s gifts. The Quran teaches that gratitude brings even greater abundance and peace.'
      },
      quiz_ilm: {
        question: 'Everything you have learned today... what truly allowed you to move forward?',
        options: {
          A: 'Pure luck.',
          B: 'Just gathering XP points.',
          C: 'Beneficial knowledge (ʿIlm), sincere effort, and taking real action.',
          D: 'Always wanting to be right.'
        },
        explanation: 'Knowledge alone is not enough if it remains abstract. It comes alive when paired with inner spiritual effort and expressed through concrete righteous action.'
      }
    },
    realActions: {
      action_lit: {
        title: 'Tidying Your Bed',
        instruction: 'Take a minute to make your bed or tidy your living space in real life.',
        subtext: 'A simple daily routine that brings mental clarity for the day ahead.',
        reflectionPrompt: 'Did you tidy your room this morning or will you do it right now?'
      },
      action_eau: {
        title: 'Drinking Water (Prophetic Adab)',
        instruction: 'Go fetch a glass of water in real life. Sit down, hold the glass with your right hand, say « Bismillāh » and drink peacefully in three sips. Conclude with « Al-Hamdulillāh ».',
        subtext: 'A daily sunnah of mindfulness, gratitude, and physical composure.',
        reflectionPrompt: 'Did you remember to sit down and mention the Name of Allah before drinking?'
      },
      action_depart: {
        title: 'Departure Duʿāʾ & Packing with Tawakkul',
        instruction: 'Check that your backpack or belongings are ready in real life. Then recite the departure duʿāʾ placing full trust in Allah: « Bismillāh, tawakkaltu ʿalā Allāh, wa lâ hawla wa lâ quwwata illā billâh ».',
        subtext: 'The believer takes practical steps and relies serenely on the Creator.',
        reflectionPrompt: 'Have you made a habit of placing your steps in Allah’s care before leaving home?'
      },
      action_istiadhah: {
        title: 'Reciting the Istiʿādhah & Stepping Forward',
        instruction: 'Take a calm, deep breath in real life. Recite clearly: « Aʿūdhu billāhi mina sh-shayṭāni r-rajīm » to seek refuge in Allah, then choose to move forward despite self-doubt.',
        subtext: 'Sincere refuge centers the heart and breaks the grip of discouragement.',
        reflectionPrompt: 'Do you turn to Allah for refuge whenever doubts arise in your mind?'
      },
      action_salam_village: {
        title: 'The Salām & Fraternal Smile',
        instruction: 'Today: offer a sincere Salām or a warm, gentle smile to someone in real life. The Prophet ﷺ taught that a smile is a charity (Sadaqah).',
        subtext: 'Kindness disarms mistrust and softens closed hearts.',
        reflectionPrompt: 'Have you gifted a smile or word of peace to someone today?'
      },
      action_sabr_refus: {
        title: 'Sabr in the Face of Rejection',
        instruction: 'Think of a recent disappointment or refusal. Take a deep breath and say with your heart: « Al-Hamdulillāh ʿalâ kulli hāl » without bitterness.',
        subtext: 'Sabr is moral strength: we accept outcomes with dignity and keep moving forward.',
        reflectionPrompt: 'Have you managed to accept a « no » with poise and noble calm?'
      },
      action_parler: {
        title: 'Speaking with Warmth',
        instruction: 'Today in real life: speak kindly to someone you do not usually talk to.',
        subtext: 'A simple respectful greeting is enough to initiate fraternal Taʿāruf.',
        reflectionPrompt: 'Ready to try a kind salutation today?'
      },
      action_geste: {
        title: 'A Discreet Good Deed (Pure Niyyah)',
        instruction: 'Today: do a small helpful deed in secret (tidy something, pick up litter, help without being asked) without seeking praise from anyone.',
        subtext: 'Actions are judged by intentions. Acting secretly for Allah protects the heart from vanity.',
        reflectionPrompt: 'Have you done a good deed seen by none except Allah?'
      },
      action_shukr: {
        title: 'Shukr & Caring for Living Things',
        instruction: 'Take 1 minute: 1. Think of 3 blessings Allah granted you (health, family, water) and say « Al-Hamdulillāh ». 2. Water a plant or care for a living creature nearby.',
        subtext: 'Gratitude increases divine favor (Quran 14:7). Caring for creation is an act of worship.',
        reflectionPrompt: 'What are three blessings you are most grateful for today?'
      },
      action_mission_jour: {
        title: 'Mission of the Day: As-salāmu ʿalaykum',
        instruction: 'Walk up to someone. Say: « As-salāmu ʿalaykum ». Let the encounter unfold naturally.',
        subtext: 'The best of two is the one who initiates the Salām.',
        reflectionPrompt: 'Peace offered from the heart opens the gates of true brotherhood.'
      }
    },
    climaxSteps: {
      step_istiadhah: {
        title: '1. Remember Allah & Seek Refuge',
        meaning: 'I seek refuge in Allah from doubt and discouragement.',
        description: 'When suffocating doubt strikes, seeking refuge in Allah anchors the soul and clears away fear.'
      },
      step_ilm: {
        title: '2. Beneficial Knowledge & Understanding',
        meaning: 'Recalling authentic principles and lessons learned along the journey.',
        description: 'Beneficial knowledge illuminates the heart and stops harmful illusions from taking root.'
      },
      step_sabr: {
        title: '3. Patient Endurance (Sabr)',
        meaning: 'Facing difficulty without panic, without bitterness, and without giving up.',
        description: 'Trials are a natural part of growth; patience is the key to lasting peace and constancy.'
      },
      step_adab: {
        title: '4. Noble Character (Adab)',
        meaning: 'Preserving kindness, respectful speech, and inner composure.',
        description: 'Never respond to negativity with harshness or vanity, but with dignified calm.'
      },
      step_effort: {
        title: '5. Sincere Effort & Taking Causes',
        meaning: 'Striving with full sincerity without feigning helplessness.',
        description: 'Allah blesses the sincere effort of the one who strives for what benefits him.'
      },
      step_action: {
        title: '6. Moving Forward Constantly',
        meaning: 'Taking the next step despite uncertainty and persevering in goodness.',
        description: 'Waswas vanishes completely as soon as one engages resolutely in righteous action.'
      }
    }
  },

  ar: {
    scenes: {
      1: { title: 'الْغُرْفَةُ', subtitle: '« الْإِشْرَاقُ وَالْخُطْوَةُ الْأُولَى »' },
      2: { title: 'لَافِتَةُ مُفْتَرَقِ الطُّرُقِ', subtitle: '« اخْتِيَارُ الْهَدَفِ »' },
      3: { title: 'الْوَسْوَاسُ الْأَوَّلُ', subtitle: '« الْفِكْرَةُ الْمُعَطِّلَةُ »' },
      4: { title: '« لَمْ أَعُدْ أُرِيدُ الْبَقَاءَ وَحِيدًا »', subtitle: 'التَّعَارُفُ' },
      5: { title: 'الْقَرْيَةُ', subtitle: '« حُسْنُ الْخُلُقِ وَأَدَبُ الْكَلَامِ »' },
      6: { title: 'الرَّفْضُ', subtitle: '« لَنْ يَقُولَ الْجَمِيعُ نَعَمْ »' },
      7: { title: 'الْعَمَلُ الصَّالِحُ', subtitle: '« لِمَاذَا نُسَاعِدُ؟ »' },
      8: { title: 'الْحَدِيقَةُ الْمَهْجُورَةُ', subtitle: '« رُؤْيَةُ النِّعَمِ الَّتِي بَيْنَ أَيْدِينَا »' },
      9: { title: 'الْوَسْوَاسُ الْأَكْبَرُ', subtitle: '« قِمَّةُ الْيَقَظَةِ »' }
    },
    beats: {
      s1_hook_1: 'يُضِيءُ نُورُ الْفَجْرِ جُدْرَانَ الْغُرْفَةِ بِلُطْفٍ. يَجْلِسُ عُثْمَانُ عَلَى حَافَّةِ سَرِيرِهِ، وَعَيْنَاهُ تَرْنُوَانِ إِلَى حَقِيبَةِ سَفَرِهِ الَّتِي مَا زَالَتْ فَاغِرَةً.',
      s1_hook_2: 'الْيَوْمُ هُوَ الْيَوْمُ الْمَوْعُودُ يَا عُثْمَانُ. الْيَوْمُ الَّذِي عَزَمْتَ فِيهِ عَلَى النُّزُولِ نَحْوَ الْقَرْيَةِ.',
      s1_hook_3: 'نَعَمْ... لَطَالَمَا عِشْتُ فِي أَمَانٍ وَعُزْلَةٍ فَوْقَ هَذِهِ التَّلَّةِ. أُرِيدُ أَنْ أَتَعَلَّمَ، وَأَنْ أَسْتَكْشِفَ الْعَالَمَ، وَأَنْ أَتَعَرَّفَ عَلَى الْآخَرِينَ... لَكِنْ كُلَّمَا فَكَّرْتُ فِي ذَلِكَ، أَخَافُ أَلَّا أَجِدَ لِي مَكَانًا بَيْنَهُمْ.',
      s1_hook_4: 'الْحِكْمَةُ وَالصُّحْبَةُ الطَّيِّبَةُ لَا تُنَالَانِ بِالْبَقَاءِ حَبِيسَ الْجُدْرَانِ يَا بُنَيَّ. بِمَاذَا تُرِيدُ أَنْ تَبْدَأَ يَوْمَكَ؟',
      s1_water_othman: 'سَأَبْدَأُ بِشُرْبِ قَلِيلٍ مِنَ الْمَاءِ الْعَذْبِ.',
      s1_water_noura_ask: 'قَبْلَ أَنْ تَشْرَبَ... هَلْ تَذْكُرُ الْآدَابَ الطَّيِّبَةَ الَّتِي عَلَّمَنَا إِيَّاهَا النَّبِيُّ ﷺ عِنْدَ الشُّرْبِ؟',
      s1_water_noura_teach: 'تَمَهَّلْ فِي شُرْبِكَ. عَلَّمَنَا النَّبِيُّ ﷺ أَنْ نَسْتَحْضِرَ الْأَدَبَ : نَبْدَأُ بِبِسْمِ اللَّهِ، نَشْرَبُ بِالْيَمِينِ، وَعَلَى ثَلَاثِ دَفَعَاتٍ هَادِئَةٍ. حَتَّى الْعَادَاتُ الْيَوْمِيَّةُ الْبَسِيطَةُ تَنْقَلِبُ عِبَادَةً حِينَ تَصْحَبُهَا النِّيَّةُ الصَّالِحَةُ.',
      s1_water_othman_drink: 'الْحَمْدُ لِلَّهِ... الْمَاءُ بَارِدٌ وَعَذْبٌ يُنْعِشُ الْفُؤَادَ. أَشْعُرُ بِالسَّكِينَةِ وَالْقُدْرَةِ عَلَى الْمُضِيِّ قُدُمًا.',
      s1_order_othman: 'سَأَبْدَأُ بِتَرْتِيبِ غُرْفَتِي وَإِصْلَاحِ سَرِيرِي.',
      s1_order_noura_ask: 'بِدَايَةٌ مُبَارَكَةٌ. تَرْتِيبُ الْمَكَانِ يُعِينُ عَلَى تَرْتِيبِ الْأَفْكَارِ وَصَفَاءِ الْبَالِ. لَكِنْ هَلْ تَعْلَمُ بِأَيِّ نِيَّةٍ نَقُومُ بِذَلِكَ؟',
      s1_order_noura_teach: '« إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ ». حَتَّى تَرْتِيبُ غِطَائِكَ يَصِيرُ قُرْبَةً وَجَمَالًا حِينَ يَكُونُ الْقَلْبُ صَادِقًا مُبْتَغِيًا رِضَا اللَّهِ.',
      s1_order_othman_done: 'أَصْبَحَ كُلُّ شَيْءٍ مُرَتَّبًا وَمُشْرِقًا. عَيْنَايَ تَتَّجِهَانِ نَحْوَ حَقِيبَةِ السَّفَرِ... أَنَا مُسْتَعِدٌّ لِلنُّزُولِ.',
      s1_sandals_othman: 'سَأُعِدُّ نَعْلَيَّ. أَظُنُّ أَنَّنِي جَاهِزٌ لِلْخُرُوجِ إِلَى الْخَارِجِ.',
      s1_sandals_noura_ask: 'اسْتَعِدَّ لِعُبُورِ الْعَتَبَةِ. قَبْلَ أَنْ تَخْطُوَ خَارِجَ الْبَيْتِ، هُنَاكَ دُعَاءٌ نَبَوِيٌّ عَظِيمٌ يَحْفَظُكَ فِي مَسِيرِكَ.',
      s1_sandals_noura_teach: 'أَحْسَنْتَ : تَفْوِيضُ الْأَمْرِ إِلَى اللَّهِ عِنْدَ الْخُرُوجِ يَمْنَحُ الْقَلْبَ قُوَّةً لَا تَتَزَعْزَعُ.',
      s1_sandals_othman_recite: '« بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ ».',
      s1_door_hesitation: 'يَدِي تَلْمِسُ مِقْبَضَ الْبَابِ الْحَدِيدِيَّ... أُمِّي، قَلْبِي يَنْبِضُ بِشِدَّةٍ فَجْأَةً. مَاذَا لَوْ لَمْ يَرْغَبْ أَحَدٌ فِي رُؤْيَتِي هُنَاكَ؟',
      s1_waswas_whisper: 'أَتَظُنُّ نَفْسَكَ قَادِرًا عَلَى النَّجَاحِ؟ ابْقَ دَاخِلَ غُرْفَتِكَ. سَتَتَلَعْثَمُ مَعَ أَوَّلِ كَلِمَةٍ. عُدْ إِلَى سَرِيرِكَ...',
      s1_noura_wisdom: 'أَتَسْمَعُ هَذَا؟ الشَّكُّ يُحَاوِلُ دَائِمًا تَقْيِيدَكَ عِنْدَ الْعَتَبَةِ. لَا تُجَادِلْهُ : تَوَكَّلْ عَلَى اللَّهِ وَاخْطُ خُطْوَتَكَ !',
      s1_door_open: 'يَنْفَتِحُ الْبَابُ الْخَشَبِيُّ عَلَى نَسِيمِ الصَّبَاحِ الْعَلِيلِ. يَعْبُرُ عُثْمَانُ الْعَتَبَةَ، فَتَتَلَاشَى الْوَسَاوِسُ خَلْفَهُ بَيْنَمَا يَنْزِلُ الرَّبْوَةَ نَحْوَ حَافَّةِ الْغَابَةِ.',
      s2_b1: 'يَصِلُ عُثْمَانُ وَنُورَا أَمَامَ لَافِتَةٍ خَشَبِيَّةٍ كَبِيرَةٍ مَنْحُوتَةٍ عِنْدَ مُفْتَرَقِ الطُّرُقِ. يَضَعُ عُثْمَانُ حَقِيبَتَهُ لَحْظَةً لِيَمْسَحَ جَبِينَهُ.',
      s2_b2_noura: 'لَقَدْ خَرَجْتَ مِنْ بَيْتِكَ يَا عُثْمَانُ. لَكِنَّ الْخُرُوجَ وَحْدَهُ لَيْسَ كُلَّ الرِّحْلَةِ. انْظُرْ إِلَى هَذِهِ اللَّافِتَةِ.',
      s2_b3_othman: 'كُلُّ سَهْمٍ يُشِيرُ إِلَى اتِّجَاهٍ مُخْتَلِفٍ... بِمَاذَا أَبْدَأُ رِحْلَتِي الْيَوْمَ؟',
      s2_b4_noura: 'الْخِيَارُ لَكَ لِتُحَدِّدَ مَا تُرِيدُ أَنْ تَبْنِيَهُ فِي نَفْسِكَ الْيَوْمَ. كُلُّ مَسْلَكٍ هُوَ رِحْلَةٌ لِتَزْكِيَةِ قَلْبِكَ.',
      s2_choice_reaction: 'أَخْتَارُ الْإِقْبَالَ عَلَى النَّاسِ ! لَا أُرِيدُ أَنْ أَبْقَى سَجِينَ عُزْلَتِي. أُرِيدُ أَنْ أَتَعَلَّمَ كَيْفَ أَبْنِي صَدَاقَاتٍ وَأُخُوَّةً صَادِقَةً.',
      s2_tawakkul_reminder: 'إِذَنْ فَلْنَبْدَأْ بِالتَّعَارُفِ ! اسْتَوْدِعْ قَلْبَكَ عِنْدَ اللَّهِ وَلْنَمْضِ بِطُمَأْنِينَةٍ.',
      s3_b1: 'يَضِيقُ الْمَسْلَكُ تَحْتَ صُخُورٍ وَاعِرَةٍ. يَرْتَفِعُ ضَبَابٌ بَنَفْسَجِيٌّ كَثِيفٌ مِنَ الْأَرْضِ. يَنْبَثِقُ وَسْوَاسٌ : ظِلٌّ هَامِسٌ، لَا جَسَدَ لَهُ، لَكِنَّهُ مُثْقَلٌ بِالشُّكُوكِ.',
      s3_b2: 'لَنْ تَصِلَ أَبَدًا.\nأَتُرِيدُ صُنْعَ أَصْدِقَاءَ؟ أَنْتَ لَا تَقْوَى حَتَّى عَلَى التَّحَدُّثِ إِلَى غَرِيبٍ دُونَ أَنْ تَتَلَعْثَمَ.',
      s3_b3: 'أُمِّي... كَلِمَاتُهُ... هِيَ تَمَامًا مَا كُنْتُ أُحَدِّثُ بِهِ نَفْسِي صَبَاحَ الْيَوْمِ فِي سَرِيرِي.',
      s3_b6: 'هُوَ لَا يَقْرَأُ أَفْكَارَكَ يَا عُثْمَانُ، بَلْ يَنْفُخُ فِي مَخَاوِفِكَ لِيُعَطِّلَكَ وَيَدْفَعَكَ لِلِانْسِحَابِ. هَذَا الظِّلُّ لَا قُوَّةَ لَهُ إِلَّا مَا تَمْنَحُهُ إِيَّاهُ أَنْتَ.',
      s3_b7: 'لَكِنْ كَيْفَ أُسْكِتُ فِكْرَةً تَخْنُقُ حَلْقِي وَتَمْلَأُنِي خَوْفًا؟',
      s3_b7_bis: 'لَا نُجَادِلُ الشَّكَّ يَا بُنَيَّ، بَلْ نَلْجَأُ إِلَى مَنْ بِيَدِهِ كَشْفُ الظُّلُمَاتِ.',
      s3_b9: '« أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ! »',
      s3_b10: 'يَبْدَأُ الظِّلُّ الْمُظْلِمُ فِي التَّرَنُّحِ وَفُقْدَانِ تَكَاتُفِهِ.',
      s3_b11: 'انْظُرِي، إِنَّهُ يَتَرَاجَعُ ! هَلْ هَكَذَا انْتَهَى أَمْرُهُ؟',
      s3_b14: 'انْتَبِهْ : لَيْسَتْ كَلِمَاتٍ سِحْرِيَّةً، بَلْ اسْتِعَاذَةٌ صَادِقَةٌ مِنْ قَلْبِكَ. وَالْآنَ، ثَبِّتْ هَذَا اللُّجُوءَ وَاخْطُ خُطْوَتَكَ الْفِعْلِيَّةَ إِلَى الْأَمَامِ !',
      s3_pont_istiadhah: 'وَأَنْتَ فِي وَاقِعِكَ... حِينَ يُحَاصِرُكَ الْخَوْفُ أَوِ الْخَجَلُ وَيَمْنَعُكَ مِنْ فِعْلِ الْخَيْرِ : تَنَفَّسْ بِهُدُوءٍ، اسْتَعِذْ بِاللَّهِ، وَاعْزِمْ عَلَى أَنْ تَخْطُوَ خُطْوَتَكَ !',
      s3_b16: 'يَسْتَقِرُّ قَلْبُ عُثْمَانَ بِذِكْرِ اللَّهِ، فَيَغْرِسُ عَصَاهُ بِثَبَاتٍ وَيَخْطُو خُطْوَةً وَاثِقَةً نَحْوَ الْأَمَامِ.',
      s3_b17: 'سَتَفْشَلُ رَغْمَ ذَلِكَ...',
      s3_b18: 'رُبَّمَا. لَكِنِّي أَتَوَكَّلُ عَلَى اللَّهِ وَأَمْضِي !',
      s3_b19: 'يَتَفَتَّتُ الضَّبَابُ الْبَنَفْسَجِيُّ فِي مَطَرٍ مِنْ شَرَارَاتِ النُّورِ الذَّهَبِيَّةِ ! يَعُودُ الْمَسْلَكُ وَاضِحًا، مُزَيَّنًا بِالْأَزْهَارِ وَمَغْمُورًا بِالدِّفْءِ.',
      s3_b19_reaction: 'لَقَدْ تَبَخَّرَ تَمَامًا... أَصْبَحَ الطَّرِيقُ مُشْرِقًا وَمَفْتُوحًا أَمَامَنَا !',
      s3_b19_noura: 'لَا بَقَاءَ لِلشَّكِّ أَمَامَ صِدْقِ الِالْتِجَاءِ إِلَى اللَّهِ وَشَجَاعَةِ الْعَمَلِ. احْفَظْ هَذَا الدَّرْسَ جَيِّدًا.',
      s4_b1: 'فِي الْأَسْفَلِ، تَتَلَأْلَأُ قِرْمِيدَاتُ الْقَرْيَةِ الْحَمْرَاءُ تَحْتَ أَشِعَّةِ الشَّمْسِ. أَهْلُ الْقَرْيَةِ يَمْشُونَ بَيْنَ الْأَزِقَّةِ وَالْبَسَاتِينِ.',
      s4_b2: 'انْظُرِي إِلَى كُلِّ هَؤُلَاءِ النَّاسِ... يَبْدُونَ جَمِيعًا مُنْشَغِلِينَ وَوَاثِقِينَ مِنْ أَنْفُسِهِمْ. إِنِ اقْتَرَبْتُ، سَيَتَسَاءَلُونَ مَنْ أَكُونُ وَيَسْتَغْرِبُونَ وُجُودِي.',
      s4_b3: 'وَلِمَاذَا يَسْتَغْرِبُونَ يَا عُثْمَانُ؟',
      s4_b4: 'لِأَنَّنِي لَا أَعْرِفُ أَحَدًا هُنَا. لَسْنَا مِنَ الْمَكَانِ نَفْسِهِ، وَلَا نَعِيشُ الْحَيَاةَ ذَاتَهَا... مَاذَا لَوْ لَمْ نَجِدْ مَا نَقُولُهُ؟',
      s4_b5: 'أَتَظُنُّ حَقًّا أَنَّ اللَّهَ خَلَقَ النَّاسَ بِأَلْوَانٍ وَوُجُوهٍ مُتَنَوِّعَةٍ لِيَبْقَى كُلُّ وَاحِدٍ مُنْغَلِقًا خَلْفَ نَوَافِذِهِ؟',
      s4_b9: 'الْآيَةُ ١٣ مِنْ سُورَةِ الْحُجُرَاتِ... جَعَلَنَا شُعُوبًا وَقَبَائِلَ « لِتَعَارَفُوا ». إِذَنْ فَالِاخْتِلَافُ بَيْنَ النَّاسِ لَيْسَ حَاجِزًا... بَلْ هُوَ دَعْوَةٌ رَبَّانِيَّةٌ لِلتَّوَاصُلِ !',
      s4_b10: 'تَمَامًا. الِاخْتِلَافُ جِسْرٌ لِلْعُبُورِ لَا جِدَارٌ لِلْقَطِيعَةِ. فَهَلْ أَنْتَ مُسْتَعِدٌّ لِخَوْضِ الْخُطْوَةِ الْأُولَى؟',
      s4_pont_parler: 'وَأَنْتَ فِي حَيَاتِكَ الْيَوْمِيَّةِ... هَلْ هُنَاكَ شَخْصٌ لَمْ تُبَادِرْ إِلَيْهِ بِالْكَلَامِ مِنْ قَبْلُ؟ جَارٌ، زَمِيلٌ، أَوْ عَامِلٌ؟ اعْبُرْ هَذَا الْجِسْرَ الْيَوْمَ وَأَهْدِهِ تَحِيَّةً طَيِّبَةً.',
      s4_b14: 'سَلَّمْتُ عَلَى شَيْخٍ طَيِّبٍ كَانَ يُقَلِّمُ كُرُومَهُ، فَاعْتَدَلَ فِي جِلْسَتِهِ وَابْتَسَمَ لِي بِحَرَارَةٍ ! فِي النِّهَايَةِ... كَانَ الْأَمْرُ أَبْسَطَ بِكَثِيرٍ مِمَّا تَصَوَّرْتُهُ فِي رَأْسِي.',
      s4_b15: 'الْخَوْفُ يَكْبُرُ دَائِمًا فِي الصَّمْتِ وَالرُّكُودِ يَا بُنَيَّ. حِينَ تُقْدِمُ بِصِدْقٍ يَتَبَدَّدُ. انْظُرْ : أَمَامَنَا عِدَّةُ مَسَالِكٍ لِاسْتِكْشَافِ الْقَرْيَةِ.',
      s5_b1: 'يَدْخُلُ عُثْمَانُ وَنُورَا إِلَى السَّاحَةِ الْمَرْكَزِيَّةِ الْمُرَصَّفَةِ. حَوْلَ يَنْبُوعِ الْمَاءِ، يَتَوَقَّفُ بَعْضُ الْقَرَوِيِّينَ عَنِ الْحَدِيثِ : نَظَرَاتٌ مُتَحَفِّظَةٌ، لَا أَحَدَ يَبْدَأُ بِالْخُطْوَةِ نَحْوَ الْقَادِمِينَ الْجُدُدِ.',
      s5_b2: 'يَا لَهُ مِنْ اسْتِقْبَالٍ بَارِدٍ... يَنْظُرُونَ إِلَيَّ وَكَأَنَّنِي قَادِمٌ لِآخُذَ شَيْئًا مِنْهُمْ.',
      s5_b3: 'عَلَى مَقْرُبَةٍ مِنَ الدَّكَاكِينِ، يَرْتَفِعُ صَوْتُ تَاجِرَيْنِ فِي جِدَالٍ حَادٍّ حَوْلَ كِيسِ حُبُوبٍ. يَتَحَمَّسُ عُثْمَانُ وَيَهُمُّ بِالتَّدَخُّلِ لِيَفْرِضَ وُجُودَهُ.',
      s5_b4: 'انْتَظِرِي، يُمْكِنُنِي أَنْ أَتَدَخَّلَ بَيْنَهُمَا ! هَكَذَا سَيَرَى الْجَمِيعُ أَنَّ لَدَيَّ شَخْصِيَّةً قَوِيَّةً.',
      s5_b5: 'عُثْمَانُ... أَتُرِيدُ أَنْ تَتَكَلَّمَ لِيَرَاكَ النَّاسُ... أَمْ تُرِيدُ أَنْ تَنْفَعَ حَقًّا؟',
      s5_b6: 'أَنَا... فِي الْحَقِيقَةِ كُنْتُ فَقَطْ أُرِيدُ أَنْ يَلْتَفِتُوا إِلَيَّ. أَنَا لَا أَعْرِفُ حَتَّى حَقِيقَةَ جِدَالِهِمَا.',
      s5_b8: '« مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ ». حِفْظُ اللِّسَانِ حِينَ لَا نَمْلِكُ خَيْرًا نُقَدِّمُهُ هُوَ أَيْضًا عَلَامَةُ نُضْجٍ وَرُشْدٍ.',
      s5_b9: 'أَحْسَنْتَ. وَلِكَسْرِ الْجَفَاءِ دُونَ فُضُولٍ، هَلْ تَعْرِفُ الْمِفْتَاحَ الْأَنْقَى؟ إِفْشَاءُ السَّلَامِ وَالِابْتِسَامَةُ الصَّادِقَةُ.',
      s5_b10: 'عَلَّمَنَا النَّبِيُّ ﷺ أَنَّ ابْتِسَامَتَكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ. أَهْدِهِمْ سَلَامَ قَلْبِكَ، وَانْظُرْ كَيْفَ تَتَبَدَّلُ الْأَحْوَالُ.',
      s5_pont_salam: 'وَأَنْتَ، هَلْ تَذَكَّرْتَ هَذِهِ الصَّدَقَةَ الْمَيْسُورَةَ فِي كُلِّ لَحْظَةٍ؟ أَهْدِ الْيَوْمَ سَلَامًا صَادِقًا أَوْ ابْتِسَامَةً طَيِّبَةً لِمَنْ حَوْلَكَ.',
      s5_b11: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ !',
      s5_b12: 'عِنْدَ سَمَاعِ هَذِهِ التَّحِيَّةِ الطَّيِّبَةِ وَرُؤْيَةِ وَجْهِ عُثْمَانَ الْمُشْرِقِ، يَذُوبُ الْجَفَاءُ ! يَبْتَسِمُ الْقَرَوِيُّونَ وَيَرُدُّونَ التَّحِيَّةَ بِتَرْحَابٍ وَبَشَاشَةٍ.',
      s5_b13: 'لَقَدْ رَدُّوا عَلَيَّ السَّلَامَ ! حَتَّى ذَلِكَ التَّاجِرُ أَشَارَ إِلَيَّ بِيَدِهِ مُبْتَسِمًا !',
      s5_b14: 'الْإِحْسَانُ يُذِيبُ الْجَفَاءَ يَا بُنَيَّ. لَقَدْ تَقَدَّمْتَ بِأَدَبٍ وَرِفْقٍ. فَلْنَلْتَحِقْ بِطَرِيقِ الْبَسَاتِينِ الْهَادِئَةِ.',
      s6_b1: 'يَدْخُلُ عُثْمَانُ بِفُضُولٍ تَحْتَ قَوْسٍ حَجَرِيٍّ بَارِدٍ. يَجْلِسُ فَتًى قَرَوِيٌّ فِي عُمْرِهِ قُرْبَ طَاوِلَةِ عَمَلٍ، يَضْفِرُ حَبْلًا مَتِينًا مِنْ لِيفِ الْقَنَّبِ.',
      s6_b2: 'السَّلَامُ عَلَيْكُمْ ! هَلْ تَرْغَبُ فِي أَنْ تَمْشِيَ مَعَنَا قَلِيلًا؟ نَحْنُ نَسْتَكْشِفُ مَسَالِكَ الْوَادِي !',
      s6_b3: 'وَعَلَيْكُمُ السَّلَامُ... لَا، أَعْتَذِرُ. لَدَيَّ طَلَبِيَّةُ حِبَالٍ مُسْتَعْجِلَةٍ يَجِبُ تَسْلِيمُهَا قَبْلَ الْمَسَاءِ.',
      s6_b8: 'يَرْبِطُ الْفَتَى طَرَفَ الْحَبْلِ بِدِقَّةٍ، يَجْمَعُ أَدَوَاتِهِ وَيَدْخُلُ إِلَى عُمْقِ الدُّكَّانِ دُونَ الْتِفَاتٍ.\nيَسُودُ صَمْتٌ ثَقِيلٌ فِي الزُّقَاقِ. يَقِفُ عُثْمَانُ مَكَانَهُ، يَدُهُ لَا تَزَالُ مَمْدُودَةً فِي الْفَرَاغِ.',
      s6_b9: 'هَلْ... هَلْ كُنْتُ فَظًّا مَعَهُ؟ لِمَاذَا رَفَضَ رَغْمَ أَنَّنِي ابْتَسَمْتُ وَأَلْقَيْتُ السَّلَامَ؟',
      s6_b10: 'لَمْ تَفْعَلْ شَيْئًا خَاطِئًا يَا بُنَيَّ. لَكِنَّ الْعَالَمَ لَا يَدُورُ حَوْلَ رَغَبَاتِنَا اللَّحْظِيَّةِ. هَذَا الْفَتَى لَهُ يَوْمُهُ، وَعَمَلُهُ، وَمَسْؤُولِيَّاتُهُ. نِيَّتُكَ كَانَتْ طَيِّبَةً، لَكِنَّ مِنْ حَقِّهِ الطَّبِيعِيِّ أَنْ يَقُولَ لَا.',
      s6_b11: 'أَعْلَمُ ذَلِكَ... لَكِنَّ الشُّعُورَ بِالْخَيْبَةِ يُثْقِلُ الصَّدْرَ. يَشْعُرُ الْمَرْءُ وَكَأَنَّهُ قَدْ أَخْفَقَ.',
      s6_b12: 'ذَلِكَ لِأَنَّكَ كُنْتَ تَنْتَظِرُ مُكَافَأَةً عَاجِلَةً : قَبُولَهُ وَثَنَاءَهُ. وَهُنَا تَمَامًا يَبْدَأُ الصَّبْرُ الْحَقِيقِيُّ.',
      s6_b16: 'الْآيَةُ ١٥٣ مِنْ سُورَةِ الْبَقَرَةِ... « اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ». الصَّبْرُ لَيْسَ اسْتِسْلَامًا وَلَا غَضَبًا، بَلْ هُوَ اسْتِقْبَالُ مَا قَدَّرَهُ اللَّهُ بِوَقَارٍ وَرِضًا.',
      s6_pont_sabr: 'وَأَنْتَ... تَذَكَّرْ رَفْضًا أَوْ تَعَثُّرًا مَرَرْتَ بِهِ. تَنَفَّسْ بِعُمْقٍ، طَهِّرْ قَلْبَكَ مِنَ الْعِتَابِ، وَقُلْ بِصِدْقٍ : « الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ ».',
      s6_b18: 'الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ. زَالَتِ الْخَيْبَةُ. لَيْسَ مَعْنَى أَنَّ بَابًا لَمْ يُفْتَحْ أَنْ نَتَوَقَّفَ عَنِ السَّيْرِ.',
      s6_b19: 'نُضْجٌ بَدِيعٌ يَا عُثْمَانُ. الصَّبْرُ يَمْحُو الْعُجْبَ وَيَزِيدُ الْقَلْبَ نَقَاءً. فَلْنُوَاصِلْ رِحْلَتَنَا نَحْوَ الْبَسَاتِينِ.',
      s7_b1: 'عَلَى طَرِيقِ الزَّيْتُونِ، يَتَعَثَّرُ مُزَارِعٌ مُسِنٌّ. يَنْقَلِبُ سَلَّتَاهُ الْكَبِيرَتَانِ فِي التُّرَابِ، فَتَتَنَاثَرُ الثِّمَارُ النَّاضِجَةُ عَلَى الطَّرِيقِ.',
      s7_b2: 'انْتَظِرِي، يَجِبُ أَنْ نُسَاعِدَهُ ! سِلَالُهُ انْقَلَبَتْ بِالْكَامِلِ.',
      s7_b3: 'يَجْثُو عُثْمَانُ دُونَ تَرَدُّدٍ وَيَبْدَأُ فِي جَمْعِ التِّينِ وَالزَّيْتُونِ حَبَّةً حَبَّةً لِإِعَادَتِهَا إِلَى السِّلَالِ.',
      s7_b4: 'لِمَاذَا تُسَاعِدُهُ يَا عُثْمَانُ؟',
      s7_b5: 'لِأَنَّهُ شَيْخٌ كَبِيرٌ وَلَنْ يَقْوَى عَلَى جَمْعِهَا وَحْدَهُ قَبْلَ حُلُولِ الظَّلَامِ.',
      s7_b6: 'وَمَاذَا لَوْ لَمْ يَرَكَ أَحَدٌ؟ لَا هُوَ، وَلَا الْمَارَّةُ، وَلَا أَنَا؟',
      s7_b7: 'كُنْتُ سَأُسَاعِدُهُ أَيْضًا ! أَنَا لَا أَجْمَعُ هَذِهِ الثِّمَارَ مِنْ أَجْلِ مَدْحِ النَّاسِ.',
      s7_b12: '« إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ ». إِذَنْ لَا يَجُوزُ أَنْ أَفْعَلَ الْخَيْرَ لِيُقَالَ عَنِّي كَرِيمٌ أَوْ شُجَاعٌ.',
      s7_b13: 'النِّيَّةُ سِرٌّ خَفِيٌّ بَيْنَكَ وَبَيْنَ خَالِقِكَ. وَكُلَّمَا حَرَصْتَ عَلَى إِخْفَاءِ الْعَمَلِ، كَانَ أَطْهَرَ لِلْقَلْبِ.',
      s7_pont_geste: 'وَأَنْتَ فِي يَوْمِكَ... هَلْ يُمْكِنُكَ أَنْ تَقُومَ بِعَمَلِ خَيْرٍ بَسِيطٍ (إِصْلَاحُ شَيْءٍ، إِمَاطَةُ أَذًى) دُونَ أَنْ تُخْبِرَ بِهِ أَحَدًا، لِوَجْهِ اللَّهِ وَحْدَهُ؟ هَذَا هُوَ الْإِخْلَاصُ.',
      s7_b18: 'انْظُرِي يَا أُمِّي : أُعِيدَتِ الثِّمَارُ كُلُّهَا، وَاسْتَقَرَّتِ السِّلَالُ قُرْبَ الْجِدَارِ وَأَصْبَحَ الطَّرِيقُ سَالِكًا !',
      s7_b19: 'وَفَعَلْتَ ذَلِكَ بِتَوَاضُعٍ وَهُدُوءٍ. هَذَا الْإِخْلَاصُ هُوَ الَّذِي يَمْنَحُ كُلَّ عَمَلٍ وَزْنَهُ الْحَقِيقِيَّ. فَلْنَمْضِ نَحْوَ الْبُسْتَانِ الْهَادِئِ.',
      s8_b1: 'يَصْعَدُ الْمَسْلَكُ نَحْوَ بُسْتَانٍ قَدِيمٍ عَلَى مُدَرَّجَاتٍ حَجَرِيَّةٍ. الْأَعْشَابُ الْيَابِسَةُ كَسَتْ مَجْرَى الْمَاءِ وَالْأَغْصَانُ الْجَافَّةُ تَمْلَأُ الْأَرْضَ.',
      s8_b2: 'يَا لَلْأَسَفِ... كُلُّ شَيْءٍ يَبْدُو مَهْجُورًا هُنَا. لَمْ يَعُدْ هُنَاكَ مَا يَنْمُو، هَذَا مَحْزِنٌ.',
      s8_b3: 'تَأَمَّلْ جَيِّدًا يَا عُثْمَانُ. لَا تَقِفْ عِنْدَ الظَّاهِرِ الْجَافِّ فَقَطْ.',
      s8_b4: 'يَجْثُو عُثْمَانُ، يُزِيحُ الْأَوْرَاقَ الْيَابِسَةَ فَيَكْتَشِفُ تَحْتَ الْحِجَارَةِ بَرَاعِمَ إِكْلِيلِ الْجَبَلِ الْعَطِرَةَ، وَبَعْضَ حَبَّاتِ التِّينِ النَّاضِجَةِ، وَخَرِيرَ مَاءٍ عَذْبٍ يَنْسَابُ.',
      s8_b5: 'كَانَتْ هُنَا تَحْتَ الْأَغْصَانِ ! مَاءٌ زُلَالٌ، وَثِمَارٌ... كَانَتْ فَقَطْ تَنْتَظِرُ مَنْ يُزِيحُ عَنْهَا الْغُبَارَ.',
      s8_b6: 'أَحْيَانًا نَنْشَغِلُ بِمَا يَنْقُصُنَا حَتَّى نَعْمَى عَنْ رُؤْيَةِ النِّعَمِ الْعَظِيمَةِ الَّتِي بَيْنَ أَيْدِينَا.',
      s8_b10: 'الْآيَةُ ٧ مِنْ سُورَةِ إِبْرَاهِيمَ... « لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ». الشُّكْرُ لَيْسَ ادِّعَاءً بِأَنَّ كُلَّ شَيْءٍ كَامِلٌ...',
      s8_b12: 'بَلْ هُوَ أَنْ نَفْتَحَ أَعْيُنَنَا عَلَى عَطَايَا اللَّهِ الْمَوْجُودَةِ حَوْلَنَا، حَتَّى فِي أَوْقَاتِ الشِّدَّةِ.',
      s8_pont_shukr: 'وَأَنْتَ... قَبْلَ أَنْ تُفَكِّرَ فِيمَا فَقَدْتَهُ، خُذْ دَقِيقَةً : اسْتَحْضِرْ ٣ نِعَمٍ أَنْعَمَ اللَّهُ بِهَا عَلَيْكَ الْيَوْمَ وَقُلْ « الْحَمْدُ لِلَّهِ ». ثُمَّ اسْقِ نَبْتَةً رِعَايَةً لِخَلْقِ اللَّهِ.',
      s8_b15: 'انْظُرِي يَا أُمِّي ! بَعْدَ إِزَالَةِ الْأَغْصَانِ الْيَابِسَةِ، عَادَ الْجَدْوَلُ يَتَدَفَّقُ بِقُوَّةٍ. مَا أَعْذَبَ هَذَا الْمَاءَ !',
      s8_b16: 'انْظُرْ كَمْ كَانَ الْخَيْرُ حَاضِرًا يَا عُثْمَانُ. كَانَ يَحْتَاجُ فَقَطْ أَنْ نَلْتَفِتَ إِلَيْهِ... وَأَنْ نَرْعَاهُ.',
      s9_b1: 'يَضِيقُ مَمَرُّ الْجَبَلِ تَحْتَ قُبَّةٍ مِنَ الظِّلَالِ الْبَارِدَةِ. تَقِفُ أَعْمِدَةُ حِجَارَةٍ عَتِيقَةٍ فِي صَمْتٍ. أَمَامَهُمَا، يَتَشَكَّلُ الْوَسْوَاسُ الْأَكْبَرُ : دَوَّامَةٌ مُظْلِمَةٌ هَائِجَةٌ تَبْعَثُ عَلَى الرُّعْبِ.',
      s9_b2: 'أَتَظُنُّ نَفْسَكَ حَقَّقْتَ شَيْئًا؟ انْظُرْ إِلَى حَالِكَ يَا عُثْمَانُ. تَرَدَّدْتَ صَبَاحًا، وَتَلَعْثَمْتَ فِي السَّاحَةِ، وَرَفَضَكَ أَوَّلُ فَتًى قَابَلْتَهُ.',
      s9_b4: 'تُرِيدُ أَصْدِقَاءَ؟ وَلِمَاذَا يَرْغَبُ بِكَ أَحَدٌ؟ أَنْتَ أَضْعَفُ وَأَشَدُّ خَجَلًا وَأَقَلُّ شَأْنًا مِنْ أَنْ يَلْتَفِتَ إِلَيْكَ أَحَدٌ.',
      s9_b5: 'هَذَا صَحِيحٌ... رُبَّمَا كُنْتُ أَخْدَعُ نَفْسِي. رُبَّمَا لَسْتُ أَهْلًا لِلرِّحْلَةِ وَلَا لِكَسْبِ صَحْبٍ.',
      s9_b7: 'انْظُرْ خَلْفَكَ يَا بُنَيَّ. لَا تَنْظُرْ إِلَى أَوْهَامِهِ؛ انْظُرْ إِلَى مَا بَنَيْتَهُ حَقًّا عَلَى طُولِ الطَّرِيقِ.',
      s9_b8: 'تَتَوَهَّجُ شَرَارَاتٌ ذَهَبِيَّةٌ فِي الظَّلَامِ، كَاشِفَةً ذِكْرَيَاتِ الرِّحْلَةِ : السَّرِيرُ الْمُرَتَّبُ عِنْدَ الْفَجْرِ... الِاسْتِعَاذَةُ الَّتِي قَهَرَتِ الظِّلَّ... الِابْتِسَامَةُ الَّتِي أُفْشِيَتْ فِي السَّاحَةِ... الرَّفْضُ الَّذِي اسْتُقْبِلَ بِالصَّبْرِ... الثِّمَارُ الَّتِي جُمِعَتْ فِي الْخَفَاءِ... الْمَاءُ الْعَذْبُ فِي الْبُسْتَانِ.',
      s9_b9: 'لَقَدْ تَعَلَّمْتَ.',
      s9_b10: 'لَقَدْ حَاوَلْتَ.',
      s9_b11: 'لَقَدْ تَعَثَّرْتَ.',
      s9_b12: 'ثُمَّ نَهَضْتَ مِنْ جَدِيدٍ. كُلُّ خُطْوَةٍ خَطَوْتَهَا هِيَ عَمَلٌ صَادِقٌ حَقِيقِيٌّ لَا يَسْتَطِيعُ أَحَدٌ أَنْ يَسْلُبَكَ إِيَّاهُ.',
      s9_b14: 'حَدِيثُ مُسْلِمٍ ٢٦٦٤ : « احْرِصْ عَلَى مَا يَنْفَعُكَ ، وَاسْتَعِنْ بِاللَّهِ وَلَا تَعْجَزْ ». لَا يَكْفِي الْعِلْمُ وَحْدَهُ : بَلْ يَجِبُ أَنْ يَجْتَمِعَ الْإِيمَانُ، وَالْجُهْدُ، وَالْعَمَلُ !',
      s9_b18: 'يُطْلِقُ الْوَسْوَاسُ الْأَكْبَرُ آخِرَ عَوَاصِفِهِ الْمُظْلِمَةِ. يَقِفُ عُثْمَانُ ثَابِتًا : قَلْبُهُ مُتَسَلِّحٌ بِأَرْكَانِ الثَّبَاتِ السِّتَّةِ الَّتِي تَعَلَّمَهَا فِي طَرِيقِهِ.',
      s9_b19: 'سَتَفْشَلُ ! أَنْتَ لَا شَيْءَ !',
      s9_b20: 'رُبَّمَا. لَكِنِّي سَأَبْذُلُ كُلَّ جُهْدِي وَأَسْعَى بِكُلِّ قُوَّتِي وَإِيمَانِي !',
      s9_b21: 'فِي وَمْضَةٍ بَاهِرَةٍ مِنَ النُّورِ الذَّهَبِيِّ، تَتَحَطَّمُ الدَّوَّامَةُ الْمُظْلِمَةُ وَتَتَبَخَّرُ كُلِّيًّا ! تُشْرِقُ شَمْسُ الصَّبَاحِ فَوْقَ الْقِمَّةِ، مُضِيئَةً الصُّخُورَ الْعَتِيقَةَ بِدِفْءٍ وَبَهَاءٍ.',
      s9_b22: 'يَلُفُّ الْقِمَّةَ هُدُوءٌ مَهِيبٌ وَسَكِينَةٌ عَظِيمَةٌ. نَسِيمُ الْجَبَلِ دَافِئٌ وَرَقِيقٌ.',
      s9_b23: 'هَذَا الصَّبَاحَ، كُنْتُ أَظُنُّ أَنَّ غَايَتِي الْوَحِيدَةَ هِيَ أَنْ يُحِبَّنِي النَّاسُ.',
      s9_b24: 'وَالْآنَ؟',
      s9_b25: 'الْآنَ فَهِمْتُ أَنَّ غَايَتِي هِيَ أَنْ أَكُونَ نُورًا : أَنْ أُقْبِلَ عَلَى الْآخَرِينَ، أَنْ أَتَقَبَّلَ رَفْضَهُمْ بِصَبْرٍ، أَنْ أَفْعَلَ الْخَيْرَ فِي السِّرِّ، وَأَنْ أَشْكُرَ اللَّهَ عَلَى كُلِّ نِعْمَةٍ.',
      s9_b32: 'لَقَدْ وَجَدْتَ نُورَكَ يَا بُنَيَّ. هَلْ نُوَاصِلُ الرِّحْلَةَ؟',
      s9_b33: 'نَعَمْ ! لَكِنْ قَبْلَ ذَلِكَ، أُرِيدُ أَنْ أَنْزِلَ إِلَى الْقَرْيَةِ. هَذَا الصَّبَاحَ، عِنْدَمَا سَمِعْتُ ضَحَكَاتِ الْفِتْيَةِ كَانَ الْخَوْفُ يَخْنُقُنِي. لَكِنْ بِفَضْلِ اللَّهِ لَمْ يَعُدْ لِلْخَوْفِ سُلْطَانٌ عَلَيَّ ! سَأُقْبِلُ عَلَيْهِمْ بِابْتِسَامَةٍ وَأُشَارِكُهُمُ الْفَرَحَ.',
      s9_pont_mission: 'وَأَنْتَ يَا مَنْ بَلَغْتَ قِمَّةَ هَذَا الْفَصْلِ الْأَوَّلِ... قَهَرَ عُثْمَانُ خَوْفَهُ. جَاءَ دَوْرُكَ الْآنَ : أَقْبِلْ عَلَى أَحَدٍ فِي يَوْمِكَ، قُلْ لَهُ مِنْ قَلْبِكَ « السَّلَامُ عَلَيْكُمْ »، وَاتْرُكِ الْأُخُوَّةَ تَبْتَسِمُ بِتَلْقَائِيَّةٍ.',
      s9_b35: 'يَسْتَأْنِفُ عُثْمَانُ وَنُورَا رِحْلَتَهُمَا نَحْوَ الْأُفُقِ الْمُشْرِقِ. خَلْفَ قِمَمِ الْجِبَالِ، تَبْدَأُ أَرَاضِي الْفَصْلِ الثَّانِي فِي الظُّهُورِ تَحْتَ السَّمَاءِ الصَّافِيَةِ.',
      s9_b36: 'الطَّرِيقُ قَدْ بَدَأَ لِتَوِّهِ.',
      s9_b37: 'هَيَّا بِنَا !'
    },
    choices: {
      c_eau: { label: '💧 شُرْبُ كُوبٍ مِنَ الْمَاءِ الْعَذْبِ (أَدَبُ السُّنَّةِ)' },
      c_ordre: { label: '🧹 تَرْتِيبُ الْغُرْفَةِ وَصُنْعُ السَّرِيرِ (النِّظَامُ وَالنِّيَّةُ)' },
      c_sandales: { label: '👟 إِعْدَادُ النَّعْلَيْنِ لِلْمَسِيرِ (التَّوَكُّلُ)' },
      c_door_push: { label: '« بِسْمِ اللَّهِ ! » — ادْفَعِ الْبَابَ وَتَقَدَّمْ رَغْمَ الشَّكِّ' },
      c1: { label: '🌿 الْفَصْلُ ١ : « الْإِقْبَالُ عَلَى النَّاسِ » — اللِّقَاءُ بِالْوُدِّ وَالتَّعَارُفِ (التَّعَارُف)' },
      c_place: { label: '🏛️ النُّزُولُ إِلَى قَلْبِ الْقَرْيَةِ (السَّاحَةُ الْمَرْكَزِيَّةُ وَالْيَنْبُوعُ)' },
      c_ruelle: { label: '🧶 الدُّخُولُ فِي زُقَاقٍ مُظَلَّلٍ (الْحِرَفِيُّ الشَّابُّ)' },
      c_vergers: { label: '🧺 السَّيْرُ بِمُحَاذَاةِ جُدْرَانِ الْحِجَارَةِ نَحْوَ الْبَسَاتِينِ (الْمُزَارِعُ الْمُسِنُّ)' }
    },
    quizzes: {
      quiz_istiadhah: {
        question: 'مَاذَا يَقُولُ الْمُسْلِمُ حِينَ يَسْتَعِيذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ؟',
        options: {
          A: 'لَا شَيْءَ، فَقَطْ يَتَجَاهَلُ الْأَمْرَ.',
          B: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ.',
          C: 'عِبَارَةٌ يَخْتَرِعُهَا كُلُّ شَخْصٍ مِنْ عِنْدِهِ.',
          D: 'لَا يَجُوزُ قَوْلُهَا إِلَّا لِلْعُلَمَاءِ.'
        },
        explanation: 'الِاسْتِعَاذَةُ مَذْكُورَةٌ صَرَاحَةً فِي الْقُرْآنِ الْكَرِيمِ : حِينَ يَطْلُبُ الْمُسْلِمُ الْحِمَايَةَ أَوْ يَقْرَأُ الْقُرْآنَ، يَسْتَعِيذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ.'
      },
      quiz_doua_maison: {
        question: 'مَا هُوَ الدُّعَاءُ الَّذِي عَلَّمَنَا إِيَّاهُ النَّبِيُّ ﷺ عِنْدَ مُغَادَرَةِ الْبَيْتِ؟',
        options: {
          A: 'لَا شَيْءَ، يَكْفِي الْإِسْرَاعُ فِي الْخُرُوجِ.',
          B: '« بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ ».',
          C: 'دُعَاءٌ خَاصٌّ بِالسَّفَرِ الطَّوِيلِ فَقَطْ.',
          D: 'يُقَالُ فَقَطْ إِذَا كَانَ الْوَقْتُ لَيْلًا مُظْلِمًا.'
        },
        explanation: 'عَلَّمَنَا النَّبِيُّ ﷺ أَنَّ الْمُؤْمِنَ إِذَا خَرَجَ مِنْ بَيْتِهِ فَقَالَ هَذَا الدُّعَاءَ، يُقَالُ لَهُ : « هُدِيتَ وَكُفِيتَ وَوُقِيتَ ».'
      },
      quiz_taaruf: {
        question: 'لِمَاذَا جَعَلَ اللَّهُ النَّاسَ شُعُوبًا وَقَبَائِلَ فِي سُورَةِ الْحُجُرَاتِ؟',
        options: {
          A: 'لِيَتَبَاهَوْا بِالْأَنْسَابِ وَيَتَفَاخَرُوا.',
          B: 'لِيَتَعَارَفُوا وَيَتَآلَفُوا عَلَى الْبِرِّ وَالتَّقْوَى.',
          C: 'لِيَعِيشَ كُلُّ فَرْدٍ بِمَعْزِلٍ فِي رُكْنِهِ.',
          D: 'لِيَتَنَازَعُوا أَيُّهُمْ أَقْوَى وَأَعْلَى شَأْنًا.'
        },
        explanation: 'تُبَيِّنُ الْآيَةُ الْكَرِيمَةُ (الحجرات : ١٣) أَنَّ اللَّهَ خَلَقَ النَّاسَ شُعُوبًا وَقَبَائِلَ « لِتَعَارَفُوا ».'
      },
      quiz_adab_boire: {
        question: 'مَا هُوَ الْأَدَبُ النَّبَوِيُّ الْكَرِيمُ الَّذِي عَلَّمَنَا إِيَّاهُ النَّبِيُّ ﷺ عِنْدَ شُرْبِ الْمَاءِ؟',
        options: {
          A: 'الشُّرْبُ وَاقِفًا جَرْعَةً وَاحِدَةً دُونَ تَنَفُّسٍ.',
          B: 'الشُّرْبُ بِالْيَدِ الْيُسْرَى مَعَ الْمَشْيِ السَّرِيعِ.',
          C: 'الْجُلُوسُ، وَالتَّسْمِيَةُ، وَالشُّرْبُ بِالْيَدِ الْيُمْنَى عَلَى ثَلَاثِ دَفَعَاتٍ، وَحَمْدُ اللَّهِ.',
          D: 'النَّفْخُ مَرَّاتٍ عَدِيدَةً دَاخِلَ الْإِنَاءِ.'
        },
        explanation: 'عَلَّمَنَا النَّبِيُّ ﷺ أَنْ نَشْرَبَ جُلُوسًا، بِالْيَدِ الْيُمْنَى، مُسَمِّينَ اللَّهَ، وَأَنْ نَتَنَفَّسَ خَارِجَ الْإِنَاءِ ثَلَاثًا.'
      },
      quiz_adab: {
        question: 'مَاذَا يَفْعَلُ الْمُؤْمِنُ حِينَ لَا يَجِدُ كَلَامًا طَيِّبًا نَافِعًا يَقُولُهُ؟',
        options: {
          A: 'يَتَكَلَّمُ بِأَيِّ شَيْءٍ لِيَلْفِتَ الِانْتِبَاهَ.',
          B: 'يَرُدُّ بِنَفْسِ النَّبْرَةِ الْغَلِيظَةِ.',
          C: 'يَلْزَمُ الصَّمْتَ وَيَحْفَظُ لِسَانَهُ.',
          D: 'يَسْخَرُ مِنَ الْمَوْقِفِ.'
        },
        explanation: 'عَلَّمَنَا النَّبِيُّ ﷺ : « مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ ».'
      },
      quiz_sabr: {
        question: 'أَيُّ هَذِهِ التَّصَرُّفَاتِ يُعَبِّرُ عَنِ الصَّبْرِ الْجَمِيلِ عِنْدَ مُوَاجَهَةِ الرَّفْضِ أَوْ الصُّعُوبَةِ؟',
        options: {
          A: 'الْإِلْحَاحُ بِغَضَبٍ حَتَّى يَرْضَخَ الطَّرَفُ الْآخَرُ.',
          B: 'الثَّبَاتُ بِوَقَارٍ وَمُوَاصَلَةُ السَّعْيِ دُونَ جَزَعٍ أَوْ ضَغِينَةٍ.',
          C: 'الِاسْتِسْلَامُ الْفَوْرِيُّ مَعَ الشُّعُورِ بِالْمَرَارَةِ.',
          D: 'التَّظَاهُرُ بِعَدَمِ التَّأَثُّرِ مَعَ إِضْمَارِ الْغَيْظِ.'
        },
        explanation: 'الصَّبْرُ طَاقَةٌ إِيمَانِيَّةٌ شُجَاعَةٌ : نَتَقَبَّلُ الْمَوَاقِفَ بِرِضًا، دُونَ أَنْ نَفْقِدَ أَدَبَنَا.'
      },
      quiz_niyyah: {
        question: 'مَا الَّذِي يَمْنَحُ الْعَمَلَ الصَّالِحَ قِيمَتَهُ الْحَقِيقِيَّةَ عِنْدَ اللَّهِ تَعَالَى؟',
        options: {
          A: 'تَصْفِيقُ النَّاسِ وَثَنَاؤُهُمْ.',
          B: 'مَظْهَرُ الْعَمَلِ الْخَارِجِيُّ فَقَطْ.',
          C: 'إِخْلَاصُ النِّيَّةِ لِلَّهِ وَحْدَهُ دُونَ رِيَاءٍ.',
          D: 'الْحُصُولُ عَلَى مُقَابِلٍ مَادِّيٍّ سَرِيعٍ.'
        },
        explanation: 'يُقَرِّرُ الْحَدِيثُ الشَّرِيفُ : « إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ ». لَا يُقْبَلُ الْعَمَلُ إِلَّا إِذَا كَانَ خَالِصًا لِوَجْهِ اللَّهِ.'
      },
      quiz_shukr: {
        question: 'مَاذَا نُسَمِّي اعْتِرَافَ الْقَلْبِ بِنِعَمِ اللَّهِ وَالثَّنَاءَ عَلَيْهِ بِهَا؟',
        options: {
          A: 'الصَّبْرَ.',
          B: 'الْأَدَبَ.',
          C: 'الشُّكْرَ.',
          D: 'النِّيَّةَ.'
        },
        explanation: 'الشُّكْرُ هُوَ رُؤْيَةُ الْمُنْعِمِ فِي كُلِّ نِعْمَةٍ وَحَمْدُهُ سُبْحَانَهُ.'
      },
      quiz_ilm: {
        question: 'كُلُّ مَا تَعَلَّمْتَهُ الْيَوْمَ... مَا الَّذِي جَعَلَكَ تَتَقَدَّمُ حَقًّا فِي هَذِهِ الرِّحْلَةِ؟',
        options: {
          A: 'مُجَرَّدُ الْحَظِّ وَالصُّدْفَةِ.',
          B: 'جَمْعُ نِقَاطِ الْخِبْرَةِ فَقَطْ.',
          C: 'الْعِلْمُ النَّافِعُ، وَصِدْقُ السَّعْيِ، وَالْمُبَادَرَةُ بِالْعَمَلِ فِي الْوَاقِعِ.',
          D: 'الْإِصْرَارُ عَلَى أَنَّنِي دَائِمًا عَلَى حَقٍّ.'
        },
        explanation: 'لَا يَكْفِي الْعِلْمُ إِذَا بَقِيَ مُجَرَّدَ كَلِمَاتٍ، بَلْ يَحْيَا حِينَ يَقْتَرِنُ بِبَذْلِ الْجُهْدِ الصَّادِقِ وَيَتَجَسَّدُ فِي فِعْلِ الْخَيْرِ.'
      }
    },
    realActions: {
      action_lit: {
        title: 'تَرْتِيبُ السَّرِيرِ',
        instruction: 'خُذْ دَقِيقَةً وَاحِدَةً فِي عَالَمِكَ الْوَاقِعِيِّ لِتَرْتِيبِ سَرِيرِكَ أَوْ رُكْنِ غُرْفَتِكَ.',
        subtext: 'عَادَةٌ يَوْمِيَّةٌ بَسِيطَةٌ تَبْعَثُ فِي النَّفْسِ النِّظَامَ وَصَفَاءَ الذِّهْنِ لِبِدَايَةِ يَوْمٍ مُبَارَكٍ.',
        reflectionPrompt: 'هَلْ رَتَّبْتَ سَرِيرَكَ صَبَاحَ الْيَوْمِ أَمْ سَتَقُومُ بِذَلِكَ الْآنَ؟'
      },
      action_eau: {
        title: 'شُرْبُ الْمَاءِ (الْأَدَبُ النَّبَوِيُّ)',
        instruction: 'أَحْضِرْ كُوبَ مَاءٍ فِي الْوَاقِعِ. اجْلِسْ، أَمْسِكِ الْكُوبَ بِيَدِكَ الْيُمْنَى، قُلْ « بِسْمِ اللَّهِ » وَاشْرَبْ بِهُدُوءٍ عَلَى ثَلَاثِ دَفَعَاتٍ، ثُمَّ اخْتِمْ بِـ « الْحَمْدُ لِلَّهِ ».',
        subtext: 'سُنَّةٌ يَوْمِيَّةٌ تُعَلِّمُنَا السَّكِينَةَ، وَحُضُورَ الْقَلْبِ، وَالشُّكْرَ عَلَى نِعَمِ اللَّهِ.',
        reflectionPrompt: 'هَلْ تَذَكَّرْتَ أَنْ تَجْلِسَ وَتُسَمِّيَ اللَّهَ قَبْلَ شُرْبِ الْمَاءِ؟'
      },
      action_depart: {
        title: 'دُعَاءُ الْخُرُوجِ وَإِعْدَادُ الْحَقِيبَةِ مَعَ التَّوَكُّلِ',
        instruction: 'تَأَكَّدْ مِنْ تَرْتِيبِ حَقِيبَتِكَ أَوْ أَغْرَاضِكَ فِي الْوَاقِعِ. ثُمَّ اقْرَأْ دُعَاءَ الْخُرُوجِ مُتَوَكِّلًا عَلَى اللَّهِ : « بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ ».',
        subtext: 'الْمُؤْمِنُ يَأْخُذُ بِالْأَسْبَابِ الْمَادِّيَّةِ وَيُفَوِّضُ أَمْرَهُ كُلَّهُ إِلَى الْخَالِقِ بِطُمَأْنِينَةٍ.',
        reflectionPrompt: 'هَلْ تَعَوَّدْتَ أَنْ تَسْتَوْدِعَ خُطُوَاتِكَ عِنْدَ اللَّهِ قَبْلَ مُغَادَرَةِ بَيْتِكَ؟'
      },
      action_istiadhah: {
        title: 'تَرْدِيدُ الِاسْتِعَاذَةِ وَالْمُضِيُّ قُدُمًا',
        instruction: 'خُذْ نَفَسًا هَادِئًا فِي وَاقِعِكَ. رَدِّدْ بِصَوْتٍ وَاضِحٍ : « أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ » لِتَلْجَأَ إِلَى حِمَى اللَّهِ، ثُمَّ اعْزِمْ عَلَى التَّقَدُّمِ رَغْمَ التَّرَدُّدِ.',
        subtext: 'اللُّجُوءُ الصَّادِقُ لِلَّهِ يَشْرَحُ الصَّدْرَ وَيَكْسِرُ حِبَالَ التَّثْبِيطِ وَالْخَوْفِ.',
        reflectionPrompt: 'هَلْ تَسْتَحْضِرُ الِاسْتِعَاذَةَ بِاللَّهِ كُلَّمَا حَاوَلَتِ الْوَسَاوِسُ تَعْطِيلَ سَعْيِكَ؟'
      },
      action_salam_village: {
        title: 'إِفْشَاءُ السَّلَامِ وَالِابْتِسَامَةُ الْأَخَوِيَّةُ',
        instruction: 'الْيَوْمَ فِي عَالَمِكَ الْوَاقِعِيِّ : قَدِّمْ سَلَامًا صَادِقًا أَوْ ابْتِسَامَةً طَيِّبَةً لِأَحَدِهِمْ. فَقَدْ عَلَّمَنَا النَّبِيُّ ﷺ أَنَّ « تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ ».',
        subtext: 'الْإِحْسَانُ يُبَدِّدُ الْجَفَاءَ وَيَفْتَحُ الْقُلُوبَ الْمُغْلَقَةَ.',
        reflectionPrompt: 'هَلْ أَهْدَيْتَ ابْتِسَامَةً أَوْ كَلِمَةَ طُمَأْنِينَةٍ لِأَحَدٍ الْيَوْمَ؟'
      },
      action_sabr_refus: {
        title: 'الصَّبْرُ عِنْدَ مُوَاجَهَةِ الرَّفْضِ',
        instruction: 'تَذَكَّرْ مَوْقِفًا لَمْ يَسِرْ كَمَا كُنْتَ تَتَمَنَّى. خُذْ نَفَسًا عَمِيقًا وَقُلْ بِقَلْبِكَ : « الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ » دُونَ سَخَطٍ أَوْ مَرَارَةٍ.',
        subtext: 'الصَّبْرُ قُوَّةُ نَفْسٍ وَعِزَّةٌ : نَسْتَقْبِلُ قَدَرَ اللَّهِ بِأَدَبٍ وَنَمْضِي فِي طَرِيقِنَا بِكَرَامَةٍ.',
        reflectionPrompt: 'هَلْ وَفِّقْتَ فِي تَقَبُّلِ « الرَّفْضِ » أَوْ التَّعَثُّرِ بِرِبَاطَةِ جَأْشٍ وَنُبْلٍ؟'
      },
      action_parler: {
        title: 'الْمُبَادَرَةُ بِالْحَدِيثِ الطَّيِّبِ',
        instruction: 'الْيَوْمَ فِي وَاقِعِكَ : تَحَدَّثْ بِكَلِمَةٍ طَيِّبَةٍ مَعَ شَخْصٍ لَا تَتَحَدَّثُ مَعَهُ عَادَةً.',
        subtext: 'تَحِيَّةٌ مُحْتَرَمَةٌ أَوْ سُؤَالٌ طَيِّبٌ كَافٍ لِبِنَاءِ جُسُورِ التَّعَارُفِ الْأَخَوِيِّ.',
        reflectionPrompt: 'هَلْ أَنْتَ مُسْتَعِدٌّ لِبَدْءِ تَحِيَّةٍ طَيِّبَةٍ الْيَوْمَ؟'
      },
      action_geste: {
        title: 'عَمَلٌ صَالِحٌ فِي الْخَفَاءِ (إِخْلَاصُ النِّيَّةِ)',
        instruction: 'الْيَوْمَ : قُمْ بِعَمَلِ خَيْرٍ خَفِيٍّ دُونَ أَنْ يَرَاكَ أَحَدٌ وَدُونَ أَنْ تَطْلُبَ ثَنَاءً (إِمَاطَةُ أَذًى، تَرْتِيبُ مَكَانٍ، أَوْ قَضَاءُ حَاجَةٍ لِأَحَدٍ فِي السِّرِّ).',
        subtext: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ. عَمَلُ السِّرِّ يَحْمِي الْقَلْبَ مِنْ آفَةِ الرِّيَاءِ وَالْعُجْبِ.',
        reflectionPrompt: 'هَلْ قُمْتَ يَوْمًا بِعَمَلٍ صَالِحٍ لَا يَعْلَمُهُ إِلَّا اللَّهُ وَحْدَهُ؟'
      },
      action_shukr: {
        title: 'الشُّكْرُ وَالْعِنَايَةُ بِالْخَلْقِ',
        instruction: 'خُذْ دَقِيقَةً فِي وَاقِعِكَ : ١. اسْتَحْضِرْ ٣ نِعَمٍ جَلِيلَةٍ أَنْعَمَ اللَّهُ بِهَا عَلَيْكَ (الصِّحَّةُ، الْأَهْلُ، الْمَاءُ الْعَذْبُ) وَقُلْ مِنْ قَلْبِكَ « الْحَمْدُ لِلَّهِ ». ٢. اسْقِ نَبْتَةً أَوْ اعْتَنِ بِكَائِنٍ حَيٍّ حَوْلَكَ.',
        subtext: 'الشُّكْرُ يَزِيدُ النِّعَمَ (إبراهيم : ٧). وَالرِّفْقُ بِالْخَلْقِ مِنْ أَعْظَمِ أَبْوَابِ الْإِحْسَانِ.',
        reflectionPrompt: 'مَا هِيَ النِّعَمُ الثَّلَاثُ الَّتِي تَشْعُرُ بِالِامْتِنَانِ الشَّدِيدِ لِلَّهِ عَلَيْهَا الْيَوْمَ؟'
      },
      action_mission_jour: {
        title: 'مُهِمَّةُ الْيَوْمِ : السَّلَامُ عَلَيْكُمْ',
        instruction: 'تَوَجَّهْ إِلَى شَخْصٍ فِي يَوْمِكَ. قُلْ لَهُ بِصِدْقٍ : « السَّلَامُ عَلَيْكُمْ ». وَاتْرُكِ اللِّقَاءَ يَسِيرُ بِتَلْقَائِيَّةٍ وَأُلْفَةٍ.',
        subtext: 'خَيْرُهُمَا الَّذِي يَبْدَأُ بِالسَّلَامِ (صحيح البخاري ٦٢٣٧).',
        reflectionPrompt: 'السَّلَامُ النَّابِعُ مِنَ الْقَلْبِ يَفْتَحُ أَبْوَابَ الْأُخُوَّةِ الصَّادِقَةِ.'
      }
    },
    climaxSteps: {
      step_istiadhah: {
        title: '١. ذِكْرُ اللَّهِ وَطَلَبُ الْحِمَايَةِ',
        meaning: 'أَلْجَأُ إِلَى حِمَى اللَّهِ تَعَالَى مِنْ كُلِّ شَكٍّ وَتَثْبِيطٍ.',
        description: 'عِنْدَ اشْتِدَادِ الشُّكُوكِ، تُعِيدُ الِاسْتِعَاذَةُ سَكِينَةَ الْقَلْبِ وَتَصْرِفُ مَخَاوِفَ النَّفْسِ.'
      },
      step_ilm: {
        title: '٢. اسْتِحْضَارُ الْعِلْمِ وَالْفَهْمِ النَّافِعِ',
        meaning: 'تَذَكُّرُ الْأُصُولِ الثَّابِتَةِ وَالْعِبَرِ الَّتِي تَعَلَّمَهَا فِي طَرِيقِهِ.',
        description: 'الْعِلْمُ الصَّحِيحُ يُنِيرُ الْعَقْلَ وَيَمْنَعُ الْأَوْهَامَ مِنْ أَنْ تَسْتَقِرَّ فِي الْفُؤَادِ.'
      },
      step_sabr: {
        title: '٣. الصَّبْرُ وَتَقَبُّلُ الصِّعَابِ',
        meaning: 'اسْتِقْبَالُ الشَّدَائِدِ بِلَا جَزَعٍ وَلَا غَضَبٍ وَلَا اسْتِسْلَامٍ.',
        description: 'الصُّعُوبَاتُ جُزْءٌ مِنْ طَرِيقِ التَّعَلُّمِ، وَالصَّبْرُ هُوَ مِفْتَاحُ الْفَرَجِ وَالثَّبَاتِ.'
      },
      step_adab: {
        title: '٤. لُزُومُ الْأَدَبِ وَحُسْنِ الْخُلُقِ',
        meaning: 'الْمُحَافَظَةُ عَلَى اللِّينِ وَالْكَلِمَةِ الطَّيِّبَةِ وَسَلَامَةِ الصَّدْرِ.',
        description: 'عَدَمُ مُقَابَلَةِ الْإِسَاءَةِ بِالْغِلْظَةِ أَوِ الْعُجْبِ، بَلْ بِالْحِلْمِ وَالْوَقَارِ.'
      },
      step_effort: {
        title: '٥. بَذْلُ الْجُهْدِ وَالْأَخْذُ بِالْأَسْبَابِ',
        meaning: 'السَّعْيُ بِكُلِّ طَاقَةٍ دُونَ ادِّعَاءِ الْعَجْزِ وَالْكَسَلِ.',
        description: 'يُبَارِكُ اللَّهُ فِي سَعْيِ مَنْ يَحْرِصُ عَلَى مَا يَنْفَعُهُ وَيَسْتَعِينُ بِهِ سُبْحَانَهُ.'
      },
      step_action: {
        title: '٦. الْمُضِيُّ فِي طَرِيقِ الْخَيْرِ',
        meaning: 'الْإِقْدَامُ وَمُوَاصَلَةُ السَّيْرِ بِثِقَةٍ رَغْمَ غُمُوضِ الطَّرِيقِ.',
        description: 'يَتَبَدَّدُ الْوَسْوَاسُ تَمَامًا حِينَ يَنْشَغِلُ الْإِنْسَانُ بِالْعَمَلِ الصَّالِحِ الْمُثْمِرِ.'
      }
    }
  }
};
