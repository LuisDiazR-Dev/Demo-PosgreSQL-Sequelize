const { DataTypes } = require ('sequelize')

const User = (database) => {

    database.define('User',{
        NickName:{
            type: DataTypes.STRING,
            allowNull:false, // no se permite campo vacío
            unique:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false, // no se permite campo vacío
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull:false, // no se permite campo vacío
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true, //obligatorio email
            notNull: false //obligatorio llenar campo
        },
        facebook: {
            type: DataTypes.STRING,
            isURl: true,
            notNull: false
        },
        password: {
            type: DataTypes.STRING,
            is: ['^[a-z]+$', 'i'], //Regex
            len: [4,15], // longitud de password
            notNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
        },
        birth:{
            type: DataTypes.DATEONLY, //año, mes y dia
        }
    },
    {
        // tableName:'ForzandoNombre',
        timestamps:false
    } //* para no colocar las ultimas dos columnas de la tabla con respecto al tiempo de creación y modificación
    )
}

module.exports = User;