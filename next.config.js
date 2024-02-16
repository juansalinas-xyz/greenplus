/** @type {import('next').NextConfig} */
const nextConfig = {
  // env: {
  //   API_KEY: "http://localhost:3000",
  // },
  images: { domains: ["lh3.googleusercontent.com"]},
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
};

module.exports = nextConfig
