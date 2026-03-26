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
/* const obj = {n:1}
obj.n = 2
console.log(obj)
//让obj.n = 2 被禁止
const obj = {n:1};
//方法1：
Object.freeze(obj);  // 冻结对象，所有属性不可修改、删除、添加
//方法2：
Object.defineProperty(obj, 'n', {
  value: 1,
  writable: false
});

obj.n = 2;  // 无效
console.log(obj);
 */
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
//hello

var shadowing = 'hello'
function shadowingFn() {
console.log('variable shadowing:',shadowing);
shadowing = 'world'
}
shadowingFn();
hello

var shadowing = 'hello'
function shadowingFn() {
console.log('variable shadowing:',shadowing); //此时let shadowing变量提升了但let没有初始化
let shadowing = 'world'
}
shadowingFn();
error */

/* for (var i=0; i<3; i++) {
  setTimeout(()=>console.log(i))
  console.log(i)
} */
//3 3 3 
//所有回调共享同一个函数作用域

/* for (let i=0; i<3; i++) {
  setTimeout(()=>console.log(i))
  console.log(i)
} */
//0 1 2
//每个回调都有自己的词法环境
/* setTimeout的回调函数形成了一个闭包 */

function fn(){
    let count = 0
    /* function get_count(){
        return count
    }
    function increment(){
        return count++
    } */
    return {
        get:()=>count,
        increment:()=>count+1
    }
    console.log('heollo')
}
const res = fn()
console.log(res.get())
console.log(res.increment())
console.log(res.get())
console.log(res.increment())
/* count++:
const temp = count
count = count+1
return temp */