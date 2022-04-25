// 实现防抖

function debounce(fn, delay) {
    let timer = null;

    return function () {
        const context = this;
        const args = [...arguments].slice(1)

        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}

document.body.addEventListener('click', debounce(() => console.log('1'), 1000))