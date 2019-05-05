
 const { override, fixBabelImports,addWebpackAlias,addLessLoader } = require('customize-cra');
const path = require('path');

 module.exports = override(
     // antd 的按需加载的配置
     fixBabelImports('import', {
      libraryName: 'antd',
       libraryDirectory: 'es',
       style: 'css',
    }),
    // 别名的配置
    addWebpackAlias({
        '@': path.resolve(__dirname,'./src')
    }),
    // less的配置
    addLessLoader()
   );