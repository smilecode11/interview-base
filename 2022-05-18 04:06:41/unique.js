function unique(arr) {
    return [...new Set(arr)]
}

function unique(arr) {
    return arr.filter((value, index, arr) => arr.indexOf(value) === index)
}

function unique(arr) {
    let temp = {}
    for (let i = 0; i < arr.length; i++) {
        temp[arr[i]] = i;
    }
    return Object.keys(temp)
}