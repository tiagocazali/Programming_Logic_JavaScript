Nesse capítulo, utilizaremos mais pacotes do NODE JS e para funcionar precisa instalar os pacotes antes. Os comandos devem ser dados DENTRO da pasta do programa no CMD: 

1) Após criado a pasta, execute:  npm init -y
Isso criará o arquivo Package.jason

2) Instale o Framework Express com o comando: npm i express
Ele criará a pasta chamada "node_modules" que tem um MONTE DE ARQUIVOS default do framework para ele funcionar.

3)Usado tambem o Knex e o SQL Lite3 para banco de dados.
npm i knex
npm i sqlite3

4) inicia o knex na pasta do programa
npx knex init
Edite o arquivo knexfile.js conforme o livro.

5) tabela e schema do banco criado direto pelo knex, usando arquivo migration.
npx knex migrate:make create_livros
Depois edite o arquivo criado na pasta \data\migrations colocando o esquema da criação das tabelas.

6) crie o banco de dados com as tabelas executando:
npx knex migrate:latest

7)Crie o arquivo de Seed, que são os datos iniciars de seu banco dados. dados de teste
npx knex seed:make 001_add_livros
Edite o arquivo seeds com os dados iniciais de teste e depois execute a linha para criar os dados
npx knex seed:run

8) crie o arquivo de conexao com o Banco, chamado db_config.js dentro da pasta data.



