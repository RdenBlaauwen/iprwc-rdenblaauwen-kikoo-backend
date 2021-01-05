'use strict';

const tableName = 'users';
const columnName = 'email';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		queryInterface.addColumn(
			tableName ,
			columnName ,
			{
				type  : Sequelize.STRING ,
				unique: true ,
			}
		);
	} ,

	down: async(queryInterface) => {
		queryInterface.removeColumn(
			tableName ,
			columnName
		);
	}
};
