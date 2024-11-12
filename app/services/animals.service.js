const initializeConnection = require("../helpers/db");

const Generate = require('../helpers/generate');
const columnTable = ['id', 'name', 'species_id']
const generate = new Generate();

async function read() {
    try {
        const connection = await initializeConnection();
        let query = `SELECT 
                        a.id,
                        a.name, 
                        a.species_id,
                        s.name AS specie
                        FROM animals a 
                        INNER JOIN species s ON a.species_id = s.id;`;
        const [rows] = await connection.query(query);
        connection.end();
        return rows
    } catch (error) {
        return error
    }
};

async function create(body) {
    try {
        const connection = await initializeConnection();
        let query = generate.create('animals', body);
        const [rows] = await connection.query(query);
        connection.end();
        return rows
    } catch (error) {
        return error
    }
}

async function update(data, id) {
    try {
        const connection = await initializeConnection();
        let query = generate.update('animals', data, id);
        const [rows] = await connection.query(query);
        connection.end();
        return rows
    } catch (error) {
        return error
    }
};

async function delete_item(id) {
    try {
        const connection = await initializeConnection();
        let query = generate.delete('animals', id);
        const [rows] = await connection.query(query);
        connection.end();
        return rows
    } catch (error) {
        return error
    }

};

async function readById(id) {
    try {
        const connection = await initializeConnection();
        let query = generate.readById('animals', columnTable, id);
        const [rows] = await connection.query(query);
        connection.end();
        return rows[0]
    } catch (error) {
        return error
    }

}


module.exports = {
    read,
    create,
    update,
    delete_item,
    readById

}