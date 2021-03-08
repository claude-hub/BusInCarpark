const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const paths = require('./paths')

module.exports = {
  entry: [paths.src + '/index.js'],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    // 清空打包目录
    new CleanWebpackPlugin(),

    // 把public目录下的文件copy到assets下
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public + '/images',
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'Bus In Carpark',
      favicon: paths.public + '/favicon.ico',
      template: paths.public + '/index.html',
      filename: 'index.html',
    }),

    new ESLintPlugin({
      files: ['.', 'src', 'webpack'],
      formatter: 'table',
    }),
    new PrettierPlugin(),
  ],

  resolve: {
    alias: {
      '@': paths.src,
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
}
