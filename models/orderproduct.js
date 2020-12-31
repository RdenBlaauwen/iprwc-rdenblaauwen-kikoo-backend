'use strict';
const{
	Model
} = require('sequelize');
const{modelName , attributes} = require('./orderproduct.meta');
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
			modelName ,
		}
	);
	return OrderProduct;
};
