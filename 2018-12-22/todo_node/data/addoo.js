let ex = require('express');
let route = ex.Router();

route.get('/',()=>{
    console.log('oo进来');
});

module.exports = route;
