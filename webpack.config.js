const { ProgressPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// Could use exports but we don't be more specific. Attributing to this link  https://www.sitepoint.com/understanding-module-exports-exports-node-js/
// This object is used ot override webpack 4's default behaviours
module.exports = ({ mode }) => ({
  mode,
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin(), // injects all output assets into the HTML file (<script />)
    new ProgressPlugin(),
  ],
});

/**
 * We can pass in env vars in to the config from the cli, hence, a function that returns an object
 */