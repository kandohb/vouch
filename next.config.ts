import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'beuw6r12zz.ufs.sh',
			},
			{
				protocol: 'https',
				hostname: 'assets.aceternity.com',
			},
		],
	},
};

export default nextConfig;
