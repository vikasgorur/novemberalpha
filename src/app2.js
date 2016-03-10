/**
 * A HTTP/2 version of novemberalpha.
 */

"use strict";

import fs from 'fs';
import http2 from 'http2';

const options = {
  key: fs.readFileSync('dist/novemberalpha.key'),
  cert: fs.readFileSync('dist/novemberalpha.crt')
};

let assets = {
  'bootstrap.min.css': '',
  'novemberalpha.js': '',
  'style.css': ''
};

let index;

for (let name in assets) {
  assets[name] = fs.readFileSync(`public/${name}`, {encoding: 'utf8'});
  index = fs.readFileSync('public/index.html', {encoding: 'utf8'});
};

http2.createServer(options, function(request, response) {
  for (let name in assets) {
    const push = response.push(`/${name}`);
    push.end(assets[name]);
  }

  response.end(index);
}).listen(8002);
