import path from 'path';

import webpack from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';

import packageJson from './package';

export default {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  context: path.resolve(__dirname, 'src'),
  entry: {
    'main': ['core-js/stable', 'regenerator-runtime/runtime', './index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  resolve: {
    symlinks: false
  },
  externals: [
    webpackNodeExternals()
  ],
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      APP_NAME: JSON.stringify(packageJson.name),
      APP_VERSION: JSON.stringify(packageJson.version)
    })
  ],
  devtool: 'source-map'
};
