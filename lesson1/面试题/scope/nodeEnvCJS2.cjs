/* const module1 = require('./nodeEnvCJS1.cjs')
console.log(module1.a)
module1.fn()
module1.add()// 修改的是模块内部的 a，不是导出的副本
console.log(module1.a)
 */
/* 
特性	       CommonJS	               ES Module
基本类型导出	值拷贝	                实时绑定（只读）
对象类型导出	浅拷贝（引用共享）	     实时绑定（只读）
模块内部修改	不影响已导出的基本类型    影响导入方
导入方修改	可以修改（但不会影响原模块）  不能修改（只读）
导入导出位置	任意位置	             顶层（静态） 
顶层 this	   {}（空对象）	            undefined
异步加载	    同步	                异步（支持顶层 await）
*/


/* const user1 = require('./nodeEnvCJS1.cjs');  // 输出：用户模块加载了（只执行一次）
const user2 = require('./nodeEnvCJS1.cjs');  // 从缓存读取，不输出

user1.addUser({ name: '张三' });
console.log(user2.getUsers());    */

const {count,addFun,getCount} = require('./nodeEnvCJS1.cjs')
console.log(count)
addFun()
console.log(getCount())

