
function _instanceof(target, origin) {
    if (typeof origin !== 'function') throw new Error('type error')
    if (target === null || typeof target !== 'object') return false;

    let proto = Object.getPrototypeOf(target)
    while (proto) {
        if (proto === origin.prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }

    return false;
}


[] instanceof Array;
[] instanceof Object;

_instanceof([], Array)
_instanceof([], Object)