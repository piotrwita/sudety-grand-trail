import { defineRouting } from 'next-intl/routing';

export const locales = ['pl', 'en'] as const;
export const defaultLocale = 'pl' as const;

export type Locale = (typeof locales)[number];

/**
 * Pathnames configuration for all routes
 * Since all routes use the same path in both locales, we use a simple string
 * If different paths per locale are needed, use object format: { pl: '/trasa', en: '/trail' }
 */
export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/badge': '/badge',
  '/hall-of-fame': '/hall-of-fame',
  '/live': '/live',
  '/peaks': '/peaks',
  '/privacy-policy': '/privacy-policy',
  '/terms-of-service': '/terms-of-service',
  '/trail': '/trail',
} as const;

export type Pathname = keyof typeof pathnames;

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Locale prefix strategy:
  // 'as-needed' - default locale has no prefix, others do
  // 'always' - all locales have prefix
  // 'never' - no locale has prefix (not recommended for SEO)
  localePrefix: 'as-needed',

  // Pathnames configuration for localized routes
  pathnames,
});

