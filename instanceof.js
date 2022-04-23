function myInstanceof(target, origin) {
    if (typeof target !== 'object' || target === null) return false;
    if (typeof origin !== 'function') throw new Error('origin must be function')

    let proto = Object.getPrototypeOf(target)   //  相当于 proto = target.__proto__
    while (proto) {
        if (proto === origin.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
    return false
}


function C() { }
let c = new C()
c instanceof C  //  true

myInstanceof(c, C)  //  true
myInstanceof([1,2,3], Array)