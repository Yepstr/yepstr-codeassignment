var webpack = require('webpack'),
  _ = require('lodash'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var client = {
  entry: {
    "client": "./src/client/app.js"
  },
  output: {
    path: __dirname + "/public/build/",
    filename: '[name].js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3003,
      proxy: 'localhost:3000',
      open: false
    }),
    new webpack.DefinePlugin({
      '__SERVER__': false,
      '__CLIENT__': true,
      'process.env': {
        // To enable production mode:
        // NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?'
    }),
  ],
  module: {
    loaders: [
     { test: /\.json$/, loader: "json-loader" },
      { test: /\.js?$/, loaders: [
        'babel?stage=0&optional[]=runtime',
      ], exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.less']
  },
  externals: {
    "config": "config"
  }
};

module.exports = client;
