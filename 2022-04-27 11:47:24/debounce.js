function debounce(fn, delay) {
    let timer = null;

    return function () {
        const context = this;
        const args = arguments;

        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}


document.body.addEventListener('click', debounce(function () {
    console.log(1)
}, 1000))