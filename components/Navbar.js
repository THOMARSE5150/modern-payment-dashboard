/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_AUTHOR: 'THOMARSE5150',
    NEXT_PUBLIC_BUILD_TIME: '2025-07-15 18:43:24',
  },
  // Optimized for Railway deployment
  experimental: {
    // Enable if you need serverless functions
    serverActions: false,
    // Reduced bundle size
    optimizeCss: true,
    // Improved memory usage
    memoryBasedWorkersCount: true
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ],
      },
    ]
  }
}

module.exports = nextConfig