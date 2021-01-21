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
			this.belongsTo(models.Order , {foreignKey: 'OrderId'});
			this.belongsTo(models.Product , {foreignKey: 'ProductId'});
		}
	}
	OrderProduct.init(
		{
			orderId: {
				type      : DataTypes.UUID ,
				allowNull : false ,
				primaryKey: true ,
				field     : 'OrderId' ,
				references: {
					model: 'order' ,
					key  : 'id'
				}
			} ,
			productId: {
				type      : DataTypes.UUID ,
				allowNull : false ,
				primaryKey: true ,
				field     : 'ProductId' ,
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
