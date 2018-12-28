const path = require('path');
/* 
    -S  --save

    -D  --save-dev

    production/development

    在"build":"webpack -w"
        -w watch  监听

*/
const HWP = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ocawp = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const cwp = require('clean-webpack-plugin');
const obj = {
    mode:'production',
    entry:{
        'app':'./app.js'
    },
    output:{
        path:path.resolve(__dirname,'build/js'),
        filename:'[name].[hash:6].js',
        // publicPath:'/'
    },
    module:{
        rules:[
            {
                //在根目录下去找.
                test:/\.css$/,
                // use:[
                //     'style-loader',
                //     'css-loader'
                // ]
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader'
                ]
            },
            {
                test:/\.html$/,
                //在html中写img src="./xx.jpg"  才有效  
                use:'html-withimg-loader'
            },
            {
                test:/\.(jpg|png|bmp|gif|svg|ttf|woff|woff2|eot)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:4096,
                            // outputPath:'images',
                            // publicPath:'/images'
                            outputPath:'../images',
                            publicPath:'./images'
                        }
                    }
                ]
            }
        ]
    },
    // optimization: {
    //     minimizer: [
    //       new UglifyJsPlugin({
    //             parallel:true//启动并进行压缩
    //       }),
    //       new ocawp({}),
    //     ],
    //   },
    plugins:[
        new ocawp({}),
        
        new HWP({
            template:'./index.html',
            filename:'../index.html',
            minify:{
                collapseWhitespace:true,
                removeAttributeQuotes:true,
            }
        }),
        new cwp(['build']),
        new MiniCssExtractPlugin({
            filename:'../css/[name].css'
        })
    ]
}

module.exports = obj;