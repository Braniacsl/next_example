import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: '/public',
  experimental: {
    ppr: 'incremental'
  }
};

export default nextConfig;
