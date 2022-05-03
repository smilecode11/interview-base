function _instanceof(target, origin) {
    if (typeof origin !== 'function') throw new Error("type error: ${origin} not is constructor function")
    if (target === null || typeof target !== 'object') return false;

    let proto = Object.getPrototypeOf(target)
    while (proto) {
        if (proto === origin.prototype) return true;
        proto = Object.getPrototypeOf(proto)
    }
    return false
}

_instanceof([], Array)
_instanceof([], Object)
_instanceof({}, Object)

function Foo(name) {
    this.name = name;
}
let foo1 = new Foo()
_instanceof(foo1, Foo)