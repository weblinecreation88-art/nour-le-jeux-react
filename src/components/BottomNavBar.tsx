import React from 'react';
import { Home, Map, ScrollText, Backpack, User } from 'lucide-react';
import { soundManager } from '../utils/audio';

export type TabType = 'home' | 'travel' | 'quests' | 'inventory' | 'profile';

interface BottomNavBarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  unreadQuestsCount?: number;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onSelectTab,
  unreadQuestsCount = 0
}) => {
  const tabs: Array<{ id: TabType; label: string; icon: React.ReactNode; badge?: number }> = [
    {
      id: 'travel',
      label: 'Voyage',
      icon: <Map className="w-5 h-5" />
    },
    {
      id: 'quests',
      label: 'Quêtes',
      icon: <ScrollText className="w-5 h-5" />,
      badge: unreadQuestsCount
    },
    {
      id: 'inventory',
      label: 'Sac',
      icon: <Backpack className="w-5 h-5" />
    },
    {
      id: 'profile',
      label: 'Profil',
      icon: <User className="w-5 h-5" />
    }
  ];

  return (
    <nav className="w-full bg-[#f3ebd9] border-t-2 border-[#3a2312] px-2 py-1.5 flex items-center justify-around z-30 shadow-[0_-2px_6px_rgba(0,0,0,0.05)] select-none">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => {
              soundManager.playSelect();
              onSelectTab(tab.id);
            }}
            className={`flex flex-col items-center justify-center py-1 px-3 sm:px-4 rounded-xl transition-all relative cursor-pointer ${
              isActive
                ? 'bg-[#ebdfc8] text-[#3a2312] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] -translate-y-0.5'
                : 'text-[#8c6b4e] hover:text-[#3a2312] hover:bg-[#ebdcc4]/50'
            }`}
          >
            <div className="relative">
              {tab.icon}
              {tab.badge && tab.badge > 0 ? (
                <span className="absolute -top-1 -right-2 bg-[#d97c27] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#3a2312]">
                  {tab.badge}
                </span>
              ) : null}
            </div>
            <span
              className={`text-[10px] sm:text-[11px] font-bold mt-0.5 font-cinzel ${
                isActive ? 'text-[#3a2312]' : 'text-[#8c6b4e]'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

