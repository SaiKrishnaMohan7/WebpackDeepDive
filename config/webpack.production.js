const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  output: {
    filename: 'bundle.js', // chunkhash is special string interpolation provided by webpack out of the box, cache busting can be used and clean webpack loader (plugin?) use
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin() // Attaches a style tag in non-blocking fashion as opposed to style-loader which is synchronous and waits for JS to add the style tag
  ]
});