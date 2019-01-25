const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const static = require('koa-static');
const path = require('path');
const bodyParser = require('koa-bodyparser');
/*
    mongod --dbpath=c:././  --port=27017

*/
const sql = [
    {
        name:'ser',
        age:18
    },
    {
        name:'jinge',
        age:16
    }
];
router.post('/users',async(ctx)=>{
    //user=jinge&age=x
    // let req = ctx.request.query;
    let req = ctx.request.body;
    // let str = '';

    // console.log(ctx.request.body);
    // ctx.req.on('data',(data)=>{
    //     str += data;
    //     // console.log()
    // });

    // ctx.req.addListener('end',()=>{
    //     console.log(str)
    // })

    let resObj = {code:0,msg:'成功'};
    let obj = sql.find((e)=>req.user == e.name);

    if(obj){
        resObj.code = 1;
        resObj.msg = '有这个人了';
    }else{
        sql.push({
            name:req.user,
            age:req.age
        });
    }
    ctx.body = resObj;
});

app.use(bodyParser())
app.use(static(path.join( __dirname,'www')))
app.use(router.routes());

app.listen(80);
