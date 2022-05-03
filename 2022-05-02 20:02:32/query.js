function query(arr) {

    return {
        where(cb) {
            arr = Array.prototype.filter.call(arr, cb)
            return this;
        },
        orderBy(keyName) {
            arr.sort((a, b) => a[keyName] - b[keyName])
            return this;
        },
        groupBy(keyName) {
            let tempArr = [],
                result = [];
            for (let i = 0; i < arr.length; i++) {
                if (!tempArr[arr[i][keyName]]) {
                    result.push({
                        [keyName]: arr[i][keyName],
                        data: [arr[i]]
                    })
                    tempArr[arr[i][keyName]] = arr[i][keyName];
                } else {
                    for (let j = 0; j < result.length; j++) {
                        if (arr[i][keyName] === result[j][keyName]) {
                            result[j].data.push(arr[i])
                            break;
                        }
                    }
                }
            }
            arr = result.reduce((prev, curr) => {
                prev.push(curr.data)
                return prev
            }, [])

            return this;
        },
        execute() {
            return arr
        }
    }
}


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
