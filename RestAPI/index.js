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
Lista de endpoints da aplicação CRUD de utilizadores
- [GET] /utilizadores - Retorna a lista de utilizadores
- [GET] /utilizadores{id} - Retorna um utilizador pelo ID
- [GET] /utilizadores/{id} - Atualiza utilizador pelo ID
- [POST] /utilizadores - Cria um novo utilizador
- [PUT] /utilizadores/{id} - Atualiza utilizador pelo ID
- [DELETE] /utilizadores/{id} - Remover um utilizador pelo ID

*/

const utilizadores = [ 
  {
        "Name" : "John",
        "Age" :  30,
        "Address" : "Rua A"
  
  },
  {
    "Name" : "Robert",
    "Age" :  36,
    "Address" : "Rua Z"

},

{
  "Name" : "Carl",
  "Age" :  28,
  "Address" : "Rua G"

},

  ];
  
//utilizadores[0]

//[GET] /utilizadores - Retorna a lista de utilizadores
  app.get('/utilizadores', (req, res) => {
  res.send(utilizadores); 
  });

// - [GET] /utilizadores{id} - Retorna um utilizador pelo ID
app.get('/utilizadores/:id', (req, res) => {
 const id = req.params.id - 1;

 const utilizador = utilizadores[id];
 
  res.send(utilizador);
});

//- [POST] /utilizadores - Cria um novo utilizador
app.post('/utilizadores', (req, res) => {
 const utilizador = req.body;

 utilizadores.push(utilizador);

 console.log(utilizador);

 res.send("Criou um novo utilizador");
  
});




app.listen(port, function(){
console.info('App está a executar em: http://localhost:{'+port+'}');

});

