'use strict';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		return queryInterface.changeColumn(
			'customers' ,	
			'id' ,
			{
				type        : Sequelize.UUID ,
				primaryKey  : true ,
				defaultValue: Sequelize.UUIDV4 ,
				allowNull   : false ,
				unique      : true
			}
		);
	} ,

	down: async(queryInterface , Sequelize) => {
		return queryInterface.changeColumn(
			'customers' ,
			'id' ,
			{
				type      : Sequelize.UUID ,
				primaryKey: true ,
				allowNull : false ,
				unique    : true
			}
		);
	}
};
