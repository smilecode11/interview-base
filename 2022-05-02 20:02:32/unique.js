function unique(arr) {
    return [...new Set(arr)]
}

function unique2(arr) {
    return arr.filter((item, index, arr) => arr.indexOf(item) === index)
}

function unique3(arr) {
    let temp = {}
    for (let i = 0; i < arr.length; i++) {
        if (!temp[arr[i]]) {
            temp[arr[i]] = arr[i]
        }
    }
    return Object.keys(temp);
}

let arr = [1, 2, 3, 4, 5, [6, 7], 8]
unique(arr)
unique2(arr)
unique3(arr)
