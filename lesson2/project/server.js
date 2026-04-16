const express = require('express')
const app = express()
const PORT = 4000
app.get('/',(request,response)=>{
    response.json({
    ok: true
  });
})
app.listen(PORT,()=>{
    console.log('正在运行4000端口')
}) 
