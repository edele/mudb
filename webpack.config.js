/*global module, process, require, __dirname*/

'use strict'

const webpack = require('webpack')
const path = require('path')
const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  context: path.resolve(__dirname, 'resources/assets/js'),

  entry: {
    artists: 'artists',
    common: 'common'
  },

  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].js',
    library: '[name]'
  },

  resolve: {
    root: path.resolve(__dirname, 'resources/assets/js')
  },

  watch: NODE_ENV === 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV === 'development' ? 'eval' : null,

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ],

  module: {
    loaders: [
      {
        test:   /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  eslint: {
    configFile: path.resolve(__dirname, '.eslintrc')
  }
}

if (NODE_ENV === 'production') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  )
}
