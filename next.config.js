/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["tmdb.org", "image.tmdb.org", "themoviedb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
};
