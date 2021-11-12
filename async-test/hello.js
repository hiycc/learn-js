// hello.js
const fs = require('mz/fs');

module.exports = async () =>{
    let expression = await fs.readFile('./data.txt','utf-8');
    console.log(expression);    
    let fn = new Function('return ' + expression);
    let r = fn();
    console.log(`Calculate: ${expression} = ${r}`);
    return r;
};