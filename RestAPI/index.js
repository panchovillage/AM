const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express()
app.use(bodyParser.json());
const port = 3000;
app.get('/hello', (req, res) => {
  res.send('Hello World')
})



/*
Lista de endpoints da aplicação CRUD de mensagens
- [GET] /mensagens - Retorna a lista de mensgens
- [GET] /mensagens{id} - Retorna uma mensgem pelo ID
- [GET] /mensagens/{id} - Atualiza msg pelo ID
- [POST] /mensagens - Cria uma nova mensagem
- [PUT] /mensagens/{id} - Atualiza msg pelo ID
- [DELETE] /mensagens/{id} - Remover uma msg pelo ID

*/

const mensagens = [
  "Essa é a primeira mensagem", 
  "Essa é a segunda mensagem"
  ];
//mensagens[0]

//[GET] /mensagens - Retorna a lista de mensgens
  app.get('/mensagens', (req, res) => {
  res.send(mensagens); 
  });

// - [GET] /mensagens{id} - Retorna uma mensgem pelo ID
app.get('/mensagens/:id', (req, res) => {
 const id = req.params.id - 1;

 const mensagem = mensagens[id];
 
  res.send(mensagem);
});

//- [POST] /mensagens - Cria uma nova mensagem
app.post('/mensagens', (req, res) => {
 const mensagem = req.body.mensagem;

 console.log(mensagem);

 res.send(mensagem)
  
});




app.listen(port, function(){
console.info('App está a executar em: http://localhost:${port}')

});

