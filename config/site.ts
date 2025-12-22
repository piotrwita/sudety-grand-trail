import { siteRoutes } from './site-routes';

const socialLinks = {
  map: {
    href: 'https://mapy.com/s/barusofola',
    label: 'Mapa szlaku',
    external: true,
    icon: 'map',
  },
  facebook: {
    href: 'https://www.facebook.com/SudetyGrandTrail',
    label: 'Facebook - Sudety Grand Trail',
    external: true,
    icon: 'facebook',
  },
  facebookGroup: {
    href: 'https://www.facebook.com/groups/opowiescizeszlaku',
    label: 'Facebook - Opowieści ze szlaku',
    external: true,
    icon: 'facebook',
  },
} as const;

export const siteConfig = {
  name: 'Sudety Grand Trail',
  description: 'Sudety Grand Trail - Trail running event',
  contactEmail: 'sgt.powiadomienia@gmail.com',
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
  socialLinks: [socialLinks.map, socialLinks.facebook],
  links: socialLinks,
} as const;

export type SiteConfig = typeof siteConfig;
