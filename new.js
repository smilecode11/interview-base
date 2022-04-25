/**
 * 实现 new
 * 1. 创建空对象
 * 2. 修改空对象的 __proto__ 为 构造函数的 prototype
 * 3. 构造函数的 this 指向这个对象, 执行构造函数
 * 4. 返回该对象, 判断该对象是否是引用类型
 */

function myNew(context) {
    const obj = new Object()
    obj.__proto__ = context.prototype;
    const result = context.apply(obj, [...arguments].slice(1))
    return typeof result === 'object' ? result : obj;
}

function Foo() {
    console.log('foo')
}

const foo = myNew(Foo)
console.log(foo)