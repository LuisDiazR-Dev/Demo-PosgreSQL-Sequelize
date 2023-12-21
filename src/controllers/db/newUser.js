const {User}=require('../../database/db') //* trayendo el modelo creado para poder manipular los datos en la tabla.

const newUser = async (req, res )=>{
    // res.send('estoy en el post db')
    try {
        const { name, lastName } = req.body;
        const newUser = await User.create({ name, lastName });
        res.status(201).json(newUser);
        
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(400).send(error.message);
    }
}

module.exports = newUser;