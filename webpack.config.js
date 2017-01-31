var autoprefixer = require('autoprefixer');
var scss = require('postcss-scss');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + '/build/js/',
    publicPath: '/build/js',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  postcss: () => {
    return [
      autoprefixer({browsers: ['last 1 version']})
    ]
  }
};
