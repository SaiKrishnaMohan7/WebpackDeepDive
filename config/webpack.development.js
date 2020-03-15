module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'] // css-loader deosn't add it to a style tag instead it creates an array that can be consumed by style-loader
      }
    ]
  }
});