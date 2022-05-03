function throttle(fn: Function, delay: number) {
    let timer = null;
    
  return function Fn() {
    let args = arguments;
    let context = this;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, delay);
    }
  };
}

document.body.addEventListener(
  "click",
  throttle(() => console.log("click"), 1400)
);
