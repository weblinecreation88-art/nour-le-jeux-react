import React, { useState } from 'react';
import { CustomAssetsConfig, saveCustomAssets, DEFAULT_ASSETS } from '../utils/assets';
import {
  Image as ImageIcon,
  Upload,
  X,
  Trash2,
  Check,
  User,
  Sparkles,
  Layers,
  FolderOpen,
  Info
} from 'lucide-react';
import { soundManager } from '../utils/audio';

interface AssetManagerModalProps {
  customAssets: CustomAssetsConfig;
  onUpdateAssets: (newAssets: CustomAssetsConfig) => void;
  onClose: () => void;
}

export const AssetManagerModal: React.FC<AssetManagerModalProps> = ({
  customAssets,
  onUpdateAssets,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'characters' | 'backgrounds'>('characters');
  const [assets, setAssets] = useState<CustomAssetsConfig>(customAssets);

  const characterKeys: Array<{ key: keyof CustomAssetsConfig['characters']; label: string; desc: string }> = [
    { key: 'personnage', label: 'Personnage Principal', desc: 'Avatar du héros dans les dialogues' },
    { key: 'noura', label: 'Noura (Guide & Compagne)', desc: 'Sprite officiel du personnage de Noura' },
    { key: 'waswas', label: 'Waswas (Pensée sombre)', desc: 'Avatar de l’épreuve intérieure' },
    { key: 'grand_waswas', label: 'Grand Waswas (Climax)', desc: 'Avatar du climax de la scène 9' },
    { key: 'jeune', label: 'Jeune Villageois', desc: 'Avatar de l’habitant du village' }
  ];

  const backgroundKeys: Array<{ key: keyof CustomAssetsConfig['backgrounds']; label: string; desc: string }> = [
    { key: 'chambre', label: 'Scène 1 — La Chambre', desc: 'Réveil et lit au matin' },
    { key: 'carrefour', label: 'Scène 2 — Le Poteau aux Chemins', desc: 'Carrefour et poteau indicateur' },
    { key: 'waswas', label: 'Scène 3 — Le Premier Waswas', desc: 'Atmosphère brumeuse de doute' },
    { key: 'vallee', label: 'Scène 4 — « Je ne veux plus être seul »', desc: 'Abords du village et chemin fleuri' },
    { key: 'village', label: 'Scène 5 — Le Village', desc: 'Place centrale, fontaine en pierre et maisons traditionnelles' },
    { key: 'refus', label: 'Scène 6 — Le Refus', desc: 'Ruelle ombragée du village' },
    { key: 'geste', label: 'Scène 7 — Le Geste', desc: 'Route bordée d’oliviers' },
    { key: 'jardin', label: 'Scène 8 — Le Jardin Abandonné', desc: 'Jardin secret aux fruits bienfaisants' },
    { key: 'climax', label: 'Scène 9 — Le Grand Waswas (Climax)', desc: 'Paysage montagnard et brume mystique' },
    { key: 'fin', label: 'Écran de Fin — Aube et Nouveau Départ', desc: 'Illustration triomphale de fin du Chapitre 1' }
  ];

  const handleFileUpload = (
    type: 'characters' | 'backgrounds',
    key: string,
    file: File
  ) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        const updated = {
          ...assets,
          [type]: {
            ...assets[type],
            [key]: dataUrl
          }
        };
        setAssets(updated);
        saveCustomAssets(updated);
        onUpdateAssets(updated);
        soundManager.playSelect();
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAsset = (
    type: 'characters' | 'backgrounds',
    key: string
  ) => {
    const updated = {
      ...assets,
      [type]: {
        ...assets[type],
        [key]: ''
      }
    };
    setAssets(updated);
    saveCustomAssets(updated);
    onUpdateAssets(updated);
    soundManager.playSelect();
  };

  const handleResetAll = () => {
    if (confirm('Voulez-vous réinitialiser tous les visuels aux illustrations originales ?')) {
      const initial: CustomAssetsConfig = { ...DEFAULT_ASSETS };
      setAssets(initial);
      saveCustomAssets(initial);
      onUpdateAssets(initial);
      soundManager.playSelect();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#181524] border-2 border-amber-500/50 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-800 bg-[#1f1b2e]/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-cinzel">
                Personnalisation Graphique
              </span>
              <h2 className="text-base sm:text-xl font-bold text-zinc-100 font-cinzel">
                Intégrer vos Assets Visuels Personnalisés
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playSelect();
              onClose();
            }}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative Guidance Banner */}
        <div className="p-3 sm:px-5 bg-[#231e33] border-b border-zinc-800 flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-200">Sources locales détectées : </span>
            Vous pouvez charger directement les fichiers images (PNG, JPG, WebP) de votre dossier local{' '}
            <code className="px-1.5 py-0.5 bg-zinc-900 border border-zinc-700 rounded text-[11px] text-amber-300 font-mono">
              C:\MES PROJETS\NOUR LE JEUX\sources
            </code>
            . Ils s'afficheront instantanément dans le jeu et sont enregistrés dans votre navigateur.
          </div>
        </div>

        {/* Tab Selector */}
        <div className="px-4 py-2 bg-[#1b1728] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('characters')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'characters'
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-md'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Avatars Personnages ({characterKeys.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('backgrounds')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'backgrounds'
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-md'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Décors & Arrière-plans ({backgroundKeys.length})</span>
            </button>
          </div>

          <button
            onClick={handleResetAll}
            className="text-[11px] text-zinc-400 hover:text-red-300 flex items-center gap-1 cursor-pointer transition-colors px-2 py-1"
          >
            <Trash2 className="w-3 h-3" />
            <span>Tout réinitialiser</span>
          </button>
        </div>

        {/* Items Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activeTab === 'characters' &&
            characterKeys.map(({ key, label, desc }) => {
              const currentImg = assets.characters[key];

              return (
                <div
                  key={key}
                  className="bg-[#201c2f] border border-zinc-800/80 rounded-2xl p-3.5 flex flex-col justify-between gap-3 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    {/* Thumbnail Preview */}
                    <div className="w-16 h-16 rounded-xl bg-zinc-950/80 border-2 border-zinc-700 overflow-hidden flex items-center justify-center shrink-0 relative">
                      {currentImg ? (
                        <img
                          src={currentImg}
                          alt={label}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span className="text-[10px] text-zinc-500 text-center font-mono">Défaut</span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-zinc-100 font-cinzel truncate">{label}</h4>
                        {currentImg && (
                          <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40 flex items-center gap-0.5">
                            <Check className="w-2.5 h-2.5" /> Personnalisé
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5">{desc}</p>
                    </div>
                  </div>

                  {/* Upload Controls */}
                  <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
                    <label className="flex-1 py-1.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors">
                      <Upload className="w-3.5 h-3.5" />
                      <span>{currentImg ? 'Remplacer l’image' : 'Importer image'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload('characters', key, file);
                        }}
                      />
                    </label>

                    {currentImg && (
                      <button
                        onClick={() => handleRemoveAsset('characters', key)}
                        title="Revenir au visuel par défaut"
                        className="p-1.5 rounded-xl bg-zinc-800 hover:bg-red-950/40 text-zinc-400 hover:text-red-300 border border-zinc-700 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

          {activeTab === 'backgrounds' &&
            backgroundKeys.map(({ key, label, desc }) => {
              const currentImg = assets.backgrounds[key];

              return (
                <div
                  key={key}
                  className="bg-[#201c2f] border border-zinc-800/80 rounded-2xl p-3.5 flex flex-col justify-between gap-3 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    {/* Thumbnail Preview */}
                    <div className="w-24 h-16 rounded-xl bg-zinc-950/80 border-2 border-zinc-700 overflow-hidden flex items-center justify-center shrink-0 relative">
                      {currentImg ? (
                        <img
                          src={currentImg}
                          alt={label}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span className="text-[10px] text-zinc-500 text-center font-mono">Défaut</span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-zinc-100 font-cinzel truncate">{label}</h4>
                        {currentImg && (
                          <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40 flex items-center gap-0.5">
                            <Check className="w-2.5 h-2.5" /> Personnalisé
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5">{desc}</p>
                    </div>
                  </div>

                  {/* Upload Controls */}
                  <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
                    <label className="flex-1 py-1.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors">
                      <Upload className="w-3.5 h-3.5" />
                      <span>{currentImg ? 'Remplacer le décor' : 'Importer arrière-plan'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload('backgrounds', key, file);
                        }}
                      />
                    </label>

                    {currentImg && (
                      <button
                        onClick={() => handleRemoveAsset('backgrounds', key)}
                        title="Revenir au décor par défaut"
                        className="p-1.5 rounded-xl bg-zinc-800 hover:bg-red-950/40 text-zinc-400 hover:text-red-300 border border-zinc-700 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Footer */}
        <div className="p-3 sm:px-6 bg-[#1f1b2e] border-t border-zinc-800 flex items-center justify-between">
          <span className="text-[11px] text-zinc-400">
            Les images sont sauvegardées localement dans votre profil de jeu.
          </span>

          <button
            onClick={() => {
              soundManager.playSelect();
              onClose();
            }}
            className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs rounded-xl transition-all cursor-pointer font-cinzel"
          >
            Fermer et Appliquer
          </button>
        </div>
      </div>
    </div>
  );
};
