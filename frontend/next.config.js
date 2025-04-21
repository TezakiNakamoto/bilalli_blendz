/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'localhost',
      'bilalli-blendz.vercel.app'
    ],
  },
  // Enable static exports for better performance
  output: 'standalone',
}

module.exports = nextConfig 