Function.prototype._call = function (context) {
    if (typeof this !== 'function') throw new Error('type error')

    const args = [...arguments].slice(1)
    context = context || window;
    let fnSymbol = Symbol()
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args)

    delete context[fnSymbol]
    return result
}

Function.prototype._apply = function (context) {
    if (typeof this !== 'function') throw new Error('type error')

    const args = arguments[1]
    context = context || window;
    let fnSymbol = Symbol()
    context[fnSymbol] = this;
    if (args) {
        context[fnSymbol](...args)
    } else {
        context[fnSymbol]()
    }

    delete context[fnSymbol]
    return result
}

Function.prototype._bind = function (context) {
    if (typeof this !== 'function') throw new Error('type error')

    context = context || window;
    const args = [...arguments].slice(1)
    const self = this;

    return function () {
        const bindArgs = [...arguments]
        return self.apply(context, args.concat(bindArgs))
    }
}
