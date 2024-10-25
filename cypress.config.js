const { defineConfig } = require("cypress");
const webpackConfig = require("./config/webpack.cypress.config");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig,
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);

      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

      return config;
    },
  },

  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
