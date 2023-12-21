const {PORT, server} = require('./src/server')
const {database} = require('./src/database/db')

server.listen(PORT, async ()=>{
    try {
        await database.sync({ alter: true, logging: false });
        console.log('Base de datos escuchando en el puerto 5432');
        console.log(`Servidor escuchando en el puerto: ${PORT}`);
        
        // * {force:true} -> tras cada save hace un reset de todas asl tablas creadas. false para que no se ejecute 
        // * {alter:true} -> modifica las tablas a medida que se va trabajando sin borrar otras ya creadas      
        
    } catch (error) {
        console.error('Error al iniciar el servidor:', error)
    }
})

// ? con Sequelize ya no vamos a crear tablas, sino modelos. modelos son objetos que luego Sequelize transforma en tablas para la base de datos abstrayendo el proceso para que a nosotros se nos haga mas ameno al no tener qeu estar en la shell de PostgreSQL.


