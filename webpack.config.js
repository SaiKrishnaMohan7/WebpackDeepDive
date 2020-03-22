const { ProgressPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const presetConfig = require('./config/loadPreset');

const modeConfig = mode => require(`./config/webpack.${mode}`)(mode);

const webpackBaseConfig = {
  module: {
    rules: [
      {
        test: /\.jpe?g/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000 // only if the image is 5 Kb include it inline or emit to the dist dir and include a hashed url (which is handled by file-loader which is called by url-loader)
            }
          }] // good for image assets
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin(), // injects all output assets into the HTML file (<script />)
    new ProgressPlugin(),
  ],
}
// Could use exports but we want to be more specific. Attributing to this link  https://www.sitepoint.com/understanding-module-exports-exports-node-js/
// This object is used ot override webpack 4's default behaviours
const webpackConfig = ({ mode, presets } = { mode: 'production', presets: [] }) =>
merge({ mode, ...webpackBaseConfig }, modeConfig(mode), presetConfig({ mode, presets }));

module.exports = webpackConfig;
/**
 * We can pass in env vars in to the config from the cli, hence, a function that returns an object
 */