'use strict';
const{tableName , attributes} = require('../models/product.meta');

module.exports = {
	up: async(queryInterface) => {
		console.log(attributes);
		await queryInterface.createTable(tableName , attributes);
	} ,
	down: async(queryInterface) => {
		await queryInterface.dropTable(tableName);
	}
};
