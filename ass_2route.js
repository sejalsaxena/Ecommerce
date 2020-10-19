var exp = require('express');

var app = exp();

app.listen(8100, function() {
     console.log("server started on port 8100");
});

app.get('/home',function(req,res){
     res.send("<h2> Welcome to WEB App </h2>");
});

/*app.get('/info',function(req,res){
     res.send("<p> Info Page </p>");
});

app.get('/home.html',function(req,res){
     res.sendFile(__dirname+'/home.html');
});

app.all('/*',function(req,res){
      res.send("Invalid URL");	
});*/



