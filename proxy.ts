import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

/**
 * next-intl proxy for locale detection and routing
 * (Renamed from middleware.ts to proxy.ts for Next.js 16 compatibility)
 *
 * This proxy:
 * 1. Detects the user's preferred locale from Accept-Language header or cookies
 * 2. Redirects to locale-prefixed URLs when needed (e.g., /about -> /en/about for English users)
 * 3. Serves the default locale (pl) without a prefix, other locales with prefix
 * 4. Sets cookies to remember the user's locale preference
 */
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - /api routes
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - Static files (images, fonts, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/(pl|en)/:path*'],
};
