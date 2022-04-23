/** 深拷贝*/

function deepClone(source, map = new Map()) {
    if (typeof source !== 'object') return source;
    if (map.get(source)) return map.get(source);

    //  初始化
    let result = {};
    if (Object.prototype.toString.call(source) === '[object Array]') {
        result = [];
    }
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            // 递归赋值
            result[key] = deepClone(source[key], map)
        }
    }
    return result
}

const a = { a: 1, b: 2, c: [1, 2] }
const aClone = deepClone(a)
aClone.newAttr = '新属性'
console.log(a, aClone)