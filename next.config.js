/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_URL: "https://expenses-api-tk6s.onrender.com",
  },
};

module.exports = nextConfig;
