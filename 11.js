/**
 * @Author: qinzhenxing
 * @Date:   2018-03-06T16:53:09+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-03-07T15:16:39+08:00
 */
const path = require('path'); // 资源路径
const HtmlWebpackPlugin = require('html-webpack-plugin');  // html模板，自动引入所有资源
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理 /dist 文件夹
const MainfestPlugin = require('webpack-manifest-plugin'); // 模块映射到输出 bundle 的过程
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');  // 删除未引用代码的压缩工具

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
      {test: /\.(csv|tsv)$/, use: ['csv-loader']},
      {test: /\.xml$/, use: ['xml-loader']},
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MainfestPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin()
  ]
};
