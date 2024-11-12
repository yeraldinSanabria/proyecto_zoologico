const initializeConnection = require("../helpers/db");

const Generate = require('../helpers/generate');
const columnTable = ['id', 'name', 'state','description']
const generate = new Generate();

async function read() {
    try {
        const connection = await initializeConnection();
        let query = generate.read('habitats', columnTable);
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
        let query = generate.create('habitats', body);
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
        let query = generate.update('habitats', data, id);
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
        let query = generate.delete('habitats', id);
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
        let query = generate.readById('habitats', columnTable, id);
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