const genereteUniqueId = require('../utils/generateUniqueId');
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index (request, response ) {
        const ongs = await connection('ongs').select('*');
   
       return response.json(ongs);
    },


    async create(request, response) {
        /**
         * desestruturacao para pegar cada dado em uma variavel separada
         */
        const { name, email, whatsapp, city, uf } = request.body;

        /**
         * Criacao do id da Ong
         */
        const id = genereteUniqueId();
        /**
         * Cadastrar Ong ' Conexao com o banco '
         */
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};