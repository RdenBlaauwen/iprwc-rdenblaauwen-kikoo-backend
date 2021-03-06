'use strict';
const{
	Model
} = require('sequelize');

module.exports = (sequelize , DataTypes) => {
	class Order extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			this.belongsTo(models.Customer , {foreignKey: 'CustomerId'});
			this.belongsToMany(models.Product , {
				through: models.OrderProduct , foreignKey: 'OrderId' , otherKey: 'ProductId'
			});
		}
	}
	Order.init(
		{
			id: {
				type      : DataTypes.UUID ,
				allowNull : false ,
				primaryKey: true ,
				unique    : true ,
			} ,
			CustomerId: {
				type      : DataTypes.UUID ,
				field     : 'CustomerId' ,
				references: {
					model: 'customer' ,
					key  : 'id'
				} ,
				onUpdate: 'CASCADE' ,
				onDelete: 'SET NULL'
			} ,
			status: {
				type        : DataTypes.STRING ,
				defaultValue: 'PENDING' ,
				allowNull   : false
			} ,
			createdAt: {
				allowNull   : false ,
				type        : DataTypes.DATE ,
				defaultValue: DataTypes.NOW ,
				field       : 'created_at'
			} ,
			updatedAt: {
				allowNull   : false ,
				type        : DataTypes.DATE ,
				defaultValue: DataTypes.NOW , // is this even valid in 'updatedAt'? Don't know if postgres even supports this
				field       : 'updated_at'
			}
		}
		, {
			sequelize ,
			modelName: 'Order' ,
			tableName: 'order'
		}
	);
	return Order;
};
