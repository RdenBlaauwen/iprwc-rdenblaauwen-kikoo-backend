'use strict';

const tableName = 'order_product';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		await queryInterface.createTable(
			tableName , 
			{
				order: {
					type      : Sequelize.UUID ,
					allowNull : false ,
					primaryKey: true ,
					field     : 'order' ,
					references: {
						model: 'order' ,
						key  : 'id'
					}
				} ,
				product: {
					type      : Sequelize.UUID ,
					allowNull : false ,
					primaryKey: true ,
					field     : 'product' ,
					references: {
						model: 'product' ,
						key  : 'id'
					}
				} ,
				amount: {
					type        : Sequelize.INTEGER ,
					allowNull   : false ,
					defaultValue: 1
				}
			}
		);
	} ,
	down: async(queryInterface) => {
		await queryInterface.dropTable(tableName);
	}
};
