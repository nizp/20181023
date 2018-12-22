let http = require('http');
let fs = require('fs');
let qs = require('querystring');


/*
    localhost/ -> index.html
    localhost/user  接口


    localhost/user/login
    localhost/user/reg



    localhost/user/login?name=chy&age=18
   

*/

let sql = [
    {
        name:'ser',
        age:18
    },
    {
        name:'xyf',
        age:36
    },
    {
        name:'yyt',
        age:16
    }
];
let serym = ['s','e','r','t','e','n','d','e','r'];
http.createServer((req,res)=>{
    let url = req.url;
    //接口
    if(url.includes('/user')){
        //localhost/user/reg
        let u = url.match(/\/([a-z]+)\?/)[1];
        let d = '';
        req.on('data',(data)=>{
            d += data;
        });
        req.on('end',()=>{
            let obj = qs.parse(d);//前端传过来的 {name:xxx,age:xx}
            //看看有没有这样人，有就是一个对象，没有就是undefined
            let obj2 = sql.find(e=>obj.name == e.name);
            //看看参数到底有没有填全
            if(obj.name && obj.age){
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                switch(u){
                    //登录
                    case 'login':
                        //用户是存在的  
                        if(obj2){
                            if(obj2.age == obj.age){
                                res.write('{"code":0,"msg":"恭喜你,今晚吃火锅!","data": '+ JSON.stringify(serym) +' }');
                            }else{
                                res.write('{"code":2,"msg":"用户或年龄错误"}');
                            }
                        }else{
                            res.write('{"code":1,"msg":"用户不存在"}');
                        }
                    break;
                    case 'reg':
                        /*
                            1.看看有没有这个人
                            2.要把数据存在数据库
                        */
                        if(obj2){
                            res.write('{"code":1,"msg":"用户名被占用"}');
                        }else{
                            let {name,age} = obj;
                            sql.push({
                                name,
                                age
                            });
                            res.write('{"code":0,"msg":"注册成功"}');
                        }
                    break;
                }
            }else{
                res.writeHead(400,{'Content-Type':'text/html; charset=utf-8'});
                res.write('{"code":3,"msg":"参数错误"}');
            }
            res.end();
        });
    }else{
        //静态文件
        if(url=='/')url = '/index.html';
        let data = '';
        try {
            data = fs.readFileSync('./www'+url);
        } catch (error) {
            data = fs.readFileSync('./www'+'/404.txt');
        }finally{
            //不管你进try还是进catch都要进finally里面
            res.write(data);
            res.end();
        }   
    }


}).listen(80);
// let {aaa} = require('./2');
// console.log(aaa);
