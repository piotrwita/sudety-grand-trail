'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import type { Locale } from '@/lib/i18n-utils';

interface LanguageProviderWrapperProps {
  children: React.ReactNode;
  initialLocale: Locale;
}

export function LanguageProviderWrapper({ children, initialLocale }: LanguageProviderWrapperProps) {
  return <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>;
}

