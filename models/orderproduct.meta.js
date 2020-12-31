const{
	DataTypes
} = require('sequelize');
const orderMeta = require('./order.meta');
const productMeta = require('./product.meta');

const attributes = {
	order: {
		type      : DataTypes.UUID ,
		allowNull : false ,
		primaryKey: true ,
		references: {
			model: orderMeta.tableName ,
			key  : 'id'
		}
	} ,
	product: {
		type      : DataTypes.UUID ,
		allowNull : false ,
		primaryKey: true ,
		references: {
			model: productMeta.tableName ,
			key  : 'id'
		}
	} ,
	amount: {
		type        : DataTypes.INTEGER ,
		allowNull   : false ,
		defaultValue: 0
	}
};

module.exports = {
	tableName: 'order_product' ,
	modelName: 'OrderProduct' ,
	attributes
};
