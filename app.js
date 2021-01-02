const express = require('express');
const bodyParser = require('body-parser');

// import helper funciton to keep track of paths
const paths = require('./util/paths');
const rootPaths = paths.generate(paths.pathTree);

const headerSetter = require('./middleware/headerSetter');

const productRoutes = require('./routes/product');

const app = express();

app.use(bodyParser.json() );
app.use(headerSetter() );

app.use(rootPaths.api.product._path , productRoutes);

app.listen(8080);
