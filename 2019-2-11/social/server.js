const Koa = require('koa');
const mongoose = require('mongoose');
const app = new Koa();
mongoose.connect('mongodb://localhost:27017');


const router = require('koa-router')();
/*
    /getdata?zp=sh&num=1

    {code:0,data:[]}

*/

mongoose.connection.on('connected',(err)=>{
    if(err)return;
    console.log('链接成功');
    app.use(async function(ctx, next) {
        // ctx.set("Access-Control-Allow-Origin", ctx.request.header.origin)
         ctx.set("Access-Control-Allow-Origin",'*')
        // ctx.set("Access-Control-Allow-Credentials", true);
        // ctx.set("Access-Control-Max-Age", 86400000);
        // ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
        // ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
        await next()
    })

    router.get('/getdata',require('./koa_route/getdata'));
    app.use(router.routes())
    app.listen(80);
})
