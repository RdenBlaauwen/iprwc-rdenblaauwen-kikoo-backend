'use strict';
require('dotenv').config();
const bcrypt = require('bcryptjs');
const{User} = require('../models/index');
const{v4} = require('uuid');

const tableName = 'user';
module.exports = {
	up: async() => {
		return bcrypt.hash(process.env.MOD_PASSWORD , process.env.AUTH_SALT)
			.then( (hash) => {
				const admin = User.build(
					{
						id      : v4() ,
						password: hash ,
						username: process.env.MOD_NAME ,
						email   : process.env.MOD_EMAIL ,
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
