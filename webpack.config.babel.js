import path from 'path';

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
  devtool: 'source-map'
};
