/**
 * 实现唯一值数组
 */
function unique(arr: any[]) {
  return [...new Set(arr)];
}

function unique2(arr: any[]) {
  let tempObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!tempObj[arr[i]]) {
      tempObj[arr[i]] = arr[i];
    }
  }
  return Object.keys(tempObj);
}

function unique3(arr: any) {
  return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}
