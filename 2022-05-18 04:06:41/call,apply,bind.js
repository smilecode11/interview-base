var obj = {
    value: "obj.value",
    fn: function () {
        console.log(this.value)
    }
}

var newObj = {
    value: 'new obj value',
    fn: function () {
        console.log(this.value)
    }
}


//  改变 this 指向并执行函数
Function.prototype._call = function (context = window) {
    if (typeof this !== 'function') throw Error('type err');

    const args = [...arguments].slice(1);
    let result = null;
    context.fn = this;

    result = context.fn(...args)

    delete context.fn;
    return result;
}

obj.fn._call(newObj)


Function.prototype._apply = function (context = window) {
    if (typeof this !== 'function') throw Error('type err');

    let result = null;
    let symbolFn = Symbol()
    context[symbolFn] = this;

    if (arguments[1]) {
        result = context[symbolFn](...arguments[1])
    } else {
        result = context[symbolFn]()
    }
    delete context[symbolFn]

    return result
}

obj.fn._apply(newObj)


Function.prototype._bind = function (context = window) {
    if (typeof this !== 'function') throw Error('type err');
    const self = this;
    const args = [...arguments].slice(1)

    return function () {
        const bindArgs = [...arguments].slice()
        self.apply(context, args.concat(bindArgs))
    }
}

obj.fn._bind(newObj)()
