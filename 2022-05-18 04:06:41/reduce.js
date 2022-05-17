Array.prototype._reduce = function (callback, initialData) {
    if (Object.prototype.toString.call(this) !== '[object Array]') throw new Error('type error')

    let arr = this;
    let result = initialData || arr[0];

    for (let i = initialData ? 0 : 1; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr)
    }

    return result;
}

// [1, 2, 3, 4, 5].reduce((prev, curr) => prev += curr, 0)
[1, 2, 3, 4, 5]._reduce((prev, curr) => prev += curr, 0)