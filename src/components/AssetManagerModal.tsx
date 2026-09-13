import React, { useState } from 'react';
import { CustomAssetsConfig, saveCustomAssets, DEFAULT_ASSETS } from '../utils/assets';
import {
  Image as ImageIcon,
  Upload,
  X,
  Trash2,
  Check,
  User,
  Layers,
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
    { key: 'personnage', label: 'Personnage Principal (Othmân)', desc: 'Avatar du héros dans les dialogues' },
    { key: 'noura', label: 'Noura (Guide & Compagne)', desc: 'Sprite officiel du personnage de Noura' },
    { key: 'narrateur', label: 'Le Narrateur (Vieux Sage)', desc: 'Sprite de narration et de sagesse' },
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 select-none">
      <div className="bg-[#fbf7ee] border-3 border-[#3a2312] rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-[0_12px_30px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b-2 border-[#3a2312] bg-[#f3ebd9]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] text-[#d97c27] shadow-xs">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#8c5a2b] uppercase tracking-widest font-cinzel">
                Personnalisation Graphique
              </span>
              <h2 className="text-base sm:text-xl font-bold text-[#3a2312] font-cinzel">
                Intégrer vos Assets Visuels Personnalisés
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playSelect();
              onClose();
            }}
            title="Fermer"
            className="p-2 rounded-xl bg-[#ebdfc8] hover:bg-[#d9c7ab] text-[#3a2312] border-2 border-[#3a2312] transition-colors cursor-pointer shadow-xs active:translate-y-0.5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative Guidance Banner */}
        <div className="p-3 sm:px-5 bg-[#ebdfc8] border-b border-[#d2be9f] flex items-start gap-2.5 text-xs text-[#5c4028] leading-relaxed">
          <Info className="w-4 h-4 text-[#d97c27] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#3a2312]">Sources locales détectées : </span>
            Vous pouvez charger directement les fichiers images (PNG, JPG, WebP) de votre dossier local{' '}
            <code className="px-1.5 py-0.5 bg-[#fbf7ee] border border-[#b89f81] rounded text-[11px] text-[#8c5a2b] font-mono">
              C:\MES PROJETS\NOUR LE JEUX\sources
            </code>
            . Ils s'afficheront instantanément dans le jeu et sont enregistrés dans votre navigateur.
          </div>
        </div>

        {/* Tab Selector */}
        <div className="px-4 py-2.5 bg-[#f3ebd9] border-b border-[#ebdcc4] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundManager.playSelect();
                setActiveTab('characters');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold font-cinzel transition-all cursor-pointer ${
                activeTab === 'characters'
                  ? 'bg-[#d97c27] text-white font-bold shadow-xs border border-[#3a2312]'
                  : 'bg-[#ebdfc8] text-[#5c4028] hover:bg-[#e0cfb4] border border-[#d2be9f]'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Avatars Personnages ({characterKeys.length})</span>
            </button>

            <button
              onClick={() => {
                soundManager.playSelect();
                setActiveTab('backgrounds');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold font-cinzel transition-all cursor-pointer ${
                activeTab === 'backgrounds'
                  ? 'bg-[#d97c27] text-white font-bold shadow-xs border border-[#3a2312]'
                  : 'bg-[#ebdfc8] text-[#5c4028] hover:bg-[#e0cfb4] border border-[#d2be9f]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Décors & Arrière-plans ({backgroundKeys.length})</span>
            </button>
          </div>

          <button
            onClick={handleResetAll}
            className="text-[11px] text-[#991b1b] hover:text-[#7f1d1d] font-bold flex items-center gap-1 cursor-pointer transition-colors px-2 py-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Tout réinitialiser</span>
          </button>
        </div>

        {/* Items Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#fdfbf7] custom-scrollbar">
          {activeTab === 'characters' &&
            characterKeys.map(({ key, label, desc }) => {
              const currentImg = assets.characters[key];

              return (
                <div
                  key={key}
                  className="bg-[#f3ebd9] border-2 border-[#3a2312] rounded-2xl p-3.5 flex flex-col justify-between gap-3 shadow-xs hover:border-[#d97c27] transition-all"
                >
                  <div className="flex items-start gap-3">
                    {/* Thumbnail Preview */}
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] overflow-hidden flex items-center justify-center shrink-0 relative shadow-inner">
                      {currentImg ? (
                        <img
                          src={currentImg}
                          alt={label}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span className="text-[10px] text-[#8c5a2b] text-center font-mono">Défaut</span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-bold text-[#3a2312] font-cinzel truncate">{label}</h4>
                        {currentImg && (
                          <span className="text-[10px] bg-[#d8f3dc] text-[#1b4332] px-1.5 py-0.5 rounded-md border border-[#74c69d] flex items-center gap-0.5 font-bold shrink-0">
                            <Check className="w-2.5 h-2.5" /> Modifié
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#6b4724] mt-0.5 leading-snug">{desc}</p>
                    </div>
                  </div>

                  {/* Upload Controls */}
                  <div className="flex items-center gap-2 pt-2 border-t border-[#ebdcc4]">
                    <label className="flex-1 py-2 px-3 rounded-xl bg-[#d97c27] hover:bg-[#c26a1b] text-white border-2 border-[#3a2312] text-xs font-bold font-cinzel flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all">
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
                        className="p-2 rounded-xl bg-[#fee2e2] hover:bg-[#fecaca] text-[#991b1b] border-2 border-[#b91c1c] transition-colors cursor-pointer shadow-xs active:translate-y-0.5"
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
                  className="bg-[#f3ebd9] border-2 border-[#3a2312] rounded-2xl p-3.5 flex flex-col justify-between gap-3 shadow-xs hover:border-[#d97c27] transition-all"
                >
                  <div className="flex items-start gap-3">
                    {/* Thumbnail Preview */}
                    <div className="w-24 h-16 sm:w-28 sm:h-18 rounded-xl bg-[#ebdfc8] border-2 border-[#3a2312] overflow-hidden flex items-center justify-center shrink-0 relative shadow-inner">
                      {currentImg ? (
                        <img
                          src={currentImg}
                          alt={label}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span className="text-[10px] text-[#8c5a2b] text-center font-mono">Défaut</span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-bold text-[#3a2312] font-cinzel truncate">{label}</h4>
                        {currentImg && (
                          <span className="text-[10px] bg-[#d8f3dc] text-[#1b4332] px-1.5 py-0.5 rounded-md border border-[#74c69d] flex items-center gap-0.5 font-bold shrink-0">
                            <Check className="w-2.5 h-2.5" /> Modifié
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#6b4724] mt-0.5 leading-snug">{desc}</p>
                    </div>
                  </div>

                  {/* Upload Controls */}
                  <div className="flex items-center gap-2 pt-2 border-t border-[#ebdcc4]">
                    <label className="flex-1 py-2 px-3 rounded-xl bg-[#d97c27] hover:bg-[#c26a1b] text-white border-2 border-[#3a2312] text-xs font-bold font-cinzel flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_2px_0_#3a2312] active:translate-y-0.5 transition-all">
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
                        className="p-2 rounded-xl bg-[#fee2e2] hover:bg-[#fecaca] text-[#991b1b] border-2 border-[#b91c1c] transition-colors cursor-pointer shadow-xs active:translate-y-0.5"
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
        <div className="p-3 sm:px-6 bg-[#f3ebd9] border-t-2 border-[#3a2312] flex items-center justify-between">
          <span className="text-[11px] text-[#6b4724] font-medium">
            Les images sont sauvegardées localement dans votre profil de jeu.
          </span>

          <button
            onClick={() => {
              soundManager.playSelect();
              onClose();
            }}
            className="px-5 py-2.5 bg-[#2d6a4f] hover:bg-[#1b4332] text-[#fbf7ee] font-black text-xs sm:text-sm rounded-xl border-2 border-[#1b4332] shadow-[0_2px_0_#1b4332] active:translate-y-0.5 transition-all cursor-pointer font-cinzel"
          >
            Fermer et Appliquer
          </button>
        </div>
      </div>
    </div>
  );
};
