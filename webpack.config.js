var autoprefixer = require('autoprefixer');
var scss = require('postcss-scss');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + '/build/',
    publicPath: '/build/',
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
        loader: "babel-loader"
      }
    ]
  },
  postcss: () => {
    return [
      autoprefixer({browsers: ['last 1 version']})
    ]
  }
};
