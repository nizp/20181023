const server = require("./server");
const router = require("./router.js");
const requestHandler = require("./requestHandler.js")

const handler = {};
handler["/"] = requestHandler.start;
handler["/start"] = requestHandler.start;
handler["/upload"] = requestHandler.upload;

server.start(router.route,handler);
