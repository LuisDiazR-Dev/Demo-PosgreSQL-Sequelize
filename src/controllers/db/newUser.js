// const {user}=require('/src/database/db') //* trayendo el modelo creado para poder manipular los datos en la tabla.

const newUser = async (req, res )=>{
    res.send('estoy en el post db')
    // try {
    //     const {name, lastName} = req.body

    //     const newUser = await user.create({name,lastName})
    //     res.status(201).json(newUser)
        
    // } catch (error) {
        
    // }
}

module.exports = newUser;