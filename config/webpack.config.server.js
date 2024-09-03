const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpakc.config.base');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = merge(base, {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'server.js'
  },
  // externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法
  externals: [webpackNodeExternals()]
})
