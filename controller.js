var app = require('./index.js');
var db = app.get('db');

module.exports = {
   createProduct: function(req, res){
      db.create_product([
         req.body.name,
         req.body.description,
         req.body.price,
         req.body.imageUrl
      ], function(err, results){
         if(err){
            console.error(err);
            return res.send(err);
         }
         res.send(results);
      });
   },
   getProduct: function(req, res){
      db.read_product([req.params.productId], function(err, results){
         if(err){
            console.error(err);
            return res.send(err);
         }
         if(results.length == 0){
            res.status(404).send("Product not found");
         }
         res.send(results[0]);
      });
   },
   getProducts: function(req, res){
      db.read_products([], function(err, results){
         if(err){
            console.error(err);
            return res.send(err);
         }
         res.send(results);
      });
   },
   updateProduct: function(req, res){
      db.update_product([
         req.params.productId,
         req.body.name,
         req.body.description,
         req.body.price,
         req.body.imageUrl
      ], function(err, results){
         if(err){
            console.error(err);
            return res.send(err);
         }
         if(results.length == 0){
            res.status(404).send("Product not found");
         }
         res.send(results);
      });
   },
   deleteProduct: function(req, res){
      db.delete_product([
         req.params.productId
      ], function(err, results){
         if(err){
            console.error(err);
            return res.send(err);
         }
         if(results.length == 0){
            res.status(404).send("Product not found");
         }
         res.send(results);
      });
   }

}