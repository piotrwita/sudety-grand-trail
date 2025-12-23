import { MetadataRoute } from 'next';
import { siteMetadata } from '@/config/metadata';
import { routeConfig } from '@/config/site-routes';
import { locales, defaultLocale } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each route in each locale
  routeConfig.forEach((route) => {
    locales.forEach((locale) => {
      // For default locale (pl), the path is without prefix
      // For other locales, the path includes the locale prefix
      const localePath =
        locale === defaultLocale
          ? route.path
          : `/${locale}${route.path}`;

      // Generate alternates for hreflang
      const alternates: Record<string, string> = {};
      locales.forEach((loc) => {
        const altPath =
          loc === defaultLocale ? route.path : `/${loc}${route.path}`;
        alternates[loc] = `${siteMetadata.siteUrl}${altPath}`;
      });

      entries.push({
        url: `${siteMetadata.siteUrl}${localePath}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: alternates,
        },
      });
    });
  });

  // Add privacy-policy and terms-of-service (they're not in routeConfig)
  const additionalRoutes = [
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  additionalRoutes.forEach((route) => {
    locales.forEach((locale) => {
      const localePath =
        locale === defaultLocale
          ? route.path
          : `/${locale}${route.path}`;

      const alternates: Record<string, string> = {};
      locales.forEach((loc) => {
        const altPath =
          loc === defaultLocale ? route.path : `/${loc}${route.path}`;
        alternates[loc] = `${siteMetadata.siteUrl}${altPath}`;
      });

      entries.push({
        url: `${siteMetadata.siteUrl}${localePath}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: alternates,
        },
      });
    });
  });

  return entries;
}
