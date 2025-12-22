import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';

/**
 * Configuration for next-intl App Router integration
 * This file is used by middleware and server components to load translations
 */
export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
