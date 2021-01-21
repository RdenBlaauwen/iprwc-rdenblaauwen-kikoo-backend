const{v4} = require('uuid');
const bcrypt = require('bcryptjs');
const db = require('../../models/index');
const User = db.User;

const read = function(id = null){
	if(id){
		return User.findByPk(id);
	}

	return User.findAll();
};

exports.read = read;


exports.post = (req , res) => {
	const userData = req.body;
	userData.id = v4();
	bcrypt.hash(userData.password , 12)
		.then( (hashedPw) => {
			userData.password = hashedPw;
			return User.create(userData);
		})
		.then( (result) => {
			//TODO: remove password from result b4 returning
			res.status(200).json(result);
		})
		.catch( (err) => {
			// console.log(err);
			res.status(500).json(err);
		});
};