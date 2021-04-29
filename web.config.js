const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: './index.js',
  output: {
    filename: 'webdev.web.js',
  },
  mode: 'none',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/'),
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
};