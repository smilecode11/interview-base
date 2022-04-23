//  去重
function unique(arr) {
    return [...new Set(arr)]
}

function unique(arr) {
    return arr.filter((item, index, array) => {
        return array.indexOf(item) === index
    })
}

function unique(arr) {
    let obj = {}
    for (const key in arr) {
        obj[arr[key]] = typeof arr[key]
    }
    return (Object.keys(obj)).map((item, index) => {
        return (Object.values(obj))[index] === 'string' ? String(item) : Number(item)
    })
}
