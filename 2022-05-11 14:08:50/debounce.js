function debounce(fn, delay) {
    let timer = null;

    return function () {
        const context = this;
        const args = [...arguments].slice(0);

        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}

document.body.addEventListener('click', debounce(() => console.log('click'), 1200))
