function flat(arr, dept) {
    if (dept > 0) {
        return arr.reduce((prev, curr) => {
            return prev.concat(Array.isArray(curr) ? flat(curr, dept - 1) : curr)
        }, [])
    }
    return arr.slice()
}

flat([2, [1, 2, 3, 44, [44, 55]]], 2)
