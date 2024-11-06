const initializeConnection = require("../helpers/db");

const Generate = require('../helpers/generate');
const columnTable = ['id', 'type', 'state','description']
const generate = new Generate();

async function read() {
    try {
        const connection = await initializeConnection();
        let query = generate.read('diet', columnTable);
        const [rows] = await connection.query(query);
        return rows
    } catch (error) {
        return error
    }
};

async function create(body) {
    try {
        const connection = await initializeConnection();
        let query = generate.create('diet', body);
        const [rows] = await connection.query(query);
        return rows
    } catch (error) {
        return error
    }
}

async function update(data, id) {
    try {
        const connection = await initializeConnection();
        let query = generate.update('diet', data, id);
        const [rows] = await connection.query(query);
        return rows
    } catch (error) {
        return error
    }
};

async function delete_item(id) {
    try {
        const connection = await initializeConnection();
        let query = generate.delete('diet', id);
        const [rows] = await connection.query(query);
        return rows
    } catch (error) {
        return error
    }

};

async function readById(id) {
    try {
        const connection = await initializeConnection();
        let query = generate.readById('diet', columnTable, id);
        const [rows] = await connection.query(query);
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