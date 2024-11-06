// en esta hoja definiremos la conexiones a la base de datos `

const mysql = require('mysql2');

const connection = mysql.createConnection({

    host: 'store-ecommerce-do-user-8977041-0.g.db.ondigitalocean.com',
    port: 25060,
    user: 'animals_user',
    password: 'AVNS_0qW6xeFofhO7esgkh_k',
    database: 'animals'

});

connection.connect((error) => {
    if (error) {
        console.log('Error conectando con la base de datos', error);
        return
    } else {
        console.log('Conectando a la base de datos')
    }
});

module.exports = connection;