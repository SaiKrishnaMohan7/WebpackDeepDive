const CompressWebpackPlugin = require('compression-webpack-plugin');

const compressPreset = () => ({
  plugins: [new CompressWebpackPlugin()]
});

module.exports = compressPreset;