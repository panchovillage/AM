const express = require('express')
const app = express()
const port = 3000;
app.get('/hello', (req, res) => {
  res.send('Hello World')
})

app.listen(port, function(){

console.info('App está a executar em: http://localhost:${port}')

})