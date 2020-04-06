class FirstWebpackPlugin {
  apply (compiler) {
    // You have to always got through compiler to reach (hook into) other parts/events
    compiler.hooks.done.tapAsync("FirstWebpackPlugin", (stats, cb) => {
      // Do something

      // always call this, async series, for webpack to continue
      cb();
    });

    // No cb here, it is a SyncHook, see source code
    compiler.hooks.compilation.tap("FirstWebpackPlugin", (compilation, params) => {
      compilation.hooks.seal.tap("FirstWebpackPlugin", () => {

      })
    });
  }
}

module.exports = FirstWebpackPlugin;
