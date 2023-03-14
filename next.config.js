/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'ru',
    locales: ['uz', 'ru']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shop.inweb.uz',
      },
    ],
  },

  env: {
    API: 'https://shop.inweb.uz/api/v2'
  }
}

module.exports = nextConfig
