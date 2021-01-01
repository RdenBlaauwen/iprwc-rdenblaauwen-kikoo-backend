'use strict';

const tableName = 'users';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		await queryInterface.createTable(
			tableName ,
			{
				id: {
					type         : Sequelize.UUID ,
					defaultValue : Sequelize.UUIDV4 ,
					unique       : true ,
					allowNull    : false ,
					primaryKey   : true ,
					autoIncrement: false
				} ,
				username: {
					type: Sequelize.STRING
				} ,
				password: {
					type: Sequelize.STRING
				} ,
				isAdmin: {
					type        : Sequelize.BOOLEAN ,
					defaultValue: false
				} ,
				createdAt: {
					allowNull   : false ,
					type        : Sequelize.DATE ,
					defaultValue: Sequelize.fn('NOW')
				} ,
				updatedAt: {
					allowNull   : false ,
					type        : Sequelize.DATE ,
					defaultValue: Sequelize.fn('NOW')
				}
			}
		);
	} ,
	down: async(queryInterface) => {
		await queryInterface.dropTable(tableName);
	}
};
