/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/small',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
