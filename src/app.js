"use strict";

import express from 'express';
import fs from 'fs';
import morgan from 'morgan';

const app = express();

const accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));

app.use(express.static('public'));

app.get(/.*/, function(req, res) {
  res.sendfile('index.html', {root: './public'});  
});

app.listen(8000, function () {
});