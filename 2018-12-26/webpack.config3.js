const path = require('path');
const HWP = require('html-webpack-plugin');
const CWP = require('clean-webpack-plugin');
const webpack = require('webpack'); //1.5

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

        只要是在开发中，都要使用devserver
            1.安装webpack-dev-server  
            2.配置devserver 

        通过使用不同的Loader，Webpack可以要把不同的文件都转成JS文件,
        比如CSS、ES6/7、JSX等。

        test：匹配处理文件的扩展名的正则表达式  /\.css$/ /\.js$/ /\.less$/...
        use：loader名称，就是你要使用模块的名称
        include/exclude:手动指定必须处理的文件夹或屏蔽不需要处理的文件夹
        query：为loaders提供额外的设置选项


        热更新:
            1.devServer下设置hot为true
            2.引入webpack
            3.到plugins下 new webpack.HotModuleReplacementPlugin()
            4.在入口文件中写
                if(module.hot){
                    module.hot.accept()
                }

    */
    mode:'production', //development  production
    entry:{
        index:'./aaa.js',
        // index2:'./2.js'
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].[hash:6].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //先放style-loader，再放css-loader
                use:['style-loader','css-loader'],
            }
        ]
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
        }),
        new webpack.HotModuleReplacementPlugin()//1.8
    ],
    devServer:{
        // contentBase:path.resolve(__dirname,'build'),// 配置开发服务运行时的文件根目录
        host:'localhost',// 开发服务器监听的主机地址
        compress:true,   // 开发服务器是否启动gzip等压缩
        port:80,
        open: true,
        hot: true //1   
    }
}


module.exports = obj;
