/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
}

module.exports = nextConfig
