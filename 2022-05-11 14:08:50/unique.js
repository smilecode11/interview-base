const unique = (arr) => {
    return [...new Set(arr)]
}

const unique2 = (arr) => {
    return arr.filter((item, index, arr) => arr.indexOf(item) === index)
}

let arr = [1, 2, 3, 4, 5, [6, 7], 8, 8, "8", [6, 7]]
unique(arr)
unique2(arr)
