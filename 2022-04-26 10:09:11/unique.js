//  Set
const arr = [1, 2, 4, 4, 5, 5, "4", "3", "1"]
function unique(arr) {
    return [...new Set(arr)]
}
console.log(unique(arr))


//  filter: index === arr.indexOf(item)
function unique2(arr) {
    return arr.filter((item, index, arr) => arr.indexOf(item) === index)
}
console.log(unique2(arr))

//  object  唯一 key
function unique3(arr) {
    let tempObj = {},
        result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!tempObj[arr[i]]) {
            result.push(arr[i])
            tempObj[arr[i]] = arr[i]
        }
    }
    return result
}
console.log(unique3(arr))