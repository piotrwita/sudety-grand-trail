/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [512, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd34-a.sdn.cz',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
