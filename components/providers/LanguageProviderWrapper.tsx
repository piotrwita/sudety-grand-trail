'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';

export function LanguageProviderWrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

