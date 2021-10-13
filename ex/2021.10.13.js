'use strict';
//q7
function normalize(arr){
  function normalizeStr(x){
    return x[0].toUpperCase()+x.substring(1,x.length).toLowerCase();
  }
  return arr.map(normalizeStr);
}

// 测试:
// if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
//   console.log('测试通过!');
// }
// else {
//   console.log('测试失败!');
// }

//q10

function get_primes(arr) {
  var re = arr.filter(function(x){
    if(x<=3)
      return x>1;
    else{
      for(let i=2;i<x;i++){
        if(x%i==0)
          return false;
      }
      return true;
    }
  })
  return re;
}
// 测试:
// var
//     x,
//     r,
//     arr = [];
// for (x = 1; x < 100; x++) {
//     arr.push(x);
// }
// r = get_primes(arr);
// if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
//     console.log('测试通过!');
// } else {
//     console.log('测试失败: ' + r.toString());
// }