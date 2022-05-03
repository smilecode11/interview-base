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


function query(data) {

    return {
        where(fn) {
            data = Array.prototype.filter.call(data, fn)
            return this;
        },

        orderBy(key) {
            data.sort((a, b) => a[key] - b[key])
            return this;
        },

        groupBy(key) {
            let originArr = data,
                keyArr = [],
                resultArr = [];
            
            for (let i = 0; i < originArr.length; i++) {
                if (keyArr.indexOf(originArr[i][key]) === -1) {
                    resultArr.push({
                        [key]: originArr[i][key],
                        data: [originArr[i]]
                    })
                    keyArr.push(data[i][key])
                } else {
                    for (let j = 0; j < resultArr.length; j++) {
                        if (resultArr[j][key] === originArr[i][key]) {
                            resultArr[j].data.push(originArr[i])
                        }
                    }
                }
            }
            
            resultArr = resultArr.reduce((prev, curr) => {
                prev.push(curr.data)
                return prev
            }, [])

            data = resultArr;
            return this;
        },

        execute() {
            return data
        }

    }
}