function throttle(fn, delay) {
    let timer = null;
    return function () {
        const context = this;
        const args = [...arguments].slice(1)

        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.apply(context, args)
            }, delay)
        }
    }
}

document.addEventListener('click', throttle(() => console.log('click'), 1000))