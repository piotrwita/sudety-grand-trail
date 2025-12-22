import type { Metadata } from 'next';
import { inter, oswald, montserratAlternates } from '@/lib/fonts';
import { SiteHeader } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/Footer';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { siteMetadata } from '@/config/metadata';
import { LanguageProviderWrapper } from '@/components/providers/LanguageProviderWrapper';
import { Analytics } from '@vercel/analytics/next';
import type { Locale } from '@/lib/i18n-utils';

import './globals.css';
import Link from 'next/link';

// Force static rendering for all pages
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: siteMetadata.authors,
  creator: siteMetadata.creator,
  publisher: siteMetadata.publisher,
  metadataBase: new URL(siteMetadata.siteUrl),
  openGraph: {
    type: siteMetadata.openGraph.type,
    locale: siteMetadata.openGraph.locale,
    url: siteMetadata.openGraph.url,
    siteName: siteMetadata.openGraph.siteName,
    images: siteMetadata.openGraph.images,
  },
  twitter: siteMetadata.twitter,
  robots: siteMetadata.robots,
  icons: siteMetadata.icons,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  // Use default locale 'pl' for static rendering
  // LanguageProviderWrapper will read cookies on client side
  const initialLocale: Locale = 'pl';

  return (
    <html
      lang={initialLocale}
      className={`${inter.variable} ${oswald.variable} ${montserratAlternates.variable}`}
    >
      <body className="antialiased">
        <LanguageProviderWrapper initialLocale={initialLocale}>
          <Link
            href="#main-content"
            className="skip-to-content"
            aria-label="Przejdź do treści"
          >
            <span className="sr-only">Przejdź do treści</span>
          </Link>
          <ScrollProgressBar />
          <ScrollToTopButton />
          <SiteHeader />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProviderWrapper>
        <Analytics />
      </body>
    </html>
  );
}
