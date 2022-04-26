function reverseWithStr(str) {
    return str.split('').reverse().join("")
}
reverseWithStr('hello, world!')

function reverseWithStr2(str) {
    let temp = [];
    for (let i = 0; i < str.length; i++){
        // temp.unshift(str[i])
        temp.unshift(str.charAt(i))
    }
    return temp.join("")
}
reverseWithStr2('hello, world!')