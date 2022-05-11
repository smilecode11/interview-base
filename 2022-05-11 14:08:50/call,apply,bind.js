var obj = {
    value: "obj.value",
    fn: function () {
        console.log(this.value)
        console.log(JSON.stringify(arguments))
    }
}
// obj.fn()    //  obj.value

var newObj = {
    value: 'new obj value',
    fn: function () {
        console.log(this.value)
        console.log(JSON.stringify(arguments))
    }
}
// newObj.fn() //  new obj value



Function.prototype._call = function (context) {
    if (typeof this !== 'function') throw new Error('type error')
    if (typeof context !== 'object') throw new Error(`context must be an object`)

    const args = [...arguments].slice(1)    //  参数
    context = context || window
    const symbolKey = Symbol()
    context[symbolKey] = this;
    let result = context[symbolKey](...args)

    delete context[symbolKey]
    return result
}

Function.prototype._apply = function (context) {
    if (typeof this !== 'function') throw new Error('type error')
    if (typeof context !== 'object') throw new Error(`context must be an object`)

    context = context || window
    const symbolKey = Symbol()
    context[symbolKey] = this;

    let result = null

    if (arguments[1]) {
        context[symbolKey](...arguments[1])
    } else {
        context[symbolKey]()
    }

    delete context[symbolKey]
    return result
}

Function.prototype._bind = function (context) {
    if (typeof this !== 'function') throw new Error('type error')

    const self = this;
    let args = [...arguments].slice(1)
    context = context || window

    return function () {
        let bindArgs = [...arguments].slice(0)
        return self.apply(context, args.concat(bindArgs))
    }
}


obj.fn._call(newObj, 123, 322)
obj.fn._apply(newObj, [123, 322])
obj.fn._bind(newObj, 123, 322)(520, 250)