/*
    localhost/rm?id=num
    删除对应id的数据
*/
const ex = require('express');
const route = ex.Router();

route.get('/',(req,res)=>{
    let {id} = req.query;

    // req.sql = req.sql.filter(e=>e.id != id);
    let index = req.sql.findIndex(e=>e.id == id);
    if(index != -1){
        req.sql.splice(index,1);
        res.send({code:0,msg:'删除成功',data:req.sql});
    }else{
        res.status(400);
        res.send({code:4,msg:'删除的内容不存在'});
    }

});// /rm

module.exports = route;
