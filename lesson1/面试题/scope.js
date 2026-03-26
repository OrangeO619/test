/* 1.全局作用域
var a = 'global'
2.模块作用域
3.函数作用域
function fn(){
    var a1 = '函数作用域var'
    let a2 = '函数作用域let'
}
console.log(a1)
4.块级作用域  for(){}
while(){}*/
/* {
    var b1 = '块级作用域var'
    let b2 = '块级作用域let'
}
console.log(b2) */

//lexical scope 词法作用域:当前作用域=>外层作用域=>全局作用域
// let value = 10

function lexicalFn2() {
    let value = '张三'
    function lexicalFn1() {
        console.log(value)
        return 2
    }
    return lexicalFn1
}
/* let res = lexicalFn2()
console.log(res()) */
//ReferenceError: value is not defined
//res导致了持久闭包 
//短暂闭包：
console.log(lexicalFn2()())

function make() {
  let n = 0;
  return () => ++n;
}
const c1 = make();
const c2 = make();
c1() //1
c1() //2
c1() //3
c2() //1
//闭包：指有权访问另一个函数作用域中变量的函数
//闭包的作用
//1.数据的私有化：将变量隐藏起来，只能通过特定的方法访问和修改，外部无法直接操作
//非闭包：返回属性 → 变量在对象上
function createPerson(name) {
  return {
    _name: name,  // 对象的属性
    getName() { return this._name; },
  };
}
const person1 = createPerson('张三', 25);
console.log(person1._name);  // '张三' 可以直接访问
console.log(person1.getName());  // '张三'

//闭包：只返回方法 → 变量在闭包中
function createPerson(name) {
  let _name = name;   // 局部变量，存在闭包中
  return {
    getName() { return _name; },
  };
}
const person2 = createPerson('张三', 25);
console.log(person2._name);  // undefined 无法访问
console.log(person2.getName());  // 张三 只能通过方法访问

//2.currying柯里化:将一个接受多个参数的函数，转换成一系列接受单个参数的函数
// 普通函数
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3));  // 6

// 柯里化版本
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3));  // 6


//偏函数：产生函数的父函数
//固定部分参数，返回一个接收剩余参数的新函数
/* function partialFun(fn,...preset){
    return function(...rest){
      return fn(...preset, ...rest)
    }
  } */
const partialFun =
  (fn, ...preset) =>
  (...rest) =>
    fn(...preset, ...rest);
const addFun = partialFun((a,b)=>a+b,3)
console.log(addFun(5))
baseUrl:preset
fetchFun:baseUrl
