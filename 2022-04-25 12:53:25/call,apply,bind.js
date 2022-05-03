// 实现 call
Function.prototype._call = function (context) {
    if (typeof this !== 'function') throw Error('_call must be a function use')
    context = context || window;
    let args = [...arguments].slice(1);

    const fnSymbol = Symbol()
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args)
    delete context[fnSymbol]

    return result
}

// 实现 apply
Function.prototype._apply = function (context) {
    if (typeof this !== 'function') throw Error('_apply must be a function use')
    context = context || window;

    const fnSymbol = Symbol()
    const args = [...arguments].slice(1);
    context[fnSymbol] = this;
    let result = null;
    console.log('args',args)
    if (args.length > 0) {
        result = context[fnSymbol](...args)
    } else {
        result = context[fnSymbol]()
    }
    delete context[fnSymbol]
    return result;
}

//  实现 bind
Function.prototype._bind = function (context) {
    if (typeof this !== 'function') throw Error('_bind must be a function use')
    context = context || window;
    const _self = this;
    const args = [...arguments].slice(1)

    return function Fn() {
        const bindArgs = arguments
        return _self.apply(context, args.concat(bindArgs))
    }
}

const tempObj = {
    name: "tempObj",
    run: function () {
        console.log(this.name)
    }
}

const targetObj = {
    name: "targetObj",
    run: function () {
        console.log(this.name)
    }
}

const run1 = tempObj.run._call(targetObj)
const run2 = tempObj.run._apply(targetObj)
const run3 = tempObj.run._bind(targetObj)()