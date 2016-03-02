/**
 * A HTTP/2 version of novemberalpha.
 */

"use strict";

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _http = require('http2');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  key: _fs2.default.readFileSync('dist/novemberalpha.key'),
  cert: _fs2.default.readFileSync('dist/novemberalpha.crt')
};

var assets = {
  'bootstrap.min.css': '',
  'novemberalpha.js': '',
  'style.css': ''
};

var index = undefined;

for (var name in assets) {
  assets[name] = _fs2.default.readFileSync('public/' + name, { encoding: 'utf8' });
  index = _fs2.default.readFileSync('public/index.html', { encoding: 'utf8' });
};

_http2.default.createServer(options, function (request, response) {
  console.log(assets);
  if (request.url === '/') {
    for (var name in assets) {
      var push = response.push('/' + name);
      push.end(assets[name]);
    }

    response.end(index);
  } else {
    response.writeHead(404);
    response.end();
  }
}).listen(8002);
//# sourceMappingURL=app2.js.map
