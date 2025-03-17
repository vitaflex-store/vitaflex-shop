/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['de', 'es', 'en'],
    defaultLocale: 'de',
  },
};

module.exports = nextConfig;