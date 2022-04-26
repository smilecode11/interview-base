// 不考虑层级
function flat(arr) {
    return arr.reduce((prev, curr) => prev.concat(Array.isArray(curr) ? flat(curr) : curr), [])
}


//  考虑层级
function flat2(arr, dept = 1) {
    if (dept > 0) {
        return arr.reduce((prev, curr) => {
            return prev.concat(Array.isArray(curr) ? flat2(curr, dept - 1) : curr)
        }, [])
    }
    return arr.slice()
}

const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10]]]]
flat(arr)
flat2(arr, 99)