// 实现 reduce
Array.prototype.myReduce = function (callback) {
    let arr = this;
    let total = arr[0];
    for (let i = 1; i < arr.length; i++) {
        total = callback(total, arr[i], i, arr)
    }
    return total
}

Array.prototype.myReduce2 = function (callback, initialValue) {
    let arr = this;
    let total = initialValue || arr[0];
    for (let i = initialValue ? 0 : 1; i < arr.length; i++) {
        total = callback(total, arr[i], i, arr)
    }
    return total
}

Array.prototype.myReduceFinally = function (callback, initialValue) {
    let arr = this;
    let total = initialValue || arr[0];
    for (let i = initialValue ? 0 : 1; i < arr.length; i++) {
        total = callback(total, arr[i], i, arr)
    }
    return total
}

let tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
tempArr.myReduceFinally((prev, curr) => {
    prev = prev + curr;
    return prev
})