const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, function(){

console.info('App está a executar em: http://localhost:3000')

})