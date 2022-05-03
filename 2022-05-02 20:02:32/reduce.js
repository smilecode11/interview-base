Array.prototype._reduce = function (cb) {
    let arr = this;
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = cb(result, arr[i], i, arr)
    }

    return result
}

Array.prototype._reduce2 = function (cb, initialData) {
    let arr = this;
    let result = initialData || arr[0];
    for (let i = initialData ? 0 : 1; i < arr.length; i++) {
        result = cb(result, arr[i], i, arr)
    }

    return result
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr._reduce((prev, curr) => {
    prev = prev + curr;
    return prev
})

arr._reduce2((prev, curr) => {
    prev = prev + curr;
    return prev
}, 0)
