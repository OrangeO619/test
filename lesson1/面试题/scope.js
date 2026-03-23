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

//lexical scope 词法作用域:当前作用域=>
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
c1() 1
c1() 2
c1() 3
c2() 1
//闭包的作用
1.数据的私有化
2.currying 