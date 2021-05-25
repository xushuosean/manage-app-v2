module.exports = {
  devServer: {
    proxy: {
      '/ddimanage': {
        target: 'http://customer-dev.transtalent.cn/',
        changeOrigin: true
      }
    }
  }
}