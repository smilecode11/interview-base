function flat(arr, dept) {
    if (dept > 0) {
        return arr.reduce(((prev, curr) => prev.concat(Array.isArray(curr) ? flat(curr, dept - 1) : curr)), [])
    }
    return arr.slice()
}

let arr = [1, 2, 3, [4, 5, [6, 7, 8, [9, [10]]]]]
flat(arr, 99)