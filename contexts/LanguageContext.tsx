'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { Locale } from '@/lib/i18n-utils';

const LANGUAGE_STORAGE_KEY = 'sudety-grand-trail-language';
const LANGUAGE_COOKIE_KEY = 'sudety-grand-trail-language';

// Helper function to set cookie
function setCookie(name: string, value: string, days: number = 365) {
  if (typeof document === 'undefined') return;
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  initialLocale: Locale;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, initialLocale }) => {
  // Use initialLocale from server (from cookies) to avoid hydration mismatch
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      // Store in both cookie (for SSR) and localStorage (for client-side access)
      setCookie(LANGUAGE_COOKIE_KEY, newLocale);
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLocale);
    }
  }, []);

  // Sync with localStorage changes (e.g., from other tabs)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === LANGUAGE_STORAGE_KEY && e.newValue) {
        if (e.newValue === 'pl' || e.newValue === 'en') {
          setLocaleState(e.newValue);
          setCookie(LANGUAGE_COOKIE_KEY, e.newValue);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

