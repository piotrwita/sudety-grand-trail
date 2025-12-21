'use client';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { locale, setLocale } = useLanguage();
  const languages: { code: 'pl' | 'en'; label: string }[] = [
    { code: 'pl', label: 'PL' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {languages.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLocale(lang.code)}
            className={cn(
              'px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md',
              isActive
                ? 'bg-accent/20 text-accent'
                : 'text-cream/70 hover:text-cream hover:bg-forest-700/50'
            )}
            aria-label={`Switch to ${lang.label}`}
            aria-pressed={isActive}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
};

