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

//----- Para reconhecer os dados recebidos como sendo um objeto no formato JSON
app.use(express.json());  //Uso de Middleware, SEMPRE ANTES DE UMA ARROW FUNCTION
app.post('/filmes', (req, res) => {
  const {titulo, genero} = req.body; //Usado Desestruturação de dados - Pega o Array e separa em 2 variáveis
  res.send(`Filme: ${titulo} Genero: ${genero}, recebido e Salvo no Servidor`)
});
//----------------------------


//---Criação do proprio Middleware - Note o uso do NEXT,
const log = (req, res, next) => {
  console.log(`....... Acessado em ${new Date()}`);
  console.log('Gravado no servidor essa info!')
  next();
}
//Note que quando chama "/transfer" ele primeiro executa o LOG (acima), depois o resto.
app.get('/transfer', log, (req, res) => {
  res.send("Ok! Valor transferido com sucesso!")
});
//-------------------------------


//Redireciona o "/livros" para o arquivo livros, declarado lá no Inicio
app.use('/livros', livros);


//Msg que aparece no CMD informando q o WebService está em execução
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})