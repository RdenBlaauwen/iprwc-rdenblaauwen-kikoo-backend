'use strict';

const tableName = 'order_product';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		await queryInterface.createTable(
			tableName , 
			{
				OrderId: {
					type      : Sequelize.UUID ,
					allowNull : false ,
					primaryKey: true ,
					field     : 'OrderId' ,
					references: {
						model: 'order' ,
						key  : 'id'
					}
				} ,
				ProductId: {
					type      : Sequelize.UUID ,
					allowNull : false ,
					primaryKey: true ,
					field     : 'ProductId' ,
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
