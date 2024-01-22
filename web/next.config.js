const nextConfig = {
  env: {
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
  images: {
    domains: ['mosaic.scdn.co', 'i.scdn.co'],
  },
}

module.exports = nextConfig
