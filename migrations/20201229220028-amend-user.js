'use strict';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		return queryInterface.addColumn(
			'Users' ,
			'customer' ,
			{
				type      : Sequelize.UUID ,
				unique    : true ,
				onUpdate  : 'CASCADE' ,
				onDelete  : 'SET NULL' ,
				references: {
					model: 'customers' ,
					key  : 'id'
				}
			}
		)
			.then( () => {
				return queryInterface.addColumn(
					'Users' ,
					'isAdmin' ,
					{
						type        : Sequelize.BOOLEAN ,
						defaultValue: false
					}
				);
			})
			.then( () => {
				return queryInterface.changeColumn(
					'Users' ,
					'id' ,
					{
						type         : Sequelize.UUID ,
						unique       : true ,
						defaultValue : Sequelize.UUIDV4 ,
						allowNull    : false ,
						primaryKey   : true ,
						autoIncrement: false
					}
				);
			});
	} ,

	down: async(queryInterface , Sequelize) => {
		return queryInterface.removeColumn(
			'Users' ,
			'customerId'
		).then( () => {
			queryInterface.removeColumn(
				'Users' ,
				'isAdmin'
			);
		})
			.then( () => {
				queryInterface.changeColumn(
					'Users' ,
					'id' ,
					{
						allowNull : false ,
						primaryKey: true ,
						type      : Sequelize.UUID
					}
				);
			});
	}
};
