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

  ui组件  他只负责组件的渲染，不参与仓库的操作 （傻瓜组件）
  容器组件 他只负责数据的渲染 （与仓库的沟通），不涉及UI的展示

  UI组件的数据都有容器组件通过prop传递过来，他没有state，数据来源都是props

  ### react-redux
  他能帮我们主动创建出某个UI组件的容器组件，并且在他身上能很好的去使用cangk仓库的数据

  使用步骤
  1. 安装 yarn add react-redux
  2.在项目的最外层使用  组件将store 全局传递下去
  3. 将容器组件删了，只留UI组件，容器组件可以通过react-redux 主动创建出来

  mapStateToProps
      返回一个对象 ，返回的内容就是 UI 组件props 的内容
      注意 当不能调用 mapDispatchToProps 里面的方法 所以只能使用原始的方法
      store.dispatch(pageBookAction())

  mapDispatchToProps
     返回一个对象 ，返回的内容每个key都是一个方法，UI 组件可以通过props 的内容