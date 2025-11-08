import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sudety Grand Trail',
    short_name: 'SGT',
    description:
      'Wyrusz w niezapomnianą podróż przez najpiękniejsze szlaki Sudetów. 900 km przez 24 pasma górskie - odkryj magię Korony Sudetów.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a3a2e',
    theme_color: '#ff6b35',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
