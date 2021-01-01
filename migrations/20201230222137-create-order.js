'use strict';

const tableName = 'order';

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
				orderer: {
					type      : Sequelize.UUID ,
					references: {
						model: 'users' ,
						key  : 'id'
					}
				} ,
				status: {
					type        : Sequelize.STRING ,
					defaultValue: 'PENDING' ,
					allowNull   : false
				} ,
				createdAt: {
					allowNull   : false ,
					type        : Sequelize.DATE ,
					defaultValue: Sequelize.fn('NOW')
				} ,
				updatedAt: {
					allowNull   : false ,
					type        : Sequelize.DATE ,
					defaultValue: Sequelize.fn('NOW')// is this even valid in 'updatedAt'? Don't know if postgres even supports this
				}
			}
		);
	} ,
	down: async(queryInterface) => {
		await queryInterface.dropTable(tableName);
	}
};
