/* let a = 1
function fn(){
    console.log('hello')
}
function add(){
    ++a
}

module.exports = { a, fn, add }; */

/* console.log('用户模块加载了');

let users = [];

function addUser(user) {
  users.push(user);
}

function getUsers() {
  return users;
}

module.exports = { addUser, getUsers }; */

let count = 0
const addFun = ()=>count++
const getCount = ()=> count
module.exports = {count,addFun,getCount}
module.exports = {count,addFun,getCount}

/* 1.笔试
2.了解：活绑定、静动态导入导出、闭包 */