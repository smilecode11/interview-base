function sortArr(arr) {
    quickSort(0, arr.length - 1, arr)
    return arr;
}

function quickSort(start, end, arr) {
    if (start < end) {
        let midle = sort(start, end, arr)
        quickSort(0, midle - 1, arr)
        quickSort(midle + 1, end, arr)
    }
}

function sort(start, end, arr) {
    let left = start,
        right = end,
        base = arr[start];

    while (left !== right) {
        while (arr[right] >= base && right > left) {
            right--
        }
        arr[left] = arr[right]

        while (arr[left] <= base && right > left) {
            left++
        }
        arr[right] = arr[left]
    }

    arr[left] = base;
    return left
}


let arr = [19, 1, 4, 25, 1, 25, 10, 16]
sortArr(arr)