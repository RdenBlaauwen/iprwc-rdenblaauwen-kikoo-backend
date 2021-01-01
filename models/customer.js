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
			this.hasOne(models.User);
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
		firstName: DataTypes.STRING ,
		lastName : DataTypes.STRING ,
		email    : {
			type     : DataTypes.STRING ,
			unique   : true ,
			allowNull: false
		} ,
		phoneNumber: {
			type     : DataTypes.STRING ,
			unique   : true ,
			allowNull: false
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
			allowNull: false
		} ,
		postalCode: {
			type     : DataTypes.STRING ,
			allowNull: false
		}
	} , {
		sequelize ,
		modelName: 'Customer' ,
		tableName: 'customer'
	});
	return Customer;
};
