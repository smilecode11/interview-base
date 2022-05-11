function _new(fn) {
    if (typeof fn !== 'function') {
        throw new Error('type error')
    }

    let obj = new Object();
    let args = [...arguments].slice(1)
    obj.__proto__ = fn.prototype;
    let result = fn.apply(obj, args)
    return typeof result === 'object' ? result : obj
}

function Foo(name) {
    this.name = name;
    this.runing = function () {
        console.log(`${this.name} is runing`)
    }
}
let foo = _new(Foo, 'smiling.')
foo.runing()

let foo2 = _new(Foo, 'smiling233')
foo2.runing()
