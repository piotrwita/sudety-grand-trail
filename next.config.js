/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd34-a.sdn.cz',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

