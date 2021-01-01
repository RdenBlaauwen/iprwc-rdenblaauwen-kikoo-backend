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
			this.hasOne(models.Customer);
			this.hasMany(models.Order);
		}
	}
	User.init({
		id      : DataTypes.UUID ,
		password: DataTypes.STRING ,
		username: DataTypes.STRING ,
		isAdmin : DataTypes.BOOLEAN ,
		Customer: DataTypes.UUID
	} , {
		sequelize ,
		modelName: 'User' ,
		tableName: 'users'
	});
	return User;
};

