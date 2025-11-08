import { Metadata } from 'next';
import { siteRoutes } from './site-routes';

export const siteMetadata = {
  title: 'Sudety Grand Trail',
  description:
    'Wyrusz w niezapomnianą podróż przez najpiękniejsze szlaki Sudetów. 900 km przez 24 pasma górskie - odkryj magię Korony Sudetów.',
  // Use environment variable for flexible deployment (dev, staging, production)
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || 'https://sudety-grand-trail.vercel.app',
  siteName: 'Sudety Grand Trail',
  locale: 'pl_PL',
  type: 'website' as const,
  keywords: [
    'sudety',
    'szlaki górskie',
    'trekking',
    'Korona Sudetów',
    'trail running',
    'przygoda',
    'natura',
    'góry',
    'wędrówki górskie',
    'ultramaraton',
    'challenge',
  ] as string[],
  authors: [{ name: 'Sudety Grand Trail' }] as Array<{ name: string }>,
  creator: 'Sudety Grand Trail',
  publisher: 'Sudety Grand Trail',
  openGraph: {
    type: 'website' as const,
    locale: 'pl_PL',
    url: 'https://sudetygrandtrail.pl',
    siteName: 'Sudety Grand Trail',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sudety Grand Trail Logo',
      },
    ] as Array<{ url: string; width: number; height: number; alt: string }>,
  },
  twitter: {
    card: 'summary_large_image' as const,
    images: ['/images/logo.png'] as string[],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

// Helper function to generate page metadata with structured data
export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords = [],
  images,
  type = 'website' as 'website' | 'article',
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
  type?: 'website' | 'article';
}): Metadata {
  const url = `${siteMetadata.siteUrl}${path}`;
  const pageImages = images || siteMetadata.openGraph.images;

  return {
    title,
    description,
    keywords: [...siteMetadata.keywords, ...keywords],
    authors: siteMetadata.authors,
    creator: siteMetadata.creator,
    publisher: siteMetadata.publisher,
    openGraph: {
      title,
      description,
      url,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      type: type === 'article' ? 'article' : 'website',
      images: pageImages,
    },
    twitter: {
      card: siteMetadata.twitter.card,
      title,
      description,
      images: pageImages.map((img) => img.url),
    },
    alternates: {
      canonical: url,
    },
    robots: siteMetadata.robots,
  };
}

// Page-specific metadata configurations
export const pageMetadata = {
  home: generatePageMetadata({
    title: 'Sudety Grand Trail - Odkryj Magię Gór',
    description:
      'Wyrusz w niezapomnianą podróż przez najpiękniejsze szlaki Sudetów. 900 km przez 24 pasma górskie - odkryj magię Korony Sudetów. Przygoda, natura i wyzwanie czekają na Ciebie.',
    path: siteRoutes.home,
    keywords: ['strona główna', 'home', 'sudety trail', 'górskie wyzwanie'],
  }),

  trail: generatePageMetadata({
    title: 'Trasa - Sudety Grand Trail',
    description:
      'Poznaj trasę Sudety Grand Trail: 900 km przez 24 pasma Sudetów. Szczegółowa mapa, opis szlaku i wszystkie szczyty Korony Sudetów. Od Jarnołtówka po Ślężę.',
    path: siteRoutes.trail,
    keywords: [
      'trasa',
      'mapa szlaku',
      'szczyty',
      'pasma górskie',
      'planowanie trasy',
      'GPX',
    ],
  }),

  korona: generatePageMetadata({
    title: 'Korona Sudetów - Sudety Grand Trail',
    description:
      'Korona Sudetów to 24 najwyższych szczytów w 24 pasmach górskich Sudetów. Poznaj historię, zasady zdobywania i wszystkie szczyty wchodzące w skład Korony Sudetów.',
    path: siteRoutes.korona,
    keywords: [
      'Korona Sudetów',
      'szczyty sudetów',
      'góry sudety',
      'odznaka korony',
      'zdobywanie szczytów',
    ],
  }),

  live: generatePageMetadata({
    title: 'Live Tracking - Śledź Wyprawę na Żywo | Sudety Grand Trail',
    description:
      'Śledź na żywo przejście Sudety Grand Trail! Real-time GPS tracking, aktualna pozycja, przebyta trasa i statystyki. Zobacz, jak przebiega zdobywanie Korony Sudetów w czasie rzeczywistym.',
    path: siteRoutes.live,
    keywords: [
      'live tracking',
      'śledzenie na żywo',
      'GPS',
      'real-time',
      'aktualna pozycja',
      'mapa na żywo',
      'Poltrax',
    ],
  }),

  hallOfFame: generatePageMetadata({
    title: 'Hall of Fame - Zdobywcy Sudety Grand Trail',
    description:
      'Hall of Fame Sudety Grand Trail - poznaj odważnych, którzy zdobyli pełną Koronę Sudetów. 900 km przez 24 pasma górskie. Dołącz do elitarnego grona zdobywców!',
    path: siteRoutes.hallOfFame,
    keywords: [
      'hall of fame',
      'zdobywcy',
      'finishers',
      'rekordy',
      'statystyki',
      'zgłoszenie przejścia',
    ],
  }),

  about: generatePageMetadata({
    title: 'O Mnie - Twórca Sudety Grand Trail',
    description:
      'Poznaj człowieka za Sudety Grand Trail. Historia zwykłego chłopaka z Łodzi, który postanowił użyć własnych nóg, by zmieniać świat na lepszy poprzez górskie wyzwania.',
    path: siteRoutes.about,
    keywords: [
      'o mnie',
      'twórca',
      'historia',
      'motywacja',
      'biografia',
      'pasja do gór',
    ],
  }),
} as const;
