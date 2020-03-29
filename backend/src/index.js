/**
 * BANCO DE DADOS -- SQLite
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() << nesse formato estamos prontos para mudar para qualquer outro banco SQL
 * 
 * vamos usar o knex.js para fazer nossas query builders.
*/

// importando o modulo express para dentro da variavel express, então a variavel express agora contem todas as funcionalidades do express
const express = require('express');
const cors    = require('cors');
const { errors }      = require('celebrate');
const routes  = require('./routes'); // quando tem ./ (referenciar a mesma pasta do arquivo index) é exportar arquivo e não pacote como na linha acima 

// instanciar a aplicação
const app = express();

// quem pode acessar meu app
app.use(cors({
    allowedHeaders: '*',
    exposedHeaders: '*'
}));

/**
 * precisa vir antes das rotas, para que o express converta o 
 * json passado pelo POST em um objeto js para que a aplicação consiga entender 
 */
app.use(express.json());

// rotas
app.use(routes);

// erros
app.use(errors());

// quando eu acessar localhost:3333 eu vou acessar a minha aplicação
app.listen(3333);