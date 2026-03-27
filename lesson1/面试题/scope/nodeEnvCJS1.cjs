/* let a = 1
function fn(){
    console.log('hello')
}
function add(){
    ++a
}

module.exports = { a, fn, add }; */

console.log('用户模块加载了');

let users = [];

function addUser(user) {
  users.push(user);
}

function getUsers() {
  return users;
}

module.exports = { addUser, getUsers };

