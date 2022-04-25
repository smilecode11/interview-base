/**
 * 闭包是指能访问自由变量的函数. 自由变量是指在函数中使用的, 但它既不是函数参数也不是函数的局部变量的变量
 * 闭包 =  函数 + 函数能访问的自由变量
 * 
 * 理论角度来讲:
 *  所有的函数. 因为他们在创建的时候就将上层上的数据保存起来了, 简单的全局变量也是如此, 因为函数内部可以访问全局变量, 就相当于在访问自由变量. 此时使用最外层的做用户(global/window)
 * 
 * 从实际角度来讲:
 *  1. 即使创建它的上下文已经销毁, 它仍然存在(内部函数从父级函数中返回)
 *  2. 函数内部引用了自由变量(返回函数使用了父级上下文的变量, 变量被保存了下来)
 * 
 * 闭包应用
 *  函数作为参数被传递
 *  函数作为返回值被返回
 *  缓存工具, 隐藏数据, 只提供 api
 */


//  例子 1
var scope = "global scope";
function checkscope() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f;
}

var foo = checkscope();
foo();



//  例子 2
var data = [];
for (var i = 0; i < 3; i++) {
    data[i] = function () {
        console.log(i);
    };
}
data[0]();  //  3
data[1]();  //  3
data[2]();  //  3


//  例子2
var data2 = [];
for (var i = 0; i < 3; i++) {
    data2[i] = (function (j) {
        console.log(j);
    }(i))
}
data2[0]();  //  0
data2[1]();  //  1
data2[2]();  //  2


//  闭包应用: 
//  1. 函数作为参数被传递
// function print() {
//     const a = 200
//     fn()
// }
// const a = 100;
// function fn() {
//     console.log(a)
// }

// print(fn)   //  100

//  2. 函数作为返回值被返回
// function create() {
//     const a = 100;

//     return function () {
//         console.log(a)
//     }
// }

// const fn = create()
// const a = 200;
// fn()    //  100

//  结论:  闭包: 自定义变量的查找, 是在函数定义的地方, 向上级作用域查找, 不是在执行的地方


//  3. 缓存工具, 隐藏数据, 只提供 api
function createChache() {
    const data = {} //  闭包中被隐藏的数据, 不被外界所访问
    return {
        set: function (key, val) {
            data[key] = val
        },
        get: function (key) {
            return data[key]
        }
    }
}

const c = createChache()
c.set('a', 100)
console.log(c.get(c))   //  100