/* export时： */
import {a,fn} from './nodeEnvESM1.mjs'
/* export default时：
import {a,fn} 是错误写法
✅：
import obj from './nodeEnvESM1.mjs'
const {a,fn} = obj
*/
console.log(a)
fn()
a = 100
console.log(a)