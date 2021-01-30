const db = require('../models/index');
const Order = db.Order;
const Product = db.Product;

exports.read = (id = null) => {
	if(id){
		return Order.findByPk(id , {include: Product});
	}
	return Order.findAll({include: Product});
};

// exports.update=(inputData)=>{
//     Order.findByPk(inputData.id).then(order=>{
//         order.
//     })
// }
