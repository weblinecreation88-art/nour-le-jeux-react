import { useState } from 'react';
import { Play, Share2, MessageCircle, Copy, Check, Heart, Compass, Sparkles, Download, Smartphone } from 'lucide-react';
import { GAME_URL, APK_DOWNLOAD_URL } from '../../data/gameData';
import { useLanguage } from '../../context/LanguageContext';

interface FooterProps {
  onOpenGame: () => void;
}

export default function Footer({ onOpenGame }: FooterProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsapp = () => {
    const text = encodeURIComponent(
      "Découvre NOUR, un super jeu de rôle RPG narratif et bienveillant gratuit sur navigateur : rejoins la quête d'Othmân ! https://playnour.online/"
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <footer className="relative bg-[#07060b] border-t border-amber-500/20 pt-20 pb-12 overflow-hidden text-stone-300">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Giant Pre-Footer Call to Action Box */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#191526] via-[#120f1d] to-[#0d0a15] border-2 border-amber-500/40 p-8 sm:p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.8)] mb-20 overflow-hidden">
          
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              NOUR RPG
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-amber-100">
              {t.hero.titleLine1} — {t.hero.titleLine2}
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-sans">
              {t.footer.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 flex-wrap">
              <button
                id="btn-footer-launch"
                onClick={onOpenGame}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-stone-950 font-cinzel font-extrabold text-sm sm:text-base tracking-wider shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5 fill-stone-950" />
                <span>{t.footer.playGame}</span>
              </button>

              <a
                id="btn-footer-apk"
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-800/90 hover:bg-emerald-700 border border-emerald-400/50 text-emerald-100 font-cinzel font-bold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4 text-emerald-300" />
                <span>{t.footer.downloadApk}</span>
              </a>

              <button
                onClick={handleShareWhatsapp}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-amber-500/30 text-amber-200 font-cinzel font-semibold text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Partager sur WhatsApp</span>
              </button>
            </div>

            <div className="pt-2 flex items-center justify-center gap-4 text-xs text-stone-400">
              <button
                onClick={handleCopyLink}
                className="hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Lien copié dans le presse-papier !</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copier le lien de la page</span>
                  </>
                )}
              </button>
              <span>•</span>
              <a
                href={GAME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 underline"
              >
                playnour.online ↗
              </a>
            </div>

          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-amber-500/10">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-amber-400/40 bg-gradient-to-br from-amber-500/20 to-purple-900/40 flex items-center justify-center">
                <span className="font-amiri text-2xl font-bold text-amber-300">
                  نور
                </span>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider text-amber-100 block">
                  NOUR
                </span>
                <span className="text-[11px] text-amber-300/60 font-sans">
                  Jeu de Rôle Initiatique & Bienveillant
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              NOUR est une œuvre indépendante dédiée à l'apprentissage émotionnel, 
              à la lutte contre les pensées négatives et à l'ancrage des valeurs éthiques 
              universelles à travers le jeu vidéo.
            </p>

            <div className="text-xs text-stone-400 flex items-center gap-1">
              <span>Fait avec bienveillance & passion</span>
              <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 mx-1" />
              <span>pour tous les âges.</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <span className="font-cinzel font-bold text-sm text-amber-200 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-amber-300 transition-colors">Accueil</a></li>
              <li><a href="#demo" className="hover:text-amber-300 transition-colors">Démo du Waswâs</a></li>
              <li><a href="#personnages" className="hover:text-amber-300 transition-colors">Personnages</a></li>
              <li><a href="#mecaniques" className="hover:text-amber-300 transition-colors">Mécaniques de Jeu</a></li>
              <li><a href="#chapitres" className="hover:text-amber-300 transition-colors">Les 5 Chapitres</a></li>
              <li><a href="#savoir" className="hover:text-amber-300 transition-colors">Le Livre du Savoir</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Info */}
          <div className="space-y-3">
            <span className="font-cinzel font-bold text-sm text-amber-200 block">
              Informations
            </span>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Classification : PEGI 3+ (Tout public)</li>
              <li>Format : Web App (PWA) & APK Android</li>
              <li>
                <a 
                  href={APK_DOWNLOAD_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:text-emerald-300 underline font-medium inline-flex items-center gap-1"
                >
                  <Smartphone className="w-3 h-3" />
                  <span>Télécharger l'APK Android (Drive) ↗</span>
                </a>
              </li>
              <li>Langues : Français (avec calligraphies arabes)</li>
              <li>Support : Navigateurs PC, Mac, iOS, Android</li>
              <li>Serveur : Hébergé sur Firebase Hosting</li>
            </ul>
          </div>

        </div>

        {/* Sub-Footer Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} NOUR — Le chemin commence. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href={GAME_URL} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
              Jouer sur playnour.online
            </a>
            <a href="/privacy.html" className="hover:text-amber-300 transition-colors">
              Confidentialité
            </a>
            <a href="#faq" className="hover:text-amber-300 transition-colors">
              F.A.Q.
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
