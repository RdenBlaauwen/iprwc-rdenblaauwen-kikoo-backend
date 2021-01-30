const productDao = require('../daos/product');

exports.get = (req , res , next) => {
	productDao.read()
		.then( (products) => {
			res.status(200).json(products);
		})
		.catch( (err) => { 
			next(err);
		});
};

exports.post = (req , res , next) => {
	productDao.create(req.body)
		.then( (product) => {
			res.status(200).json(product);
		})
		.catch( (err) => {
			next(err);
		});
};

exports.patch = (req , res , next) => {
	productDao.update(req.body)
		.then( (product) => {
			res.status(200).json(product);
		})
		.catch( (err) => {
			next(err);
		});
};

exports.delete = (req , res , next) => {
	productDao.delete(req.params.id)
		.then( (product) => {
			res.status(200).json(product);
		})
		.catch( (err) => {
			next(err);
		});
};
