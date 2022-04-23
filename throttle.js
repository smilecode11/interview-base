function throttle(fn, delay) {
    let timer = null;

    return function () {
        const context = this;
        const args = arguments;

        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                fn.call(context, ...args)
            }, delay)
        }
    }
}


document.body.addEventListener('click', throttle(function () {
    console.log(1)
}, 1000))