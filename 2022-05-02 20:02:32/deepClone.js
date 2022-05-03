function deepClone(source, map = new Map()) {
    if (typeof source !== 'object') return source
    if (map.get(source)) return map.get(source)

    let result = {}
    if (Object.prototype.toString.call(source) === '[object Array]') result = []
    map.set(source, result)
    for (const key in source) {
        if (Object.hasOwnProperty.call(source, key)) {
            result[key] = deepClone(source[key], map)
        }
    }

    return result
}

let obj = {
    a: 1,
    arr: [1, 2, 3, 4, [5, 6]],
    b: 123
}

let cloneObj = deepClone(obj)
