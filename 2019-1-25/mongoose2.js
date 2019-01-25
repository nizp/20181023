const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const static = require('koa-static');
const path = require('path');
const ClassInfo = require('./model/class_model');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');




/*
    /classinfo?act=add&name=xx&id=007&sex='金星'  添加数据

    /classinfo?act=search&[name|id|sex]=xxx   查询信息

    /classinfo?act=search2&gt=1&lt=4   查询id范围信息  2,3

*/
mongoose.connection.on('connected',(err)=>{
    if(err)return;
    console.log('链接成功');
    router.get('/classinfo',async (ctx)=>{
        let o = {};
        let obj = ctx.request.query;
        switch (obj.act) {
            case 'add':
                let add = new ClassInfo({
                    name:obj.name,
                    id:obj.id,
                    sex:obj.sex
                });
                await add.save();
                o.code = 0;
                o.msg = '添加成功';
                break;
            case 'search':
                let {id,sex,name} = obj;
                try {
                    let arr = await ClassInfo.find(JSON.parse(JSON.stringify({id,sex,name})));
                    o.code = 0;
                    o.msg = '查询成功';
                    o.data = arr;
                } catch (error) {
                    o.code = 1;
                    o.msg = '查询失败';
                    o.data = [];
                }        
            break;
            case 'search2':
                let {gt:$gt,lt:$lt,or:$or} = obj;
                try {
                    // let arr = await ClassInfo.find(JSON.parse(JSON.stringify({'id':{$gt,$lt,$or}})));
                    $or = JSON.parse($or);
                    console.log($or);
                    
                    let arr = await ClassInfo.find(JSON.parse(JSON.stringify({$or})));
                    o.code = 0;
                    o.msg = '查询成功';
                    o.data = arr;
                } catch (error) {
                    o.code = 1;
                    o.msg = '查询失败';
                    o.data = [];
                }        
            break;

            case 'update':
                let {name:username,update} = obj;
                try {

                    await ClassInfo.update({name:username},JSON.parse(update))
                    o.code = 0;
                    o.msg = '修改成功';

                } catch (error) {
                    o.code = 1;
                    o.msg = '修改失败';
                    o.data = [];
                }        
            break;

        }
    
        ctx.body = o;
    });
    app.use(router.routes());
    app.use(static(path.join(__dirname,'www')));
    app.listen(80);
})


