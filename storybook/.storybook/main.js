const path = require('path');
module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['../sb-assets', '../src/styles'],
  stories: ['../src/**/**.stories.tsx'],
  addons: ['@storybook/addon-controls/register'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../sb-assets')],
    });

    return config;
  }
}
