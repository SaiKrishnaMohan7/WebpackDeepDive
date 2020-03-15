// Could use exports but we don't be more specific. Attributing to this link  https://www.sitepoint.com/understanding-module-exports-exports-node-js/
// This object is used ot override webpack 4's default behaviours
module.exports = ({ mode }) => ({
  mode,
  output: {
    filename: 'bundle.js'
  }
});

/**
 * We can pass in env vars in to the config from the cli, hence, a function that returns an object
 */