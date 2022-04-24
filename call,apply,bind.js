var obj = {
    value: "obj.value",
    fn: function () {
        console.log(this.value)
    }
}
obj.fn()    //  obj.value


// call(this, ...args) 改变 this指向, 执行函数
Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new Error('must be function use myCall');
    }
    //  参数获取
    let args = [...arguments].slice(1);
    let result = null;
    context = context || window;
    context.fn = this;
    result = context.fn(...args)
    delete context.fn;
    return result;
}

var newObj = {
    value: 'new obj value',
    fn: function () {
        console.log(this.value)
    }
}

obj.fn.myCall(newObj)


//  apply(this, [...args]) 改变指向, 执行函数
Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new Error('must be function use myApply')
    }
    let args = arguments[1]
    let result = null;
    context = context || window;
    //  创建唯一 key 作为当前函数的属性
    const fnSymbol = Symbol()
    context[fnSymbol] = this;
    if (args) {
        result = context[fnSymbol](...args)
    } else {
        result = context[fnSymbol]()
    }
    delete context[fnSymbol]
    return result
}

obj.fn.myApply(newObj)

//  bind(this)  改变指向, 返回一个函数
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new Error("mest be function use mybind")
    }
    let args = [...arguments].slice(1)  //  bind() 时携带的参数
    let self = this;    //  this 指向原函数
    context = context || window;

    return function Fn() {
        const bindArgs = [...arguments];    //  bind()() 时携带的参数
        return self.call(context, ...args.concat(bindArgs))
    }
}
obj.fn.myBind(newObj)(123)








// --------- 2022年04月24日11:04:06 温习 call, apply, bind 实现
let testObj = {
    value: 'testObj value',
    fn: function () {
        console.log(this.value)
    }
}
testObj.fn()
let newTestObj = {
    value: 'newTestObj value',
    fn: function () {
        console.log(this.value)
    }
}

//  1. call 实现 func.call(tagetObj, ...args)
Function.prototype.myCallTest = function (context) {
    if (typeof this !== 'function') throw new Error("must be a function use mycallTest");
    let args = [...arguments].slice(1);  //  除指向外的其他传入参数
    context = context || window;    //  指向赋值, 默认 window
    let result = null;  //  返回初始化

    const fnSymbol = Symbol()   //  创建唯一 key 作为原对象临时使用
    context[fnSymbol] = this;
    result = context[fnSymbol](...args)
    delete context[fnSymbol]

    return result;
}

testObj.fn.myCallTest(newTestObj)

//  2. apply 实现, func.apply(targetObj, args)
Function.prototype.myApplyTest = function (context) {
    if (typeof this !== 'function') throw new Error("must be a function use myApplyTest");
    let args = arguments[1];//  传入参数
    context = context || window;    //  未指定this 指向对象, 默认 window
    let result = null;

    const fnSymbol = Symbol()
    context[fnSymbol] = this;
    if (args) {
        result = context[fnSymbol](...args)
    } else {
        result = context[fnSymbol]()
    }
    delete context[fnSymbol]

    return result
}

testObj.fn.myApplyTest(newTestObj)


//  3. bind 实现, func.bind(targetObj)(...args)
Function.prototype.myBindTest = function (context) {
    if (typeof this !== 'function') throw new Error("must be a function use myBindTest");
    const self = this;
    const args = [...arguments].slice(1);
    context = context || window;

    return function Fn() {
        const bindArgs = arguments;
        return self.apply(context, [...args.concat(bindArgs)])
    }
}

testObj.fn.myBindTest(newTestObj, 13, 3, 4)(123)