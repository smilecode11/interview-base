/**
 * 快速排序
 */
//  视频理解 https://www.bilibili.com/video/BV1at411T75o?from=search&seid=10065750342799523965&spm_id_from=333.337.0.0

function sortArr(arr) {
    quickSort(0, arr.length - 1, arr)
    return arr
}

function quickSort(start, end, arr) {
    if (start < end) {
        const midl = sort(start, end, arr)
        quickSort(start, midl - 1, arr)
        quickSort(midl + 1, end, arr)
    }
}

function sort(start, end, arr) {
    let base = arr[start];
    let left = start;
    let right = end;
    while (left !== right) {
        while (arr[right] >= base && right > left) {
            right--;
        }
        arr[left] = arr[right];
        while (arr[left] <= base && right > left) {
            left++;
        };
        arr[right] = arr[left];
    }
    arr[left] = base;
    return left;
}
