'use strict';
const{
	Model
} = require('sequelize');

module.exports = (sequelize , DataTypes) => {
	class Customer extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			this.belongsTo(models.User);
			this.hasMany(models.Order , {foreignKey: 'CustomerId'});
		}
	}
	Customer.init({
		id: {
			type      : DataTypes.UUID ,
			allowNull : false ,
			primaryKey: true ,
			unique    : true ,
			validate  : {
				notNull: true
			}
		} ,
		firstName: {
			type : DataTypes.STRING ,
			field: 'first_name'
		} ,
		lastName: {
			type : DataTypes.STRING ,
			field: 'last_name'
		} ,
		email: {
			type     : DataTypes.STRING ,
			unique   : true ,
			allowNull: false
		} ,
		phoneNumber: {
			type     : DataTypes.STRING ,
			allowNull: false ,
			field    : 'phone_number'
		} ,
		country: DataTypes.STRING ,
		city   : {
			type     : DataTypes.STRING ,
			allowNull: false
		} ,
		street: {
			type     : DataTypes.STRING ,
			allowNull: false
		} ,
		houseNumber: {
			type     : DataTypes.SMALLINT ,
			allowNull: false ,
			field    : 'house_number'
		} ,
		postalCode: {
			type     : DataTypes.STRING ,
			allowNull: false ,
			field    : 'postal_code'
		} ,
		userId: {
			type      : DataTypes.UUID ,
			field     : 'UserId' ,
			unique    : true ,
			references: {
				model: 'user' ,
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
		modelName: 'Customer' ,
		tableName: 'customer'
	});
	return Customer;
};
