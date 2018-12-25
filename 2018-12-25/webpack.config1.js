let path = require('path');
module.exports = {
    mode:'development',//要配置mode:development 开发依赖 mode:production 生产依赖
    entry:'./c.js',//入口文件,解析某个（些）指定的文件，最终编译成我们浏览器可以使用的文件
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'c.js'
    },
   
}