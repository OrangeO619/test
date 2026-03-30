//模块作用域
/* 
export default不能接变量声明，可以接其他声明，且只能导出一个值。对应import xxx from 
export可以接各种声明，但不能接表达式、匿名函数。对应 import {xxx} from
比如：
export default const a = 1 ❌
export default function addFun() {} ✅
export default 123; ✅
export function addFun(){} ✅
export const a = 1 ✅
export  123; ❌
*/
//CJS模块系统 处理.cjs 浏览器不支持,"type": "commonjs"
//ESM模块系统 处理.mjs 浏览器支持,"type": "module",
//.js 由 package.json 的 "type" 决定
/* let a = 1
const fn = ()=>{ console.log('hello')}
export default {a,fn}
export {a,fn} */

let config 
let modulePath= (ENV === "production")? "./A.js" : "./B.js"
const module = await import(modulePath)
config = module.default


