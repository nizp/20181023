const http = require('http');
const fs = require('fs');
const qs = require('querystring'); //a=b&c=d -> {a:b,c:d}
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    let url = req.url;
    /*
        rm:路径
        http://localhost?rm=地址
    */
    if(url.includes('?')){
        let obj = qs.parse(url.split('?')[1]);
        
        if(obj.rm){
            try {
                fs.unlinkSync(obj.rm);
                res.write('{"code":0,"msg":"删除成功"}');
            } catch (error) {
                console.log('删除失败');
                console.log(obj.rm);
                res.write('{"code":1,"msg":"删除失败"}');
            }
            res.end();
        }

    }else{
        if(url === '/')url = '/index.html';

        fs.readFile('./www'+url,(error,data)=>{
            if(error){
                res.write(fs.readFileSync('./www/404.html'));
            }else{
                res.write(data);
            }
            res.end();
        });

    }

}).listen(80);
