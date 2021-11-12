const assert = require('assert');
const sum = require('../hello');

//这里使用的是BBD-style测试，describe可以任意嵌套

//describe 被称为测试套件，第一个参数是测试套件的名称，第二个参数是实际运行的函数
describe('#hello.js', ()=>{
    describe('#sum()', ()=>{
        before(function () {
            console.log('before:');
        });

        after(function () {
            console.log('after.');
        });

        beforeEach(function () {
            console.log('  beforeEach:');
        });

        afterEach(function () {
            console.log('  afterEach.');
        });
        it('sum() should return 0', () => {
            //assert断言
            //断言就是判断源码的实际运行结果与预期结果是否一致，如果不一致则抛出一个错误
            assert.strictEqual(sum(), 0);
        });
        it('sum() should returen 1', ()=>{
            assert.strictEqual(sum(1),1);
        });
        it('sum(1, 2) should return 3', () => {
            assert.strictEqual(sum(1, 2), 3);
        });

        it('sum(1, 2, 3) should return 6', () => {
            assert.strictEqual(sum(1, 2, 3), 6);
        });
    });
});
