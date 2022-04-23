//  不考虑初始值
Array.prototype.myReduce = function (callback) {
    const arr = this;   //  this 即调用 myReduce 的数组
    let total = arr[0]
    for (let i = 0; i < arr.length; i++) {
        total = callback(total, arr[i], i, arr)
    }
    return total
}

//  考虑初始值
Array.prototype.myReduce = function (callback, initialValue) {
    const arr = this;
    let total = initialValue || arr[0];
    //  有初始值从 0 开始遍历, 没有从 1 开始遍历
    for (let i = initialValue ? 0 : 1; i < arr.length; i++) {
        total = callback(total, arr[i], i, arr);
    }
    return total
}
