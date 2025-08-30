/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/modernfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/modernfolio' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig