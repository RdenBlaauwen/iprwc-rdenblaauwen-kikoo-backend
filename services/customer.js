const customerDao = require('../daos/customer');

const fixCustomer = (customer) => {
	const data = customer.get();
	delete data.UserId;
	delete data.User;
	data.user = customer.UserId; //TODO: test if this is actually the right field
	return data;
};

exports.get = (req , res , next) => {
	customerDao.read()
		.then( (customers) => {
			customers = customers.map(fixCustomer);
			res.status(200).json(customers);
		})
		.catch( (err) => {
			next(err);
		});
};

exports.patch = (req , res , next) => {
	customerDao.update(req.body)
		.then( (customer) => {
			customer = fixCustomer(customer);
			res.status(200).json(customer);
		})
		.catch( (err) => {
			next(err);
		});
};

exports.delete = (req , res , next) => {
	customerDao.delete(req.params.id)
		.then( (customer) => {
			customer = fixCustomer(customer);
			res.status(200).json(customer);
		})
		.catch( (err) => {
			next(err);
		});
};
