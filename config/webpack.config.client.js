const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpakc.config.base');

const config = merge(base, {
  // 由于 JavaScript 既可以编写服务端代码也可以编写浏览器代码，所以 webpack 提供了多种部署 target
  target: 'web',
  entry: '/src/client/index.js',
  output: {
    filename: 'client.js',
    path: path.resolve('public')
  },
});

module.exports = config;