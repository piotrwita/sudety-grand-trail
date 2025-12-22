// Helper utilities for i18n
// This file wraps next-intl's hooks to provide a consistent API across the app
import { useTranslations as useNextIntlTranslations, useLocale as useNextIntlLocale } from 'next-intl';

export type Locale = 'pl' | 'en';

export const defaultLocale: Locale = 'pl';

export const locales: Locale[] = ['pl', 'en'];

// Re-export useLocale from next-intl
export const useLocale = useNextIntlLocale;

// Helper function to get nested translation value from next-intl's t function
function getNestedValue(t: (key: string) => any, path: string): any {
  try {
    return t(path);
  } catch {
    return path;
  }
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

// Hook to get translations that wraps next-intl's useTranslations
// Provides backwards compatibility with the previous API
export function useTranslations(namespace?: string) {
  const locale = useNextIntlLocale() as Locale;
  const nextIntlT = useNextIntlTranslations(namespace);

  const t = (key: string, params?: Record<string, string | number>): string => {
    try {
      const translation = nextIntlT(key, params);
      if (typeof translation === 'string') {
        return translation;
      }
      return String(translation);
    } catch {
      return key;
    }
  };

  const tArray = (key: string): string[] => {
    try {
      const translation = nextIntlT.raw(key);
      if (Array.isArray(translation)) {
        return translation;
      }
      return [];
    } catch {
      return [];
    }
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
    peaks: t('peaks'),
    hallOfFame: t('hallOfFame'),
    badge: t('badge'),
    about: t('about'),
  };
}
