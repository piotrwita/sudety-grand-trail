// Helper utilities for i18n
import { useLanguage } from '@/contexts/LanguageContext';
import plMessages from '@/messages/pl.json';
import enMessages from '@/messages/en.json';

export type Locale = 'pl' | 'en';

export const defaultLocale: Locale = 'pl';

export const locales: Locale[] = ['pl', 'en'];

type Messages = typeof plMessages;

// Helper function to get nested translation value
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}

// Helper function to replace placeholders in translation strings
function replacePlaceholders(text: string, params?: Record<string, string | number>): string {
  if (!params) return text;
  let result = text;
  for (const [key, value] of Object.entries(params)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), String(value));
  }
  return result;
}

// Hook to get translations
export function useTranslations(namespace?: string) {
  const { locale } = useLanguage();
  
  const messages = locale === 'en' ? enMessages : plMessages;
  
  const t = (key: string, params?: Record<string, string | number>): string => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const translation = getNestedValue(messages, fullKey);
    if (Array.isArray(translation)) {
      // If it's an array, return first element as string (fallback)
      return String(translation[0] || '');
    }
    if (typeof translation === 'string') {
      return replacePlaceholders(translation, params);
    }
    return String(translation);
  };
  
  const tArray = (key: string): string[] => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const translation = getNestedValue(messages, fullKey);
    if (Array.isArray(translation)) {
      return translation;
    }
    return [];
  };
  
  return { t, tArray, locale };
}

// Hook specifically for navigation translations
export function useNavigationTranslations() {
  const { t } = useTranslations('navigation');
  return {
    home: t('home'),
    trail: t('trail'),
    live: t('live'),
    mountains: t('mountains'),
    hallOfFame: t('hallOfFame'),
    badge: t('badge'),
    about: t('about'),
  };
}
