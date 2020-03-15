const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const bundleAnalyzerPreset = () => ({
  plugins: [new BundleAnalyzerPlugin()]
});

module.exports = bundleAnalyzerPreset;