function Foo({ name, age } = {}) {
    this.name = name || '无名氏'
    this.age = age || 0;
    this.showData = function () {
        console.log(`my name is ${this.name}, I am ${this.age} year old !!`)
    }
}
const foo = new Foo({ name: 'foo', age: 19 })
foo.showData()

const foo2 = new Foo({ name: "foo2", age: 17 })
foo2.showData()
foo2.runing = function () {
    console.log(`${this.name} is runing`)
}


//-----------------------------
function _new(context) {
    if (typeof context !== 'function') throw new Error('type error')

    let args = [...arguments].slice(1);
    const obj = {};
    obj.__proto__ = context.prototype;
    let result = context.apply(obj, args);
    return typeof result === 'object' ? result : obj;
}

const foo3 = _new(Foo, { name: 'foo3', age: 27 })
foo3.showData()