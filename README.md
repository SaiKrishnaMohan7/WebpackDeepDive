# Webpack - A tool to share code, manage dependencies and lessen pain

Webpack is a build tool for web applications and much more!

- npm adds a `bin` folder to `node_modules` that contains all the executbales of your dependencies
- `script` key in `package.json` allows to use the binaries (executables) from ^ in the scope of your project by hositing them in to the scope of your project

- Webpack has a `watch` mode. `npm run webpack -- --mode development --watch`.
- Webpack dependency graph:
  - ![WebpackDependencyGraph](./img/WebpackDependencyGraph.png)

## The built file

When we first run webpack with a webpack.config.js (mode: 'none') with no replacement to the default behaviour, terminal output looks like this:

-![WebpackConfigModeNone](./img/WebpackConfigModeNone.png)

- On cheking the built file, as of now `main.js`, we see an IIFE and as you scroll down close to where an array (of IIFEs) is passed into this IIFE and notice a `0`, `1`, `2`, `3`, `4` (in the part decorated with `/****/` and see `/* 0 */`) which correspond to the treminal output which corresponds to the modules!

## Core concepts of Webpack

Webpack builds a graph with all your dependencies

- Entry
  - Tells webpack what you want to include in the browser and works together with the `output` property
  - Webpack starts building the graph from here

- Output
  - Tells webpack how to modify files before its added to dependency graph

- Loaders and Rules
  - Loaders are also javascript modules (functions) that takes the source file, and returns it in a [modified] state
    - Loader is a fucntion that takes in a source and returns a new source
    - Loaders execute from _right to left_
  - Rules, ruleSets (`rules` property), tells webpack which loader to use from node_modules

  ```javascript
    module: {
  rules: [
    {test: /\.ts$/, use: ‘ts-loader’},
    {test: /\.js$/, use: ‘babel-loader’},
    {test: /\.css$/, use: ‘css-loader’},
],
}```
[Source](https://docs.google.com/presentation/d/1hFtMCMo62DgOIc-9OwgaVwPZHwv1cgMELArHcMbXlSI/edit#slide=id.g15e96ef847_0_407)

```javascript
    {
      test: regex, // instructs compiler which files to run against loader
      use: (Array|String|Function) // the loader, can be an array
      include: RegExp[], // which folders to include
      exclude: RegExp[], // which folders to exclude
      issuer: (RegExp|String)[],
      enforce: “pre”|”post” // tells webpack to run this rule before or after other rules
    },
```

- Plugins
  - An instance/A JS object with an `apply` property on the prototype chain (instantiable)
  - Plugins let you do things that you can't do with loaders
  - Allows you to hook into the entire webpack lifecycle of events
  - Basically, you can write plugins that listen to a certain event in the webpack lifecyle and react to it/handle it

## Webpack Dev Server

Builds bundle.js in memory and hands it over to express via a web socket and hence live reload


## Code Coverage

Chrome dev tools, Cmd + Shift + P, 'Coverage' and relaod the page. [Coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage)

## Performance Goals

- <= 200kb - Initial JS code
- <= 100kb - Initial CSS
- 90% code coverage

## Code Splitting

Separate chunks of JS that will be loaded only asynchronously. Created at build time.
