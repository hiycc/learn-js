const fs = require('fs');
const { Model } = require('sequelize/types');
const db = require('./db');

//readdirSync读取目录的内容（同步操作）
//__dirname当前模块的目录名
let files = fs.readdirSync(__dirname + './models');

let js_files = files.filter((f) => {
    return f.endsWith('.js');
}, files);

module.exports = {}

for (let f of js_files){
    console.log(`import model from file ${f}...`);
    let name = f.substring(0, f.length-3);//减掉.js
    module.exports[name] = require(__dirname+ '/models' + f);
}

modele.exports.sync = ()=>{
    db.sync();
}