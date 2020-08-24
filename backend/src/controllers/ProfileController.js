const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        /**
         * Acessar os dados da Ong que esta Logada
         */
        const ong_id = request.headers.authorization;

        /**
         * Buscar os Incidents
         */
        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);

    }
}