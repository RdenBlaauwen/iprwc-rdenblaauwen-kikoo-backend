'use strict';
const{
	Model ,
} = require('sequelize');

module.exports = (sequelize , DataTypes) => {
	class OrderProduct extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			this.belongsTo(models.Order , {foreignKey: 'order'});
			this.belongsTo(models.Product , {foreignKey: 'product'});
		}
	}
	OrderProduct.init(
		{
			order: {
				type      : DataTypes.UUID ,
				allowNull : false ,
				primaryKey: true ,
				field     : 'order' ,
				references: {
					model: 'order' ,
					key  : 'id'
				}
			} ,
			product: {
				type      : DataTypes.UUID ,
				allowNull : false ,
				primaryKey: true ,
				field     : 'product' ,
				references: {
					model: 'product' ,
					key  : 'id'
				}
			} ,
			amount: {
				type        : DataTypes.INTEGER ,
				allowNull   : false ,
				defaultValue: 1
			} 
		} ,
		{
			sequelize ,
			modelName : 'OrderProduct' ,
			tableName : 'order_product' ,
			timestamps: false
		}
	);
	return OrderProduct;
};
