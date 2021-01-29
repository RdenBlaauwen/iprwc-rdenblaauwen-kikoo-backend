const db = require('../models/index');
const User = db.User;

exports.read = (id = null) => {
	if(id){
		return User.findByPk(id);
	}
		
	return User.findAll();
};
