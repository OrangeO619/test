//sleep函数： t ms之后执行下一步
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