const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const bcrypt = require('bcryptjs');

const{determine} = require('./middleware/authentication');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');

// bcrypt.hash('janjansen',12).then(hash=>{
//     bcrypt.compare()
// })

// const transactionPrinter = (req , res , next) => {
// 	console.log('----NEXT----' , '\n1');
// };

const app = express();

app.use(cors() );
app.use(bodyParser.json() );

app.use(determine);

app.use( (req , res , next) => {
	console.log('requestor: ' , res.locals.requestor.role);
	next();
});

app.use('/api/user' , userRoutes);
app.use('/api/product' , productRoutes);
app.use('/api/order' , orderRoutes);


app.use( (err , req , res , next) => {
	console.log(err);
	if(res.headersSent){
		return next(err);
	}
	
	const status = err.statusCode || 500;
	res.status(status).json(
		{
			message: err.message , 
			data   : err.data
		}
	);
});

app.listen(8080);
