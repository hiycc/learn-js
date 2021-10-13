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


// console.log(miss_semicolon());

function foo1({name,age}){
  console.log(name);
  console.log(age);
}
// var arr = ['A', 'B', 'C'];
// var r = arr.filter(function (element, index, self) {
//     console.log(element); // 依次打印'A', 'B', 'C'
//     console.log(index); // 依次打印0, 1, 2
//     console.log(self); // self就是变量arr
//     return true;
// });

// foo1({name:"luxi",age:22});

// var arr = [1,2,3,4,5]
// var pow2_arr = arr.map(function(x){
//   return x*x;
// });
// var fn = x => x * x;
// var pow2_arr = arr.map((x=>x*x));
// console.log(pow2_arr);
// console.log(fn(2));

function getAge(){
  var y = new Date().getFullYear();
  return y - this.birth;
}
var window = {};
var xiaoming = {
  name : '小明',
  birth : 1990,
  age : getAge,
};
// window.birth = 2020;
// // xiaoming.age();
// console.log(xiaoming.age());//31
// console.log(xiaoming.age.apply(window,[]));

// var arr = [1,2,3,4,5]
// arr = arr.reduce(((x,y)=>x*y));
// console.log(arr);

function string2int(str){
  var arr = [];
  for(let i=0;i<str.length;i++){
    arr.push(str.charAt(i)-0);
  }
  return arr.reduce(((x,y)=>x*10+y));
}

// console.log(string2int('123'));


var arr = [1,2,3,4,4,4,6,6];
var arr1 = arr.filter(function(value,index,arr){
  return arr.indexOf(value) === index;
});

var set1 = new Set(arr);
// console.log(arr1);
// console.log(set1);

// function add(){
//   var balance = 10;
//   return function abc(){
//     balance+=1;
//     console.log(balance);
//   }
// }

// var y = add();
// var x = add();
// y();
// y();
// x();

// var arr = [1,10,2,20];
// arr.sort((x, y) => {
//     if(x>=y)
//       return 1;
//     else return -1;
// });
// console.log(arr); // [1, 2, 10, 20]

var arr = {
  0:'xiaohong',
  1:'abc',
  2:'xiaoming',
  length:3
}
console.log(arr);
arr = Array.from(arr);
arr.sort()
console.log(arr);

// console.log(arr[0]);
// console.log(arr.length);