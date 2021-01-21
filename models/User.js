'use strict';

const{Model} = require('sequelize');

module.exports = (sequelize , DataTypes) => {
	class User extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) { // associate(models) is possible too
			this.belongsTo(models.Customer);
		}
	}
	User.init({
		id: {
			type      : DataTypes.UUID ,
			allowNull : false ,
			primaryKey: true ,
			unique    : true ,
		} ,
		password: DataTypes.STRING ,
		username: DataTypes.STRING ,
		email   : {
			type     : DataTypes.STRING ,
			unique   : true ,
			allowNull: false
		} ,
		isAdmin: {
			type        : DataTypes.BOOLEAN ,
			defaultValue: false ,
			field       : 'is_admin'
		} ,
		customer: {
			type      : DataTypes.UUID ,
			field     : 'CustomerId' ,
			references: {
				model: 'customer' ,
				key  : 'id'
			} ,
			onUpdate: 'CASCADE' ,
			onDelete: 'SET NULL'
		} ,
		createdAt: {
			allowNull: false ,
			type     : DataTypes.DATE ,
			field    : 'created_at'
		} ,
		updatedAt: {
			allowNull: false ,
			type     : DataTypes.DATE ,
			field    : 'updated_at'
		}
	} , {
		sequelize ,
		modelName: 'User' ,
		tableName: 'users'
	});
	return User;
};

