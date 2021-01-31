const{v4} = require('uuid');

const Util = require('../util/helpers');

const db = require('../models/index');
const Product = db.Product;

exports.read = (id = null) => {
	if(id){
		return Product.findByPk(id);
	}
		
	return Product.findAll();
};

exports.create = (data) => {
	data.id = v4();
	return Product.create(data);
};

exports.update = (data) => {
	return this.read(data.id).then( (product) => {
		const updatedData = Util.assign(product.get() , data , ['id'] );
		product.set(updatedData);
		return product.save();
	});
};

exports.delete = (id) => {
	let productToDelete;
	return this.read(id)
		.then( (product) => {
			productToDelete = product;
			return product.destroy();
		})
		.then( () => {
			return productToDelete;
		});
};
