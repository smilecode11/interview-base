function debounce(fn, delay) {
    let timer = null;

    return function () {
        if (timer) clearTimeout(timer)
        const context = this,
            args = arguments;

        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}

document.body.addEventListener('click', debounce(() => console.log('click'), 1200))
