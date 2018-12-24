const ex = require('express');
const bodyParser = require('body-parser');

/*
    get请求:
        req.url

    post请求
        req.on('data',()=>{})
        req.on('end',()=>{})

    express:
        get 
            req.query
            route.get('/',()=>{})

        post
            引一下body-parser
            req.body
            route.post('/',bp,()=>{})
*/
// 创建 application/x-www-form-urlencoded 编码解析
const bp = bodyParser.urlencoded({ extended: false });
const route = ex.Router();

//[1,2,3,4,5,6]    [4,5,6]
//'[1,2,3]' -> [1,2,3]  

route.post('/',bp,(req,res)=>{
    
    let {arr} = req.body;
    let {sql:data} = req;
    console.log(arr);
    try {
        arr = JSON.parse(arr); //'[]'
        
        for(let i=0;i<arr.length;i++){
            for(let k=0;k<data.length;k++){
                if(data[k].id == arr[i]){
                    data.splice(k,1);
                    break;
                }
            }
        }
       
        res.send({code:0,msg:'批量删除成功!',data});
    } catch (error) {
        res.status(400);
        res.send({code:6,msg:'批量删除失败!'});
    }
    // console.log(req.body);
});

module.exports = route;