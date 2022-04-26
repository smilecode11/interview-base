[1, 2, 3] instanceof Array

function Foo(name) {
    this.name = name;
}

const foo1 = new Foo("foo1")
foo1 instanceof Foo

//  实现 instanceof
function _instanceof(target, origin) {
    if (Object.prototype.toString.call(origin) !== '[object Function]') throw new Error('type error: origin must be an function')
    if (typeof target !== 'object' || target === null) return false

    let proto = Object.getPrototypeOf(target)
    while (proto) {
        if (proto === origin.prototype) return true;
        proto = Object.getPrototypeOf(proto)
    }
    return false
}

_instanceof([1, 2, 3], Array)
_instanceof(foo1, Foo)