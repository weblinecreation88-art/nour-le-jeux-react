import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations, translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRtl: boolean;
}

const STORAGE_KEY = 'nour_preferred_lang';

/**
 * Detect the best matching language based on user's browser settings.
 * Priority: 
 * 1. Saved localStorage preference
 * 2. Navigator languages (Arabic -> 'ar', French -> 'fr', Default/All others -> 'en')
 */
function detectBrowserLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'fr' || saved === 'en' || saved === 'ar') {
      return saved;
    }
  } catch {
    // localStorage might be unavailable in some private browsing modes
  }

  const browserLangs = navigator.languages || [navigator.language || ''];
  for (const rawLang of browserLangs) {
    if (!rawLang) continue;
    const lower = rawLang.toLowerCase();
    if (lower.startsWith('ar')) {
      return 'ar';
    }
    if (lower.startsWith('fr')) {
      return 'fr';
    }
    if (lower.startsWith('en')) {
      return 'en';
    }
  }

  // Default international language
  return 'fr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => detectBrowserLanguage());

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore storage error
    }
  };

  useEffect(() => {
    const isRtl = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    if (isRtl) {
      document.documentElement.classList.add('rtl-mode');
    } else {
      document.documentElement.classList.remove('rtl-mode');
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] || translations.fr,
    isRtl: language === 'ar'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
