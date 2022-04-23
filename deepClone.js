/** 深拷贝*/

function deepClone(source, map = new Map()) {
    if (typeof source !== 'object') return source;
    if (map.get(source)) return map.get(source);

    //  初始化
    let result = {};
    if (Object.prototype.toString.call(source) === '[object Array]') {
        result = [];
    }
    map.set(source, result)
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


//  ---------------
function deepClone(sourceObj, map = new Map()) {
    if (typeof sourceObj !== 'object') return sourceObj;
    if (map.get(sourceObj)) return map.get(sourceObj);
    //  初始化返回值
    let result = {}
    //  数组处理
    if (Object.prototype.toString.call(sourceObj) === 'object Array') {
        result = []
    }
    //  防止循环引用
    map.set(sourceObj, result)
    for (const key in sourceObj) {
        if (Object.hasOwnProperty.call(sourceObj, key)) {
            result[key] = deepClone(sourceObj[key], map)
        }
    }
    //  返回新对象
    return result;
}
