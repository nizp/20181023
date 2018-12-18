const http = require("http");
const url = require("url");

function start(router,handler){
  // 请求开始
  function onRequest(req,res){
    console.log("Server start");
    // 将url地址各部分对象化
    const pathname = url.parse(req.url).pathname;
    console.log(req.url);
  
    if (pathname === "/favicon.ico") return console.log("Server end because default Request for faviconi.con");

    // 接收数据
    let postData = "";
    req.setEncoding("utf8");
    req.on("data",(chunk)=>{
      console.log("Start receive chunk " + chunk);

      postData += chunk;
    })
    // 分配路由
    req.on("end",()=>{
      router(handler,pathname,res,postData);
    })
  }    
  // 创建服务器，监听80端口
  http.createServer(onRequest).listen(80);
}
// 输出模块
exports.start = start;





