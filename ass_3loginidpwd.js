var exp = require('express');

var app = exp();

app.listen(8100, function() {
     console.log("server started on port 8100");
});



app.get('/login.html',function(req,res){
res.sendFile(__dirname+'/login.html');
});

app.get('/login',function(req,res){
var uid=req.query.unam;
var pass=req.query.pwd;
if(uid=="object" && pass=="knowit")
{

     res.send("<h1>welcome to login page</h1>");}
else{
res.send("<h1 style='color:red'>Wrong id and password</h1>");}
});