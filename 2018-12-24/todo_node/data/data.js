const ex = require('express');
let route = ex.Router();

route.get('/',(req,res)=>{
    res.send({code:0,data:req.sql});
});

module.exports = route;