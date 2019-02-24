const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true, // hot | hotOnly (no page refresh)
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // built-in
  ],
});
