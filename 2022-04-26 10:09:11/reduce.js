[1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((prev, curr) => prev = prev + curr)

//  不考虑初始值, 第一位设置初始值
Array.prototype._reduce = function (callback) {
    if (Object.prototype.toString.call(this) !== '[object Array]') throw new Error("type error, must be a array object")

    let arr = this;
    let total = arr[0];
    for (let i = 1; i < arr.length; i++) {
        total = callback(total, arr[i], i, arr)
    }

    return total
}

[1, 2, 3, 4, 5, 6, 7, 8, 9]._reduce((prev, curr) => prev = prev + curr)


//  考虑初始值, 需要判断初始值是否存在
Array.prototype._reduce2 = function (callback, initialValue) {
    if (Object.prototype.toString.call(this) !== '[object Array]') throw new Error("type error, must be a array object")

    let arr = this;
    let total = initialValue ? initialValue : arr[0];
    for (let i = initialValue ? 0 : 1; i < arr.length; i++) {
        total = callback(total, arr[i], i, arr)
    }

    return total
}

[1, 2, 3, 4, 5, 6, 7, 8, 9]._reduce2(((prev, curr) => prev = prev + curr), 0)
