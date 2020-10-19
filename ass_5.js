var exp = require('express');

var app = exp();

app.listen(8100,function(){
     console.log("server stsrted at 8100");
});
app.all('/*', function(req,res){
    res.send("Invalid request");