const {
  exec
} = require("child_process");
const {
  parse
} = require("querystring");

function start(pathname, res) {
  console.log("Start was called");

  // 回应头
  console.log("Response to " + pathname);
  exec("find/", (error, stdout, stderr) => {
    res.writeHead(200, {
      "content-type": "text/html"
    });

    const body =
      '<form action="/upload" method="post">' +
      '<textarea name="text" rows="20" cols="60"></textarea>' +
      '<input type="submit" value="Submit text" />' +
      '</form>';
    // 回应文
    // res.write(`error: ${error.code}<br>`);
    // res.write(`stdout: ${stdout}<br>`);
    // res.write(`stderr: ${stderr}<br>`);
    res.write(body);
    // 结束
    res.end();
    console.log("Server end");
  });
}

function upload(pathname, res, postData) {
  console.log("Upload was called");
  // 回应头
  console.log("Response to " + pathname);
  res.writeHead(200, {
    "content-type": "text/html"
  });
  // 回应文
  res.write(`<p>${parse(postData).text}</p>`);
  // 结束
  res.end();
  console.log("Server end");
}

module.exports.start = start;
module.exports.upload = upload;