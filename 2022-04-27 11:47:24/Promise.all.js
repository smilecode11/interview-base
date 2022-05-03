//  实现 Promise.all
Promise.all = function (promises) {
    return new Promsie((resolve, reject) => {
        if (promises.length === 0) {
            resolve([])
        } else {
            let result = [],
                count = 0;
            const len = promises.length;
            for (let i = 0; i < len; i++) {
                promises[i].then(data => {
                    result[i] = data;
                    if (++count === len) {
                        resolve(result)
                    }
                }).catch((err) => {
                    reject(err)
                })
            }
        }
    })
}

//  实现 Promise.all
Primise.all = function (promises) {
    return new Promsie((resolve, reject) => {
        //  考虑参数不是数组, 支持 Iterator
        if (typeof promises[Symbol.iterator] !== 'function') {
            reject('Type error')
        }

        if (promises.length === 0) {
            resolve([])
        } else {
            const res = [],
                count = 0,
                len = promises.length;
            for (let i = 0; i < len; i++) {
                // 考虑参数可能不不是数组
                Promise.resolve(promises[i]).then(data => {
                    res[i] = data;
                    if (++count === len) {
                        resolve(res)
                    }
                }).catch(err => {
                    reject(err)
                })
            }
        }
    })
}