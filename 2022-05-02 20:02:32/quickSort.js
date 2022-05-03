function sortArr(arr) {
    quickSort(0, arr.length - 1, arr)
    return arr
}

function quickSort(start, end, arr) {
    if (start < end) {
        let midl = sort(start, end, arr)
        quickSort(0, midl - 1, arr)
        quickSort(midl + 1, end, arr)
    }
}

function sort(start, end, arr) {
    let base = arr[start],
        left = start,
        right = end;

    while (left !== right) {
        while (arr[right] >= base && right > left) {
            right--;
        }
        arr[left] = arr[right];
        while (arr[left] <= base && right > left) {
            left++;
        }
        arr[right] = arr[left];
    }
    arr[left] = base;
    return left
}

let arr = [19, 1, 4, 25, 1, 25, 10, 16]
sortArr(arr)