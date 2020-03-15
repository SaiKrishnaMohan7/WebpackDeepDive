module.exports = () => ({
  output: {
    filename: '[chunkhash].js', // chunkhash is special string interpolation provided by webpack out of the box
  }
});