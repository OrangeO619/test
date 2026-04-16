/* 基础数据类型 
布尔、string、number、null、undefined
引用数据类型
 */

let a = 10
let b = a
b = 20
let obj1 = { name: '张三', address: { city: '武汉' } }
/* let obj2 = {...obj1}
obj2.name = '李四'
obj2.address.city = '北京' */

let obj3 = structuredClone(obj1)
obj3.name = '李四'
obj3.address.city = '北京'
console.log(obj1)

//深拷贝函数
function deepClone(param) {
    if (typeof param != 'object' || param === null) return param
    const res = {}
    for (let key in param) {
        if (param.hasOwnProperty(key)) {
            res[key] = deepClone(param[key])
        }
    }
    return res
}

function deepClone(obj, hash = new WeakMap()) {
    // 1. 处理 null 和 基本类型
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // 2. 处理循环引用
    if (hash.has(obj)) {
        return hash.get(obj);
    }

    // 3. 处理 Date
    if (obj instanceof Date) {
        return new Date(obj);
    }

    // 4. 处理 RegExp
    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags);
    }

    // 5. 处理 Map
    if (obj instanceof Map) {
        const mapCopy = new Map();
        hash.set(obj, mapCopy);
        for (let [key, value] of obj) {
            mapCopy.set(deepClone(key, hash), deepClone(value, hash));
        }
        return mapCopy;
    }

    // 6. 处理 Set
    if (obj instanceof Set) {
        const setCopy = new Set();
        hash.set(obj, setCopy);
        for (let value of obj) {
            setCopy.add(deepClone(value, hash));
        }
        return setCopy;
    }

    // 7. 处理函数（一般直接返回引用，或者通过 toString 重新创建）
    if (typeof obj === 'function') {
        // 简单处理：返回原函数（函数一般不深拷贝）
        return obj;
        /* const fnStr = obj.toString();
        // 判断是普通函数还是箭头函数
        if (fnStr.includes('=>')) {
            // 箭头函数
            return eval(fnStr);
        } else {
            // 普通函数
            return new Function('return ' + fnStr)();
        } */
    }

    // 8. 处理数组
    if (Array.isArray(obj)) {
        const arrCopy = [];
        hash.set(obj, arrCopy);
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i], hash);
        }
        return arrCopy;
    }

    // 9. 处理普通对象
    const objCopy = {};
    hash.set(obj, objCopy);

    // 遍历所有自身属性（包括 Symbol 属性）
    const keys = [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
    for (let key in keys) {
        objCopy[key] = deepClone(obj[key], hash);
    }

    return objCopy;
}