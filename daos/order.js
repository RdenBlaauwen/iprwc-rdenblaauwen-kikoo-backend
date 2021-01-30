const{Op} = require('sequelize');
const db = require('../models/index');
const Order = db.Order;
const OrderProduct = db.OrderProduct;
const Product = db.Product;

exports.read = (id = null) => {
	if(id){
		return Order.findByPk(id , {include: Product});
	}
	return Order.findAll({include: Product});
};

exports.update = (inputData) => {
	return this.read(inputData.id).then( (order) => {
		order.status = inputData.status;
		return order.save();
	});
};

exports.delete = (id) => {
	let orderToDelete;
	return this.read(id)
		.then( (order) => {
			orderToDelete = order;
			// const orderProducts = order.Products.map( (product) => {
			// 	return product.OrderProduct;
			// });
			// console.log('orderProducts: ' , orderProducts);
			return OrderProduct.destroy({where: {OrderId: order.id} });
		})
		.then(async(result) => {
			console.log('res orderProducts: ' , result);
			await Order.destroy({where: {id: orderToDelete.id} });
			return orderToDelete;
		});
};
