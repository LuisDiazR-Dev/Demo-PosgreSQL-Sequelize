const {DataTypes} = require ('sequelize')

module.exports = (database)=>{
	database.define('Subject',
	{
		code:{
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type:DataTypes.STRING,
			allowNull: false
		},
		description:{
			type:DataTypes.TEXT
		}
	},
	{
		// tableName:'ForzandoNombre',
		timestamps:false
	}    
	)
}