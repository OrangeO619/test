/* async function async1() {
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
 */
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

async function async1() {
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

console.log("script end");

/* script start
async1 start
async2
promise1
script end
async3
promise2
setTimeout
async1 end */