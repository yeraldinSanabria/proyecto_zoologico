// en esta hoja definiremos la conexiones a la base de datos `

const mysql = require('mysql2');

const connection = mysql.createConnection({

    host: 'localhost',
    port: 3409,
    user: 'root',
    password: 'yeral.',
    database: 'veterinaria'

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