let http = require('http');
let qs = require('querystring');
//创建一个88的端口服务
http.createServer((req,res)=>{
    /*
        req.url
            ?user=xyf&pw=12345  字段 user

        fs 模块，这个模块专门是用来操作（增删改查）文件的

    */

    let url = req.url.split('?');
    let obj = qs.parse(url[1]);

    res.write('hehe');
    res.end();

    // console.log('接收到请求');
    // console.log(req.url);
}).listen(80); //listen(80)监听80端口