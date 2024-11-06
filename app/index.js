const app = require("./app");
const config = require("./helpers/config");
const db_conection =require('./helpers/db');


async function main() {
    app.listen();
    db_conection.connect();
}

main();