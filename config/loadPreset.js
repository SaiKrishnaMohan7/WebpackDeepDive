const merge = require('webpack-merge');

const applyPresets = env => {
  const { presets } = env;
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(preset => {
    if(preset) {
      return require(`./presets/webpack.${preset}`)(env);
    }
    return [];
  });

  return merge({}, ...mergedConfigs);
};

module.exports = applyPresets;