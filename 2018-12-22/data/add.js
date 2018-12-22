let express = require('express');
/*
    路径:
        /a/b

    1.引路由的方法
        let router = express.Router();

    2.写路由
        router.get('/')       /add/
        router.post('/')

    
*/
let router = express.Router();  //用了就能分目录了
// /add/    /add/xx
//写的就是添加的逻辑
router.get('/',(req,res)=>{
   console.log(1)
});
module.exports = router;