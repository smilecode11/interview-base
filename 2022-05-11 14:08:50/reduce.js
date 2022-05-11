Array.prototype._reduce = function (cb, initialData) {
    if (Object.prototype.toString.call(this) !== '[object Array]') {
        throw new Error('type error')
    }
    let context = this;
    let total = initialData || context[0];
    for (let i = initialData ? 0 : 1; i < context.length; i++) {
        total = cb(total, context[i], i, context)
    }
    return total;
}

[1, 2, 3, 4, 5].reduce((prev, curr) => {
    prev += curr;
    return prev
}, 0)
    
[1, 2, 3, 4, 5]._reduce((prev, curr) => {
    prev += curr;
    return prev
}, 0)