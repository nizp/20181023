let ex = require('express');//在node_modules下也可以不带路径

/*
    /add&name=xx&age=18

    多建几个文件夹
        data
            add
            rm
            search

        / -> /add  从/到/add这个过程就叫切换路由


        app.get()
        app.post()

*/
let sql = [
    {}
];
let app = ex();

/* 

*/

app.use((req,res,next)=>{
    req.sql = sql;
    console.log('一开始进来');
    next();
});

//app.use('/a') 

/*

*/

//只要是add就为添加
app.use('/add',require('./data/add'));

// app.use('/rm',require('./data/rm'));
// app.use('/search',require('./data/search'));

app.use(ex.static('www')); //静态文件的管理

app.listen(80);

