import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    '@gentleduck/registry-ui-duckui',
    '@gentleduck/registry-examples-duckui',
    '@gentleduck/registry-blocks-duckui',
    '@gentleduck/variants',
    '@gentleduck/motion',
    '@gentleduck/primitives',
    '@gentleduck/libs',
    '@gentleduck/hooks',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zpgqhogoevbgpxustvmo.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'media.discordapp.net', // Add this line for Discord images
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Add this line for Discord images
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
}

export default nextConfig
