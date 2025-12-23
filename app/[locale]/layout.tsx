import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { inter, oswald, montserratAlternates } from '@/lib/fonts';
import { SiteHeader } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/Footer';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { siteMetadata } from '@/config/metadata';
import { Analytics } from '@vercel/analytics/next';
import { routing, locales, type Locale } from '@/i18n/routing';

import '../globals.css';

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate locale-aware metadata for the root layout
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: t('site.title'),
      template: `%s | ${t('site.title')}`,
    },
    description: t('site.description'),
    keywords: t('site.keywords'),
    authors: siteMetadata.authors,
    creator: siteMetadata.creator,
    publisher: siteMetadata.publisher,
    metadataBase: new URL(siteMetadata.siteUrl),
    openGraph: {
      type: siteMetadata.openGraph.type,
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
      url: siteMetadata.openGraph.url,
      siteName: siteMetadata.openGraph.siteName,
      images: siteMetadata.openGraph.images,
    },
    twitter: siteMetadata.twitter,
    robots: siteMetadata.robots,
    icons: siteMetadata.icons,
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate that the incoming locale is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering for this locale
  setRequestLocale(locale);

  // Get messages using next-intl's built-in method
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${oswald.variable} ${montserratAlternates.variable}`}
    >
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="skip-to-content"
            aria-label={locale === 'pl' ? 'Przejdź do treści' : 'Skip to content'}
          >
            <span className="sr-only">
              {locale === 'pl' ? 'Przejdź do treści' : 'Skip to content'}
            </span>
          </a>
          <ScrollProgressBar />
          <ScrollToTopButton />
          <SiteHeader />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
