module.exports = {
  plugins: [
    require('autoprefixer')({browsers: ['last 1 version']}),
    require('postcss-scss')
  ]
}
