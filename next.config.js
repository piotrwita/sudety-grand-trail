/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [512, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'poltrax.live',
        pathname: '/**',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/szczyty',
        destination: '/mountains',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
