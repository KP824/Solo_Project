const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: './frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    //clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, './frontend/public/index.html')
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
        test: /\.css?/, 
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: '8080',
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist')
    },
    proxy: { 
      '/api': {
        target: 'http://localhost:8000',
        secure: false,
      },
    },
    open: true,
    hot: true,
    liveReload: true,
  },

};