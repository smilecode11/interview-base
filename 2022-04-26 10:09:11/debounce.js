//  实现防抖

function debounce(fn, delay = 700) {
    let timer = null;

    return function Fn() {
        let context = this;
        let args = [...arguments].slice(1)

        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}

document.body.addEventListener('click', debounce(() => console.log('click'), 1000))