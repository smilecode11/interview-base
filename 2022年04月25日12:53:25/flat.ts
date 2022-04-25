/**
 * 实现数组扁平化
 */
function flat(arr: any[], dept = 1) {
  if (dept > 0) {
    return arr.reduce((prev, curr) => {
      return prev.concat(Array.isArray(curr) ? flat(curr, dept - 1) : curr);
    }, []);
  }
  return arr.slice();
}
flat([1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]], 1);



function flatNormal(arr) {
    return arr.reduce((prev, curr) => {
        return prev.concat(Object.prototype.toString.call(curr) === '[object Array]' ? flatNormal(curr) : curr)
    }, [])
}
flatNormal([1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]]);