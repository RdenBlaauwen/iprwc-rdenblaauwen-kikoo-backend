'use strict';
const{
	Model
} = require('sequelize');
const{modelName , attributes , tableName} = require('./product.meta');

module.exports = (sequelize) => {
	class Product extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			this.hasMany(models.Order);
		}
	}
	Product.init(
		attributes ,
		{
			sequelize ,
			modelName ,
			tableName
		}
	);
	return Product;
};
