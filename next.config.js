/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    serverComponentsExternalPackages: ['socket.io-client'],
  },
  env: {
    OFFSTAR_MOBILE_API_KEY: process.env.OFFSTAR_MOBILE_API_KEY,
    OFFSTAR_DEVICE_ID: process.env.OFFSTAR_DEVICE_ID,
    OFFSTAR_BASE_URL: process.env.OFFSTAR_BASE_URL,
    IONET_API_KEY: process.env.IONET_API_KEY,
    OBL_API_KEY: process.env.OBL_API_KEY,
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: `${process.env.OFFSTAR_BASE_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;