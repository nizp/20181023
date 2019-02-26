const proxy = require("http-proxy-middleware");
// console.log(1);
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://m.kugou.com?json=true",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/getsing", {
      target: "http://m.kugou.com/app/i/getSongInfo.php",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/getrank", {
      target: "http://m.kugou.com/rank/list&json=true",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/rankinfo", {
      target: "http://m.kugou.com/rank/info/&json=true",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/lyric", {
      target: "http://m.kugou.com/app/i/krc.php",
      changeOrigin: true
    })
  );
};