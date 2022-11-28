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
  staticDirs: [
    '../sb-assets',
    {from: './../../themes/base-ui/dist/', to: '/base-ui'},
    {from: './../../themes/apple-ui/dist/', to: '/apple-ui'},
    // {from: './../../packages/asm-core/dist/esm/inputs', to: '/datepicker'}
  ],
  stories: ['../src/**/**.stories.tsx'],
  addons: ['@storybook/addon-controls/register', "storybook-stylesheet-toggle", '@storybook/preset-scss'],
  webpackFinal: async (config, { configType }) => {
    // get index of css rule
    const ruleCssIndex = config.module.rules.findIndex(
      (rule) => rule.test.toString() === "/\\.css$/"
    );

    // map over the 'use' array of the css rule and set the 'module' option to true
    config.module.rules[ruleCssIndex].use.map((item) => {
      if (item.loader && item.loader.includes("/css-loader/")) {
        item.options.modules = {
          mode: "local",
          localIdentName:
            configType === "PRODUCTION"
              ? "[local]__[hash:base64:5]"
              : "[name]__[local]__[hash:base64:5]",
        };
      }

      return item;
    });

    return config;
  },
}
