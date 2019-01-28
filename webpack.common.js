const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Utils: path.resolve(__dirname, 'src/utilities'),
    },
    mainFiles: ['index'],
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader?name=[name].[ext]', // default
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      // required:
      inject: false,
      template: require('html-webpack-template'),
      // optional
      appMountId: 'nrx-app',
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'description',
          content: 'A better app.',
        },
      ],
      links: [
        'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400&subset=latin-ext',
        {
          href: 'favicon.ico',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      scripts: [],
      title: 'Webpack Project',
    }),
  ],
};
