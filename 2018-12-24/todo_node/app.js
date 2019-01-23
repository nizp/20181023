const ex = require('express');

const app = ex(); //app就是创建服务的对象

console.log(1);

//get请求 url
//app.get(路径,回调函数(req,res,next))
//app.use()  √  手动调用next()
//app.use()  ×

/*
    通过localhost才能访问app.js

    req.url 客户端不但访问了你的服务器，还带了一些东西过来

    只是一个localhost -> '/'

    localhost/1.txt  -> '/1.txt'

    ex.static('www') 一个静态资源的中间件，通过use去链接起来。


    localhost/add?name=xx&age=xx  -> /add?name=xx&age=xx

    /add -> add.js文件去管理

*/

let sql = [
    {id:0,name:'小强',age:18},
    {id:1,name:'小明',age:28},
    {id:2,name:'小凡',age:8},
    {id:3,name:'小曹',age:48},
    {id:4,name:'小燕',age:108},
    {id:5,name:'小胖',age:109},
    {id:6,name:'小会',age:16},
];

app.use(ex.static('www'));

app.use((req,res,next)=>{
    req.sql = sql;
    next();
})

/** 
 * 只要是localhost/add就引入add.js文件
 
 * 
 * 后端路由:
 *  /add   
 *  /sort
 * 
 * 
 * 
*/
app.use('/add',require('./data/add'));
app.use('/sort',require('./data/sort'));
app.use('/getdata',require('./data/data'));
app.use('/rm',require('./data/rm'));
app.use('/move',require('./data/move'));
app.use('/deletes',require('./data/deletes'));

app.listen(80);