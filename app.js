const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const bcrypt = require('bcryptjs');

const{determine} = require('./middleware/authentication');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/users');

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
	console.log('requestor: ' , res.locals.requestor);
	next();
});

app.use('/api/user' , userRoutes);
app.use('/api/product' , productRoutes);


app.use( (error , req , res) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({message: message , data});
});

app.listen(8080);
