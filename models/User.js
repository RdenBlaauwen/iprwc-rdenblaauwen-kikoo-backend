'use strict';

const{Model} = require('sequelize');
const{v4} = require('uuid');

module.exports = (sequelize , DataTypes) => {
	class User extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) { // associate(models) is possible too
			// this.hasOne(models.Customer);
			this.hasMany(models.Order);
		}
	}
	User.init({
		id: {
			type      : DataTypes.UUID ,
			allowNull : false ,
			primaryKey: true ,
			unique    : true ,
		} ,
		password : DataTypes.STRING ,
		username : DataTypes.STRING ,
		isAdmin  : DataTypes.BOOLEAN ,
		Customer : DataTypes.UUID ,
		createdAt: {
			allowNull: false ,
			type     : DataTypes.DATE
		} ,
		updatedAt: {
			allowNull: false ,
			type     : DataTypes.DATE
		}
	} , {
		sequelize ,
		modelName: 'User' ,
		tableName: 'users'
	});
	return User;
};

