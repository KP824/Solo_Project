const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    clean: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
    ],
  },

  devServer: {
    port: '3000',
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist')
    },
    open: true,
    hot: true,
    liveReload: true,
  },

};