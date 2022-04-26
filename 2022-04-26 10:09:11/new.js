function Foo(name) {
    this.name = name
}

Foo.prototype.run = function () {
    console.log(`${this.name} is runing...`)
}

const foo1 = new Foo("foo1")
foo1.run()
const foo2 = new Foo('foo2')
foo2.run()


// 实现 new
function _new(context) {
    if (typeof context !== 'function') throw new Error("type erorr: must be a function use")
    const obj = {}
    obj.__proto__ = context.prototype;
    let result = context.apply(obj, [...arguments].slice(1))
    return typeof result === 'object' ? result : obj
}

const foo3 = _new(Foo, 'foo3')
foo3.run()
const foo4 = _new(Foo, 'foo4')
foo4.run()
