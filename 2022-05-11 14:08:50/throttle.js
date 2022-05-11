function throttle(fn, delay) {
    let timer = null;

    return function () {
        const context = this;
        const args = arguments
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.apply(context, args)
            }, (delay));
        }
    }
}

document.body.addEventListener('click', throttle(() => console.log('click'), 1200))
