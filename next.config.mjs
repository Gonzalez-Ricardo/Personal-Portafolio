/** @type {import('next').NextConfig} */
const nextConfig = {
     output: 'export',
     distDir: 'dist',
     images: {
          unoptimized: true,
     }
     //basePath: '/Personal-Portafolio',
     //assetPrefix: 'Personal-Portafolio/',
};

export default nextConfig;