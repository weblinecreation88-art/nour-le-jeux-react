import React, { useState } from 'react';
import { Shield, BookOpen, Clock, Heart, Anchor, Sparkles, Check } from 'lucide-react';
import { EquipmentItem, PlayerStats, PlayerProgress } from '../../types';
import { PIXEL_ASSETS } from '../../utils/assets';
import { soundManager } from '../../utils/audio';

interface InventoryScreenProps {
  progress: PlayerProgress;
  onEquipItem: (itemId: string) => void;
}

export const InventoryScreen: React.FC<InventoryScreenProps> = ({
  progress,
  onEquipItem
}) => {
  const [activeCategory, setActiveCategory] = useState<
    'equipement' | 'objets' | 'ressources' | 'decoration'
  >('equipement');

  const travelerSprite = PIXEL_ASSETS.traveler;

  const equippedTenue = progress.equipment.find(
    (e) => e.category === 'tenue' && e.equipped
  );
  const equippedCape = progress.equipment.find(
    (e) => e.category === 'cape' && e.equipped
  );
  const equippedSac = progress.equipment.find(
    (e) => e.category === 'sac' && e.equipped
  );
  const equippedLanterne = progress.equipment.find(
    (e) => e.category === 'lanterne' && e.equipped
  );

  const equipmentList = progress.equipment.filter(
    (e) => e.category === 'tenue' || e.category === 'cape' || e.category === 'sac' || e.category === 'lanterne'
  );

  const objectsList = progress.equipment.filter((e) => e.category === 'objet');
  const resourcesList = progress.equipment.filter((e) => e.category === 'ressource');
  const decoList = progress.equipment.filter((e) => e.category === 'decoration');

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-3 sm:px-6 pt-3 pb-12 max-w-md mx-auto w-full gap-3 select-none custom-scrollbar">
      {/* Title */}
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c5a2b] font-cinzel">
          Objets, équipements, ressources
        </span>
        <h1 className="text-base sm:text-lg font-bold text-[#3a2312] font-cinzel">
          SAC – INVENTAIRE
        </h1>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-4 p-1 bg-[#ebdfc8] border-2 border-[#3a2312] rounded-2xl shadow-[0_2px_0_#3a2312]">
        {(
          [
            { id: 'equipement', label: 'Équipement' },
            { id: 'objets', label: 'Objets' },
            { id: 'ressources', label: 'Ressources' },
            { id: 'decoration', label: 'Décoration' }
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              soundManager.playSelect();
              setActiveCategory(tab.id);
            }}
            className={`py-1.5 px-1 text-[10px] sm:text-xs font-bold rounded-xl transition-all font-cinzel text-center truncate cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-[#fbf7ee] text-[#3a2312] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312]'
                : 'text-[#8c6b4e] hover:text-[#3a2312]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeCategory === 'equipement' && (
        <div className="flex flex-col gap-3">
          {/* Character Equip Display Stage */}
          <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-3xl p-4 shadow-[0_3px_0_#3a2312] relative">
            <div className="grid grid-cols-3 gap-2 items-center">
              {/* Left Slots: Tenue & Sac */}
              <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel mb-1">
                    Tenue
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center p-1 relative shadow-[0_2px_0_#3a2312]">
                    <span className="text-2xl">🥋</span>
                    {equippedTenue && (
                      <span className="absolute -top-1 -right-1 bg-[#4a804d] text-white rounded-full p-0.5 border border-[#3a2312]">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel mb-1">
                    Sac
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center p-1 relative shadow-[0_2px_0_#3a2312]">
                    <span className="text-2xl">🎒</span>
                    {equippedSac && (
                      <span className="absolute -top-1 -right-1 bg-[#4a804d] text-white rounded-full p-0.5 border border-[#3a2312]">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Center: Traveler Full Sprite */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-24 h-32 flex items-center justify-center">
                  <img
                    src={travelerSprite}
                    alt="Traveler Avatar"
                    className="w-20 h-28 object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]"
                  />
                </div>
                <span className="text-[11px] font-bold text-[#8c5a2b] font-mono mt-1">
                  NIV. {progress.level}
                </span>
              </div>

              {/* Right Slots: Cape & Lanterne */}
              <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel mb-1">
                    Cape
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center p-1 relative shadow-[0_2px_0_#3a2312]">
                    <span className="text-2xl">🧣</span>
                    {equippedCape && (
                      <span className="absolute -top-1 -right-1 bg-[#4a804d] text-white rounded-full p-0.5 border border-[#3a2312]">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel mb-1">
                    Lanterne
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-[#ebdfc8] border-2 border-[#3a2312] flex items-center justify-center p-1 relative shadow-[0_2px_0_#3a2312]">
                    <span className="text-2xl">🏮</span>
                    {equippedLanterne && (
                      <span className="absolute -top-1 -right-1 bg-[#4a804d] text-white rounded-full p-0.5 border border-[#3a2312]">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Équipements Possédés */}
          <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-2xl p-3 shadow-[0_3px_0_#3a2312]">
            <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel block mb-2">
              ÉQUIPEMENTS POSSÉDÉS
            </span>
            <div className="grid grid-cols-5 gap-2">
              {equipmentList.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    soundManager.playSelect();
                    onEquipItem(item.id);
                  }}
                  className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center p-1 relative transition-all cursor-pointer ${
                    item.equipped
                      ? 'bg-[#ebf5e9] border-[#4a804d] shadow-[0_2px_0_#3a2312]'
                      : 'bg-[#ebdfc8] hover:bg-[#ebdcc4] border-[#3a2312]'
                  }`}
                  title={`${item.name} (${item.statBonus || ''})`}
                >
                  <span className="text-xl">
                    {item.category === 'tenue'
                      ? '🥋'
                      : item.category === 'cape'
                      ? '🧣'
                      : item.category === 'sac'
                      ? '🎒'
                      : '🏮'}
                  </span>
                  {item.equipped && (
                    <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#4a804d] text-white flex items-center justify-center text-[8px] font-bold">
                      ✓
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* STATS Display */}
          <div className="bg-[#fbf7ee] border-2 border-[#3a2312] rounded-2xl p-3 shadow-[0_3px_0_#3a2312] flex flex-col gap-2">
            <span className="text-[10px] font-bold text-[#8c5a2b] uppercase font-cinzel">
              STATS
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {[
                { label: 'Discipline', val: progress.stats.discipline, icon: '🛡️' },
                { label: 'Savoir', val: progress.stats.savoir, icon: '📖' },
                { label: 'Patience', val: progress.stats.patience, icon: '⏳' },
                { label: 'Bonté', val: progress.stats.bonte, icon: '💛' },
                { label: 'Constance', val: progress.stats.constance, icon: '⚓' }
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">{stat.icon}</span>
                    <span className="text-xs font-semibold text-[#3a2312]">{stat.label}</span>
                  </div>
                  <span className="text-xs font-bold text-[#3a2312] font-mono">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Other tabs: Objets, Ressources, Décoration */}
      {activeCategory === 'objets' && (
        <div className="flex flex-col gap-2">
          {objectsList.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-[#fbf7ee] border-2 border-[#3a2312] rounded-2xl flex items-center gap-3 shadow-[0_2px_0_#3a2312]"
            >
              <span className="text-2xl">📜</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#3a2312]">{item.name}</span>
                <span className="text-[11px] text-[#6b4724]">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeCategory === 'ressources' && (
        <div className="flex flex-col gap-2">
          {resourcesList.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-[#fbf7ee] border-2 border-[#3a2312] rounded-2xl flex items-center gap-3 shadow-[0_2px_0_#3a2312]"
            >
              <span className="text-2xl">🌾</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#3a2312]">{item.name}</span>
                <span className="text-[11px] text-[#6b4724]">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeCategory === 'decoration' && (
        <div className="flex flex-col gap-2">
          {decoList.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-[#fbf7ee] border-2 border-[#3a2312] rounded-2xl flex items-center gap-3 shadow-[0_2px_0_#3a2312]"
            >
              <span className="text-2xl">🏺</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#3a2312]">{item.name}</span>
                <span className="text-[11px] text-[#6b4724]">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
