import { Metadata } from 'next';
import { siteRoutes } from './site-routes';

export const siteMetadata = {
  title: 'Sudety Grand Trail',
  description:
    'Wyrusz w niezapomnianą podróż najpiękniejszymi szlakami Sudetów. 900 km i 23 pasma górskie do pokonania na trasie SGT.',
  // Use environment variable for flexible deployment (dev, staging, production)
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sudety-grand-trail.com',
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
    url: 'https://www.sudety-grand-trail.com',
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
      'Wyrusz w niezapomnianą podróż najpiękniejszymi szlakami Sudetów. 900 km i 23 pasma górskie do pokonania na trasie SGT.',
    path: siteRoutes.home,
    keywords: ['strona główna', 'home', 'sudety trail', 'górskie wyzwanie'],
  }),

  trail: generatePageMetadata({
    title: 'Trasa - Sudety Grand Trail',
    description:
      'Poznaj trasę Sudety Grand Trail: 900 km przez 23 pasma Sudetów. Szczegółowa mapa, opis szlaku i wszystkie szczyty Korony Sudetów. Od Jarnołtówka po Ślężę.',
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
    title: 'Szczyty - Sudety Grand Trail',
    description:
      'Korona Sudetów to 23 najwyższych szczytów w 23 pasmach górskich Sudetów. Poznaj historię, zasady zdobywania i wszystkie szczyty wchodzące w skład Korony Sudetów.',
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
    title: 'Live Tracking - Śledź Wyprawę na Żywo',
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
    title: 'Galeria Sław - Zdobywcy Sudety Grand Trail',
    description:
      'Galeria Sław Sudety Grand Trail - poznaj odważnych, którzy zdobyli pełną Koronę Sudetów. 900 km przez 23 pasma górskie. Dołącz do elitarnego grona zdobywców!',
    path: siteRoutes.hallOfFame,
    keywords: [
      'galeria sław',
      'zdobywcy',
      'finishers',
      'rekordy',
      'statystyki',
      'zgłoszenie przejścia',
    ],
  }),

  badge: generatePageMetadata({
    title: 'Oficjalna Odznaka - Sudety Grand Trail',
    description:
      'Zdobądź oficjalną odznakę Sudety Grand Trail! Wyróżnienie dla wszystkich, którzy ukończyli pełne przejście 900 km przez 23 pasma górskie. Poznaj regulamin i dołącz do elitarnego grona zdobywców.',
    path: siteRoutes.badge,
    keywords: [
      'odznaka',
      'badge',
      'wyróżnienie',
      'regulamin',
      'zdobycie odznaki',
      'oficjalna odznaka',
      'nagroda',
      'medal',
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
