// function func1(){
//     console.log('resolved and fullfilled');
// }

// const promise = new Promise((func1,func2)=>{
//     setTimeout(func1,1000);
// })
// console.log(promise);
// setTimeout(function(){console.log(2)},1000);
// console.log(promise);

console.log('111');
setTimeout(()=>{
    console.log('222');
},1000);
console.log('333');
setTimeout(()=>{
    console.log('444');
},50);
console.log('555');