import { Shield, HeartHandshake, Compass, BookOpen, Sparkles, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function GameplayMechanics() {
  const { t } = useLanguage();

  const mechanics = [
    {
      id: "waswas",
      badge: t.mechanics.mech2Title,
      title: t.mechanics.mech2Title,
      icon: Shield,
      color: "purple",
      bgImage: "/game-assets/waswas_bg.jpg",
      quote: "« Ce n'est pas une formule magique, Othmân. Tu as cherché refuge auprès d'Allah avec ton cœur. Maintenant, ancre cette parole et avance d'un pas ferme. » — Noura",
      description: t.mechanics.mech2Desc,
      points: [
        "Jauge dynamique de Sérénité face aux assauts du doute",
        "Désamorçage des pensées intrusives",
        "Victoires par l'Istiʿādhah et l'action concrète"
      ]
    },
    {
      id: "ponts",
      badge: t.mechanics.mech3Title,
      title: t.mechanics.mech1Title,
      icon: HeartHandshake,
      color: "emerald",
      bgImage: "/game-assets/chambre.jpg",
      quote: "« As-tu pensé à ordonner ton lit ou ton coin ce matin ? Prends une minute dans le monde réel... le jeu t'attend ici ! »",
      description: t.mechanics.mech1Desc,
      points: [
        "Passerelles bienveillantes entre l'histoire virtuelle et le quotidien",
        "Développement de la responsabilité personnelle dès le réveil",
        "Valorisation de l'aide désintéressée"
      ]
    },
    {
      id: "carrefour",
      badge: t.mechanics.mech4Title,
      title: t.mechanics.mech4Title,
      icon: Compass,
      color: "amber",
      bgImage: "/game-assets/carrefour.jpg",
      quote: "« Le chemin ne commence pas sous tes semelles, il commence dans ton cœur. Quand l'intention est sincère, chaque pas trouve son sens. » — Noura",
      description: t.mechanics.mech4Desc,
      points: [
        "Des choix clairs pour guider Othmân vers le chapitre suivant",
        "Aucun game-over punitif : apprentissage bienveillant",
        "Une progression accessible à travers 5 grands chapitres"
      ]
    },
    {
      id: "savoir",
      badge: t.wisdomBook.badge,
      title: t.wisdomBook.title,
      icon: BookOpen,
      color: "sky",
      bgImage: "/game-assets/verger.jpg",
      quote: "« En haut à droite, le Livre du Savoir rassemble les fiches d'éthique et de hadiths que tu débloques en avançant. »",
      description: t.wisdomBook.subtitle,
      points: [
        t.wisdomBook.verseRef,
        t.wisdomBook.hadithRef,
        t.wisdomBook.valueTitle
      ]
    }
  ];

  return (
    <section id="mecaniques" className="py-24 bg-[#0a090f] relative overflow-hidden">
      
      {/* Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            {t.mechanics.badge}
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.mechanics.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {t.mechanics.subtitle}
          </p>
        </div>

        {/* 4 Mechanics Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mechanics.map((mech) => {
            const Icon = mech.icon;
            return (
              <div
                key={mech.id}
                className="relative rounded-2xl bg-[#12101b] border border-amber-500/20 overflow-hidden group hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Visual Backdrop Header */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={mech.bgImage}
                    alt={mech.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12101b] via-[#12101b]/40 to-transparent" />
                  
                  {/* Badge & Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#0a0910]/80 backdrop-blur-md border border-amber-500/30 text-amber-200 text-xs font-medium font-cinzel">
                      {mech.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 backdrop-blur-md flex items-center justify-center text-amber-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-100">
                      {mech.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-sm text-stone-300 leading-relaxed font-sans">
                      {mech.description}
                    </p>

                    {/* Feature Points */}
                    <div className="space-y-2 pt-2">
                      {mech.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                          <div className="w-4 h-4 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-amber-400" />
                          </div>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Poetic quote strip */}
                  <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs italic text-amber-200/90 font-serif">
                    {mech.quote}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
