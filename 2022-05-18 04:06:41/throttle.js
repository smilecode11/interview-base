function throttle(fn, delay) {
    let timer = null;

    return function () {
        const args = [...arguments];
        const context = this;
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args)
                timer = null;
            }, delay);
        }
    }
}


document.body.addEventListener('click', throttle(function () {
    console.log(1)
}, 1000))