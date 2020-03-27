const connection = require('../database/connection'); // importar conexão com o banco de dados

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        const ong    = await connection('ongs').where('id', id).select('name').first();
        // first é para ele não retornar um array e sim um único resultado
        
        if(!ong) {
            return response.status(400).json({error: 'No ONG found with this ID'});
        }
        return response.json(ong);
    }
}
