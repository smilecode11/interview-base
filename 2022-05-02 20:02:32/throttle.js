function throttle(fn, delay) {
    let timer = null;
    return function () {
        let context = this,
            args = arguments;

        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.call(context, ...args)
            }, delay);
        }
    }
}

document.body.addEventListener('click', throttle(() => console.log('click'), 1200))