/** biome-ignore-all assist/source/useSortedKeys: <explanation> */
// @ts-check
import { dirname } from 'node:path'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Define __dirname for ES modules
 */
const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/playground',
        destination: 'https://promptfiddle.com/',
        permanent: false,
      },
    ]
  },
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'gravatar.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'cloudflare-ipfs.com' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'media.licdn.com' },
      { hostname: 'img.clerk.com' },
      { hostname: 'image.tmdb.org' },
      { hostname: 'picsum.photos' },
      { hostname: 'randomuser.me' },
      { hostname: 'cdn.brandfetch.io' },
    ],
  },
  experimental: {
    // optimizeCss: true,
    mdxRs: false,
  },
  transpilePackages: ['unist-util-visit', 'mdast'],
  serverExternalPackages: ['shiki', '@boundaryml/baml'],
  turbopack: {
    
  },

  webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
    config.module.rules.push({
      test: /\.node$/,
      use: [
        {
          loader: 'nextjs-node-loader',
          options: {
            outputPath: config.output.path,
          },
        },
      ],
    });

    // Updated JSONL loader configuration
    config.module.rules.push({
      test: /\.jsonl$/,
      use: [
        {
          loader: path.resolve(__dirname, './jsonl-loader.js'),
        },
      ],
    });

    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      syncWebAssembly: true,
      topLevelAwait: true,
      layers: true,
    };

    return config;
  },
};

export default nextConfig;
