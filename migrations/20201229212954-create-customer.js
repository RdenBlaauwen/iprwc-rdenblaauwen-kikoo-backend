'use strict';

const tableName = 'customer';

module.exports = {
	up: async(queryInterface , Sequelize) => {
		await queryInterface.createTable(
			tableName ,
			{
				id: {
					type      : Sequelize.UUID ,
					primaryKey: true ,
					allowNull : false ,
					unique    : true
				} ,
				firstName: {
					type : Sequelize.STRING ,
					field: 'first_name'
				} ,
				lastName: {
					type : Sequelize.STRING ,
					field: 'last_name'
				} ,
				email: {
					type     : Sequelize.STRING ,
					unique   : true ,
					allowNull: false
				} ,
				phoneNumber: {
					type     : Sequelize.STRING ,
					allowNull: false ,
					field    : 'phone_number'
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
					allowNull: false ,
					field    : 'house_number'
				} ,
				postalCode: {
					type     : Sequelize.STRING ,
					allowNull: false ,
					field    : 'postal_code'
				} ,
				userId: {
					type      : Sequelize.UUID ,
					field     : 'UserId' ,
					unique    : true ,
					references: {
						model: 'user' ,
						key  : 'id'
					} ,
					onUpdate: 'CASCADE' ,
					onDelete: 'SET NULL'
				} ,
				createdAt: {
					allowNull   : false ,
					type        : Sequelize.DATE ,
					defaultValue: Sequelize.fn('NOW') ,
					field       : 'created_at'
				} ,
				updatedAt: {
					allowNull   : false ,
					type        : Sequelize.DATE ,
					defaultValue: Sequelize.fn('NOW') ,
					field       : 'updated_at'
				}
			}
		);
	} ,
	down: async(queryInterface) => {
		await queryInterface.dropTable(tableName);
	}
};
