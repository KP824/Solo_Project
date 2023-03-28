const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: './frontend/src/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname,  './frontend/public/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.css$/, 
        exclude: /node_modules/,
        use: 'css-loader',
      },
    ],
  },

  devServer: {
    host: 'localhost',
    port: '8080',
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist')
    },
    proxy: { 
      '/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
    open: true,
    hot: true,
    liveReload: true,
  },

};