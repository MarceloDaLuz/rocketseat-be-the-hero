const connection = require('../../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(req, res){
        const ongs =  await connection('ongs').select('id', 'name');
        return res.status(200).send(ongs);
    },
    
    async create(req, res){
        console.log('ong/create', req.body)
        const {name, email, whatsapp, city, uf}  = req.body;
        const id  = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return res.status(201).send({id})
    }
}