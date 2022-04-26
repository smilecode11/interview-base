let obj1 = {
    name: "obj1",
    showName(name) {
        console.log(name ? name : this.name)
    }
}
let obj2 = {
    name: 'obj2'
}

//  修改 this 并执行, fn.call(obj, ...args)
Function.prototype._call = function (context) {
    let args = [...arguments].slice(1)
    let result = null;
    context = context || window;

    const fnSymbol = Symbol()
    context[fnSymbol] = this;
    result = context[fnSymbol](...args)

    delete context[fnSymbol]
    return result
}
obj1.showName._call(obj2)


//  修改 this 并执行, fn.apply(obj, args)
Function.prototype._apply = function (context) {
    let args = [...arguments].slice(1)
    let result = null;
    context = context || window;

    const fnSymbol = Symbol()
    context[fnSymbol] = this;

    if (args.length) {
        result = context[fnSymbol](...args)
    } else {
        result = context[fnSymbol]()
    }

    delete context[fnSymbol]
    return result
}
obj1.showName._apply(obj2)


//  修改 this, 返回一个新的函数
Function.prototype._bind = function (context) {
    let args = [...arguments].slice(1)
    let self = this;
    context = context || window;

    return function Fn() {
        let bindArgs = arguments
        self.apply(context, args.concat(bindArgs))
    }
}

obj1.showName._bind(obj2)()

