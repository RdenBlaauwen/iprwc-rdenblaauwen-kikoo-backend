const db = require('../models/index');
const Customer = db.Customer;

exports.findByEmail = async(email) => {
	const customer = await Customer.findAll({where: {email} })
		.catch( (err) => { 
			throw err; 
		});

	if(customer.length > 1){
		throw new Error(`CustomerService: Customer.email table may not be unique. Expected 1 customer with email "${email}", found ${customer.length} instead.`);
	}
	
	return customer.length === 1 ? customer[0] : null; 
};
