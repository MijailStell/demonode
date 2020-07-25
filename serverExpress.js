var express = require('express');
var app = express();

app.use(function(req, res, next){
    console.log("LOGGER", req.method);
    next();
});

app.get('/hello', function(req, res){
    res.send("Hello GET");
});

app.post('/users', function(req, res){
    res.send("Hello Post");
});

app.listen(4000, function(){
    console.log("servidor desplegado");    
}).on('error', function(err){
});