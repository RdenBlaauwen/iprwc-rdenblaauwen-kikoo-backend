'use strict';
const{Product} = require('../models/index');
const{v4} = require('uuid');

// const tableName = 'product';
const records = [
	{
		name       : 'Georgische encyclopedie' ,
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum aperiam corporis veritatis assumenda sapiente quia amet nobis iusto eius mollitia libero qui fugit eaque. Tempora in fugit hic eos?' ,
		imageUrl   : 'https://upload.wikimedia.org/wikipedia/commons/0/09/Encyclopedia_-_Georgia.jpg' ,
		stock      : 200 ,
		price      : 39.98
	} ,
	{
		name       : 'Kruidengeneeskundig boek' ,
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum aperiam corporis veritatis assumenda sapiente quia amet nobis iusto eius mollitia libero qui fugit eaque. Tempora in fugit hic eos?' ,
		imageUrl   : 'https://c.pxhere.com/photos/76/13/antiquariat_old_cookbook_antiquarian_cookbook_book_antique_cookbook_cookbook-452472.jpg!d' ,
		stock      : 1 ,
		price      : 549.50
	} ,
	{
		name       : 'Murder In Old Bombay' ,
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum aperiam corporis veritatis assumenda sapiente quia amet nobis iusto eius mollitia libero qui fugit eaque. Tempora in fugit hic eos?' ,
		imageUrl   : 'https://fromtheauthors.files.wordpress.com/2020/12/murder-in-old-bombay.png' ,
		stock      : 150 ,
		price      : 25
	} ,
	{
		name       : 'Romeo & Juliet' ,
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum aperiam corporis veritatis assumenda sapiente quia amet nobis iusto eius mollitia libero qui fugit eaque. Tempora in fugit hic eos?' ,
		imageUrl   : 'https://images-na.ssl-images-amazon.com/images/I/81agdswpxAL.jpg' ,
		stock      : 400 ,
		price      : 14.99
	} ,
	{
		name       : 'She: A History of Adventure' ,
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum aperiam corporis veritatis assumenda sapiente quia amet nobis iusto eius mollitia libero qui fugit eaque. Tempora in fugit hic eos?' ,
		imageUrl   : 'https://images-na.ssl-images-amazon.com/images/I/81Ccf2K0axL.jpg' ,
		stock      : 180 ,
		price      : 29.99
	} ,
	{
		name       : 'The Lion, the Witch and the Wardrobe' ,
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum aperiam corporis veritatis assumenda sapiente quia amet nobis iusto eius mollitia libero qui fugit eaque. Tempora in fugit hic eos?' ,
		imageUrl   : 'https://www.memoriapress.com/wp-content/uploads/2012/03/LionWitchWardrobe.jpg' ,
		stock      : 150 ,
		price      : 28.50
	} ,
	{
		name       : 'The Hobbit' ,
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum aperiam corporis veritatis assumenda sapiente quia amet nobis iusto eius mollitia libero qui fugit eaque. Tempora in fugit hic eos?' ,
		imageUrl   : 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg' ,
		stock      : 450 ,
		price      : 34.99
	} ,
	{
		name       : 'Dream of the Red Chamber' ,
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum aperiam corporis veritatis assumenda sapiente quia amet nobis iusto eius mollitia libero qui fugit eaque. Tempora in fugit hic eos?' ,
		imageUrl   : 'https://images-na.ssl-images-amazon.com/images/I/81UjsCGC6rL.jpg' ,
		stock      : 50 ,
		price      : 11.98
	} ,
	{
		name       : 'The Little Prince' ,
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum aperiam corporis veritatis assumenda sapiente quia amet nobis iusto eius mollitia libero qui fugit eaque. Tempora in fugit hic eos?' ,
		imageUrl   : 'https://images-na.ssl-images-amazon.com/images/I/81G2R0luQJL.jpg' ,
		stock      : 350 ,
		price      : 26.98
	} ,
	{
		name       : 'Harry Potter and the Philosopher\'s Stone' ,
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum aperiam corporis veritatis assumenda sapiente quia amet nobis iusto eius mollitia libero qui fugit eaque. Tempora in fugit hic eos?' ,
		imageUrl   : 'https://cdn.shopify.com/s/files/1/1416/8662/products/harry_potter_and_the_philosophers_stone_2001_daybill_original_film_art_1200x.jpg?v=1580776459' ,
		stock      : 550 ,
		price      : 39.99
	} ,
];

module.exports = {
	up: async() => {
		const recordsWithIds = records.map( (record) => {
			record.id = v4();
			return record;
		});
		return Product.bulkCreate(recordsWithIds);
	} ,

	down: async() => {
		return Product.destroy();
	}
};
