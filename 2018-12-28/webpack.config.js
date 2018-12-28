const path = require('path');
/* 
    -S  --save

    -D  --save-dev

    production/development

    在"build":"webpack -w"
        -w watch  监听

    

*/
const HWP = require('html-webpack-plugin');
const webpack = require('webpack');
const obj = {
    devServer:{
        host:'localhost',
        port: 80,
        open:true,
        compress: true,
        hot:true
    },
    mode:'development',
    entry:{
        'app':'./app.js'
    },
    output:{
        path:path.resolve(__dirname,'build/js'),
        filename:'[name].[hash:6].js',
    },
    module:{
        rules:[
            {
                //在根目录下去找.
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(jpg|png|bmp|gif|svg|ttf|woff|woff2|eot)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:4096,
                            // outputPath:'../images',
                            // publicPath:'/images'
                        }
                    }
                ]
            }
           
        ]
    },
    plugins:[
        new HWP({
            template:'./index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = obj;