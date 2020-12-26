'use strict';

const{Model} = require('sequelize');

module.exports = (sequelize , DataTypes) => {
	class User extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate() { // associate(models) is possible too
			// define association here
		}
	}
	User.init({
		id      : DataTypes.UUIDV4 ,
		password: DataTypes.STRING ,
		username: DataTypes.STRING 
	} , {
		sequelize ,
		modelName: 'User' ,
	});
	return User;
};
