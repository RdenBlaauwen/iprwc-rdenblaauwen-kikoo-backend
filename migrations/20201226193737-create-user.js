'use strict';

const tableName = 'user';

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
				email: {
					type     : Sequelize.STRING ,
					unique   : true ,
					allowNull: false
				} ,
				isAdmin: {
					type        : Sequelize.BOOLEAN ,
					defaultValue: false ,
					field       : 'is_admin'
				} ,
				createdAt: {
					allowNull   : false ,
					type        : Sequelize.DATE ,
					defaultValue: Sequelize.fn('NOW') ,
					field       : 'created_at'
				} ,
				updatedAt: {
					allowNull   : false ,
					type        : Sequelize.DATE ,
					defaultValue: Sequelize.fn('NOW') ,
					field       : 'updated_at'
				}
			}
		);
	} ,
	down: async(queryInterface) => {
		await queryInterface.dropTable(tableName);
	}
};
