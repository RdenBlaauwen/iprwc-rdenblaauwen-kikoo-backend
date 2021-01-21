'use strict';
const{
	Model
} = require('sequelize');

module.exports = (sequelize , DataTypes) => {
	class Product extends Model {
		/**
	 * Helper method for defining associations.
	 * This method is not a part of Sequelize lifecycle.
	 * The `models/index` file will call this method automatically.
	 */
		static associate(models) {
			this.belongsToMany(models.Order , {
				through: models.OrderProduct , foreignKey: 'product' , otherKey: 'order'
			});
		}
	}
	Product.init(
		{
			id: {
				type      : DataTypes.UUID ,
				allowNull : false ,
				primaryKey: true ,
				unique    : true 
			} ,
			name: {
				type     : DataTypes.STRING ,
				unique   : true ,
				allowNull: false
			} ,
			description: DataTypes.TEXT ,
			imageUrl   : {
				type : DataTypes.TEXT ,
				field: 'image_url'
			} ,
			stock: DataTypes.INTEGER ,
			price: DataTypes.FLOAT
		} ,
		{
			sequelize ,
			modelName: 'Product' ,
			tableName: 'product'
		}
	);
	return Product;
};
