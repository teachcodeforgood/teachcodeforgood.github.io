const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');

const devMode = process.env.NODE_ENV !== 'production';

/*
  This rule applies to all SCSS files.
  It adds vendor prefixes and compiles to CSS.
  It also generates source maps during development.
*/

const sassRule = {
  test: /\.(scss|css)$/,
  use: [
    {
      loader: 'style-loader',
    },
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: devMode,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        autoprefixer: {
          browsers: ['last 2 versions'],
        },
        sourceMap: devMode,
        plugins: () => [
          autoprefixer,
        ],
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: devMode,
      },
    },
  ],
};

/*
  Transpiles .pug to .html
*/

const pugRule = {
  test: /\.pug$/,
  use: [
    'html-loader?attrs=false',
    'pug-html-loader',
  ],
};

/*
  This is needed to minify HTML code for production.
*/

const htmlPluginConfig = {
  template: './src/index.pug',
  filename: 'index.html',
  minify: !devMode && {
    html5: true,
    collapseWhitespace: true,
    caseSensitive: true,
    removeComments: true,
  },
};

/*
  Minifies CSS for production. It removes all comments.
*/

const cssOptimizeConfig = {
  cssProcessorPluginOptions: {
    preset: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  },
};

/*
  Generates the final CSS file.
*/

const cssPluginConfig = {
  filename: '[name]-styles.css',
  chunkFilename: '[id].css',
};

/*
  Generates source maps for JS files.
  It also removes comments and minifies the code.
  This is needed because uglifyjs has been deprecated.
  TODO: Figure out why dev dependencies show up in minified code.
*/

const jsOptimizeConfig = {
  sourceMap: devMode,
  parallel: true,
  terserOptions: {
    output: {
      comments: false,
    },
  },
};

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  devtool: devMode && 'source-map',
  module: {
    rules: [
      sassRule,
      pugRule,
    ],
  },
  optimization: {
    minimize: !devMode,
    minimizer: [
      new TerserPlugin(jsOptimizeConfig),
      new OptimizeCSSAssetsPlugin(cssOptimizeConfig),
    ],
  },
  plugins: [
    new HTMLWebpackPlugin(htmlPluginConfig),
    new MiniCssExtractPlugin(cssPluginConfig),
  ],
};
