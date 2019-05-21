// var env = require('./../env/index')
module.exports = {
  devServer: {
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    port: 8081,
    // 设置代理
    proxy: {
      // env
      '/api':{
        // 设置目标API地址
        target: 'http://127.0.0.1:7963',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点改为目标URL
        changeOrigin: false
      }
    }
  }
}