const path = require('path');
const HWP = require('html-webpack-plugin'); // npm i html-webpack-plugin -D
/*
    entry:
        字符串   './c.js'
        数组     ['./c.js','./e.js']
        对象     {cc:'./c.js',ee:'./e.js'}

    入口、出口、模式(mode)、插件、loader
*/
let obj = {
    mode:'development',
    entry:{
        cc:'./c.js',
        ee:'./e.js'
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].[hash:5].js'
    },
    plugins:[
        new HWP({
           template:'./1_webpack前夕.html',
           chunks:['cc','ee'],
           filename:'index.html',
           minify: {
                removeAttributeQuotes:true,//去掉属性的引号
                collapseWhitespace:true //html压缩一行
            },
        })
    ]
}



module.exports = obj;



