import type { Metadata } from 'next';
import { inter, oswald, montserratAlternates } from '@/lib/fonts';
import { SiteHeader } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/Footer';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { siteMetadata } from '@/config/metadata';

import './globals.css';
import Link from 'next/link';

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
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${oswald.variable} ${montserratAlternates.variable}`}
    >
      <body className="antialiased">
        <Link
          href="#main-content"
          className="skip-to-content"
          aria-label="Przejdź do treści"
        >
          <span className="sr-only">Przejdź do treści</span>
        </Link>
        <ScrollProgressBar />
        <SiteHeader />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
