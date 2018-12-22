let ex = require('express');
let route = ex.Router();

/*
    localhost/add

    /add

    req有很多属性:
        req.url{
            protocol: null,
            slashes: null,
            auth: null,
            host: null,
            port: null,
            hostname: null,
            hash: null,
            search: '?name=xx&age=xo',
            query: 'name=xx&age=xo',
            pathname: '/',
            path: '/?name=xx&age=xo',
            href: '/?name=xx&age=xo',
            _raw: '/?name=xx&age=xo' 
        }
        req.query
        req.params
        req.headers

*/
route.get('/',(req,res,next)=>{
    let {name,age} = req.query;

    if(name && age){
        req.sql.push({
            name,
            age,
            id:Date.now()
        });
        res.send({code:0,data:req.sql}); //发送给前端
    }
   
    console.log(req.sql);
});  
// route.use('/oo',require('./addoo'));

module.exports = route;
