/**
 * @Author: qinzhenxing
 * @Date:   2018-03-07T15:41:18+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-03-07T15:52:08+08:00
 */
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});
