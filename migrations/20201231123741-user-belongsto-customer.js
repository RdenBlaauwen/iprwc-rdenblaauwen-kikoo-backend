'use strict';

const tableName = 'user';
const customerColumnName = 'CustomerId';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		queryInterface.addColumn(
			tableName ,
			customerColumnName ,
			{
				type        : Sequelize.UUID ,
				unique      : true ,
				onUpdate    : 'CASCADE' ,
				onDelete    : 'SET NULL' ,
				defaultValue: null ,
				field       : customerColumnName ,
				references  : {
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
