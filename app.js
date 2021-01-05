const express = require('express');
const bodyParser = require('body-parser');
// const headerSetter = require('./middleware/headerSetter');
const cors = require('cors');

const productRoutes = require('./routes/product');
const userRoutes = require('./routes/users');

const app = express();

app.use(cors() );
// app.use(headerSetter() );
app.use(bodyParser.json() );

app.use('/api/user' , userRoutes);
app.use('/api/product' , productRoutes);

app.listen(8080);
