// const db = require('../../models/index');
// const User = db.User;

exports.post = (req , res) => {
	console.log(req.body);
	// User.create(req.body.user)
	res.status(200).json(req.body);
};
