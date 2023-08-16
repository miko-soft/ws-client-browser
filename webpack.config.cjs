/**
 * Run "npx webpack --config webpack-client.config.js" from the project's root folder.
 */
const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
  mode: 'production',
  entry: {
    'wsClientBrowser': './index.js',
    'wsClientBrowser.min': './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    clean: true // remove content of the directory defined in the output.path
  },

  devtool: 'source-map',
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        include: /\.min\.js$/,
        keepNames: true,
      }),
    ],
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: ['node_modules']
  }
};
