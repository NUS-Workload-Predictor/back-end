const fs = require('fs');
const constant = require('./config/constant');

var addMapping = function(router, mapping) {
  for (let url in mapping) {
    if (url.startsWith(constant.HTTP_METHOD_GET)) {
      var path = url.substring(4);
      router.get(path, mapping[url]);

      console.log(`Register URL mapping: GET ${path}`);
    } else if (url.startsWith(constant.HTTP_METHOD_POST)) {
      var path = url.substring(5);
      router.post(path, mapping[url]);

      console.log(`Register URL mapping: POST ${path}`);
    } else {
      console.log(`Invalid URL: ${url}`);
    }
  }
};

var addAllController = function(router, dir) {
  var controllers_dir = __dirname + '/' + dir;
  var files = fs.readdirSync(controllers_dir);
  var js_files = files.filter((f) => {
    return f.endsWith('.js');
  }, files);

  for (let f of js_files) {
    console.log(`Process controller: ${f} ...`);

    let mapping = require(controllers_dir + '/' + f);
    addMapping(router, mapping);
  }
};

module.exports = (router, dir) => {
  addAllController(router, dir);
  return router.routes();
};
