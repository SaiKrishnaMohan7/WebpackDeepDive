// Could use exports but we don't be more specific. Attributing to this link  https://www.sitepoint.com/understanding-module-exports-exports-node-js/
// This object is used ot override webpack 4's default behaviours
module.exports = {
  mode: 'none' // bundle it but don't wrap it in eval etc and go ahead with default behaviour
}