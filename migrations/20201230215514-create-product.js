'use strict';

const tableName = 'product';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		await queryInterface.createTable(
			tableName , 
			{
				id: {
					type        : Sequelize.UUID ,
					primaryKey  : true ,
					defaultValue: Sequelize.UUIDV4 ,
					allowNull   : false ,
					unique      : true
				} ,
				name: {
					type     : Sequelize.STRING ,
					unique   : true ,
					allowNull: false
				} ,
				description: Sequelize.TEXT ,
				imageUri   : Sequelize.TEXT ,
				stock      : Sequelize.INTEGER ,
				price      : Sequelize.FLOAT
			}
		);
	} ,
	down: async(queryInterface) => {
		await queryInterface.dropTable(
			tableName
		);
	}
};
