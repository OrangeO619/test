main();

function main() {
  console.log(user);
  var user = { name: "xiaoyao" };

  console.log(age);
  let age = 33;

  sayHi();
  function sayHi() {
    console.log("hi");
  }
}

/* 
1.创造上下文 global Exc context
2.call stack 压栈 
创建：变量提升 创建作用域 this绑定 code区域：heap堆 指针指向真正存放的地方
执行：
出栈：先进后出 
*/