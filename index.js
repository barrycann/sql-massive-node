var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var connectionString = "postgres://postgres@localhost/storehouse";
var massiveInstance = massive.connectSync({connectionString:connectionString});

var app = module.exports = express();
app.use(bodyParser.json());
app.set('db', massiveInstance);
var mainCtrl = require('./controller.js');

app.post('/api/products', mainCtrl.createProduct);
app.get('/api/products/:productId', mainCtrl.getProduct);
app.get('/api/products', mainCtrl.getProducts);
app.put('/api/products/:productId', mainCtrl.updateProduct);
app.delete('/api/products/:productId', mainCtrl.deleteProduct);

var port = 8080;

app.listen(port, function(){
   console.log("Listening on port " + port + " ...");
});