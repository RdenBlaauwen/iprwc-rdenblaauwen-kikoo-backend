const db = require('../../models/index');
const Product = db.Product;


exports.get = (req , res) => {
	Product.findAll()
		.then( (products) => {
			res.status(200).json(products);
		})
		.catch( (err) => { 
			console.log(err); 
		});
};