/**
 * @Author: qinzhenxing
 * @Date:   2018-03-07T15:36:47+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-03-07T16:53:09+08:00
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // html模板，自动引入所有资源
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理 /dist 文件夹

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
