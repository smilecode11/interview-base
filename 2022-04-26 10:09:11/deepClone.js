// 实现深拷贝

function deepClone(source, map = new Map()) {
    if (typeof source !== 'object') return source;
    if (map.get(source)) return map.get(source)

    let result = {}
    if (Object.prototype.toString.call(source) === '[object Array]') {
        result = []
    }
    map.set(source, result)
    for (const key in source) {
        if (Object.hasOwnProperty.call(source, key)) {
            result[key] = deepClone(source[key], map)
        }
    }
    return result
}

let temp = [1, 2, 3, 4, 5, 7, 8, 6, 9, 10, [11, 12, [14, 13, [15]]]]
let temp2 = [{ name: "尘心", age: 27 }, 520]

const cloneTemp = deepClone(temp)
cloneTemp.push({
    name: 'temp1 clone',
    age: 27
})
console.log(cloneTemp, temp)

const cloneTemp2 = deepClone(temp2)
cloneTemp2[1] = 250;
console.log(cloneTemp2, temp2)
