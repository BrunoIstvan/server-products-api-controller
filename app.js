var express = require('express');
var bp = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var department_controller = require('./department_controller');
var product_controller = require('./product_controller');

var app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/http_app', 
                 { useNewUrlParser: true } );

app.use('/departments', department_controller);                 
app.use('/products', product_controller);

app.listen(3000, () => {  console.log('Servidor executando'); });
