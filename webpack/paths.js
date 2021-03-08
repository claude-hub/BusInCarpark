const path = require('path')

module.exports = {
  // 源文件
  src: path.resolve(__dirname, '../src'),

  // 打包目录
  build: path.resolve(__dirname, '../dist'),

  // 静态文件目录
  public: path.resolve(__dirname, '../public'),
}
