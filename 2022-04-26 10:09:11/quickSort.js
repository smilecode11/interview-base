//  实现快速排序
const arr = [19, 6, 1, 22, 13, 11, 96]

function sortArr(arr) {
    quickSort(0, arr.length - 1, arr)
    return arr
}

function quickSort(start, end, arr) {
    if (start < end) {
        let mid = sortAndGetMiddle(start, end, arr)
        quickSort(0, mid - 1, arr)
        quickSort(mid + 1, end, arr)
    }
}

function sortAndGetMiddle(start, end, arr) {
    let base = arr[start];
    let left = start;
    let right = end;

    while (left !== right) {
        while (arr[right] >= arr[left] && right > left) {
            right--;
        }
        arr[left] = arr[right]
        while (arr[left] <= arr[right] && right > left) {
            left++;
        }
        arr[right] = arr[left]
    }

    arr[left] = base;
    return left;
}

sortArr(arr)