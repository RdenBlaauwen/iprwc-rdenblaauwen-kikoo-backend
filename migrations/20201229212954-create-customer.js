'use strict';

const tableName = 'customer';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		await queryInterface.createTable(
			tableName ,
			{
				id: {
					type        : Sequelize.UUID ,
					primaryKey  : true ,
					defaultValue: Sequelize.UUIDV4 ,
					allowNull   : false ,
					unique      : true
				} ,
				firstName: Sequelize.STRING ,
				lastName : Sequelize.STRING ,
				email    : {
					type     : Sequelize.STRING ,
					unique   : true ,
					allowNull: false
				} ,
				phoneNumber: {
					type     : Sequelize.STRING ,
					unique   : true ,
					allowNull: false
				} ,
				country: Sequelize.STRING ,
				city   : {
					type     : Sequelize.STRING ,
					allowNull: false
				} ,
				street: {
					type     : Sequelize.STRING ,
					allowNull: false
				} ,
				houseNumber: {
					type     : Sequelize.SMALLINT ,
					allowNull: false
				} ,
				postalCode: {
					type     : Sequelize.STRING ,
					allowNull: false
				} ,
				user: {
					type      : Sequelize.UUID ,
					references: {
						model: 'users' ,
						key  : 'id'
					} ,
					onUpdate: 'CASCADE' ,
					onDelete: 'SET NULL'
				} ,
				createdAt: {
					allowNull: false ,
					type     : Sequelize.DATE
				} ,
				updatedAt: {
					allowNull: false ,
					type     : Sequelize.DATE
				}
			}
		);
	} ,
	down: async(queryInterface) => {
		await queryInterface.dropTable(tableName);
	}
};
