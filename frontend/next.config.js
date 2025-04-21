/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'localhost',
      'bilalli-blendz.vercel.app',
      'lwwjovwktovzisfijkzw.supabase.co'
    ],
  },
  // Remove standalone output for Vercel deployment
  // output: 'standalone',
}

module.exports = nextConfig 