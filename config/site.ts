import { siteRoutes } from './site-routes';

export const siteConfig = {
  name: 'Sudety Grand Trail',
  description: 'Sudety Grand Trail - Trail running event',
  logo: {
    src: '/images/logo.png',
    alt: 'Sudety Grand Trail Logo',
  },
  navigation: [
    { href: siteRoutes.home, label: 'Home' },
    { href: siteRoutes.trail, label: 'Trail' },
    { href: siteRoutes.korona, label: 'Korona Sudetów' },
    { href: siteRoutes.live, label: 'Live', isLive: true },
    { href: siteRoutes.hallOfFame, label: 'Hall of Fame' },
    { href: siteRoutes.about, label: 'O Mnie' },
  ],
  socialLinks: [
    {
      href: 'https://mapy.com/s/barusofola',
      label: 'Mapa',
      external: true,
      icon: 'map',
    },
    {
      href: 'https://www.facebook.com/SudetyGrandTrail',
      label: 'Facebook',
      external: true,
      icon: 'facebook',
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
