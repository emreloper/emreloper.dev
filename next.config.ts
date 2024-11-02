import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import rehypeHighlight from 'rehype-highlight';

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    reactCompiler: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
