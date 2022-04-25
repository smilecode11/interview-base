const data = [
    { name: 'foo', age: 16, city: 'shanghai' },
    { name: 'bar', age: 24, city: 'hangzhou' },
    { name: 'fiz', age: 22, city: 'shanghai' },
    { name: 'baz', age: 19, city: 'hangzhou' }
];

query(data)
    .where(item => item.age > 18)
    .orderBy('age')
    .groupBy('city')
    .execute();


function query(arr) {
    return {
        where: function (fn) {
            arr = arr.filter(fn)
            return this;
        },
        orderBy: function (key) {
            arr.sort(function (a, b) {
                let v1 = a[key];
                let v2 = b[key]
                return v1 - v2
            })
            return this;
        },
        groupBy: function (key) {
            let tempArr = [];
            let resultArr = [];

            for (let i = 0; i < arr.length; i++) {
                if (tempArr.indexOf(arr[i][key]) === -1) {   //  没找到
                    resultArr.push({
                        [key]: arr[i][key],
                        data: [arr[i]]
                    })
                    tempArr.push(arr[i][key]);
                } else {
                    for (let j = 0; j < resultArr.length; j++) {
                        if (resultArr[j][key] === arr[i][key]) {
                            resultArr[j].data.push(arr[i]);
                            break;
                        }
                    }
                }
            }
            arr = resultArr.reduce((prev, curr) => {
                prev.push(curr.data)
                return prev
            }, [])

            return this;
        },
        execute: function () {
            return arr;
        }
    }
}



