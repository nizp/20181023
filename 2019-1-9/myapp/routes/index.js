var express = require('express');
var router = express.Router();

/*
  res.json()
  res.send()
  res.render(找哪个文件,{
    放数据的
  })  专门渲染模板的

  配置模板:
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    txt:'这是第一个页面',
    arr:[1,2,3,4]
  });
});
/*
 
  <%for(var i=0;i<arr.length;i++){%>
        <li><%= arr[i]%></li>
  <%}%>
    ->  {} -> {{}}

    <% for(var i=0;i<arr.length;i++){<li><%=arr[i]%></li>} %>

    <% for(var i=0;i<arr.length;i++){ %>
        <li><%=arr[i]%></li>
    <% } %>
*/


router.get('/2.html', function(req, res, next) {
  res.render('index2', { 
    title: 'Express',
    txt:'这是第二个页面',
    arr:[5,6,7,8]
  });
});

module.exports = router;
