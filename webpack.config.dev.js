const fs = require('fs')
const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  ...require('./webpack.config.prod'),
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    globalObject: 'self'
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true
  },
  watchOptions: {
    ignored: ['/node_modules/']
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      src: path.resolve(__dirname, 'src'),
      spec: path.resolve(__dirname, 'spec')
    }
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
      systemvars: true,
      safe: path.resolve(__dirname, '.env.example')
    }),
    new CleanPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      title: 'Frontend App',
      description: 'Frontend App',
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      loadingIcon: `<img id="loading" alt="loading" src="/images/logo.svg" />`,
      appleTouchIcon: `<link rel="apple-touch-icon" href="/images/logo_192.png" />`,
      manifest: `<link rel="manifest" href="/manifest.json" />`,
      preload: `<style>${fs.readFileSync(
        path.resolve(__dirname, 'public/preload.css'),
        'utf-8'
      )}</style>`
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/images/logo.svg'),
          to: 'images'
        },
        {
          from: path.resolve(__dirname, 'public/robots.txt')
        },
        {
          from: path.resolve(__dirname, 'public/manifest.json')
        },
        {
          from: path.resolve(__dirname, 'public/images'),
          to: 'images'
        },
        {
          from: path.resolve(__dirname, 'public/_redirects')
        }
      ]
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {}
}
