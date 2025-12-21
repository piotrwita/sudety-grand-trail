export const routing = {
  // A list of all locales that are supported
  locales: ['pl', 'en'] as const,

  // Used when no locale matches
  defaultLocale: 'pl' as const,
} as const;

export type Locale = (typeof routing.locales)[number];

