const express = require('express');

const app = express();
const fs = require('fs');

//静态文件
/*
    通过use给app注入一个，管理静态文件的新功能
*/
app.use(express.static('www'),(req,res,next)=>{
    res.write(fs.readFileSync('./www/404.html'));
    res.end();
    next();
});

/*
    www.baidu.com:80/  == http://localhost:80/

    localhost -> /

    req.query  直接把查询信息转成对象

    res.json()  -> res.write(JSON.stringify(obj)) res.end()

    app.get(url,(req,res)=>{})
    app.post(url,(req,res)=>{})


*/
app.get('/',(req,res)=>{
    // console.log(req.body);
    console.log(req.query);

    // res.send('hello');
});




app.listen(80,()=>{
    console.log('启动成功!');
});


