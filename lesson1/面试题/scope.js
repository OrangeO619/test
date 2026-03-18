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
{
    var b1 = '块级作用域var'
    let b2 = '块级作用域let'
}
console.log(b2)
