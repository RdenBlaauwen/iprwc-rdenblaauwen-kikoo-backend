'use strict';
const bcrypt = require('bcryptjs');
const{User} = require('../models/index');

const tableName = 'users';
const password = 'admin-test';
module.exports = {
	up: async(queryInterface) => {
		return bcrypt.hash(password , 12)
			.then( (hash) => {
				const admin = User.build(
					{
						password: hash ,
						username: 'KAKA' ,
						isAdmin : true
					}
				);
				console.log('admin seeder' , admin.get() );
				return queryInterface.bulkInsert(
					tableName ,
					[
						admin.get()
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
