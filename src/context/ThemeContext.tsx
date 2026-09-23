import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'dark' | 'parchment';

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  isParchment: boolean;
}

const STORAGE_KEY = 'nour_preferred_theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark' || saved === 'parchment') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'parchment'; // default parchment (thème clair or & parchemin)
  });

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // ignore storage error
    }
  };

  const toggleTheme = () => {
    const nextMode = themeMode === 'dark' ? 'parchment' : 'dark';
    setThemeMode(nextMode);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (themeMode === 'parchment') {
        root.classList.add('theme-parchment');
        root.classList.remove('theme-dark');
        root.setAttribute('data-theme', 'parchment');
      } else {
        root.classList.add('theme-dark');
        root.classList.remove('theme-parchment');
        root.setAttribute('data-theme', 'dark');
      }
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        setThemeMode,
        toggleTheme,
        isParchment: themeMode === 'parchment'
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
