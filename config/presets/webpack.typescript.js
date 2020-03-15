const tsLoaderPreset = () => ({
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      }
    ]
  }
});

module.exports = tsLoaderPreset;