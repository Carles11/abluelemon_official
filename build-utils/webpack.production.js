const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const RobotstxtPlugin = require("robotstxt-webpack-plugin").default;
const SitemapPlugin = require('sitemap-webpack-plugin').default;


module.exports = dirname => ({
  output: {
    filename: '[hash].bundle.js',
    chunkFilename: '[id].[chunkhash].lazy.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new WebpackPwaManifest({
      name: 'ABlueLemon',
      short_name: 'aBlueLemon',
      description: 'A Blue Lemon Web App!',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      theme_color: '#262938',
      inject: true,
      icons: [
        {
          src: path.resolve('src/assets/image/icon.png'),
          sizes: [192, 512], // multiple sizes
        },
      ],
    }),
    new ImageminPlugin({
      pngquant: { quality: '75' },
      plugins: [imageminMozjpeg({ quality: '75' })],
    }),
    new RobotstxtPlugin({
      sitemap: "https://abluelemon.com/sitemap.xml",
      host: "https://abluelemon.com"
    }),
    new SitemapPlugin('https://abluelemon.com', ['/projects', '/contact'])

  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});
