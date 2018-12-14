var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  var _callback = req.query.callback;//callback=fn3  -> fn3
  var _data = [1,2,3,4,5];
  console.log(_callback)
  if (_callback){
      res.type('text/javascript');
    //   fn3 + '(' data + ')' ->  fn(data)
      setTimeout(function(){
        res.send(_callback + '(' + JSON.stringify(_data) + ')');
      },5000)
  }
  else{
      res.json(_data);
  }
});

module.exports = router;