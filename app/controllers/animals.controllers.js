const service = require('../services/animals.service');

async function create_animals(req, res) {
    try {
        let query = await service.create(req.body)
        req.body.id = query.insertId
        res.status(201).json(req.body)
    } catch (error) {
        res.status(500).json({
            error
        })
    }
};


async function read_animals(req, res) {
    try {
        let consult = await service.read();
        res.status(201).json(consult)
    } catch (error) {
        res.status(500).json({
            error
        })
    }
};


async function find_by_id(req, res) {
    try {
        let consult = await service.readById(req.params.id);
        res.status(201).json(consult)
    } catch (error) {
        res.status(500).json({
            error
        })
    }
};

async function update_animals(req, res) {
    try {
        let query = await service.update(req.body, req.params.id)
        res.status(201).json(query)
    } catch (error) {
        res.status(500).json({
            error
        })
    }
};


async function delete_animals(req, res) {
    try {
        let query = await service.delete_item(req.params.id)
        res.status(201).json(query)
    } catch (error) {
        res.status(500).json({
            error
        })
    }
};


module.exports = {
    create_animals,
    read_animals,
    find_by_id,
    update_animals,
    delete_animals
};