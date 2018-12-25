const path = require('path');
const HWP = require('html-webpack-plugin'); // npm i html-webpack-plugin -D
/*
    entry:
        字符串   './c.js'
        数组     ['./c.js','./e.js']
        对象     {cc:'./c.js',ee:'./e.js'}
*/

let obj = {
    mode:'development',
    entry:['./c.js'],
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'wmm.js'
    },
    plugins:[
        new HWP({
           template:'./1_webpack前夕.html'
        })
    ]
}



module.exports = obj;



