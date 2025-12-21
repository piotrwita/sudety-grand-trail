'use client';

import { useMemo } from 'react';
import { useNavigationTranslations } from './i18n-utils';
import { siteRoutes } from '@/config/site-routes';

export function useNavigation() {
  const translations = useNavigationTranslations();
  
  return useMemo(
    () => [
      { href: siteRoutes.home, label: translations.home },
      { href: siteRoutes.trail, label: translations.trail },
      { href: siteRoutes.live, label: translations.live, isLive: true },
      { href: siteRoutes.korona, label: translations.mountains },
      { href: siteRoutes.hallOfFame, label: translations.hallOfFame },
      { href: siteRoutes.badge, label: translations.badge },
      { href: siteRoutes.about, label: translations.about },
    ],
    [
      translations.home,
      translations.trail,
      translations.live,
      translations.mountains,
      translations.hallOfFame,
      translations.badge,
      translations.about,
    ]
  );
}

