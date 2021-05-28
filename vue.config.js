const path = require('path')

console.log(path.resolve(__dirname, './md-loader/index.js'))

module.exports = {
  devServer: {
    proxy: {
      '/ddimanage': {
        target: 'http://customer-dev.transtalent.cn/',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
          exclude: /node_modules/,
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader'
            },
            {
              loader: path.resolve(__dirname, './md-loader/index.js'),
            },
          ],
        },
      ]
    }
  }
}