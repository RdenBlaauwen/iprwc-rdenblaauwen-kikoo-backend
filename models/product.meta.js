const{
	DataTypes
} = require('sequelize');

const attributes = {
	id: {
		type        : DataTypes.UUID ,
		primaryKey  : true ,
		defaultValue: DataTypes.UUIDV4 ,
		allowNull   : false ,
		unique      : true
	} ,
	name: {
		type     : DataTypes.STRING ,
		unique   : true ,
		allowNull: false
	} ,
	description: DataTypes.TEXT ,
	imageUri   : DataTypes.TEXT ,
	stock      : DataTypes.INTEGER ,
	price      : DataTypes.FLOAT
};


module.exports = {
	tableName: 'product' ,
	modelName: 'Product' ,
	attributes
};
