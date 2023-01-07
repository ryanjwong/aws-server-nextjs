/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  
  images: {
    domains: ["prod-metadata.s3.amazonaws.com", "ethereum.org"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/route',
        destination: '/html/map.html',
      },
    ]
  }
};
