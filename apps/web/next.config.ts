import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Generate a minimal deployment bundle for self-hosted environments.
  output: 'standalone',
};

export default nextConfig;
