//sleep函数： 
//1.t ms之后执行下一步
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
async function test() {
  console.log('a')
  await sleep(1000)
  console.log('b')
}
test()

//2.t ms之后执行回调函数和下一步
async function test() {
  console.log('a')
  await sleep(1000,()=>{console.log('hello')})
  console.log('b')
}
const sleep= (t,callback)=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
        callback()
        resolve()
    },t)
  })
}
test()

//Generator函数：可以暂停，在需要时恢复执行。
function* gen() {
  console.log(1);
  yield 2;
  console.log(3);
  yield 4;
  console.log(5);
}

const g = gen();
console.log(g.next());  // 输出：1，返回 { value: 2, done: false }
console.log(g.next());  // 输出：3，返回 { value: 4, done: false }
console.log(g.next());  // 输出：5，返回 { value: undefined, done: true }

//使用 Generator + yield实现sleep
function sleep(ms) {
  setTimeout(() => {
    const next = sleep.next;
    if (next) next();
  }, ms);
}
function* generatorDemo() {
  console.log('开始');
  yield sleep(1000);
  console.log('1秒后执行');
  yield sleep(2000);
  console.log('又过了2秒');
}
const gen = generatorDemo();
sleep.next = () => gen.next();
gen.next();