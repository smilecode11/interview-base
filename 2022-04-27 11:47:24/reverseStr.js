const reverseStr = (str) => str.split("").reverse().join("")

const reverseStr2 = (str) => {
    let tempArr = []
    for (let i = 0; i < str.length; i++) {
        // tempArr.unshift(str[i])
        tempArr.unshift(str.charAt(i))
    }
    return tempArr.join("")
}

reverseStr("hello world!")
reverseStr2("hello world!")