const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/App.jsx',
    vendor: [
      'react', 'react-dom', 'react-router', 'react-bootstrap',
      'react-router-bootstrap', 'whatwg-fetch', 'babel-polyfill'
    ],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  devServer: {
    port: 8000,
    contentBase: 'public',
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
      },
    },
    historyApiFallback: true,
  },
  devtool: 'source-map',
};