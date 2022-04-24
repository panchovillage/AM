<<<<<<< HEAD
<<<<<<< Updated upstream
=======
>>>>>>> b996069 (commit 5)
        const express = require('express');
        const bodyParser = require('body-parser');
        const res = require('express/lib/response');
        const app = express()
        app.use(bodyParser.json());
        const port = 3000;
        app.get('/hello', (req, res) => {
          res.send('Hello World')
        })


<<<<<<< HEAD

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
        {
          "id":1,
          "texto":  "Essa é a primeira mensagem"
        } ,
        
        {
          "id":2,
          "texto": "Essa é a segunda mensagem"

        },
          ];
       

const getMensagensValidas = () => mensagens.filter(Boolean);

const getMensagemById = id =>  getMensagensValidas().find(msg => msg.id === id);


        //[GET] /mensagens - Retorna a lista de mensgens
          app.get('/mensagens', (req, res) => {
          res.send(getMensagensValidas()); 
          });

        // - [GET] /mensagens{id} - Retorna uma mensgem pelo ID
        app.get('/mensagens/:id', (req, res) => {
        const id = +req.params.id ;
        const mensagem = getMensagemById(id); 
        
        if(!mensagem){
          res.send('Mensagem não encontrada');

          return;
        }
          res.send(mensagem);
        });

        //- [POST] /mensagens - Cria uma nova mensagem
        app.post('/mensagens', (req, res) => {
        const mensagem = req.body;

        if(!mensagem || !mensagem.texto){
          res.send('Mensagem inválida')
        return
        }


        mensagem.id = mensagens.length + 1;
        mensagens.push(mensagem);
        //console.log(mensagem);

        res.send(mensagem)          
        });

        //- [PUT] /mensagens/{id} - Atualiza msg pelo ID
        app.put('/mensagens/:id', (req, res) => {
          const id = +req.params.id ;

          //console.log(typeof id, typeof mensagens[0].id);
        
          const mensagem = getMensagemById(id);
          const novTexto = req.body.texto;

        if (!novTexto){
          res.send('Mensagem inválida');
          return;
        }

        mensagem.texto = novTexto;
        //mensagens[id] = mensagem;

          res.send(mensagem);  });

        //- [DELETE] /mensagens/{id} - Remover uma msg pelo ID
      app.delete('/mensagens/:id', (req, res) => {
      const id = +req.params.id ;

      const mensagem = getMensagemById(id);
        
        if(!mensagem){
          res.send('ID inválido');
          return;
        }

      const index = mensagens.indexOf(mensagem);
      delete mensagens[index];

      res.send('Mensagem removida com sucesso');
       

        });

        app.listen(port, () =>{
        console.info('App está a executar em: http://localhost:${port}')

        });

=======
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

/*
Lista de Endpoints da aplicação CRUD de mensagens
CRUD: Create, Read (Single & All), Update and Delete
CRUD: Criar, Ler (Individual e Tudo), Atualizar e Remover
- [GET] /mensagens - Retorna a lista de mensagens
- [GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
- [POST] /mensagens - Cria uma nova mensagem
- [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
- [DELETE] /mensagens/{id} - Remover uma mensagem pelo ID
*/

const mensagens = [
    {
        "id": 1,
        "texto": "Essa é a primeira mensagem",
    },
    {
        "id": 2,
        "texto": "Essa é a segunda mensagem",
    },
];

const getMensagensValidas = () => mensagens.filter(Boolean);

const getMensagemById = id => getMensagensValidas().find(msg => msg.id === id);

// - [GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
    res.send(getMensagensValidas());
});

// - [GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
app.get('/mensagens/:id', (req, res) => {
    const id = +req.params.id;

    const mensagem = getMensagemById(id);

    if (!mensagem) {
        res.send('Mensagem não encontrada.');

        return;
    }

    res.send(mensagem);
});

// - [POST] /mensagens - Cria uma nova mensagem
app.post('/mensagens', (req, res) => {
    const mensagem = req.body;

    if (!mensagem || !mensagem.texto) {
        res.send('Mensagem inválida.');

        return;
    }

    mensagem.id = mensagens.length + 1;
    mensagens.push(mensagem);

    res.send(mensagem);
});

// - [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens/:id', (req, res) => {
    const id = +req.params.id;

    const mensagem = getMensagemById(id);

    const novoTexto = req.body.texto;

    if (!novoTexto) {
        res.send('Mensagem inválida.');

        return;
    }

    mensagem.texto = novoTexto;

    res.send(mensagem);
});

// - [DELETE] /mensagens/{id} - Remover uma mensagem pelo ID
app.delete('/mensagens/:id', (req, res) => {
    const id = +req.params.id;

    const mensagem = getMensagemById(id);

    if (!mensagem) {
        res.send('Mensagem não encontrada.');

        return;
    }

    const index = mensagens.indexOf(mensagem);
    
    delete mensagens[index];
    res.send('Mensagem removida com sucesso.');
});
=======

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
        {
          "id":1,
          "texto":  "Essa é a primeira mensagem"
        } ,
        
        {
          "id":2,
          "texto": "Essa é a segunda mensagem"

        },
          ];
       

const getMensagensValidas = () => mensagens.filter(Boolean);

const getMensagemById = id =>  getMensagensValidas().find(msg => msg.id === id);


        //[GET] /mensagens - Retorna a lista de mensgens
          app.get('/mensagens', (req, res) => {
          res.send(getMensagensValidas()); 
          });

        // - [GET] /mensagens{id} - Retorna uma mensgem pelo ID
        app.get('/mensagens/:id', (req, res) => {
        const id = +req.params.id ;
        const mensagem = getMensagemById(id); 
        
        if(!mensagem){
          res.send('Mensagem não encontrada');

          return;
        }
          res.send(mensagem);
        });

        //- [POST] /mensagens - Cria uma nova mensagem
        app.post('/mensagens', (req, res) => {
        const mensagem = req.body;

        if(!mensagem || !mensagem.texto){
          res.send('Mensagem inválida')
        return
        }


        mensagem.id = mensagens.length + 1;
        mensagens.push(mensagem);
        //console.log(mensagem);

        res.send(mensagem)          
        });

        //- [PUT] /mensagens/{id} - Atualiza msg pelo ID
        app.put('/mensagens/:id', (req, res) => {
          const id = +req.params.id ;

          //console.log(typeof id, typeof mensagens[0].id);
        
          const mensagem = getMensagemById(id);
          const novTexto = req.body.texto;

        if (!novTexto){
          res.send('Mensagem inválida');
          return;
        }

        mensagem.texto = novTexto;
        //mensagens[id] = mensagem;

          res.send(mensagem);  });

        //- [DELETE] /mensagens/{id} - Remover uma msg pelo ID
      app.delete('/mensagens/:id', (req, res) => {
      const id = +req.params.id ;

      const mensagem = getMensagemById(id);
        
        if(!mensagem){
          res.send('ID inválido');
          return;
        }

      const index = mensagens.indexOf(mensagem);
      delete mensagens[index];

      res.send('Mensagem removida com sucesso');
       

        });

        app.listen(port, () =>{
        console.info('App está a executar em: http://localhost:${port}')

        });
>>>>>>> b996069 (commit 5)

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
});
>>>>>>> Stashed changes
