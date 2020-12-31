'use strict';

const tableName = 'users';
const customerTableName = 'customer';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		queryInterface.addColumn(
			tableName ,
			customerTableName ,
			{
				type      : Sequelize.UUID ,
				unique    : true ,
				onUpdate  : 'CASCADE' ,
				onDelete  : 'SET NULL' ,
				references: {
					model: 'customer' ,
					key  : 'id'
				}
			} ,
		);
	} ,

	down: async(queryInterface) => {
		queryInterface.removeColumn(
			tableName ,
			customerTableName
		);
	}
};
