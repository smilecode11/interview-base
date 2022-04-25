function sortArr(arr) {
    quickSort(0, arr.length - 1, arr)
    return arr
}

function quickSort(start, end, arr) {
    if (start < end) {
        let middle = sort(start, end, arr)
        quickSort(0, middle - 1, arr);
        quickSort(middle + 1, end, arr)
    }
}

function sort(start, end, arr) {
    let base = arr[start];
    let left = start;
    let right = end;
    while (left !== right) {
        while (arr[right] >= arr[left] && right > left) {
            right--;
        }
        arr[left] = arr[right];
        while (arr[left] <= arr[right] && right > left) {
            left++;
        }
        arr[right] = arr[left]
    }
    arr[left] = base;
    return left
}

sortArr([12, 1, 4, 2, 25, 510, 240])
