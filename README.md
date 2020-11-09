# webpack-5-circular

This demo repository reproduces Webpack 5 issue with using circular dependencies: https://github.com/webpack/webpack/issues/11958

## How to reproduce

1. Install dependencies:

   ```
   yarn
   ```
   
2. Build:

   ```
   yarn dist
   ```
   
3. Run:

   ```
   yarn start
   ```
   
   An error will occur at runtime:
   
   ```
   /home/ezze/Development/webpack-5-circular/dist/main.js:35
   /* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
                                           ^
   
   ReferenceError: __WEBPACK_DEFAULT_EXPORT__ is not defined
       at Module.default (/home/ezze/Development/webpack-5-circular/dist/main.js:35:41)
       at Object../models/JobProductOutput.js (/home/ezze/Development/webpack-5-circular/dist/main.js:93:48)
       at __webpack_require__ (/home/ezze/Development/webpack-5-circular/dist/main.js:171:41)
       at Object../models/Job.js (/home/ezze/Development/webpack-5-circular/dist/main.js:38:75)
       at __webpack_require__ (/home/ezze/Development/webpack-5-circular/dist/main.js:171:41)
       at Object../index.js (/home/ezze/Development/webpack-5-circular/dist/main.js:16:69)
       at __webpack_require__ (/home/ezze/Development/webpack-5-circular/dist/main.js:171:41)
       at /home/ezze/Development/webpack-5-circular/dist/main.js:212:18
       at Object.<anonymous> (/home/ezze/Development/webpack-5-circular/dist/main.js:213:12)
       at Module._compile (internal/modules/cjs/loader.js:778:30)
   error Command failed with exit code 1.
   ```
   
## Expectations

Built code must run without any errors as it was with Webpack 4. In order to see previous behavior with this repo just install Webpack 4:

```
yarn add webpack@^4.0.0
```
