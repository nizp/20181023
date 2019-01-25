const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');

const mongoose = require('mongoose');
const Animal = require('./model/animal');
//链接
mongoose.connect('mongodb://localhost:27017')
//监听是否链接成功
mongoose.connection.on('connected',(error)=>{
    if(error){
        console.log('链接失败');
    }else{
        console.log('链接成功');

        //动物类
        //已经把数据存到了数据库中
        // let wc = new Animal({type:'dog',name:'旺财'});
        // wc.save();

        // let pig = new Animal({type:'pig',name:'佩奇'});
        // pig.save();

        // let peng = new Animal({type:'pig',name:'蓬蓬'});
        // peng.save();
        // console.log(app.use);
        app.use(async (ctx,next)=>{
            try{
                let arr = await Animal.find({name:'佩奇'});
                ctx.response.body = {
                    code:0,
                    data:arr,
                    msg:'成功'
                }
            }catch(err){
                ctx.body = {
                    code:1,
                    msg:'找不到'
                }
            }
        });
        app.use(static(path.join( __dirname,'www')))
        app.listen(80);
    }
});







