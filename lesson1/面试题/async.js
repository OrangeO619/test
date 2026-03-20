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