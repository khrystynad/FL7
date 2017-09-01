const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./src/js/app.ts',
    './src/scss/main.scss'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
            {
              test: /\.ts$/,
              enforce: 'pre',
              loader: 'tslint-loader',
              options: {
                configuration: {
                  rules: {
                    quotemark: [true, 'double']
                  }
                }
              }
            },
            { 
              test: /\.tsx?$/,
              loader: 'ts-loader' 
            },
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc.json',
      context: 'src/scss',
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
    }),
    new CleanWebpackPlugin(['build'], {
      verbose: true,
      watch: false
    }),
    new HtmlWebpackPlugin()
  ]
};