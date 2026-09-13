import React from 'react';
import { Sparkles, Compass, ScrollText, Backpack, User } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import { gameTranslations } from '../i18n/gameTranslations';

export type TabType = 'adventure' | 'travel' | 'quests' | 'inventory' | 'profile' | 'home';

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
  const { language, isRtl } = useLanguage();
  const t = gameTranslations[language]?.nav || gameTranslations.fr.nav;

  const tabs: Array<{ id: TabType; label: string; icon: React.ReactNode; badge?: number }> = [
    {
      id: 'adventure',
      label: t.adventure,
      icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      id: 'travel',
      label: t.map,
      icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      id: 'quests',
      label: t.quests,
      icon: <ScrollText className="w-4 h-4 sm:w-5 sm:h-5" />,
      badge: unreadQuestsCount
    },
    {
      id: 'inventory',
      label: t.inventory,
      icon: <Backpack className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      id: 'profile',
      label: t.profile,
      icon: <User className="w-4 h-4 sm:w-5 sm:h-5" />
    }
  ];

  return (
    <nav
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full shrink-0 sticky bottom-0 bg-[#f3ebd9]/98 backdrop-blur-md border-t-2 border-[#3a2312] px-1 sm:px-3 py-1 sm:py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center justify-around z-40 shadow-[0_-4px_12px_rgba(0,0,0,0.12)] select-none"
    >
      <div className="w-full max-w-xl mx-auto flex items-center justify-around gap-0.5 sm:gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                soundManager.playSelect();
                onSelectTab(tab.id);
              }}
              className={`flex flex-col items-center justify-center py-1 px-1 sm:px-3 rounded-xl transition-all relative cursor-pointer min-w-[48px] xs:min-w-[54px] sm:min-w-[64px] flex-1 max-w-[85px] ${
                isActive
                  ? 'bg-[#ebdfc8] text-[#3a2312] border-2 border-[#3a2312] shadow-[0_2px_0_#3a2312] -translate-y-0.5'
                  : 'text-[#8c6b4e] hover:text-[#3a2312] hover:bg-[#ebdcc4]/50'
              }`}
            >
              <div className={`relative ${isActive ? 'text-amber-700' : 'text-[#8c6b4e]'}`}>
                {tab.icon}
                {tab.badge && tab.badge > 0 ? (
                  <span className="absolute -top-1 -right-2 bg-[#d97c27] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#3a2312] animate-pulse">
                    {tab.badge}
                  </span>
                ) : null}
              </div>
              <span
                className={`text-[9.5px] sm:text-[11px] font-bold mt-0.5 font-cinzel tracking-tight sm:tracking-normal ${
                  isActive ? 'text-[#3a2312]' : 'text-[#8c6b4e]'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};


