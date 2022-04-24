const express = require('express')
const app = express()
const port = 3000;
app.get('/hello', (req, res) => {
  res.send('Hello World')
})



/*
Lista de endpoints da aplicação CRUD de mensagens
- [GET] /mensagens - Retorna a lista de mensgaens
- [GET] /mensagens/{id} - Atualiza msg pelo ID
- [POST] /mensagens - Cria uma nova mensagem
- [PUT] /mensagens/{id} - Atualiza msg pelo ID
- [DELETE] /mensagens/{id} - Remover uma msg pelo ID

*/

const mensagens = [
  "Essa é a primeira mensagem", 
  "Essa é a segunda mensagem"
  ]







app.listen(port, function(){

console.info('App está a executar em: http://localhost:${port}')

})

