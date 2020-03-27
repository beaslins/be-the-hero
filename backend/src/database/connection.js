const knex          = require('knex'); // importar o knex
const configuration = require('../../knexfile'); // importar as configurações do banco de dados

const connection    = knex(configuration.development); // criar a conexão, vamos usar a de desenvolvimento

// exportar a conexão
module.exports = connection;