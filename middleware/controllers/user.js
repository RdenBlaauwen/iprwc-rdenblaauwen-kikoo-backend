const config = require('../../config/config.js');

const bcrypt = require('bcryptjs') ,
	db = require('../../models/index') ,
	{v4} = require('uuid');

const User = db.User;
	
const read = function(id = null){
	if(id){
		return User.findByPk(id);
	}
		
	return User.findAll();
};
	
exports.read = read;

exports.post = (req , res , next) => {
	const userData = req.body;
	userData.id = v4();
	bcrypt.hash(userData.password , config.auth.SALT)//TODO: check if retrieving salt works properly
		.then( (hashedPw) => {
			userData.password = hashedPw;
			return User.create(userData);
		})
		.then( (result) => {
			//TODO: remove password from result b4 returning
			res.status(200).json(result);
		})
		.catch( (err) => {
			next(err);
		});
};
