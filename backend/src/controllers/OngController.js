const connection = require('../database/connection'); // importar a conecão com o banco de dados
const crypto     = require('crypto'); // pacote de criptografia do node, mas que tem a possibilidade de gerar uma string aleatória

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json({ ongs });
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body; // {} retorna os dados em variaveis diferentes, de forma separada
        const id = crypto.randomBytes(4).toString('HEX'); // vamos usar o crypto para gerar o ID
    
        // como o insert pode demorar, falamos que a função é assincrona e pedimos para que o node await o insert para então continuar
        await connection('ongs').insert({ // connection(nome da tabela).insert({campos que quero inserir})
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        
        // vamos retornar o id que a ong vai usar para logar
        return response.json({ id });
    
    }
}