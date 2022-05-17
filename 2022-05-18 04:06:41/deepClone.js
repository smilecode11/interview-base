function deepClone(source) {
    if (typeof source !== 'object') return source;

    let result = {}
    if (Object.prototype.toString.call(source) === '[object Array]') {
        result = []
    }

    for (const prop in source) {
        if (Object.hasOwnProperty.call(source, prop)) {
            result[prop] = deepClone(source[prop])
        }
    }

    return result
}

let obj1 = [1, 2, 3, 4, { name: 'smiling', age: 19 }]
let obj2 = deepClone(obj1)
obj1.shift()
obj1[obj1.length - 1].name = 'smiling...'
obj1[obj1.length - 1].age = 27
console.log(' obj1-', obj1, ' obj2-', obj2)