const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const pages = [
  { folder: 'index', name: 'index' },
  { folder: 'example', name: 'example' },
];

const plugins = [];
pages.forEach((e) => {
  plugins.push(
    new HtmlWebpackPlugin({
      filename: `./${e.name}.html`,
      template: `./src/pages/${e.folder}/${e.name}.pug`,
      inject: true,
      chunks: [e.name],
    }),
  );
});
const entries = pages.reduce((obj, curEntry) => {
  obj[curEntry.name] = `./src/pages/${curEntry.folder}/${curEntry.name}.js`;
  return obj;
}, {});

plugins.push(new MiniCssExtractPlugin({
  filename: '[name].css',
}));

module.exports = {
  entry: entries,

  output: {
    path: path.resolve(__dirname, 'bandle'),
    filename: '[name].js?v=[hash]',
  },

  plugins: plugins,

  module: {
    rules: [
      {
        test: /\.pug$/,
        loaders: [
          {
            loader: 'pug-loader',
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg|png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
