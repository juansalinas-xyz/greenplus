/** @type {import('next').NextConfig} */
const nextConfig = {
  // env: {
  //   API_KEY: "http://localhost:3000",
  // },
  // images: {
  //   remotePatterns: [{ hostname: "localhost:3000" }],
  // },
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
};

module.exports = nextConfig
