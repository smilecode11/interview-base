const data = [
    { name: 'foo', age: 16, city: 'shanghai' },
    { name: 'bar', age: 24, city: 'hangzhou' },
    { name: 'fiz', age: 22, city: 'shanghai' },
    { name: 'baz', age: 19, city: 'hangzhou' },
    { name: 'baz', age: 20, city: 'hangzhou' },
];

query(data)
    .where(item => item.age > 18)
    .orderBy('age')
    .groupBy('city')
    .execute();


function query(data) {
    
    return {
        where(cb) {
            data = data.filter(cb)
            return this
        },
        orderBy(key) {
            data.sort(function (a, b) {
                let v1 = a[key],
                    v2 = b[key];
                return v1 - v2
            })
            return this
        },
        groupBy(key) {
            let keyArr = [] //  key[], 用于判断组别是否已存在
            let result = [] //  分组结果

            for (let i = 0; i < data.length; i++) {
                if (keyArr.indexOf(data[i][key])) {
                    result.push({
                        [key]: data[i][key],
                        data: [data[i]]
                    })
                    keyArr.push(data[i][key])
                } else {
                    for (let k = 0; k < result.length; k++) {
                        if (result[k][key] === data[i][key]) {
                            result[k].data.push(data[i])
                        }
                    }
                }
            }

            data = result.reduce((prev, curr) => {
                prev.push(curr.data)
                return prev
            }, [])

            return this
        },
        execute() {
            return data
        }
    }
}