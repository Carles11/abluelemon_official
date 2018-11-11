const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const presetConfig = require("./build-utils/loadPresets");


module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode, 
      output: {
        filename: 'bundle.js'
      },
      module: {
        rules: [
          { 
            test: /\.(js|jsx)$/, 
            use: 'babel-loader', 
            exclude: '/node_modules/' 
          },
          { 
            test:/\.jpe?g$/, 
            use: [
              { loader: "url-loader", options: { limit: 5000 } }]
          }
        ],
      },
      plugins: [
        new HtmlWebpackPlugin(),
        new webpack.ProgressPlugin(),
      ],
      resolve: {
        extensions: ['.js', '.jsx'],
      }
    },
    modeConfig(mode),
    presetConfig({ mode, presets: presets || [] })
  )
}