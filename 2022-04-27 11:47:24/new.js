function _new(context) {
    if (typeof context !== 'function') throw new Error('type error');

    let obj = {};   //   1. 定义空对象
    obj.__proto__ = context.prototype;  //  2. 修改空对象原型指向原函数 prototype(继承函数原型属性)
    let result = context.apply(obj, [...arguments].slice(1));   //  3. 修改原函数this指向到创建的对象, 并执行函数
    return typeof result === 'object' ? result : obj;   //   4. 返回创建的对象
}

function Foo(name) {
    this.name = name
}
Foo.prototype.run = function () {
    console.log(`my name is ${this.name}, I\`m is runing`)
}

const foo1 = _new(Foo, 'chenxin')
const foo2 = _new(Foo, 'chenxin2')


const foo3 = new Foo("尘心")
foo3.run()