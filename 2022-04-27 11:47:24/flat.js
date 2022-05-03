const flat = (arr, dept = 1) => {
    if (dept > 0) {
        return arr.reduce((prev, curr, index) => prev.concat(Array.isArray(curr) ? flat(curr, dept - 1) : curr), [])
    }
    return arr.slice()
}

const flat2 = (arr) => arr.reduce((prev, curr) => prev.concat(Array.isArray(curr) ? flat2(curr) : curr), [])

flat([1, 2, 3, [4, 5, [7, [8]]]])
flat2([1, 2, 3, [4, 5, [7, [8]]]])
