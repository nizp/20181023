var express = require('express');
var router = express.Router();


let person = [
  // 'ser',
  '赵凯文',
  '大表哥',
  '小燕子',
  'wangchong',
  'yuer'
];

router.post('/', function(req, res, next) {
  let obj = {
    code:0,
    msg:'有介个银了啦!'
  }
  let json = req.body;
  console.log(req);
  if(!person.includes(json.user)){
      obj.code = 1;
      obj.msg = '木有介个银!';
  }
  res.send(JSON.stringify(obj));
});

module.exports = router;
