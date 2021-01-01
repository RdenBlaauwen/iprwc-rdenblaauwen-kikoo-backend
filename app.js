const express = require('express');
const bodyParser = require('body-parser');
const headerSetter = require('./middleware/headerSetter');

const productRoutes = require('./routes/product');

const app = express();

app.use(bodyParser.json() );
app.use(headerSetter() );

app.use('/product' , productRoutes);

app.listen(8080);
