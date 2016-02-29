"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var accessLogStream = _fs2.default.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use((0, _morgan2.default)('combined', { stream: accessLogStream }));

app.use(_express2.default.static('public'));

app.get(/.*/, function (req, res) {
  res.sendfile('index.html', { root: './public' });
});

app.listen(8000, function () {});
//# sourceMappingURL=app.js.map
