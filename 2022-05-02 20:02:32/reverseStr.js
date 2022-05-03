function reverseStr(str) {
    return str.split("").reverse().join("")
}

function reverseStr2(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        // result.unshift(str[i])
        result.unshift(str.charAt(i))
    }
    return result.join("");
}


reverseStr('hello wolrd')