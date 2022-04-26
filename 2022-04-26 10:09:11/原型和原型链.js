/**
 * 对象在创建的时候, 就存在了一个与之关联的对象, 可以继承关联对象的属性, 即 prototype, 关联对象即原型
 * 多个对象产生关联的链网即原型链, 如 [] -> Array -> Object -> null
 */
function Foo() { }
const foo = new Foo()

//  构造函数.prototype.__proto__ === Object.prototype, Object.prototype.__proto__ === null
Foo.prototype.__proto__ === Object.prototype
Function.prototype.__proto__ === Object.prototype
Array.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null

//  构造函数.__proto__ === Function.prototype
Foo.__proto__ === Function.prototype
Array.__proto__ === Function.prototype
Object.__proto__ === Function.prototype

//  实例.__proto__ === 实例的构造函数.prototype, 实例.constructor === 实例的构造函数
foo.__proto__ === Foo.prototype
foo.constructor === Foo

([]).__proto__ === Array.prototype
([]).constructor === Array