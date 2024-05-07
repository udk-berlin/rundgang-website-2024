import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['content.udk-berlin.de'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content.udk-berlin.de',
        port: '',
        pathname: '/_matrix/media/r0/**',
      },
    ],
  },
};
export default withNextIntl(nextConfig);
