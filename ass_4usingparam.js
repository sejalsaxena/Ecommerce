var exp = require('express');

var app = exp();

app.listen(8100,function(){
     console.log("server stsrted at 8100");
});

/*app.get('/welcome',function(req,res){
     res.send("<h1> WELCOME "+req.query.nm+"</h1>");
});

app.get('/products/:id',function(req,res){
     res.send("Info about product id : "+req.params.id);
});*/

app.get('/login/:id/:pwd',function(req,res){
     res.send("login id "+req.params.id+" and password: "+req.params.pwd);

});

/*app.get('/products',function(req,res){
     res.send("Info about all products");
});

app.all('/*', function(req,res){
    res.send("Invalid request");
*/


