console.log('start')

setTimeout(() => {
    new Promise((resolve) => {
        resolve()
        console.log('promise1')
    }).then(() => {
        console.log('then 1')
    }).then(() => {
        console.log('then 2')
    })
    console.log('setTimeout')
},0)

console.log('end')



//  start
//  end
//  promise1
//  setTimeout
//  then 1
//  then 2
