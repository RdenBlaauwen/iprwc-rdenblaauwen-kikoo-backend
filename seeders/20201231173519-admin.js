'use strict';
const bcrypt = require('bcryptjs');
const tableName = 'users';
const password = 'admin-test';
module.exports = {
	up: async(queryInterface) => {
		return bcrypt.hash(password , 12)
			.then( (hash) => {
				return queryInterface.bulkInsert(
					tableName ,
					[
						{
							password : hash ,
							username : 'ShopAdmin' ,
							isAdmin  : true ,
							createdAt: new Date() ,
							updatedAt: new Date()
						}
					]
				);
			});
	} ,

	down: async(queryInterface) => {
		return queryInterface.bulkDelete(
			tableName ,
			null ,
			{}
		);
	}
};
