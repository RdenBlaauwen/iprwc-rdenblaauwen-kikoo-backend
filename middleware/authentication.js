const config = require('../config/config.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const roles = require('./roles');
const db = require('../models/index');
const User = db.User;

const userDao = require('../daos/user');

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
				const error = new Error('User with this username doesn\'t exist'); //TODO: try to replace this with next(error) or smth
				error.statusCode = 401;
				throw error;
			}
			_user = user;
			return bcrypt.compare(userData.password , user.password);
		})
		.then( (isSame) => {
			if(!isSame){
				const error = Error('Wrong password!');
				error.statusCode = 401;
				next(error);
			}
			const token = jwt.sign(
				{
					userId: _user.id
				} ,
				config.auth.SECRET ,
				{expiresIn: '3h'}
			);
            
			res.status(200).json({
				user: _user ,
				token
			});
		})
		.catch( (err) => {
			next(err);
		});
};

module.exports.determine = (req , res , next) => {
	res.locals.requestor = {};
	const header = req.header('Authorization');

	if(!header){
		res.locals.requestor.role = roles.GUEST;
		return next();
	}

	const token = header.split(' ')[1];
	let decodedToken;

	try{
		decodedToken = jwt.verify(token , config.auth.SECRET);
		
		userDao.read(decodedToken.userId)
			.then( (user) => {
				if(user){
					res.locals.requestor.user = user;
					res.locals.requestor.role = user.isAdmin ? roles.ADMIN : roles.USER;
				} else{
					next(new Error(`Token belongs to nonexistant User. id: ${decodedToken.userId}`) );
				}
				next();
			})
			.catch( (err) => {
				err.statusCode = 500;
				next(err);
			});
	} catch(err) {
		res.locals.requestor.role = roles.GUEST;
		if(err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError'){
			err.statusCode = 401;
		} else{
			err.statusCode = 500;
		}
		next(err);
	}
};
