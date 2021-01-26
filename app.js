const config = require('./config/config.js');

const bodyParser = require('body-parser') , 
	cors = require('cors') , 
	express = require('express') ,
	fs = require('fs') , 
	helmet = require('helmet') ,
	https = require('https');

const{determine} = require('./middleware/authentication') , 
	orderRoutes = require('./routes/order') , 
	productRoutes = require('./routes/product') , 
	userRoutes = require('./routes/user');

const app = express();

app.use(cors() );
app.use(helmet() );
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
	console.error(err);
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

const options = {
	key    : fs.readFileSync(config.tls.PRIVATE_KEY) ,
	cert   : fs.readFileSync(config.tls.FULLCHAIN) , // mogelijk moet ik de andere chain hebben. Lees je in/kijk vids
	dhparam: fs.readFileSync(config.tls.DH_PARAM)
};

https.createServer(options , app).listen(config.server.PORT , config.server.HOST);
