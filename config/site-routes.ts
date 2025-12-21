/**
 * Centralized site routes configuration
 * Used for navigation, sitemap generation, and metadata
 */
export const siteRoutes = {
  home: '/',
  trail: '/trail',
  korona: '/peaks',
  live: '/live',
  hallOfFame: '/hall-of-fame',
  badge: '/badge',
  about: '/about',
} as const;

// Array of all routes for iteration (e.g., in sitemap)
export const allRoutes = Object.values(siteRoutes);

// Route metadata for sitemap and navigation
export const routeConfig = [
  {
    path: siteRoutes.home,
    priority: 1.0,
    changeFrequency: 'weekly' as const,
    label: 'Home',
  },
  {
    path: siteRoutes.trail,
    priority: 0.9,
    changeFrequency: 'weekly' as const,
    label: 'Trail',
  },
  {
    path: siteRoutes.korona,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
    label: 'Wykaz szczytów',
  },
  {
    path: siteRoutes.live,
    priority: 0.9,
    changeFrequency: 'daily' as const,
    label: 'Live',
    isLive: true,
  },
  {
    path: siteRoutes.hallOfFame,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
    label: 'Hall of Fame',
  },
  {
    path: siteRoutes.badge,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
    label: 'Odznaka',
  },
  {
    path: siteRoutes.about,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    label: 'O Mnie',
  },
] as const;

// Type exports for TypeScript
export type SiteRoute = (typeof siteRoutes)[keyof typeof siteRoutes];
export type RouteConfig = (typeof routeConfig)[number];
