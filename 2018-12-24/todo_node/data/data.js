const ex = require('express');
let route = ex.Router();

route.get('/',(req,res)=>{
    console.log('走了')
    res.send({code:0,data:req.sql});
});

module.exports = route;