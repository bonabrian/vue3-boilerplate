const CompressionPlugin = require('compression-webpack-plugin');

const time = new Date().getTime();

module.exports = {
  chainWebpack(config) {
    // remove prefetch
    config.plugins.delete('prefetch');

    // set webpack compression plugin
    config.plugin('CompressionPlugin').use(CompressionPlugin);

    // it can be accessed in index.html to inject the correct title.
    config.set('name', 'vue3-boilerplate');

    // set up all the aliases we use in our app.
    /* eslint-disable global-require */
    config.resolve.alias.clear().merge(require('./aliases.config').webpack);
    /* eslint-enable global-require */

    // don't allow importing .vue files without the extension, as
    // it's necessary for some Vetur autocompletions.
    config.resolve.extensions.delete('.vue');

    // only enable performance hints for production builds,
    // outside of tests.
    config.performance.hints(
      process.env.NODE_ENV === 'production' && !process.env.VUE_APP_TEST && 'warning'
    );
  },
  configureWebpack: {
    output: {
      filename: `assets/${time}.[name].js`,
      chunkFilename: 'assets/chunk.[name].[contenthash].js'
    }
  },
  css: {
    // enable css source maps.
    sourceMap: true,
    requireModuleExtension: true,
    loaderOptions: {
      scss: {
        additionalData: '@import \'~@scss/utilities/all\';'
      }
    }
  },
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: __dirname,
    overlay: true,
    historyApiFallback: true
  }
};
