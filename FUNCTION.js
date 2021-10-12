'use strict';
function sum(...rest) {
  var re = 0;
  rest.forEach(function(value){
    re += Number(value);
  });
  return re;
}


function foo() {
  return
      { name: 'foo' };
}
//因为js引擎自动在行末加分号

function area_of_circle(r,pi){
  if(arguments.length==1)
    pi = 3.14;
  return pi*r*r;
}

function out(){
  var x = 1;
  function inside(){
    var y = x+1;
    console.log("x:"+x);
    console.log("y:"+y);
  }
  inside();
  // console.log(y);
  //ReferenceError: y is not defined
}
//如果出现重名的函数，js是优先寻找内部的变量再从外面的作用域找。

// console.log(sum(1,2,3));
//6
// console.log(foo());
//undefined
// console.log(area_of_circle(2,3.1416));
// out();

function miss_semicolon(){
  var 
    a = 1;
  return a;
}


console.log(miss_semicolon());

function foo1({name,age}){
  console.log(name);
  console.log(age);
}

foo1({name:"luxi",age:22});
