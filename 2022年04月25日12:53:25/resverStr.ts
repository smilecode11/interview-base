/**
 * 实现输入字符串, 输出翻转字符串
 */
function resverStr(str: string) {
  let tempArr = [];
  for (let i = 0; i < str.length; i++) {
    tempArr.unshift(str.charAt(i));
  }
  return tempArr.join("");
}

resverStr('Hello world!')