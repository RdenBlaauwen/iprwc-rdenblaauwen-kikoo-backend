'use strict';
const{
	Model
} = require('sequelize');
const{modelName , attributes , tableName} = require('./order.meta');
module.exports = (sequelize) => {
	class Order extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			this.belongsTo(models.User);
			this.belongsToMany(models.Product , {through: models.OrderProduct});
		}
	}
	Order.init(
		attributes
		, {
			sequelize ,
			modelName ,
			tableName
		}
	);
	return Order;
};
