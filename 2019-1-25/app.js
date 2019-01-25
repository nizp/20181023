const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const static = require('koa-static');
const path = require('path');
/*
    ctx.request; // 这是 koa Request
        接收客户端发送的请求
            ctx.request.query  -> {key:val}

            ctx.request.querystring -> key=val&key=val  (查询信息，不包括问号)


    ctx.response.body; // 这是 koa Response


    路由:

        1.安装，引包 let router = require('koa-router')()

        router.get('/user',async (ctx)=> {
            ....
        });

        2.引用
            app.use(router.routes())
    
    app.use('/users',()=>)

    静态资源:
        const static = require('koa-static')
        app.use(static(
            path.join( __dirname, staticPath)
        ))

    小总结:

            1.项目初始化  npm init -y
            2.安装koa  npm i koa -S
            3.使用
                const Koa = require('koa');
                const app = new Koa();
                app.use(async(ctx)=>{
                    拿东西  ctx.request.query
                    输出    ctx.body = {}
                })
            
            4.路由
                1.安装  npm i koa-router -S
                2.引包
                    const router = require('koa-router')();

                3.  router.get('/',async (ctx)=>)
                    router.get('/',require('../xxx'))
                
                4. app.use(router.routes())

            5.静态资源
                
                1.安装  npm i koa-static -S
                2.引包
                    const static = require('koa-static');
                    const path = require('path');

                3. 使用static中间件，并且设置静态资源的目录
                    app.use(static(path.join(__dirname,'www'))) 

                


            


        



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
router.get('/users',async(ctx)=>{
    console.log('来',ctx.req);
    //user=jinge&age=x
    let req = ctx.request.query;
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

    // console.log(ctx.request.query);
    // console.log(ctx.request.querystring)
    // ctx.body = 'hello world';
    // ctx.res = 'hello world2';
    // ctx.response.body = 'hello world2';
});

app.use(static(path.join( __dirname,'www')))
app.use(router.routes());

app.listen(80);
