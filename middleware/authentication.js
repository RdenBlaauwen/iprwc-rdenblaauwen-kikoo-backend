const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const roles = require('../config/roles');
const db = require('../models/index');
const User = db.User;

const userController = require('./controllers/user');

const secret = 'Oerteeqa-Zcorpinde511';

module.exports.login = (req , res , next) => {
	const userData = req.body;

	let _user;

	User.findOne({
		where: {
			username: userData.username
		}
	})
		.then( (user) => {
			if(!user){
				// res.status(401).json({message: 'User with this email doesn\'t exist'});
				const error = new Error('User with this email doesn\'t exist');
				error.statusCode = 401;
				throw error;
			}
			_user = user;
			return bcrypt.compare(userData.password , user.password);
		})
		.then( (isSame) => {
			if(!isSame){
				// res.status(401).json({message: 'Wrong password!'});
				// console.log(userData.password);

				const error = Error('Wrong password!');
				error.statusCode = 401;
				throw error;
			}
			const token = jwt.sign(
				{
					userId: _user.id
				} ,
				secret ,
				{expiresIn: '3h'}
			);
            
			res.status(200).json({
				user: _user ,
				token
			});
		})
		.catch( (err) => {
			// console.log(err);
			// res.status(500).json(err);
			if(!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
};

module.exports.determine = (req , res , next) => {
	res.locals.requestor = {};
	const header = req.header('Authorization');

	if(!header){
		res.locals.requestor.role = roles.GUEST;
		next();
		return;
	}

	const token = header.split(' ')[1];
	let decodedToken;

	try{
		decodedToken = jwt.verify(token , secret);
	} catch(err) {
		if(err){
			if(err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError'){
				err.statusCode = 401;
			} else{
				err.statusCode = 500;
			}
			throw err;
		}
	}

	userController.read(decodedToken.userId)
		.then( (user) => {
			res.locals.requestor.user = user;
			res.locals.requestor.role = user.isAdmin ? roles.ADMIN : roles.USER;
			next();
		})
		.catch( (err) => {
			err.statusCode = 500;
			throw err;
		});
};
