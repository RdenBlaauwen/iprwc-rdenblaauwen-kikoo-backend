const Sequelize = require('sequelize');
const sequelize = new Sequelize(
	'node-complete' , 
	'root' ,
	'UnUn_Werkium11' , 
	{
		dialect: 'postgresql' , 
		host   : 'localhost'
	}
);

module.exports = sequelize;
