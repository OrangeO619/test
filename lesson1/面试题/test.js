/* const sleep = (t, callback) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();        
      callback();      
    }, t);
  });
}; */
//a hello b 

/* const sleep = (t, callback) => {
  return new Promise(resolve => {
    setTimeout(() => {
      // 将 callback 也放入微任务
      queueMicrotask(() => {
        callback();
      });
      resolve();
    }, t);
  });
}; */
// a hello b

const sleep = (t, callback) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      // 将 callback 也放入微任务
      queueMicrotask(() => {
        callback();
      });
    }, t);
  });
};
//a b hello
async function test() {
  console.log('a')
  await sleep(1000,()=>{console.log('hello')})
  console.log('b')
}
test()

Promise.resolve().then(() => console.log('then'));
queueMicrotask(() => console.log('microtask'));
//then microtask
