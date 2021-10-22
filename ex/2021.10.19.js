'use strict'
//4.
var email_re = /(^\w+\.*\w+)@\w+\.\w+/;
// var test_re = /ab+c/;
// console.log(test_re.test('abbbbc'));

// console.log(email_re.test('bill%gates@ms.com'))
var re = /^<(.+)> (\w+\.*\w+@\w+\.\w+)/;
var re = new RegExp();
// 测试:
var r = re.exec('<Tom Paris> tom@voyager.org');
if (r === null || r.toString() !== ['<Tom Paris> tom@voyager.org', 'Tom Paris', 'tom@voyager.org'].toString()) {
    console.log('测试失败!');
}
else {
    console.log('测试成功!');
}

//9.
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
    say(){
        return "Hello, "+this.name+"!";
    }
}
// 测试:
// var kitty = new Cat('Kitty');
// var doraemon = new Cat('哆啦A梦');
// if ((new Cat('x') instanceof Animal)
//     && kitty 
//     && kitty.name === 'Kitty'
//     && kitty.say
//     && typeof kitty.say === 'function'
//     && kitty.say() === 'Hello, Kitty!'
//     && kitty.say === doraemon.say)
// {
//     console.log('测试通过!');
// } else {
//     console.log('测试失败!');
// }
