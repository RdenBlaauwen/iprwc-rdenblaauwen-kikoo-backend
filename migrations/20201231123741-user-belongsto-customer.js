'use strict';

const tableName = 'users';
const customerColumnName = 'customer';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		queryInterface.addColumn(
			tableName ,
			customerColumnName ,
			{
				type      : Sequelize.UUID ,
				unique    : true ,
				onUpdate  : 'CASCADE' ,
				onDelete  : 'SET NULL' ,
				field     : customerColumnName ,
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
