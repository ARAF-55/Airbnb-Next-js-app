/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.digital.ink', 'media.timeout.com', 'a0.muscache.com', 'links.papareact.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.digital.ink',
        port: '',
        pathname: '/wp-content/uploads/airbnb_logo_detail.jpg'
      },
      {
        protocol: 'https',
        hostname: 'media.timeout.com',
        port: '',
        pathname: '/images/105476101/750/422/image.jpg'
      },
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        port: '',
        pathname: '*',
      },
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
        port: '',
        pathname: '*'
      }
    ]
  }
}

module.exports = nextConfig;
