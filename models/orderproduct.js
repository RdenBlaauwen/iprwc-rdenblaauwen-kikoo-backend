'use strict';
const{
	Model ,
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

module.exports = (sequelize) => {
	class OrderProduct extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			this.belongsTo(models.Order);
			this.belongsTo(models.Product);
		}
	}
	OrderProduct.init(
		attributes , 
		{
			sequelize ,
			modelName: 'OrderProduct' ,
			tableName: 'order_product' ,
		}
	);
	return OrderProduct;
};
