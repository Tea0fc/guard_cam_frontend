/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: 'guard_cam_frontend/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },

  eslint: {
    ignoreDuringBuilds: true
  },

  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "src/_app/styles/variables.scss"; @import "src/_app/styles/mixins.scss"; @import "src/_app/styles/fonts/fonts.scss";`
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },

  async redirects() {
    return [
      {
        source: '/storybook',
        destination: '/storybook/index.html',
        permanent: true
      }
    ]
  }
}

export default nextConfig
