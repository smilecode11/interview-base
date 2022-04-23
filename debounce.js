function debounce(fn, delay, immediate = true) {
    let timer = null;

    return function () {
        const context = this;
        const args = arguments

        if (timer) clearTimeout(timer)
        if (immediate) {
            let callNow = !timer
            timer = setTimeout(() => {
                timer = null;
            }, delay)
            if (callNow) fn.call(context, ...args)
        } else {
            timer = setTimeout(() => {
                fn.call(context, ...args)
            }, delay);
        }
    }
}

function debounce(fn, delay) {
    let timer = null;
    return function () {
        const context = this;
        const args = arguments;

        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(context, args)
        }, delay)
    }
}

document.body.addEventListener('click', debounce(function () {
    console.log(1)
}, 1000))