const path = require('path');
const HWP = require('html-webpack-plugin');
const CWP = require('clean-webpack-plugin');

/*
    node v5.2.0以上才能使用npx 

    webpack 0 配置 npx webpack

    clean-webpack-plugin
*/

const obj = {
    /*
        开发环境: 
            mode:development
            安装包的时候使用npm i xx -D
            安装完成之后会在package.json中的devDependencies
            使用的一些构建工具比如glup、webpack这些只是在开发中使用的包，
            上线以后就和他们没关系了，所以将它写入devDependencies

        生产环境:
            mode:production
            安装包的时候使用npm i xx -S
            安装完成之后会在package.json中的dependencies
            比如我们写一个项目要依赖于jQuery，没有这个包的依赖运行就会报错，
            这时候就把这个依赖写入dependencies 

        卸载:
            npm uninstall xxx
    */
    mode:'production', //development
    entry:{
        index:'./aaa.js',
        // index2:'./2.js'
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].[hash:6].js'
    },
    plugins:[
        new CWP(['build']),//清除多余js文件，必须放在html的上面
        new HWP({
            template:'./index.html',
            // inject:false    //不放script标签
            // inject:'head'   //把script放到head中
            minify:{
                removeAttributeQuotes:true,//清除属性的引号
                collapseWhitespace:true //把html压缩成一行
            },
            hash:true,//给js文件加?dsua89a
            chunks:['index','index2'],
            title:'欢迎大家来到珠峰培训'
        })
    ]
}


module.exports = obj;
