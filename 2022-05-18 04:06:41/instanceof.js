// [] instanceof Array;
// [] instanceof Object;

function _instanceof(target, origin) {
    if (typeof origin !== 'function') throw Error('type error')
    if (typeof target !== 'object') return false

    let proto = Object.getPrototypeOf(target)
    while (proto) {
        if (proto === origin.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
    return false
}

_instanceof([], Array)
_instanceof([], Object)