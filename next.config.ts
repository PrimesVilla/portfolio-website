import type { NextConfig } from "next";

// Check if we are in production mode
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use the sub-path in production
  basePath: isProd ? '/portfolio-website' : '',
  assetPrefix: isProd ? '/portfolio-website/' : '',
};

export default nextConfig;