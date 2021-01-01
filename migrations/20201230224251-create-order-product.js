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
					references: {
						model: 'order' ,
						key  : 'id'
					}
				} ,
				product: {
					type      : Sequelize.UUID ,
					allowNull : false ,
					primaryKey: true ,
					references: {
						model: 'product' ,
						key  : 'id'
					}
				} ,
				amount: {
					type        : Sequelize.INTEGER ,
					allowNull   : false ,
					defaultValue: 0 // TODO: correct this to 1 in a later migration or smth
				}
			}
		);
	} ,
	down: async(queryInterface) => {
		await queryInterface.dropTable(tableName);
	}
};
