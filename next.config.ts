import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  images: {
    domains: ['yumemi-frontend-engineer-codecheck-api.vercel.app'],
  },
  swcMinify: true,
  outputFileTracing: true,
};

export default nextConfig;
