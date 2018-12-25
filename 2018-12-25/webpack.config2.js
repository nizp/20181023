let path = require('path');
/* 
    
    下载、引入html-webpack-plugin的插件
*/
const HWP  = require('html-webpack-plugin');
module.exports = {
    mode:'development',//要配置mode:development 开发依赖 mode:production 生产依赖
    entry:{
        c:'./c.js',
        // e:'./e.js'
    },//入口文件,解析某个（些）指定的文件，最终编译成我们浏览器可以使用的文件
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'hehe.js'
    },
    plugins:[
        new HWP({
            filename:'index.html', //编译后的文件名
            template: './1_webpack前夕.html' //以哪个html为模板
        })
    ]
   
}