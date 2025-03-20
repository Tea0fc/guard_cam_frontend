import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.mjs')
    }
  },
  webpackFinal(config) {
    const imageRule = config.module?.rules?.find(rule => {
      const test = (rule as { test: RegExp }).test

      if (!test) {
        return false
      }

      return test.test('.svg')
    }) as { [key: string]: any }

    imageRule.exclude = /\.svg$/

    config.module?.rules?.push({
      test: /\.svg$/,
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
    })

    config.module?.rules?.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve(
              __dirname,
              '../src/_app/styles/variables.scss'
            )
          }
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve(__dirname, '../src/_app/styles/mixins.scss')
          }
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve(__dirname, '../src/_app/styles/index.scss')
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    })

    return config
  },
  staticDirs: ['..\\public']
}
export default config
