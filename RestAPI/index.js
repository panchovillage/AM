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
  res.send(mensagens.filter(Boolean)); 
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

 mensagens.push(mensagem);
 //console.log(mensagem);

 res.send('Criado com sucesso')
  
});

//- [PUT] /mensagens/{id} - Atualiza msg pelo ID
app.put('/mensagens/:id', (req, res) => {
const id = req.params.id - 1;

const mensagem = req.body.mensagem;

mensagens[id] = mensagem;

res.send('Mensagem atualizada com sucesso');

});

//- [DELETE] /mensagens/{id} - Remover uma msg pelo ID
app.delete('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;

  delete mensagem[id],

  res.send('Mensagem removida com sucesso');

}

app.listen(port, function(){
console.info('App está a executar em: http://localhost:${port}')

});

