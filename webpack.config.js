const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    publicPath: '/build/',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  module: {
    rules: [],
  },
  devServer: {
    public: 'localhost:4200',
    host: '0.0.0.0',
    contentBase: path.join(__dirname, '/'),
    inline: true,
    clientLogLevel: 'error',
    open: true,
    openPage: 'build/',
    compress: true,
    port: 4200,
  },
});
