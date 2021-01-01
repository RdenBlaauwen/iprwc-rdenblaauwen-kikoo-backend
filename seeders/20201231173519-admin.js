'use strict';
const bcrypt = require('bcryptjs');
const{User} = require('../models/index');
const{v4} = require('uuid');

const tableName = 'users';
const password = 'admin-test';
module.exports = {
	up: async() => {
		return bcrypt.hash(password , 12)
			.then( (hash) => {
				const admin = User.build(
					{
						id      : v4() ,
						password: hash ,
						username: 'ShopKeeper' ,
						isAdmin : true
					}
				);
				console.log('admin seeder' , admin.get() );
				return admin.save();
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
