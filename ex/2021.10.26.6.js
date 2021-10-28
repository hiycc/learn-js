'use strict';

var fs = require('fs');

var rs = fs.createReadStream('2021.10.19.js');
var ws = fs.createWriteStream('2021.10.19.copied.js');

rs.pipe(ws,{end:false});