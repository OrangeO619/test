 //微任务、宏任务放入队列中，先进先出
 async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end"); // await 后面的代码会放到微任务队列中（异步任务）
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");//回调是异步任务的宏任务
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");//异步任务的微任务
});

console.log("script end");

/* script start
async1 start
async2
async1 end
script end
promise1
promise2
setTimeout */

/* 正确答案：
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout */

/* async function async1() {
  console.log("async1 start");
  await async2();
  await async3();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

async function async3() {
  console.log("async3");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end"); */

/* script start
async1 start
async2
promise1
script end
async3
promise2
setTimeout
async1 end */

/* const p = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    resolve();
    console.log(5);
  }, 1000);
});

p.then(() => console.log(3));

console.log(4); */

/* 1
4
3
2
5
正确答案：
1
4
2
5
3 */

console.log("S");

setTimeout(() => {
  console.log("T1");
  Promise.resolve().then(() => console.log("m-in-T1"));
}, 0);

Promise.resolve().then(() => {
  console.log("m1");
  queueMicrotask(() => console.log("m2"));
});

setTimeout(() => console.log("T2"), 0);

console.log("E");
/* 
S
E
m1
m2
T1
m-in-T1
T2
*/

/* 
queueMicrotask:用于将任务添加到微任务队列的API，比Promise.then更直接的方式创建微任务。
requestIdleCallback:在浏览器空闲时段执行低优先级任务的API，避免影响关键渲染和交互。
MutationObserver:监听DOM树变化的API，当元素属性、子节点、文本内容发生变化时触发回调。
IntersectionObserver: 异步观察目标元素与祖先元素或视口交叉状态的API，即监听元素是否可见。
*/