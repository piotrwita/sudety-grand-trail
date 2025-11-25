/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
