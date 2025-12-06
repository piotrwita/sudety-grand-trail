import { siteRoutes } from './site-routes';

const socialLinks = {
  map: {
    href: 'https://mapy.com/s/barusofola',
    label: 'Mapa',
    external: true,
    icon: 'map',
  },
  facebook: {
    href: 'https://www.facebook.com/SudetyGrandTrail',
    label: 'Facebook',
    external: true,
    icon: 'facebook',
  },
} as const;

export const siteConfig = {
  name: 'Sudety Grand Trail',
  description: 'Sudety Grand Trail - Trail running event',
  logo: {
    src: '/images/logo.png',
    alt: 'Sudety Grand Trail Logo',
  },
  navigation: [
    { href: siteRoutes.home, label: 'Strona główna' },
    { href: siteRoutes.trail, label: 'Trasa' },
    { href: siteRoutes.live, label: 'Live', isLive: true },
    { href: siteRoutes.korona, label: 'Szczyty' },
    { href: siteRoutes.hallOfFame, label: 'Hall of Fame' },
    { href: siteRoutes.badge, label: 'Odznaka' },
    { href: siteRoutes.about, label: 'O Mnie' },
  ],
  socialLinks: Object.values(socialLinks),
  links: socialLinks,
} as const;

export type SiteConfig = typeof siteConfig;
