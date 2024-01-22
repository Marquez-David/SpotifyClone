const nextConfig = {
  env: {
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mosaic.scdn.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '**',
      }
    ]
  }
}

module.exports = nextConfig
