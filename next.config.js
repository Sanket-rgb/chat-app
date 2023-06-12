/** @type {import('next').NextConfig} */
require("dotenv").config()
const nextConfig = {
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
