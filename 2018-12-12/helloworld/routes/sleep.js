var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
  
*/
let person = [
  'chaoxue',
  'yangna',
  'jquery',
  '你真胖',
  'momo'
];

router.get('/', function(req, res, next) {
  setTimeout(function(){
    let obj = {
      code:0,
      msg:'有介个银了啦!'
    }
    let json = req.query;
    if(!person.includes(json.user)){
        obj.code = 1;
        obj.msg = '没有介个银!';
    }
    res.send(JSON.stringify(obj));
  },5000)
});

module.exports = router;
