const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('hello,world!');

hash.update('hello,nodejs!');

console.log(hash.digest('hex'));