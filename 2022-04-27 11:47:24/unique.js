const unique = (arr) => [...new Set(arr)]

const unique2 = (arr) => arr.filter((item, index, arr) => arr.indexOf(item) === index)

const unique3 = (arr) => {
    let tempObj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!tempObj[arr[i]]) {
            tempObj[arr[i]] = null
        }
    }
    return Object.keys(tempObj)
}

unique([1, 2, 2, 3, 1, "2", "3", 5])    //  (6) [1, 2, 3, '2', '3', 5]
unique2([1, 2, 2, 3, 1, "2", "3", 5])   //  (6) [1, 2, 3, '2', '3', 5]
unique3([1, 2, 2, 3, 1, "2", "3", 5])   //  (4) ['1', '2', '3', '5']