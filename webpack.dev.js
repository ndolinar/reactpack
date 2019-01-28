const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  // optimization: {
  // usedExports: true,
  // },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true, // hot | hotOnly (no page refresh)
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.s?css$/,
  //       use: [
  //         // MiniCssExtractPlugin.loader,
  //         'style-loader',
  //         'css-loader',
  //         'postcss-loader',
  //         'sass-loader',
  //       ],
  //     },
  //   ],
  // },
  plugins: [
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
    new webpack.HotModuleReplacementPlugin(), // built-in
  ],
});
