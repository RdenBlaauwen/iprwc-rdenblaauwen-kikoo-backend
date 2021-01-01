'use strict';

const tableName = 'users';
const customerColumnName = 'CustomerId';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		queryInterface.addColumn(
			tableName ,
			customerColumnName ,
			{
				type      : Sequelize.UUID ,
				unique    : true ,
				onUpdate  : 'CASCADE' ,
				onDelete  : 'CASCADE' ,
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
			customerColumnName
		);
	}
};
