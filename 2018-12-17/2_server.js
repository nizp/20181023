/*
    引入http，就是到默认文件夹下找一个叫 http.js 的文件

    ***http是没有加路径的，因为它是自带的，如果要用一个自己定义的js文件
    那么基本上要写路径。

    require 引入 
        require(指定的文件) ,js文件不用写.js   require('http')

    module.exports  导出


    http.createServer((req,res)=>{
        // req.url 能够接收到浏览器发送的地址栏信息
        res.write('xxx');
        res.end();
    }).listen(80);

*/
    

    /*
        response  就是给客户端（浏览器）发送信息
        request   就是接收客户端（浏览器）发送的信息
        ?name=xyz
    */
    let http = require('http');
    http.createServer((request,response)=>{
        // console.log(request);
        let name = request.url.split('=')[1];
        switch(name){
            case 'xyz':
                response.write('{code:0,msg:chy}');
            break;
            case 'hongdan':
                response.write('{code:0,msg:cmy}');
            break;
            default:
                response.write('{code:1,msg:cyy}');
            break;
        }
        response.end();
    }).listen(80);



    // let obj = require('./3_module');






    /*
        语法就是js，处理数据的时候就直接用js的方法即可 
    */
    // console.log((''+ obj.a).charAt(1));
    // obj.arr.forEach(item=>{
    //     console.log(item);
    // });

// console.log(typeof typeof obj.fn);
// obj.fn();