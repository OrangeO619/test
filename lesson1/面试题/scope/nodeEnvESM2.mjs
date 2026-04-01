/* export时： */
//import {a,fn} from './nodeEnvESM1.mjs'
/* export default时：
import {a,fn} 是错误写法
✅：
import obj from './nodeEnvESM1.mjs'
const {a,fn} = obj
*/
/* console.log(a)
fn()
a = 100
console.log(a) */
/* const module = await import('./nodeEnvESM1.mjs')
console.log(module)
console.log(module.a) */

//module Namespace object模块的命名空间

import {addFun} from './nodeEnvESM1.mjs'
import count from './nodeEnvESM1.mjs'
console.log(count)
addFun()
console.log(count)