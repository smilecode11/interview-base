function flat(arr, dept = 1) {
    if (dept > 0) {
        return arr.reduce((prev, curr) => prev.concat(Array.isArray(curr) ? flat(curr, dept - 1) : curr), [])
    }
    return arr.slice("")
}

flat([1, 2, 3, 4, 5, 6, [3, [4, [6666]]]])