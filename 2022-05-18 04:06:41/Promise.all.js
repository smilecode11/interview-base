Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return resolve([]);

        let result = [], count = 0, len = promises.length;
        for (let i = 0; i < len; i++) {
            promises[i].then(data => {
                result[i] = data;
                if (++count === len) {
                    resolve(result)
                }
            }).catch(err => {
                reject(err);
            })
        }
    })
}


//------------

Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) return resolve([])

        let result = [];
        let len = promises.length;
        let count = 0;

        for (let i = 0; i < len; i++) {
            promises[i].then(data => {
                result[i] = data;
                
                if (++count === len) {
                    resolve(result)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}