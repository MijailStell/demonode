var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello GET");
});

app.post('/users', function(req, res){
    res.send("Hello Post");
});

app.listen(3000, function(){
    console.log("servidor desplegado");    
}).on('error', function(err){
});