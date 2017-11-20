const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const nodeExternals = require('webpack-node-externals');
const flexbugs = require('postcss-flexbugs-fixes');
const merge = require('webpack-merge');

const libraryName = 'react-list-items';
const outputJsFile = `${libraryName}.js`;

const pkg = require('./package.json');
const getBaseConfiguration = require('./webpack/base.config.js');

const params = {
  root: __dirname,
  buildPath: 'lib',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputJsFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  entry: {
    app: path.join(__dirname, '/src/index.js'),
    vendors: Object.keys(pkg.dependencies).filter(name => (name !== 'font-awesome')),
  },
};

const config = merge(getBaseConfiguration(params), {
  devtool: 'source-map',
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: [
            'transform-decorators-legacy',
          ],
        },
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg($|\?)/,
        loader: 'url-loader',
        include: /node_modules/,
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.ico$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.svg$/,
        loaders: ['babel', 'react-svg'],
        exclude: /node_modules/,
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader?variable=data',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
              minimize: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
              minimize: true,
            },
          },
        ],
      },
    ],
  },
});

module.exports = config;
