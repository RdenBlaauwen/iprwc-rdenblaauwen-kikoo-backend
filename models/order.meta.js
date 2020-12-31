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
	orderer: {
		type      : DataTypes.UUID ,
		references: {
			model: 'Users' ,
			key  : 'id'
		}
	} ,
	status: {
		type        : DataTypes.STRING ,
		defaultValue: 'PENDING' ,
		allowNull   : false
	} ,
	createdAt: {
		allowNull   : false ,
		type        : DataTypes.DATE ,
		defaultValue: DataTypes.NOW
	} ,
	updatedAt: {
		allowNull   : false ,
		type        : DataTypes.DATE ,
		defaultValue: DataTypes.NOW // is this even valid in 'updatedAt'? Don't know if postgres even supports this
	}
};

module.exports = {
	tableName: 'order' ,
	modelName: 'Order' ,
	attributes
};
