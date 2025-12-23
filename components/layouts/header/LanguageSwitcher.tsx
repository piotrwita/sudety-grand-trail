'use client';

import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { useTransition } from 'react';

interface LanguageSwitcherProps {
  className?: string;
}

const languageLabels: Record<Locale, string> = {
  pl: 'PL',
  en: 'EN',
};

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {locales.map((locale) => {
        const isActive = currentLocale === locale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => handleLanguageChange(locale)}
            disabled={isPending}
            className={cn(
              'px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md',
              isActive
                ? 'bg-accent/20 text-accent'
                : 'text-cream/70 hover:text-cream hover:bg-forest-700/50',
              isPending && 'opacity-50 cursor-not-allowed'
            )}
            aria-label={`Switch to ${languageLabels[locale]}`}
            aria-pressed={isActive}
          >
            {languageLabels[locale]}
          </button>
        );
      })}
    </div>
  );
};
