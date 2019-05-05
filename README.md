 # creat-react-app 创建的项目  配置正向代理。
 1. 在package.json 中配置 proxy 选项


  // pack.json

  "proxy": "http://localhost:8080"
  
  只能配置为 字符串

  2. 可以使用 src/ setupProxy.js, 在这个文件中写 node.js 正向代理的配置

  const proxy = require('htpp-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api',{target:"http://localhost:8080"}))
}

 别名的配置
 const path = require('path');

  addWebpackAlias({
        '@': path.resolve(_dirname,'./src')
    })

# 支持less 的话

    1.yarn add less less-loader -D
    2.修改  config-overrides.js


 # react-redux

  推荐项目使用 redux 之外再结合 react-redux 一起使用

###  ui组件与容器组件   