import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  agentRules: false,
  experimental: {
    globalNotFound: true,
    agentUpgrade: 'security',
  },
};

export default nextConfig;
