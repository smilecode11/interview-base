// 实现 instanceof

function _instanceof(target, origin) {
    if (typeof origin !== 'function') {
        throw new Error('type error')
    }

    if (typeof target !== 'object' || target === null) {
        return false
    }

    let proto = Object.getPrototypeOf(target)
    while (proto) {
        if (proto === origin.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
    return false
}



let arr1 = [1, 2, 3, 4]
// arr1 instanceof Array
_instanceof(arr1, Array)


//  2022年04月25日15:15:11
function myInstanceOf(target, origin) {
    if (typeof origin !== 'function') throw new Error("origin must be function")
    if (target === null || typeof target !== 'object') return false

    let proto = Object.getPrototypeOf(target)
    while (proto) {
        if (proto === origin.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
    return false
}

let Fn = function () {
    console.log('foo function')
}

let f1 = new Fn()
f1 instanceof Fn
myInstanceOf(f1, Fn)