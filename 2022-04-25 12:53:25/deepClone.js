function deepClone(source, map = new Map()) {
    if (typeof source !== 'object') return source;
    if (map.get(source)) return map.set(source)
    //  初始化值
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


const a = { a: 1, b: 2, c: [1, 2] }
const aClone = deepClone(a)
aClone.newAttr = '新属性'
console.log(a, aClone)

