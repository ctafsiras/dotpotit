/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['jspdf'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};

export default nextConfig;
