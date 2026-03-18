/* async function async2() {
  console.log("async2");
}
console.log(async2())
//Promise [undefined]

function add(){
    return 1
}
console.log(add()) */

/* 函数调用没有return，返回值是undefined */

/* 1.var let const 区别
1）提升和初始化
创建时都提升，var初始化为undefined，let、const不初始化 TDZ暂时性死区
2）作用域
var作用域：全局、函数
let/const:块级作用域、函数作用域、模块作用域
3）重复声明 重新赋值
var可以重复声明，let/const不可以 */
const obj = {n:1}
obj.n = 2
console.log(obj)
/* var shadowing = 'hello'
function shadowingFn() {
console.log('variable shadowing:',shadowing);
var shadowing = 'world'
}
shadowingFn();
 */
/* var shadowing = 'hello'
function shadowingFn() {
console.log('variable shadowing:',shadowing);//通过作用域链向外查找
}
shadowingFn();
hello

var shadowing = 'hello'
function shadowingFn() {
console.log('variable shadowing:',shadowing);
shadowing = 'world'
}
shadowingFn();
hello

var shadowing = 'hello'
function shadowingFn() {
console.log('variable shadowing:',shadowing);
let shadowing = 'world'
}
shadowingFn();
error */

for (var i=0; i<3; i++) {
  /* setTimeout(()=>console.log(i)) */
  console.log(i)
}
/* setTimeout的回调函数形成了一个闭包 */