export const siteConfig = {
  name: 'Sudety Grand Trail',
  description: 'Sudety Grand Trail - Trail running event',
  logo: {
    src: '/images/logo.png',
    alt: 'Sudety Grand Trail Logo',
  },
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/trail', label: 'Trail' },
    { href: '/korona', label: 'Korona Sudetów' },
    { href: '/live', label: 'Live', isLive: true },
    { href: '/hall-of-fame', label: 'Hall of Fame' },
    { href: '/about', label: 'O Mnie' },
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
