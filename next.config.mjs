/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "header", key: "user-agent", value: "(curl|Wget)/.*" }],
        destination:
          "https://gist.githubusercontent.com/adambraimbridge/bebbcc0d1792c402521c0e4ba9a18165/raw/aptdate-install.sh",
        permanent: false,
      },
      {
        source: "/aptdate",
        destination:
          "https://gist.githubusercontent.com/adambraimbridge/bebbcc0d1792c402521c0e4ba9a18165/raw/aptdate-install.sh",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
