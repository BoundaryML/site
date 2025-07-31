/** biome-ignore-all assist/source/useSortedKeys: <explanation> */
// @ts-check

/** biome-ignore-all assist/source/useSortedKeys: <explanation> */
// @ts-check
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Define __dirname for ES modules
 */
const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/playground',
        destination: 'https://promptfiddle.com/',
        permanent: false,
      },
      {
        source: '/chat',
        destination: 'https://dashboard.boundaryml.com/chat',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/yzaTpQ3tdT',
        permanent: true,
      },
    ];
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
      { hostname: 'img.youtube.com' },
      {
        protocol: 'https',
        hostname: 'mintlify.s3-us-west-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'my.spline.design',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
      },
    ],
  },
  experimental: {
    // optimizeCss: true,
    mdxRs: false,
    // Forward browser logs to the terminal for easier debugging
    browserDebugInfoInTerminal: true,

    // cacheLife: true,
    // cacheComponents: true,
    // Activate new client-side router improvements
    // clientSegmentCache: true, // will be renamed to cacheComponents in Next.js 16

    // Explore route composition and segment overrides via DevTools
    devtoolSegmentExplorer: true,
    // Enable new caching and pre-rendering behavior

    enablePrerenderSourceMaps: true,
    // Enable support for `global-not-found`, which allows you to more easily define a global 404 page.
    globalNotFound: true,
    scrollRestoration: true,
    // turbopackPersistentCaching: true,
    // useCache: true,
  },
  transpilePackages: ['unist-util-visit', 'mdast'],
  serverExternalPackages: ['shiki', '@boundaryml/baml'],

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

    // Disable CSS minification to avoid cssnano issues
    // if (!dev) {
    //   config.optimization.minimizer = config.optimization.minimizer.filter(
    //     (minimizer) => !minimizer.constructor.name.includes('CssMinimizer'),
    //   );
    // }

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
