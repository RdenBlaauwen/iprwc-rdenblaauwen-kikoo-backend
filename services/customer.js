const customerDao = require('../daos/customer');

exports.get = (req , res , next) => {
	customerDao.read()
		.then( (customers) => {
			console.log(customers);
			res.status(200).json(customers);
		})
		.catch( (err) => {
			next(err);
		});
};

exports.patch = (req , res , next) => {
	customerDao.update(req.body)
		.then( (customer) => {
			res.status(200).json(customer);
		})
		.catch( (err) => {
			next(err);
		});
}
;
