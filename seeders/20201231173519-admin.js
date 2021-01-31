'use strict';
const config = require('../config/config.js');

const bcrypt = require('bcryptjs');
const{User} = require('../models/index');
const{v4} = require('uuid');

const tableName = 'user';
module.exports = {
	up: async() => {
		return bcrypt.hash(config.mod.PASSWORD , config.auth.SALT)
			.then( (hash) => {
				const admin = User.build(
					{
						id      : v4() ,
						password: hash ,
						username: config.mod.NAME ,
						email   : config.mod.EMAIL ,
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
