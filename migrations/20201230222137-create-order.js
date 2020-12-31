'use strict';
const{tableName , attributes} = require('../models/order.meta');
module.exports = {
	up: async(queryInterface) => {
		await queryInterface.createTable(tableName , attributes);
	} ,
	down: async(queryInterface) => {
		await queryInterface.dropTable(tableName);
	}
};
