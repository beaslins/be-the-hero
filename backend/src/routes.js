/**
 * 
 * criar a primeira rota, a rota raiz seria a nossa "home"
 * 
 * request: todos os dados que vem através da requisição
 * response: retornar uma responsta para o usuário 
 * 
 * rota    -- é todo o caminho, o conjunto completo
 * recurso -- é o que vem depois da barra, por ex. quero listar meus usuarios meu recurso seria /users
 * 
 * métodos http
 * GET:    buscar/listar uma informação do back-end
 * POST:   criar uma informação no back-end (é o que o back-end recebe, por exemplo para cadastrar uma info eu recebo isso via post)
 * PUT:    alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 * 
 * tipos de parâmetro
 * QUERY params: parâmetros nomeados enviados na rota após o "?" (filtros, paginação)   > request.query
 * ROUTE params: parâmetros utilizados para identificar recursos (/users/:id)           > request.params
 * REQUEST BODY: corpo da requisição utilizado para criar ou alterar recursos (POST)    > routes.post | request.body
 * 
 * para acessar os QUERY PARAMS usamos request.query
 * para acessar os ROUTE PARAMS usamos request.params
 * para acessar o ROUTE BODY usamos request.body
 * 
 * routes.get  -- para metodos GET
 * routes.post -- para metodos POST
 *
 */

const express                      = require('express'); // importando um pacote
const {celebrate, Segments, Joi}   = require('celebrate'); // lib de validação
const OngController                = require('./controllers/OngController'); // controller das ongs
const IncidentController           = require('./controllers/IncidentController'); // controller das ongs
const ProfileController            = require('./controllers/ProfileController');  // controller das ongs
const SessionController            = require('./controllers/SessionController');  // controller das ongs

const routes                       = express.Router(); // desaclopando o modulo de rotas do express em uma nova variável

// Login
routes.post('/sessions', SessionController.create); // criar uma sessão

// Ongs
routes.get('/ongs', OngController.index);    // listar
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create); // cadastrar

// Perfil de Ong
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

// Casos
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index);         // listar

routes.post('/incidents', IncidentController.create);      // cadastrar

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),IncidentController.delete) // deletar



module.exports = routes; // exportar uma variavel de dentro de um arquivo
