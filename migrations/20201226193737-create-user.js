'use strict';
module.exports = {
	up: async(queryInterface , Sequelize) => {
		await queryInterface.createTable('Users' , {
			id: {
				allowNull : false ,
				primaryKey: true ,
				type      : Sequelize.UUIDV4
			} ,
			username: {
				type: Sequelize.STRING
			} ,
			password: {
				type: Sequelize.STRING
			} ,
			createdAt: {
				allowNull: false ,
				type     : Sequelize.DATE
			} ,
			updatedAt: {
				allowNull: false ,
				type     : Sequelize.DATE
			}
		});
	} ,
	down: async(queryInterface) => {
		await queryInterface.dropTable('Users');
	}
};
