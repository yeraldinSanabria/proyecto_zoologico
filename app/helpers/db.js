const mysql = require('mysql2/promise');

async function initializeConnection() {
    const connection = await mysql.createConnection({
        host: 'store-ecommerce-do-user-8977041-0.g.db.ondigitalocean.com',
        port: 25060,
        user: 'animals_user',
        password: 'AVNS_0qW6xeFofhO7esgkh_k',
        database: 'animals'
    });

    try {
        await connection.connect();
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error conectando con la base de datos', error);
    }

    return connection;
}

module.exports = initializeConnection;

