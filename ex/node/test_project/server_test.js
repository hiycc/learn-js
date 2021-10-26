'use strict';

// 导入http模块:
var 
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    url = require('url');

var root = path.resolve(process.argv[2] || '.');

var defaultFile = ["index.html","default.html"];
var defaultindex = 0;

console.log("Static root dir:" + root);

const readfileFunc = function(f){
    var filepath = f || undefined;
    if(filepath){
        fs.stat(filepath,function(err,stats){
            if(!err&&stats.isFile()){
                console.log('200 '+request.url);
                response.writeHead(200);
                fs.createReadStream(filepath).pipe(response);
            }else if(err&&stats.isDirectory()){
                readfileFunc();
            }
        })
    }else{
        fs.stat(path.join(root,defaultFile[defaultindex]),function(err,stats){
            if(!err&&stats.isFile()){
                console.log('200 '+request.url);
                response.writeHead(200);
                fs.createReadStream(filepath).pipe(response);
            }else if(defaultindex<1){
                defaultindex++;
                readfileFunc();
            }else{
                console.log('404 '+request.url);
                response.writeHead(404);
                response.end('404 Not Found!');
            }
        })
    }
}

//创建服务器
var server = http.createServer(function(request,response){
    // console.log(request_url);
    //获得URL的path
    var pathname = url.parse(request.url).pathname;
    //获得对应的本地文件名
    var filepath = path.join(root,pathname);
    //获取文件状态
    readfileFunc(filepath);
})



// // 创建http server，并传入回调函数:
// var server = http.createServer(function (request, response) {
//     // 回调函数接收request和response对象,
//     // 获得HTTP请求的method和url:
//     console.log(request.method + ': ' + request.url);
//     // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     // 将HTTP响应的HTML内容写入response:
//     response.end('<h1>Hello world!</h1>');
//     console.log(process.argv);
// });

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');