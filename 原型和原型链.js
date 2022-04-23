function Foo() { }

//  构造函数.prototype.__proto__ === Object.prototype
Function.prototype.__proto__ === Object.prototype;
Foo.prototype.__proto__ === Object.prototype;
Array.prototype.__proto__ === Object.prototype;

//  Object.prototype.__proto__ === null
Object.prototype.__proto__ === null;

//  构造函数.__proto__ === 函数构造函数.prototype
Foo.__proto__ === Function.prototype;
Object.__proto__ === Function.prototype;
Function.__proto__ === Function.prototype;

//  实例.__proto__ === 构造函数.prototype
const foo = new Foo();
foo.__proto__ === Foo.prototype;
({}).__proto__ === Object.prototype;
([]).__proto__ === Array.prototype;

//  构造函数.prototype.constructor === 构造函数
Array.prototype.constructor === Array;
Object.prototype.constructor === Object;
Foo.prototype.constructor === Foo;

//  instanceof
([]) instanceof Array;
([]) instanceof Object;
