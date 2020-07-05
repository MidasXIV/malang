import { resolve as _resolve } from 'path';
import webpack from 'webpack';

// import Plugins
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import BabelMinifyPlugin from "babel-minify-webpack-plugin";

const ROOT = _resolve(__dirname, 'src');
const DESTINATION = _resolve(__dirname, 'public');
const NODE_MODULES = _resolve(__dirname, 'node_modules');

const config: webpack.Configuration = {
  mode: 'production',

  entry: {
    'main': './src/public/js/main.ts'
  },

  output: {
    filename: 'js/[name].bundle.js',
    path: DESTINATION
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      ROOT,
      NODE_MODULES
    ]
  },

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.ts$/,
      include: ROOT,
      loader: 'eslint-loader',
      options: {
        cache: true,
        emitError: true
      },
    },
    /****************
     * LOADERS
     *****************/

    {
      // Include ts, tsx, js, and jsx files.
      test: /\.(ts|js)x?$/,
      include: ROOT,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.scss$/,
      include: ROOT,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '/public/path/to/',
          },
        },
        { loader: "css-loader", },
        { loader: "sass-loader" }
      ]
    },

    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({ filename: "css/[name].bundle.css" }),
    new BabelMinifyPlugin()
  ]
}

export default config;