/* 基础数据类型 
布尔、string、number、null、undefined
引用数据类型
 */

let a = 10
let b = a
b= 20
let obj1 = {name:'张三',address:{city:'武汉'}}
/* let obj2 = {...obj1}
obj2.name = '李四'
obj2.address.city = '北京' */

let obj3 = structuredClone(obj1)
obj3.name = '李四'
obj3.address.city = '北京'
console.log(obj1)

//深拷贝函数
function deepClone(param){
 if(typeof param!='object'||param ===null) return param
    const res = {}
    for(let key in param){
        if(param.hasOwnProperty(key)){
            res[key] = deepClone(param[key])
        }
    }
    return res
}
//fun regExp 