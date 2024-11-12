const initializeConnection = require("../helpers/db");

const Generate = require('../helpers/generate');
const columnTable = ['id', 'name', 'state']
const generate = new Generate();

async function read() {
    try {
        const connection = await initializeConnection();
        let query = generate.read('types', columnTable);
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
        let query = generate.create('types', body);
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
        let query = generate.update('types', data, id);
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
        let query = generate.delete('types', id);
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
        let query = generate.readById('types', columnTable, id);
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