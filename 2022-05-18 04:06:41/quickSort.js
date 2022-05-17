function sortArr(arr = []) {
    quickSort(0, arr.length - 1, arr);
    return arr
}

function quickSort(start, end, arr) {
    if (start < end) {
        let middle = sort(start, end, arr)
        quickSort(0, middle - 1, arr);
        quickSort(middle + 1, end, arr);
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
    return left;
}

sortArr([18, 9, 2, 20, 16])