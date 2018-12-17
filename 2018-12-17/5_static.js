let http = require('http');
let fs = require('fs'); 
http.createServer((req,res)=>{
    /*
        是请求接口还是请求页面
        /1.html
    */
    let url = req.url;
    if(url.includes('?')){ //走的接口
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('后天去玩');
        res.end();
    }else{
        //静态文件
        //拼地址
        if(url === '/')url = '/index.html';
        fs.readFile('./www' + url,(err,data)=>{
            if(err){ //没文件
                let data = fs.readFileSync('./www/404.html');
                res.write(data);
            }else{
                //找到文件发送给前端
                res.write(data);
            }
            res.end();
        });
    }
    
}).listen(80); //listen(80)监听80端口