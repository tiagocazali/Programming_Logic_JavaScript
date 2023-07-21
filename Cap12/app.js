const express = require('express')
const app = express()
const port = 3001
const livros = require('./livros')

app.get('/', (req, res) => {
  res.send('Hello World! - Seja Bem vindo!')
})

app.get('/cap12', (req, res) => {
  res.send('<h2>Capítulo 12: Introdução ao NODE Express</h2>')
})

//para reconhecer os dados recebidos como sendo um objeto no formato JSON
app.use(express.json());  //Uso de Middleware, SEMPRE ANTES DE UMA ARROW FUNCTION
app.post('/filmes', (req, res) => {
  const {titulo, genero} = req.body; //Usado Desestruturação de dados - Pega o Array e separa em 2 variáveis
  res.send(`Filme: ${titulo} Genero: ${genero}, recebido e Salvo no Servidor`)
})


const log = (req, res, next) => {
  console.log(`....... Acessado em ${new Date()}`);
  console.log('Gravado no servidor essa info!')
  next();
}

app.get('/transfer', log, (req, res) => {
  res.send("Ok! Valor transferido com sucesso!")
});

app.use('/livros', livros);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})