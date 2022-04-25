/** 
 * 手写 new
 * 1. 创建空对象
 * 2. 修改空对象的 __proto__ 为构造函数 prototype, 继承构造函数原型属性
 * 3. 修改构造函数 this 指向该空对象, 执行构造函数
 * 4. 返回  typeof res === object 时, 返回 res 否则返回空对象
*/

function _new(fn) {
    let obj = {};
    obj.__proto__ = fn.prototype;
    const res = fn.apply(obj, [...arguments].slice(1));
    return Object.prototype.toString.call(res) === '[object Object]' ? res : obj;
}

function Foo(name, age) {
    this.name = name;
    this.age = age;

    this.showName = function () {
        console.log(`my name is ${this.name}`)
    }
}

Foo.prototype.run = function () {
    console.log(`${this.name} is runing...`)
}

const foo1 = _new(Foo, 'chenxin')
