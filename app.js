const express = require('express');
const bodyParser = require('body-parser');
// const headerSetter = require('./middleware/headerSetter');
const cors = require('cors');
// const bcrypt = require('bcryptjs');

const productRoutes = require('./routes/product');
const userRoutes = require('./routes/users');

// bcrypt.hash('janjansen',12).then(hash=>{
//     bcrypt.compare()
// })

const app = express();

app.use(cors() );
// app.use(headerSetter() );
app.use(bodyParser.json() );

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
