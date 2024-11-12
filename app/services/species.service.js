const initializeConnection = require("../helpers/db");

const Generate = require('../helpers/generate');
const columnTable = ['id', 'name', 'state','type_id','habitats_id','diet_id','extinct']
const generate = new Generate();

async function read() {
    try {
        const connection = await initializeConnection();
        let query = `SELECT 
                s.id,
                s.name, 
                s.type_id,
                t.name AS type,
                s.habitats_id,
                h.name AS habitats,
                s.diet_id,
                d.type AS diet,
                CASE 
                    WHEN s.extinct = 1 THEN 'Sí' 
                    ELSE 'No' 
                END AS extinct
            FROM species s 
            INNER JOIN types t ON s.type_id = t.id 
            INNER JOIN habitats h ON s.habitats_id = h.id 
            INNER JOIN diet d ON s.diet_id = d.id`;
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
        let query = generate.create('species', body);
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
        let query = generate.update('species', data, id);
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
        let query = generate.delete('species', id);
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
        let query = generate.readById('species', columnTable, id);
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