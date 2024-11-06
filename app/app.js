const express = require('express');
const bodyParser = require('body-parser');
const config = require('./helpers/config');
const index_router = require('./routes/index.route');
const types_route = require('./routes/types.route');
const diet_route = require('./routes/diet.route');
const habitats_route = require('./routes/habitats.route');
const species_route = require('./routes/species.router');
const animals_route = require('./routes/animals.route');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cabeceras
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTAS
app.use(index_router);
app.use('/types',types_route);
app.use('/diet',diet_route);
app.use('/habitats',habitats_route);
app.use('/species', species_route);
app.use('/animals',animals_route );


app.listen(config.port, ()=>{
    console.log(`server on port ${config.port}`)
})

module.exports = app;