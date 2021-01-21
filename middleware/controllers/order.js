const{v4} = require('uuid');
const db = require('../../models/index');
const order = require('../../models/order');
const Order = db.Order;
const Customer = db.Customer;
const Product = db.Product;
const OrderProduct = db.OrderProduct;
const customerController = require('./customer');

// const read = function(id = null){
// 	if(id){
// 		return User.findByPk(id);
// 	}

// 	return User.findAll();
// };
// 
// exports.read = read;


exports.post = async(req , res , next) => {
	const orderData = req.body;
	const ordererData = orderData.orderer;
	delete orderData.orderer;
	const orderProducts = orderData.orderProducts;
	// delete orderData.orderProducts;
	orderData.id = v4();
    
	let user = res.locals.requestor.user;
	let customer = await customerController.findByEmail(ordererData.email).catch( (err) => { 
		next(err); 
	});
	//TODO: refactor this horror code
	if(user && customer && !customer.user){
		user = await user.setCustomer(customer).catch( (err) => {
			next(err);
		});
		res.locals.requestor.user = user;
		console.log('User.setCustomer: ' , user);
	}
	if(customer){
		customer.firstName = ordererData.firstName;
		customer.lastName = ordererData.lastName;
		customer.phoneNumber = ordererData.phoneNumber;
		customer.country = ordererData.country;
		customer.city = ordererData.city;
		customer.street = ordererData.street;
		customer.houseNumer = ordererData.houseNumer;
		customer.postalCode = ordererData.postalCode;
        
		customer = await customer.save().catch( (err) => {
			next(err);
		});
		console.log('Customer.save: ' , customer);
	} else{
		ordererData.id = v4();
		if(user){
			customer = await user.createCustomer(ordererData).catch( (err) => {
				next(err);
			});
			console.log('User.createCustomer: ' , customer);
		} else{
			customer = await Customer.create(ordererData).catch( (err) => {
				next(err);
			});
			console.log('Customer.create: ' , customer);
		}
	}
	
    
	let newOrder;
	await customer.createOrder(orderData)
		.then( (order) => {
			console.log('Customer.createOrder: ' , order);
			newOrder = order;
			return newOrder.setCustomer(customer);
		})
		.then( () => {
			const ids = orderProducts.map( (orderProduct) => {
				return orderProduct.product.id;
			});
			// console.log('id data:' , orderProducts , ids);
            
			return Product.findAll({where: {id: ids} });
		})
		.then( (products) => {
			const productsWithOrderProduct = products.map( (product) => {
				const orderProduct = orderProducts.find( (orderProduct) => {
					return orderProduct.product.id === product.id;
				});
				product.OrderProduct = {amount: orderProduct.amount};
				console.log('amount: ' , product.OrderProduct);
				return product;
			});
            
			return newOrder.addProducts(productsWithOrderProduct , 
				{
					through: OrderProduct
				});
		})
		.then( () => {
			return Order.findByPk(newOrder.id , {include: [Product] });
		})
		.then( (orderWithProducts) => {
			console.log(orderWithProducts);
			res.status(200).json(orderWithProducts);
		})
		.catch( (err) => {
			console.log('orderData went wrong...');
			next(err);
		});
	//TODO: fix errors not being catched withing catch blocks.
};
