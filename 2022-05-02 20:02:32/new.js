function _new(context) {
    if (typeof context !== 'function') throw new Error('type error.')

    let args = [...arguments].slice(1)
    let obj = {}
    obj.__proto__ = context.prototype;
    let result = context.apply(obj, args)
    return typeof result === 'object' ? result : obj
}


function Foo(name) {
    this.name = name;
    this.run = function () {
        console.log(`${this.name} is runing`)
    }
    this.showName = function () {
        console.log(`my name is ${this.name}`)
    }
}

let foo1 = new Foo("smiling")
let foo2 = new Foo("smiling2")
foo1.run()
foo2.run()


let foo3 = _new(Foo, "smiling-wupeng")
foo3.run()
foo3.showName()