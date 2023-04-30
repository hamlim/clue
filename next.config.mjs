export default {
  experimental: {
    appDir: true,
  },
  modularizeImports: {
    '@ds-pack/components': {
      transform: '@ds-pack/components/dist/{{member}}',
      skipDefaultConversion: true,
    },
    '@ds-pack/daisyui': {
      transform: '@ds-pack/daisyui/dist/{{member}}',
      skipDefaultConversion: true,
    },
  },
}
