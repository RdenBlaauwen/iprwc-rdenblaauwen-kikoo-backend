const{v4} = require('uuid');
const db = require('../models/index');
const Order = db.Order;
const Customer = db.Customer;
const Product = db.Product;
const OrderProduct = db.OrderProduct;
const customerService = require('./customer');

exports.post = async(req , res , next) => {
	const orderData = req.body;
	const customerData = orderData.customer;
	delete orderData.customer;
	const orderProducts = orderData.orderProducts;
	// delete orderData.orderProducts;
	orderData.id = v4();
    
	let user = res.locals.requestor.user;
	let customer = await customerService.findByEmail(customerData.email).catch( (err) => { 
		next(err); 
	});
	//TODO: refactor this horror code
	if(user && customer && !customer.user){
		user = await user.setCustomer(customer).catch( (err) => {
			next(err);
		});
		res.locals.requestor.user = user;
	}
	if(customer){
		//TODO: find a way to use destructuring, without overwriting things like the id
		customer.firstName = customerData.firstName;
		customer.lastName = customerData.lastName;
		customer.phoneNumber = customerData.phoneNumber;
		customer.country = customerData.country;
		customer.city = customerData.city;
		customer.street = customerData.street;
		customer.houseNumber = customerData.houseNumber;
		customer.postalCode = customerData.postalCode;
        
		customer = await customer.save().catch( (err) => {
			next(err);
		});
	} else{
		customerData.id = v4();
		if(user){
			customer = await user.createCustomer(customerData).catch( (err) => {
				next(err);
			});
		} else{
			customer = await Customer.create(customerData).catch( (err) => {
				next(err);
			});
		}
	}
	
    
	let newOrder;
	await customer.createOrder(orderData)
		.then( (order) => {
			newOrder = order;
			return newOrder.setCustomer(customer);
		})
		.then( () => {
			const ids = orderProducts.map( (orderProduct) => {
				return orderProduct.product.id;
			});
            
			return Product.findAll({where: {id: ids} });
		})
		.then( (products) => {
			const productsWithOrderProduct = products.map( (product) => {
				const orderProduct = orderProducts.find( (orderProduct) => {
					return orderProduct.product.id === product.id;
				});
				product.OrderProduct = {amount: orderProduct.amount};

				return product;
			});
			return newOrder.addProducts(productsWithOrderProduct , 
				{
					through: OrderProduct
				});
		})
		.then( () => {
			return Order.findByPk(newOrder.id , {include: [Product , Customer] });
		})
		.then( (orderWithProducts) => {
			res.status(200).json(orderWithProducts);
		})
		.catch( (err) => {
			next(err);
		});
	//TODO: fix errors not being catched withing catch blocks.
};
