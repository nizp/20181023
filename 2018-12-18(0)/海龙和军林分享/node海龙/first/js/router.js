function route(handler, pathname, res, postData) {
  console.log("Start route for Request " + pathname);
  if (typeof handler[pathname] === "function") handler[pathname](pathname, res, postData);
  else console.log("No router");
}

module.exports.route = route;