const express = require('express')
const server = express()
const PORT = 3001

const morgan = require('morgan');
const router = require('./routes');




//* Middleware van antes de las rutas
server.use(morgan('dev')) //dev es el tipo de formato de respuesta. hay varios, ver más
server.use(express.json()) // este señor convierte los objetos que vengan en las req a json
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});




//* Enrutador
server.use('/videogames', router)


module.exports = {PORT, server}