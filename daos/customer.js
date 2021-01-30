const Util = require('../util/helpers');

const db = require('../models/index');
const Customer = db.Customer , 
	User = db.User;

const propertyBlacklist = ['id' , 'User' , 'UserId' , 'createdAt' , 'updatedAt'];

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

exports.read = (id = null) => {
	if(id){
		return Customer.findByPk(id , {include: User});
	}
	return Customer.findAll({include: User});
};

exports.update = (data) => {
	return this.read(data.id).then( (customer) => {
		const updatedData = Util.assign(customer.get() , data , propertyBlacklist);
		customer.set(updatedData);
		return customer.save();
	});
};
