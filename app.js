const express = require('express');
const bodyParser = require('body-parser');
const headerSetter = require('./middleware/headerSetter');

const productRoutes = require('./routes/product');

const app = express();

app.use(bodyParser.json() );
app.use(headerSetter() );

// app.use( (req , res , next) => {
// 	res.kek = 2 + 2;
// 	let kak = {
// 		ame         : 8790 ,
// 		one         : 1 , 
// 		threehundred: 300 ,
// 		two         : 2
// 	};
// 	console.log(req.body);
// 	res.status(404).json(kak);
// 	next();
// });


app.use('/product' , productRoutes);

// const{User} = require('./models/index');

// const admin = User.build(
// 	{
// 		password: 'fake' ,
// 		username: 'ShopAdmin' ,
// 		isAdmin : true
// 	}
// );
// console.log('admin seeder' , admin);

app.listen(8080);
