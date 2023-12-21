const {DataTypes} = require ('sequelize')

module.exports = (database)=>{
	database.define('Teacher',
	{
		name:{
			type: DataTypes.STRING,
			allowNull: false			
		},
		lastName: {
			type:DataTypes.STRING,
			allowNull: false
		},
		email:{
			type:DataTypes.STRING,
			allowNull: false,
            isEmail:true
		}
	},
	{
		// tableName:'ForzandoNombre',
		timestamps:false
	}    
	)
}