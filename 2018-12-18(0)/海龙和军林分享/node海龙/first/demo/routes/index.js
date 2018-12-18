var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JS分享——快乐最重要'});
  // res.send("Hello World");
});

module.exports = router;
