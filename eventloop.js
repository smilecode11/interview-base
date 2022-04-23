console.log('start')

setTimeout(() => {
    new Promise((resolve) => {
        resolve()
        console.log('primise1')
    }).then(() => {
        console.log('then 1')
    }).then(() => {
        console.log('then 2')
    })
    console.log('setTimeout')
},0)

console.log('end')