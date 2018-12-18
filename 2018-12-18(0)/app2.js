/*
    npm init 项目初始化（无脑回车即可）*name属性名字不要取某些工具的名字

    产生一个package.json的文件

    安装包
        npm install body-parser cookie-parser express multer --save

    引包
        require('express')
        .....

    __dirname  当前文件目录

*/

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');//获得中间件

app.use(express.static('www'));//静态资源管理

app.use(bodyParser.urlencoded({ extended: false }));

//指定配置项，这里指定文件保存于当前目录下的tmp子目录
app.use( multer({ dest: '/uploads/'}).array('myfile') );

app.post('/file_upload',(req,res)=>{
    //写入的路径和名字
    let des_file = __dirname + "/uploads/" + req.files[0].originalname;
    // console.log(req.files[0])
    try {
        let data = fs.readFileSync( req.files[0].path );
        fs.writeFileSync(des_file, data);
        res.json({code:0,msg:'成功'});
    } catch (error) {
        res.json({code:1,msg:'失败'});
    }
});



app.listen(80,()=>{
    console.log('启动成功!');
});


