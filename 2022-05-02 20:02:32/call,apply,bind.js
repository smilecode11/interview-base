Function.prototype._call = function (context) {
    if (typeof this !== 'function') throw new Error('type error')

    context = context || window;
    let args = [...arguments].slice(1)
    let smbolKey = Symbol()
    context[smbolKey] = this;
    let result = context[smbolKey](...args)

    delete context[smbolKey]
    return result
}

Function.prototype._apply = function (context) {
    if (typeof this !== 'function') throw new Error('type error')

    context = context || window;
    let args = arguments[1];
    let symbolKey = Symbol()
    context[symbolKey] = this;
    let result = null;
    if (args) {
        result = context[symbolKey](...args)
    } else {
        result = context[symbolKey]()
    }

    delete context[symbolKey]
    return result
}

Function.prototype._bind = function (context) {
    if (typeof this !== 'function') throw new Error('type error')
    context = context || window;
    let self = this;
    let args = [...arguments].slice(1)

    return function () {
        let bindArgs = [...arguments];
        self.apply(context, args.concat(bindArgs))
    }
}

let obj = {
    name: "smiling",
    run: function () {
        console.log(`${this.name} is runing with args ${JSON.stringify(arguments)}`)
    }
}

let newObj = {
    name: "smiling233",
    run: function () {
        console.log(`${this.name} is runing`)
    }
}

obj.run._call(newObj)
obj.run._apply(newObj, [520])
obj.run._bind(newObj, 123, 520)(789)
