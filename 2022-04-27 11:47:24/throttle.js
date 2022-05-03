function throttle(fn, delay) {
    let timer = null;
    return function () {
        const args = arguments;
        const context = this;

        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.apply(context, args)
            }, delay)
        }
    }
}

document.body.addEventListener('click', throttle(function () {
    console.log(1)
}, 1000))