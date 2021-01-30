const db = require('../models/index');
const Product = db.Product;

exports.get = (req , res , next) => {
	Product.findAll()
		.then( (products) => {
			res.status(200).json(products);
		})
		.catch( (err) => { 
			next(err);
		});
};
