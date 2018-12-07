var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
  
*/
let person = [
  // 'caoyuanye',
  'yangyating',
  'xuyifan',
  'liuguiqin',
  '王苗苗',
  '王梦迪'
];

router.get('/', function(req, res, next) {
  let obj = {
    code:0,
    msg:'有介个银了啦!'
  }
  let json = req.query;
  console.log('进来了')
  console.log(req);

  if(!person.includes(json.ren)){
      obj.code = 1;
      obj.msg = '没有介个银!';
  }
  res.send(JSON.stringify(obj));
});

module.exports = router;
