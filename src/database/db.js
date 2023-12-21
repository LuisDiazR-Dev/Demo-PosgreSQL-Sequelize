require('dotenv').config(); // cargando las variables de entorno // npm i 
const {Sequelize} = require ('sequelize')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// * Models
const User = require('./Models/user')
const subject = require('./Models/subject')
const teacher = require('./Models/teacher')

// * modo 1
// const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);

// * modo 2
const database = new Sequelize({
      dialect: 'postgres',
      host: DB_HOST,
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      // logging: false 
     });

     

// * Models executed
User(database);
subject(database);
teacher(database);


console.log(database.models);
//? se crean estancias. hay qu exportarlas para trabajarlas

  module.exports = {database, ...database.models};
