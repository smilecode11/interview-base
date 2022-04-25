// 数组扁平化
function flat(arr, dept = 1) {
    if (dept > 0) {
        return arr.reduce((prev, curr) => {
            return prev.concat(Array.isArray(curr) ? flat(curr, dept - 1) : curr)
        }, [])
    }
    return arr.slice()
}
console.log(flat([2, [1, 2, 3, 44, [44, 55]]], 2))

function flat2(arr) {
    return (arr.reduce((prev, curr) => {
        return prev.concat(Array.isArray(curr) ? flat2(curr) : curr)
    }, [])).slice()
}
console.log(flat2([2, [1, 2, 3, 44, [44, 55]]], 2))
